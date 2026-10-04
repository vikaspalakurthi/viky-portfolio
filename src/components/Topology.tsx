"use client";

import { useReducedMotion } from "framer-motion";
import { site } from "@/data/content";

/**
 * Animated node-network backdrop: dashed topology lines (CSS-animated),
 * packet dots traveling the edges (SMIL), and — on the hero variant — a
 * small avatar orbiting the graph. SMIL ignores the global reduced-motion
 * CSS kill switch, so the moving pieces are skipped entirely when the user
 * prefers reduced motion; the static lines and nodes still render.
 */
export default function Topology({ variant = "hero" }: { variant?: "hero" | "contact" }) {
  const reduced = useReducedMotion();

  if (variant === "contact") {
    return (
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-35"
        viewBox="0 0 1440 700"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        aria-hidden="true"
      >
        <line className="topoline" x1="100" y1="120" x2="380" y2="200" stroke="rgba(148,163,184,0.14)" strokeWidth="1" />
        <line className="topoline" x1="1060" y1="160" x2="1340" y2="90" stroke="rgba(148,163,184,0.14)" strokeWidth="1" />
        <line className="topoline" x1="1060" y1="160" x2="1240" y2="330" stroke="rgba(148,163,184,0.12)" strokeWidth="1" />
        <line className="topoline" x1="100" y1="120" x2="220" y2="380" stroke="rgba(148,163,184,0.12)" strokeWidth="1" />
        <circle cx="100" cy="120" r="3" fill="rgba(148,163,184,0.4)" />
        <circle cx="380" cy="200" r="2.5" fill="#34d399" opacity="0.5" className="dot-live" />
        <circle cx="220" cy="380" r="2.5" fill="rgba(148,163,184,0.35)" />
        <circle cx="1060" cy="160" r="3" fill="rgba(148,163,184,0.4)" />
        <circle cx="1340" cy="90" r="2.5" fill="#38bdf8" opacity="0.5" className="dot-live" />
        <circle cx="1240" cy="330" r="2.5" fill="rgba(148,163,184,0.35)" />
        {!reduced && (
          <>
            <circle r="2.5" fill="#34d399" opacity="0.8">
              <animateMotion dur="8s" repeatCount="indefinite" path="M100,120 L380,200 L220,380" />
            </circle>
            <circle r="2.5" fill="#38bdf8" opacity="0.7">
              <animateMotion dur="9s" repeatCount="indefinite" path="M1340,90 L1060,160 L1240,330" />
            </circle>
          </>
        )}
      </svg>
    );
  }

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-55"
      viewBox="0 0 1440 860"
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      aria-hidden="true"
    >
      <line className="topoline" x1="80" y1="120" x2="300" y2="60" stroke="rgba(148,163,184,0.16)" strokeWidth="1" />
      <line className="topoline" x1="300" y1="60" x2="520" y2="150" stroke="rgba(148,163,184,0.16)" strokeWidth="1" />
      <line className="topoline" x1="520" y1="150" x2="760" y2="80" stroke="rgba(148,163,184,0.16)" strokeWidth="1" />
      <line className="topoline" x1="760" y1="80" x2="1000" y2="140" stroke="rgba(148,163,184,0.16)" strokeWidth="1" />
      <line className="topoline" x1="1000" y1="140" x2="1240" y2="70" stroke="rgba(148,163,184,0.16)" strokeWidth="1" />
      <line className="topoline" x1="1240" y1="70" x2="1400" y2="180" stroke="rgba(148,163,184,0.16)" strokeWidth="1" />
      <line className="topoline" x1="150" y1="420" x2="400" y2="330" stroke="rgba(148,163,184,0.14)" strokeWidth="1" />
      <line className="topoline" x1="400" y1="330" x2="680" y2="390" stroke="rgba(148,163,184,0.14)" strokeWidth="1" />
      <line className="topoline" x1="940" y1="300" x2="1180" y2="360" stroke="rgba(148,163,184,0.14)" strokeWidth="1" />
      <line className="topoline" x1="1180" y1="360" x2="1390" y2="430" stroke="rgba(148,163,184,0.14)" strokeWidth="1" />
      <line className="topoline" x1="80" y1="120" x2="150" y2="420" stroke="rgba(148,163,184,0.1)" strokeWidth="1" />
      <line className="topoline" x1="520" y1="150" x2="400" y2="330" stroke="rgba(148,163,184,0.1)" strokeWidth="1" />
      <line className="topoline" x1="1000" y1="140" x2="940" y2="300" stroke="rgba(148,163,184,0.1)" strokeWidth="1" />
      <line className="topoline" x1="60" y1="720" x2="320" y2="650" stroke="rgba(148,163,184,0.12)" strokeWidth="1" />
      <line className="topoline" x1="320" y1="650" x2="600" y2="740" stroke="rgba(148,163,184,0.12)" strokeWidth="1" />
      <line className="topoline" x1="150" y1="420" x2="320" y2="650" stroke="rgba(148,163,184,0.1)" strokeWidth="1" />
      <circle cx="80" cy="120" r="3" fill="rgba(148,163,184,0.4)" />
      <circle cx="300" cy="60" r="2.5" fill="rgba(148,163,184,0.35)" />
      <circle cx="520" cy="150" r="3.5" fill="#34d399" opacity="0.55" className="dot-live" />
      <circle cx="760" cy="80" r="2.5" fill="rgba(148,163,184,0.35)" />
      <circle cx="1000" cy="140" r="3" fill="rgba(148,163,184,0.4)" />
      <circle cx="1240" cy="70" r="2.5" fill="rgba(148,163,184,0.35)" />
      <circle cx="1400" cy="180" r="3" fill="#38bdf8" opacity="0.5" className="dot-live" />
      <circle cx="150" cy="420" r="3" fill="rgba(148,163,184,0.4)" />
      <circle cx="400" cy="330" r="2.5" fill="rgba(148,163,184,0.35)" />
      <circle cx="680" cy="390" r="3" fill="#34d399" opacity="0.5" className="dot-live" />
      <circle cx="940" cy="300" r="2.5" fill="rgba(148,163,184,0.35)" />
      <circle cx="1180" cy="360" r="3" fill="rgba(148,163,184,0.4)" />
      <circle cx="1390" cy="430" r="2.5" fill="rgba(148,163,184,0.35)" />
      <circle cx="60" cy="720" r="2.5" fill="rgba(148,163,184,0.35)" />
      <circle cx="320" cy="650" r="3" fill="rgba(148,163,184,0.4)" />
      <circle cx="600" cy="740" r="2.5" fill="rgba(148,163,184,0.35)" />
      {!reduced && (
        <>
          <circle r="3" fill="#34d399" opacity="0.9">
            <animateMotion dur="7s" repeatCount="indefinite" path="M80,120 L300,60 L520,150 L760,80 L1000,140 L1240,70" />
          </circle>
          <circle r="2.5" fill="#38bdf8" opacity="0.8">
            <animateMotion dur="9s" repeatCount="indefinite" path="M1390,430 L1180,360 L940,300" />
          </circle>
          <circle r="2.5" fill="#34d399" opacity="0.7">
            <animateMotion dur="8s" repeatCount="indefinite" path="M60,720 L320,650 L600,740" />
          </circle>
          <circle r="2.5" fill="#38bdf8" opacity="0.7">
            <animateMotion dur="10s" repeatCount="indefinite" path="M150,420 L400,330 L680,390" />
          </circle>
          <defs>
            <clipPath id="avclip">
              <circle cx="0" cy="0" r="14" />
            </clipPath>
          </defs>
          <g>
            <animateMotion dur="34s" repeatCount="indefinite" rotate="0" path="M300,60 L520,150 L400,330 L150,420 L80,120 Z" />
            <circle r="21" fill="rgba(52,211,153,0.16)" className="dot-live" />
            <circle r="15.5" fill="#0d131c" stroke="#34d399" strokeWidth="1.5" />
            <image
              href={site.avatar}
              x="-14"
              y="-14"
              width="28"
              height="28"
              clipPath="url(#avclip)"
              preserveAspectRatio="xMidYMid slice"
            />
          </g>
        </>
      )}
    </svg>
  );
}
