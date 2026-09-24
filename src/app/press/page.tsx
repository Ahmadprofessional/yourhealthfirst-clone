import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Press | YourHealthFirst Clinic — Harley Street",
  description:
    "Press coverage, features and event highlights for YourHealthFirst Clinic and Sofia Bouzian — Harley Street, London.",
};

const pressImages = [
  { src: "/images/press/press-01.jpg", alt: "Press coverage 1" },
  { src: "/images/press/press-02.jpg", alt: "Press coverage 2" },
  { src: "/images/press/press-03.jpg", alt: "Press coverage 3" },
  { src: "/images/press/press-04.jpg", alt: "Press coverage 4" },
  { src: "/images/press/press-05.jpg", alt: "Press coverage 5" },
  { src: "/images/press/press-06.jpg", alt: "Press coverage 6" },
  { src: "/images/press/press-07.jpg", alt: "Press coverage 7" },
  { src: "/images/press/press-08.jpg", alt: "Press coverage 8" },
  { src: "/images/press/press-09.jpg", alt: "Press coverage 9" },
  { src: "/images/press/press-10.jpg", alt: "Press coverage 10" },
  { src: "/images/press/press-11.jpg", alt: "Press coverage 11" },
  { src: "/images/press/press-12.jpg", alt: "Cannes Film Festival feature" },
  { src: "/images/press/press-13.jpg", alt: "Cannes Film Festival feature" },
  { src: "/images/press/press-14.png", alt: "Press coverage 14" },
  { src: "/images/press/press-15.jpg", alt: "Press coverage 15" },
  { src: "/images/press/press-16.jpg", alt: "Press coverage 16" },
  { src: "/images/press/press-17.jpg", alt: "Press coverage 17" },
  { src: "/images/press/press-18.jpg", alt: "Press coverage 18" },
  { src: "/images/press/press-19.jpg", alt: "Press coverage 19" },
  { src: "/images/press/press-20.jpg", alt: "Press coverage 20" },
  { src: "/images/press/press-21.jpg", alt: "Press coverage 21" },
  { src: "/images/press/press-22.jpg", alt: "Press coverage 22" },
  { src: "/images/press/press-23.jpg", alt: "Press coverage 23" },
  { src: "/images/press/press-24.jpg", alt: "Press coverage 24" },
  { src: "/images/press/press-25.jpg", alt: "Press coverage 25" },
  { src: "/images/press/press-26.jpg", alt: "Press coverage 26" },
  { src: "/images/press/press-27.jpg", alt: "Press coverage 27" },
  { src: "/images/press/press-28.jpg", alt: "Press coverage 28" },
  { src: "/images/press/press-29.jpg", alt: "Press coverage 29" },
  { src: "/images/press/press-30.jpg", alt: "Press coverage 30" },
  { src: "/images/press/press-31.jpg", alt: "Press coverage 31" },
  { src: "/images/press/press-32.jpg", alt: "Press coverage 32" },
  { src: "/images/press/press-33.jpg", alt: "Press coverage 33" },
  { src: "/images/press/press-34.jpg", alt: "Press coverage 34" },
  { src: "/images/press/press-35.jpeg", alt: "Press feature" },
  { src: "/images/press/press-36.jpeg", alt: "Press feature" },
  { src: "/images/press/press-37.jpeg", alt: "Press feature" },
  { src: "/images/press/press-38.jpeg", alt: "Press feature" },
  { src: "/images/press/press-39.jpeg", alt: "Press feature" },
  { src: "/images/press/press-40.jpeg", alt: "Press feature" },
  { src: "/images/press/press-41.jpeg", alt: "Press feature" },
  { src: "/images/press/press-42.jpeg", alt: "Press feature" },
  { src: "/images/press/press-43.jpeg", alt: "Press feature" },
  { src: "/images/press/press-44.jpeg", alt: "Press feature" },
  { src: "/images/press/press-45.jpeg", alt: "Press feature" },
  { src: "/images/press/press-46.jpg", alt: "Press feature" },
  { src: "/images/press/press-47.jpg", alt: "Press feature" },
  { src: "/images/press/press-48.jpg", alt: "Press feature" },
  { src: "/images/press/press-49.jpg", alt: "Press feature" },
];

export default function PressPage() {
  return (
    <div className="flex flex-col">
      <Header />

      {/* Page hero */}
      <section className="relative w-full bg-[linear-gradient(90deg,#7a6248_0%,#b49b7d_50%,#7a6248_100%)] pt-[111px]">
        <div className="mx-auto max-w-[1400px] px-5 py-[80px] lg:py-[100px]">
          <div className="w-fit rounded-full border-[0.8px] border-white/20 px-3 py-2">
            <p className="text-[13px] font-semibold leading-[20.8px] tracking-[3px] text-tan uppercase">
              in the spotlight
            </p>
          </div>
          <h1 className="mt-4 font-display text-[42px] leading-[46px] font-bold tracking-[-1px] text-cream uppercase lg:text-[64px] lg:leading-[70px]">
            Press
          </h1>
          <p className="mt-3 max-w-[560px] font-nav text-[16px] leading-[26px] text-white/60">
            Press coverage, media features and event highlights for YourHealthFirst Clinic and Sofia Bouzian.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-tan/40 to-transparent" />
      </section>

      {/* Video coverage */}
      <section className="w-full bg-cream px-5">
        <div className="mx-auto max-w-[1400px] py-[70px] lg:py-[90px]">
          <div className="mb-10 flex items-center gap-4">
            <h2 className="font-subheading text-[24px] font-medium leading-[30px] tracking-[-1px] text-forest uppercase lg:text-[30px] lg:leading-[36px]">
              Video Coverage
            </h2>
            <div className="flex-1 border-t border-black/8" />
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="relative w-full overflow-hidden rounded-[12px] shadow-sm" style={{ aspectRatio: "16/9" }}>
              <iframe
                src="https://www.youtube.com/embed/lmOWFIN02Gg"
                title="YourHealthFirst Clinic — press video feature"
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="flex justify-center overflow-hidden rounded-[12px] bg-black shadow-sm">
              <video
                src="/videos/press/press-feature.mp4"
                controls
                playsInline
                className="max-h-[480px] w-auto max-w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Press masonry grid */}
      <section className="w-full px-5">
        <div className="mx-auto max-w-[1400px] py-[80px] lg:py-[100px]">
          <div className="mb-10 flex items-center gap-4">
            <h2 className="font-subheading text-[24px] font-medium leading-[30px] tracking-[-1px] text-forest uppercase lg:text-[30px] lg:leading-[36px]">
              Press Gallery
            </h2>
            <div className="flex-1 border-t border-black/8" />
          </div>
          <div className="columns-2 gap-4 sm:columns-3 lg:columns-4 [column-fill:_balance]">
            {pressImages.map((img, index) => (
              <div
                key={img.src}
                className="group relative mb-4 break-inside-avoid overflow-hidden rounded-[10px] border border-black/8 bg-cream shadow-sm transition-shadow duration-300 hover:shadow-lg"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={600}
                  height={600}
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  className="h-auto w-full object-cover"
                  loading={index < 8 ? "eager" : "lazy"}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
