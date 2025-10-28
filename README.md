# BEANIES.TECH

**Minimal web experiences. Built with React, Vite & TailwindCSS.**

This is the main codebase for [**beaniestech.dev**](https://beaniestech.dev) —  
a lightweight showcase site designed for clarity, speed, and responsiveness from mobile to 4K.

---

## 🧩 Overview

The project is structured as a single-page app (SPA) using **React + TypeScript**,  
built with **Vite** for fast development and optimized builds.

Main focus:
- Instant load and fluid motion  
- Minimal dependencies  
- Full multilingual support (IT / EN / SV)  
- Accessibility and visual balance

---

## 🧱 Stack

| Layer | Tech |
|-------|------|
| Framework | React 18 + TypeScript |
| Build tool | Vite |
| Styling | TailwindCSS + CSS variables |
| Animation | Framer Motion |
| i18n | Custom translations with hooks (`/src/i18n/`) |
| Components | Functional components with hooks |
| Hosting | Netlify / Vercel ready |
| Image handling | Optimized `.webp` assets + lazy loading |

---

## 🗂 Project Structure
- src/
- ├── assets/ # Images, icons, photos (thumbs + full)
- ├── components/ # Reusable UI parts (tiles, modal, contact bar, etc.)
- ├── i18n/ # Translations (it/en/sv)
- ├── pages/ # Large sections (PortfolioMosaic, etc.)
- ├── styles/ # Global styles and CSS variables
- ├── tiles/ # Dynamic tile system (useTiles, MosaicTiles)
- ├── App.tsx # Main layout
- └── main.tsx # Entry point (ReactDOM)


---

## ⚙️ Development

**Install dependencies**
```bash
npm install
```


## 🌐 Deployment

You can deploy this project to:

Netlify (zero config)

Vercel (auto-detects Vite)

GitHub Pages (with npm run build && npm run deploy if configured)

The output folder is /dist.

## 🎨 Design principles

Mobile-first

Consistent spacing & proportions

Soft color palette (cream, clay, olive)

Smooth transitions (framer-motion)

Accessibility in color contrast and tab navigation

## 🔒 Privacy & Data

No external trackers.
No cookies.
Minimal analytics (if enabled, privacy-respecting).

## 🧑‍💻 Credits

Designed & built by Hildur / BEANIES.TECH
© 2025 BEANIES.TECH — All rights reserved.


---




