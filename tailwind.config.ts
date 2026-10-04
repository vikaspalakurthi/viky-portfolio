import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          950: "#07090d",
          900: "#0d131c",
          850: "#0a0f16",
          800: "#131a24",
          700: "#2a3647",
          600: "#38465a",
        },
        ink: {
          DEFAULT: "#e6edf3",
          bright: "#f2f6fa",
          muted: "#9fb0c3",
          faint: "#5b6b7d",
        },
        accent: {
          DEFAULT: "#34d399",
          dim: "#10b981",
          glow: "#34d39933",
        },
        signal: {
          up: "#34d399",
          down: "#f87171",
          info: "#38bdf8",
          warn: "#fbbf24",
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
