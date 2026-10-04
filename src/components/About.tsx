import { about } from "@/data/content";
import Section from "./Section";
import Reveal from "./Reveal";
import CountUp from "./CountUp";

export default function About() {
  return (
    <Section id="about" index="01" kicker="who I am" title="About">
      <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
        <Reveal>
          <div className="space-y-5 text-lg leading-relaxed text-ink-muted">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="grid grid-cols-2 gap-3">
            {about.highlights.map((h) => (
              <div
                key={h.label}
                className="glow-border rounded-xl border border-base-700/60 bg-base-900/50 p-5"
              >
                <div className="mono text-3xl font-semibold text-accent">
                  <CountUp value={h.value} />
                </div>
                <div className="mt-1 text-sm text-ink-faint">{h.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
