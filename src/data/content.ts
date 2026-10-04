// ============================================================================
//  SITE CONTENT — edit everything here. Components read from this file only.
//  Fields marked  // TODO: confirm from resume  are best-guess placeholders.
// ============================================================================

export const site = {
  // TODO: confirm full name from resume
  name: "Vikas Palakurthi",
  handle: "Viky",
  // One-line positioning: technical founder who architects AND ships.
  role: "Technical Founder · Trading-Systems Engineer",
  tagline:
    "I build production trading tools end-to-end — from options-analytics engines and AI journaling agents to the data pipelines and UIs behind them.",
  location: "United States", // TODO: confirm from resume
  email: "palakurthi.vikas@gmail.com",
  resumeUrl: "/resume.pdf", // drop your resume PDF in /public to enable the button
  socials: {
    github: "https://github.com/vikaspalakurthi",
    x: "https://x.com/ROR_Traders",
    xAlt: "https://x.com/tradingsinner",
    website: "https://rulesoverresults.com",
    linkedin: "https://www.linkedin.com/in/vikas-palakurthi-337b76130",
  },
};

// Rotating "ticker" strip under the hero — quick credibility signals.
export const ticker: string[] = [
  "Arvik Strategies LLC",
  "ROR Traders — Rules Over Results",
  "8 apps built · 2 in production",
  "Python · FastAPI · Next.js · TypeScript",
  "0DTE / short-dated options systems",
  "AI agents + deterministic execution",
  "1.6k+ posts shipped in ~4 months",
];

export const about = {
  // TODO: refine with resume detail. This is written from your product work.
  paragraphs: [
    "I'm a founder-engineer who ships. I run Arvik Strategies LLC and build ROR Traders (“Rules Over Results”) — a trading-technology and content brand — which means I own the whole stack: data ingestion, analytics engines, backend APIs, React front-ends, and the deployment around them.",
    "My focus is turning messy market data into fast, reliable decision tools. I've built premarket options-analytics engines, an AI-powered trading journal with behavioral coaching, backtesting infrastructure, and real-time scanners — designing each so the deterministic parts stay deterministic and the AI lives only at the edges where judgment helps.",
    "I work in tight, iterative loops with a strong bias for shipping. Eight self-built applications later, the pattern that works for me is small, well-scoped contracts and fast feedback — building the thing, using it live in the market, and hardening what survives contact.",
  ],
  highlights: [
    { value: "8+", label: "apps built end-to-end" },
    { value: "2", label: "in production" },
    { value: "1.6k+", label: "posts shipped" },
    { value: "0DTE", label: "live trading systems" },
  ],
};

// ---------------------------------------------------------------------------
//  EXPERIENCE  (TODO: replace/confirm dates & titles from resume)
// ---------------------------------------------------------------------------
export type Experience = {
  role: string;
  org: string;
  period: string;
  location?: string;
  points: string[];
  stack?: string[];
};

export const experience: Experience[] = [
  {
    role: "Founder & Lead Engineer",
    org: "Arvik Strategies LLC / ROR Traders",
    period: "2025 — Present", // TODO: confirm from resume
    location: "Remote",
    points: [
      "Founded and run a trading-technology and content brand, owning product, engineering, and go-to-market.",
      "Designed and shipped a suite of trading tools: premarket options analytics, an AI trading journal, backtesting infrastructure, and live market scanners.",
      "Built and operate a paid community on Whop with recurring billing, tiered plans, and live premarket sessions.",
      "Grew an audience to 1.6k+ posts across two accounts in ~4 months while shipping product in parallel.",
    ],
    stack: ["Python", "FastAPI", "Next.js", "TypeScript", "SQLite", "AI agents"],
  },
  // TODO: add prior roles from resume (company, title, dates, bullets)
];

