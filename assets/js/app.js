/**
 * Methodology Food Mood - Taste Profile Powered Meal Builder
 * Based on Julie & Stephen's preferences from 50+ R&D sessions
 */

const API_BASE = window.location.origin;

// ============================================
// JULIE & STEPHEN TASTE PROFILES
// Extracted from Fireflies, OKRs, and Google Drive
// ============================================

const TASTE_PROFILES = {
    julie: {
        name: "Julie's Vision",
        priorities: [
            "Taste over strict macros",
            "Instagrammable presentation",
            "Consistent execution",
            "Functional ingredients (adaptogens, GLP-1)",
            "Fresh, high-quality ingredients",
            "Ease of preparation"
        ],
        likes: [
            "seasonal salads", "honey dijon", "lacquered finishes",
            "celery leaves", "buffalo barrata", "bright colors",
            "nervous system soothing foods", "GLP-1 boosting",
            "crispy textures", "premium packaging"
        ],
        dislikes: [
            "gritty textures", "overcooked fish", "cheap ingredients",
            "inconsistent taste", "complex preparation", "pre-bagged herbs"
        ],
        trendPosition: "TRENDING", // Not fringe, not cliche
        benchmark: "Would it make someone feel calm and excited at the same time?"
    },
    stephen: {
        name: "Stephen's Aesthetic",
        priorities: [
            "Elevation of familiar concepts",
            "Premium locally-sourced ingredients",
            "Bright colors & rainbow palettes",
            "Lacquered and caramelized finishes",
            "Contrasting textures",
            "Shingled presentation"
        ],
        likes: [
            "rainbow palettes", "lacquered radicchio", "kyoto carrots",
            "sous vide proteins", "crispy rice", "miso-cured egg yolk",
            "feta mousse", "truffle", "confit techniques",
            "honey butter glazes"
        ],
        dislikes: [
            "cheap generic ingredients", "monochrome plates",
            "inconsistent portioning", "poor photography potential"
        ],
        benchmark: "The Erewhon Test - Would this be sold at Erewhon?"
    }
};

// OKR-Aligned Constraints
const OKR_CONSTRAINTS = {
    targetMargin: 47, // 47% gross margin target
    maxCOGS: 53,
    laborTarget: 14,
    foodTarget: 15.2,
    packagingTarget: 7.3,
    priorityIngredients: [
        "chicken breast", "flank steak", "salmon", "cod", "shrimp",
        "tofu", "broccolini", "asparagus", "spinach"
    ]
};

// ============================================
// INGREDIENT & MEAL DATABASE
// Based on top ingredients and R&D decisions
// ============================================

