import { defineDocuments, defineLocations, type PresentationPluginOptions } from "sanity/presentation";

export const resolve: PresentationPluginOptions["resolve"] = {
  mainDocuments: defineDocuments([
    {
      route: "/en",
      filter: `_type == "homePage"`,
    },
    {
      route: "/en/about-us",
      filter: `_type == "aboutPage"`,
    },
    {
      route: "/en/treatments",
      filter: `_type == "treatmentsOverviewPage"`,
    },
    {
      route: "/en/treatments/phlebotomy",
      filter: `_type == "phlebotomyPage"`,
    },
    {
      route: "/en/treatments/sclerotherapy",
      filter: `_type == "sclerotherapyPage"`,
    },
    {
      route: "/en/treatments/:slug",
      filter: `_type == "treatment" && slug.current == $slug`,
    },
    {
      route: "/en/fotoage",
      filter: `_type == "fotoagePage"`,
    },
    {
      route: "/en/photobiodynamic-therapy",
      filter: `_type == "photobiodynamicPage"`,
    },
    {
      route: "/en/longevity",
      filter: `_type == "longevityPage"`,
    },
    {
      route: "/en/home-skincare",
      filter: `_type == "homeSkincarePage"`,
    },
    {
      route: "/en/gallery",
      filter: `_type == "galleryPage"`,
    },
    {
      route: "/en/price-list",
      filter: `_type == "priceListPage"`,
    },
    {
      route: "/en/blogs",
      filter: `_type == "blogsPage"`,
    },
    {
      route: "/en/blog",
      filter: `_type == "blogsPage"`,
    },
    {
      route: "/en/blogs/:slug",
      filter: `_type == "blogPost" && slug.current == $slug`,
    },
    {
      route: "/en/blog/:slug",
      filter: `_type == "blogPost" && slug.current == $slug`,
    },
    {
      route: "/en/press",
      filter: `_type == "pressPage"`,
    },
    {
      route: "/en/contact-us",
      filter: `_type == "contactPage"`,
    },
    {
      route: "/en/contact",
      filter: `_type == "contactPage"`,
    },
  ]),
  locations: {
    homePage: defineLocations({
      locations: [{ title: "Home Page", href: "/en" }],
    }),
    aboutPage: defineLocations({
      locations: [{ title: "About Us", href: "/en/about-us" }],
    }),
    treatmentsOverviewPage: defineLocations({
      locations: [{ title: "Treatments Overview", href: "/en/treatments" }],
    }),
    phlebotomyPage: defineLocations({
      locations: [{ title: "Phlebotomy", href: "/en/treatments/phlebotomy" }],
    }),
    sclerotherapyPage: defineLocations({
      locations: [{ title: "Sclerotherapy", href: "/en/treatments/sclerotherapy" }],
    }),
    fotoagePage: defineLocations({
      locations: [{ title: "FotoAge Therapy", href: "/en/fotoage" }],
    }),
    photobiodynamicPage: defineLocations({
      locations: [{ title: "Photobiodynamic Therapy", href: "/en/photobiodynamic-therapy" }],
    }),
    longevityPage: defineLocations({
      locations: [{ title: "Longevity Medicine", href: "/en/longevity" }],
    }),
    homeSkincarePage: defineLocations({
      locations: [{ title: "Home Skincare", href: "/en/home-skincare" }],
    }),
    galleryPage: defineLocations({
      locations: [{ title: "Before & After Gallery", href: "/en/gallery" }],
    }),
    priceListPage: defineLocations({
      locations: [{ title: "Price List", href: "/en/price-list" }],
    }),
    blogsPage: defineLocations({
      locations: [{ title: "Blogs Directory", href: "/en/blogs" }],
    }),
    pressPage: defineLocations({
      locations: [{ title: "Press & Media", href: "/en/press" }],
    }),
    contactPage: defineLocations({
      locations: [{ title: "Contact Us", href: "/en/contact-us" }],
    }),
    treatment: defineLocations({
      select: {
        title: "title",
        slug: "slug.current",
      },
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title || "Treatment",
            href: `/en/treatments/${doc?.slug}`,
          },
        ],
      }),
    }),
    blogPost: defineLocations({
      select: {
        title: "title",
        slug: "slug.current",
      },
      resolve: (doc) => ({
        locations: [
          {
            title: doc?.title || "Blog Post",
            href: `/en/blogs/${doc?.slug}`,
          },
        ],
      }),
    }),
  },
};
