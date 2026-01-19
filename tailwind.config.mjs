/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Space Mono"', "monospace"],
      },
      colors: {
        "gray-bg": "#111111",
        "gray-bg-light": "#f5f5f5",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
