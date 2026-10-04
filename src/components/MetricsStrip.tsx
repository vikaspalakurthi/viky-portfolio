import { metrics } from "@/data/content";
import Reveal from "./Reveal";

export default function MetricsStrip() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-[72px] sm:px-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((m, i) => (
          <Reveal key={m.label} delay={i * 70}>
            <div className="flex h-full flex-col gap-2 rounded-[14px] border border-base-700/60 bg-base-900/70 px-7 py-[26px]">
              <div
                className={`text-[40px] font-bold leading-tight tracking-tight sm:text-[46px] ${
                  m.accent ? "text-accent" : "text-ink-bright"
                }`}
              >
                {m.value}
              </div>
              <div className="text-sm leading-relaxed text-ink-muted">{m.label}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
