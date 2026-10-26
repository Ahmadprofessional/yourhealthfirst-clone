import { draftMode } from "next/headers";
import { client } from "./client";

// In-memory cache for fast sub-second dev loading and avoiding redundant fetches
const memoryCache = new Map<string, { data: any; timestamp: number }>();
const CACHE_TTL_DEV = 30000; // 30 seconds

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
  const cacheKey = `${query}:${JSON.stringify(params)}`;
  const isDev = process.env.NODE_ENV === "development";

  try {
    const draft = await draftMode();
    const isDraft = draft.isEnabled;

    if (isDev && !isDraft) {
      const cached = memoryCache.get(cacheKey);
      if (cached && Date.now() - cached.timestamp < CACHE_TTL_DEV) {
        return cached.data as T;
      }
    }

    const readToken = process.env.SANITY_API_READ_TOKEN;
    const perspective = isDraft && readToken ? "drafts" : "published";

    const data = await client.fetch<T>(query, params, {
      perspective,
      useCdn: !isDraft,
      ...(isDraft && readToken ? { token: readToken } : {}),
      next: {
        revalidate: isDraft ? 0 : 300,
        tags: ["sanity", ...tags],
      },
    });

    const result = data ?? fallback;
    if (isDev && !isDraft && result !== null) {
      memoryCache.set(cacheKey, { data: result, timestamp: Date.now() });
    }
    return result;
  } catch (error) {
    console.warn("Sanity fetch error (falling back to static local content):", error);
    return fallback;
  }
}