const INGREDIENTS = {
    proteins: [
        { id: 'chicken-breast', name: 'Grilled Chicken Breast', color: 'food-chicken', julieScore: 85, stephenScore: 80, cost: 'low' },
        { id: 'flank-steak', name: 'Grass-Fed Flank Steak', color: 'food-steak', julieScore: 90, stephenScore: 95, cost: 'medium' },
        { id: 'salmon', name: 'Farm-Raised Salmon', color: 'food-salmon', julieScore: 95, stephenScore: 90, cost: 'medium' },
        { id: 'cod', name: 'Pacific Cod', color: 'food-chicken', julieScore: 80, stephenScore: 75, cost: 'medium' },
        { id: 'shrimp', name: 'Gulf Shrimp', color: 'food-salmon', julieScore: 85, stephenScore: 88, cost: 'medium' },
        { id: 'tofu', name: 'Hodo Soy Tofu', color: 'food-tofu', julieScore: 75, stephenScore: 70, cost: 'low' },
        { id: 'short-rib', name: 'Braised Short Rib', color: 'food-steak', julieScore: 88, stephenScore: 92, cost: 'high' },
        { id: 'meatballs', name: 'Turkey Meatballs', color: 'food-chicken', julieScore: 82, stephenScore: 78, cost: 'low' }
    ],
    starches: [
        { id: 'jasmine-rice', name: 'Jasmine Rice', color: 'food-rice', julieScore: 80, stephenScore: 75 },
        { id: 'quinoa', name: 'Quinoa Pilaf', color: 'food-quinoa', julieScore: 88, stephenScore: 82 },
        { id: 'crispy-rice', name: 'Crispy Rice', color: 'food-rice', julieScore: 92, stephenScore: 95 },
        { id: 'sweet-potato', name: 'Roasted Sweet Potato', color: 'food-carrots', julieScore: 85, stephenScore: 88 },
        { id: 'cauliflower', name: 'Signature Cauliflower', color: 'food-rice', julieScore: 90, stephenScore: 92 },
        { id: 'farro', name: 'Herbed Farro', color: 'food-quinoa', julieScore: 82, stephenScore: 85 }
    ],
    vegetables: [
        { id: 'broccolini', name: 'Charred Broccolini', color: 'food-broccoli', julieScore: 90, stephenScore: 92 },
        { id: 'asparagus', name: 'Grilled Asparagus', color: 'food-asparagus', julieScore: 88, stephenScore: 90 },
        { id: 'carrots', name: 'Honey Butter Carrots', color: 'food-carrots', julieScore: 85, stephenScore: 88 },
        { id: 'spinach', name: 'Sautéed Spinach', color: 'food-broccoli', julieScore: 82, stephenScore: 78 },
        { id: 'radicchio', name: 'Lacquered Radicchio', color: 'food-beets', julieScore: 88, stephenScore: 95 },
        { id: 'kyoto-carrots', name: 'Kyoto Carrots', color: 'food-carrots', julieScore: 90, stephenScore: 95 },
        { id: 'snap-peas', name: 'Crispy Snap Peas', color: 'food-asparagus', julieScore: 85, stephenScore: 82 }
    ],
    sauces: [
        { id: 'teriyaki', name: 'House Teriyaki', color: 'food-sauce', julieScore: 82, stephenScore: 80 },
        { id: 'miso-glaze', name: 'Miso Glaze', color: 'food-sauce', julieScore: 90, stephenScore: 92 },
        { id: 'chimichurri', name: 'Chimichurri', color: 'food-broccoli', julieScore: 88, stephenScore: 85 },
        { id: 'tahini', name: 'Lemon Tahini', color: 'food-quinoa', julieScore: 85, stephenScore: 82 },
        { id: 'ginger-sesame', name: 'Ginger Sesame', color: 'food-sauce', julieScore: 88, stephenScore: 85 },
        { id: 'feta-mousse', name: 'Feta Mousse', color: 'food-rice', julieScore: 92, stephenScore: 95 }
    ]
};

// Meal templates based on R&D decisions
const MEAL_TEMPLATES = {
    asian_fusion: {
        name: "Asian Fusion Bowl",
        description: "Clean, bright flavors with umami depth",
        proteins: ['salmon', 'chicken-breast', 'tofu'],
        starches: ['crispy-rice', 'jasmine-rice'],
        vegetables: ['broccolini', 'snap-peas', 'kyoto-carrots'],
        sauces: ['miso-glaze', 'ginger-sesame', 'teriyaki'],
        julieScore: 92,
        stephenScore: 90,
        erewhon: true
    },
    mediterranean: {
        name: "Mediterranean Plate",
        description: "Bright herbs, grilled proteins, tangy dressings",
        proteins: ['chicken-breast', 'flank-steak', 'shrimp'],
        starches: ['quinoa', 'farro'],
        vegetables: ['asparagus', 'radicchio', 'carrots'],
        sauces: ['chimichurri', 'tahini', 'feta-mousse'],
        julieScore: 90,
        stephenScore: 92,
        erewhon: true
    },
    comfort_elevated: {
        name: "Elevated Comfort",
        description: "Familiar favorites made premium",
        proteins: ['short-rib', 'meatballs', 'chicken-breast'],
        starches: ['sweet-potato', 'cauliflower'],
        vegetables: ['carrots', 'spinach', 'broccolini'],
        sauces: ['teriyaki', 'miso-glaze'],
        julieScore: 88,
        stephenScore: 90,
        erewhon: true
    },
    wellness: {
        name: "Functional Wellness",
        description: "GLP-1 boosting, adaptogenic, gut-friendly",
        proteins: ['salmon', 'tofu', 'cod'],
        starches: ['quinoa', 'cauliflower'],
        vegetables: ['broccolini', 'asparagus', 'spinach'],
        sauces: ['tahini', 'chimichurri'],
        julieScore: 95,
        stephenScore: 85,
        erewhon: true
    },
    rainbow_salad: {
        name: "Rainbow Salad",
        description: "Bright colors, multiple textures, Instagrammable",
        proteins: ['salmon', 'chicken-breast', 'shrimp'],
        starches: ['crispy-rice', 'quinoa'],
        vegetables: ['radicchio', 'kyoto-carrots', 'snap-peas', 'broccolini'],
        sauces: ['ginger-sesame', 'feta-mousse', 'tahini'],
        julieScore: 94,
        stephenScore: 96,
        erewhon: true
    },
    athletic: {
        name: "Athletic Performance",
        description: "High protein, balanced macros, clean energy",
        proteins: ['chicken-breast', 'flank-steak', 'salmon'],
        starches: ['sweet-potato', 'jasmine-rice', 'quinoa'],
        vegetables: ['broccolini', 'asparagus', 'spinach'],
        sauces: ['chimichurri', 'tahini'],
        julieScore: 88,
        stephenScore: 85,
        erewhon: true
    }
};

