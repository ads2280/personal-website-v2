import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";
import { remarkReadingTime } from "./remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://anikasomaia.com",
  integrations: [tailwind(), icon(), sitemap()],
  output: "server",
  adapter: vercel(),
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});