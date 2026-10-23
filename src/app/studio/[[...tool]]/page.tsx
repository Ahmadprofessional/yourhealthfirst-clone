import type { Metadata, Viewport } from "next";
import Studio from "./Studio";

// Force static rendering for fast load times
export const dynamic = "force-static";

// Ironclad search engine protection: noindex, nofollow
export const metadata: Metadata = {
  title: "YourHealthFirst Studio",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function StudioPage() {
  return <Studio />;
}
