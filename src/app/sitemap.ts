import type { MetadataRoute } from "next";
import { treatmentDetails } from "@/data/treatments";
import { getAllBlogPosts } from "@/data/blogs";
import { routing } from "@/i18n/routing";
import { comingSoonPaths } from "@/data/comingSoon";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.yourhealthfirst.uk";
  const lastModified = new Date();

  // Base static routes (relative to locale root)
  const staticRoutes = [
    "",
    "/about-us",
    "/treatments",
    "/price-list",
    "/gallery",
    "/blogs",
    "/press",
    "/contact-us",
    "/fotoage",
    "/home-skincare",
    "/longevity",
    "/photobiodynamic-therapy",
    "/treatments/phlebotomy",
    "/treatments/sclerotherapy",
    "/privacy-policy",
    "/cookie-policy",
    "/terms",
  ];

  // Dynamic treatment routes from treatmentDetails
  const treatmentRoutes = treatmentDetails
    .map((t) => `/treatments/${t.slug}`)
    .filter((route) => route !== "/treatments/phlebotomy" && route !== "/treatments/sclerotherapy");

  // Dynamic blog routes from blogs data
  const blogRoutes = getAllBlogPosts().map((p) => `/blog/${p.slug}`);

  // "Coming soon" placeholder pages are kept out of the sitemap (see src/data/comingSoon.ts)
  const allPaths = [...staticRoutes, ...treatmentRoutes, ...blogRoutes].filter(
    (path) => !comingSoonPaths.includes(path)
  );

  const entries: MetadataRoute.Sitemap = [];

  for (const path of allPaths) {
    // Generate alternates map for all supported locales
    const languages: Record<string, string> = {
      "x-default": `${baseUrl}/en${path}`,
    };
    for (const locale of routing.locales) {
      languages[locale] = `${baseUrl}/${locale}${path}`;
    }

    // Determine priority and change frequency based on path
    let priority = 0.7;
    let changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "weekly";

    if (path === "") {
      priority = 1.0;
      changeFrequency = "daily";
    } else if (path === "/treatments" || path === "/contact-us" || path === "/price-list") {
      priority = 0.9;
    } else if (path.startsWith("/treatments/")) {
      priority = 0.8;
    } else if (path.startsWith("/blog/")) {
      priority = 0.75;
      changeFrequency = "monthly";
    } else if (path === "/privacy-policy" || path === "/cookie-policy" || path === "/terms") {
      priority = 0.4;
      changeFrequency = "monthly";
    }

    // Add entry for each locale
    for (const locale of routing.locales) {
      entries.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified,
        changeFrequency,
        priority: locale === "en" ? priority : Math.max(0.3, priority - 0.1),
        alternates: {
          languages,
        },
      });
    }
  }

  return entries;
}