// ============================================
// DOM ELEMENTS
// ============================================

const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');
const moodInput = document.getElementById('moodInput');
const analyzeBtn = document.getElementById('analyzeBtn');
const moodEcho = document.getElementById('moodEcho');
const suggestionsGrid = document.getElementById('suggestionsGrid');
const loadingOverlay = document.getElementById('loadingOverlay');

// ============================================
// NAVIGATION
// ============================================

function showStep(stepNum) {
    [step1, step2, step3].forEach(s => s.classList.remove('active'));
    document.getElementById(`step${stepNum}`).classList.add('active');
    window.scrollTo(0, 0);
}

document.getElementById('backToStep1').addEventListener('click', () => showStep(1));
document.getElementById('backToStep2').addEventListener('click', () => showStep(2));

// ============================================
// MOOD ANALYSIS & SUGGESTION GENERATION
// ============================================

function analyzeMood(moodText) {
    const mood = moodText.toLowerCase();
    const scores = {};

    // Score each template based on keyword matching
    for (const [key, template] of Object.entries(MEAL_TEMPLATES)) {
        let score = 50; // Base score

        // Asian/fusion keywords
        if (mood.includes('asian') || mood.includes('fusion') || mood.includes('miso') ||
            mood.includes('crispy rice') || mood.includes('japanese') || mood.includes('korean')) {
            if (key === 'asian_fusion') score += 40;
        }

        // Mediterranean keywords
        if (mood.includes('mediterranean') || mood.includes('greek') || mood.includes('herb') ||
            mood.includes('tahini') || mood.includes('feta') || mood.includes('lamb')) {
            if (key === 'mediterranean') score += 40;
        }

        // Comfort keywords
        if (mood.includes('comfort') || mood.includes('cozy') || mood.includes('warm') ||
            mood.includes('pot pie') || mood.includes('mac') || mood.includes('elevated')) {
            if (key === 'comfort_elevated') score += 40;
        }

        // Wellness keywords
        if (mood.includes('wellness') || mood.includes('functional') || mood.includes('glp') ||
            mood.includes('adaptogen') || mood.includes('calm') || mood.includes('gut')) {
            if (key === 'wellness') score += 40;
        }

        // Salad/colorful keywords
        if (mood.includes('salad') || mood.includes('rainbow') || mood.includes('colorful') ||
            mood.includes('bright') || mood.includes('instagram') || mood.includes('photo')) {
            if (key === 'rainbow_salad') score += 40;
        }

        // Athletic keywords
        if (mood.includes('athletic') || mood.includes('protein') || mood.includes('macro') ||
            mood.includes('performance') || mood.includes('gym') || mood.includes('muscle')) {
            if (key === 'athletic') score += 40;
        }

        // Erewhon test mention
        if (mood.includes('erewhon') || mood.includes('premium') || mood.includes('luxury')) {
            score += template.erewhon ? 15 : -10;
        }

        // Specific ingredient mentions
        if (mood.includes('salmon')) {
            if (template.proteins.includes('salmon')) score += 20;
        }
        if (mood.includes('chicken')) {
            if (template.proteins.includes('chicken-breast')) score += 15;
        }
        if (mood.includes('steak') || mood.includes('beef')) {
            if (template.proteins.includes('flank-steak') || template.proteins.includes('short-rib')) score += 20;
        }

        scores[key] = score;
    }

    return scores;
}

