import type { StructureResolver } from "sanity/structure";

// Document IDs for singletons
export const SINGLETON_TYPES = new Set([
  "homePage",
  "aboutPage",
  "treatmentsOverviewPage",
  "phlebotomyPage",
  "sclerotherapyPage",
  "fotoagePage",
  "photobiodynamicPage",
  "longevityPage",
  "homeSkincarePage",
  "galleryPage",
  "priceListPage",
  "blogsPage",
  "pressPage",
  "contactPage",
  "siteSettings",
]);

export const structure: StructureResolver = (S) =>
  S.list()
    .title("YourHealthFirst Content")
    .items([
      // 1. Pages Category
      S.listItem()
        .title("Website Pages")
        .child(
          S.list()
            .title("Website Pages (Singletons)")
            .items([
              S.listItem()
                .title("Home Page")
                .child(
                  S.document()
                    .schemaType("homePage")
                    .documentId("homePage")
                    .title("Home Page Content")
                ),
              S.listItem()
                .title("About Us Page")
                .child(
                  S.document()
                    .schemaType("aboutPage")
                    .documentId("aboutPage")
                    .title("About Us Page Content")
                ),
              S.listItem()
                .title("Treatments Overview Page")
                .child(
                  S.document()
                    .schemaType("treatmentsOverviewPage")
                    .documentId("treatmentsOverviewPage")
                    .title("Treatments Catalog Header")
                ),
              S.divider(),
              S.listItem()
                .title("Phlebotomy Page")
                .child(
                  S.document()
                    .schemaType("phlebotomyPage")
                    .documentId("phlebotomyPage")
                    .title("Phlebotomy Blood Testing")
                ),
              S.listItem()
                .title("Sclerotherapy Page")
                .child(
                  S.document()
                    .schemaType("sclerotherapyPage")
                    .documentId("sclerotherapyPage")
                    .title("Sclerotherapy Vein Treatment")
                ),
              S.listItem()
                .title("FotoAge LED Page")
                .child(
                  S.document()
                    .schemaType("fotoagePage")
                    .documentId("fotoagePage")
                    .title("FotoAge LED Therapy")
                ),
              S.listItem()
                .title("Photobiodynamic Page")
                .child(
                  S.document()
                    .schemaType("photobiodynamicPage")
                    .documentId("photobiodynamicPage")
                    .title("Photobiodynamic Therapy")
                ),
              S.listItem()
                .title("Longevity Medicine Page")
                .child(
                  S.document()
                    .schemaType("longevityPage")
                    .documentId("longevityPage")
                    .title("Longevity Medicine")
                ),
              S.listItem()
                .title("Home Skincare Page")
                .child(
                  S.document()
                    .schemaType("homeSkincarePage")
                    .documentId("homeSkincarePage")
                    .title("Home Skincare Routine")
                ),
              S.divider(),
              S.listItem()
                .title("Gallery & Before-After Photos")
                .child(
                  S.document()
                    .schemaType("galleryPage")
                    .documentId("galleryPage")
                    .title("Gallery Header & Before-After Photos")
                ),
              S.listItem()
                .title("Price List Page Header")
                .child(
                  S.document()
                    .schemaType("priceListPage")
                    .documentId("priceListPage")
                    .title("Price List Header & Policy")
                ),
              S.listItem()
                .title("Blog Listing Page Header")
                .child(
                  S.document()
                    .schemaType("blogsPage")
                    .documentId("blogsPage")
                    .title("Blog Header")
                ),
              S.listItem()
                .title("Press & Media Page")
                .child(
                  S.document()
                    .schemaType("pressPage")
                    .documentId("pressPage")
                    .title("Press Features & Quotes")
                ),
              S.listItem()
                .title("Contact Us Page")
                .child(
                  S.document()
                    .schemaType("contactPage")
                    .documentId("contactPage")
                    .title("Contact Details & Travel Info")
                ),
              S.divider(),
              S.listItem()
                .title("Global Header & Footer")
                .child(
                  S.document()
                    .schemaType("siteSettings")
                    .documentId("siteSettings")
                    .title("Announcement Bar & Footer Accreditations")
                ),
            ])
        ),

      S.divider(),

      // 2. The 20 Treatments
      S.listItem()
        .title("Treatments (20 Clinical Pages)")
        .child(
          S.documentTypeList("treatment")
            .title("All Treatments")
        ),

      // 3. Blog Posts
      S.listItem()
        .title("Blog Articles")
        .child(
          S.documentTypeList("blogPost")
            .title("Clinical Insights Articles")
        ),

      // 4. Before & After Cases
      S.listItem()
        .title("Before & After Gallery")
        .child(
          S.documentTypeList("galleryCase")
            .title("Clinical Cases")
        ),

      // 5. Treatment Price Directory
      S.listItem()
        .title("Price List Directory")
        .child(
          S.documentTypeList("priceItem")
            .title("Treatment Prices")
        ),
    ]);
