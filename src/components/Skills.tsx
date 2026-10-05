import { skills } from "@/data/content";
import { postForSkill } from "@/data/blog";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 border-y border-base-700/30 bg-base-900/35 py-[88px]"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col gap-3.5">
            <div className="mono text-sm text-accent">{skills.command}</div>
            <h2 className="text-4xl font-bold tracking-tight text-ink-bright sm:text-[46px]">
              {skills.heading}
            </h2>
          </div>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.groups.map((g, i) => (
            <Reveal key={g.group} delay={i * 60}>
              <div className="flex h-full flex-col gap-4 rounded-[14px] border border-base-700/60 bg-base-950/80 px-7 py-[26px]">
                <div className="flex items-center justify-between gap-3">
                  <div className="mono text-xs tracking-[0.14em] text-ink-muted">{g.group}</div>
                  <svg width="90" height="28" viewBox="0 0 90 28" fill="none" aria-hidden="true">
                    <polyline
                      points={g.spark}
                      stroke={g.sparkColor === "accent" ? "#34d399" : "#38bdf8"}
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((item) => {
                    const deepDive = postForSkill(item);
                    return deepDive ? (
                      <a
                        key={item}
                        href={`/blog/${deepDive.slug}`}
                        title={`deep dive: ${deepDive.title}`}
                        className="rounded-lg bg-accent/10 px-3 py-[7px] text-[13px] text-accent transition-colors hover:bg-accent/20"
                      >
                        {item} ↗
                      </a>
                    ) : (
                      <span
                        key={item}
                        className="rounded-lg bg-ink-faint/15 px-3 py-[7px] text-[13px] text-ink"
                      >
                        {item}
                      </span>
                    );
                  })}
                </div>
                <div className="mono mt-auto text-xs text-ink-faint">
                  state: <span className="text-accent">{g.state}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
