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
      // Coastal palette — values live in src/app/globals.css (:root) so the theme changes in one place.
      colors: {
        salt: hsl("salt"), // sea-salt white page background
        foam: hsl("foam"), // pastel-blue section tint
        sky: hsl("sky"), // pastel blue secondary accent
        seaglass: hsl("seaglass"), // light teal tint
        teal: hsl("teal"), // primary accent (AA on white)
        tide: hsl("tide"), // brighter teal for decoration / large text
        ink: hsl("ink"), // body text
        sand: hsl("sand"), // light sand neutral (sparingly)
        gold: hsl("gold"), // refined gold accent
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
