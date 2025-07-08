import { defineConfig, fontProviders } from "astro/config";
import react from "@astrojs/react";
import markdoc from "@astrojs/markdoc";
import keystatic from "@keystatic/astro";
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";
// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    markdoc(),
    keystatic(),
    icon({
      include: {
        mdi: [
          "facebook",
          "linkedin",
          "reddit",
          "twitter",
          "discord",
          "youtube",
          "spotify",
          "github",
          "gitlab",
          "mastodon",
          "navigate-next",
          "user-circle",
          "star",
          "star-half",
          "instagram",
        ],
        tabler: ["brand-threads"],
        ri: ["twitter-x-line", "bluesky-fill"],
      },
    }),
  ],
  legacy: {
    collections: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    responsiveStyles: true,
    layout: "constrained",
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
