import { createDataAttribute } from "@sanity/visual-editing";
import { projectId, dataset } from "../env";

export function getSanityAttribute(id: string, type: string, path: string) {
  const fn = createDataAttribute({
    id,
    type,
    projectId,
    dataset,
    baseUrl: "/studio",
  });
  return fn(path).toString();
}
