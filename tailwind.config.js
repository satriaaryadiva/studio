const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        "4xl": "2.5rem",
      },
      fontFamily: {
        sans: ["var(--font-instrument-sans)", ...defaultTheme.fontFamily.sans],
        display: ["var(--font-instrument-sans)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-instrument-serif)", ...defaultTheme.fontFamily.serif],
        freight: ["var(--font-freight)", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};
