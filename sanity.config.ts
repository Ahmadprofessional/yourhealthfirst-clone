import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { presentationTool } from "sanity/presentation";
import { apiVersion, dataset, projectId } from "./src/sanity/env";
import { schema } from "./src/sanity/schemaTypes";
import { structure, SINGLETON_TYPES } from "./src/sanity/structure";
import { resolve } from "./src/sanity/presentation/resolve";

// Document types where Sophia MUST NOT be able to delete, duplicate, or unpublish
const PROTECTED_TYPES = new Set([
  ...SINGLETON_TYPES,
  "treatment", // The 20 treatment pages must never be accidentally deleted
]);

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  title: "YourHealthFirst Content Studio",
  schema,
  plugins: [
    structureTool({
      structure,
    }),
    presentationTool({
      resolve,
      previewUrl: {
        origin: typeof window !== "undefined" ? window.location.origin : "http://localhost:3000",
        preview: "/en",
        previewMode: {
          enable: "/api/draft-mode/enable",
        },
      },
    }),
  ],
  document: {
    // UI GUARD: Remove delete, duplicate, and unpublish actions for all protected page documents
    actions: (prev, context) => {
      if (PROTECTED_TYPES.has(context.schemaType)) {
        return prev.filter(
          (originalAction) =>
            originalAction.action !== "delete" &&
            originalAction.action !== "duplicate" &&
            originalAction.action !== "unpublish"
        );
      }
      return prev;
    },
    // Prevent singletons from showing in the global "+" (Create New) top bar
    newDocumentOptions: (prev, { creationContext }) => {
      if (creationContext.type === "global") {
        return prev.filter(
          (template) => !SINGLETON_TYPES.has(template.templateId)
        );
      }
      return prev;
    },
  },
});
