# Release branching strategy

This repo uses a **git-flow-style release branching strategy**. It is intentionally more ceremony than a solo static site strictly needs — the point is that the discipline is real and the history proves it. Every rule below is verifiable in `git log --graph --decorate`.

## Branch roles

| Branch | Role | Rules |
| --- | --- | --- |
| `main` | **Production.** What Vercel serves. | Only receives `release/*` and `hotfix/*` merges. Every merge is `--no-ff` and immediately tagged `vX.Y.Z` (annotated tag). Never commit directly. |
| `develop` | **Integration.** The next release forms here. | Receives completed `feature/*` merges (`--no-ff`). Must always build (`npm run build`). |
| `feature/<name>` | One scoped change. | Branched from `develop`. Short-lived. Deleted after merge; the `--no-ff` merge commit preserves its shape in history. |
| `release/X.Y.Z` | Release preparation. | Branched from `develop` when the release content is complete. Only version bumps and release fixes land here — no new features. Merged to `main` (tagged) **and** back to `develop`, then deleted. |
| `hotfix/X.Y.Z` | Emergency production fix. | Branched from `main`. Merged to `main` (tagged) **and** to `develop`, then deleted. |

```
main     ──●─────────────────────────●──▶  production (tagged releases)
           │ v1.0.0                  ▲ v1.1.0
           │                         │
develop    └──●──────────●───────────●──▶  integration
               │         ▲           ▲
               │         │           └── release/1.1.0 merged back
feature/*      └──●───●──┘  --no-ff merge
```

## How a change ships

1. `git checkout develop && git checkout -b feature/<name>`
2. Build the change. `npm run build` must pass before the branch is considered done.
3. `git checkout develop && git merge --no-ff feature/<name>` — the merge commit documents the feature as a unit. Delete the feature branch.
4. When `develop` holds a release's worth of changes: `git checkout -b release/X.Y.Z` — bump `version` in `package.json`, final verification pass.
5. `git checkout main && git merge --no-ff release/X.Y.Z && git tag -a vX.Y.Z`
6. `git checkout develop && git merge --no-ff release/X.Y.Z` — so `develop` includes the version bump and never drifts behind `main`. Delete the release branch.
7. Deploy `main` (`npx vercel --prod`, or Vercel's git integration deploying `main` automatically).

## Versioning

Semantic-ish versioning adapted to a website:

- **Major (X)** — redesigns or restructures that change what the site *is*.
- **Minor (Y)** — new pages, new sections, meaningful content additions. Most releases are minor.
- **Patch (Z)** — typo fixes, dependency patches, small corrections. Hotfixes are always patches.

Tags are annotated (`git tag -a`) so each release records who cut it, when, and why.

## Why this strategy, and when it would be the wrong one

**Why here:** `main`-as-production maps exactly to how Vercel deploys; tagged releases make rollback a one-step operation (`git revert -m 1 <merge>` or redeploying the previous tag's build); and the merge graph itself is a demonstration artifact — this repo is linked from a resume.

**When not:** on a high-velocity team with good CI and feature flags, this much ceremony slows integration down — there I'd advocate trunk-based development: short-lived branches onto `main`, release from `main` with tags, flags instead of release branches. The honest answer is that branching strategy is a function of deploy cadence, team size, and rollback cost — this repo documents the reasoning, not just the ritual. See [ADR-0007](decisions/0007-release-branching-strategy.md).
