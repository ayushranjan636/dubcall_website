# DubCall Website

Marketing site for DubCall — Agentic AI for Support, Leads & Sales.

## Stack

- React 18 + TypeScript
- Vite 6 (dev server on port 5000)
- Tailwind CSS with CSS variable token system (light/dark mode)
- Framer Motion + Lucide React
- Wouter (client-side routing)
- EmailJS (contact form delivery)

## Running the app

```bash
npm run dev      # dev server at http://localhost:5000
npm run build    # production build → /dist
npm run preview  # preview production build
npm run check    # TypeScript type-check
```

The **"Start application"** workflow runs `npm run dev` and opens the preview automatically.

## Pages

- `/` — Home
- `/product` — Product
- `/pricing` — Pricing
- `/company` — Company
- `/contact` — Contact form
- `/privacy` — Privacy policy
- `/resources` — Resource hub

## Environment variables (optional)

The contact form uses EmailJS to send emails. Without these vars it falls back to a `mailto:` link — the site works fine without them.

```
VITE_EMAILJS_PUBLIC_KEY=
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_BUSINESS_TEMPLATE=
VITE_EMAILJS_CUSTOMER_TEMPLATE=
```

See `.env.example` for full setup notes.

## User preferences

_(none recorded yet)_

## SEO & GEO
- GEO layer (July 2026): static entity JSON-LD (Organization/WebSite/SoftwareApplication + INR offers) in `index.html`; per-route titles/descriptions/canonical/OG via `src/lib/seo.tsx` (`<Seo>` in every page); FAQPage JSON-LD on /product and /pricing built from exported `productFaqs`/`pricingFaqs`; `public/robots.txt` (AI crawlers explicitly allowed), `public/sitemap.xml`, `public/llms.txt`; OG card at `public/images/og-card.png`.
- **Sync rule:** any change to pricing, stats (320ms / 32+ languages / 99.9% uptime), plans, or integrations must be mirrored in: pricing components, `index.html` JSON-LD offers, `public/llms.txt`, `Seo` descriptions in `src/pages/*.tsx`, and `sitemap.xml` lastmod.
- Canonical production domain: `https://dubcall.com` (`SITE_URL` in `src/lib/seo.tsx`).
- Full GEO strategy report: `.local/geo-report-dubcall.md` (+ PDF).
