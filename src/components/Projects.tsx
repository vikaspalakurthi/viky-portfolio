import { projects, type Project } from "@/data/content";
import Section from "./Section";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";
import { ArrowUpRight } from "./icons";

const statusStyle: Record<Project["status"], string> = {
  Production: "border-signal-up/40 bg-signal-up/10 text-signal-up",
  Active: "border-signal-info/40 bg-signal-info/10 text-signal-info",
  Prototype: "border-amber-400/40 bg-amber-400/10 text-amber-300",
  Research: "border-ink-faint/40 bg-base-700/40 text-ink-muted",
};

export default function Projects() {
  return (
    <Section id="projects" index="03" kicker="what I've shipped" title="Selected Work">
      <div className="grid gap-5 md:grid-cols-2" style={{ perspective: "1200px" }}>
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={(i % 2) * 100}>
            <TiltCard className="group relative h-full rounded-xl [transform-style:preserve-3d]">
              <article className="card-spot glow-border relative flex h-full flex-col overflow-hidden rounded-xl border border-base-700/60 bg-base-900/50 p-6 transition-colors duration-300 group-hover:border-accent/30 group-hover:bg-base-850">
                <div className="relative flex items-start justify-between gap-3" style={{ transform: "translateZ(28px)" }}>
                  <h3 className="text-xl font-semibold text-ink">{p.name}</h3>
                  <span
                    className={`mono shrink-0 rounded-full border px-2.5 py-0.5 text-[11px] ${statusStyle[p.status]}`}
                  >
                    {p.status}
                  </span>
                </div>

                <p className="relative mt-3 leading-relaxed text-ink-muted" style={{ transform: "translateZ(18px)" }}>
                  {p.blurb}
                </p>

                <div className="relative mt-5" style={{ transform: "translateZ(14px)" }}>
                  <div className="mono mb-2 text-[11px] uppercase tracking-wider text-ink-faint">
                    What it demonstrates
                  </div>
                  <ul className="space-y-1.5">
                    {p.demonstrates.map((d, j) => (
                      <li key={j} className="flex gap-2.5 text-sm text-ink-muted">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                        <span className="leading-snug">{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative mt-5 flex flex-wrap gap-1.5" style={{ transform: "translateZ(10px)" }}>
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="mono rounded border border-base-700 bg-base-800/60 px-2 py-0.5 text-[11px] text-ink-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {p.links && p.links.length > 0 && (
                  <div className="relative mt-5 flex flex-wrap gap-4 border-t border-base-700/50 pt-4">
                    {p.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="mono inline-flex items-center gap-1.5 text-sm text-accent hover:underline"
                      >
                        {l.label}
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    ))}
                  </div>
                )}
              </article>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
