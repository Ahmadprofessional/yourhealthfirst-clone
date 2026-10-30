import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

// Old WordPress URLs that Google still lists. Each one goes to the closest page on the new site.
const legacyRedirects: [string, string][] = [
  ["/profhilo", "/en/treatments/profhilo"],
  ["/anti-wrinkle-botox", "/en/treatments/anti-wrinkles"],
  ["/our-services/anti-wrinkle-injections-botox", "/en/treatments/anti-wrinkles"],
  ["/tag/botox", "/en/treatments/anti-wrinkles"],
  ["/tag/botox-injections", "/en/treatments/anti-wrinkles"],
  ["/tag/anti-wrinkles", "/en/treatments/anti-wrinkles"],
  ["/tag/hyperhidrosis", "/en/treatments/anti-wrinkles"],
  ["/cryolipolysis-fat-freezing", "/en/treatments/cryolipolysis"],
  ["/tag/cryolipolysis-chelsea", "/en/treatments/cryolipolysis"],
  ["/tag/cryolipolysis-results", "/en/treatments/cryolipolysis"],
  ["/tag/cryolipolysis-london", "/en/treatments/cryolipolysis"],
  ["/cryotherapy-near-me", "/en/treatments/cryopen"],
  ["/exosome-exo-ox", "/en/treatments/exosome"],
  ["/our-services/prp-face-and-body", "/en/treatments/prp-face-body"],
  ["/tag/prp", "/en/treatments/prp-hair-loss"],
  ["/tag/alopecia", "/en/treatments/prp-hair-loss"],
  ["/tag/hair-loss-clinic-near-me", "/en/treatments/prp-hair-loss"],
  ["/our-services/phlebotomy-blood-drawn-centrifugal-service", "/en/treatments/phlebotomy"],
  ["/tag/blood-centrifugal", "/en/treatments/phlebotomy"],
  ["/our-services/vitamin-b12", "/en/treatments/vitamin-b12"],
  ["/our-services/microsclerotherapy-spider-veins", "/en/treatments/sclerotherapy"],
  ["/1st-customizable-biophotonic-mask", "/en/photobiodynamic-therapy"],
  ["/photobiodynamic-therapy/https-yourhealthfirst-uk-photobiodynamic-therapy", "/en/photobiodynamic-therapy"],
  ["/sofia-bouzian", "/en/about-us"],
  ["/dr-malgorzata-stanzek", "/en/about-us"],
  ["/refund-policy", "/en/price-list"],
];

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 92],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
      },
    ],
  },
  async headers() {
    const isPreview = process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production";
    if (isPreview) {
      return [
        {
          source: "/:path*",
          headers: [
            {
              key: "X-Robots-Tag",
              value: "noindex, nofollow",
            },
          ],
        },
      ];
    }
    return [];
  },
  async redirects() {
    return [
      {
        source: "/cryolipolysis",
        destination: "/en/treatments/cryolipolysis",
        permanent: true,
      },
      {
        source: "/:locale(en|ar|ary|es|fr|ru)/cryolipolysis",
        destination: "/:locale/treatments/cryolipolysis",
        permanent: true,
      },
      {
        source: "/anti-wrinkles-injections",
        destination: "/en/treatments/anti-wrinkles",
        permanent: true,
      },
      {
        source: "/:locale(en|ar|ary|es|fr|ru)/anti-wrinkles-injections",
        destination: "/:locale/treatments/anti-wrinkles",
        permanent: true,
      },
      {
        source: "/prp-hair-loss",
        destination: "/en/treatments/prp-hair-loss",
        permanent: true,
      },
      {
        source: "/:locale(en|ar|ary|es|fr|ru)/prp-hair-loss",
        destination: "/:locale/treatments/prp-hair-loss",
        permanent: true,
      },
      {
        source: "/:locale(en|ar|ary|es|fr|ru)/treatments/prp",
        destination: "/:locale/treatments/prp-hair-loss",
        permanent: true,
      },
      {
        source: "/our-services/anti-wrinkle-injections",
        destination: "/en/treatments/anti-wrinkles",
        permanent: true,
      },
      {
        source: "/:locale(en|ar|ary|es|fr|ru)/our-services/anti-wrinkle-injections",
        destination: "/:locale/treatments/anti-wrinkles",
        permanent: true,
      },
      {
        source: "/testimonials",
        destination: "/en",
        permanent: true,
      },
      {
        source: "/:locale(en|ar|ary|es|fr|ru)/testimonials",
        destination: "/:locale",
        permanent: true,
      },
      {
        source: "/images/about/collage-3.jpg1",
        destination: "/images/about/collage-3.jpg",
        permanent: true,
      },
      {
        source: "/dermal-fillers-and-its-uses",
        destination: "/en/treatments/dermal-fillers",
        permanent: true,
      },
      {
        source: "/:locale(en|ar|ary|es|fr|ru)/dermal-fillers-and-its-uses",
        destination: "/:locale/treatments/dermal-fillers",
        permanent: true,
      },
      ...legacyRedirects.map(([source, destination]) => ({
        source,
        destination,
        permanent: true,
      })),
      // Safety nets for old WordPress pages not listed above (specific rules above win)
      { source: "/our-services/:slug", destination: "/en/treatments", permanent: true },
      { source: "/tag/:slug", destination: "/en/blogs", permanent: true },
      {
        source: "/intent/:path*",
        destination: "/studio/intent/:path*",
        permanent: false,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
