import { services } from "@/data/content";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

/** Little deterministic activity bars under each service window. */
function ActivityBars({ seed }: { seed: number }) {
  const bars = Array.from({ length: 38 }, (_, i) => {
    const v = Math.abs(Math.sin(i * seed + seed * 3.7));
    return { h: 8 + Math.round(v * 16), o: v > 0.18 ? 0.9 : 0.3 };
  });
  return (
    <div className="flex h-6 items-end gap-[3px]" aria-hidden="true">
      {bars.map((b, i) => (
        <span
          key={i}
          className="w-[5px] rounded-[2px] bg-accent"
          style={{ height: `${b.h}px`, opacity: b.o }}
        />
      ))}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="services" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8">
      <Reveal>
        <div className="flex flex-col gap-3.5">
          <div className="mono text-sm text-accent">{services.command}</div>
          <h2 className="text-4xl font-bold tracking-tight text-ink-bright sm:text-[46px]">
            {services.heading}
          </h2>
          <p className="max-w-[640px] text-[17px] leading-relaxed text-ink-muted">
            {services.sub}
          </p>
        </div>
      </Reveal>
      {/* Two flagship services — two wide columns, no orphan third slot. */}
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {services.items.map((s, i) => (
          <Reveal key={s.name} delay={i * 80}>
            <TiltCard className="card-spot relative flex h-full flex-col gap-4 rounded-2xl border border-base-700/60 bg-base-900/75 p-6">
              <div className="flex items-center justify-between gap-3">
                <div className="mono text-lg font-bold text-ink-bright">{s.name}</div>
                <div className="flex items-center gap-[7px] rounded-full border border-accent/30 bg-accent/10 px-[11px] py-[5px]">
                  <span className="dot-live h-[7px] w-[7px] rounded-full bg-accent" />
                  <span className="mono text-[11px] font-semibold text-accent">active</span>
                </div>
              </div>

              <div className="overflow-hidden rounded-[10px] border border-base-700/70 bg-base-850">
                <div className="flex items-center gap-1.5 border-b border-base-700/50 px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-ink-faint/40" />
                  <span className="h-2 w-2 rounded-full bg-ink-faint/40" />
                  <span className="h-2 w-2 rounded-full bg-ink-faint/40" />
                  <span className="mono ml-1.5 text-[10px] text-ink-faint">{s.windowTitle}</span>
                </div>
                {s.screenshot ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={s.screenshot}
                    alt={`${s.name} screenshot`}
                    className="h-[150px] w-full object-cover object-top"
                  />
                ) : (
                  <div className="flex h-[150px] items-center justify-center bg-[repeating-linear-gradient(45deg,rgba(148,163,184,0.03),rgba(148,163,184,0.03)_10px,transparent_10px,transparent_20px)]">
                    <span className="mono text-[11px] tracking-[0.14em] text-ink-faint">
                      [ ATTACH SCREENSHOT ]
                    </span>
                  </div>
                )}
              </div>

              <ActivityBars seed={s.barsSeed} />

              <p className="grow text-[15px] leading-[1.65] text-ink-muted">{s.blurb}</p>

              <div className="mono flex flex-wrap gap-2 text-xs">
                {s.stack.map((t) => (
                  <span key={t} className="rounded-md bg-ink-faint/15 px-2.5 py-[5px] text-ink-muted">
                    {t}
                  </span>
                ))}
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
