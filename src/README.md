# 🌊 DAWG - Data Well-being Group Website

A modern, full-stack website for the Data Well-being Group research team, featuring a content management system powered by Supabase.

---

## ✨ Features

- **Multi-page Application** with hash-based routing
- **Responsive Design** with pastel blue & sage green brand colors
- **Admin Panel** for content management
- **Supabase Backend** for data storage
- **Netlify Ready** for instant deployment

---

## 🚀 Quick Deploy to Netlify

### Prerequisites
- GitHub account
- Netlify account (free)
- Supabase project (free)

### Deploy in 3 Steps

**1. Push to GitHub**
```bash
git add .
git commit -m "Deploy DAWG website"
git push origin main
```

**2. Connect to Netlify**
- Go to https://app.netlify.com
- "Add new site" → "Import from GitHub"
- Select your repository
- Build settings auto-detect from `netlify.toml`
- Click "Deploy"

**3. Initialize Database**
- Visit `your-site.netlify.app/#admin`
- Click "Initialize Database"
- Start adding content!

📖 **Full deployment guide:** See `/NETLIFY_DEPLOY.md`

---

## 🎨 Pages

- **Home** - Hero section and overview
- **About** - Mission and vision
- **Team** - Team member profiles
- **Research** - Research projects
- **Blog** - Blog posts
- **Partners** - Partner organizations
- **Admin** - Content management (at `/#admin`)

---

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS 4** for styling
- **Lucide React** for icons

### Backend
- **Supabase** (PostgreSQL database)
- **Supabase Edge Functions** (Deno runtime)
- **Key-Value Storage** for content

### Deployment
- **Netlify** for frontend hosting
- **Supabase** for backend infrastructure

---

## 💻 Local Development

### Install Dependencies
```bash
npm install
```

### Run Dev Server
```bash
npm run dev
```

Open http://localhost:5173

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

---

## 📁 Project Structure

```
dawg-website/
├── App.tsx                 # Main app component
├── main.tsx               # React entry point
├── index.html             # HTML entry point
│
├── pages/                 # Page components
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── TeamPage.tsx
│   ├── ResearchPage.tsx
│   ├── BlogPage.tsx
│   ├── PartnersPage.tsx
│   └── AdminPage.tsx
│
├── components/            # Reusable components
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   ├── TeamMemberCard.tsx
│   ├── ProjectCard.tsx
│   ├── BlogPostCard.tsx
│   └── ui/               # UI components
│
├── utils/
│   └── supabase/
│       ├── client.tsx    # Supabase client
│       └── info.tsx      # Supabase credentials
│
├── styles/
│   └── globals.css       # Global styles
│
└── supabase/             # Backend (ignored by Netlify)
    └── functions/server/
        ├── index.tsx     # API routes
        └── kv_store.tsx  # Database utilities
```

---

## 🎨 Brand Colors

```css
Primary Blue:   #7BB3C0  /* Pastel blue */
Light Blue:     #C5E3F6  /* Soft sky blue */
Sage Green:     #B2C9AB  /* Muted sage */
Neutral:        #FAF9F6  /* Warm off-white */
```

---

## 🔧 Configuration Files

| File | Purpose |
|------|---------|
| `package.json` | Dependencies and scripts |
| `netlify.toml` | Netlify build settings |
| `vite.config.ts` | Vite configuration |
| `tsconfig.json` | TypeScript configuration |
| `postcss.config.js` | PostCSS/Tailwind config |
| `.netlifyignore` | Files to ignore on Netlify |
| `.gitignore` | Files to ignore in Git |

---

## 🔐 Environment Setup

### Supabase Credentials

Update `/utils/supabase/info.tsx` with your Supabase project details:

```typescript
export const projectId = "your-project-id";
export const publicAnonKey = "your-anon-key";
```

Find these in your Supabase dashboard:
- Project Settings → API → Project URL
- Project Settings → API → anon/public key

---

## 📝 Content Management

### Access Admin Panel
```
https://your-site.netlify.app/#admin
```

### Features
- ✅ Add/Edit/Delete Team Members
- ✅ Create/Edit/Delete Blog Posts
- ✅ Manage Research Projects
- ✅ Manage Partners
- ✅ Initialize Database

---

## 🐛 Troubleshooting

### Build Fails on Netlify

**Check:**
1. All files committed to GitHub
2. No `package-lock.json` in repository
3. `.netlifyignore` file exists
4. Build log for specific errors

**Solution:**
```bash
# Remove lockfiles
rm -f package-lock.json

# Commit and push
git add .
git commit -m "Fix build"
git push
```

### Site Loads But Features Don't Work

**Check:**
1. Browser console (F12) for errors
2. Supabase credentials in `/utils/supabase/info.tsx`
3. Database initialized at `/#admin`

### Admin Panel Not Loading

**Try:**
1. Use hash routing: `/#admin` not `/admin`
2. Initialize database first
3. Check browser console for errors

---

## 📚 Documentation

- `/NETLIFY_DEPLOY.md` - Complete deployment guide
- `/CONTENT_EDITING_GUIDE.md` - How to edit content
- `/LOCAL_DEVELOPMENT.md` - Local development setup
- `/PROJECT_SUMMARY.md` - Project overview

---

## 🎯 Quick Commands

```bash
# Development
npm run dev          # Start dev server

# Build
npm run build        # Build for production
npm run preview      # Preview production build

# Deploy
git push            # Auto-deploy to Netlify
```

---

## ✅ Production Checklist

Before going live:

- [ ] Supabase credentials configured
- [ ] Database initialized at `/#admin`
- [ ] All content added (team, projects, blog posts)
- [ ] Test all pages and navigation
- [ ] Test on mobile devices
- [ ] Check browser console for errors
- [ ] Custom domain configured (optional)

---

## 🌟 Features to Add (Future)

- [ ] Blog post categories/tags
- [ ] Search functionality
- [ ] Newsletter signup
- [ ] Image uploads
- [ ] User authentication for admin
- [ ] Analytics integration

---

## 📄 License

This project is for the Data Well-being Group (DAWG).

---

## 🤝 Support

For issues or questions:
1. Check browser console for errors
2. Review documentation in `/docs`
3. Check Netlify build logs
4. Verify Supabase configuration

---

## 🎉 Credits

Built with:
- React & TypeScript
- Tailwind CSS
- Supabase
- Vite
- Netlify

---

**Ready to deploy?** See `/NETLIFY_DEPLOY.md` for step-by-step instructions!

🚀 **Deploy now:** Push to GitHub and connect to Netlify!
