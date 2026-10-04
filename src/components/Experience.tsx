import { experience } from "@/data/content";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <Section id="experience" index="02" kicker="where I've built" title="Experience">
      <div className="relative">
        <div className="absolute left-[7px] top-2 bottom-2 hidden w-px bg-base-700/70 sm:block" />
        <div className="space-y-10">
          {experience.map((e, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="relative sm:pl-12">
                <span className="absolute left-0 top-2 hidden h-4 w-4 items-center justify-center rounded-full border border-accent/50 bg-base-950 sm:flex">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                </span>

                <div className="glow-border rounded-xl border border-base-700/60 bg-base-900/50 p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-xl font-semibold text-ink">{e.role}</h3>
                    <span className="mono text-xs text-ink-faint">{e.period}</span>
                  </div>
                  <div className="mono mt-1 text-sm text-accent">{e.org}</div>

                  <ul className="mt-4 space-y-2.5">
                    {e.points.map((p, j) => (
                      <li key={j} className="flex gap-3 text-ink-muted">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
                        <span className="leading-relaxed">{p}</span>
                      </li>
                    ))}
                  </ul>

                  {e.stack && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {e.stack.map((s) => (
                        <span
                          key={s}
                          className="mono rounded-md border border-base-700 bg-base-800/60 px-2.5 py-1 text-xs text-ink-muted"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
