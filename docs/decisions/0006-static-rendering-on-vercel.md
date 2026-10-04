# ADR-0006: Fully static rendering, deployed on Vercel

**Status:** Accepted · **Date:** 2026-09-20

## Context

The site's content changes when its author commits, not when a visitor arrives. The hosting options ranged from a VPS (full control, full ops burden), to container platforms, to static hosts (Netlify, GitHub Pages, Cloudflare Pages, Vercel). The author already operates Vercel in production for other projects.

## Decision

Every route is statically rendered at build time — no API routes, no runtime server components, no ISR. Deployment is Vercel, with `main` as the production branch (`npx vercel --prod`, or the git integration deploying `main` automatically).

## Consequences

- The serving model collapses to "immutable files on a CDN": global latency, effectively unlimited scale, no cold starts, and a near-zero runtime attack surface (full analysis in [system-design.md](../system-design.md)).
- Rollback is redeploying the previous immutable build — state-free by construction.
- Deploys map 1:1 to the release branching strategy: a release tag on `main` *is* a production deploy.
- Accepted cost: anything dynamic in the future (forms, analytics, live data) must be added as an explicit, isolated service rather than slipped into the existing server — which is treated as a feature of the design, not a limitation. Extension paths are documented in [system-design.md](../system-design.md).
- Vendor lock-in is minimal: the static output would deploy unchanged to any static host.
