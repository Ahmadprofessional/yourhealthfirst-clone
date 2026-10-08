export interface GalleryImage {
  src: string;
  alt: string;
}

export interface GalleryGroup {
  /** Same value as the matching treatment page slug, so treatment pages can deep-link to /gallery?treatment=<id> */
  id: string;
  label: string;
  /** Extra words people may type when searching */
  keywords: string[];
}

export interface GallerySection {
  group: string;
  title: string;
  description: string;
  images: GalleryImage[];
}

const make = (folder: string, prefix: string, ext: string, count: number, label: string): GalleryImage[] =>
  Array.from({ length: count }, (_, i) => ({
    src: `/images/gallery/${folder}/${prefix}-${i + 1}.${ext}`,
    alt: `${label} before & after — result ${i + 1}`,
  }));

export const galleryGroups: GalleryGroup[] = [
  { id: "cryolipolysis", label: "Cryolipolysis (Fat Freezing)", keywords: ["fat freezing", "coolsculpting", "body contouring", "fat reduction"] },
  { id: "anti-wrinkles", label: "Anti-Wrinkle (Botox)", keywords: ["botox", "wrinkles", "frown lines", "forehead", "injections"] },
  { id: "dermal-fillers", label: "Dermal Fillers & Lip Fillers", keywords: ["fillers", "lips", "lip filler", "tear trough", "chin", "nose"] },
  { id: "sclerotherapy", label: "Sclerotherapy (Thread Veins)", keywords: ["spider veins", "thread veins", "varicose", "legs"] },
  { id: "prp-hair-loss", label: "PRP Hair Loss & Beard", keywords: ["hair loss", "prp", "alopecia", "beard", "hair restoration", "thinning"] },
  { id: "cryopen", label: "CryoPen (Skin Lesions)", keywords: ["warts", "skin tags", "fibroma", "keratosis", "lesion removal"] },
  { id: "exosome", label: "Exosomes (EXO OX)", keywords: ["exo ox", "skin rejuvenation", "hair restoration", "regenerative"] },
  { id: "aqualyx", label: "Aqualyx (Fat Dissolving)", keywords: ["fat dissolving", "double chin", "jawline", "fat dissolve"] },
  { id: "mounjaro", label: "Mounjaro / GLP-1 Weight Loss", keywords: ["weight loss", "glp-1", "tirzepatide", "weight management", "injections"] },
  { id: "sculptra", label: "Sculptra", keywords: ["collagen", "biostimulator", "facial volume"] },
  { id: "sunekos", label: "Sunekos", keywords: ["tear trough", "under eye", "dark circles", "eye bags"] },
  { id: "profhilo", label: "Profhilo", keywords: ["skin remodelling", "hydration", "neck", "lower face"] },
];

export const gallerySections: GallerySection[] = [
  {
    group: "cryolipolysis",
    title: "Cryolipolysis",
    description: "Fat freezing results across multiple body areas — lower abdomen, waist, arms, back and legs.",
    images: make("cryolipolysis", "cryo", "jpeg", 19, "Cryolipolysis"),
  },
  {
    group: "anti-wrinkles",
    title: "Anti-Wrinkle Treatments",
    description: "Botox and anti-wrinkle injection results — forehead, frown lines, bunny lines and combination treatments.",
    images: make("botox", "botox", "jpeg", 14, "Anti-wrinkle (Botox)"),
  },
  {
    group: "dermal-fillers",
    title: "Dermal Fillers",
    description: "Filler treatments — tear trough, nasolabial folds, lip enhancement, chin augmentation and non-surgical rhinoplasty.",
    images: make("dermal-fillers", "filler", "jpeg", 14, "Dermal filler"),
  },
  {
    group: "dermal-fillers",
    title: "Lip Fillers",
    description: "Lip enhancement results — natural volume, hydration and definition tailored to each patient.",
    images: make("lip-fillers", "lip-fillers", "jpeg", 3, "Lip fillers"),
  },
  {
    group: "sclerotherapy",
    title: "Sclerotherapy",
    description: "Spider vein and thread vein removal results — legs and other treated areas.",
    images: make("sclerotherapy", "sclerotherapy", "jpeg", 4, "Sclerotherapy"),
  },
  {
    group: "prp-hair-loss",
    title: "PRP Hair Loss (Men)",
    description: "Platelet-rich plasma hair restoration results for male hair thinning and hair loss.",
    images: make("prp-men", "prp-men", "jpg", 3, "PRP hair loss (men)"),
  },
  {
    group: "prp-hair-loss",
    title: "PRP Hair Loss (Women)",
    description: "Platelet-rich plasma hair restoration results for female hair thinning and hair loss.",
    images: make("prp-female", "prp-female", "jpg", 4, "PRP hair loss (women)"),
  },
  {
    group: "prp-hair-loss",
    title: "PRP Patchy Beard",
    description: "Platelet-rich plasma results for patchy beard growth and facial hair density.",
    images: make("prp-beard", "prp-beard", "jpeg", 2, "PRP patchy beard restoration"),
  },
  {
    group: "cryopen",
    title: "CryoPen",
    description: "Precision skin lesion removal results — fibromas, actinic keratosis and other benign lesions.",
    images: make("cryopen", "cryopen", "jpeg", 2, "CryoPen skin lesion removal"),
  },
  {
    group: "exosome",
    title: "Exosomes",
    description: "EXO OX exosome therapy results for skin rejuvenation and hair restoration.",
    images: make("exosome", "exosome", "jpg", 4, "EXO OX exosome therapy"),
  },
  {
    group: "aqualyx",
    title: "Aqualyx",
    description: "Fat-dissolving injection results — double chin and jawline contouring.",
    images: make("aqualyx", "aqualyx", "jpeg", 2, "Aqualyx fat-dissolving injections"),
  },
  {
    group: "mounjaro",
    title: "GLP-1 Injections",
    description: "Medically supervised weight management with GLP-1 injections.",
    images: make("mounjaro", "mounjaro", "jpg", 4, "GLP-1 weight loss injections"),
  },
  {
    group: "sculptra",
    title: "Sculptra",
    description: "Collagen bio-stimulator results — facial volume restoration and skin quality improvement.",
    images: make("sculptra", "sculptra", "jpeg", 3, "Sculptra"),
  },
  {
    group: "sunekos",
    title: "Sunekos",
    description: "Tear trough, under-eye hollows and dark circles treated with Sunekos.",
    images: make("sunekos", "sunekos", "jpeg", 4, "Sunekos tear trough"),
  },
  {
    group: "profhilo",
    title: "Profhilo",
    description: "Skin remodelling and hydration results — lower face and neck, progressive over a course of treatments.",
    images: make("profhilo", "profhilo", "jpeg", 6, "Profhilo lower face & neck"),
  },
];
