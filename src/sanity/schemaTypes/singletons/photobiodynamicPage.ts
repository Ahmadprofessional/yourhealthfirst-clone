import { defineField, defineType } from "sanity";

export const photobiodynamicPage = defineType({
  name: "photobiodynamicPage",
  title: "Photobiodynamic Therapy Page",
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
      name: "introText",
      title: "Introduction Text",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "facialMappingImage",
      title: "Facial Mapping Technology Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "whatIsTitle",
      title: "What is Photobiodynamic Therapy Title",
      type: "string",
    }),
    defineField({
      name: "boxTitle",
      title: "Highlighted Box Title",
      type: "string",
    }),
    defineField({
      name: "boxDesc",
      title: "Highlighted Box Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "treatmentsTitle",
      title: "Treatments Heading",
      type: "string",
    }),
    defineField({
      name: "rejuvenationImage",
      title: "Skinox Wrinkles / Rejuvenation Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "blemishesImage",
      title: "Skinox Blemish Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "rednessImage",
      title: "Skinox Redness Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "darkSpotsImage",
      title: "Skinox Dark Spots Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "combinationImage",
      title: "Skinox Products & Fotoage Mask Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "oxygenTitle",
      title: "Oxygen, Light & Photosensitive Agents Heading",
      type: "string",
    }),
    defineField({
      name: "oxygenP1",
      title: "Oxygen Paragraph 1",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "oxygenBullet1",
      title: "Oxygen Bullet Point 1",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "oxygenBullet2",
      title: "Oxygen Bullet Point 2",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "treatmentStepsDiagram",
      title: "Treatment Steps Diagram Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "viewPeelsCta",
      title: "View Peels CTA Button Text",
      type: "string",
    }),
    defineField({
      name: "faqs",
      title: "Photobiodynamic FAQs",
      type: "array",
      of: [{ type: "faqItem" }],
    }),
    defineField({
      name: "ctaButtonText",
      title: "CTA Button Text",
      type: "string",
      initialValue: "Book Consultation",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Photobiodynamic Therapy Page",
        subtitle: "Photobiodynamic skin treatment copy",
      };
    },
  },
});
