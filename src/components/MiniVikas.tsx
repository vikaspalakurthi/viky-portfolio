import { miniVikas } from "@/data/content";

/**
 * Pixel-art mini-Vikas walking past two server racks on an endless patrol.
 * Pure CSS keyframes — the global reduced-motion rule freezes the whole strip.
 */
function ServerRack({ left, fixing = false }: { left: string; fixing?: boolean }) {
  return (
    <div
      className="absolute bottom-[21px] box-border flex h-12 w-[30px] flex-col gap-1 rounded-[3px] border border-base-600/80 bg-base-800 p-1.5"
      style={{ left }}
    >
      {fixing ? (
        <span className="ledfix h-[5px] w-[5px] rounded-full" />
      ) : (
        <span className="dot-live h-[5px] w-[5px] rounded-full bg-accent" />
      )}
      <span className="h-0.5 w-4 bg-ink-faint/40" />
      <span className="h-0.5 w-4 bg-ink-faint/40" />
      <span className="h-0.5 w-2.5 bg-ink-faint/40" />
    </div>
  );
}

export default function MiniVikas() {
  return (
    <div
      className="relative h-[118px] overflow-hidden border-t border-base-700/40"
      aria-hidden="true"
    >
      {/* the floor */}
      <div className="absolute inset-x-0 bottom-5 h-px bg-base-600/70" />

      <ServerRack left="14%" />
      <ServerRack left="44%" fixing />

      {/* PROD sign */}
      <div className="absolute bottom-[21px] left-[72%] flex flex-col items-center">
        <div className="mono rounded-sm border border-base-600/80 bg-base-900 px-[9px] py-1 text-[9px] tracking-[0.08em] text-ink-muted">
          {miniVikas.serverLabel}
        </div>
        <div className="h-3.5 w-0.5 bg-base-600/80" />
      </div>

      {/* the walker */}
      <div className="walkmove absolute bottom-[21px] h-[72px] w-[46px]">
        <div className="bob relative h-full w-full">
          <div className="legA absolute bottom-0 left-4 h-[18px] w-1.5 origin-top rounded-[3px] bg-[#232c3a]" />
          <div className="legB absolute bottom-0 left-6 h-[18px] w-1.5 origin-top rounded-[3px] bg-[#2a3446]" />
          <div className="absolute bottom-4 left-1.5 h-5 w-2.5 rounded-[5px] bg-[#10151d]" />
          <div className="absolute bottom-[15px] left-[11px] h-[27px] w-[26px] overflow-hidden rounded-t-lg rounded-b-md bg-[#7e2f3f]">
            <div className="absolute left-0 top-1.5 h-[3px] w-full bg-black/40" />
            <div className="absolute left-0 top-[15px] h-[3px] w-full bg-black/40" />
            <div className="absolute left-[11px] top-0 h-full w-[3px] bg-black/30" />
          </div>
          <div className="armA absolute bottom-5 left-[29px] h-4 w-1.5 origin-top rounded-[3px] bg-[#6d2837]">
            <div className="absolute -bottom-[5px] -left-0.5 h-2 w-[9px] rounded-[2px] bg-ink" />
          </div>
          <div className="absolute bottom-[42px] left-[13px] h-[21px] w-[22px] rounded-[7px] bg-[#d99f7e]">
            <div className="absolute -top-[5px] -left-0.5 h-[11px] w-[26px] rounded-t-lg rounded-b-[3px] bg-[#14181f]" />
            <div className="absolute left-2 top-2 h-[3px] w-[13px] rounded-[1px] bg-ink/85" />
            <div className="absolute -bottom-px left-1.5 h-[7px] w-3.5 rounded-t-[3px] rounded-b-md bg-[#1b1f28]" />
          </div>
        </div>
      </div>

      <div className="mono absolute bottom-[30px] right-[26px] hidden text-[10px] text-ink-faint/70 lg:block">
        {miniVikas.caption}
      </div>
    </div>
  );
}
