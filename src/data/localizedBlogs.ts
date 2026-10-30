import { blogPosts, BlogPost } from "@/data/blogs";
import arBlogs from "./translations/blogs/ar.json";
import aryBlogs from "./translations/blogs/ary.json";
import esBlogs from "./translations/blogs/es.json";
import frBlogs from "./translations/blogs/fr.json";
import ruBlogs from "./translations/blogs/ru.json";

const translationsMap: Record<string, Record<string, any>> = {
  ar: Object.fromEntries((arBlogs as any[]).map((b) => [b.slug, b])),
  ary: Object.fromEntries((aryBlogs as any[]).map((b) => [b.slug, b])),
  es: Object.fromEntries((esBlogs as any[]).map((b) => [b.slug, b])),
  fr: Object.fromEntries((frBlogs as any[]).map((b) => [b.slug, b])),
  ru: Object.fromEntries((ruBlogs as any[]).map((b) => [b.slug, b])),
};

export function getLocalizedBlogPost(slug: string, locale: string): BlogPost | undefined {
  const base = blogPosts.find((b) => b.slug === slug || b.aliases?.includes(slug));
  if (!base) return undefined;
  if (locale === "en") return base;

  const localized = translationsMap[locale]?.[base.slug];
  if (!localized) return base;

  return {
    ...base,
    ...localized,
    slug: base.slug,
    aliases: base.aliases,
    image: base.image,
    datePublished: base.datePublished,
    author: {
      ...base.author,
      ...(localized.author || {}),
      image: base.author.image,
    },
    relatedTreatment: {
      ...base.relatedTreatment,
      ...(localized.relatedTreatment || {}),
      href: base.relatedTreatment.href,
    },
  } as BlogPost;
}

export function getAllLocalizedBlogPosts(locale: string): BlogPost[] {
  return blogPosts.map((b) => getLocalizedBlogPost(b.slug, locale) || b);
}

