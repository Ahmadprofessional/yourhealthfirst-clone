import { defineField, defineType } from "sanity";

export const sclerotherapyPage = defineType({
  name: "sclerotherapyPage",
  title: "Sclerotherapy Page",
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
      name: "introImage",
      title: "Sclerotherapy Treatment Room Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "whatIsHeading",
      title: "What is Sclerotherapy Heading",
      type: "string",
    }),
    defineField({
      name: "whatIsP1",
      title: "What is Sclerotherapy Paragraph 1",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "whatIsP2",
      title: "What is Sclerotherapy Paragraph 2",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "spiderVeinsImage",
      title: "Spider Veins Close-up Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "practitionerImage",
      title: "Practitioner in Clinic Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "whatToExpectHeading",
      title: "What to Expect Heading",
      type: "string",
    }),
    defineField({
      name: "whatToExpectP",
      title: "What to Expect Paragraph",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "techniquesHeading",
      title: "Techniques Heading",
      type: "string",
    }),
    defineField({
      name: "techniquesP",
      title: "Techniques Paragraph",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "techniqueLiquidTitle",
      title: "Liquid Sclerotherapy Title",
      type: "string",
    }),
    defineField({
      name: "techniqueLiquidDesc",
      title: "Liquid Sclerotherapy Description",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "techniqueFoamTitle",
      title: "Foam Sclerotherapy Title",
      type: "string",
    }),
    defineField({
      name: "techniqueFoamDesc",
      title: "Foam Sclerotherapy Description",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "benefitsBadge",
      title: "Benefits Badge",
      type: "string",
    }),
    defineField({
      name: "benefitsHeading",
      title: "Benefits Heading",
      type: "string",
    }),
    defineField({
      name: "benefitsSubtitle",
      title: "Benefits Subtitle",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "howWorksHeading",
      title: "How It Works Heading",
      type: "string",
    }),
    defineField({
      name: "howWorksP",
      title: "How It Works Paragraph",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "howWorksImageBefore",
      title: "How Works Before Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "howWorksImageAfter",
      title: "How Works After Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "treatmentProcessImage",
      title: "Treatment Process Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "processBadge",
      title: "Process Badge",
      type: "string",
    }),
    defineField({
      name: "processHeading",
      title: "Process Heading",
      type: "string",
    }),
    defineField({
      name: "processP1",
      title: "Process Paragraph 1",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "processP2",
      title: "Process Paragraph 2",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "afterTreatmentHeading",
      title: "After Treatment Heading",
      type: "string",
    }),
    defineField({
      name: "considerTreatmentImage",
      title: "Consider Treatment Side Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "aftercareImage",
      title: "Aftercare Guidelines Side Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "howSclerotherapyWorksInfographic",
      title: "How Sclerotherapy Works Infographic Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "tipsBadge",
      title: "Helpful Tips Badge",
      type: "string",
    }),
    defineField({
      name: "tipsHeading",
      title: "Helpful Tips Heading",
      type: "string",
    }),
    defineField({
      name: "tipsSubtitle",
      title: "Helpful Tips Subtitle",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "galleryPairs",
      title: "Before & After Photo Pairs",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "before", title: "Before Photo", type: "image", options: { hotspot: true } },
            { name: "after", title: "After Photo", type: "image", options: { hotspot: true } },
          ],
        },
      ],
    }),
    defineField({
      name: "recoveryGuidance",
      title: "Recovery & Aftercare Instructions",
      type: "array",
      of: [{ type: "text", rows: 3 }],
    }),
    defineField({
      name: "faqs",
      title: "Sclerotherapy FAQs",
      type: "array",
      of: [{ type: "faqItem" }],
    }),
    defineField({
      name: "ctaButtonText",
      title: "CTA Button Text",
      type: "string",
      initialValue: "Book Sclerotherapy Consultation",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Sclerotherapy Page",
        subtitle: "Dedicated vein treatment page",
      };
    },
  },
});
