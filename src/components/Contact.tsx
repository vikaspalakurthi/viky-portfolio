import { contact } from "@/data/content";
import Reveal from "./Reveal";
import Topology from "./Topology";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-20 overflow-hidden py-[110px]"
    >
      <div className="orb pointer-events-none absolute -bottom-80 left-1/2 h-[700px] w-[900px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(52,211,153,0.13),transparent_68%)]" />
      <Topology variant="contact" />

      <div className="relative mx-auto flex max-w-[900px] flex-col items-center gap-[26px] px-5 text-center sm:px-8">
        <Reveal>
          <div className="mono text-sm text-accent">{contact.command}</div>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="text-5xl font-bold leading-[1.05] tracking-tight text-ink-bright sm:text-[64px]">
            {contact.heading.lead}{" "}
            <span className="bg-linear-to-r from-accent to-signal-info bg-clip-text text-transparent">
              {contact.heading.gradient}
            </span>
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="text-lg leading-relaxed text-ink-muted">{contact.sub}</p>
        </Reveal>
        <Reveal delay={200}>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            {contact.ctas.map((c) =>
              c.primary ? (
                <a
                  key={c.label}
                  href={c.href}
                  className="inline-flex items-center gap-2.5 rounded-[10px] bg-accent px-[30px] py-[17px] text-base font-bold text-[#06251a] shadow-[0_0_30px_-6px] shadow-accent transition-shadow hover:shadow-[0_0_44px_-4px] hover:shadow-accent"
                >
                  {c.label}
                </a>
              ) : (
                <a
                  key={c.label}
                  href={c.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-[10px] border border-base-700 px-[26px] py-4 text-[15px] font-medium text-ink transition-colors hover:border-accent/40 hover:text-accent"
                >
                  {c.label}
                </a>
              )
            )}
          </div>
        </Reveal>
        <Reveal delay={260}>
          <div className="mono pt-2.5 text-[13px] text-ink-faint">{contact.responseLine}</div>
        </Reveal>
        <Reveal delay={320}>
          <div className="flex flex-col items-center gap-1 pt-4">
            <div className="sig -rotate-3 text-[46px] text-ink">{contact.signature.name}</div>
            <div className="mono text-xs text-ink-faint">{contact.signature.caption}</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
