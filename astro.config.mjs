import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://thaireading.com",
  experimental: {
    integrations: true,
  },
  integrations: [sitemap()],
  vite: {
    ssr: {
      noExternal: ["@picocss/pico"],
    },
  },
});
