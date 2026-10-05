// ============================================================================
//  SITE CONTENT — edit everything here. Components read from this file only.
//  Fields marked  // TODO: confirm from resume  are best-guess placeholders.
// ============================================================================

export const site = {
  name: "Vikas Palakurthi",
  handle: "vikas",
  role: "Senior SRE / DevOps / Observability",
  // Hero headline: first part plain, last word carries the gradient.
  headline: { lead: "I keep production", gradient: "boring." },
  tagline:
    "Senior SRE / DevOps / Observability engineer for the platforms everyone else depends on — large-scale Elasticsearch logging, Kafka pipelines, Kubernetes fleets, and alerting that actually means something. When systems go quiet, I ship products of my own.",
  eyebrow: "VIKAS PALAKURTHI · SENIOR SRE / DEVOPS / OBSERVABILITY · AUSTIN, TX",
  statusBadge: { main: "ALL SYSTEMS OPERATIONAL", aside: "— AVAILABLE FOR HIRE" },
  terminalPrompt: "vikas@austin:~$",
  openToWorkPill: "open_to_work=true",
  location: "Austin, TX",
  email: "palakurthi.vikas@gmail.com",
  resumeUrl: "/resume.pdf", // drop your resume PDF in /public to enable the button
  portrait: "/viky-portrait.jpg",
  avatar: "/viky-avatar.jpg",
  portraitCaption: { name: "VIKAS PALAKURTHI", role: "SENIOR SRE / DEVOPS" },
  // The floating terminal card next to the portrait.
  identityCard: [
    { prompt: true, text: "identity --verify" },
    { check: true, text: "vikas.palakurthi — human, confirmed" },
    { check: true, text: "region: austin-tx · open_to_work" },
  ],
  heroCtas: {
    primary: { label: "View running services ↓", href: "#services" },
    secondary: { label: "$ ping vikas", href: "#contact" },
  },
  socials: {
    github: "https://github.com/vikaspalakurthi",
    linkedin: "https://www.linkedin.com/in/vikas-palakurthi-337b76130",
  },
};

// Scrolling keyword ticker under the hero.
export const ticker: string[] = [
  "ELASTICSEARCH",
  "KAFKA",
  "KUBERNETES",
  "EKS",
  "HELM",
  "PROMETHEUS",
  "GRAFANA",
  "OPENTELEMETRY",
  "TERRAFORM",
  "ARGOCD",
  "CLAUDE API",
  "MCP",
  "PAGERDUTY",
  "PYTHON",
  "GO",
  "FASTAPI",
  "REACT",
  "NEXT.JS",
];

// Metric tiles under the ticker. Every number is a verified fact.
export const metrics = [
  { value: "10y", label: "running production infrastructure — AWS, Kubernetes, and everything observability", accent: true },
  { value: "15 TB/day", label: "active Elasticsearch ingestion wrangled across stg/prod clusters", accent: false },
  { value: "2,000+", label: "dashboards & alert rules migrated Datadog → Prometheus at Apple", accent: false },
  { value: "0", label: "visible panic events during incidents (externally, anyway)", accent: true },
];

