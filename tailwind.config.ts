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
        transparent: "transparent",

        background: "hsl(var(--background))",

        foreground: {
          DEFAULT: "hsl(var(--foreground))",
          invert: "hsl(var(--foreground-invert))",
        },

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },

        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },

        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },

        tertiary: {
          DEFAULT: "hsl(var(--tertiary))",
          foreground: "hsl(var(--tertiary-foreground))",
        },

        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },

        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        input: {
          DEFAULT: "hsl(var(--input))",
          foreground: "hsl(var(--input-foreground))",
        },

        border: "hsl(var(--border))",
        ring: "hsl(var(--ring))",
        shadow: "hsl(var(--shadow))",

        tag: {
          DEFAULT: "hsl(var(--tag))",
          foreground: {
            DEFAULT: "hsl(var(--tag-foreground))",
            invert: "hsl(var(--tag-foreground-invert))",
          },
          invert: "hsl(var(--tag-invert))",
          accent: "hsl(var(--tag-accent))",
        },

        bento: {
          a: "hsl(var(--bento-a))",
          b: "hsl(var(--bento-b))",
          c: "hsl(var(--bento-c))",
          d: "hsl(var(--bento-d))",
          DEFAULT: "hsl(var(--bento-a))",
        },
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
