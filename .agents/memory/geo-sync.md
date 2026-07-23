---
name: GEO fact-sync rule for the DubCall SPA
description: Business facts live in static GEO files that AI crawlers read without JS — keep them in lockstep with UI copy
---

**Rule:** The DubCall marketing site is a client-rendered SPA, so most AI/LLM crawlers never see the React-rendered pages. Business facts (pricing, plan features, stats like 320ms / 32+ languages / 99.9% uptime) are intentionally duplicated into static, crawler-visible surfaces (JSON-LD in the HTML shell, llms.txt, per-page meta descriptions). Any fact change in the UI must be mirrored there in the same change.

**Why:** If the static GEO surfaces go stale, AI engines confidently cite wrong pricing/claims about DubCall — worse than being uncited. This drift already nearly happened once: pack-discount wording ("₹5/credit") contradicted discounted totals until reworded to "base rate ₹5/credit, discounts on pack total."

**How to apply:** After editing pricing/stats/features copy, grep the old value across the whole repo (not just src/) and update every hit. Prerendering/SSG is the long-term fix; until then the duplication is deliberate. Strategy details: `.local/geo-report-dubcall.md`.