export const about = {
  command: "$ whoami",
  heading: "Reliability engineer by trade. Builder by habit.",
  paragraphs: [
    "I build and run the platforms other engineers depend on: large-scale Elasticsearch logging clusters, Kafka streaming pipelines, Kubernetes fleets on EKS, and the alerting that ties it all together. Most recently I did exactly that at Apple, leading a team of 10 through an enterprise telemetry migration.",
    "On the side I design, build, and operate my own products end to end — a premarket options analytics engine and an AI-powered trading journal among them. Shipping solo teaches the things on-call can't: scope, product sense, and owning every layer of the stack.",
  ],
  callout: "Now looking for my next SRE / DevOps / Observability home — Austin or remote.",
  offClock:
    "Off the clock: shipping my own side projects end to end — and reading other people's postmortems so I don't star in my own.",
  specSheet: {
    title: "# spec sheet",
    rows: [
      { key: "role", value: '"Senior SRE / DevOps / Observability"' },
      { key: "base", value: '"Austin, TX"' },
      { key: "mode", value: '["on-site", "hybrid", "remote"]' },
      { key: "core_stack", value: '["Prometheus", "ELK", "Kafka", "K8s"]' },
      { key: "side_quests", value: '"ships own products"' },
      { key: "status", value: '"interviewing"', live: true },
    ],
  },
  logCard: {
    title: "prod — tail -f /var/log/career.log",
    lines: [
      { time: "[08:12:04]", level: "INFO", text: "cluster status: green" },
      { time: "[08:12:07]", level: "INFO", text: "kafka lag: 0ms · groups healthy" },
      { time: "[08:12:11]", level: "WARN", text: "coffee level below threshold" },
      { time: "[08:12:12]", level: "INFO", text: "auto-remediation: refill ✓" },
      { time: "[08:12:19]", level: "INFO", text: "deploy → canary 100% healthy" },
      { time: "[08:12:23]", level: "INFO", text: "pagerduty: suspiciously quiet" },
      { time: "[08:12:41]", level: "EVENT", text: "hiring_signal: recruiter_view" },
      { time: "[08:12:42]", level: "INFO", text: "available=true · austin|remote" },
    ],
  },
};

// ---------------------------------------------------------------------------
//  CAREER LOG  — experience rendered as log entries. Facts from master resume.
// ---------------------------------------------------------------------------
export type CareerEntry = {
  level: "INFO" | "EVENT";
  period: string;
  org: string;
  role: string;
  body: string;
};

export const careerLog: {
  command: string;
  heading: string;
  entries: CareerEntry[];
  truncated: string;
} = {
  command: "$ tail -f /var/log/career.log",
  heading: "The log so far.",
  entries: [
    {
      level: "INFO",
      period: "2025.08 → 2026.09",
      org: "Apple",
      role: "— Observability Lead · contract via Arvik Strategies",
      body: "Led a team of 10 migrating enterprise telemetry from Datadog to Apple's internal Prometheus platform (MOSAIC): 1,000+ dashboards and 1,000+ alert rules with zero disruption to production monitoring. Built an LLM-driven transformation pipeline on the Claude Code API and MCP that cut manual migration effort by 70–80%, and moved every observability asset into GitOps with CI/CD-deployed dashboards, alerts, and recording rules.",
    },
    {
      level: "INFO",
      period: "2021.06 → 2025.08",
      org: "Freddie Mac",
      role: "— ELK / Observability Engineer (Lead)",
      body: "Ran the enterprise logging and monitoring platform: migrated self-managed ELK on EKS to Elastic Cloud with zero data loss, built Prometheus federation and telemetry pipelines, defined SLIs/SLOs with error budgets, carried the on-call rotation with documented runbooks, and executed yearly cross-region DR failover exercises.",
    },
    {
      level: "INFO",
      period: "2019.06 → 2021.05",
      org: "T-Mobile",
      role: "— ELK DevOps Engineer / Kafka Admin",
      body: "Administered Elasticsearch and Confluent Kafka clusters across all environments — RBAC and SSL/SASL hardening, partition rebalancing and broker operations, plus custom Prometheus exporters for consumer lag and replication health.",
    },
  ],
  truncated:
    "older entries truncated (Capital One, T-Mobile · 2016–2019) — request the full resume for complete history",
};

// ---------------------------------------------------------------------------
//  SERVICES  — self-built products rendered as running services.
// ---------------------------------------------------------------------------
export type Service = {
  name: string;
  windowTitle: string;
  blurb: string;
  stack: string[];
  screenshot?: string; // path under /public; placeholder frame rendered until set
  barsSeed: number; // seed for the little activity bars
};

