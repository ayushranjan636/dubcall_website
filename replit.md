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
