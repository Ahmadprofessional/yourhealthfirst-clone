import { draftMode } from "next/headers";
import { client } from "./client";

// Sofia's professional title is not shown on the site, so "Dr"/"Dr." before her name is dropped from CMS
// text when it is displayed. Patient testimonial quotes ("quote") are the patients' own words and are kept.
const DR_BEFORE_SOFIA = /\bDr\.? (?=Sofia\b)/g;
const KEEP_AS_WRITTEN = new Set(["quote"]);

function withoutDrBeforeSofia<V>(value: V, key?: string): V {
  if (typeof value === "string") {
    return (key && KEEP_AS_WRITTEN.has(key) ? value : value.replace(DR_BEFORE_SOFIA, "")) as V;
  }
  if (Array.isArray(value)) return value.map((item) => withoutDrBeforeSofia(item)) as V;
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([k, v]) => [k, withoutDrBeforeSofia(v, k)])
    ) as V;
  }
  return value;
}

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

    const result = withoutDrBeforeSofia(data ?? fallback);
    if (isDev && !isDraft && result !== null) {
      memoryCache.set(cacheKey, { data: result, timestamp: Date.now() });
    }
    return result;
  } catch (error) {
    console.warn("Sanity fetch error (falling back to static local content):", error);
    return fallback;
  }
}