function generateSuggestions(moodText) {
    const scores = analyzeMood(moodText);
    const suggestions = [];

    // Sort templates by score
    const sortedTemplates = Object.entries(scores)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 4); // Top 4

    for (const [templateKey, score] of sortedTemplates) {
        const template = MEAL_TEMPLATES[templateKey];

        // Generate 2 variations for top template, 1 for others
        const numVariations = suggestions.length === 0 ? 2 : 1;

        for (let i = 0; i < numVariations; i++) {
            const variation = generateVariation(template, templateKey, i);
            suggestions.push(variation);
        }
    }

    return suggestions.slice(0, 6); // Max 6 suggestions
}

function generateVariation(template, templateKey, varIndex) {
    // Pick specific ingredients
    const protein = INGREDIENTS.proteins.find(p => p.id === template.proteins[varIndex % template.proteins.length]);
    const starch = INGREDIENTS.starches.find(s => s.id === template.starches[varIndex % template.starches.length]);
    const veg1 = INGREDIENTS.vegetables.find(v => v.id === template.vegetables[0]);
    const veg2 = INGREDIENTS.vegetables.find(v => v.id === template.vegetables[1]);
    const sauce = INGREDIENTS.sauces.find(s => s.id === template.sauces[varIndex % template.sauces.length]);

    // Determine container type
    const containerTypes = ['bento', 'bento', 'jar', 'bowl'];
    const container = containerTypes[varIndex % containerTypes.length];

    // Calculate alignment scores
    const julieScore = Math.round((protein.julieScore + starch.julieScore + veg1.julieScore + sauce.julieScore) / 4);
    const stephenScore = Math.round((protein.stephenScore + starch.stephenScore + veg1.stephenScore + sauce.stephenScore) / 4);

    return {
        id: `${templateKey}-${varIndex}`,
        name: `${protein.name} ${template.name}`,
        description: template.description,
        container: container,
        erewhon: template.erewhon,
        julieScore,
        stephenScore,
        components: {
            protein: { ...protein, portion: '5oz', zone: 'P1' },
            starch: { ...starch, portion: '4oz', zone: 'P2' },
            veg1: { ...veg1, portion: '3oz', zone: 'P3' },
            veg2: veg2 ? { ...veg2, portion: '2oz', zone: 'P4' } : null,
            sauce: { ...sauce, portion: '1.5oz', zone: 'CUP' }
        }
    };
}

// ============================================
// RENDER FUNCTIONS
// ============================================

function renderSuggestionCard(suggestion) {
    const card = document.createElement('div');
    card.className = 'suggestion-card';
    card.dataset.container = suggestion.container;
    card.onclick = () => showBuildDetail(suggestion);

    const visualHTML = suggestion.container === 'jar'
        ? renderJarMini(suggestion)
        : renderBentoMini(suggestion);

    card.innerHTML = `
        <div class="card-visual">
            ${visualHTML}
        </div>
        <div class="card-content">
            <h3 class="card-title">${suggestion.name}</h3>
            <p class="card-description">${suggestion.description}</p>
            <div class="card-meta">
                <span class="meta-tag">${suggestion.container}</span>
                ${suggestion.erewhon ? '<span class="meta-tag erewhon">Erewhon Ready</span>' : ''}
            </div>
            <div class="card-alignment">
                <div class="alignment-mini">
                    <span class="dot julie"></span>
                    <span>${suggestion.julieScore}%</span>
                </div>
                <div class="alignment-mini">
                    <span class="dot stephen"></span>
                    <span>${suggestion.stephenScore}%</span>
                </div>
            </div>
        </div>
    `;

    return card;
}

