"""
Methodology Plating Studio - Flask Backend for Heroku
Uses Google Gemini 2.0 Flash for AI-powered plating analysis
"""

import os
import json
import base64
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__, static_folder='.', static_url_path='')
CORS(app)

# Configure Gemini
GOOGLE_API_KEY = os.environ.get('GOOGLE_API_KEY')
if GOOGLE_API_KEY:
    genai.configure(api_key=GOOGLE_API_KEY)

# PH2030-Trotter System Prompt for Plating Analysis
PLATING_ANALYSIS_PROMPT = """You are PH2030-Trotter, an AI trained on Charlie Trotter's plating philosophy combined with modern food photography analysis.

Analyze this plating photo and return a JSON object with the following structure:

{
    "container_type": "bento|jar_6oz|jar_12oz|jar_16oz|jar_24oz",
    "components": [
        {
            "name": "component name",
            "zone": "P1_protein_axis|P2_right_strips|P3_upper_arc|P4_lower_arc|cup_zone",
            "portion_estimate_oz": 0.0,
            "bounding_box": {"x": 0.0, "y": 0.0, "width": 0.0, "height": 0.0}
        }
    ],
    "plating_score": {
        "geometry": 0-100,
        "color_harmony": 0-100,
        "negative_space": 0-100,
        "edge_discipline": 0-100,
        "overall": 0-100
    },
    "plating_instructions": [
        "Step 1: ...",
        "Step 2: ..."
    ],
    "food_science": {
        "moisture_migration_risk": "low|medium|high",
        "oxidation_risk": "low|medium|high",
        "shelf_stability_hours": 0,
        "recommended_storage": "refrigerated|frozen"
    },
    "improvement_suggestions": ["suggestion 1", "suggestion 2"]
}

Be precise with bounding boxes (normalized 0.0-1.0). Provide actionable plating instructions that kitchen staff can reproduce."""

# Plating instructions generation prompt
PLATING_INSTRUCTIONS_PROMPT = """You are a Michelin-star chef creating precise plating instructions for a meal prep kitchen.

Given the following meal details, generate detailed plating instructions:

Meal: {meal_name}
Container: {container_type}
Components: {components}
Portion Style: {portion_style}
Macro Target: {macro_target}

Return a JSON object with:
{{
    "meal_name": "...",
    "container_type": "...",
    "zone_assignments": [
        {{"component": "...", "zone": "...", "placement": "...", "portion_oz": 0.0}}
    ],
    "step_by_step": [
        {{"step": 1, "action": "...", "detail": "...", "time_seconds": 0}}
    ],
    "quality_checkpoints": ["checkpoint 1", "checkpoint 2"],
    "common_mistakes": ["mistake 1", "mistake 2"],
    "total_assembly_time_seconds": 0
}}

Be specific about placement (use clock positions for bento, layer order for jars).
Include visual cues for portion sizes."""


@app.route('/')
def index():
    return send_from_directory('.', 'index.html')


@app.route('/assets/<path:path>')
def serve_assets(path):
    return send_from_directory('assets', path)


@app.route('/api/health', methods=['GET'])
def health_check():
    return jsonify({
        "status": "healthy",
        "gemini_configured": GOOGLE_API_KEY is not None
    })


