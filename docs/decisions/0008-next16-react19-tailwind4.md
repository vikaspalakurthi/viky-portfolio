# ADR-0008: Platform upgrade — Next.js 16, React 19, Tailwind CSS 4

**Status:** Accepted · **Date:** 2026-10-04 · Amends [ADR-0001](0001-nextjs-14-app-router.md) and [ADR-0002](0002-tailwind-css.md)

## Context

`npm audit` flagged the entire pre-16 Next.js release line, and the Tailwind 3 toolchain pulled vulnerable transitives (`braces`, `micromatch`, `postcss`). Both fixes were breaking upgrades: Next 16 (which requires React 19) and Tailwind 4 (which replaces the JS config file with CSS-first configuration). ADR-0001 pinned Next.js exactly at `14.2.35` so upgrades would be deliberate commits — this is that deliberate commit.

## Decision

Upgrade the platform in one release: **Next.js 16** (Turbopack builds by default), **React 19**, **Tailwind CSS 4**, TypeScript 5.9, matching `@types/*`.

- **Pinning policy unchanged.** Framework versions stay exact-pinned (`16.3.8`, `19.3.0`, `4.3.3`); only the numbers moved. ADR-0001's rationale — upgrades as visible, deliberate history — still holds.
- **Design tokens moved, not changed.** `tailwind.config.ts` is deleted; every token (the `base`/`ink`/`accent`/`signal` scales, font stacks, keyframes) now lives in the `@theme` block of `src/app/globals.css`. ADR-0002's principle survives: rebranding is still a one-place change — that place is now CSS.
- **PostCSS pipeline simplified.** `@tailwindcss/postcss` replaces `tailwindcss` + `autoprefixer` (vendor prefixing is built into v4's Lightning CSS), so the `postcss` and `autoprefixer` dev dependencies are gone.
- **v4 utility renames applied** where the old names were deprecated: `bg-gradient-to-*` → `bg-linear-to-*`, bare `rounded` → `rounded-sm`. A base-layer rule restores the v3 `cursor: pointer` on buttons, which v4's preflight no longer sets.
- **`next lint` script removed.** Next 16 drops the `next lint` command; the repo had no ESLint config, so the script was vestigial rather than migrated.

## Consequences

- `npm audit`: 0 vulnerabilities (was: the whole Next 14 line plus Tailwind 3 transitives).
- Every route remains statically prerendered; fonts remain self-hosted via `@fontsource` — the upgrade changes the toolchain, not the architecture or the threat model.
- Builds run on Turbopack. Dev and start stay on port 3001.
- The site is now on currently-supported release lines, so future security patches are version bumps instead of major migrations.
- Accepted cost: Tailwind theme values are no longer TypeScript-checked (no `Config` type). Mitigated by the tokens being plain, greppable CSS variables in one block.
