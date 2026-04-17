import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

const SITE_URL =
  process.env.PUBLIC_SITE_URL ??
  "https://municipalidad-de-ivochote.netlify.app";

export default defineConfig({
  site: SITE_URL,
  integrations: [
    react(),
    tailwind(),
    sitemap({
      i18n: { defaultLocale: "es", locales: { es: "es-PE" } },
      changefreq: "weekly",
      priority: 0.7,
      filter: (page) => !page.includes("/404"),
      serialize: (item) => {
        // Prioridades específicas por sección
        if (item.url === `${SITE_URL}/`) {
          item.priority = 1.0;
          item.changefreq = "daily";
        } else if (item.url.includes("/noticias")) {
          item.priority = 0.9;
          item.changefreq = "daily";
        } else if (item.url.includes("/servicios")) {
          item.priority = 0.8;
          item.changefreq = "weekly";
        } else if (item.url.includes("/turismo")) {
          item.priority = 0.8;
          item.changefreq = "weekly";
        } else if (item.url.includes("/eventos")) {
          item.priority = 0.7;
          item.changefreq = "daily";
        } else if (item.url.includes("/autoridades")) {
          item.priority = 0.6;
          item.changefreq = "monthly";
        } else if (item.url.includes("/contacto")) {
          item.priority = 0.7;
          item.changefreq = "monthly";
        }
        return item;
      },
    }),
  ],
  output: "static",
  trailingSlash: "ignore",
  build: {
    format: "directory",
    inlineStylesheets: "auto",
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: "hover",
  },
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            react: ["react", "react-dom"],
          },
        },
      },
    },
  },
});
