import { draftMode } from "next/headers";
import { client } from "./client";

export async function sanityFetch<T>({
  query,
  params = {},
  fallback = null,
  tags = [],
}: {
  query: string;
  params?: Record<string, any>;
  fallback?: T | null;
  tags?: string[];
}): Promise<T | null> {
  try {
    const draft = await draftMode();
    const isDraft = draft.isEnabled;
    const isDev = process.env.NODE_ENV === "development";

    const readToken = process.env.SANITY_API_READ_TOKEN;
    const perspective = isDraft && readToken ? "drafts" : "published";

    const data = await client.fetch<T>(query, params, {
      perspective,
      // Never use CDN in dev or when draft mode is active to ensure instant sub-second updates
      useCdn: !isDraft && !isDev,
      ...(isDraft && readToken ? { token: readToken } : {}),
      next: {
        revalidate: isDraft || isDev ? 0 : 60,
        tags: ["sanity", ...tags],
      },
    });

    return data ?? fallback;
  } catch (error) {
    console.warn("Sanity fetch error (falling back to static local content):", error);
    return fallback;
  }
}