export const services: {
  command: string;
  heading: string;
  sub: string;
  items: Service[];
} = {
  command: "$ systemctl status side-projects --all",
  heading: "Running services.",
  sub: "Products I designed, built, and operate end to end — real users, real on-call, and no one to page but myself.",
  items: [
    {
      name: "oifetcher",
      windowTitle: "oifetcher — premarket view",
      blurb:
        "Premarket options analytics with paying subscribers. Maps open-interest walls and key levels before the bell — and I own everything behind it: infrastructure, deploys, billing, support, and incidents.",
      stack: ["TypeScript", "React", "Python"],
      screenshot: "/oifetcher-preview.webp",
      barsSeed: 1.7,
    },
    {
      name: "tradenarrate",
      windowTitle: "tradenarrate — journal view",
      blurb:
        "AI-powered trading journal with behavioral coaching, built on the Claude API — the same LLM stack I used to automate enterprise migration at Apple, pointed at a consumer product.",
      stack: ["Next.js", "TypeScript", "Claude API"],
      screenshot: "/tradenarrate-preview.webp",
      barsSeed: 2.3,
    },
  ],
};

// ---------------------------------------------------------------------------
//  SKILLS  — instrumented skill cards with sparklines and a status line.
// ---------------------------------------------------------------------------
export type SkillGroup = {
  group: string;
  items: string[];
  state: string;
  spark: string; // polyline points for the 90x28 sparkline
  sparkColor: "accent" | "info";
};

export const skills: { command: string; heading: string; groups: SkillGroup[] } = {
  command: "$ top -o expertise",
  heading: "Instrumented skills.",
  // Ordered to walk the title: DevOps (platform → delivery) → Observability
  // (telemetry → streaming) → SRE (reliability → security) → force multipliers.
  groups: [
    {
      group: "CLOUD & PLATFORM",
      items: ["AWS", "Kubernetes", "EKS", "Docker", "Helm", "Istio/Envoy"],
      state: "self-healing",
      spark: "0,24 16,16 30,19 44,9 58,13 72,5 90,8",
      sparkColor: "accent",
    },
    {
      group: "IAC, CI/CD & GITOPS",
      items: ["Terraform", "CloudFormation/CDK", "Ansible", "Jenkins", "GitHub Actions", "ArgoCD"],
      state: "zero drift",
      spark: "0,20 15,12 30,16 45,7 60,12 75,4 90,7",
      sparkColor: "info",
    },
    {
      group: "OBSERVABILITY & LOGGING",
      items: ["Prometheus", "Grafana (LGTM)", "Elasticsearch / ELK", "OpenTelemetry", "Datadog", "Elastic APM"],
      state: "battle-tested",
      spark: "0,22 12,18 24,20 36,10 48,14 60,6 74,9 90,3",
      sparkColor: "accent",
    },
    {
      group: "STREAMING & EVENTS",
      items: ["Kafka (Confluent)", "RabbitMQ", "AWS EventBridge", "Streaming pipelines"],
      state: "zero lag",
      spark: "0,16 14,20 28,8 42,12 56,5 70,11 90,4",
      sparkColor: "info",
    },
    {
      group: "RELIABILITY & INCIDENT RESPONSE",
      items: ["SLIs/SLOs", "Error budgets", "PagerDuty", "Opsgenie", "Runbooks", "Postmortems", "DR failovers"],
      state: "calm under fire",
      spark: "0,10 14,14 28,6 42,18 56,8 70,15 90,6",
      sparkColor: "accent",
    },
    {
      group: "SECURITY & ACCESS",
      items: ["Vault", "IAM", "KMS", "SAML SSO", "SSL/TLS", "Kafka RBAC"],
      state: "least privilege",
      spark: "0,14 15,18 30,9 45,15 60,7 75,12 90,5",
      sparkColor: "info",
    },
    {
      group: "AI & LLM AUTOMATION",
      items: ["Claude API", "Claude Code", "MCP", "Agentic loops & subagents", "Claude Skills", "Prompt engineering", "LLM validation pipelines"],
      state: "context-aware",
      spark: "0,18 15,22 30,10 45,14 60,6 75,10 90,2",
      sparkColor: "accent",
    },
    {
      group: "LANGUAGES & FRAMEWORKS",
      items: ["Python", "Go", "Bash", "TypeScript", "React", "Next.js", "FastAPI"],
      state: "always compiling",
      spark: "0,21 14,13 28,17 42,8 56,11 70,5 90,9",
      sparkColor: "info",
    },
  ],
};

