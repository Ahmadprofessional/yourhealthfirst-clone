import type { MetadataRoute } from "next";

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

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/studio/", "/studio"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
