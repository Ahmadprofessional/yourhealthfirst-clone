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

export const metadata: Metadata = {
  title: "Your Health First Clinic",
  description:
    "Harley Street, London — Health, Dermatology, Hair Loss, Anti-Aging & Rejuvenation Clinic. Award winning clinic since 2013.",
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
      <body suppressHydrationWarning className="min-h-full flex flex-col overflow-x-hidden">
        <NextIntlClientProvider messages={messages}>
          {children}
          <WhatsAppFloat />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
