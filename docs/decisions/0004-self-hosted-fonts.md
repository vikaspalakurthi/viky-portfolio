# ADR-0004: Self-hosted fonts, zero third-party requests

**Status:** Accepted · **Date:** 2026-09-20

## Context

The design uses Inter (text) and JetBrains Mono (labels/code). The default path — Google Fonts via `next/font/google` — fetches from Google at build time and historically created runtime third-party requests, GDPR noise, and a build-time network dependency. This project's builds must also run offline.

## Decision

Self-host both families via `@fontsource` packages, imported as CSS in `layout.tsx` (4 Inter weights, 2 JetBrains Mono weights). No Google Fonts fetch at build or runtime.

## Consequences

- The built site makes **zero** requests to third-party origins — a property the performance budget in [system-design.md](../system-design.md) now tracks explicitly.
- Builds are hermetic: no network, no build-time font fetch to flake.
- Fonts ship from the same CDN as the page, with the framework handling preload; no FOUT from a late cross-origin fetch.
- Accepted cost: font updates arrive via npm dependency bumps rather than automatically, and self-hosted files count against the site's own bandwidth — negligible at this scale.
