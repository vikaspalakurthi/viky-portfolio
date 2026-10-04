# System design

A portfolio site is a small system, but small systems still deserve explicit design. This doc records the serving model, the budgets, the threat model, and — most usefully — how the design would evolve if requirements changed.

## Serving model: build-time rendering, edge delivery

```
 commit → merge to main → Next.js build → immutable static assets → CDN edge
                                              (HTML + CSS + JS)
                                                    │
 visitor ◀──────────────────────────────────────────┘   no origin server
                                                        in the request path
```

The content changes at **commit time**, not request time, so the system renders at build time. Consequences:

- **Latency** — every request is served from a CDN edge; p50 ≈ CDN latency worldwide. There is no server to be slow.
- **Availability** — the site is as available as the CDN. No process to crash, no cold starts, no connection pools.
- **Scalability** — traffic spikes are absorbed by the CDN; cost and capacity are O(1) in traffic for practical purposes.
- **State** — there is none. This is the single most load-bearing design decision: almost every other property falls out of it.

## Performance budget

| Metric | Budget | Current |
| --- | --- | --- |
| First Load JS (shared) | < 100 kB | ~87 kB |
| First Load JS (heaviest page) | < 150 kB | ~135 kB |
| Third-party runtime requests | 0 | 0 |
| Fonts | self-hosted, ≤ 6 weights | 6 (4 Inter + 2 JetBrains Mono) |

The hero animation is raw canvas precisely to keep a charting library out of the bundle. Framer Motion is the one deliberate heavy dependency; it's shared across all pages and cached after first load.

## Security posture / threat model

No runtime inputs, no database, no auth, no cookies, no forms that submit anywhere. The realistic attack surface is:

1. **The framework's serving path** — mitigated by taking patch releases promptly (Next.js is pinned exact and bumped deliberately, not floated).
2. **The supply chain** — mitigated by a committed lockfile, exact pins for the framework, and `npm audit` triage **against this threat model**: advisories about Server Actions, middleware, image optimization, or self-hosted servers don't apply to a static export with none of those. Triage is documented when findings are accepted rather than fixed.
3. **The deploy pipeline** — GitHub + Vercel accounts; mitigated with 2FA and the branch rules in [branching-strategy.md](branching-strategy.md) (production = `main` only).

## Failure modes and rollback

| Failure | Blast radius | Recovery |
| --- | --- | --- |
| Bad deploy (visual/content bug) | Cosmetic — no state to corrupt | Redeploy previous immutable build (instant), or `git revert -m 1` the release merge on `main` |
| Broken build | None — ships nothing | Fix on a branch; `main` still serves the last good build |
| CDN outage | Site down | Provider-level; accepted for a portfolio. (For a product: multi-CDN or origin fallback.) |
| Dependency advisory | None at runtime until exploited | Triage against threat model; patch via `hotfix/*` if applicable |

## How this design evolves (the interesting part)

The design is minimal *because requirements are minimal*, with known extension points rather than speculative infrastructure:

- **Contact form** → a serverless function or form service (Formspree-class) + spam protection. Still no database; messages land in email. The static page posts to it — first dynamic element, isolated behind one endpoint.
- **Blog** → MDX files in the repo, same build-time model, RSS at build. A CMS only becomes worth its operational cost when a non-engineer edits content.
- **Analytics** → edge/server-side counting (Vercel Analytics-class) over a client tracker, preserving the zero-third-party-request property.
- **"Now playing" style live data** → an API route with ISR or short-TTL edge cache — the first genuine server runtime, introduced only when data truly changes at request time.
- **10M visitors/day** → nothing. That's the point of the static model; the CDN absorbs it. The build pipeline, not serving, would be the eventual bottleneck — and it runs once per release.

Each step adds the *smallest* amount of runtime that the new requirement forces, and no earlier. That principle — match the system's dynamism to the data's actual rate of change — is the transferable lesson from this small system to the trading systems described on the site, which sit at the opposite end of the spectrum (streaming inputs, scheduled pipelines, hard failure semantics) for exactly the same reason.