// ---------------------------------------------------------------------------
//  CONTACT
// ---------------------------------------------------------------------------
export const contact = {
  command: "$ ssh vikas@your-infrastructure",
  heading: { lead: "Let's keep something running", gradient: "together." },
  sub: "Austin, TX · on-site, hybrid, or remote · Senior SRE / DevOps / Observability",
  ctas: [
    { label: "Open a connection →", href: "mailto:palakurthi.vikas@gmail.com", primary: true },
    { label: "LinkedIn ↗", href: "https://www.linkedin.com/in/vikas-palakurthi-337b76130", primary: false },
    { label: "GitHub ↗", href: "https://github.com/vikaspalakurthi", primary: false },
  ],
  responseLine: "avg response time: < 24h · enthusiasm uptime: 100%",
  signature: { name: "Vikas", caption: "— written, designed & kept online by an actual human" },
};

export const footer = {
  copyright: "© 2026 Vikas Palakurthi — built dark, runs quiet",
  status: "all systems operational",
};

export const miniVikas = {
  serverLabel: "PROD — HANDLE WITH CARE",
  caption: "mini-vikas · on patrol · keeping prod green",
};

export const nav = [
  { label: "about", href: "/#about" },
  { label: "skills", href: "/#skills" },
  { label: "services", href: "/#services" },
  { label: "logs", href: "/#logs" },
  { label: "engineering", href: "/engineering" },
  { label: "contact", href: "/#contact" },
];

