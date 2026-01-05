/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "gray-bg": "#2E2E2E",
        "gray-bg-light": "#E5E5E5",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
