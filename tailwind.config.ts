import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "foreground-invert": "hsl(var(--foreground-invert))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        transparent: "transparent",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        tertiary: "hsl(var(--tertiary))",
        "tertiary-foreground": "hsl(var(--tertiary-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        input: "hsl(var(--input))",
        "input-foreground": "hsl(var(--input-foreground))",
        border: "hsl(var(--border))",
        ring: "hsl(var(--ring))",
        shadow: "hsl(var(--shadow))",

        tag: "hsl(var(--tag))",
        "tag-foreground": "hsl(var(--tag-foreground))",
        "tag-invert": "hsl(var(--tag-invert))",
        "tag-foreground-invert": "hsl(var(--tag-foreground-invert))",
        "tag-accent": "hsl(var(--tag-accent))",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("tailwindcss-animate"),
  ],
};
export default config;
