import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";
import Reveal from "@/components/Reveal";
import { site } from "@/data/content";
import { posts } from "@/data/blog";

export const metadata: Metadata = {
  title: `Deep dives — ${site.name}`,
  description:
    "Engineering deep dives: the architecture, incidents, and lessons behind the career log — with diagrams and cheatsheets.",
};

export default function BlogIndex() {
  return (
    <main className="relative">
      <ScrollProgress />
      <CursorGlow />
      <Nav />
      <section className="mx-auto max-w-4xl px-5 pb-24 pt-28 sm:px-8 sm:pt-32">
        <Reveal>
          <div className="mono text-sm text-accent">$ ls -la /var/log/deep-dives/</div>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink-bright sm:text-[46px]">
            Deep dives.
          </h1>
          <p className="mt-4 max-w-[640px] text-[17px] leading-relaxed text-ink-muted">
            The career log says what happened; these say how — architecture, the key flow,
            what broke, and the cheatsheet that survived. Every claim here is one I&apos;ll
            happily defend in an interview.
          </p>
        </Reveal>
        <div className="mt-12 flex flex-col gap-6">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 80}>
              <a
                href={`/blog/${p.slug}`}
                className="group block rounded-[14px] border border-base-700/60 bg-base-900/50 px-7 py-6 transition-colors hover:border-accent/40"
              >
                <div className="mono flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] text-ink-faint">
                  <span className="text-ink-muted">{p.org}</span>
                  <span>{p.period}</span>
                  <span>{p.readMinutes} min read</span>
                </div>
                <div className="mt-2 text-[22px] font-bold leading-snug text-ink-bright transition-colors group-hover:text-accent">
                  {p.title}
                </div>
                <p className="mt-2 max-w-[72ch] text-[14.5px] leading-[1.7] text-ink-muted">{p.summary}</p>
                <div className="mono mt-4 text-[13px] text-accent">read the deep dive →</div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
