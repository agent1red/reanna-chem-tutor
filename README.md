# 🧪 Reanna's Chemistry Tutor

An interactive chemistry learning platform designed to help master 10th grade chemistry concepts.

## Features

- 📺 **Video Lessons** - Curated YouTube content for each topic
- 📖 **Reading Materials** - In-depth explanations with graphics
- 🔊 **Voice Narration** - ElevenLabs TTS reads content aloud
- ✏️ **Practice Problems** - Hands-on exercises
- 📝 **Quizzes** - Multiple choice & fill-in-the-blank
- 🤖 **AI Grading** - OpenAI-powered answer evaluation
- 📊 **Progress Tracking** - Per-account progress saved
- 👨‍👩‍👧 **Admin Dashboard** - Parent view with reset options

## Modules

1. **Significant Figures** - Rules and calculations
2. **Chemical Nomenclature** - Type I, II, and III compounds
3. **Matter & Atomic Structure** - Properties, atoms, isotopes
4. **Lab Skills** - Density, data recording, lab techniques

## Tech Stack

- **Frontend**: Vue 3 + Tailwind CSS (CDN)
- **Backend**: Node.js + Express
- **Database**: SQLite
- **AI**: OpenAI API (grading)
- **Voice**: ElevenLabs TTS
- **Hosting**: Local + Tailscale

## Setup

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone the repo
git clone https://github.com/agent1red/reanna-chem-tutor.git
cd reanna-chem-tutor

# Install backend dependencies
cd backend
npm install

# Copy environment file
cp ../.env.example .env
# Edit .env with your API keys

# Start the server
npm start
```

### Environment Variables

```
PORT=3000
JWT_SECRET=your-secret-key
OPENAI_API_KEY=your-openai-key
ELEVENLABS_API_KEY=your-elevenlabs-key
```

## Access

- **Local**: http://localhost:3000
- **Tailscale**: https://chem-tutor.your-tailnet.ts.net

## License

Private - For Hudson Family Use
