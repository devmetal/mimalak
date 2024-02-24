import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-light": "#6BA09Aff",
        "primary-lighter": "#A6CACAff",
        "secondary-light": "#D7CFC4ff",
        secondary: "#826A52ff",
        "primary-dark": "#477C76f,",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
