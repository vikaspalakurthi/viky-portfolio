import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/data/content";

// Build-time OG image (1200×630) in the site's own theme — rendered once at
// `next build` via Satori, served static. Fonts come from the same
// self-hosted @fontsource packages the site uses: zero external fetches.

export const alt = `${site.name} — ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const font = (pkg: string, file: string) =>
  readFile(join(process.cwd(), "node_modules", "@fontsource", pkg, "files", file));

export default async function OpenGraphImage() {
  const [grotesk700, grotesk500, mono400, mono700] = await Promise.all([
    font("space-grotesk", "space-grotesk-latin-700-normal.woff"),
    font("space-grotesk", "space-grotesk-latin-500-normal.woff"),
    font("jetbrains-mono", "jetbrains-mono-latin-400-normal.woff"),
    font("jetbrains-mono", "jetbrains-mono-latin-700-normal.woff"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          backgroundColor: "#07090d",
          backgroundImage:
            "radial-gradient(640px 400px at 8% -12%, rgba(52,211,153,0.14), transparent 62%), radial-gradient(540px 360px at 102% 4%, rgba(56,189,248,0.11), transparent 58%)",
          fontFamily: "SpaceGrotesk",
        }}
      >
        {/* status badge */}
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              border: "1px solid rgba(52,211,153,0.4)",
              backgroundColor: "rgba(52,211,153,0.08)",
              borderRadius: 999,
              padding: "10px 22px",
              fontFamily: "JetBrainsMono",
              fontSize: 19,
              letterSpacing: 2,
              color: "#34d399",
            }}
          >
            <div style={{ width: 10, height: 10, borderRadius: 99, backgroundColor: "#34d399", display: "flex" }} />
            ALL SYSTEMS OPERATIONAL
            <span style={{ color: "#9fb0c3" }}>— AVAILABLE FOR HIRE</span>
          </div>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              fontFamily: "JetBrainsMono",
              fontSize: 22,
              letterSpacing: 5,
              color: "#9fb0c3",
            }}
          >
            VIKAS PALAKURTHI · SENIOR SRE / DEVOPS / OBSERVABILITY
          </div>
          <div style={{ display: "flex", fontSize: 92, fontWeight: 700, color: "#f2f6fa", letterSpacing: -2 }}>
            I keep production
          </div>
          <div style={{ display: "flex", fontSize: 92, fontWeight: 700, color: "#34d399", letterSpacing: -2, marginTop: -18 }}>
            boring.
          </div>
        </div>

        {/* footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontFamily: "JetBrainsMono",
            fontSize: 24,
          }}
        >
          <div style={{ display: "flex", color: "#34d399" }}>vikas.rulesoverresults.com</div>
          <div style={{ display: "flex", color: "#5b6b7d", fontSize: 20 }}>
            elasticsearch · kafka · kubernetes · prometheus
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "SpaceGrotesk", data: grotesk700, weight: 700, style: "normal" },
        { name: "SpaceGrotesk", data: grotesk500, weight: 500, style: "normal" },
        { name: "JetBrainsMono", data: mono400, weight: 400, style: "normal" },
        { name: "JetBrainsMono", data: mono700, weight: 700, style: "normal" },
      ],
    }
  );
}
