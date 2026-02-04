# BrickBird marketing site

Premium single-page marketing site for BrickBird (small-business growth studio). Built with Next.js 14, React, TypeScript, and Tailwind.

## Run locally
1. Install deps: `npm install --no-audit --progress=false`
2. Dev server: `npm run dev` (http://localhost:3000) or `npm run dev:3002` (binds 0.0.0.0:3002 for containers/ports)
3. Production build: `npm run build && npm run start`

## Deploy
- Works on Vercel out of the box. Connect repo and deploy; no extra config needed.
- For other hosts: run `npm run build` then serve `.next` via `npm run start`.

## Notes
- Accessible, semantic layout with sticky header, modal form, price estimator, before/after toggle, scroll reveals (reduced-motion friendly).
- Colors live in CSS variables (see `app/globals.css`).
- Placeholder privacy/terms pages at `/privacy` and `/terms`.
- Lead forms currently log to console; integrate with your CRM or API as needed.
