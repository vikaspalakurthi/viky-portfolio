import { skills } from "@/data/content";
import Section from "./Section";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <Section id="skills" index="04" kicker="my toolkit" title="Skills & Tools">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => (
          <Reveal key={s.group} delay={(i % 3) * 70}>
            <div className="glow-border h-full rounded-xl border border-base-700/60 bg-base-900/50 p-5">
              <div className="mono mb-4 flex items-center gap-2 text-sm text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                {s.group}
              </div>
              <div className="flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-md border border-base-700 bg-base-800/50 px-2.5 py-1 text-sm text-ink-muted"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