function renderBentoMini(suggestion) {
    const { protein, starch, veg1, veg2, sauce } = suggestion.components;
    return `
        <div class="bento-mini">
            <div class="zone zone-protein ${protein.color}"></div>
            <div class="zone ${starch.color}"></div>
            <div class="zone ${veg1.color}"></div>
            <div class="zone ${veg2 ? veg2.color : 'food-rice'}"></div>
        </div>
    `;
}

function renderJarMini(suggestion) {
    const { protein, starch, veg1, sauce } = suggestion.components;
    return `
        <div class="jar-mini">
            <div class="jar-shape">
                <div class="jar-layer ${sauce.color}"></div>
                <div class="jar-layer ${starch.color}"></div>
                <div class="jar-layer ${veg1.color}"></div>
                <div class="jar-layer ${protein.color}"></div>
            </div>
        </div>
    `;
}

function renderBuildPreview(suggestion) {
    const { protein, starch, veg1, veg2, sauce } = suggestion.components;

    if (suggestion.container === 'jar') {
        return `
            <div class="jar-large">
                <div class="jar-layer ${sauce.color}"><span class="zone-label-mini">${sauce.name}</span></div>
                <div class="jar-layer ${starch.color}"><span class="zone-label-mini">${starch.name}</span></div>
                <div class="jar-layer ${veg1.color}"><span class="zone-label-mini">${veg1.name}</span></div>
                <div class="jar-layer ${protein.color}"><span class="zone-label-mini">${protein.name}</span></div>
            </div>
        `;
    }

    return `
        <div class="bento-large">
            <div class="zone zone-protein ${protein.color}"><span class="zone-label-mini">${protein.name}</span></div>
            <div class="zone ${starch.color}"><span class="zone-label-mini">${starch.name}</span></div>
            <div class="zone ${veg1.color}"><span class="zone-label-mini">${veg1.name}</span></div>
            <div class="zone ${veg2 ? veg2.color : ''}"><span class="zone-label-mini">${veg2 ? veg2.name : ''}</span></div>
        </div>
    `;
}

function renderComponents(suggestion) {
    const components = Object.values(suggestion.components).filter(Boolean);
    return components.map(c => `
        <div class="component-item">
            <div class="component-color ${c.color}"></div>
            <span class="component-name">${c.name}</span>
            <span class="component-portion">${c.portion}</span>
            <span class="component-zone">${c.zone}</span>
        </div>
    `).join('');
}

function renderPlatingSteps(suggestion) {
    const steps = [
        `Orient ${suggestion.container} with protein zone accessible`,
        `Place ${suggestion.components.protein.portion} ${suggestion.components.protein.name} in Zone P1 - slice at 45° angle`,
        `Add ${suggestion.components.starch.portion} ${suggestion.components.starch.name} to Zone P2 - use rounded scoop`,
        `Arrange ${suggestion.components.veg1.portion} ${suggestion.components.veg1.name} in Zone P3 - align uniformly`,
        suggestion.components.veg2 ? `Add ${suggestion.components.veg2.portion} ${suggestion.components.veg2.name} to Zone P4` : null,
        `Fill sauce cup with ${suggestion.components.sauce.portion} ${suggestion.components.sauce.name}`,
        `Quality check: Clean edges, no spillover, all components visible`
    ].filter(Boolean);

    return steps.map((step, i) => `
        <div class="plating-step">
            <span class="step-num">${i + 1}</span>
            <span class="step-text">${step}</span>
        </div>
    `).join('');
}

