import { treatmentDetails, TreatmentDetail } from "@/data/treatments";
import ruTreatments from "./translations/treatments/ru.json";
import esTreatments from "./translations/treatments/es.json";
import frTreatments from "./translations/treatments/fr.json";
import arTreatments from "./translations/treatments/ar.json";

const translationsMap: Record<string, Record<string, any>> = {
  ru: Object.fromEntries((ruTreatments as any[]).map((t) => [t.slug, t])),
  es: Object.fromEntries((esTreatments as any[]).map((t) => [t.slug, t])),
  fr: Object.fromEntries((frTreatments as any[]).map((t) => [t.slug, t])),
  ar: Object.fromEntries((arTreatments as any[]).map((t) => [t.slug, t])),
};

export function getLocalizedTreatment(slug: string, locale: string): TreatmentDetail | undefined {
  const base = treatmentDetails.find((t) => t.slug === slug);
  if (!base) return undefined;
  if (locale === "en") return base;

  const localized = translationsMap[locale]?.[slug];
  if (!localized) return base;

  return {
    ...base,
    ...localized,
    slug: base.slug,
    category: base.category,
    image: base.image,
    sidebarImage: base.sidebarImage,
    bodyImages: base.bodyImages,
    introImage: base.introImage,
    gallery: base.gallery,
    videoId: base.videoId,
    videoId2: base.videoId2,
    videoUrl: base.videoUrl,
  } as TreatmentDetail;
}
