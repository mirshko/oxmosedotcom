// sanity.config.ts
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { SANITY_DATASET_NAME, SANITY_PROJECT_ID } from "./env.mjs";
import { schemaTypes } from "./src/schemas";

export default defineConfig({
  name: "oxmose",
  title: "Oxmose Admin",
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET_NAME,
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
