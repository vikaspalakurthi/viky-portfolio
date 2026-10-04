import { ticker } from "@/data/content";

/** Scrolling keyword tape under the hero. Pure CSS animation (reduced-motion safe). */
export default function Ticker() {
  const row = (key: string) => (
    <div key={key} className="flex shrink-0 items-center gap-12 pr-12">
      {ticker.map((t) => (
        <span key={`${key}-${t}`} className="flex items-center gap-12 whitespace-nowrap">
          <span>{t}</span>
          <span className="text-accent">·</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="relative z-10 overflow-hidden border-y border-base-700/40 bg-base-900/50 py-[18px]">
      <div className="mono flex w-max animate-ticker text-[13px] tracking-[0.18em] text-ink-faint">
        {row("a")}
        {row("b")}
      </div>
    </div>
  );
}
