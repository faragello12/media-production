import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "mp-bg": "#0b0b0c",
        "mp-panel": "rgba(255,255,255,0.04)",
        "mp-panel2": "rgba(255,255,255,0.06)",
        "mp-ink": "rgba(255,255,255,0.92)",
        "mp-muted": "rgba(255,255,255,0.70)",
        "mp-faint": "rgba(255,255,255,0.52)",
        "mp-accent": "#B23F22",
        "mp-accent2": "#ffffff"
      },
      fontFamily: {
        display: ["Belleza", "ui-serif", "serif"],
        body: ["ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Arial", "sans-serif"]
      },
      boxShadow: {
        soft: "0 20px 80px rgba(0,0,0,0.65)",
        card: "0 18px 40px rgba(0,0,0,0.55)"
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    }
  },
  plugins: []
} satisfies Config;

