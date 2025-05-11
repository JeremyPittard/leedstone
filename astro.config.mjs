import { defineConfig, fontProviders } from "astro/config";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";
import alpinejs from "@astrojs/alpinejs";
// https://astro.build/config
export default defineConfig({
  integrations: [react(), markdoc(), keystatic(), icon(), alpinejs()],
  legacy: {
    collections: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Roboto",
        cssVariable: "--font-roboto",
      },
    ],
  },
});
