import Reveal from "./Reveal";

export default function Section({
  id,
  index,
  title,
  kicker,
  children,
}: {
  id: string;
  index: string;
  title: string;
  kicker?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:px-8 sm:py-28">
      <Reveal>
        <div className="mb-12 flex items-end justify-between gap-6 border-b border-base-700/60 pb-5">
          <div>
            <div className="mono mb-2 flex items-center gap-2 text-xs text-accent">
              <span>{index}</span>
              <span className="h-px w-8 bg-accent/40" />
              {kicker && <span className="text-ink-faint">{kicker}</span>}
            </div>
            <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {title}
            </h2>
          </div>
        </div>
      </Reveal>
      {children}
    </section>
  );
}
