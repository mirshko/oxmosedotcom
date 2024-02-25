// sanity.config.ts
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { SANITY_DATASET_NAME, SANITY_PROJECT_ID } from "./env.mjs";
import { schemaTypes, singletonTypes } from "./src/schemas";

/**
 * Define the actions that should be available for singleton documents
 */
const singletonActions = new Set(["publish", "discardChanges", "restore"]);

export default defineConfig({
  name: "oxmose",
  title: "Oxmose Admin",
  projectId: SANITY_PROJECT_ID,
  dataset: SANITY_DATASET_NAME,
  plugins: [
    structureTool({
      structure: (S) => {
        const defaultItems = S.documentTypeListItems().filter(
          (listItem) => !singletonTypes.has(listItem.getId() as string),
        );

        const singletonItems = schemaTypes
          .filter((type) => singletonTypes.has(type.name))
          .map((schemaType) =>
            S.listItem()
              .title(schemaType.title ?? schemaType.name)
              .id(schemaType.name)
              .child(
                S.document()
                  .schemaType(schemaType.name)
                  .documentId(schemaType.name),
              ),
          );

        return S.list()
          .title("Content")
          .id("content")
          .items([...singletonItems, S.divider(), ...defaultItems]);
      },
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
    /**
     * Filter out singleton types from the global “New document” menu options
     */
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  document: {
    /**
     * For singleton types, filter out actions that are not explicitly included in the `singletonActions` list defined above
     */
    actions: (prev, { schemaType }) =>
      singletonTypes.has(schemaType)
        ? prev.filter(({ action }) => action && singletonActions.has(action))
        : prev,
  },
});
