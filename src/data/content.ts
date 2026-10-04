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
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
