import type { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";
import { comingSoonPaths } from "@/data/comingSoon";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.yourhealthfirst.uk";
  const isPreview = process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production";

  if (isPreview) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
      sitemap: `${baseUrl}/sitemap.xml`,
    };
  }

  // Coming-soon placeholder pages: blocked on the bare path and under every language prefix
  const comingSoonDisallow = comingSoonPaths.flatMap((path) => [
    path,
    ...routing.locales.map((locale) => `/${locale}${path}`),
  ]);

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/studio/", "/studio", ...comingSoonDisallow],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
