# ADR-0005: Hand-rolled canvas for the hero animation

**Status:** Accepted · **Date:** 2026-09-20

## Context

The hero needs an animated market-data backdrop that sets the "trading systems" tone. Options: a looping video (megabytes, scales poorly across DPI, hard to theme), a Lottie animation (another runtime + designer tooling), a charting library (large dependency for pure decoration), or hand-written Canvas 2D.

## Decision

`MarketCanvas.tsx`: a `"use client"` component drawing animated price-like curves with raw Canvas 2D and `requestAnimationFrame`. An `IntersectionObserver` pauses the loop when the hero is off-screen; under `prefers-reduced-motion` it draws a single static frame and stops.

## Consequences

- Kilobytes of code instead of megabytes of media; resolution-independent and themeable from the same design tokens as the rest of the site.
- The component owns its full lifecycle (observer detach, rAF cancel on unmount), so an always-rendered decoration never does background work in a hidden tab or off-screen.
- Accessibility is handled at the source: reduced-motion users get a composition, not an animation.
- Accepted cost: this is bespoke code to maintain — more than dropping in an `.mp4`. Deliberately so: on a portfolio, the decoration doubling as a code sample is the point.
