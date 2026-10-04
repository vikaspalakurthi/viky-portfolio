# Engineering docs

This portfolio is deliberately engineered like a production project — the repository itself is part of the portfolio. These docs explain how it's designed, built, and shipped. A visitor-friendly summary lives on the site at [/engineering](https://github.com/vikaspalakurthi/viky-portfolio); these files are the full write-ups.

| Doc | What it covers |
| --- | --- |
| [architecture.md](architecture.md) | How the codebase is structured: the content layer, component layers, styling system, and animation strategy |
| [system-design.md](system-design.md) | The serving model, performance budget, security posture, failure modes, and how the design would evolve under new requirements |
| [branching-strategy.md](branching-strategy.md) | The release branching strategy: branch roles, how a change ships, versioning and tagging rules |
| [decisions/](decisions/) | Architecture Decision Records (ADRs) — each significant choice, its context, and its trade-offs |

## Ground rules this repo follows

1. **`main` is production.** Every commit on `main` is deployable and every release is an annotated tag. Vercel deploys from `main`.
2. **All copy lives in `src/data/content.ts`.** Components are presentational; content and presentation never mix.
3. **`npm run build` must pass** before any merge to `develop` or `main`.
4. **Motion respects `prefers-reduced-motion`** — every animation has a reduced or static fallback.
5. **No third-party runtime requests.** Fonts are self-hosted; the built site calls no external origin.
