import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

// Mirrors the reference build's Tailwind v3 theme (Base44 / shadcn conventions)
// so utility classes resolve to identical values.
const hsl = (v: string) => `hsl(var(--${v}) / <alpha-value>)`;

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // The reference resolves any integer opacity modifier (e.g. bg-white/88, from-marsh/92).
      opacity: Object.fromEntries(Array.from({ length: 101 }, (_, i) => [String(i), String(i / 100)])),
      colors: {
        oyster: hsl("oyster"),
        seaoat: hsl("seaoat"),
        moss: hsl("moss"),
        marsh: hsl("marsh"),
        tidewater: hsl("tidewater"),
        golden: hsl("golden"),
        driftwood: hsl("driftwood"),
        background: hsl("background"),
        foreground: hsl("foreground"),
        border: hsl("border"),
        input: hsl("input"),
        ring: hsl("ring"),
        destructive: { DEFAULT: hsl("destructive"), foreground: hsl("destructive-foreground") },
        muted: { DEFAULT: hsl("muted"), foreground: hsl("muted-foreground") },
        accent: { DEFAULT: hsl("accent"), foreground: hsl("accent-foreground") },
      },
      fontFamily: {
        heading: ["var(--font-caslon)", "Georgia", "serif"],
        display: ["var(--font-caslon)", "Georgia", "serif"],
        body: ["var(--font-jost)", "ui-sans-serif", "system-ui", "sans-serif"],
        script: ["var(--font-homemade)", "cursive"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [animate],
};

export default config;
