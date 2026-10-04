import { engineering } from "@/data/content";
import Section from "./Section";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

/** Branch-history sketch for the release section. Decorative; mirrors the prose. */
function BranchDiagram() {
  return (
    <pre
      aria-hidden="true"
      className="mono overflow-x-auto rounded-lg border border-base-700/60 bg-base-950/60 p-5 text-xs leading-6 text-ink-faint"
    >
      <code>
        {`main     ──●─────────────────────────●──▶  production
           │ v1.0.0                   ▲ v1.1.0
           │                          │
develop    └──●───────────●───────────●──▶  integration
               │          ▲ merge --no-ff
               │          │
feature/*      └──●───●───┘            release/x.y.z cut from develop,
                                       tagged on main, merged back`}
      </code>
    </pre>
  );
}

export default function Engineering() {
  return (
    <>
      {/* Page header */}
      <div className="mx-auto max-w-6xl px-5 pb-4 pt-32 sm:px-8 sm:pt-40">
        <Reveal>
          <div className="mono mb-3 flex items-center gap-2 text-xs text-accent">
            <span className="inline-block h-2 w-2 rounded-full bg-accent" />
            <span>{engineering.kicker}</span>
          </div>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            {engineering.title}
          </h1>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-6 max-w-3xl space-y-4">
            {engineering.intro.map((p) => (
              <p key={p} className="leading-relaxed text-ink-muted">
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </div>

      {/* 01 — Stack */}
      <Section id="stack" index="01" title="The stack, and why" kicker="choices over checklists">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {engineering.stack.map((s, i) => (
            <Reveal key={s.name} delay={i * 60}>
              <TiltCard className="h-full rounded-xl border border-base-700/60 bg-base-900/40 p-6">
                <h3 className="mono mb-3 text-sm font-medium text-accent">{s.name}</h3>
                <p className="text-sm leading-relaxed text-ink-muted">{s.why}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 02 — Decisions */}
      <Section id="decisions" index="02" title="Decision records" kicker="every choice has a trade-off">
        <div className="grid gap-4 lg:grid-cols-2">
          {engineering.decisions.map((d, i) => (
            <Reveal key={d.title} delay={i * 60}>
              <div className="h-full rounded-xl border border-base-700/60 bg-base-900/40 p-6">
                <h3 className="mb-4 text-lg font-semibold text-ink">{d.title}</h3>
                <dl className="space-y-3 text-sm leading-relaxed">
                  <div>
                    <dt className="mono mb-1 text-xs uppercase tracking-wider text-accent">Decision</dt>
                    <dd className="text-ink-muted">{d.decision}</dd>
                  </div>
                  <div>
                    <dt className="mono mb-1 text-xs uppercase tracking-wider text-accent">Why</dt>
                    <dd className="text-ink-muted">{d.why}</dd>
                  </div>
                  <div>
                    <dt className="mono mb-1 text-xs uppercase tracking-wider text-signal-info">Trade-off</dt>
                    <dd className="text-ink-muted">{d.tradeoff}</dd>
                  </div>
                </dl>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 03 — Release engineering */}
      <Section id="release" index="03" title="Release engineering" kicker="the git history is the audit trail">
        <Reveal>
          <p className="mb-8 max-w-3xl leading-relaxed text-ink-muted">{engineering.release.summary}</p>
        </Reveal>
        <Reveal delay={80}>
          <BranchDiagram />
        </Reveal>
        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          <Reveal delay={120}>
            <div>
              <h3 className="mono mb-4 text-xs uppercase tracking-wider text-accent">Branches</h3>
              <ul className="space-y-4">
                {engineering.release.branches.map((b) => (
                  <li key={b.name} className="flex gap-4 text-sm leading-relaxed">
                    <code className="mono mt-0.5 h-fit shrink-0 rounded-md border border-base-700/60 bg-base-950/60 px-2 py-1 text-xs text-accent">
                      {b.name}
                    </code>
                    <span className="text-ink-muted">{b.purpose}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={180}>
            <div>
              <h3 className="mono mb-4 text-xs uppercase tracking-wider text-accent">A change ships like this</h3>
              <ol className="space-y-4">
                {engineering.release.flow.map((step, i) => (
                  <li key={step} className="flex gap-4 text-sm leading-relaxed">
                    <span className="mono mt-0.5 shrink-0 text-xs text-signal-info">{String(i + 1).padStart(2, "0")}</span>
                    <span className="text-ink-muted">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* 04 — System design */}
      <Section id="system-design" index="04" title="System design notes" kicker="the right amount of system">
        <div className="grid gap-4 lg:grid-cols-2">
          {engineering.systemDesign.map((n, i) => (
            <Reveal key={n.title} delay={i * 60}>
              <div className="h-full rounded-xl border border-base-700/60 bg-base-900/40 p-6">
                <h3 className="mb-3 text-base font-semibold text-ink">{n.title}</h3>
                <p className="text-sm leading-relaxed text-ink-muted">{n.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <div className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
        <Reveal>
          <div className="rounded-xl border border-accent/30 bg-accent/5 p-8 sm:p-10">
            <p className="max-w-2xl leading-relaxed text-ink-muted">{engineering.cta.lead}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={engineering.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-accent/40 bg-accent/10 px-4 py-2.5 text-sm font-medium text-accent transition-colors hover:bg-accent/20"
              >
                {engineering.cta.repoLabel}
              </a>
              <a
                href={engineering.docsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-base-700 px-4 py-2.5 text-sm text-ink-muted transition-colors hover:border-base-700/60 hover:text-ink"
              >
                {engineering.cta.docsLabel}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </>
  );
}
