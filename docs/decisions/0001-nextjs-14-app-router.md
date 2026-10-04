# ADR-0001: Next.js 14 with the App Router

**Status:** Accepted · **Date:** 2026-09-20

## Context

The site needs file-based routing, build-time static rendering, good defaults for code splitting and font handling, and a path to add pages over time. The author's product work is already Next.js/TypeScript, so the portfolio should demonstrate fluency in that stack. Alternatives considered: plain Vite + React (no SSG story without extra tooling), Astro (excellent for static content, but doesn't showcase the stack used in the author's production work), raw HTML/CSS (fast but demonstrates nothing about component architecture).

## Decision

Next.js 14 with the App Router, TypeScript throughout, every route statically rendered.

## Consequences

- File-based routing and per-route metadata come free; adding `/engineering` was a folder, not a router refactor.
- Server components by default keep client JS limited to the components that genuinely need browser state.
- Accepted cost: Next.js is a large dependency with a fast-moving release/advisory cadence for what is ultimately a static site. Mitigation: exact version pinning, prompt patch adoption, and the static output keeps most server-side advisories out of scope (see [system-design.md](../system-design.md) threat model).
- The framework version is pinned exact (`14.2.35`, the patched release for the Dec 2025 advisory line) rather than floated with `^`, so upgrades are deliberate commits that show up in history.
