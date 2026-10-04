import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          950: "#050607",
          900: "#0a0c0f",
          850: "#0d1015",
          800: "#12161c",
          700: "#1a1f27",
          600: "#242a34",
        },
        ink: {
          DEFAULT: "#e6e9ef",
          muted: "#9aa4b2",
          faint: "#5f6b7a",
        },
        accent: {
          DEFAULT: "#3ddc97",
          dim: "#2bb37a",
          glow: "#3ddc9733",
        },
        signal: {
          up: "#3ddc97",
          down: "#ff5c6c",
          info: "#4d9fff",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pulse-dot": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
        "ticker": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "pulse-dot": "pulse-dot 1.8s ease-in-out infinite",
        "ticker": "ticker 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
