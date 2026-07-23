---
name: Replit npm proxy URLs break external CI
description: package-lock.json can contain package-firewall.replit.local resolved URLs that GitHub Actions / Vercel cannot fetch
---

**Rule:** Packages installed inside Replit may be resolved through Replit's npm proxy, writing `"resolved": "http://package-firewall.replit.local/npm/..."` into `package-lock.json`. Any external system that runs `npm ci` (GitHub Actions, Vercel, Netlify) cannot reach that host, so installs — and therefore whole deploys — fail, even though everything works locally and `npm ci --dry-run` passes here.

**Why:** This broke the DubCall repo's GitHub CI and Vercel deployment (July 2026): one devDependency added on Replit carried the proxy URL while the other ~199 lockfile entries pointed at registry.npmjs.org. Locally undetectable because the proxy is reachable from inside Replit.

**How to apply:** Whenever dependencies were added/updated and the repo syncs to GitHub/external CI, run `grep -c package-firewall package-lock.json` before pushing — it must be 0. If not: prefer removing one-off tooling deps entirely (use `npx` instead), or reinstall/hand-fix the `resolved` field to `https://registry.npmjs.org/...`. Also note the CI-debug trick: GitHub's public API exposes per-step failure info at `/repos/<o>/<r>/actions/runs/<id>/jobs` without auth.
