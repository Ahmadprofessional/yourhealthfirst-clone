import type { Metadata } from "next";
import {
  Montserrat,
  Inter_Tight,
  Jost,
  Playfair_Display_SC,
  Instrument_Serif,
  Great_Vibes,
} from "next/font/google";

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: ["400"],
});
import "../globals.css";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {routing} from '@/i18n/routing';
import {notFound} from 'next/navigation';

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: ["400"],
});

const playfairSC = Playfair_Display_SC({
  variable: "--font-playfair-sc",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

import StructuredData from "@/components/StructuredData";
import CookieBanner from "@/components/CookieBanner";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.yourhealthfirst.uk";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "YourHealthFirst Clinic | Harley Street, London",
    template: "%s | YourHealthFirst Clinic — Harley Street",
  },
  description:
    "Award-winning Harley Street clinic at 2 Wimpole Street, London W1G 0EB. Specialising in aesthetic medicine, anti-wrinkle treatments, dermal fillers, hair loss restoration, phlebotomy & skin rejuvenation since 2013.",
  keywords: [
    "Aesthetic Clinic Harley Street",
    "London Dermatology",
    "Anti-Wrinkle Injections London",
    "Dermal Fillers Harley Street",
    "PRP Hair Loss Treatment",
    "Phlebotomy London W1G",
    "Cryolipolysis London",
    "Dr Sofia Bouzian",
    "YourHealthFirst Clinic",
  ],
  authors: [{ name: "Dr. Sofia Bouzian", url: siteUrl }],
  creator: "YourHealthFirst Clinic",
  publisher: "YourHealthFirst Clinic",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "./",
    languages: {
      en: "/en",
      ar: "/ar",
      es: "/es",
      fr: "/fr",
      ru: "/ru",
      "x-default": "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    alternateLocale: ["ar_AE", "es_ES", "fr_FR", "ru_RU"],
    url: siteUrl,
    siteName: "YourHealthFirst Clinic",
    title: "YourHealthFirst Clinic | Harley Street, London",
    description:
      "Award-winning Harley Street clinic at 2 Wimpole Street, London W1G 0EB. Specialising in aesthetic medicine, anti-wrinkle injections, dermal fillers, hair loss restoration, phlebotomy & skin rejuvenation.",
    images: [
      {
        url: "/images/hero-bg.jpeg",
        width: 1200,
        height: 630,
        alt: "YourHealthFirst Clinic Harley Street London",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "YourHealthFirst Clinic | Harley Street, London",
    description:
      "Award-winning Harley Street clinic at 2 Wimpole Street, London W1G 0EB. Specialising in aesthetic medicine, hair restoration & longevity.",
    creator: "@YHFHarleyStreet",
    images: ["/images/hero-bg.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "YOUR_GOOGLE_VERIFICATION_TOKEN",
  },
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={locale === 'ar' ? 'rtl' : 'ltr'}
      suppressHydrationWarning
      className={`${montserrat.variable} ${interTight.variable} ${jost.variable} ${playfairSC.variable} ${instrumentSerif.variable} ${greatVibes.variable} h-full antialiased`}
    >
      <head>
        {/* Google Consent Mode v2 Default Denied (inline before any analytics/ads fire) */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'analytics_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'wait_for_update': 500
              });
              gtag('set', 'ads_data_redaction', true);
              gtag('set', 'url_passthrough', true);
            `,
          }}
        />
        <StructuredData />
        {routing.locales.map((loc) => (
          <link
            key={loc}
            rel="alternate"
            hrefLang={loc}
            href={`${siteUrl}/${loc}`}
          />
        ))}
        <link
          rel="alternate"
          hrefLang="x-default"
          href={`${siteUrl}/en`}
        />
      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col overflow-x-hidden">
        <NextIntlClientProvider messages={messages}>
          {children}
          <WhatsAppFloat />
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
