import { careerLog } from "@/data/content";
import Reveal from "./Reveal";

const levelStyles: Record<string, string> = {
  INFO: "bg-accent/10 text-accent",
  EVENT: "bg-signal-info/10 text-signal-info",
};

export default function Experience() {
  return (
    <section
      id="logs"
      className="scroll-mt-20 border-y border-base-700/30 bg-base-900/35 py-[88px]"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 sm:px-8">
        <Reveal>
          <div className="flex flex-col gap-3.5">
            <div className="mono text-sm text-accent">{careerLog.command}</div>
            <h2 className="text-4xl font-bold tracking-tight text-ink-bright sm:text-[46px]">
              {careerLog.heading}
            </h2>
          </div>
        </Reveal>
        <div className="flex flex-col gap-5">
          {careerLog.entries.map((e, i) => (
            <Reveal key={e.org + e.period} delay={i * 70}>
              <div className="flex flex-col gap-4 rounded-[14px] border border-base-700/60 bg-base-950/80 px-[30px] py-[26px] sm:flex-row sm:gap-7">
                <div className="mono w-[170px] shrink-0 pt-[3px] text-[13px] text-ink-muted">
                  {e.period}
                </div>
                <div className="flex grow flex-col gap-2.5">
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={`mono rounded-[5px] px-[9px] py-1 text-[11px] font-bold ${levelStyles[e.level]}`}
                    >
                      {e.level}
                    </span>
                    <span className="text-xl font-bold text-ink-bright">{e.org}</span>
                    <span className="text-[15px] text-ink-muted">{e.role}</span>
                  </div>
                  <div className="text-[15px] leading-[1.65] text-ink-muted">{e.body}</div>
                </div>
              </div>
            </Reveal>
          ))}
          <Reveal delay={careerLog.entries.length * 70}>
            <div className="mono flex items-center gap-3 px-[30px] py-4 text-[13px] text-ink-faint">
              <span className="text-signal-warn">WARN</span>
              <span>{careerLog.truncated}</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
