# DubCall — Website

Marketing site for DubCall — Agentic AI for Support, Leads & Sales.

A modern, lightweight React + Vite single-page app inspired by Apple iOS &
Giga AI design language. Fully themed in **light & dark** (system-preference
aware), with cinematic but performant motion.

## Highlights

- **Dual theme** — Light & dark mode follows system preference with a manual toggle. Theme is applied before paint (no flash).
- **Apple-style polish** — Glassmorphic nav, gradient meshes, hairline borders, generous spacing, custom easing.
- **Lightweight motion** — Framer Motion (lazy-evaluated) + CSS animations + Intersection-Observer based reveals. Respects `prefers-reduced-motion`.
- **Lazy-loaded pages** — Each route is its own chunk (~5–40 KB gzip per page).
- **Tree-shaken icons** — Lucide-react, only icons we use ship.
- **Live call simulator** — Hero shows an animated agentic transcript across Support / Leads / Sales pillars.
- **CSS variables theme tokens** — Colors, borders, shadows all swap instantly between modes.

## Tech

- React 18 + TypeScript
- Vite 6
- Tailwind CSS (CSS-var token system)
- Framer Motion + Lucide React
- Wouter (tiny router)

## Project structure

```
├── index.html              # SPA entry with theme-before-paint script
├── public/
│   ├── images/             # Site images & logos
│   └── *.png               # Favicons
├── src/
│   ├── app/                # App shell + page transitions
│   ├── pages/              # Route pages (lazy-loaded)
│   ├── components/
│   │   ├── layout/         # Navbar, Footer
│   │   ├── shared/         # CTA, Talk-to-us modal/form, ThemeToggle
│   │   └── sections/       # Page sections (home, company, product, pricing)
│   ├── lib/                # theme.tsx, motion.tsx, useCountUp, cn, mailto
│   └── styles/             # index.css with tokens and animations
├── tailwind.config.ts
├── vite.config.ts
└── package.json
```

## Pages

- `/` — Home (Hero · Trusted · Stats · Agent Studio · Features · Use Cases · Integrations · Testimonials · CTA)
- `/product` — Product (Hero · Flow · Features · Pricing · Trust · Enterprise · Add-ons · FAQ · CTA)
- `/pricing` — Standalone pricing
- `/company` — Vision, Team, Advisors
- `/contact` — Mailto-powered contact form
- `/privacy` — Privacy policy
- `/resources` — Resource hub

## Development

```bash
npm install
npm run dev      # http://localhost:5173
npm run check    # TypeScript type-check
npm run build    # production build to /dist
npm run preview  # preview production build
```

## Performance

Production build (gzipped):

- Initial JS: **~100 KB** (React + Wouter + Framer + Motion bundle)
- CSS: **~7 KB**
- Per-page chunks: **1–11 KB**

## Theming

Light is the default. Dark mode activates automatically when the user's OS is
set to dark. Users can override the choice via the moon/sun toggle in the
navbar; their preference is persisted in `localStorage`. Reset by clearing
`dubcall-theme`.
