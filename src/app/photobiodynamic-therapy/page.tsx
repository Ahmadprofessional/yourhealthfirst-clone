import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Photobiodynamic Therapy (Fotoage) | YourHealthFirst Clinic",
  description:
    "Photobiodynamic therapy combines the Fotoage HDD laser mask with Skinox photosensitive products to treat dark spots, redness, blemishes, wrinkles and photoaging.",
};

const treatments = [
  { title: "Rejuvenation", image: "/images/treatments/photo-aging/skinox-wrinkles.jpg" },
  { title: "Blemishes", image: "/images/treatments/photo-aging/skinox-blemish.jpg" },
  { title: "Redness", image: "/images/treatments/photo-aging/skinox-redness.jpg" },
  { title: "Dark Spots", image: "/images/treatments/photo-aging/skinox-dark-spots.jpg" },
];

export default function PhotobiodynamicTherapyPage() {
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
            <span className="font-nav text-[13px] tracking-[1px] text-tan/70 uppercase">Fotoage Photobiodynamic</span>
          </div>
          <div className="mt-4 w-fit rounded-full border-[0.8px] border-white/20 px-3 py-2">
            <p className="text-[13px] font-semibold leading-[20.8px] tracking-[3px] text-tan uppercase">
              the last miracle in aesthetic medicine
            </p>
          </div>
          <h1 className="mt-4 font-display text-[38px] leading-[42px] font-bold tracking-[-1px] text-cream uppercase lg:text-[58px] lg:leading-[64px]">
            Photobiodynamic Therapy
          </h1>
          <p className="mt-3 max-w-[600px] font-serif text-[19px] leading-[28px] text-white/70 italic">
            The last miracle in aesthetic medicine.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-tan/40 to-transparent" />
      </section>

      {/* What is it */}
      <section className="w-full px-5">
        <div className="mx-auto max-w-[1400px] py-[70px] lg:py-[90px]">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col gap-5">
              <h2 className="font-display text-[28px] font-bold leading-[34px] tracking-[-1px] text-forest lg:text-[32px] lg:leading-[38px]">
                What Is Photobiodynamic Therapy?
              </h2>
              <p className="text-[16px] leading-[27px] text-body-text">
                It is a non-invasive technique with excellent results in the treatment of dark spots, redness, blemishes, wrinkles and photoaging — based on stimulation, regeneration and repair of the skin, achieved with the combination of the Fotoage device and Skinox products.
              </p>
              <div className="rounded-[12px] border border-tan/25 bg-cream p-6">
                <h3 className="font-subheading text-[14px] font-semibold tracking-[1.5px] text-forest uppercase">
                  Accessible, Simple, Painless and Without Side Effects
                </h3>
                <p className="mt-2 text-[14px] leading-[22px] text-body-text">
                  Each session in the clinic consists of 4 simple phases and lasts only 45 minutes. It activates the stem cells of the tissues, being an effective therapy in the treatment of the skin — without pain and without the after-effects of bruising.
                </p>
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[440px] overflow-hidden rounded-[16px] shadow-lg" style={{ aspectRatio: "1/1" }}>
              <Image
                src="/images/treatments/photo-aging/photobiodynamic/fotoage_layer.jpg"
                alt="Photobiodynamic therapy facial mapping technology"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Treatments */}
      <section className="w-full bg-cream px-5">
        <div className="mx-auto max-w-[1400px] py-[70px] lg:py-[90px]">
          <h2 className="text-center font-subheading text-[26px] font-medium leading-[32px] tracking-[-1px] text-forest uppercase lg:text-[32px] lg:leading-[38px]">
            Treatments
          </h2>
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {treatments.map((t) => (
              <div key={t.title} className="overflow-hidden rounded-[12px] border border-black/8 bg-white shadow-sm">
                <div className="relative w-full bg-white" style={{ aspectRatio: "16/10" }}>
                  <Image src={t.image} alt={t.title} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-contain" />
                </div>
                <p className="py-4 text-center font-subheading text-[14px] font-semibold tracking-[1px] text-forest uppercase">
                  {t.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Oxygen, light and photodynamic agents */}
      <section className="w-full px-5">
        <div className="mx-auto max-w-[1400px] py-[70px] lg:py-[90px]">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative mx-auto w-full max-w-[480px] overflow-hidden rounded-[16px] border border-black/8 bg-cream p-6" style={{ aspectRatio: "576/436" }}>
              <Image
                src="/images/treatments/photo-aging/photobiodynamic/combination.jpg"
                alt="Skinox products combined with the Fotoage HDD mask"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col gap-5">
              <h2 className="font-display text-[28px] font-bold leading-[34px] tracking-[-1px] text-forest lg:text-[32px] lg:leading-[38px]">
                Oxygen, Light and Photodynamic Agents for the Skin
              </h2>
              <p className="text-[16px] leading-[27px] text-body-text">
                Photobiodynamic therapy combines, in 4 phases, the HDD (High Density Diodes) laser light of the Fotoage mask with the photosensitive and photodynamic Skinox products. The HDD laser of the mask activates the Skinox products, which act on the skin, repairing and stimulating it.
              </p>
              <ul className="flex flex-col gap-2">
                <li className="flex items-start gap-3">
                  <span className="mt-[8px] h-[5px] w-[5px] shrink-0 rounded-full bg-tan" />
                  <span className="text-[15px] leading-[24px] text-body-text">LED light is applied on the skin</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-[8px] h-[5px] w-[5px] shrink-0 rounded-full bg-tan" />
                  <span className="text-[15px] leading-[24px] text-body-text">The photosensitive topical product is activated with light</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment steps diagram */}
      <section className="w-full bg-cream px-5">
        <div className="mx-auto max-w-[1400px] py-[70px] lg:py-[90px]">
          <div className="relative mx-auto w-full max-w-[520px] overflow-hidden rounded-[12px] border border-black/8 bg-white p-6" style={{ aspectRatio: "600/674" }}>
            <Image
              src="/images/treatments/photo-aging/photobiodynamic/treatment-steps.png"
              alt="How the HDD light activates photosensitive agents through the layers of the skin"
              fill
              className="object-contain"
            />
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              href="/treatments/photo-aging"
              className="inline-flex h-12 w-fit items-center gap-2 rounded-[8px] bg-tan px-6 font-nav text-[14px] font-semibold tracking-[-0.3px] text-forest transition-opacity hover:opacity-90"
            >
              View Chemical Peels (Photodynamic Peel) →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
