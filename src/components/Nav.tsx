"use client";

import { useEffect, useState } from "react";
import { nav, site } from "@/data/content";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-base-700/60 bg-base-950/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="/" className="group flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-[10px] border border-accent/40 bg-linear-to-br from-accent/20 to-signal-info/10 text-[13px] font-bold tracking-wider text-ink">
            VP
          </span>
          <span className="mono text-sm font-semibold text-ink">
            {site.terminalPrompt}{" "}
            <span className="cursor-blink text-accent">▍</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="mono rounded-md px-3 py-2 text-[13px] text-ink-muted transition-colors hover:text-ink"
            >
              {n.label}
            </a>
          ))}
          <span className="mono ml-2 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3.5 py-2 text-[13px] font-semibold text-accent">
            <span className="dot-live inline-block h-2 w-2 rounded-full bg-accent" />
            {site.openToWorkPill}
          </span>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-md border border-base-700 text-ink-muted md:hidden"
        >
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-5 bg-current transition-transform ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-opacity ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-current transition-transform ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {open && (
        <div className="border-t border-base-700/60 bg-base-950/95 px-5 py-3 backdrop-blur-md md:hidden">
          <nav className="flex flex-col">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="mono rounded-md px-2 py-2.5 text-sm text-ink-muted hover:text-ink"
              >
                {n.label}
              </a>
            ))}
            <span className="mono mt-2 inline-flex w-fit items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3.5 py-2 text-xs font-semibold text-accent">
              <span className="dot-live inline-block h-2 w-2 rounded-full bg-accent" />
              {site.openToWorkPill}
            </span>
          </nav>
        </div>
      )}
    </header>
  );
}
