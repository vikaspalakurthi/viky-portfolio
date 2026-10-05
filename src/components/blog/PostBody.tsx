import type { BlogPost } from "@/data/blog/types";
import Reveal from "@/components/Reveal";
import FlowDiagram from "./FlowDiagram";
import SequenceDiagram from "./SequenceDiagram";

const levelStyles: Record<string, string> = {
  WARN: "bg-signal-warn/10 text-signal-warn",
  ERROR: "bg-signal-down/10 text-signal-down",
};

function BlockTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mono text-sm font-bold tracking-[0.08em] text-accent">
      ## {children}
    </h2>
  );
}

export default function PostBody({ post }: { post: BlogPost }) {
  return (
    <article className="mx-auto max-w-4xl px-5 pb-24 sm:px-8">
      {/* header */}
      <header className="pt-28 sm:pt-32">
        <Reveal>
          <div className="mono text-[13px] text-accent">
            $ cat /var/log/career.log | grep -i &quot;{post.org.toLowerCase()}&quot;
          </div>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink-bright sm:text-[44px] sm:leading-[1.15]">
            {post.title}
          </h1>
          <div className="mono mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-ink-faint">
            <span className="text-ink-muted">{post.org}</span>
            <span>{post.period}</span>
            <span>{post.readMinutes} min read</span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {post.skills.map((s) => (
              <span key={s} className="mono rounded-md bg-ink-faint/15 px-2.5 py-1 text-[11.5px] text-ink-muted">
                {s}
              </span>
            ))}
          </div>
        </Reveal>

        {/* TL;DR */}
        <Reveal delay={90}>
          <div className="mt-10 rounded-[12px] border border-accent/30 bg-accent/5 p-6">
            <div className="mono text-[11px] font-bold tracking-[0.14em] text-accent">
              $ head -3 tldr.md
            </div>
            <ul className="mt-3 flex list-disc flex-col gap-2 pl-5 text-[15px] leading-relaxed text-ink marker:text-accent">
              {post.tldr.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </header>

      {/* blocks */}
      <div className="mt-14 flex flex-col gap-14">
        {post.blocks.map((b, i) => (
          <Reveal key={i}>
            {b.kind === "prose" && (
              <section className="flex flex-col gap-4">
                {b.title && <BlockTitle>{b.title}</BlockTitle>}
                {b.paragraphs.map((p) => (
                  <p key={p.slice(0, 32)} className="max-w-[70ch] text-[16px] leading-[1.75] text-ink-muted">
                    {p}
                  </p>
                ))}
              </section>
            )}

            {b.kind === "flow" && (
              <section className="flex flex-col gap-5">
                <BlockTitle>{b.title}</BlockTitle>
                <FlowDiagram stages={b.stages} />
                {b.caption && <p className="max-w-[70ch] text-[13.5px] leading-relaxed text-ink-faint">{b.caption}</p>}
              </section>
            )}

            {b.kind === "sequence" && (
              <section className="flex flex-col gap-5">
                <BlockTitle>{b.title}</BlockTitle>
                <SequenceDiagram actors={b.actors} steps={b.steps} />
                {b.caption && <p className="max-w-[70ch] text-[13.5px] leading-relaxed text-ink-faint">{b.caption}</p>}
              </section>
            )}

            {b.kind === "incidents" && (
              <section className="flex flex-col gap-5">
                <BlockTitle>{b.title}</BlockTitle>
                <div className="flex flex-col gap-4">
                  {b.items.map((inc) => (
                    <div
                      key={inc.title}
                      className="rounded-[12px] border border-base-700/60 bg-base-950/80 px-6 py-5"
                    >
                      <div className="flex flex-wrap items-center gap-3">
                        <span className={`mono rounded-[5px] px-[9px] py-1 text-[11px] font-bold ${levelStyles[inc.level]}`}>
                          {inc.level}
                        </span>
                        <span className="text-[15.5px] font-bold text-ink-bright">{inc.title}</span>
                      </div>
                      <p className="mt-2.5 max-w-[75ch] text-[14.5px] leading-[1.7] text-ink-muted">{inc.body}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {b.kind === "lessons" && (
              <section className="flex flex-col gap-4">
                <BlockTitle>{b.title}</BlockTitle>
                <ul className="flex max-w-[72ch] list-disc flex-col gap-3 pl-5 text-[15.5px] leading-[1.7] text-ink-muted marker:text-accent">
                  {b.items.map((l) => (
                    <li key={l.slice(0, 32)}>{l}</li>
                  ))}
                </ul>
              </section>
            )}

            {b.kind === "cheatsheet" && (
              <section className="flex flex-col gap-4">
                <BlockTitle>{b.title}</BlockTitle>
                {b.intro && <p className="max-w-[70ch] text-[14px] leading-relaxed text-ink-faint">{b.intro}</p>}
                <div className="overflow-x-auto rounded-[12px] border border-accent/25 bg-base-950/80">
                  <table className="w-full border-collapse text-left">
                    <tbody>
                      {b.rows.map((r) => (
                        <tr key={r.k} className="border-b border-base-700/40 last:border-0">
                          <td className="mono min-w-[280px] px-5 py-3.5 align-top text-[12.5px] leading-relaxed text-accent">
                            {r.k}
                          </td>
                          <td className="min-w-[240px] px-5 py-3.5 align-top text-[13.5px] leading-relaxed text-ink-muted">
                            {r.v}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}
          </Reveal>
        ))}
      </div>

      {/* footer nav */}
      <div className="mono mt-16 flex flex-wrap gap-x-8 gap-y-2 border-t border-base-700/40 pt-6 text-[13px]">
        <a href="/#logs" className="text-ink-muted transition-colors hover:text-accent">
          ← back to the log
        </a>
        <a href="/blog" className="text-ink-muted transition-colors hover:text-accent">
          all deep dives
        </a>
      </div>
    </article>
  );
}
