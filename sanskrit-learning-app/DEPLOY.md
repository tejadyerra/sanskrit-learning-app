# Sanskrit Learning App - Deploy to Web (Zero Local Install)

## Quick Deploy Options

### Option 1: Vercel (Recommended - 2 minutes)
1. Go to [vercel.com](https://vercel.com) → Sign up with GitHub
2. Click "Add New Project" → Import your GitHub repo
3. Framework: Vite → Deploy
4. Done! Live at `your-app.vercel.app`

### Option 2: Netlify
1. Go to [netlify.com](https://netlify.com) → Sign up with GitHub
2. "Add new site" → "Import from Git" → Select repo
3. Build command: `npm run build` | Publish: `dist`
4. Deploy → Live at `your-app.netlify.app`

### Option 3: GitHub Pages (Free)
1. Push to GitHub repo
2. Settings → Pages → Source: "GitHub Actions"
3. Uses the workflow below → Live at `username.github.io/repo-name`

---

## Files Ready for Deployment

Your app already has:
- ✅ `vite.config.ts` - optimized for production
- ✅ `package.json` - all dependencies listed
- ✅ `index.html` - proper meta tags, fonts preloaded
- ✅ `public/favicon.svg` - app icon
- ✅ TypeScript config - strict mode

---

## GitHub Actions Workflow (for GitHub Pages)

Create `.github/workflows/deploy.yml`: