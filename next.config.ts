import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 92],
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
};

export default withNextIntl(nextConfig);
