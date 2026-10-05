import type { BlogPost } from "./types";

// ============================================================================
//  POST — Apple / MOSAIC migration. Every claim traces to the master resume
//  fact bank; detail stays at the level already published on this site.
// ============================================================================

export const mosaicMigration: BlogPost = {
  slug: "mosaic-migration",
  title: "2,000 observability assets off Datadog, with an LLM in the loop",
  org: "Apple",
  period: "2025.08 → 2026.09",
  summary:
    "How a team of 10 moved 1,000+ dashboards and 1,000+ alert rules from Datadog to Apple's internal Prometheus platform — and how an LLM pipeline on the Claude Code API cut the manual work by 70–80%.",
  readMinutes: 8,
  tldr: [
    "1,000+ dashboards and 1,000+ alert rules migrated from Datadog to MOSAIC (Apple's internal Prometheus platform) and Grafana — with zero disruption to production monitoring.",
    "An LLM transformation pipeline — Claude Code API, with MCP supplying platform context — cut manual migration effort by 70–80%.",
    "Every observability asset landed in Git: PR-reviewed, CI-deployed, rollback-able. The migration ended with a better operating model, not just a new backend.",
  ],
  skills: [
    "Prometheus",
    "Grafana (LGTM)",
    "Datadog",
    "Claude API",
    "Claude Code",
    "MCP",
    "Prompt engineering",
    "LLM validation pipelines",
  ],
  status: "published",
  blocks: [
    {
      kind: "prose",
      title: "context",
      paragraphs: [
        "Apple was consolidating telemetry onto MOSAIC, its internal Prometheus-based platform, integrated with Grafana. In the way stood years of accumulated Datadog real estate: more than a thousand dashboards and a thousand alert rules, spread across multi-tenant services, each one quietly load-bearing for some team's on-call.",
        "The constraint that shaped everything: production monitoring could not blink. A migration that drops an alert rule for a weekend is not a migration, it's an outage waiting for its moment. So the bar was functional parity, proven — not approximated.",
        "I led a team of ten (three onsite, seven offshore). The naive plan — hand-translate every asset — penciled out to months of error-prone toil. So we built a pipeline instead, and made the translation itself a system with inputs, context, validation, and deployment.",
      ],
    },
    {
      kind: "flow",
      title: "the pipeline",
      caption:
        "Assets flow left to right; nothing reaches production except through Git. The two layers under the transformer are what made LLM output consistent instead of creative.",
      stages: [
        { label: "Datadog export", sub: "dashboards · monitors, as structured input" },
        {
          label: "LLM transformer",
          sub: "Claude Code API · prompt templates",
          tone: "accent",
          feeds: [
            { label: "MCP context layer", sub: "metric schemas · label conventions · query patterns" },
            { label: "cache + cheat-sheets", sub: "proven translations, reused" },
          ],
        },
        {
          label: "multi-stage validation",
          sub: "metric output · query behavior · alert triggers",
          tone: "info",
        },
        { label: "Git", sub: "source of truth · PR review" },
        { label: "CI deploy", sub: "dashboards · alerts · recording rules" },
      ],
    },
    {
      kind: "prose",
      title: "how the transformation works",
      paragraphs: [
        "Raw prompting does not survive contact with a thousand dashboards. What made the output consistent was context, delivered mechanically: an MCP layer served the model the platform's metric schemas, label conventions, and known query patterns, so a Datadog query arrived at the model alongside everything it needed to emit PromQL that fit MOSAIC's conventions — not just PromQL that parses.",
        "Prompt templates did the same job on the instruction side: reusable, reviewed, versioned — an encoded playbook rather than per-asset improvisation. And because dashboards repeat themselves endlessly, a cache and cheat-sheet layer stored proven translations; the pipeline only paid LLM latency and cost for genuinely new shapes.",
        "The output of every run was a candidate asset — never a deployed one. Candidates went to validation, and validated assets went to Git as pull requests, where CI deployed them on merge. The LLM had no write access to anything that mattered.",
      ],
    },
    {
      kind: "sequence",
      title: "one dashboard's round trip",
      caption:
        "The validator compares the candidate against the live Datadog original — metric output, query behavior, alert triggers — before anything opens a PR.",
      actors: ["Datadog export", "Transformer", "MCP context", "Claude API", "Validator", "Git + CI"],
      steps: [
        { from: 0, to: 1, label: "dashboard JSON" },
        { from: 1, to: 2, label: "resolve metrics + labels" },
        { from: 2, to: 1, label: "schemas · conventions", dashed: true },
        { from: 1, to: 3, label: "prompt template + context" },
        { from: 3, to: 1, label: "PromQL + panel spec", dashed: true },
        { from: 1, to: 4, label: "candidate dashboard" },
        { from: 4, to: 0, label: "compare vs. source output" },
        { from: 4, to: 5, label: "parity proven → open PR" },
        { from: 5, to: 5, label: "merge → CI deploys to MOSAIC" },
      ],
    },
    {
      kind: "incidents",
      title: "what broke along the way",
      items: [
        {
          level: "WARN",
          title: "high-cardinality metrics made everything expensive",
          body: "Multi-tenant Kubernetes metrics carried label sets nobody had audited in years. Translating them faithfully would have faithfully reproduced the waste. We used telemetry usage analysis to find what was actually read, then applied allow/deny lists and killed redundant and high-cardinality series — the migrated platform came out cheaper and faster than the source, not just equivalent.",
        },
        {
          level: "WARN",
          title: "a faithful port of the alerts would have ported the noise",
          body: "Years of Datadog monitors meant years of accumulated alert fatigue. A 1:1 translation was the easy win and the wrong one. We retuned alerting as part of the migration — thresholds, grouping, routing — and the signal-to-noise ratio improved enough to speed up incident detection on the other side.",
        },
        {
          level: "ERROR",
          title: "the naive pipeline re-asked the same questions, at API prices",
          body: "Early runs translated every asset from scratch, re-deriving identical query patterns hundreds of times — slow, expensive, and occasionally inconsistent. The fix was the cache and cheat-sheet layer: store each proven translation pattern, reuse it on every lookalike. API call volume dropped, consistency rose, and the cheat-sheets became documentation the team still uses.",
        },
        {
          level: "WARN",
          title: "\"the LLM said so\" convinces nobody — correctly",
          body: "No on-call engineer accepts a migrated alert rule on the model's word, nor should they. The answer was an AI-assisted, multi-stage validation system: compare metric outputs, query behavior, and alert trigger conditions between source and target before a human ever reviews the PR. Validation, not generation, is what made the 70–80% effort reduction trustworthy.",
        },
      ],
    },
    {
      kind: "lessons",
      title: "lessons",
      items: [
        "Context beats cleverness. The MCP layer feeding schemas and conventions to the model did more for output quality than any amount of prompt wizardry.",
        "Validation is the product. The pipeline's value was never that an LLM wrote PromQL — it was that every translated asset arrived with proof of parity attached.",
        "Cache like you mean it. In LLM pipelines, caching is not an optimization; it is cost control, latency control, and consistency control in one layer.",
        "A migration is the best time to pay down operational debt — cardinality, alert noise, naming conventions — because every asset is already on the table.",
        "GitOps turns a one-off migration into a permanent operating model: review, rollback, and audit survived long after the last Datadog dashboard was switched off.",
      ],
    },
    {
      kind: "cheatsheet",
      title: "PromQL migration patterns",
      intro:
        "The translations that came up constantly moving Datadog queries to Prometheus — generic patterns, no platform internals.",
      rows: [
        {
          k: "sum by (service) (rate(http_requests_total[5m]))",
          v: "The default shape for a Datadog rate + group-by. Almost every throughput panel reduces to this.",
        },
        {
          k: "histogram_quantile(0.99, sum by (le, service) (rate(latency_bucket[5m])))",
          v: "Percentiles from histograms. Keep `le` in the `by` clause or the quantile silently breaks.",
        },
        {
          k: "level:metric:operation  →  job:http_errors:rate5m",
          v: "Recording-rule naming convention. Pre-aggregate hot queries once; dashboards read the rule, not the raw series.",
        },
        {
          k: "label_replace(metric, \"service\", \"$1\", \"pod\", \"(.*)-[a-z0-9]+-[a-z0-9]+\")",
          v: "Bridging legacy label conventions to the target platform's, without touching instrumentation first.",
        },
        {
          k: "topk(10, sum by (tenant) (rate(ingest_bytes_total[5m])))",
          v: "Bounding cardinality in exploratory panels — and finding who is responsible for it.",
        },
        {
          k: "increase(errors_total[1h])  vs  rate(errors_total[5m])",
          v: "Counts for humans reading a window; per-second rates for alert math. Mixing them up is the classic ported-alert bug.",
        },
      ],
    },
    {
      kind: "prose",
      title: "where it landed",
      paragraphs: [
        "Over a thousand dashboards and a thousand alert rules run on MOSAIC and Grafana, with production monitoring never interrupted along the way. Manual migration effort dropped 70–80% against the hand-translation baseline. Metric naming was standardized to OpenTelemetry conventions, ingestion costs fell with the cardinality work, and new services onboard through the same Git-based, templated workflows the migration left behind.",
        "The part I'd defend hardest in a design review is the boundary: the LLM proposed, the validator proved, Git decided. That order is why the speed never cost us trust.",
      ],
    },
  ],
};
