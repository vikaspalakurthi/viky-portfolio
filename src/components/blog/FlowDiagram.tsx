import type { FlowStage } from "@/data/blog/types";

const toneBorder: Record<string, string> = {
  accent: "border-accent/45",
  info: "border-signal-info/45",
  default: "border-base-700/70",
};

/**
 * Left-to-right pipeline diagram in plain CSS: stacks vertically on phones,
 * flows horizontally on desktop. Side inputs ("feeds") hang under their stage.
 */
export default function FlowDiagram({ stages }: { stages: FlowStage[] }) {
  return (
    <div className="flex flex-col items-stretch gap-2 md:flex-row md:items-start">
      {stages.map((s, i) => (
        <div key={s.label} className="contents">
          {i > 0 && (
            <div className="mono flex items-center justify-center self-center px-1 py-0.5 text-ink-faint md:pt-7">
              <span className="hidden md:inline">──▶</span>
              <span className="md:hidden">▼</span>
            </div>
          )}
          <div className="flex min-w-0 flex-1 flex-col gap-2">
            <div
              className={`rounded-[10px] border bg-base-950/80 px-4 py-3 ${toneBorder[s.tone ?? "default"]}`}
            >
              <div className="mono text-[12.5px] font-bold text-ink">{s.label}</div>
              {s.sub && <div className="mt-1 text-[12px] leading-snug text-ink-faint">{s.sub}</div>}
            </div>
            {s.feeds?.map((f) => (
              <div
                key={f.label}
                className="rounded-[10px] border border-dashed border-base-600/70 bg-base-900/40 px-4 py-2.5"
              >
                <div className="mono text-[11px] font-bold tracking-wide text-ink-muted">
                  ↑ {f.label}
                </div>
                {f.sub && <div className="mt-0.5 text-[11.5px] leading-snug text-ink-faint">{f.sub}</div>}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
