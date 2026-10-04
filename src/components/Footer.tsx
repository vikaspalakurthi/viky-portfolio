import { contact, footer } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-base-700/40 bg-base-950">
      <div className="mx-auto flex h-[88px] max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <div className="flex items-center gap-4">
          <span className="sig text-2xl text-ink-muted">{contact.signature.name}</span>
          <span className="mono hidden text-[13px] text-ink-faint sm:inline">
            {footer.copyright}
          </span>
        </div>
        <div className="mono flex items-center gap-2 text-[13px] text-ink-faint">
          <span className="dot-live h-2 w-2 rounded-full bg-accent" />
          <span>{footer.status}</span>
        </div>
      </div>
    </footer>
  );
}
