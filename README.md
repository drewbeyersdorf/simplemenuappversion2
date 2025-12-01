# Methodology Plating Studio

AI-powered plating instructions and analysis for GoMethodology's meal prep kitchen.

## Features

- **Plating Instructions Generator** - Enter meal details, get Michelin-precision plating specs
- **Photo Analysis** - Upload plating photos for AI-powered quality scoring (Gemini 2.0)
- **Nano Banana Integration** - Generate prompts for AI product imagery
- **Quality Standards** - Charlie Trotter-inspired plating metrics

## Quick Deploy to Heroku

### 1. Create Heroku App

```bash
cd docs
heroku create methodology-plating-studio
```

### 2. Set Environment Variables

```bash
heroku config:set GOOGLE_API_KEY=your_google_api_key_here
```

### 3. Deploy

```bash
git subtree push --prefix docs heroku main
```

Or use the Heroku dashboard to connect to this repo.

## Local Development

```bash
cd docs
pip install -r requirements.txt
export GOOGLE_API_KEY=your_key_here
python app.py
```

Visit `http://localhost:5000`

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/health` | GET | Health check & API status |
| `/api/generate-instructions` | POST | Generate plating instructions from meal details |
| `/api/analyze-plating` | POST | Analyze uploaded plating photo |
| `/api/nano-banana/generate` | POST | Generate AI image prompts |

## Tech Stack

- **Backend**: Flask + Gunicorn
- **AI**: Google Gemini 2.0 Flash
- **Frontend**: Vanilla JS, CSS3
- **Hosting**: Heroku

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `GOOGLE_API_KEY` | Yes | Google AI Studio API key |
| `PORT` | No | Server port (default: 5000) |

---

Built for GoMethodology | Maison Methodologie
