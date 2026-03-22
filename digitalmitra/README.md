# 🌾 DigitalMitra — డిజిటల్ మిత్ర

> **Rural India's Digital Companion** — Telugu-first, fully responsive platform for farmers, students & rural communities of Andhra Pradesh & Telangana.

![Stack](https://img.shields.io/badge/React_18-blue?logo=react) ![Vite](https://img.shields.io/badge/Vite_6-purple?logo=vite) ![Tailwind](https://img.shields.io/badge/Tailwind_3-cyan?logo=tailwindcss) ![Vercel](https://img.shields.io/badge/Deploy_Vercel-black?logo=vercel)

---

## 🚀 Quick Start

```bash
npm install
npm run dev
# Open http://localhost:5173
```

## ⚡ Deploy

### GitHub + Vercel (Recommended)
```bash
git init
git add .
git commit -m "DigitalMitra v1.0"
git remote add origin https://github.com/YOUR_USERNAME/digitalmitra.git
git branch -M main
git push -u origin main
# Then: vercel.com/new → Import from GitHub → Deploy
```

### Vercel CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```

---

## 📱 Pages & Features

| Page | Route | Features |
|------|-------|---------|
| 🏠 Landing | `/` | Hero, live prices, 6 features, how-it-works, testimonials, news, CTA |
| 🌾 Farmer | `/farmer` | 6 module dashboard, today's prices, tips, helpline |
| 📊 Mandi Prices | `/farmer/mandi` | 12 crops, search, AP/TS filter, price bars, trends |
| 🌿 Crop Protection | `/farmer/crop-protection` | Claude AI disease detection from photo |
| 🏛️ Schemes | `/farmer/schemes` | 8 schemes — PM-KISAN, Rythu Bandhu, Fasal Bima + real govt links |
| 🎓 Student | `/student` | 6 modules, 6 exam countdowns |
| 📚 Scholarships | `/student/scholarships` | Claude AI eligibility checker + 5 scholarships |
| 🏛️ Services | `/services` | 8 service tiles + 12 portal links — all real govt URLs |
| 🛡️ Safety | `/safety` | Emergency quick dial, tips |
| 🆘 SOS | `/safety/sos` | GPS, 5s countdown, contact management, 8 emergency numbers |
| ⚙️ Settings | `/settings` | Telugu/English, dark/light, 4 font sizes, voice TTS |

## 🌐 Responsive

- **Mobile** (375px+) — Bottom nav, single column
- **Tablet** (768px+) — 2-3 column grids
- **Desktop** (1024px+) — Full layout, max-width container
- **iPad/Wide** (1280px+) — Elegant whitespace

## 📁 Structure

```
digitalmitra/
├── src/
│   ├── App.jsx                  ← Root with BrowserRouter + all routes
│   ├── main.jsx                 ← React entry point
│   ├── index.css                ← Tailwind + custom styles + animations
│   ├── data/index.js            ← All app data (prices, schemes, portals...)
│   ├── hooks/useApp.jsx         ← Global state (dark/lang/fontSize/online)
│   ├── components/UI.jsx        ← All shared components (Navbar, Cards, etc.)
│   └── pages/
│       ├── LandingPage.jsx      ← Full marketing landing page
│       ├── FarmerPages.jsx      ← FarmerHome, MandiPage, CropProtection, Schemes
│       ├── StudentPages.jsx     ← StudentHome, ScholarshipsPage
│       ├── ServicesPage.jsx     ← Govt services + portals
│       ├── SafetyPages.jsx      ← SafetyHome, SOSPage
│       └── SettingsPage.jsx     ← All user preferences
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── vercel.json
```

---

**తెలుగు మొదట • ఆఫ్‌లైన్ మొదట • గ్రామం మొదట 🌾**
