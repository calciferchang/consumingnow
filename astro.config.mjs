// @ts-check

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import wikiLinkPlugin from "@flowershow/remark-wiki-link";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [
    mdx({
      // Pass the remark plugin to the MDX pipeline so it runs when Astro processes .mdx/.md
      remarkPlugins: [wikiLinkPlugin],
    }),
    sitemap(),
    react(),
  ],
  // If you also want the plugin to run for plain .md files processed by Astro's markdown
  // pipeline, add it here as well.
  markdown: {
    remarkPlugins: [wikiLinkPlugin],
  },
});
