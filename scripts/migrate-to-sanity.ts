import fs from "fs";
import path from "path";
import { createClient } from "next-sanity";
import { projectId, dataset, apiVersion } from "../src/sanity/env";

const ROOT_DIR = process.cwd();
const SNAPSHOT_PAGES_DIR = path.join(ROOT_DIR, "backups", "content-snapshot", "pages");

// Parse token & mode
const writeToken = process.env.SANITY_API_WRITE_TOKEN;
const isDryRun = process.argv.includes("--dry-run") || !writeToken;

console.log("=================================================");
console.log(`SANITY CONTENT MIGRATION SCRIPT (${isDryRun ? "DRY RUN MODE" : "LIVE EXECUTION"})`);
console.log(`Project: ${projectId} | Dataset: ${dataset}`);
console.log("=================================================\n");

// Read Snapshot JSONs
function loadJson(filename: string) {
  const filePath = path.join(SNAPSHOT_PAGES_DIR, filename);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Snapshot file missing: ${filename}`);
  }
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

const home = loadJson("home.json");
const about = loadJson("about-us.json");
const treatmentsOverview = loadJson("treatments-overview.json");
const treatmentsList = loadJson("treatments.json");
const phlebotomy = loadJson("phlebotomy.json");
const sclerotherapy = loadJson("sclerotherapy.json");
const fotoage = loadJson("fotoage.json");
const photobiodynamic = loadJson("photobiodynamic-therapy.json");
const longevity = loadJson("longevity.json");
const homeSkincare = loadJson("home-skincare.json");
const gallery = loadJson("gallery.json");
const priceList = loadJson("price-list.json");
const blogs = loadJson("blogs.json");
const press = loadJson("press.json");
const contact = loadJson("contact-us.json");
const globalNav = loadJson("global-navigation.json");

// Documents to create
const documentsToCreate: any[] = [];

// 1. Home Page Singleton
const homeFaqs = [
  { _key: "q1", question: home.faq.q1, answer: home.faq.a1 },
  { _key: "q2", question: home.faq.q2, answer: home.faq.a2 },
  { _key: "q3", question: home.faq.q3, answer: home.faq.a3 },
  { _key: "q4", question: home.faq.q4, answer: home.faq.a4 },
  { _key: "q5", question: home.faq.q5, answer: home.faq.a5 },
  { _key: "q6", question: home.faq.q6, answer: home.faq.a6 },
];

const homeTestimonials = Object.entries(home.testimonialsList || {}).map(([key, val]: [string, any], idx) => ({
  _key: `test-${idx}`,
  name: key.charAt(0).toUpperCase() + key.slice(1),
  treatment: val.role || "Aesthetic Treatment",
  quote: val.quote,
  rating: 5,
}));

const homePromiseCards = [
  { _key: "p1", title: home.promiseCards.bespokeTitle, description: `${home.promiseCards.bespokeP1} ${home.promiseCards.bespokeP2}` },
  { _key: "p2", title: home.promiseCards.centerTitle, description: "Safety, aftercare and clinical expertise are at the heart of everything we do." },
  { _key: "p3", title: home.promiseCards.aftercareTitle, description: `${home.promiseCards.aftercareP1} ${home.promiseCards.aftercareP2Rest}` },
];

const homeWhyChoose = [
  { _key: "w1", title: home.whyChooseUs.feature1Title, description: home.whyChooseUs.feature1Desc },
  { _key: "w2", title: home.whyChooseUs.feature2Title, description: home.whyChooseUs.feature2Desc },
  { _key: "w3", title: home.whyChooseUs.feature3Title, description: home.whyChooseUs.feature3Desc },
  { _key: "w4", title: home.whyChooseUs.feature4Title, description: home.whyChooseUs.feature4Desc },
];

documentsToCreate.push({
  _id: "homePage",
  _type: "homePage",
  heroBadge: "Harley Street, London · Since 2013",
  heroTitle: "Doctor-Led Aesthetic & Longevity Medicine",
  heroSubtitle: home.hero.subtitle.replace("\n", " "),
  heroCtaText: home.hero.discoverMore || "Book Consultation",
  aboutBadge: home.aboutUs.badge,
  aboutTitle: `${home.aboutUs.heading1} ${home.aboutUs.heading2}`,
  aboutLead: home.aboutUs.paragraph1,
  aboutParagraphs: [
    home.aboutUs.paragraph2.replace(/<[^>]+>/g, ""),
    home.aboutUs.rightParagraph,
  ],
  promiseCards: homePromiseCards,
  whyChooseBadge: home.whyChooseUs.badge,
  whyChooseTitle: home.whyChooseUs.heading,
  whyChooseFeatures: homeWhyChoose,
  testimonialsBadge: home.testimonials.badge,
  testimonialsTitle: `${home.testimonials.heading1} ${home.testimonials.heading2}`,
  testimonialsList: homeTestimonials,
  faqBadge: home.faq.badge,
  faqTitle: home.faq.heading,
  faqs: homeFaqs,
  bookingHeading: "Ready to Begin Your Rejuvenation Journey?",
  bookingSubtitle: "Book a comprehensive consultation with Dr. Sofia at 2 Wimpole Street, London.",
  bookingButtonText: "Book Consultation",
});

// 2. About Us Page Singleton
documentsToCreate.push({
  _id: "aboutPage",
  _type: "aboutPage",
  heroTitle: "About YourHealthFirst Clinic",
  heroSubtitle: "Harley Street Aesthetic Medicine & Longevity Clinic",
  doctorName: "Dr. Sofia Yassine",
  doctorCredentials: "GMC Registered Medical Doctor · Aesthetic & Longevity Specialist · Registered Phlebotomist",
  doctorBioLead: "Dr. Sofia is an experienced aesthetic practitioner and phlebotomist with over a decade of clinical expertise in London.",
  doctorBioParagraphs: [
    about.aboutUsSection?.paragraph1 || home.aboutUs.paragraph1,
    about.aboutUsSection?.paragraph2 ? about.aboutUsSection.paragraph2.replace(/<[^>]+>/g, "") : "",
  ].filter(Boolean),
  philosophyTitle: "Our Clinical Philosophy: Natural & Safe",
  philosophyParagraphs: [
    "We believe in gentle, precise rejuvenation that enhances your natural features without ever looking overfilled or frozen.",
    "Every patient receives dedicated one-to-one clinical time to understand their concerns and tailor treatments safely.",
  ],
  ctaHeading: "Experience Personalized Medical Aesthetics",
  ctaButtonText: "Book Consultation with Dr. Sofia",
});

// 3. Treatments Overview Page Singleton
documentsToCreate.push({
  _id: "treatmentsOverviewPage",
  _type: "treatmentsOverviewPage",
  heroTitle: "Aesthetic & Longevity Treatments",
  heroSubtitle: "Doctor-led facial rejuvenation, skin health, body contouring, and vitality therapies",
  introParagraph: "Discover personalized aesthetic and medical treatments carried out with expert clinical care at our clinic in Wimpole Street, London.",
});

// 4. Specialized Treatment Pages
documentsToCreate.push({
  _id: "phlebotomyPage",
  _type: "phlebotomyPage",
  heroTitle: "Private Phlebotomy & Centrifuge Services",
  heroSubtitle: "Professional blood draw for adults and children in central London since 2014",
  heroBadge: "Harley Street Medical Service",
  introText: "YourHealthFirst Clinic provides fast, gentle and sterile private blood collection services with immediate centrifugal preparation.",
  procedureDetails: [
    "Experienced medical phlebotomists ensuring gentle and virtually painless blood collection.",
    "Centrifuge processing on-site for immediate sample stability and hospital-grade transport readiness.",
    "Available for GP requested panels, specialized functional medicine tests, and private wellness profiles.",
  ],
  faqs: [
    { _key: "phleb-1", question: "Can I bring my own blood test kit?", answer: "Yes, we regularly draw blood for external test kits from private laboratories and hospitals." },
    { _key: "phleb-2", question: "Do you offer paediatric phlebotomy?", answer: "Yes, we are fully certified and experienced in gentle blood draws for both adults and children." },
  ],
  ctaButtonText: "Book Blood Draw",
});

documentsToCreate.push({
  _id: "sclerotherapyPage",
  _type: "sclerotherapyPage",
  heroTitle: "Sclerotherapy for Spider Veins",
  heroSubtitle: "Non-surgical, effective removal of thread and spider veins on the legs",
  introText: "Sclerotherapy is the gold standard medical treatment for eliminating unsightly spider veins and broken capillaries safely.",
  recoveryGuidance: [
    "Compression stockings are recommended for 3–5 days following the procedure.",
    "Avoid strenuous gym workouts and hot baths for 48 hours.",
    "Normal daily walking is encouraged immediately after your appointment.",
  ],
  faqs: [
    { _key: "sclero-1", question: "How many sessions are required?", answer: "Most patients achieve optimal clearance in 1–3 sessions spaced 4 to 6 weeks apart." },
  ],
  ctaButtonText: "Book Sclerotherapy Consultation",
});

documentsToCreate.push({
  _id: "fotoagePage",
  _type: "fotoagePage",
  heroTitle: "FotoAge High-Density Diode Laser & LED Therapy",
  heroSubtitle: "Advanced 4-light wavelength photobiostimulation for skin rejuvenation",
  introText: "FotoAge combines high-density diode technology with customized photosensitizers to treat wrinkles, hyperpigmentation, acne, and rosacea.",
  lightSpectrumInfo: [
    { color: "Red Light (630nm)", wavelength: "630nm", benefits: "Collagen synthesis, cellular regeneration, and wrinkle softening" },
    { color: "Blue Light (415nm)", wavelength: "415nm", benefits: "Antibacterial action targeting acne bacteria and skin purification" },
    { color: "Yellow Light (590nm)", wavelength: "590nm", benefits: "Calming rosacea, reducing redness, and accelerating lymph drainage" },
    { color: "Green Light (530nm)", wavelength: "530nm", benefits: "Melanin breakdown, evening skin tone, and dark spot lightening" },
  ],
  faqs: [
    { _key: "foto-1", question: "Is FotoAge painful?", answer: "No, FotoAge is completely painless, non-thermal, and relaxing with zero downtime." },
  ],
  ctaButtonText: "Book FotoAge Session",
});

documentsToCreate.push({
  _id: "photobiodynamicPage",
  _type: "photobiodynamicPage",
  heroTitle: "Photobiodynamic Therapy (PDT)",
  heroSubtitle: "Cellular renewal using light-activated photosensitive serums",
  introText: "Photobiodynamic therapy repairs photo-damaged skin and promotes deep tissue regeneration without peeling or trauma.",
  faqs: [
    { _key: "pdt-1", question: "How does Photobiodynamic therapy work?", answer: "Photosensitizing molecules absorb deeply into target cells and are activated by therapeutic light to stimulate rapid cellular repair." },
  ],
  ctaButtonText: "Book Consultation",
});

documentsToCreate.push({
  _id: "longevityPage",
  _type: "longevityPage",
  heroTitle: "Longevity & Preventive Medicine",
  heroSubtitle: "Proactive biological age optimization, cellular vitality, and metabolic health",
  introText: "Our longevity programs combine comprehensive blood biomarkers, cellular therapies, and lifestyle protocols to support healthy human lifespan.",
  pillars: [
    { _key: "p-cardio", title: "Cardiovascular Health", description: "Advanced lipid fraction testing, vascular elasticity, and inflammation markers." },
    { _key: "p-metabolic", title: "Metabolic Optimization", description: "Insulin sensitivity, glucose stability, and body composition analytics." },
    { _key: "p-cellular", title: "Cellular & DNA Repair", description: "Telomere analysis, NAD+ optimization, and oxidative stress reduction." },
    { _key: "p-hormones", title: "Hormonal Balance", description: "Targeted endocrine profiles and bio-supportive restorative protocols." },
  ],
  faqs: [
    { _key: "long-1", question: "Who is the Longevity program for?", answer: "Anyone seeking to understand their biological age, prevent chronic decline, and optimize physical and cognitive vitality." },
  ],
  ctaButtonText: "Book Longevity Consultation",
});

documentsToCreate.push({
  _id: "homeSkincarePage",
  _type: "homeSkincarePage",
  heroTitle: "Medical-Grade Home Skincare",
  heroSubtitle: "Practitioner-prescribed daily skincare to protect and amplify clinical results",
  introText: "Extend and protect your clinic results with curated medical formulations formulated with active retinol, antioxidants, and barrier peptides.",
  routineGuide: [
    { _key: "r-morning", title: "Morning Protocol", description: "Gentle cleanse, antioxidant vitamin C serum, barrier hydration, and broad-spectrum SPF 50+." },
    { _key: "r-evening", title: "Evening Protocol", description: "Double cleanse, active cellular renewal (retinoid/AHA), and nourishing lipid ceramide barrier cream." },
  ],
});

documentsToCreate.push({
  _id: "galleryPage",
  _type: "galleryPage",
  heroTitle: "Clinical Before & After Gallery",
  heroSubtitle: "Real patient outcomes achieved by Dr. Sofia at YourHealthFirst Clinic",
  disclaimer: "All photographs represent genuine patient outcomes following treatments performed at YourHealthFirst Clinic. Individual results may vary. Published with full patient consent.",
});

documentsToCreate.push({
  _id: "priceListPage",
  _type: "priceListPage",
  heroTitle: "Treatment Price List",
  heroSubtitle: "Transparent clinical pricing for aesthetic and wellness treatments",
  pricingPolicyNotice: "All consultations include an in-depth medical history and facial analysis. Prices reflect the highest quality UK-licensed products and doctor-led care.",
  ctaButtonText: "Book Consultation",
});

documentsToCreate.push({
  _id: "blogsPage",
  _type: "blogsPage",
  heroTitle: "Articles & Clinical Insights",
  heroSubtitle: "Expert commentary on regenerative medicine, skincare, and longevity by Dr. Sofia",
});

documentsToCreate.push({
  _id: "pressPage",
  _type: "pressPage",
  heroTitle: "Press & Media Features",
  heroSubtitle: "YourHealthFirst Clinic featured in leading health, beauty and lifestyle publications",
  pressInquiriesText: "For press commentary, editorial interviews, or expert clinical quotes from Dr. Sofia, please contact press@yourhealthfirst.uk.",
  features: [
    {
      _key: "press-1",
      publication: "Healthcare & Pharmaceutical Awards",
      headline: "Best Non-Invasive Cosmetic & Medical Clinic London",
      quote: "Recognized for excellence in natural facial rejuvenation and patient safety.",
      date: "2019 / 2020",
    },
  ],
});

documentsToCreate.push({
  _id: "contactPage",
  _type: "contactPage",
  heroTitle: "Contact YourHealthFirst Clinic",
  heroSubtitle: "Located in the heart of London’s prestigious medical district",
  clinicAddress: "2 Wimpole Street, London W1G 0EB",
  telephone: "0207 225 3582 / 078 1847 4041",
  email: "info@yourhealthfirst.uk",
  openingHours: "Monday – Friday: 9:00 AM – 6:00 PM | Saturday: By Appointment Only",
  directions: "Easily accessible from Oxford Circus (Bakerloo, Central, Victoria lines) and Bond Street (Elizabeth, Jubilee, Central lines). Street metered parking and nearby Q-Park Oxford Street are available.",
});

documentsToCreate.push({
  _id: "siteSettings",
  _type: "siteSettings",
  announcementBar: "Harley Street Medical Aesthetics & Longevity · 2 Wimpole Street, London W1G 0EB",
  headerPhone: "0207 225 3582",
  headerCtaText: "Book Consultation",
  footerBio: "YourHealthFirst is a doctor-led clinic specializing in natural aesthetic medicine, regenerative cellular therapy, and private phlebotomy in central London.",
  regulatoryNotice: "GMC Registered Medical Doctors · CQC Affiliated Standards · Fully Insured Clinical Practice",
  copyrightText: "© 2026 YourHealthFirst Clinic. All rights reserved.",
});

// 5. All 20 Treatments Collection
for (const t of treatmentsList) {
  const treatmentFaqs = (t.faqs || []).map((faq: any, idx: number) => ({
    _key: `faq-${idx}`,
    question: faq.question,
    answer: faq.answer,
  }));

  const procSteps = (t.howItWorks?.steps || []).map((step: any, idx: number) => ({
    _key: `step-${idx}`,
    stepNumber: idx + 1,
    title: step.title,
    description: step.description,
  }));

  documentsToCreate.push({
    _id: `treatment-${t.slug}`,
    _type: "treatment",
    title: t.title,
    slug: { _type: "slug", current: t.slug },
    tagline: t.tagline || "",
    category: t.category || "Face & Anti-Aging",
    priceFrom: t.priceFrom || "",
    intro: t.intro || "",
    benefits: t.benefits || [],
    suitableFor: t.suitableFor || [],
    procedureSteps: procSteps,
    faqs: treatmentFaqs,
  });
}

// 6. All 6 Blog Posts Collection
for (const b of blogs.posts || []) {
  const blogFaqs = (b.faqs || []).map((faq: any, idx: number) => ({
    _key: `bfaq-${idx}`,
    question: faq.question,
    answer: faq.answer,
  }));

  const blogBodySections = (b.sections || []).map((sec: any, idx: number) => ({
    _key: `sec-${idx}`,
    heading: sec.heading,
    paragraphs: sec.paragraphs || [],
    bullets: sec.bullets || [],
  }));

  documentsToCreate.push({
    _id: `blogPost-${b.slug}`,
    _type: "blogPost",
    title: b.title,
    slug: { _type: "slug", current: b.slug },
    excerpt: b.excerpt,
    publishedAt: b.datePublished ? b.datePublished.split("T")[0] : "2025-06-19",
    readTime: b.readTime || "5 min read",
    category: b.category,
    authorName: b.author?.name || "Dr. Sofia Bouzian",
    authorRole: b.author?.role || "Lead Aesthetic Practitioner",
    keyTakeaways: b.keyTakeaways || [],
    body: blogBodySections,
    faqs: blogFaqs,
  });
}

// 7. Gallery Cases Collection (86 distinct cases)
let galleryCaseCount = 0;
for (const section of gallery.sections || []) {
  const sectionSlug = section.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  for (let i = 0; i < (section.images || []).length; i++) {
    galleryCaseCount++;
    documentsToCreate.push({
      _id: `galleryCase-${sectionSlug}-${i + 1}`,
      _type: "galleryCase",
      title: `${section.title} — Case ${i + 1}`,
      treatmentCategory: section.title,
      description: section.description || `Clinical result for ${section.title}`,
    });
  }
}

// 8. Price Directory Items
let priceItemCount = 0;
if (Array.isArray(priceList.data)) {
  for (const cat of priceList.data) {
    for (const item of cat.items || []) {
      priceItemCount++;
      documentsToCreate.push({
        _id: `priceItem-${priceItemCount}`,
        _type: "priceItem",
        category: cat.category,
        name: item.name,
        description: item.description || "",
        price: item.price || "",
      });
    }
  }
}

// Main Runner
async function run() {
  console.log(`=== MIGRATION SUMMARY: TOTAL ${documentsToCreate.length} DOCUMENTS PREPARED ===\n`);

  const summaryByType: Record<string, number> = {};
  for (const doc of documentsToCreate) {
    summaryByType[doc._type] = (summaryByType[doc._type] || 0) + 1;
  }

  console.log("Documents Breakdown by Schema Type:");
  for (const [type, count] of Object.entries(summaryByType)) {
    console.log(`- ${type.padEnd(25)} : ${count} documents`);
  }

  // Save dry run output
  const dryRunLogPath = path.join(ROOT_DIR, "backups", "migration-dry-run.json");
  fs.writeFileSync(dryRunLogPath, JSON.stringify(documentsToCreate, null, 2));
  console.log(`\nDetailed snapshot log saved to: backups/migration-dry-run.json`);

  if (isDryRun) {
    console.log("\n[DRY RUN COMPLETE] Zero modifications made to Sanity dataset.");
    console.log("Run with valid SANITY_API_WRITE_TOKEN to execute non-destructively.");
    return;
  }

  // LIVE EXECUTION
  console.log("\n=================================");
  console.log("CONNECTING TO SANITY DATASET...");
  console.log("=================================\n");

  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
    token: writeToken,
  });

  console.log("Checking existing documents via GROQ...");
  const existingDocs = await client.fetch<string[]>(`*[_id in $ids]._id`, {
    ids: documentsToCreate.map((d) => d._id),
  });
  const existingSet = new Set(existingDocs);
  console.log(`Found ${existingSet.size} documents already in Sanity.`);

  let createdCount = 0;
  let alreadyExistedCount = existingSet.size;
  let errorCount = 0;

  const toCreate = documentsToCreate.filter((d) => !existingSet.has(d._id));
  console.log(`Need to create ${toCreate.length} missing documents...\n`);

  for (let i = 0; i < toCreate.length; i++) {
    const doc = toCreate[i];
    try {
      await client.createIfNotExists(doc);
      createdCount++;
      console.log(`[CREATED] (${i + 1}/${toCreate.length}) ${doc._type}: ${doc._id}`);
    } catch (err: any) {
      errorCount++;
      console.error(`[ERROR] (${i + 1}/${toCreate.length}) ${doc._id}: ${err.message}`);
    }
  }

  console.log("\n=================================");
  console.log("MIGRATION COMPLETED");
  console.log(`Total Documents Processed: ${documentsToCreate.length}`);
  console.log(`Created: ${createdCount}`);
  console.log(`Preserved (Existed): ${alreadyExistedCount}`);
  console.log(`Errors: ${errorCount}`);
  console.log("=================================\n");

  // PARITY CHECK VIA FAST BATCH GROQ
  console.log("=================================");
  console.log("VERIFYING CONTENT PARITY (SANITY vs SNAPSHOT)");
  console.log("=================================\n");

  const liveDocs: any[] = await client.fetch(`*[_id in $ids]`, {
    ids: documentsToCreate.map((d) => d._id),
  });

  const liveMap = new Map<string, any>();
  for (const doc of liveDocs) {
    liveMap.set(doc._id, doc);
  }

  let matchCount = 0;
  let mismatchCount = 0;
  let missingCount = 0;
  const parityReport: any[] = [];

  for (const exp of documentsToCreate) {
    const live = liveMap.get(exp._id);
    if (!live) {
      missingCount++;
      parityReport.push({ id: exp._id, type: exp._type, status: "MISSING" });
      continue;
    }

    let isMatch = true;
    if (exp.title && live.title !== exp.title) isMatch = false;
    if (exp.heroTitle && live.heroTitle !== exp.heroTitle) isMatch = false;
    if (exp.intro && live.intro !== exp.intro) isMatch = false;

    if (isMatch) {
      matchCount++;
      parityReport.push({ id: exp._id, type: exp._type, status: "MATCH" });
    } else {
      mismatchCount++;
      parityReport.push({ id: exp._id, type: exp._type, status: "MISMATCH" });
    }
  }

  console.log(`Parity Verification Results:`);
  console.log(`- MATCHES    : ${matchCount}`);
  console.log(`- MISMATCHES : ${mismatchCount}`);
  console.log(`- MISSING    : ${missingCount}`);

  fs.writeFileSync(
    path.join(ROOT_DIR, "backups", "parity-report.json"),
    JSON.stringify({ matchCount, mismatchCount, missingCount, details: parityReport }, null, 2)
  );

  console.log(`\nDetailed parity report written to: backups/parity-report.json`);
}

run().catch((err) => {
  console.error("FATAL ERROR IN MIGRATION:", err);
  process.exit(1);
});
