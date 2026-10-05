import type { SeqStep } from "@/data/blog/types";

/**
 * Hand-rolled sequence-diagram renderer: actors and steps come in as typed
 * data, SVG comes out in the site's own theme. No Mermaid, no client JS —
 * pure server-rendered markup, same philosophy as the hero canvas.
 */
export default function SequenceDiagram({
  actors,
  steps,
}: {
  actors: string[];
  steps: SeqStep[];
}) {
  const colW = 172;
  const boxW = 150;
  const boxH = 36;
  const marginX = 12;
  const topY = 6;
  const rowH = 46;
  const lifelineTop = topY + boxH;
  const firstRowY = lifelineTop + 34;

  const width = marginX * 2 + (actors.length - 1) * colW + boxW;
  const height = firstRowY + steps.length * rowH + 16;
  const cx = (i: number) => marginX + boxW / 2 + i * colW;

  return (
    <div className="overflow-x-auto rounded-[10px] border border-base-700/60 bg-base-950/70 p-4">
      <svg
        viewBox={`0 0 ${width} ${height}`}
        width="100%"
        style={{ minWidth: `${Math.min(width, 920)}px` }}
        role="img"
        aria-label={`Sequence diagram: ${actors.join(", ")}`}
      >
        <defs>
          <marker id="seq-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0.5 L7.5,4 L0,7.5 Z" fill="var(--color-accent)" />
          </marker>
          <marker id="seq-arrow-dim" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0.5 L7.5,4 L0,7.5 Z" fill="var(--color-ink-faint)" />
          </marker>
        </defs>

        {/* lifelines */}
        {actors.map((_, i) => (
          <line
            key={`l${i}`}
            x1={cx(i)}
            y1={lifelineTop}
            x2={cx(i)}
            y2={height - 8}
            stroke="var(--color-base-700)"
            strokeDasharray="3 5"
            strokeWidth="1"
          />
        ))}

        {/* actor boxes */}
        {actors.map((a, i) => (
          <g key={`a${i}`}>
            <rect
              x={cx(i) - boxW / 2}
              y={topY}
              width={boxW}
              height={boxH}
              rx="7"
              fill="var(--color-base-900)"
              stroke="var(--color-base-600)"
              strokeWidth="1"
            />
            <text
              x={cx(i)}
              y={topY + boxH / 2 + 4}
              textAnchor="middle"
              fontFamily="var(--font-mono)"
              fontSize="11.5"
              fontWeight="600"
              fill="var(--color-ink)"
            >
              {a}
            </text>
          </g>
        ))}

        {/* steps */}
        {steps.map((s, i) => {
          const y = firstRowY + i * rowH;
          const self = s.from === s.to;
          const x1 = cx(s.from);
          const x2 = cx(s.to);
          const mid = (x1 + x2) / 2;
          const stroke = s.dashed ? "var(--color-ink-faint)" : "var(--color-accent)";
          const marker = s.dashed ? "url(#seq-arrow-dim)" : "url(#seq-arrow)";
          return (
            <g key={`s${i}`}>
              {self ? (
                <path
                  d={`M ${x1} ${y - 10} H ${x1 + 46} V ${y + 8} H ${x1 + 4}`}
                  fill="none"
                  stroke={stroke}
                  strokeWidth="1.3"
                  markerEnd={marker}
                  strokeDasharray={s.dashed ? "4 4" : undefined}
                />
              ) : (
                <line
                  x1={x1}
                  y1={y}
                  x2={x2 + (x2 > x1 ? -4 : 4)}
                  y2={y}
                  stroke={stroke}
                  strokeWidth="1.3"
                  markerEnd={marker}
                  strokeDasharray={s.dashed ? "4 4" : undefined}
                />
              )}
              <text
                x={self ? x1 + 54 : mid}
                y={y - 7}
                textAnchor={self ? "start" : "middle"}
                fontFamily="var(--font-mono)"
                fontSize="10.5"
                fill={s.dashed ? "var(--color-ink-faint)" : "var(--color-ink-muted)"}
              >
                {s.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
