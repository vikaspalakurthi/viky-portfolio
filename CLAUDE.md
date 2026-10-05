# CLAUDE.md — project context for Claude Code

Personal portfolio site for **Vikas Palakurthi (Viky)** — positioned as *Senior SRE / DevOps / Observability engineer, Austin TX, open to work* (since v3.1 the site is job-application-focused: the ROR Traders brand / paid-community framing is gone; oifetcher and tradenarrate remain as "running services" side-project proof of end-to-end ownership). Dark terminal/ops aesthetic from his design artifact. Built to link from his resume.

**Truth rule:** every career claim (years, numbers, roles, tools) must come from the verified fact bank at `C:\Users\palak\Documents\Claude\Code\JobSearch\resume\master-resume.md` (+ skills-inventory.md) or from Viky directly. Never invent metrics.

## Stack
- Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · Tailwind CSS 4
- Framer Motion + CSS keyframes (globals.css) + one SMIL network (Topology.tsx) for interactions
- Self-hosted fonts via `@fontsource` (Space Grotesk + JetBrains Mono + Mr Dafoe signature) — **no Google Fonts fetch** (keep it that way; the build runs offline)

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
**`src/data/content.ts`** holds ALL copy. Components read only from it; never hardcode content in components. Sections: `site`, `ticker`, `metrics`, `about`, `skills`, `services`, `careerLog`, `contact`, `footer`, `miniVikas`, `engineering`, `nav`.

## Still placeholder — needs Viky's input
- `services.items[].screenshot` — unset; cards show styled "[ ATTACH SCREENSHOT ]" frames until app screenshots are dropped in `public/` and the paths set.
- `public/resume.pdf` — not present yet (the hero no longer links it, but keep in mind for a future résumé button).

## Architecture notes
- `src/app/page.tsx` assembles sections. `layout.tsx` = fonts + metadata.
- `src/app/engineering/page.tsx` → `/engineering`: how the site is built/shipped (stack rationale, ADR summaries, release strategy, system design). Copy in `content.ts` → `engineering`; rendered by `src/components/Engineering.tsx`.
- Client components (animations): `MarketCanvas` (hero canvas), `CursorGlow`, `ScrollProgress`, `Magnetic`, `TiltCard`, `CountUp`, `Reveal`, `Nav`.
- `MarketCanvas.tsx` — the hero's animated market-data backdrop. Pure canvas + rAF; pauses off-screen via IntersectionObserver; draws one static frame under `prefers-reduced-motion`.
- Theme tokens (colors, fonts, animations) live in the `@theme` block of `src/app/globals.css` (Tailwind 4 CSS-first config — there is no `tailwind.config.ts`); global effects (grid, spotlight, scrollbar, reduced-motion) in the same file.
- **Accessibility:** all motion respects `prefers-reduced-motion`. Keep new motion behind that guard.

## Conventions
- Keep components presentational; put data in `content.ts`.
- Accent color is `accent` (#34d399) with `signal-info` (#38bdf8) as secondary. Change globally in the `@theme` block of `src/app/globals.css`.
- After content or component changes, run `npm run build` to confirm it still compiles before deploying.
