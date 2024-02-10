import { defineConfig } from "astro/config";

import { sanityIntegration as sanity } from "@sanity/astro";
import react from "@astrojs/react";
import { SANITY_DATASET_NAME, SANITY_PROJECT_ID } from "./env.mjs";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  integrations: [
    sanity({
      projectId: SANITY_PROJECT_ID,
      dataset: SANITY_DATASET_NAME,
      // Set useCdn to false if you're building statically.
      useCdn: false,
      // Access the Studio on your.url/admin
      studioBasePath: "/admin",
    }),
    react(),
  ],
});
