# Sanskrit Learning App - Sanskrit to Telugu

A web app for learning Sanskrit with Telugu translations. Features flashcards, vocabulary lists, and progress tracking.

## Live Demo
Deploy in 2 minutes - zero local installation needed.

## Quick Deploy (Choose One)

### 🚀 Vercel (Easiest)
1. Fork this repo to your GitHub
2. Go to [vercel.com](https://vercel.com) → Import Project
3. Select repo → Deploy
4. Live at `your-app.vercel.app`

### 🌐 Netlify
1. Go to [netlify.com](https://netlify.com) → "Add new site" → "Import from Git"
2. Select repo → Build: `npm run build` | Publish: `dist`
3. Live at `your-app.netlify.app`

### 📄 GitHub Pages (Free)
1. Fork repo → Settings → Pages → Source: "GitHub Actions"
2. Push to main → Auto-deploys via workflow
3. Live at `username.github.io/sanskrit-learning-app`

## Features
- **Flashcards** - Sanskrit ↔ Telugu with flip animation, IAST, text-to-speech
- **Vocabulary List** - Searchable, filterable by category/level
- **Progress Tracking** - Streak counter, mastery stats, progress bars
- **100+ Items** - Words, phrases, sentences, daily usage, wisdom quotes
- **Devanagari & Telugu fonts** - Proper rendering

## Tech Stack
- React 18 + TypeScript + Vite
- Lucide React icons
- Noto Sans Devanagari & Telugu fonts
- CSS Variables for theming

## Local Development (Optional)
```bash
npm install
npm run dev
```

## Project Structure
```
src/
├── data/vocabulary.ts     # 100+ Sanskrit→Telugu items
├── components/
│   ├── Flashcard.tsx      # 3D flip cards with TTS
│   ├── VocabularyList.tsx # Searchable list view
│   ├── ProgressStats.tsx  # Charts & streaks
│   └── ...
└── App.tsx                # Main app with state management
```

## License
MIT