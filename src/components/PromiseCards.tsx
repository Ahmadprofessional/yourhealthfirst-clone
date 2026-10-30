"use client";

import { useTranslations, useLocale } from "next-intl";
import { getSanityAttribute } from "@/sanity/lib/dataAttribute";
import { urlFor } from "@/sanity/lib/image";

export default function PromiseCards({ sanityData }: { sanityData?: any }) {
  const t = useTranslations("PromiseCards");
  const locale = useLocale();
  const isEn = locale === "en";
  const cards = isEn ? sanityData?.promiseCards : null;

  const bespokeTitle = cards?.[0]?.title || t("bespokeTitle");
  const bespokeDesc = cards?.[0]?.description || t("bespokeP1");
  const centerTitle = cards?.[1]?.title || t("centerTitle");
  const aftercareTitle = cards?.[2]?.title || t("aftercareTitle");
  const aftercareDesc = cards?.[2]?.description || t("aftercareP1");

  const promiseBg = sanityData?.promiseBgImage ? urlFor(sanityData.promiseBgImage).url() : "/images/promise-bg.jpg";

  return (
    <section className="w-full px-5 pb-[20px]">
      <div className="mx-auto max-w-[1400px]">
        <div
          data-sanity={getSanityAttribute("homePage", "homePage", "promiseBgImage")}
          style={{ backgroundImage: `url('${promiseBg}')` }}
          className="relative overflow-hidden rounded-[8px] bg-[#a8896a] bg-cover bg-center p-6 lg:min-h-[450px] lg:p-8 cursor-pointer"
        >
          {/* Dark overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-black/80 z-0"
          />

          {/* Content container — explicitly z-10 so all text is crystal clear above overlay */}
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-start justify-between gap-6">
            {/* Left — Bespoke Treatments */}
            <div className="flex flex-col gap-6 lg:flex-1 lg:min-w-0 xl:w-[261px] xl:flex-none lg:pt-[80px] xl:pt-[108px] order-2 lg:order-1">
              <h2
                data-sanity={getSanityAttribute("homePage", "homePage", "promiseCards[0].title")}
                className="font-subheading text-[26px] leading-[30px] lg:text-[30px] lg:leading-[33px] font-medium tracking-[-1.8px] text-cream uppercase"
              >
                {bespokeTitle}
              </h2>
              <div className="text-[15px] xl:text-[16px] leading-[25.6px] font-medium tracking-[-0.2px] text-white">
                <p
                  data-sanity={getSanityAttribute("homePage", "homePage", "promiseCards[0].description")}
                >
                  {bespokeDesc}
                </p>
                <p
                  data-sanity={getSanityAttribute("homePage", "homePage", "promiseCardsBespokeP2")}
                  className="mt-[14.4px]"
                >
                  {(isEn && sanityData?.promiseCardsBespokeP2) || t("bespokeP2")}
                </p>
              </div>
            </div>

            {/* Center — section title (Top on mobile, center on desktop) */}
            <div className="flex flex-col gap-6 lg:flex-1 lg:min-w-0 xl:w-[500px] 2xl:w-[783px] xl:flex-none lg:pt-[80px] xl:pt-[108px] order-1 lg:order-2">
              <h2
                data-sanity={getSanityAttribute("homePage", "homePage", "promiseCards[1].title")}
                className="text-center font-subheading text-[34px] leading-[38px] font-medium tracking-[-1.8px] text-cream uppercase lg:text-[42px] lg:leading-[46px] xl:text-[50px] xl:leading-[55px]"
              >
                {centerTitle}
              </h2>
            </div>

            {/* Right — After care */}
            <div className="flex flex-col gap-6 lg:flex-1 lg:min-w-0 xl:w-[261px] xl:flex-none lg:pt-[80px] xl:pt-[108px] order-3 lg:order-3">
              <h2
                data-sanity={getSanityAttribute("homePage", "homePage", "promiseCards[2].title")}
                className="font-subheading text-[26px] leading-[30px] lg:text-[30px] lg:leading-[33px] font-medium tracking-[-1.8px] text-cream uppercase"
              >
                {aftercareTitle}
              </h2>
              <div className="text-[15px] xl:text-[16px] leading-[25.6px] font-medium tracking-[-0.2px] text-white">
                <p
                  data-sanity={getSanityAttribute("homePage", "homePage", "promiseCards[2].description")}
                >
                  {aftercareDesc}
                </p>
                <p
                  data-sanity={getSanityAttribute("homePage", "homePage", "promiseCardsAftercareP2")}
                  className="mt-[14.4px]"
                >
                  {(isEn && sanityData?.promiseCardsAftercareP2) || (
                    <>
                      <strong className="font-bold">{t("aftercareP2Safety")}</strong>,{" "}
                      <strong className="font-bold">{t("aftercareP2Aftercare")}</strong>, and{" "}
                      <strong className="font-bold">{t("aftercareP2Expertise")}</strong>{" "}
                      {t("aftercareP2Rest")}
                    </>
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
