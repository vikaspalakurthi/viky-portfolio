import { credentials } from "@/data/content";
import Reveal from "./Reveal";

export default function Credentials() {
  const { education, certifications } = credentials;
  return (
    <section id="credentials" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8">
      <Reveal>
        <div className="flex flex-col gap-3.5">
          <div className="mono text-sm text-accent">{credentials.command}</div>
          <h2 className="text-4xl font-bold tracking-tight text-ink-bright sm:text-[46px]">
            {credentials.heading}
          </h2>
          <p className="max-w-[640px] text-[17px] leading-relaxed text-ink-muted">
            {credentials.sub}
          </p>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-6 md:grid-cols-[1fr_1.5fr]">
        <Reveal>
          <div className="glow-border h-full rounded-xl border border-base-700/60 bg-base-900/50 p-6">
            <div className="mono text-[11px] font-bold tracking-[0.14em] text-accent">
              {education.tag}
            </div>
            <div className="mt-5 flex flex-col gap-5">
              {education.rows.map((e) => (
                <div key={e.name}>
                  <div className="text-xl font-bold text-ink-bright">{e.name}</div>
                  <div className="mt-1 text-[15px] text-ink-muted">{e.org}</div>
                  <div className="mono mt-2 text-[13px] text-ink-faint">{e.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={90}>
          <div className="glow-border h-full rounded-xl border border-base-700/60 bg-base-900/50 p-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="mono text-[11px] font-bold tracking-[0.14em] text-accent">
                {certifications.tag}
              </div>
              <a
                href={certifications.verify.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mono text-[12px] text-ink-muted transition-colors hover:text-accent"
              >
                {certifications.verify.label}
              </a>
            </div>
            <ul className="mt-5 flex flex-col divide-y divide-base-700/40">
              {certifications.rows.map((c) => (
                <li key={c.name} className="flex flex-wrap items-baseline gap-x-4 gap-y-1 py-3">
                  <span className="grow text-[15px] text-ink">
                    {c.href ? (
                      <a
                        href={c.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-colors hover:text-accent"
                      >
                        {c.name} ↗
                      </a>
                    ) : (
                      c.name
                    )}
                  </span>
                  {c.period && (
                    <span className="mono text-[12px] text-ink-faint">{c.period}</span>
                  )}
                  {c.id && (
                    <span className="mono rounded-md bg-base-800/60 px-2 py-0.5 text-[11px] text-ink-muted">
                      {c.id}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
