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
      colors: {
        brand: {
          // Official UPLIFT palette
          cream:    "#F9F2E7",   // F9F2E7 - CREAM (light bg)
          brown:    "#9E8976",   // 9E8976 - COKLAT (primary accent)
          gray:     "#505F62",   // 505F62 - GRAYSCALE (dark text / contrast)
          // Legacy aliases (keeps existing code working)
          taupe:    "#9E8976",   // maps to brown
          slate:    "#505F62",   // maps to gray
        },
      },
      borderRadius: {
        "4xl": "2.5rem",
      },
      fontFamily: {
        // ── UPLIFT Brand Fonts ──────────────────────────────
        // ARINOE — all headlines, display, titles (Tailwind class: font-freight / font-headline / font-orinoe / font-display)
        orinoe:   ["Arinoe", "Georgia", ...defaultTheme.fontFamily.serif],
        headline: ["Arinoe", "Georgia", ...defaultTheme.fontFamily.serif],
        display:  ["Arinoe", "Georgia", ...defaultTheme.fontFamily.serif],   // overrides old "font-display" → now Arinoe
        freight:  ["Arinoe", "Georgia", ...defaultTheme.fontFamily.serif],   // legacy alias
        serif:    ["Arinoe", "Georgia", ...defaultTheme.fontFamily.serif],
        // POPPINS — body text, UI, paragraphs, labels (Tailwind class: font-sans / font-poppins / font-body)
        poppins:  ["var(--font-poppins)", ...defaultTheme.fontFamily.sans],
        sans:     ["var(--font-poppins)", ...defaultTheme.fontFamily.sans],
        body:     ["var(--font-poppins)", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
