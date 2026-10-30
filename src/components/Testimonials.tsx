"use client";

import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { testimonials } from "@/data/site";
import { StarIcon, QuoteIcon } from "@/components/icons";
import { getSanityAttribute } from "@/sanity/lib/dataAttribute";
import { urlFor } from "@/sanity/lib/image";

const testimonialKeys: Record<string, string> = {
  "Fariah Khan": "fariah",
  "Maria Carla": "maria",
  "Robin Pearce": "robin",
  "David V": "david",
};

export default function Testimonials({ sanityData }: { sanityData?: any }) {
  const t = useTranslations("Testimonials");
  const tList = useTranslations("TestimonialsList");
  const locale = useLocale();
  const isEn = locale === "en";

  const badge = (isEn && sanityData?.testimonialsBadge) || t("badge");
  const title = isEn ? sanityData?.testimonialsTitle : null;
  const list = isEn ? sanityData?.testimonialsList : null;
  const bgImage = sanityData?.testimonialsBgImage ? urlFor(sanityData.testimonialsBgImage).url() : "/images/testimonials-bg.jpg";

  return (
    <section
      data-sanity={getSanityAttribute("homePage", "homePage", "testimonialsBgImage")}
      style={{ backgroundImage: `url('${bgImage}')` }}
      className="relative w-full bg-brown-gold bg-cover bg-left-top px-5 cursor-pointer"
    >
      {/* Gold → black overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[linear-gradient(#997331_0%,#000_100%)] opacity-90"
      />

      <div className="relative mx-auto flex max-w-[1400px] flex-col gap-10 py-[100px]">
        {/* Heading */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-6">
            <div
              data-sanity={getSanityAttribute("homePage", "homePage", "testimonialsBadge")}
              className="w-fit rounded-[25px] border-[0.8px] border-white px-3 py-2"
            >
              <h2 className="text-[13px] leading-[20.8px] font-semibold tracking-[3px] text-white uppercase">
                {badge}
              </h2>
            </div>

            {title ? (
              <h2
                data-sanity={getSanityAttribute("homePage", "homePage", "testimonialsTitle")}
                className="font-subheading text-[36px] leading-[40px] font-medium tracking-[-1.8px] text-tan uppercase lg:text-[50px] lg:leading-[55px]"
              >
                {title}
              </h2>
            ) : (
              <h2
                data-sanity={getSanityAttribute("homePage", "homePage", "testimonialsTitle")}
                className="font-subheading text-[36px] leading-[40px] font-medium tracking-[-1.8px] text-black uppercase lg:text-[50px] lg:leading-[55px]"
              >
                <span className="block text-tan">{t("heading1")}</span>
                {t("heading2")}
              </h2>
            )}
          </div>

          <a
            href="https://www.google.com/search?q=YourHealthFirst+Clinic&oq=&gs_lcrp=EgZjaHJvbWUqCQgBEEUYOxjCAzIJCAAQRRg7GMIDMgkIARBFGDsYwgMyCQgCEEUYOxjCAzIJCAMQRRg7GMIDMgkIBBBFGDsYwgMyCQgFEEUYOxjCAzIJCAYQRRg7GMIDMgkIBxBFGDsYwgPSAQkyNzAwajBqMTWoAgiwAgHxBds1lDsBAJhh&sourceid=chrome&source=chrome.rb&ie=UTF-8#mpd=~15060418522766184397/customers/reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-fit rounded-[8px] border-[2.4px] border-tan px-[26px] py-4 text-center font-display text-[18px] leading-[18px] font-semibold tracking-[0.6px] text-tan uppercase transition-colors duration-200 hover:bg-tan hover:text-black"
          >
            {t("moreTestimonials")}
          </a>
        </div>

        {/* Cards */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((item, index) => {
            const key = testimonialKeys[item.name];
            const sanItem = list?.[index];
            const quote = sanItem?.quote || (key && tList.has(`${key}.quote`) ? tList(`${key}.quote`) : item.quote);
            const role = sanItem?.treatment || (key && tList.has(`${key}.role`) ? tList(`${key}.role`) : item.role);
            const patientName = sanItem?.patientName || item.name;

            return (
              <article
                key={item.name}
                className="relative flex flex-col rounded-[8px] border-[1.6px] border-tan p-4 shadow-[9px_11px_14px_0_rgba(0,0,0,0.1)] lg:min-h-[260px]"
              >
                <ul className="flex h-[18px] items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <li key={i} className="mr-[3px] last:mr-0">
                      <StarIcon className="h-3 w-3 text-[#fec42d]" />
                    </li>
                  ))}
                </ul>

                <p
                  data-sanity={getSanityAttribute("homePage", "homePage", `testimonialsList[${index}].quote`)}
                  className="my-4 line-clamp-5 text-[13px] leading-[20px] font-medium tracking-[-0.2px] text-white"
                >
                  {quote}
                </p>

                <div className="mt-auto flex items-center">
                  <Image
                    src={sanItem?.avatar ? urlFor(sanItem.avatar).url() : item.avatar}
                    alt={patientName}
                    width={44}
                    height={44}
                    data-sanity={getSanityAttribute("homePage", "homePage", `testimonialsList[${index}].avatar`)}
                    className="mr-3 rtl:mr-0 rtl:ml-3 h-[44px] w-[44px] shrink-0 rounded-full border border-tan/60 object-cover"
                    unoptimized={Boolean(sanItem?.avatar)}
                  />
                  <div>
                    <strong
                      data-sanity={getSanityAttribute("homePage", "homePage", `testimonialsList[${index}].patientName`)}
                      className="block font-display text-[15px] leading-[18px] font-medium tracking-[-0.5px] text-tan uppercase"
                    >
                      {patientName}
                    </strong>
                    <span
                      data-sanity={getSanityAttribute("homePage", "homePage", `testimonialsList[${index}].treatment`)}
                      className="text-[11px] leading-[18px] font-normal tracking-[-0.2px] text-white"
                    >
                      {role}
                    </span>
                  </div>
                </div>

                <QuoteIcon
                  aria-hidden="true"
                  className="absolute right-4 bottom-4 rtl:right-auto rtl:left-4 h-5 w-5 text-tan"
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
