import { ticker } from "@/data/content";

export default function Ticker() {
  const items = [...ticker, ...ticker];
  return (
    <div className="relative border-y border-base-700/60 bg-base-900/40">
      <div className="flex overflow-hidden py-3 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex shrink-0 animate-ticker items-center gap-8 whitespace-nowrap pr-8">
          {items.map((t, i) => (
            <div key={i} className="flex items-center gap-8">
              <span className="mono text-xs text-ink-muted">{t}</span>
              <span className="text-accent/50">/</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
