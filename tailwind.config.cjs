/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        stack: "system-ui",
      },
      colors: {
        brand: {
          black: "#222326",
          white: "#e7ecef",
          magenta: "#f12c73",
          red: "#fb4b36",
          orange: "#ff9505",
          yellow: "#e8bd21",
        },
      },
    },
  },
  plugins: [],
  safelist: ["hidden"],
};
