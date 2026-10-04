# CLAUDE.md — project context for Claude Code

Personal portfolio site for **Vikas Palakurthi (Viky)** — positioned as a *technical founder* (engineering depth + product ownership). Dark, cinematic aesthetic. Built to link from his resume.

## Stack
- Next.js 14 (App Router) · TypeScript · Tailwind CSS
- Framer Motion for interactions
- Self-hosted fonts via `@fontsource` (Inter + JetBrains Mono) — **no Google Fonts fetch** (keep it that way; the build runs offline)

## Commands
```bash
npm install
npm run dev        # http://localhost:3001 (port 3000 is taken by another local service)
npm run build      # production build (must pass before deploy)
npx vercel --prod  # deploy (from main only)
```

## Git — release branching strategy (STRICT, it's a showcase)
Repo: https://github.com/vikaspalakurthi/viky-portfolio — public; the history itself is a portfolio artifact. Full spec: `docs/branching-strategy.md`.
- **Never commit directly to `main`.** `main` = production, deployed by Vercel, tag-per-release (`vX.Y.Z`, annotated).
- Work happens on `feature/<name>` branched from `develop`; merge back with `--no-ff`.
- Releases: `release/X.Y.Z` from `develop` → bump `version` in package.json → merge `--no-ff` to `main` + tag → merge back to `develop`.
- Hotfixes: `hotfix/X.Y.Z` from `main`, merge to both `main` (tagged) and `develop`.
- `npm run build` must pass before any merge to `develop` or `main`.

## Docs (public, part of the portfolio)
`docs/` — architecture.md, system-design.md, branching-strategy.md, decisions/ (ADRs). Keep these in sync with reality: if an architectural decision changes, add a new ADR. The `/engineering` page summarizes them for visitors.

## Private prep material
`interview-prep/` is **gitignored** — Viky's private interview preparation notes about this project. Never commit it, never reference it from site content.

## Where content lives — THIS IS THE KEY FILE
**`src/data/content.ts`** holds ALL copy. Components read only from it; never hardcode content in components. Sections: `site`, `ticker`, `about`, `experience[]`, `projects[]`, `skills[]`, `engineering`, `nav`.

## Still placeholder — needs Viky's input (search for `// TODO: confirm from resume`)
- `site.name` — defaulted to "Vikas Palakurthi" (derived from email); confirm.
- `experience[]` — currently one best-guess role. Replace with real work history/dates from the resume.
- `public/resume.pdf` — not present yet; the Résumé button points to `/resume.pdf` (404 until added).

## Architecture notes
- `src/app/page.tsx` assembles sections. `layout.tsx` = fonts + metadata.
- `src/app/engineering/page.tsx` → `/engineering`: how the site is built/shipped (stack rationale, ADR summaries, release strategy, system design). Copy in `content.ts` → `engineering`; rendered by `src/components/Engineering.tsx`.
- Client components (animations): `MarketCanvas` (hero canvas), `CursorGlow`, `ScrollProgress`, `Magnetic`, `TiltCard`, `CountUp`, `Reveal`, `Nav`.
- `MarketCanvas.tsx` — the hero's animated market-data backdrop. Pure canvas + rAF; pauses off-screen via IntersectionObserver; draws one static frame under `prefers-reduced-motion`.
- Theme tokens (colors, animations) in `tailwind.config.ts`; global effects (grid, spotlight, scrollbar, reduced-motion) in `src/app/globals.css`.
- **Accessibility:** all motion respects `prefers-reduced-motion`. Keep new motion behind that guard.

## Conventions
- Keep components presentational; put data in `content.ts`.
- Accent color is `accent` (#3ddc97) with `signal-info` (#4d9fff) as secondary. Change globally in `tailwind.config.ts`.
- After content or component changes, run `npm run build` to confirm it still compiles before deploying.