// ---------------------------------------------------------------------------
//  ENGINEERING  — the /engineering page: how this site itself is built and
//  shipped. The site is its own case study; full docs live in /docs on GitHub.
// ---------------------------------------------------------------------------
export const engineering = {
  kicker: "This site is its own case study",
  title: "Engineering, in the open",
  intro: [
    "A portfolio tells you what someone has built. This page shows you how I build — using this site itself as the example. The repository is public: the architecture docs, the decision records, and the release history are all inspectable, not just claimed.",
    "Everything below is kept honest by the repo. If the docs say releases are tagged from release branches, the git history shows the tags and the merges.",
  ],
  repoUrl: "https://github.com/vikaspalakurthi/viky-portfolio",
  docsUrl: "https://github.com/vikaspalakurthi/viky-portfolio/tree/main/docs",

  stack: [
    {
      name: "Next.js 16 (App Router)",
      why: "Every page here is static — so the framework is used for what it's good at: file-based routing, build-time rendering, and zero-config code splitting. No server runtime to patch, scale, or wake up.",
    },
    {
      name: "TypeScript",
      why: "The content layer is typed (Experience, Project, …), so a malformed entry fails the build instead of rendering broken UI. Types are the contract between content and components.",
    },
    {
      name: "Tailwind CSS 4",
      why: "Design tokens (colors, animation curves) live in one @theme block in CSS — v4's config-less setup. Utilities keep styles co-located with markup, and only the classes actually used are generated at build time.",
    },
    {
      name: "Framer Motion + raw Canvas",
      why: "Framer Motion for declarative scroll reveals; a hand-rolled canvas/rAF loop for the hero's market tape, where per-frame control matters. Both respect prefers-reduced-motion.",
    },
    {
      name: "Self-hosted fonts",
      why: "Space Grotesk, JetBrains Mono, and the signature script ship from the same origin via @fontsource. No Google Fonts request: no third-party dependency at build or runtime, no layout-shifting late font swap.",
    },
    {
      name: "Vercel",
      why: "The static output deploys to a global CDN. main is the production branch; a deploy is a git operation, and rolling back is redeploying the previous immutable build.",
    },
  ],

  decisions: [
    {
      title: "All copy lives in one typed data file",
      decision: "Every string on this site comes from src/data/content.ts. Components are purely presentational.",
      why: "Editing content never risks breaking layout, and reskinning never risks losing copy. It's a CMS's separation-of-concerns without a CMS's moving parts.",
      tradeoff: "No non-technical editing UI — acceptable when the only editor is the engineer.",
    },
    {
      title: "Fully static over server rendering",
      decision: "No API routes, no server components doing runtime work, no database. The build emits plain HTML/CSS/JS.",
      why: "A portfolio's content changes at commit time, not request time. Static means CDN-cacheable everywhere, no cold starts, and a near-zero attack surface.",
      tradeoff: "Any future dynamic feature (contact form, view counts) needs an external service — a deliberate boundary, decided when needed.",
    },
    {
      title: "Canvas for the hero, not a video or GIF",
      decision: "The market-data backdrop is ~200 lines of canvas code, not a looping video asset.",
      why: "It's resolution-independent, weighs kilobytes instead of megabytes, pauses itself off-screen via IntersectionObserver, and renders a single static frame under prefers-reduced-motion.",
      tradeoff: "More code to own than dropping in an mp4 — but the code is the portfolio.",
    },
    {
      title: "Release branching, even solo",
      decision: "main is production-only, develop integrates, features branch, releases are cut on release/x.y.z branches and tagged.",
      why: "Process that only exists when a team enforces it isn't process. Running the full flow solo keeps the discipline honest and makes the git history itself a demonstration.",
      tradeoff: "More ceremony than trunk-based — the right call here because the history is a deliverable. On a high-velocity team I'd bias to trunk-based with feature flags.",
    },
  ],

  release: {
    summary:
      "This repo follows a git-flow-style release branching strategy. Nothing lands on main except a release or a hotfix, every production state is a tag, and the merge history is the audit trail.",
    branches: [
      { name: "main", purpose: "Production. Every commit is deployable; every release is an annotated tag (v1.0.0, v1.1.0, …). Vercel deploys from here." },
      { name: "develop", purpose: "Integration. Completed features accumulate here until a release is cut." },
      { name: "feature/*", purpose: "One scoped change each, branched from develop, merged back with --no-ff so the branch stays visible in history." },
      { name: "release/x.y.z", purpose: "Release prep: version bump, final checks. Merges to main (tagged) and back to develop." },
      { name: "hotfix/x.y.z", purpose: "Emergency path: branched from main, fixed, tagged, merged to both main and develop." },
    ],
    flow: [
      "Branch feature/<name> from develop; build and verify (npm run build must pass).",
      "Merge the feature into develop with --no-ff.",
      "Cut release/x.y.z from develop; bump the version; final verification.",
      "Merge to main with --no-ff; tag vx.y.z; deploy.",
      "Merge the release back into develop so nothing drifts.",
    ],
  },

  systemDesign: [
    {
      title: "Serving model",
      body: "Build-time rendering to immutable static assets, pushed to a CDN's edge. There is no origin server in the request path — the 'backend' is the build step. Practical consequences: global p50 latency is CDN latency, availability is the CDN's, and traffic spikes are someone else's capacity-planning problem.",
    },
    {
      title: "Performance budget",
      body: "First Load JS is held around ~135 kB. The only heavy dependency is Framer Motion; the hero animation is raw canvas specifically to avoid importing a charting library for decoration. Fonts are subset, self-hosted, and preloaded by the framework.",
    },
    {
      title: "Security posture",
      body: "No runtime inputs, no database, no auth, no cookies — the exploitable surface is essentially the framework's static serving path and the supply chain. So the real security work is dependency hygiene: pinned versions, npm audit triage against the actual threat model (a static site doesn't have Server Actions to attack), and patch releases taken promptly.",
    },
    {
      title: "Failure modes & rollback",
      body: "A bad deploy can't corrupt state because there is none. Rollback is re-pointing to the previous immutable build — or reverting the merge commit on main, which the branching strategy keeps atomic. The scheduled-pipeline and streaming systems I build for trading have much harder failure semantics; this site is deliberately at the boring end of that spectrum.",
    },
  ],

  cta: {
    lead: "The full write-ups — architecture, decision records (ADRs), branching strategy, and system-design notes — live in the repo.",
    repoLabel: "Browse the repository",
    docsLabel: "Read the docs",
  },
};
