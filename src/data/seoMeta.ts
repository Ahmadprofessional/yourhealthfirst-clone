/**
 * English search-result titles and descriptions (from Sofia's SEO sheets, 30 Oct 2026).
 *
 * - Titles are used as-is (no brand suffix is added) and stay at 60 characters or fewer.
 * - Descriptions stay at 160 characters or fewer so Google does not cut them off.
 * - Only the English pages use these. Other languages keep their own translated titles.
 * - Not included on purpose: Mounjaro (waiting on Sofia's go-ahead for the wording), and the
 *   "coming soon" Longevity and Home Skincare pages, which are hidden from Google.
 */
export type SeoMeta = { title: string; description: string };

export const seoMeta = {
  home: {
    title: "Aesthetic Clinic London | YourHealthFirst Clinic",
    description:
      "Discover YourHealthFirst Clinic on Wimpole Street, London, for personalised aesthetic treatments, skin rejuvenation and hair restoration. Book a consultation.",
  },
  about: {
    title: "Sofia Bouzian | Aesthetic Practitioner London",
    description:
      "Meet Sofia Bouzian, an experienced aesthetic practitioner in London. Learn about YourHealthFirst Clinic’s personalised skin, hair and rejuvenation care.",
  },
  treatments: {
    title: "Aesthetic Treatments London | YourHealthFirst",
    description:
      "Explore aesthetic treatments at YourHealthFirst Clinic in London, including skin rejuvenation, facial aesthetics, PRP and hair restoration. Find your treatment.",
  },
  priceList: {
    title: "Aesthetic Treatment Prices London | YourHealthFirst",
    description:
      "Explore treatment prices at YourHealthFirst Clinic in London. Review aesthetic, skin rejuvenation and hair restoration treatments before you book.",
  },
  gallery: {
    title: "Aesthetic Treatment Gallery London | YourHealthFirst",
    description:
      "View images from YourHealthFirst Clinic in London to learn about aesthetic treatments and areas. Results vary; book a consultation to discuss your goals.",
  },
  blogs: {
    title: "Aesthetic & Skincare Advice | YourHealthFirst Clinic",
    description:
      "Read skincare, aesthetic treatment and rejuvenation advice from YourHealthFirst Clinic in London to help you prepare questions for a professional consultation.",
  },
  press: {
    title: "YourHealthFirst Clinic in the Press | London",
    description:
      "Read news and media features about YourHealthFirst Clinic in London, its services and updates. Contact the clinic for press enquiries and further information.",
  },
  contact: {
    title: "Contact YourHealthFirst Clinic | Wimpole Street, London",
    description:
      "Contact YourHealthFirst Clinic at Wimpole Street, London, to ask about treatments, prices and appointments. Get in touch by phone, email or through the website.",
  },
  treatment: {
    "anti-wrinkles": {
      title: "Anti-Wrinkle Injections London | YourHealthFirst",
      description:
        "Find out about anti-wrinkle injections at YourHealthFirst Clinic in London. Discuss your goals, suitability, expected results and options at a consultation.",
    },
    "dermal-fillers": {
      title: "Dermal Fillers London | YourHealthFirst Clinic",
      description:
        "Explore dermal filler treatments at YourHealthFirst Clinic in London. Arrange a consultation to discuss facial balance, suitability and your individual goals.",
    },
    sunekos: {
      title: "Sunekos Treatment London | YourHealthFirst",
      description:
        "Learn about Sunekos skin-rejuvenation treatment at YourHealthFirst Clinic in London. Book a consultation to discuss suitability and a personalised plan.",
    },
    profhilo: {
      title: "Profhilo Treatment London | YourHealthFirst",
      description:
        "Discover Profhilo at YourHealthFirst Clinic in London. Discuss skin hydration and quality goals with a practitioner and find out whether treatment may suit you.",
    },
    polynucleotides: {
      title: "Polynucleotide Treatment London | YourHealthFirst",
      description:
        "Learn about polynucleotide treatments at YourHealthFirst Clinic in London. Book a consultation to discuss skin concerns, suitability and your treatment options.",
    },
    sculptra: {
      title: "Sculptra Treatment London | YourHealthFirst Clinic",
      description:
        "Find out about Sculptra treatment at YourHealthFirst Clinic in London. Discuss your facial rejuvenation goals, suitability and treatment plan at a consultation.",
    },
    "prp-face-body": {
      title: "PRP Facial Rejuvenation London | YourHealthFirst",
      description:
        "Explore platelet-rich plasma (PRP) treatments at YourHealthFirst Clinic in London. Arrange a consultation to discuss facial rejuvenation and suitability.",
    },
    "prp-hair-loss": {
      title: "PRP Hair Loss Treatment London | YourHealthFirst",
      description:
        "Learn about PRP hair treatment at YourHealthFirst Clinic in London. Book a consultation to discuss hair thinning and whether PRP may be right for you.",
    },
    exosome: {
      title: "Exosome Therapy London | YourHealthFirst Clinic",
      description:
        "Explore exosome therapy at YourHealthFirst Clinic in London. Arrange a consultation to discuss the treatment, available options and suitability for your needs.",
    },
    cryolipolysis: {
      title: "Cryolipolysis Fat Freezing London | YourHealthFirst",
      description:
        "Discover cryolipolysis, also known as fat freezing, at YourHealthFirst Clinic in London. Book a consultation to discuss suitability and body-contouring options.",
    },
    "emsculpt-neo": {
      title: "Emsculpt Neo Body Sculpting London | YourHealthFirst",
      description:
        "Learn about Emsculpt Neo body-contouring treatment at YourHealthFirst Clinic in London. Discuss your goals, suitability and options at a consultation.",
    },
    aqualyx: {
      title: "Aqualyx Fat Dissolving London | YourHealthFirst",
      description:
        "Find out about Aqualyx treatment at YourHealthFirst Clinic in London. Arrange a consultation to discuss localised areas, suitability and considerations.",
    },
    microneedling: {
      title: "Microneedling Treatment London | YourHealthFirst",
      description:
        "Discover microneedling at YourHealthFirst Clinic in London. Book a consultation to discuss your skin concerns, treatment suitability and personalised aftercare.",
    },
    mesotherapy: {
      title: "Mesotherapy Treatment London | YourHealthFirst",
      description:
        "Learn about mesotherapy at YourHealthFirst Clinic in London. Discuss your skin or hair concerns, treatment options and suitability at a consultation.",
    },
    "photo-aging": {
      title: "Chemical Peels London | YourHealthFirst Clinic",
      description:
        "Explore chemical peel treatments at YourHealthFirst Clinic in London. Arrange a consultation to discuss skin concerns, suitable options and aftercare.",
    },
    sclerotherapy: {
      title: "Sclerotherapy Spider Vein Treatment London | YourHealthFirst",
      description:
        "Learn about sclerotherapy for visible thread or spider veins at YourHealthFirst Clinic in London. Book a consultation to discuss suitability and options.",
    },
    cryopen: {
      title: "CryoPen Skin Tag Removal London | YourHealthFirst",
      description:
        "Find out about CryoPen treatment at YourHealthFirst Clinic in London. Arrange an assessment to discuss the skin concern, suitability and treatment options.",
    },
    "vitamin-b12": {
      title: "Vitamin B12 Injections London | YourHealthFirst",
      description:
        "Learn about vitamin B12 injections at YourHealthFirst Clinic in London. Arrange a consultation to discuss your needs and whether treatment is appropriate.",
    },
    phlebotomy: {
      title: "Private Blood Tests & Phlebotomy London | YourHealthFirst",
      description:
        "Need a private blood draw in London? YourHealthFirst Clinic offers phlebotomy appointments. Contact the clinic about available tests and preparation.",
    },
  },
} satisfies {
  [key: string]: SeoMeta | { [slug: string]: SeoMeta };
};

export type SeoTreatmentSlug = keyof typeof seoMeta.treatment;

export function getEnglishTreatmentSeo(slug: string): SeoMeta | undefined {
  return (seoMeta.treatment as Record<string, SeoMeta>)[slug];
}
