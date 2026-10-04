# Architecture

Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion. Fully static output; no server runtime.

## The one rule that shapes everything

**All copy lives in [`src/data/content.ts`](../src/data/content.ts). Components are purely presentational.**

`content.ts` exports typed structures — `site`, `ticker`, `about`, `experience[]`, `projects[]`, `skills[]`, `engineering`, `nav` — and every component renders only what it's given from there. The types (`Experience`, `Project`, …) are the contract: a malformed entry is a TypeScript error at build time, not a broken page in production. Editing content can never break layout; restyling can never lose copy. (Rationale and trade-offs: [ADR-0003](decisions/0003-content-single-source.md).)

## Layering

```
src/
├── data/
│   └── content.ts        ← ALL copy + types (the only file that "knows" Viky)
├── app/
│   ├── layout.tsx        ← fonts (self-hosted), metadata, <html>/<body>
│   ├── globals.css       ← design-system globals: grid, spotlight, scrollbar,
│   │                        reduced-motion fallbacks, .mono utility
│   ├── page.tsx          ← home: assembles section components in order
│   └── engineering/
│       └── page.tsx      ← /engineering: how the site is built & shipped
└── components/
    ├── (sections)        Hero, About, Experience, Projects, Skills,
    │                     Contact, Footer, Engineering — one per page section,
    │                     server components where possible
    ├── (primitives)      Section (numbered heading frame), icons
    └── (motion, client)  MarketCanvas, CursorGlow, ScrollProgress,
                          Magnetic, TiltCard, CountUp, Reveal, Nav
```

Three layers, one-way dependencies: **data → sections → primitives/motion**. Pages are just ordered assemblies of sections. Nothing imports upward.

## Server vs. client components

The default is server components (they render to static HTML at build time and ship no JS). A component is `"use client"` only when it owns browser state: animation (`Reveal`, `TiltCard`, `Magnetic`, `CountUp`), canvas (`MarketCanvas`), scroll listeners (`Nav`, `ScrollProgress`, `CursorGlow`). The split keeps First Load JS at roughly 135 kB, most of which is React + Framer Motion.

## The hero canvas (`MarketCanvas.tsx`)

The animated market-data backdrop is hand-rolled canvas + `requestAnimationFrame` rather than a video, GIF, or charting library:

- **Weight** — a few KB of code vs. megabytes of video; resolution-independent on any display.
- **Lifecycle** — an `IntersectionObserver` pauses the rAF loop when the hero scrolls off-screen, so the tab does no background work.
- **Accessibility** — under `prefers-reduced-motion` it draws exactly one static frame.

(Trade-offs: [ADR-0005](decisions/0005-canvas-hero-animation.md).)

## Styling system

Design tokens are Tailwind theme extensions in [`tailwind.config.ts`](../tailwind.config.ts): the `base` dark scale, `ink` text scale, `accent` (#3ddc97), and `signal` (up/down/info) colors — change a token there and it changes everywhere. Global effects that can't be utilities (background grid, spotlight, scrollbar, reduced-motion overrides) live in `globals.css`. No CSS files per component; no inline hex values in components.

## Accessibility stance

Every animated component checks `prefers-reduced-motion` (via Framer Motion's `useReducedMotion` or a CSS media query) and degrades to opacity-only or fully static rendering. Motion is decoration here, never information.

## Fonts

Inter (sans) and JetBrains Mono (code/labels) are self-hosted via `@fontsource` and imported in `layout.tsx`. No Google Fonts request — the build runs offline and the live site makes zero third-party requests. ([ADR-0004](decisions/0004-self-hosted-fonts.md).)
