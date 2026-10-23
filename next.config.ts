import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

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
        source: "/:locale(en|ar|es|fr|ru)/cryolipolysis",
        destination: "/:locale/treatments/cryolipolysis",
        permanent: true,
      },
      {
        source: "/anti-wrinkles-injections",
        destination: "/en/treatments/anti-wrinkles",
        permanent: true,
      },
      {
        source: "/:locale(en|ar|es|fr|ru)/anti-wrinkles-injections",
        destination: "/:locale/treatments/anti-wrinkles",
        permanent: true,
      },
      {
        source: "/prp-hair-loss",
        destination: "/en/treatments/prp",
        permanent: true,
      },
      {
        source: "/:locale(en|ar|es|fr|ru)/prp-hair-loss",
        destination: "/:locale/treatments/prp",
        permanent: true,
      },
      {
        source: "/dermal-fillers-and-its-uses",
        destination: "/en/treatments/dermal-fillers",
        permanent: true,
      },
      {
        source: "/:locale(en|ar|es|fr|ru)/dermal-fillers-and-its-uses",
        destination: "/:locale/treatments/dermal-fillers",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
