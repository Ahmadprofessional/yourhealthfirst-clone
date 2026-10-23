import fs from "fs";
import path from "path";
import { treatmentDetails } from "../src/data/treatments";
import { blogPosts } from "../src/data/blogs";
import { galleryGroups, gallerySections } from "../src/data/gallery";
import { services } from "../src/data/services";
import priceListRaw from "../src/data/priceList_raw.json";
import enMessages from "../messages/en.json";

const ROOT_DIR = process.cwd();
const BACKUP_DIR = path.join(ROOT_DIR, "backups", "content-snapshot");
const PAGES_DIR = path.join(BACKUP_DIR, "pages");
const RAW_DIR = path.join(BACKUP_DIR, "raw");

// Ensure directories exist
fs.mkdirSync(PAGES_DIR, { recursive: true });
fs.mkdirSync(RAW_DIR, { recursive: true });

console.log("=== Creating Verbatim Raw Backups ===");

const rawFilesToCopy = [
  "messages/en.json",
  "messages/ar.json",
  "messages/es.json",
  "messages/fr.json",
  "messages/ru.json",
  "src/data/treatments.ts",
  "src/data/priceList_raw.json",
  "src/data/blogs.ts",
  "src/data/gallery.ts",
  "src/data/services.ts",
  "src/data/site.ts",
  "src/data/localizedTreatments.ts",
  "src/data/localizedPriceList.ts",
];

for (const relPath of rawFilesToCopy) {
  const src = path.join(ROOT_DIR, relPath);
  if (fs.existsSync(src)) {
    const dest = path.join(RAW_DIR, relPath);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
    console.log(`Copied raw: ${relPath}`);
  }
}

