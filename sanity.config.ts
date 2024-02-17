// sanity.config.ts
import { defineConfig, isDev } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { SANITY_DATASET_NAME, SANITY_PROJECT_ID } from "./env.mjs";
import { schemaTypes } from "./src/schemas";

export default defineConfig({
  name: "oxmose",
  title: "Oxmose Admin",
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET_NAME,
  plugins: isDev ? [structureTool(), visionTool()] : [structureTool()],
  schema: {
    types: schemaTypes,
  },
});
