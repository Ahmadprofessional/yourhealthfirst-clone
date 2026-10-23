import { defineField, defineType } from "sanity";

export const longevityPage = defineType({
  name: "longevityPage",
  title: "Longevity Medicine Page",
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
      title: "Coming Soon Badge Text",
      type: "string",
    }),
    defineField({
      name: "tagline",
      title: "Tagline Text",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "bgImage",
      title: "Background Image (Optional)",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "cards",
      title: "Feature Cards",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "title", title: "Card Title", type: "string" },
            { name: "desc", title: "Card Description", type: "text", rows: 2 },
          ],
        },
      ],
    }),
    defineField({
      name: "notifyText",
      title: "Notification Prompt Text",
      type: "string",
    }),
    defineField({
      name: "registerButton",
      title: "Register Interest Button Text",
      type: "string",
    }),
    defineField({
      name: "pillars",
      title: "4 Longevity Pillars (Cardiovascular, Cellular, Metabolic, Hormones)",
      type: "array",
      of: [{ type: "featureItem" }],
    }),
    defineField({
      name: "faqs",
      title: "Longevity FAQs",
      type: "array",
      of: [{ type: "faqItem" }],
    }),
    defineField({
      name: "ctaButtonText",
      title: "CTA Button Text",
      type: "string",
      initialValue: "Book Longevity Consultation",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Longevity Medicine Page",
        subtitle: "Longevity and biomarker testing copy",
      };
    },
  },
});