@app.route('/api/analyze-plating', methods=['POST'])
def analyze_plating():
    """Analyze a plating photo using Gemini Vision"""
    if not GOOGLE_API_KEY:
        return jsonify({"error": "Google API key not configured"}), 500

    try:
        # Get image from request
        if 'image' not in request.files:
            # Check for base64 image in JSON
            data = request.get_json()
            if not data or 'image_base64' not in data:
                return jsonify({"error": "No image provided"}), 400
            image_data = base64.b64decode(data['image_base64'])
        else:
            image_data = request.files['image'].read()

        # Initialize Gemini model
        model = genai.GenerativeModel('gemini-2.0-flash-exp')

        # Create image part for Gemini
        image_part = {
            "mime_type": "image/jpeg",
            "data": base64.b64encode(image_data).decode('utf-8')
        }

        # Generate analysis
        response = model.generate_content([
            PLATING_ANALYSIS_PROMPT,
            image_part
        ])

        # Parse JSON from response
        response_text = response.text
        # Extract JSON from markdown code blocks if present
        if '```json' in response_text:
            response_text = response_text.split('```json')[1].split('```')[0]
        elif '```' in response_text:
            response_text = response_text.split('```')[1].split('```')[0]

        analysis = json.loads(response_text.strip())

        return jsonify({
            "success": True,
            "analysis": analysis
        })

    except json.JSONDecodeError as e:
        return jsonify({
            "error": "Failed to parse AI response",
            "raw_response": response_text if 'response_text' in locals() else None
        }), 500
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route('/api/generate-instructions', methods=['POST'])
def generate_instructions():
    """Generate plating instructions from meal details"""
    if not GOOGLE_API_KEY:
        return jsonify({"error": "Google API key not configured"}), 500

    try:
        data = request.get_json()

        required_fields = ['meal_name', 'container_type', 'components']
        for field in required_fields:
            if field not in data:
                return jsonify({"error": f"Missing required field: {field}"}), 400

        # Format the prompt
        prompt = PLATING_INSTRUCTIONS_PROMPT.format(
            meal_name=data['meal_name'],
            container_type=data['container_type'],
            components=data['components'],
            portion_style=data.get('portion_style', 'standard'),
            macro_target=data.get('macro_target', 'balanced')
        )

        # Initialize Gemini model
        model = genai.GenerativeModel('gemini-2.0-flash-exp')

        # Generate instructions
        response = model.generate_content(prompt)

        # Parse JSON from response
        response_text = response.text
        if '```json' in response_text:
            response_text = response_text.split('```json')[1].split('```')[0]
        elif '```' in response_text:
            response_text = response_text.split('```')[1].split('```')[0]

        instructions = json.loads(response_text.strip())

        return jsonify({
            "success": True,
            "instructions": instructions
        })

    except json.JSONDecodeError as e:
        return jsonify({
            "error": "Failed to parse AI response",
            "raw_response": response_text if 'response_text' in locals() else None
        }), 500
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route('/api/nano-banana/generate', methods=['POST'])
def nano_banana_generate():
    """
    Nano Banana integration endpoint
    Takes plating analysis and generates prompts for AI image generation
    """
    if not GOOGLE_API_KEY:
        return jsonify({"error": "Google API key not configured"}), 500

    try:
        data = request.get_json()

        # Generate a Nano Banana / Midjourney compatible prompt
        model = genai.GenerativeModel('gemini-2.0-flash-exp')

        prompt = f"""Based on these plating details, generate a Midjourney/Nano Banana compatible prompt for creating professional food photography:

Meal: {data.get('meal_name', 'gourmet meal')}
Components: {data.get('components', [])}
Container: {data.get('container_type', 'bento')}
Style: Luxury meal prep, professional food photography, editorial quality

Return a JSON object with:
{{
    "midjourney_prompt": "detailed prompt for Midjourney...",
    "nano_banana_settings": {{
        "style": "food_photography",
        "lighting": "soft_diffused",
        "angle": "45_degree_overhead",
        "background": "neutral_gradient"
    }},
    "ingredient_isolation_prompts": ["prompt for isolating each key ingredient..."]
}}
"""

        response = model.generate_content(prompt)

        response_text = response.text
        if '```json' in response_text:
            response_text = response_text.split('```json')[1].split('```')[0]
        elif '```' in response_text:
            response_text = response_text.split('```')[1].split('```')[0]

        prompts = json.loads(response_text.strip())

        return jsonify({
            "success": True,
            "prompts": prompts
        })

    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=False)
