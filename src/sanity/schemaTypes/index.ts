import { type SchemaTypeDefinition } from "sanity";

// Object types
import { faqItem } from "./objects/faqItem";
import { testimonialItem } from "./objects/testimonialItem";
import { featureItem } from "./objects/featureItem";
import { procedureStep } from "./objects/procedureStep";

// Singleton Page types
import { homePage } from "./singletons/homePage";
import { aboutPage } from "./singletons/aboutPage";
import { treatmentsOverviewPage } from "./singletons/treatmentsOverviewPage";
import { phlebotomyPage } from "./singletons/phlebotomyPage";
import { sclerotherapyPage } from "./singletons/sclerotherapyPage";
import { fotoagePage } from "./singletons/fotoagePage";
import { photobiodynamicPage } from "./singletons/photobiodynamicPage";
import { longevityPage } from "./singletons/longevityPage";
import { homeSkincarePage } from "./singletons/homeSkincarePage";
import { galleryPage } from "./singletons/galleryPage";
import { priceListPage } from "./singletons/priceListPage";
import { blogsPage } from "./singletons/blogsPage";
import { pressPage } from "./singletons/pressPage";
import { contactPage } from "./singletons/contactPage";
import { siteSettings } from "./singletons/siteSettings";

// Collection Document types
import { treatment } from "./documents/treatment";
import { blogPost } from "./documents/blogPost";
import { galleryCase } from "./documents/galleryCase";
import { priceItem } from "./documents/priceItem";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Objects
    faqItem,
    testimonialItem,
    featureItem,
    procedureStep,

    // Singletons (One fixed document per page)
    homePage,
    aboutPage,
    treatmentsOverviewPage,
    phlebotomyPage,
    sclerotherapyPage,
    fotoagePage,
    photobiodynamicPage,
    longevityPage,
    homeSkincarePage,
    galleryPage,
    priceListPage,
    blogsPage,
    pressPage,
    contactPage,
    siteSettings,

    // Collections
    treatment,
    blogPost,
    galleryCase,
    priceItem,
  ],
};
