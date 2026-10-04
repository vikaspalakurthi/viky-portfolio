# ADR-0002: Tailwind CSS with design tokens

**Status:** Accepted · **Date:** 2026-09-20

## Context

A dark, cinematic aesthetic needs a consistent color/typography system. The options: CSS Modules (good isolation, but tokens end up duplicated or in `:root` variables with no type safety), styled-components/emotion (runtime cost, CSS-in-JS churn), or Tailwind (tokens in config, utilities in markup, build-time purge).

## Decision

Tailwind CSS. All design tokens — the `base` dark scale, `ink` text scale, `accent` green, `signal` up/down/info colors, keyframes — live in `tailwind.config.ts`. Components use only token-derived utilities; no raw hex values in components. Effects that can't be utilities (background grid, spotlight, scrollbar, reduced-motion overrides) live in `globals.css`.

## Consequences

- Rebranding is a one-file change (`tailwind.config.ts`) — this is tested in practice: the accent color is referenced ~40 times but defined once.
- Styles are co-located with markup, which suits presentational components that render centralized content.
- Accepted cost: utility-heavy class strings are noisier to read than semantic class names. Mitigated by small, single-purpose components.
- The unused framework is purged at build; shipped CSS stays in the tens of kilobytes.
