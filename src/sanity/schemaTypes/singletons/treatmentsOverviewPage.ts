import { defineField, defineType } from "sanity";

export const treatmentsOverviewPage = defineType({
  name: "treatmentsOverviewPage",
  title: "Treatments Overview Page",
  type: "document",
  fields: [
    defineField({
      name: "heroBadge",
      title: "Hero Badge Text",
      type: "string",
    }),
    defineField({
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
      description: "e.g. 'Aesthetic & Longevity Treatments'",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "heroSubtitle",
      title: "Hero Subtitle",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "introParagraph",
      title: "Introduction Paragraph",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "longevityBadge",
      title: "Longevity Section Badge",
      type: "string",
    }),
    defineField({
      name: "longevityTitle",
      title: "Longevity Section Title",
      type: "string",
    }),
    defineField({
      name: "longevityDesc",
      title: "Longevity Section Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "longevityCta",
      title: "Longevity Section CTA Text",
      type: "string",
    }),
    defineField({
      name: "ctaHeading",
      title: "Bottom CTA Heading",
      type: "string",
    }),
    defineField({
      name: "ctaDescription",
      title: "Bottom CTA Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "callCta",
      title: "Bottom Call CTA Button Text",
      type: "string",
    }),
    defineField({
      name: "bookCta",
      title: "Bottom Book CTA Button Text",
      type: "string",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Treatments Overview Page",
        subtitle: "Catalog header copy, longevity section, and bottom CTA",
      };
    },
  },
});

