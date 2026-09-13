import Image from "next/image";
import { trustBadges } from "@/data/site";
import {
  SmileIcon,
  DnaIcon,
  MapleLeafIcon,
  HandshakeIcon,
  MapPinIcon,
} from "@/components/icons";

const trustIcons = [SmileIcon, DnaIcon, MapleLeafIcon, HandshakeIcon];

const avatars = [
  "/images/about/collage-1.jpg",
  "/images/about/collage-3.jpg",
  "/images/about/collage-2.jpg",
  "/images/about/collage-4.jpg",
];

export default function Hero() {
  return (
    <section className="relative flex w-full flex-col overflow-hidden bg-[linear-gradient(90deg,#1c1813_0%,#5f5536_50%,#8c7c52_100%)] lg:h-[857px] lg:flex-row">
      {/* Left content column */}
      <div className="relative flex w-full flex-col gap-[10px] px-5 pt-[150px] pb-16 sm:pt-[160px] sm:pr-[50px] sm:pb-[150px] lg:w-[622px] lg:shrink-0">

        <div className="relative flex flex-col gap-6 pr-[30px]">
          <h2 className="font-display text-[46px] leading-[46px] font-medium text-white uppercase">
            AWARD WINNING
          </h2>
          <h2 className="-mt-5 font-display text-[54px] leading-[54px] font-medium text-tan uppercase">
            Clinic
          </h2>

          <div className="flex h-6 items-center py-[2px]">
            <span className="flex w-[70%] items-center">
              <span className="h-px flex-1 bg-tan" />
              <MapleLeafIcon className="mx-[10px] h-5 w-5 shrink-0 text-tan" />
              <span className="h-px flex-1 bg-tan" />
            </span>
          </div>

          <h2 className="font-display text-[24px] leading-[24px] font-medium text-white capitalize">
            Health, Dermatology, Hair Loss, Anti-Aging, Rejuvenation &amp; Longevity Clinic
          </h2>
        </div>

        <div className="relative flex flex-col gap-[10px]">
          <div className="flex gap-[11px]">
            <MapPinIcon className="h-[30px] w-[30px] shrink-0 text-tan" />
            <div>
              <h3 className="font-subheading text-[18px] leading-[21.6px] font-medium tracking-[-1px] text-tan uppercase">
                2 Wimpole Street W1G 0EB
              </h3>
              <p className="text-[16px] leading-[25.6px] font-medium tracking-[-0.2px] text-white">
                Since 2013 &mdash; Harley Street, London
              </p>
            </div>
          </div>

          <div>
            <a
              href="/about-us"
              className="inline-block rounded-[8px] border-[2.4px] border-tan px-[26px] py-4 text-center font-display text-[18px] leading-[18px] font-semibold tracking-[0.6px] text-tan uppercase transition-colors duration-200 hover:bg-tan hover:text-black"
            >
              discover more
            </a>
          </div>

          <div className="grid grid-cols-2 sm:flex">
            {trustBadges.map((badge, index) => {
              const Icon = trustIcons[index];
              return (
                <div
                  key={badge.title}
                  className="flex flex-col items-center border-r-[0.8px] border-tan px-[2px] text-center sm:w-[138px]"
                >
                  <div className="h-[35px]">
                    <Icon className="h-[35px] w-[35px] text-tan" />
                  </div>
                  <h3 className="font-subheading text-[16px] leading-[19.2px] font-medium tracking-[-1px] text-tan uppercase">
                    {badge.title}
                  </h3>
                </div>
              );
            })}
          </div>

          <div className="flex w-full max-w-[386px] items-center gap-6 rounded-[8px] border-[1.6px] border-tan px-[5px] py-5">
            <div className="flex shrink-0 gap-6">
              {avatars.map((src, index) => (
                <Image
                  key={src + index}
                  src={src}
                  alt=""
                  width={65}
                  height={65}
                  className={`h-[65px] w-[65px] rounded-full object-cover ${
                    index > 0 ? "-ml-[50px]" : ""
                  }`}
                />
              ))}
            </div>
            <h2 className="w-[175px] font-display text-[16px] leading-[19.2px] font-medium text-white uppercase">
              Trusted by 10K+ Happy Patients
            </h2>
          </div>
        </div>
      </div>

      {/* Right column: portrait */}
      <div className="relative h-[520px] w-full sm:h-[640px] lg:h-auto lg:flex-1">
        <Image
          src="/images/hero-portrait.jpg"
          alt="Sofia — Your Health First Clinic, Harley Street"
          fill
          priority
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover object-[center_20%]"
        />
        {/* Soft blend from the gradient into the photo */}
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 hidden w-40 bg-gradient-to-r from-[#8c7c52] to-transparent lg:block"
        />
      </div>
    </section>
  );
}
