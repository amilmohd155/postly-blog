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
        "primary-light": "#ebebeb",
        "primary-dark": "#141414",
        "secodary-light": "#282828",
        "secodary-dark": "#d7d7d7",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