// Copy translations folder recursively
function copyDirRecursive(srcDir: string, destDir: string) {
  if (!fs.existsSync(srcDir)) return;
  fs.mkdirSync(destDir, { recursive: true });
  const entries = fs.readdirSync(srcDir, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

copyDirRecursive(
  path.join(ROOT_DIR, "src/data/translations"),
  path.join(RAW_DIR, "src/data/translations")
);
console.log("Copied raw translations directory.");

console.log("=== Generating Per-Page Content Snapshots ===");

// 1. Home Page
const homeSnapshot = {
  page: "Home",
  route: "/",
  hero: enMessages.Hero,
  aboutUs: enMessages.AboutUs,
  promiseCards: enMessages.PromiseCards,
  servicesSection: enMessages.Services,
  serviceList: enMessages.ServiceList,
  servicesData: services,
  whyChooseUs: enMessages.WhyChooseUs,
  testimonials: enMessages.Testimonials,
  testimonialsList: enMessages.TestimonialsList,
  faq: enMessages.Faq,
  booking: enMessages.Booking,
  imageAssetsReferenced: [
    "/dr-yassine-profile.jpg",
    "/hero-bg.jpg",
    "/clinic-interior.jpg",
    ...services.map((s) => s.image),
  ],
};
fs.writeFileSync(
  path.join(PAGES_DIR, "home.json"),
  JSON.stringify(homeSnapshot, null, 2)
);

// 2. About Us Page
const aboutSnapshot = {
  page: "About Us",
  route: "/about-us",
  aboutPage: enMessages.AboutPage,
  aboutUsSection: enMessages.AboutUs,
  imageAssetsReferenced: [
    "/dr-yassine-portrait.jpg",
    "/training-1.jpg",
    "/training-2.jpg",
  ],
};
fs.writeFileSync(
  path.join(PAGES_DIR, "about-us.json"),
  JSON.stringify(aboutSnapshot, null, 2)
);

// 3. Treatments Overview
const treatmentsOverviewSnapshot = {
  page: "Treatments Overview",
  route: "/treatments",
  treatmentsHeader: enMessages.Treatments,
  treatmentCardsCount: treatmentDetails.length,
  treatmentCardsSummary: treatmentDetails.map((t) => ({
    slug: t.slug,
    title: t.title,
    tagline: t.tagline,
    category: t.category,
    image: t.image,
    intro: t.intro,
  })),
};
fs.writeFileSync(
  path.join(PAGES_DIR, "treatments-overview.json"),
  JSON.stringify(treatmentsOverviewSnapshot, null, 2)
);

// 4. Treatments Detail (All 20+ treatments)
fs.writeFileSync(
  path.join(PAGES_DIR, "treatments.json"),
  JSON.stringify(treatmentDetails, null, 2)
);

// 5. Specialized Treatment Pages
const specializedPages = [
  {
    name: "phlebotomy",
    route: "/treatments/phlebotomy",
    data: enMessages.PhlebotomyPage,
  },
  {
    name: "sclerotherapy",
    route: "/treatments/sclerotherapy",
    data: enMessages.SclerotherapyPage,
  },
  {
    name: "fotoage",
    route: "/fotoage",
    data: enMessages.FotoagePage,
  },
  {
    name: "photobiodynamic-therapy",
    route: "/photobiodynamic-therapy",
    data: enMessages.PhotobiodynamicPage,
  },
  {
    name: "longevity",
    route: "/longevity",
    data: enMessages.LongevityPage,
  },
  {
    name: "home-skincare",
    route: "/home-skincare",
    data: enMessages.HomeSkincarePage,
  },
  {
    name: "press",
    route: "/press",
    data: enMessages.PressPage,
  },
  {
    name: "contact-us",
    route: "/contact-us",
    data: enMessages.ContactPage,
  },
];

for (const p of specializedPages) {
  fs.writeFileSync(
    path.join(PAGES_DIR, `${p.name}.json`),
    JSON.stringify(
      { page: p.name, route: p.route, content: p.data },
      null,
      2
    )
  );
}

// Legal Pages
const legalPages = ["terms", "privacy-policy", "cookie-policy"];
for (const lp of legalPages) {
  const filePath = path.join(ROOT_DIR, `src/app/[locale]/${lp}/page.tsx`);
  if (fs.existsSync(filePath)) {
    const rawContent = fs.readFileSync(filePath, "utf-8");
    fs.writeFileSync(
      path.join(PAGES_DIR, `${lp}.json`),
      JSON.stringify(
        {
          page: lp,
          route: `/${lp}`,
          rawSourcePath: `src/app/[locale]/${lp}/page.tsx`,
          content: rawContent,
        },
        null,
        2
      )
    );
  }
}

fs.writeFileSync(
  path.join(PAGES_DIR, "gallery.json"),
  JSON.stringify(
    {
      page: "Gallery",
      route: "/gallery",
      header: enMessages.GalleryPage,
      groups: galleryGroups,
      sections: gallerySections,
    },
    null,
    2
  )
);

// 7. Price List
fs.writeFileSync(
  path.join(PAGES_DIR, "price-list.json"),
  JSON.stringify(
    {
      page: "Price List",
      route: "/price-list",
      header: enMessages.PriceList,
      data: priceListRaw,
    },
    null,
    2
  )
);

// 8. Blogs
fs.writeFileSync(
  path.join(PAGES_DIR, "blogs.json"),
  JSON.stringify(
    {
      page: "Blogs",
      route: "/blogs",
      header: enMessages.BlogPage,
      posts: blogPosts,
    },
    null,
    2
  )
);

// 9. Global Navigation & Footer
fs.writeFileSync(
  path.join(PAGES_DIR, "global-navigation.json"),
  JSON.stringify(
    {
      header: enMessages.Header,
      footer: enMessages.Footer,
      languageSwitcher: enMessages.LanguageSwitcher,
    },
    null,
    2
  )
);

// 10. Write human-readable SUMMARY.md
const summaryMd = `# Pre-Sanity Content Snapshot Summary

Generated on: ${new Date().toISOString()}
Branch: cms/sanity-integration
Git Tag: pre-sanity-backup

## What Was Backed Up

This backup directory contains an exact, untouched copy of all live website content, structured both as raw original files and parsed per-page content packages.

### 1. Per-Page Content Snapshots (\`/backups/content-snapshot/pages/\`)
- \`home.json\`: Hero, AboutUs, PromiseCards, Services, WhyChooseUs, Testimonials, FAQs, Booking CTA.
- \`about-us.json\`: Doctor bio, clinic philosophy, credentials, training gallery.
- \`treatments-overview.json\`: Categories, treatment list summaries.
- \`treatments.json\`: Full clinical content for all 20 treatments (headlines, intros, benefits, procedure stages, candidate criteria, FAQs, image paths).
- \`phlebotomy.json\`: Specialized phlebotomy copy, blood testing panels, safety credentials.
- \`sclerotherapy.json\`: Sclerotherapy vein treatment copy, recovery instructions, FAQs.
- \`fotoage.json\`: 4 Light spectrum therapy breakdown, protocols, FAQs.
- \`photobiodynamic-therapy.json\`: Scientific mechanism, skin photosensitizer steps, FAQs.
- \`longevity.json\`: 4 Longevity medicine pillars, biomarker testing program.
- \`home-skincare.json\`: Medical skincare routines, active ingredients guide.
- \`gallery.json\`: Before & after clinical case studies, concern tags, before/after image paths.
- \`price-list.json\`: All treatment categories, service items, and price points.
- \`blogs.json\`: All published clinical articles, rich text content, reading times, authors.
- \`press.json\`: Press features, media quotes, article links, clipping images.
- \`contact-us.json\`: Clinic address (2 Wimpole Street), phone, email, hours, transport directions.
- \`global-navigation.json\`: Top announcement bar, navigation labels, footer regulatory badges (CQC, GMC).

### 2. Raw Verbatim Copies (\`/backups/content-snapshot/raw/\`)
- \`messages/en.json\`
- \`messages/ar.json\`
- \`messages/es.json\`
- \`messages/fr.json\`
- \`messages/ru.json\`
- \`src/data/treatments.ts\`
- \`src/data/priceList_raw.json\`
- \`src/data/blogs.ts\`
- \`src/data/gallery.ts\`
- \`src/data/services.ts\`
- \`src/data/site.ts\`
- \`src/data/translations/\` (complete localized directory)

---

## How to Restore

If at any point during Sanity integration any content is questioned, corrupted, or needs to be restored to this exact baseline, you have two instant restoration methods:

### Method 1: Instant Git Tag Reset (Clean Slate)
The pre-sanity repository state is permanently tagged on GitHub:
\`\`\`bash
git checkout pre-sanity-backup
\`\`\`
This returns the entire codebase to the pristine commit right before Sanity work began.

### Method 2: Restore Specific Files from this Snapshot
Copy any affected file directly from \`/backups/content-snapshot/raw/\` back to its original location:
\`\`\`bash
# Example: restoring messages/en.json
cp backups/content-snapshot/raw/messages/en.json messages/en.json

# Example: restoring treatments data
cp backups/content-snapshot/raw/src/data/treatments.ts src/data/treatments.ts
\`\`\`
`;

fs.writeFileSync(path.join(BACKUP_DIR, "SUMMARY.md"), summaryMd);

console.log("Snapshot creation complete! Check backups/content-snapshot/.");