// ---------------------------------------------------------------------------
//  PROJECTS  — each card explains the tools / concepts / techniques used.
// ---------------------------------------------------------------------------
export type Project = {
  name: string;
  status: "Production" | "Active" | "Prototype" | "Research";
  blurb: string;
  role: string;
  // "what I demonstrated" — the resume-relevant skills this project proves
  demonstrates: string[];
  stack: string[];
  links?: { label: string; href: string }[];
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "OiFetcher",
    status: "Production",
    featured: true,
    blurb:
      "Premarket options-analytics engine. Pulls and normalizes options-chain data, then computes open-interest walls, gamma/GEX context, and magnet strikes to surface where price is likely to gravitate before the open.",
    role: "Architect & sole engineer",
    demonstrates: [
      "Data engineering: ingesting, cleaning, and normalizing large options-chain datasets",
      "Quantitative modeling: gamma exposure / open-interest / magnet-strike calculations",
      "Scheduled pipelines: reliable premarket jobs on a fixed cadence",
      "API design: a clean backend serving a real-time analytics UI",
    ],
    stack: ["Python", "FastAPI", "SQLite", "APScheduler", "React", "echarts"],
  },
  {
    name: "TradeNarrate",
    status: "Active",
    featured: true,
    blurb:
      "AI-powered trading journal with behavioral coaching. Logs trades, detects recurring behavioral patterns (overtrading, revenge trades), and narrates feedback so the trader improves the process, not just the P&L.",
    role: "Architect & sole engineer",
    demonstrates: [
      "Applied LLMs: structured behavioral analysis and natural-language coaching",
      "Product thinking: turning raw trade logs into actionable feedback",
      "Full-stack delivery: data model, backend, and interactive front-end",
    ],
    stack: ["Python", "FastAPI", "LLMs", "Next.js", "TypeScript"],
  },
  {
    name: "VAC Backtester",
    status: "Active",
    blurb:
      "Backtesting engine that unifies signal logic across backtest and live contexts, so a strategy behaves identically whether it's being tested on history or run in real time.",
    role: "Architect & sole engineer",
    demonstrates: [
      "Systems design: one signal engine, two execution contexts (no logic drift)",
      "Testing rigor: reproducible strategy evaluation over historical data",
      "Abstraction: shared contracts between simulation and live trading",
    ],
    stack: ["Python", "pandas", "SQLite"],
  },
  {
    name: "In-Play Trend Scanner",
    status: "Active",
    blurb:
      "Real-time scanner that surfaces dynamic tickers in play — filtering by open-interest walls and pivot levels to highlight names worth watching during the session.",
    role: "Architect & sole engineer",
    demonstrates: [
      "Real-time streaming: consuming and filtering live market feeds",
      "Signal design: encoding discretionary setups as deterministic filters",
    ],
    stack: ["Python", "Schwab streaming API", "FastAPI"],
  },
  {
    name: "Open-Interest Tracker",
    status: "Active",
    blurb:
      "Historical open-interest tracking application that snapshots and stores OI over time, enabling day-over-day comparison of where positioning is building.",
    role: "Architect & sole engineer",
    demonstrates: [
      "Time-series storage and retrieval",
      "Scheduled data capture and historical comparison",
    ],
    stack: ["Python", "SQLite", "APScheduler"],
  },
  {
    name: "AI-Agent / Broker Safety Layer",
    status: "Research",
    blurb:
      "Deterministic middleware that sits between AI agents and broker APIs — the LLM proposes, but a rules layer validates and executes, keeping order flow safe and auditable.",
    role: "Designer",
    demonstrates: [
      "Safety architecture: deterministic guardrails around non-deterministic models",
      "Systems thinking: clear separation between reasoning and execution",
    ],
    stack: ["Python", "Broker APIs", "LLM tool-use"],
  },
];

// ---------------------------------------------------------------------------
//  SKILLS  — grouped by category for the skills grid.
// ---------------------------------------------------------------------------
export const skills: { group: string; items: string[] }[] = [
  {
    group: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL"],
  },
  {
    group: "Backend & Data",
    items: ["FastAPI", "SQLite", "APScheduler", "pandas", "REST APIs", "Data pipelines"],
  },
  {
    group: "Frontend",
    items: ["React", "Next.js", "TypeScript", "TradingView Advanced Charts", "echarts", "Tailwind CSS"],
  },
  {
    group: "AI & Automation",
    items: ["LLM integration", "AI agents", "Claude Code", "Tool-use / function calling", "Prompt engineering"],
  },
  {
    group: "Markets & Infra",
    items: ["Schwab streaming API", "Alpaca", "Robinhood API", "Firebase", "Cloudflare", "Vercel"],
  },
  {
    group: "Domains",
    items: ["Options analytics", "Backtesting", "Quantitative modeling", "Real-time systems"],
  },
];

export const nav = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Engineering", href: "/engineering" },
  { label: "Contact", href: "/#contact" },
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
      name: "Next.js 14 (App Router)",
      why: "Every page here is static — so the framework is used for what it's good at: file-based routing, build-time rendering, and zero-config code splitting. No server runtime to patch, scale, or wake up.",
    },
    {
      name: "TypeScript",
      why: "The content layer is typed (Experience, Project, …), so a malformed entry fails the build instead of rendering broken UI. Types are the contract between content and components.",
    },
    {
      name: "Tailwind CSS",
      why: "Design tokens (colors, animation curves) live in one config file. Utilities keep styles co-located with markup, and the unused 95% of the framework is purged at build time.",
    },
    {
      name: "Framer Motion + raw Canvas",
      why: "Framer Motion for declarative scroll reveals; a hand-rolled canvas/rAF loop for the hero's market tape, where per-frame control matters. Both respect prefers-reduced-motion.",
    },
    {
      name: "Self-hosted fonts",
      why: "Inter and JetBrains Mono ship from the same origin via @fontsource. No Google Fonts request: no third-party dependency at build or runtime, no layout-shifting late font swap.",
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
