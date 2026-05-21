# website

Marketing website for DubCall — a static React + Vite app.

## Project structure

```
├── index.html
├── public/
│   └── images/          # Site images and logos
├── src/
│   ├── app/             # App shell and routing
│   ├── pages/           # Route pages
│   ├── components/
│   │   ├── layout/      # Navbar, Footer
│   │   ├── shared/      # Reusable UI (CTA, contact forms)
│   │   └── sections/    # Page sections by feature
│   │       ├── home/
│   │       ├── company/
│   │       ├── product/
│   │       └── pricing/
│   ├── lib/             # Utilities
│   └── styles/          # Global CSS
├── package.json
└── vite.config.ts
```

## Pages

- `/` — Home
- `/company` — Company
- `/product` — Product
- `/pricing` — Pricing
- `/contact` — Contact
- `/privacy` — Privacy
- `/resources` — Resources

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```
