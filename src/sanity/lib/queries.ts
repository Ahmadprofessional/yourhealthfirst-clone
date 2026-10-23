import { groq } from "next-sanity";

export const HOME_PAGE_QUERY = groq`*[_type == "homePage"][0]`;
export const ABOUT_PAGE_QUERY = groq`*[_type == "aboutPage"][0]`;
export const TREATMENTS_OVERVIEW_QUERY = groq`*[_type == "treatmentsOverviewPage"][0]`;
export const PHLEBOTOMY_PAGE_QUERY = groq`*[_type == "phlebotomyPage"][0]`;
export const SCLEROTHERAPY_PAGE_QUERY = groq`*[_type == "sclerotherapyPage"][0]`;
export const FOTOAGE_PAGE_QUERY = groq`*[_type == "fotoagePage"][0]`;
export const PHOTOBIODYNAMIC_PAGE_QUERY = groq`*[_type == "photobiodynamicPage"][0]`;
export const LONGEVITY_PAGE_QUERY = groq`*[_type == "longevityPage"][0]`;
export const HOME_SKINCARE_PAGE_QUERY = groq`*[_type == "homeSkincarePage"][0]`;
export const GALLERY_PAGE_QUERY = groq`*[_type == "galleryPage"][0]`;
export const PRICE_LIST_PAGE_QUERY = groq`*[_type == "priceListPage"][0]`;
export const BLOGS_PAGE_QUERY = groq`*[_type == "blogsPage"][0]`;
export const PRESS_PAGE_QUERY = groq`*[_type == "pressPage"][0]`;
export const CONTACT_PAGE_QUERY = groq`*[_type == "contactPage"][0]`;
export const SITE_SETTINGS_QUERY = groq`*[_type == "siteSettings"][0]`;

export const ALL_TREATMENTS_QUERY = groq`*[_type == "treatment"] | order(title asc)`;
export const TREATMENT_BY_SLUG_QUERY = groq`*[_type == "treatment" && slug.current == $slug][0]`;

export const ALL_BLOGS_QUERY = groq`*[_type == "blogPost"] | order(publishedAt desc)`;
export const BLOG_BY_SLUG_QUERY = groq`*[_type == "blogPost" && slug.current == $slug][0]`;

export const ALL_GALLERY_CASES_QUERY = groq`*[_type == "galleryCase"] | order(_createdAt desc)`;
