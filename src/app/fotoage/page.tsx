import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "1st Customizable Biophotonic Mask (Fotoage) | YourHealthFirst Clinic",
  description:
    "Fotoage is the first customizable laser HDD mask (High Density Diodes) in aesthetic medicine — used with the Skinox range at YourHealthFirst Clinic, Harley Street.",
};

const lights = [
  {
    image: "/images/treatments/photo-aging/fotoage/red_light.jpg",
    wavelength: "Red: l.o. 630 ±10nm",
    points: ["Cell regeneration", "Anti-inflammatory", "Elastin stimulation", "Collagen stimulation"],
  },
  {
    image: "/images/treatments/photo-aging/fotoage/blue_light.png",
    wavelength: "Blue: l.o. 410 ±10nm",
    points: ["Bacteriological", "Acts at the epidermal level", "Inhibits the growth of the horny layer"],
  },
  {
    image: "/images/treatments/photo-aging/fotoage/yellow_light.png",
    wavelength: "Yellow: l.o. 590 ±10nm",
    points: ["Redness", "Dermatitis", "Anti-inflammatory", "Lymphotropic"],
  },
  {
    image: "/images/treatments/photo-aging/fotoage/green_light.png",
    wavelength: "Green: l.o. 530 ±10nm",
    points: ["Inhibits excess melanin", "Anti-inflammatory", "Elastin stimulation", "Collagen stimulation"],
  },
];

export default function FotoagePage() {
  return (
    <div className="flex flex-col">
      <Header />

      {/* Hero */}
      <section className="relative w-full bg-[linear-gradient(90deg,#7a6248_0%,#b49b7d_50%,#7a6248_100%)] pt-[111px]">
        <div className="mx-auto max-w-[1400px] px-5 py-[80px] lg:py-[100px]">
          <div className="flex flex-wrap items-center gap-2">
            <Link href="/treatments/photo-aging" className="font-nav text-[13px] tracking-[1px] text-white/40 uppercase transition-colors hover:text-tan">
              Photodynamic Therapy
            </Link>
            <span className="text-white/30">/</span>
            <span className="font-nav text-[13px] tracking-[1px] text-tan/70 uppercase">Fotoage Mask</span>
          </div>
          <div className="mt-4 w-fit rounded-full border-[0.8px] border-white/20 px-3 py-2">
            <p className="text-[13px] font-semibold leading-[20.8px] tracking-[3px] text-tan uppercase">
              our technology
            </p>
          </div>
          <h1 className="mt-4 font-display text-[38px] leading-[42px] font-bold tracking-[-1px] text-cream uppercase lg:text-[58px] lg:leading-[64px]">
            1st Customizable Biophotonic Mask
          </h1>
          <p className="mt-3 max-w-[600px] font-nav text-[16px] leading-[26px] text-white/60">
            Fotoage is the first customizable laser HDD mask (High Density Diodes) in aesthetic medicine.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-tan/40 to-transparent" />
      </section>

      {/* Intro */}
      <section className="w-full px-5">
        <div className="mx-auto max-w-[1400px] py-[70px] lg:py-[90px]">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div className="relative mx-auto w-full max-w-[360px] overflow-hidden rounded-full border border-tan/25 shadow-lg" style={{ aspectRatio: "1/1" }}>
              <Image
                src="/images/treatments/photo-aging/fotoage/mask.jpg"
                alt="Fotoage customizable laser HDD mask"
                fill
                className="object-contain p-8"
              />
            </div>
            <div className="flex flex-col gap-5">
              <p className="text-[16px] leading-[27px] text-body-text">
                <strong className="text-forest">Fotoage is the first customizable laser HDD mask (High Density Diodes) in aesthetic medicine.</strong>{" "}
                It activates the stem cells, allowing an increase in the repair and healing of tissues.
              </p>
              <p className="text-[16px] leading-[27px] text-body-text">
                HDD or High Density Diode is a much more powerful light compared to LED, which can concentrate a higher amount of energy in a larger area. It is also capable of emitting pure monochromatic light. For these reasons, it is more effective than other types of chromotherapy treatments.
              </p>
              <Link
                href="/treatments/photo-aging"
                className="mt-1 inline-flex h-12 w-fit items-center gap-2 rounded-[8px] bg-tan px-6 font-nav text-[14px] font-semibold tracking-[-0.3px] text-forest transition-opacity hover:opacity-90"
              >
                View Photodynamic Therapy →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How does HDD help */}
      <section className="w-full bg-cream px-5">
        <div className="mx-auto max-w-[1400px] py-[70px] lg:py-[90px]">
          <h2 className="text-center font-subheading text-[26px] font-medium leading-[32px] tracking-[-1px] text-forest uppercase lg:text-[32px] lg:leading-[38px]">
            How Does HDD (High Density Diodes) Laser Light From Fotoage Help in Medical Treatments?
          </h2>
          <div className="mx-auto mt-4 flex max-w-[820px] flex-col gap-4 text-center">
            <p className="text-[15px] leading-[24px] text-body-text">
              HDD or High Density Diodes therapy is an innovative technology, and Fotoage is suitable to treat multiple conditions in aesthetic medicine.
            </p>
            <p className="text-[15px] leading-[24px] text-body-text">
              In combination with the Skinox range of photosensitive products, it allows four different skin treatments, depending on the colour of the laser light (red, blue, yellow or green) applied to the skin.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {lights.map((light) => (
              <div key={light.wavelength} className="flex flex-col items-center gap-4 text-center">
                <div className="relative h-[130px] w-[130px] shrink-0">
                  <Image src={light.image} alt={light.wavelength} fill className="object-contain" />
                </div>
                <p className="font-subheading text-[14px] font-semibold text-forest">{light.wavelength}</p>
                <ul className="flex flex-col gap-1.5">
                  {light.points.map((point) => (
                    <li key={point} className="text-[13px] leading-[19px] text-body-text">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customizable for each patient */}
      <section className="w-full px-5">
        <div className="mx-auto max-w-[1400px] py-[70px] lg:py-[90px]">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col gap-5">
              <h2 className="font-display text-[28px] font-bold leading-[34px] tracking-[-1px] text-forest lg:text-[32px] lg:leading-[38px]">
                Customizable for Each Patient
              </h2>
              <p className="text-[16px] leading-[27px] text-body-text">
                Fotoage offers the specialist the possibility of treating several cutaneous affections at the same time, since it has 4 independent treatment areas that, in addition, adapt ergonomically to the curves of the patient&apos;s face and neck.
              </p>
              <Link
                href="/contact-us"
                className="mt-1 inline-flex h-12 w-fit items-center gap-2 rounded-[8px] bg-tan px-6 font-nav text-[14px] font-semibold tracking-[-0.3px] text-forest transition-opacity hover:opacity-90"
              >
                Book a Consultation
              </Link>
            </div>
            <div className="relative mx-auto w-full max-w-[520px] overflow-hidden rounded-[12px] bg-cream p-6" style={{ aspectRatio: "570/335" }}>
              <Image
                src="/images/treatments/photo-aging/fotoage/carac_espectro.jpg"
                alt="Fotoage 4 independent treatment areas — forehead, full face, lower face and neck"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
