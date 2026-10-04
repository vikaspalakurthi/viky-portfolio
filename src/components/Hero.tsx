"use client";

import { motion, type Variants } from "framer-motion";
import { site } from "@/data/content";
import Magnetic from "./Magnetic";
import MarketCanvas from "./MarketCanvas";
import Topology from "./Topology";

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
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-32 sm:pt-40">
      {/* layered backdrop: market streams + drifting orbs + node network */}
      <div className="absolute inset-0 opacity-45">
        <MarketCanvas />
      </div>
      <div className="orb pointer-events-none absolute -left-36 -top-44 h-[760px] w-[760px] rounded-full bg-[radial-gradient(circle,rgba(52,211,153,0.13),transparent_68%)]" />
      <div className="orb orb-slow pointer-events-none absolute -right-56 top-32 h-[820px] w-[820px] rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.09),transparent_68%)]" />
      <Topology variant="hero" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-base-950" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-16 px-5 sm:px-8 lg:flex-row lg:gap-[72px]">
        {/* left: copy */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex max-w-[620px] flex-col items-start gap-6"
        >
          <motion.div
            variants={item}
            className="mono inline-flex flex-wrap items-center gap-2.5 rounded-full border border-accent/30 bg-accent/5 px-4 py-2 text-xs tracking-[0.08em]"
          >
            <span className="dot-live h-2 w-2 rounded-full bg-accent" />
            <span className="font-semibold text-accent">{site.statusBadge.main}</span>
            <span className="text-ink-muted">{site.statusBadge.aside}</span>
          </motion.div>

          <motion.div
            variants={item}
            className="mono text-sm tracking-[0.22em] text-ink-muted"
          >
            {site.eyebrow}
          </motion.div>

          <motion.h1
            variants={item}
            className="text-5xl font-bold leading-[1.02] tracking-tight text-ink-bright sm:text-6xl lg:text-[84px]"
          >
            {site.headline.lead}{" "}
            <span className="bg-gradient-to-r from-accent to-signal-info bg-clip-text text-transparent">
              {site.headline.gradient}
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="max-w-[560px] text-lg leading-relaxed text-ink-muted sm:text-xl"
          >
            {site.tagline}
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap items-center gap-4">
            <Magnetic>
              <a
                href={site.heroCtas.primary.href}
                className="inline-flex items-center gap-2.5 rounded-[10px] bg-accent px-6 py-4 text-base font-bold text-[#06251a] shadow-[0_0_30px_-6px] shadow-accent transition-shadow hover:shadow-[0_0_44px_-4px] hover:shadow-accent"
              >
                {site.heroCtas.primary.label}
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={site.heroCtas.secondary.href}
                className="mono inline-flex items-center gap-2.5 rounded-[10px] border border-base-700 px-6 py-[15px] text-sm text-ink transition-colors hover:border-accent/40 hover:text-accent"
              >
                {site.heroCtas.secondary.label}
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>

        {/* right: portrait card + identity terminal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex w-full max-w-[440px] shrink-0 flex-col items-center pb-16 lg:w-[440px]"
        >
          <div className="glowcard relative h-[480px] w-full max-w-[400px] overflow-hidden rounded-[20px] border border-accent/35 bg-gradient-to-br from-base-900 to-base-800">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={site.portrait}
              alt={site.name}
              className="absolute inset-0 h-full w-full object-cover object-[50%_16%] brightness-95 contrast-[1.06] grayscale-[0.5]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/15 to-signal-info/10 mix-blend-color" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[120px] bg-gradient-to-b from-transparent to-base-950/90" />
            <div className="mono absolute inset-x-0 bottom-[18px] text-center text-xs tracking-[0.16em] text-ink">
              {site.portraitCaption.name} ·{" "}
              <span className="text-accent">{site.portraitCaption.role}</span>
            </div>
            <div className="scansweep pointer-events-none absolute inset-x-0 h-[90px] bg-gradient-to-b from-transparent via-accent/15 to-transparent" />
            <span className="absolute left-3.5 top-3.5 h-6 w-6 rounded-tl-lg border-l-2 border-t-2 border-accent" />
            <span className="absolute right-3.5 top-3.5 h-6 w-6 rounded-tr-lg border-r-2 border-t-2 border-accent" />
            <span className="absolute bottom-3.5 left-3.5 h-6 w-6 rounded-bl-lg border-b-2 border-l-2 border-accent" />
            <span className="absolute bottom-3.5 right-3.5 h-6 w-6 rounded-br-lg border-b-2 border-r-2 border-accent" />
          </div>

          <div className="floaty mono absolute bottom-0 left-0 w-[330px] max-w-full rounded-xl border border-base-700/80 bg-base-950/95 px-[18px] py-3.5 text-[12.5px] leading-8 shadow-[0_18px_44px_rgba(0,0,0,0.55)] sm:-left-3">
            {site.identityCard.map((line) => (
              <div key={line.text}>
                {"prompt" in line && line.prompt ? (
                  <span className="text-ink-faint">$ </span>
                ) : (
                  <span className="text-accent">✓ </span>
                )}
                <span className="text-ink-muted">{line.text}</span>
              </div>
            ))}
            <div>
              <span className="text-ink-faint">$ </span>
              <span className="cursor-blink text-accent">▍</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