function generateNanoBananaPrompt(suggestion) {
    const components = Object.values(suggestion.components).filter(Boolean);
    const ingredientList = components.map(c => c.name.toLowerCase()).join(', ');

    return `Professional food photography of "${suggestion.name}" in a premium ${suggestion.container} container, featuring ${ingredientList}. ${suggestion.container === 'bento' ? 'Classic bento layout with protein on left axis, starches and vegetables arranged in right quadrants, small sauce cup.' : 'Layered mason jar presentation, visible layers from bottom to top.'} Soft natural window light, 45-degree overhead angle. Editorial food photography, magazine quality, Bon Appetit style. Bright rainbow colors, lacquered finishes, premium meal prep aesthetic. Sharp focus on food textures, appetizing presentation, Erewhon-worthy, high-end health food delivery. 8K resolution, photorealistic --ar 1:1 --v 6.1 --style raw`;
}

// ============================================
// BUILD DETAIL VIEW
// ============================================

let currentSuggestion = null;

function showBuildDetail(suggestion) {
    currentSuggestion = suggestion;

    // Update build info
    document.getElementById('buildTitle').textContent = suggestion.name;
    document.getElementById('erewhonBadge').style.display = suggestion.erewhon ? 'inline' : 'none';

    // Update alignment bars
    document.getElementById('julieBar').style.width = `${suggestion.julieScore}%`;
    document.getElementById('juliePercent').textContent = `${suggestion.julieScore}%`;
    document.getElementById('stephenBar').style.width = `${suggestion.stephenScore}%`;
    document.getElementById('stephenPercent').textContent = `${suggestion.stephenScore}%`;

    // Update preview
    document.getElementById('containerPreview').innerHTML = renderBuildPreview(suggestion);

    // Update components list
    document.getElementById('componentsList').innerHTML = renderComponents(suggestion);

    // Update plating notes
    document.getElementById('platingNotes').innerHTML = renderPlatingSteps(suggestion);

    // Generate prompt
    document.getElementById('nanoBananaPrompt').value = generateNanoBananaPrompt(suggestion);

    showStep(3);
}

// ============================================
// EVENT HANDLERS
// ============================================

// Quick mood chips
document.querySelectorAll('.mood-chip').forEach(chip => {
    chip.addEventListener('click', () => {
        moodInput.value = chip.dataset.mood;
        analyzeAndShow();
    });
});

// Analyze button
analyzeBtn.addEventListener('click', analyzeAndShow);

// Enter key in textarea
moodInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        analyzeAndShow();
    }
});

async function analyzeAndShow() {
    const mood = moodInput.value.trim();
    if (!mood) return;

    loadingOverlay.classList.add('active');

    // Simulate AI processing time
    await new Promise(resolve => setTimeout(resolve, 800));

    // Try API first, fall back to local
    try {
        const response = await fetch(`${API_BASE}/api/generate-suggestions`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ mood })
        });
        // API response would be used here
    } catch (e) {
        // Use local generation
    }

    const suggestions = generateSuggestions(mood);

    // Render suggestions
    suggestionsGrid.innerHTML = '';
    suggestions.forEach(s => {
        suggestionsGrid.appendChild(renderSuggestionCard(s));
    });

    // Show mood echo
    moodEcho.textContent = `"${mood}"`;

    loadingOverlay.classList.remove('active');
    showStep(2);
}

// Filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;
        document.querySelectorAll('.suggestion-card').forEach(card => {
            if (filter === 'all' || card.dataset.container === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Copy prompt
document.getElementById('copyPromptBtn').addEventListener('click', () => {
    const prompt = document.getElementById('nanoBananaPrompt');
    prompt.select();
    document.execCommand('copy');
    showToast('Prompt copied!');
});

// Generate image button
document.getElementById('generateImageBtn').addEventListener('click', () => {
    showToast('Copy the prompt and paste into Midjourney or Nano Banana');
    document.getElementById('nanoBananaPrompt').select();
    document.execCommand('copy');
});

// Print guide
document.getElementById('printGuideBtn').addEventListener('click', () => {
    window.print();
});

// Toast notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

// ============================================
// INITIALIZE
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Methodology Food Mood loaded');
    console.log('Julie\'s priorities:', TASTE_PROFILES.julie.priorities);
    console.log('Stephen\'s benchmark:', TASTE_PROFILES.stephen.benchmark);
});
