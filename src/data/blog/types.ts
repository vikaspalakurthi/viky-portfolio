// ============================================================================
//  BLOG TYPES — deep-dive posts are typed data, not markdown (ADR-0003
//  extended): every post is an ordered list of typed blocks rendered by one
//  component, so the design system applies itself and a malformed post is a
//  build error, not a broken page.
// ============================================================================

/** One stage in a left-to-right pipeline diagram (rendered in CSS). */
export type FlowStage = {
  label: string;
  sub?: string;
  tone?: "accent" | "info" | "default";
  /** Side inputs attached under this stage (context layers, caches, …). */
  feeds?: { label: string; sub?: string }[];
};

/** One message in a sequence diagram (rendered as SVG). */
export type SeqStep = {
  /** Actor indexes (0-based) into the diagram's `actors` array. */
  from: number;
  to: number;
  label: string;
  /** Replies / returns render dashed. */
  dashed?: boolean;
};

export type Incident = {
  level: "WARN" | "ERROR";
  title: string;
  body: string;
};

export type CheatRow = {
  /** The pattern / command / expression, rendered mono. */
  k: string;
  /** When and why to reach for it. */
  v: string;
};

export type BlogBlock =
  | { kind: "prose"; title?: string; paragraphs: string[] }
  | { kind: "flow"; title: string; caption?: string; stages: FlowStage[] }
  | {
      kind: "sequence";
      title: string;
      caption?: string;
      actors: string[];
      steps: SeqStep[];
    }
  | { kind: "incidents"; title: string; items: Incident[] }
  | { kind: "lessons"; title: string; items: string[] }
  | { kind: "cheatsheet"; title: string; intro?: string; rows: CheatRow[] };

export type BlogPost = {
  slug: string;
  title: string;
  org: string;
  period: string;
  /** Index card + <meta> description. */
  summary: string;
  readMinutes: number;
  /** `$ head -3 tldr.md` — the three outcome bullets a skimmer leaves with. */
  tldr: string[];
  /**
   * Exact skill-chip labels (from skills.groups[].items) this post backs.
   * A chip whose label appears here becomes a link to this post.
   */
  skills: string[];
  status: "published" | "draft";
  blocks: BlogBlock[];
};
