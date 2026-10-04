import { site } from "@/data/content";
import Reveal from "./Reveal";
import { GitHubIcon, XIcon, MailIcon, GlobeIcon, ArrowUpRight } from "./icons";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24 sm:px-8 sm:py-32">
      <Reveal>
        <div className="glow-border relative overflow-hidden rounded-2xl border border-base-700/60 bg-base-900/60 p-8 sm:p-14">
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
          <div className="relative">
            <div className="mono mb-3 flex items-center gap-2 text-xs text-accent">
              <span>05</span>
              <span className="h-px w-8 bg-accent/40" />
              <span className="text-ink-faint">let&apos;s talk</span>
            </div>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Building something at the edge of markets and software?
            </h2>
            <p className="mt-4 max-w-xl text-lg text-ink-muted">
              I&apos;m open to select projects, collaborations, and conversations. The
              fastest way to reach me is email.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${site.email}`}
                className="group inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-base-950 transition-colors hover:bg-accent-dim"
              >
                <MailIcon className="h-4 w-4" />
                {site.email}
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              <Chip href={site.socials.github} label="GitHub">
                <GitHubIcon className="h-4 w-4" />
              </Chip>
              <Chip href={site.socials.x} label="@ROR_Traders">
                <XIcon className="h-4 w-4" />
              </Chip>
              <Chip href={site.socials.website} label="rulesoverresults.com">
                <GlobeIcon className="h-4 w-4" />
              </Chip>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Chip({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="mono inline-flex items-center gap-2 rounded-lg border border-base-700 bg-base-800/50 px-3.5 py-2 text-sm text-ink-muted transition-colors hover:border-accent/40 hover:text-accent"
    >
      {children}
      {label}
      <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
    </a>
  );
}
