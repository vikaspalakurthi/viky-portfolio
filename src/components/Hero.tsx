"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { site } from "@/data/content";
import {
  GitHubIcon,
  XIcon,
  MailIcon,
  GlobeIcon,
  DownloadIcon,
  ArrowUpRight,
} from "./icons";
import Magnetic from "./Magnetic";
import MarketCanvas from "./MarketCanvas";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const reduced = useReducedMotion();
  const words = site.name.split(" ");

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] items-center overflow-hidden"
    >
      {/* animated market backdrop */}
      <div className="absolute inset-0">
        <MarketCanvas />
      </div>

      {/* cinematic overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-base-950/80 via-base-950/40 to-base-950" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_120%,rgba(61,220,151,0.10),transparent)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-base-950 to-transparent" />

      <div className="relative mx-auto w-full max-w-6xl px-5 pt-24 sm:px-8">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <div className="mono mb-7 inline-flex items-center gap-2 rounded-full border border-base-700/80 bg-base-900/60 px-3 py-1.5 text-xs text-ink-muted backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal-up opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-signal-up" />
              </span>
              Available for select projects
            </div>
          </motion.div>

          <h1 className="flex flex-wrap gap-x-5 text-5xl font-semibold leading-[1.02] tracking-tight text-ink sm:text-7xl lg:text-8xl">
            {words.map((w, i) => (
              <motion.span key={i} variants={item} className="inline-block">
                {i === words.length - 1 ? (
                  <span className="bg-gradient-to-br from-accent via-accent to-signal-info bg-clip-text text-transparent">
                    {w}
                  </span>
                ) : (
                  w
                )}
              </motion.span>
            ))}
          </h1>

          <motion.p
            variants={item}
            className="mono mt-5 text-base text-accent sm:text-xl"
          >
            {site.role}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl"
          >
            {site.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3">
            <Magnetic>
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-base-950 shadow-[0_0_30px_-6px] shadow-accent transition-shadow hover:shadow-[0_0_44px_-4px] hover:shadow-accent"
              >
                View my work
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={site.resumeUrl}
                className="inline-flex items-center gap-2 rounded-lg border border-base-700 bg-base-900/50 px-6 py-3.5 text-sm font-medium text-ink backdrop-blur transition-colors hover:border-accent/40 hover:text-accent"
              >
                <DownloadIcon className="h-4 w-4" />
                Résumé
              </a>
            </Magnetic>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex items-center gap-2">
            <SocialLink href={site.socials.github} label="GitHub">
              <GitHubIcon />
            </SocialLink>
            <SocialLink href={site.socials.x} label="X">
              <XIcon />
            </SocialLink>
            <SocialLink href={site.socials.website} label="Website">
              <GlobeIcon />
            </SocialLink>
            <SocialLink href={`mailto:${site.email}`} label="Email">
              <MailIcon />
            </SocialLink>
          </motion.div>
        </motion.div>
      </div>

      {/* scroll cue */}
      {!reduced && (
        <motion.a
          href="#about"
          aria-label="Scroll down"
          className="absolute bottom-7 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <div className="flex h-9 w-6 items-start justify-center rounded-full border border-base-600 p-1.5">
            <motion.span
              className="h-2 w-1 rounded-full bg-accent"
              animate={{ y: [0, 8, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.a>
      )}
    </section>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <Magnetic strength={0.5}>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={label}
        className="flex h-11 w-11 items-center justify-center rounded-lg border border-base-700 bg-base-900/50 text-ink-muted backdrop-blur transition-colors hover:border-accent/40 hover:text-accent"
      >
        {children}
      </a>
    </Magnetic>
  );
}
