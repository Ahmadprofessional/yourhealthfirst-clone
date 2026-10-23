import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import {
  PhoneIcon,
  MobileIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@/components/icons";
import { getTranslations } from "next-intl/server";
import { sanityFetch } from "@/sanity/lib/fetch";
import { CONTACT_PAGE_QUERY, SITE_SETTINGS_QUERY } from "@/sanity/lib/queries";
import { getSanityAttribute } from "@/sanity/lib/dataAttribute";
import { urlFor } from "@/sanity/lib/image";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.yourhealthfirst.uk";
  const t = await getTranslations({ locale, namespace: "ContactPage" });
  const title = `${t("heading")} | YourHealthFirst Clinic — 2 Wimpole Street, London`;
  const description = t("subtitle");
  const canonicalUrl = `${baseUrl}/${locale}/contact-us`;
  const imageUrl = `${baseUrl}/images/hero-desk.jpg`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: "YourHealthFirst Clinic — Harley Street London",
      locale: locale === "en" ? "en_GB" : locale,
      type: "website",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: "Contact YourHealthFirst Clinic at 2 Wimpole Street, London",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function ContactUsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ContactPage" });

  const [sanityContact, sanitySettings] = await Promise.all([
    sanityFetch<any>({
      query: CONTACT_PAGE_QUERY,
      tags: ["contactPage"],
    }),
    sanityFetch<any>({
      query: SITE_SETTINGS_QUERY,
      tags: ["siteSettings"],
    }),
  ]);
  const docId = "contactPage";

  const heroTitle = sanityContact?.heroTitle || t("heading");
  const heroSubtitle = sanityContact?.heroSubtitle || t("subtitle");
  const badgeText = sanityContact?.badgeText || t("badge");
  const contactInfoHeading = sanityContact?.contactInfoHeading || t("contactInfoHeading");
  const clinicAddress = sanityContact?.clinicAddress || t("addressValue");
  const clinicTelephone = sanityContact?.telephone || "0207 225 3582";
  const mobilePhone = sanityContact?.mobilePhone || "078 1847 4041";
  const clinicEmail = sanityContact?.email || "info@yourhealthfirst.uk";

  const hoursTitle = sanityContact?.hoursTitle || t("hoursTitle");
  const monFri = sanityContact?.monFri || t("monFri");
  const saturday = sanityContact?.saturday || t("saturday");
  const sunday = sanityContact?.sunday || t("sunday");

  const transportTitle = sanityContact?.transportTitle || t("transportTitle");
  const mapImageSrc = sanityContact?.mapImage ? urlFor(sanityContact.mapImage).url() : "/images/map-yourhealthfirst.jpeg";
  const directionsTitle = sanityContact?.directionsTitle || "YourHealthFirst Clinic";
  const directionsAddress = sanityContact?.directionsAddress || "2nd Floor, 2 Wimpole Street, London W1G 0EB";
  const directionsButtonText = sanityContact?.directionsButtonText || "Get Directions";

  const transport = [
    {
      mode: t("tubeTitle"),
      detail: t("tubeDesc"),
    },
    {
      mode: t("carTitle"),
      detail: t("carDesc"),
    },
    {
      mode: t("locationTitle"),
      detail: t("locationDesc"),
    },
  ];

  return (
    <div className="flex flex-col">
      <Header sanitySettings={sanitySettings} />

      {/* Page hero */}
      <section className="relative w-full bg-[linear-gradient(90deg,#7a6248_0%,#b49b7d_50%,#7a6248_100%)] pt-[111px]">
        <div className="mx-auto max-w-[1400px] px-5 py-[80px] lg:py-[100px]">
          <div className="w-fit rounded-full border-[0.8px] border-white/20 px-3 py-2">
            <p
              data-sanity={getSanityAttribute(docId, "contactPage", "badgeText")}
              className="text-[13px] font-semibold leading-[20.8px] tracking-[3px] text-tan uppercase"
            >
              {badgeText}
            </p>
          </div>
          <h1
            className="mt-4 font-display text-[42px] leading-[46px] font-bold tracking-[-1px] text-cream uppercase lg:text-[64px] lg:leading-[70px]"
            data-sanity={getSanityAttribute(docId, "contactPage", "heroTitle")}
          >
            {heroTitle}
          </h1>
          <p
            className="mt-3 max-w-[500px] font-nav text-[16px] leading-[26px] text-white/60"
            data-sanity={getSanityAttribute(docId, "contactPage", "heroSubtitle")}
          >
            {heroSubtitle}
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-tan/40 to-transparent" />
      </section>

      {/* Contact info + form */}
      <section className="w-full px-5">
        <div className="mx-auto max-w-[1100px] py-[80px] lg:py-[100px]">
          <div className="flex flex-col gap-12 lg:flex-row lg:gap-16">
            {/* Left — details */}
            <div className="flex flex-col gap-10 lg:w-[380px] lg:shrink-0">
              {/* Contact details */}
              <div className="flex flex-col gap-5">
                <h2
                  data-sanity={getSanityAttribute(docId, "contactPage", "contactInfoHeading")}
                  className="font-subheading text-[22px] font-semibold leading-[28px] tracking-[-0.8px] text-forest uppercase"
                >
                  {contactInfoHeading}
                </h2>
                <ul className="flex flex-col gap-4">
                  <li className="flex items-start gap-3">
                    <PhoneIcon className="mt-1 h-4 w-4 shrink-0 text-tan" />
                    <div>
                      <p className="text-[13px] tracking-[1px] text-body-text/60 uppercase">
                        {t("phoneLabel")}
                      </p>
                      <a
                        href={`tel:${clinicTelephone.replace(/\s+/g, '')}`}
                        className="text-[16px] font-medium text-forest hover:text-tan transition-colors"
                        data-sanity={getSanityAttribute(docId, "contactPage", "telephone")}
                      >
                        {clinicTelephone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MobileIcon className="mt-1 h-4 w-4 shrink-0 text-tan" />
                    <div>
                      <p className="text-[13px] tracking-[1px] text-body-text/60 uppercase">
                        {t("mobileLabel")}
                      </p>
                      <a
                        href={`tel:${mobilePhone.replace(/\s+/g, '')}`}
                        className="text-[16px] font-medium text-forest hover:text-tan transition-colors"
                        data-sanity={getSanityAttribute(docId, "contactPage", "mobilePhone")}
                      >
                        {mobilePhone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <EnvelopeIcon className="mt-1 h-4 w-4 shrink-0 text-tan" />
                    <div>
                      <p className="text-[13px] tracking-[1px] text-body-text/60 uppercase">
                        {t("emailLabel")}
                      </p>
                      <a
                        href={`mailto:${clinicEmail}`}
                        className="text-[16px] font-medium text-forest hover:text-tan transition-colors"
                        data-sanity={getSanityAttribute(docId, "contactPage", "email")}
                      >
                        {clinicEmail}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPinIcon className="mt-1 h-4 w-4 shrink-0 text-tan" />
                    <div>
                      <p className="text-[13px] tracking-[1px] text-body-text/60 uppercase">
                        {t("addressLabel")}
                      </p>
                      <p
                        className="text-[16px] font-medium leading-[24px] text-forest"
                        data-sanity={getSanityAttribute(docId, "contactPage", "clinicAddress")}
                      >
                        {clinicAddress}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Opening hours */}
              <div className="flex flex-col gap-4">
                <h2
                  data-sanity={getSanityAttribute(docId, "contactPage", "hoursTitle")}
                  className="font-subheading text-[22px] font-semibold leading-[28px] tracking-[-0.8px] text-forest uppercase"
                >
                  {hoursTitle}
                </h2>
                <ul className="flex flex-col gap-3">
                  <li className="flex flex-col gap-[2px] border-b border-black/8 pb-3">
                    <span
                      data-sanity={getSanityAttribute(docId, "contactPage", "monFri")}
                      className="text-[15px] leading-[22px] text-body-text"
                    >
                      {monFri}
                    </span>
                  </li>
                  <li className="flex flex-col gap-[2px] border-b border-black/8 pb-3">
                    <span
                      data-sanity={getSanityAttribute(docId, "contactPage", "saturday")}
                      className="text-[15px] leading-[22px] text-body-text"
                    >
                      {saturday}
                    </span>
                  </li>
                  <li className="flex flex-col gap-[2px] border-b border-black/8 pb-3">
                    <span
                      data-sanity={getSanityAttribute(docId, "contactPage", "sunday")}
                      className="text-[15px] leading-[22px] text-body-text"
                    >
                      {sunday}
                    </span>
                  </li>
                </ul>
              </div>

              {/* Transport */}
              <div className="flex flex-col gap-4">
                <h2
                  data-sanity={getSanityAttribute(docId, "contactPage", "transportTitle")}
                  className="font-subheading text-[22px] font-semibold leading-[28px] tracking-[-0.8px] text-forest uppercase"
                >
                  {transportTitle}
                </h2>
                <ul className="flex flex-col gap-4">
                  {transport.map(({ mode, detail }) => (
                    <li key={mode}>
                      <p className="text-[13px] font-semibold tracking-[0.5px] text-tan uppercase">
                        {mode}
                      </p>
                      <p className="mt-1 text-[15px] leading-[24px] text-body-text">
                        {detail}
                      </p>
                    </li>
                  ))}
                </ul>

                {/* 100% Fully Visible Clinic Location Map */}
                <div className="flex flex-col gap-3 mt-1">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=YourHealthFirst+Clinic,+2+Wimpole+Street,+London+W1G+0EB"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block w-full overflow-hidden rounded-[12px] border border-tan/40 bg-black shadow-lg transition-all hover:border-tan cursor-pointer"
                    title="Click to open YourHealthFirst Clinic in Google Maps"
                    data-sanity={getSanityAttribute(docId, "contactPage", "mapImage")}
                  >
                    <div className="relative w-full aspect-[3/2]">
                      <Image
                        src={mapImageSrc}
                        alt="YourHealthFirst Clinic Location Map — 2 Wimpole Street, London W1G 0EB"
                        fill
                        sizes="(max-width: 1024px) 100vw, 650px"
                        className="object-contain object-center transition-transform duration-300 group-hover:scale-[1.01]"
                        priority
                      />
                    </div>
                  </a>

                  {/* Clean Address & Directions Bar — Placed underneath so image is never covered */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 rounded-[8px] bg-[#FAF7F2] border border-tan/30 shadow-sm">
                    <div className="flex items-start gap-2.5">
                      <MapPinIcon className="mt-0.5 h-4 w-4 text-tan shrink-0" />
                      <div>
                        <p
                          data-sanity={getSanityAttribute(docId, "contactPage", "directionsTitle")}
                          className="text-[13px] font-semibold text-forest leading-snug"
                        >
                          {directionsTitle}
                        </p>
                        <p
                          data-sanity={getSanityAttribute(docId, "contactPage", "directionsAddress")}
                          className="text-[12px] text-body-text/85 leading-snug mt-0.5"
                        >
                          {directionsAddress}
                        </p>
                      </div>
                    </div>

                    <a
                      href="https://www.google.com/maps/search/?api=1&query=YourHealthFirst+Clinic,+2+Wimpole+Street,+London+W1G+0EB"
                      target="_blank"
                      rel="noopener noreferrer"
                      data-sanity={getSanityAttribute(docId, "contactPage", "directionsButtonText")}
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-[6px] bg-tan text-forest font-nav text-[12px] font-bold uppercase tracking-wider transition-all hover:bg-forest hover:text-white shrink-0 shadow-sm whitespace-nowrap"
                    >
                      <span>{directionsButtonText}</span>
                      <span>↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — contact form */}
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer sanitySettings={sanitySettings} />
    </div>
  );
}
