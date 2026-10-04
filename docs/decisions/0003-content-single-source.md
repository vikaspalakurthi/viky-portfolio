# ADR-0003: All copy in one typed data file

**Status:** Accepted · **Date:** 2026-09-20

## Context

Portfolio content (bio, roles, projects, skills) changes more often than design, and the two kinds of change shouldn't risk each other. A CMS adds an account, an API, a build-time fetch, and a failure mode — heavy for a single-editor site. Hardcoding copy in components couples every content tweak to component code.

## Decision

Every user-visible string lives in `src/data/content.ts` as typed exports (`site`, `about`, `experience[]`, `projects[]`, `skills[]`, `engineering`, `nav`). Components are purely presentational and render only what this file provides. The rule is enforced by convention and review, and documented in `CLAUDE.md` so AI-assisted edits follow it too.

## Consequences

- Content edits are data edits: no JSX knowledge needed to update a bullet, and a malformed entry is a TypeScript build error, not a production rendering bug.
- The types double as a content model — adding a field to `Project` forces every card to handle it.
- Accepted cost: no editing UI and no draft/preview workflow. Acceptable while the only editor is the engineer; the extension path (MDX, then a headless CMS) is recorded in [system-design.md](../system-design.md).
- A subtle benefit discovered in practice: the file is a complete, reviewable inventory of every claim the site makes.
