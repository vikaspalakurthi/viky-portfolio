import { about } from "@/data/content";
import Reveal from "./Reveal";

const levelColor: Record<string, string> = {
  INFO: "text-accent",
  WARN: "text-signal-warn",
  EVENT: "text-signal-info",
};

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-[88px] sm:px-8">
      <div className="flex flex-col gap-14 lg:flex-row lg:gap-[72px]">
        {/* left: story */}
        <div className="flex max-w-[660px] flex-col gap-[22px]">
          <Reveal>
            <div className="mono text-sm text-accent">{about.command}</div>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="text-4xl font-bold leading-[1.1] tracking-tight text-ink-bright sm:text-[46px]">
              {about.heading}
            </h2>
          </Reveal>
          {about.paragraphs.map((p, i) => (
            <Reveal key={p} delay={120 + i * 60}>
              <p className="text-[17px] leading-[1.75] text-ink-muted">{p}</p>
            </Reveal>
          ))}
          <Reveal delay={260}>
            <p className="text-[17px] font-medium leading-[1.75] text-ink">{about.callout}</p>
          </Reveal>
          <Reveal delay={320}>
            <div className="rounded-r-[10px] border-l-2 border-accent bg-accent/5 px-[18px] py-3.5">
              <span className="text-[15px] italic leading-relaxed text-ink-muted">
                {about.offClock}
              </span>
            </div>
          </Reveal>
        </div>

        {/* right: spec sheet + career log stream */}
        <div className="flex w-full max-w-[380px] shrink-0 flex-col gap-[22px]">
          <Reveal delay={140}>
            <div className="mono rounded-[14px] border border-base-700/70 bg-base-900/80 px-7 py-[26px] text-[13.5px] leading-[2.3]">
              <div className="pb-2 text-ink-faint">{about.specSheet.title}</div>
              {about.specSheet.rows.map((r) => (
                <div key={r.key}>
                  <span className="text-ink-faint">{r.key.padEnd(12, " ")}= </span>
                  <span className={"live" in r && r.live ? "text-accent" : "text-ink"}>
                    {r.value}
                  </span>
                  {"live" in r && r.live && (
                    <span className="dot-live ml-2 inline-block h-2 w-2 rounded-full bg-accent" />
                  )}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={220}>
            <div className="overflow-hidden rounded-[14px] border border-base-700/70 bg-base-950/90">
              <div className="flex items-center gap-2 border-b border-base-700/50 px-4 py-[11px]">
                <span className="h-2.5 w-2.5 rounded-full bg-signal-down" />
                <span className="h-2.5 w-2.5 rounded-full bg-signal-warn" />
                <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                <span className="mono ml-2 text-[11px] text-ink-muted">{about.logCard.title}</span>
              </div>
              <div className="mono h-[236px] overflow-hidden px-4 py-3 text-[11.5px] leading-[2.15]">
                <div className="logstream flex flex-col">
                  {[...about.logCard.lines, ...about.logCard.lines].map((l, i) => (
                    <div key={`${l.time}-${i}`}>
                      <span className="text-ink-faint">{l.time}</span>{" "}
                      <span className={levelColor[l.level] ?? "text-accent"}>{l.level}</span>{" "}
                      <span className="text-ink-muted">{l.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
