# ADR-0007: Git-flow-style release branching

**Status:** Accepted · **Date:** 2026-10-04

## Context

A solo static site could reasonably commit straight to `main` and let every push deploy. But this repository is linked from a resume: its git history is itself a portfolio artifact, and the author wants to demonstrate — not merely claim — release discipline. Candidates: trunk-based development (simplest, standard for high-velocity teams with CI and feature flags), GitHub Flow (branch → PR → merge → deploy), and git-flow (main/develop/feature/release/hotfix).

## Decision

Git-flow-style release branching, specified in full in [branching-strategy.md](../branching-strategy.md): `main` is production-only and tag-per-release; `develop` integrates; features merge `--no-ff`; releases are cut on `release/X.Y.Z` branches, tagged on `main`, and merged back to `develop`.

## Consequences

- The merge graph is self-documenting: anyone can run `git log --graph --decorate --oneline` and verify the process was followed, release by release.
- Production (`main`) maps exactly to Vercel's deploy model, and every production state is an annotated tag, making rollback atomic.
- `--no-ff` merges preserve feature shape in history at the cost of a merge commit; linear-history purists would disagree — the trade-off is recorded, which is the point of this file.
- Accepted cost: real ceremony overhead per release (branch, bump, double merge, tag). Judged worth it because the history is a deliverable. **The honest caveat, recorded here deliberately:** on a high-velocity team with strong CI, the author would advocate trunk-based development with feature flags instead — branching strategy should follow deploy cadence, team size, and rollback cost, not fashion.
