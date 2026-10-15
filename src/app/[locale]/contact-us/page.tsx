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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ContactPage" });
  return {
    title: t("heading"),
    description: t("subtitle"),
  };
}

export default async function ContactUsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "ContactPage" });

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
      <Header />

      {/* Page hero */}
      <section className="relative w-full bg-[linear-gradient(90deg,#7a6248_0%,#b49b7d_50%,#7a6248_100%)] pt-[111px]">
        <div className="mx-auto max-w-[1400px] px-5 py-[80px] lg:py-[100px]">
          <div className="w-fit rounded-full border-[0.8px] border-white/20 px-3 py-2">
            <p className="text-[13px] font-semibold leading-[20.8px] tracking-[3px] text-tan uppercase">
              {t("badge")}
            </p>
          </div>
          <h1 className="mt-4 font-display text-[42px] leading-[46px] font-bold tracking-[-1px] text-cream uppercase lg:text-[64px] lg:leading-[70px]">
            {t("heading")}
          </h1>
          <p className="mt-3 max-w-[500px] font-nav text-[16px] leading-[26px] text-white/60">
            {t("subtitle")}
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
                <h2 className="font-subheading text-[22px] font-semibold leading-[28px] tracking-[-0.8px] text-forest uppercase">
                  {t("contactInfoHeading")}
                </h2>
                <ul className="flex flex-col gap-4">
                  <li className="flex items-start gap-3">
                    <PhoneIcon className="mt-1 h-4 w-4 shrink-0 text-tan" />
                    <div>
                      <p className="text-[13px] tracking-[1px] text-body-text/60 uppercase">
                        {t("phoneLabel")}
                      </p>
                      <a
                        href="tel:02072253582"
                        className="text-[16px] font-medium text-forest hover:text-tan transition-colors"
                      >
                        0207 225 3582
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
                        href="tel:07818474041"
                        className="text-[16px] font-medium text-forest hover:text-tan transition-colors"
                      >
                        078 1847 4041
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
                        href="mailto:info@yourhealthfirst.uk"
                        className="text-[16px] font-medium text-forest hover:text-tan transition-colors"
                      >
                        info@yourhealthfirst.uk
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPinIcon className="mt-1 h-4 w-4 shrink-0 text-tan" />
                    <div>
                      <p className="text-[13px] tracking-[1px] text-body-text/60 uppercase">
                        {t("addressLabel")}
                      </p>
                      <p className="text-[16px] font-medium leading-[24px] text-forest">
                        {t("addressValue")}
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Opening hours */}
              <div className="flex flex-col gap-4">
                <h2 className="font-subheading text-[22px] font-semibold leading-[28px] tracking-[-0.8px] text-forest uppercase">
                  {t("hoursTitle")}
                </h2>
                <ul className="flex flex-col gap-3">
                  <li className="flex flex-col gap-[2px] border-b border-black/8 pb-3">
                    <span className="text-[15px] leading-[22px] text-body-text">
                      {t("monFri")}
                    </span>
                  </li>
                  <li className="flex flex-col gap-[2px] border-b border-black/8 pb-3">
                    <span className="text-[15px] leading-[22px] text-body-text">
                      {t("saturday")}
                    </span>
                  </li>
                  <li className="flex flex-col gap-[2px] border-b border-black/8 pb-3">
                    <span className="text-[15px] leading-[22px] text-body-text">
                      {t("sunday")}
                    </span>
                  </li>
                </ul>
              </div>

              {/* Transport */}
              <div className="flex flex-col gap-4">
                <h2 className="font-subheading text-[22px] font-semibold leading-[28px] tracking-[-0.8px] text-forest uppercase">
                  {t("transportTitle")}
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
                  >
                    <div className="relative w-full aspect-[3/2]">
                      <Image
                        src="/images/map-yourhealthfirst.jpeg"
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
                        <p className="text-[13px] font-semibold text-forest leading-snug">
                          YourHealthFirst Clinic
                        </p>
                        <p className="text-[12px] text-body-text/85 leading-snug mt-0.5">
                          1st Floor, 2 Wimpole Street, London W1G 0EB
                        </p>
                      </div>
                    </div>

                    <a
                      href="https://www.google.com/maps/search/?api=1&query=YourHealthFirst+Clinic,+2+Wimpole+Street,+London+W1G+0EB"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-[6px] bg-tan text-forest font-nav text-[12px] font-bold uppercase tracking-wider transition-all hover:bg-forest hover:text-white shrink-0 shadow-sm whitespace-nowrap"
                    >
                      <span>Get Directions</span>
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

      <Footer />
    </div>
  );
}
