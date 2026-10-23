import { defineField, defineType } from "sanity";

export const galleryPage = defineType({
  name: "galleryPage",
  title: "Gallery Page Header",
  type: "document",
  fields: [
    defineField({
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroSubtitle",
      title: "Hero Subtitle",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "badgeText",
      title: "Hero Badge Text",
      type: "string",
    }),
    defineField({
      name: "disclaimer",
      title: "Clinical Compliance Notice / Disclaimer",
      type: "text",
      rows: 3,
      description: "Notice regarding individual results and patient consent",
    }),
    defineField({
      name: "fullGalleryTitle",
      title: "Full Gallery Box Title",
      type: "string",
    }),
    defineField({
      name: "fullGalleryDesc",
      title: "Full Gallery Box Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "callButtonText",
      title: "Call Us Button Text",
      type: "string",
    }),
    defineField({
      name: "bookButtonText",
      title: "Book Consultation Button Text",
      type: "string",
    }),
    defineField({
      name: "galleryItems",
      title: "Before & After Results Photos (Upload & Replace)",
      type: "array",
      of: [
        {
          type: "object",
          name: "galleryItem",
          title: "Before & After Photo Card",
          fields: [
            {
              name: "title",
              type: "string",
              title: "Treatment / Case Title (e.g. Anti-Wrinkle Treatment for Forehead)",
            },
            {
              name: "category",
              type: "string",
              title: "Treatment Category",
              options: {
                list: [
                  { title: "Anti-Wrinkle (Botox)", value: "anti-wrinkles" },
                  { title: "Cryolipolysis (Fat Freezing)", value: "cryolipolysis" },
                  { title: "Dermal Fillers & Lip Fillers", value: "dermal-fillers" },
                  { title: "Sclerotherapy (Thread Veins)", value: "sclerotherapy" },
                  { title: "PRP Hair Loss & Beard", value: "prp-hair-loss" },
                  { title: "CryoPen (Skin Lesions)", value: "cryopen" },
                  { title: "PRP & PRP Cellular Matrix", value: "prp-cellular-matrix" },
                  { title: "Exosomes (EXO OX)", value: "exosome" },
                  { title: "Aqualyx (Fat Dissolving)", value: "aqualyx" },
                  { title: "Sculptra", value: "sculptra" },
                  { title: "Sunekos", value: "sunekos" },
                  { title: "Profhilo", value: "profhilo" },
                ],
              },
            },
            {
              name: "image",
              type: "image",
              title: "Result Photo (Upload replacement or new photo)",
              options: { hotspot: true },
              fields: [{ name: "alt", type: "string", title: "Alt text" }],
            },
          ],
          preview: {
            select: {
              title: "title",
              subtitle: "category",
              media: "image",
            },
          },
        },
      ],
      description: "Upload replacement before & after result images or add new results to the gallery",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Gallery Page Header",
        subtitle: "Title and clinical compliance disclaimer",
      };
    },
  },
});
