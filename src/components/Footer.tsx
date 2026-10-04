import { site } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-base-700/60 bg-base-950">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 sm:flex-row sm:px-8">
        <span className="mono text-xs text-ink-faint">
          © {site.name}. Built with Next.js + Tailwind.
        </span>
        <span className="mono text-xs text-ink-faint">
          Designed &amp; engineered end-to-end.
        </span>
      </div>
    </footer>
  );
}
