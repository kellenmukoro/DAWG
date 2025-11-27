# 🚀 Deploy to Netlify - Simple Guide

Your project is now **100% Netlify-ready**. Just follow these steps:

---

## ✅ What's Configured

All build files are ready:
- ✅ `package.json` - Clean dependencies (npm packages only)
- ✅ `netlify.toml` - Build configuration
- ✅ `vite.config.ts` - Vite build settings
- ✅ `index.html` - Entry point
- ✅ `main.tsx` - React entry
- ✅ `.netlifyignore` - Ignores server files
- ✅ `.gitignore` - Prevents lockfiles from being committed
- ✅ `.npmrc` - npm configuration

---

## 🎯 3-Step Deployment

### Step 1: Push to GitHub

**First, delete any old lockfiles from your repo:**
```bash
# Check if they exist
ls package-lock.json yarn.lock pnpm-lock.yaml

# If found, delete them
rm -f package-lock.json yarn.lock pnpm-lock.yaml

# Commit everything
git add .
git commit -m "Ready for Netlify deployment"
git push origin main
```

**Or using GitHub Desktop:**
1. Review changed files
2. Commit: "Ready for Netlify deployment"
3. Push to origin

### Step 2: Connect to Netlify

**Option A - New Site:**
1. Go to https://app.netlify.com
2. Click "Add new site" → "Import an existing project"
3. Choose "GitHub"
4. Select your repository
5. **Build settings will auto-detect** from `netlify.toml`:
   - Build command: `npm install && npm run build`
   - Publish directory: `dist`
   - Node version: `18`
6. Click "Deploy site"

**Option B - Existing Site:**
1. Go to your site in Netlify dashboard
2. Site settings → Build & deploy → Clear build cache
3. Deploys → Trigger deploy

### Step 3: Wait for Build

Build takes 2-3 minutes. You'll see:
```
✅ Installing dependencies
✅ Building with Vite
✅ Site is live
```

---

## 🎉 After Deployment

### 1. Visit Your Site
```
https://your-site-name.netlify.app
```

### 2. Initialize Database
```
1. Go to: https://your-site-name.netlify.app/#admin
2. Click "Initialize Database"
3. Wait for success message
```

### 3. Start Using
```
✅ Add team members
✅ Create blog posts
✅ Add research projects
✅ Add partners
```

---

## 📁 Project Structure

```
Your Project (Frontend Only - Built by Netlify)
├── App.tsx
├── main.tsx
├── index.html
├── pages/
├── components/
├── utils/
├── styles/
└── package.json

supabase/ (Backend - IGNORED by Netlify)
└── functions/server/
    ├── index.tsx
    └── kv_store.tsx
```

**Key Point:** Netlify only builds the frontend. The backend runs on Supabase.

---

## 🔧 Build Configuration

### netlify.toml
```toml
[build]
  publish = "dist"
  command = "npm install && npm run build"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Why This Works
- `.netlifyignore` tells Netlify to skip the `supabase/` directory
- This prevents Netlify from seeing the `jsr:` imports
- Only frontend dependencies get installed
- Clean, simple build process

---

## 🐛 Troubleshooting

### Still getting 404 error?

**1. Check for lockfiles in GitHub:**
```bash
git ls-files | grep lock
```
Should show **nothing**. If it shows lockfiles:
```bash
git rm package-lock.json yarn.lock pnpm-lock.yaml
git commit -m "Remove lockfiles"
git push
```

**2. Clear Netlify cache:**
- Site settings → Build & deploy → Clear build cache

**3. Verify .netlifyignore is committed:**
```bash
git ls-files | grep .netlifyignore
```
Should show: `.netlifyignore`

### Build succeeds but site doesn't load?

**Check browser console (F12):**
- Look for JavaScript errors
- Common issue: Supabase credentials not set
- Fix: Check `utils/supabase/info.tsx`

### Admin panel doesn't work?

**Steps:**
1. Go to `/#admin` (hash routing)
2. Check browser console for errors
3. Try "Initialize Database" button
4. If fails, check Supabase project is active

---

## ✅ Success Checklist

Before deploying:
- [ ] All files committed to GitHub
- [ ] No lockfiles in repository
- [ ] `.netlifyignore` file exists
- [ ] `netlify.toml` file exists
- [ ] `package.json` has correct dependencies

After deploying:
- [ ] Build completes without errors
- [ ] Site loads successfully
- [ ] Navigation works (Home, About, Team, etc.)
- [ ] Admin panel loads at `/#admin`
- [ ] Database initialization works

---

## 🎯 That's It!

Your project is ready to deploy. The configuration is clean and minimal - it will just work.

**Next Steps:**
1. Push to GitHub
2. Connect to Netlify
3. Deploy! 🚀

Your DAWG website will be live in minutes! 🎉

---

## 📞 Need Help?

**Build failing?**
- Check the full build log in Netlify
- Verify all files are committed
- Clear Netlify build cache

**Site broken?**
- Check browser console (F12)
- Verify Supabase configuration
- Test locally: `npm install && npm run build && npm run preview`

---

**Last Updated: November 27, 2025**
