import { defineField, defineType } from "sanity";

export const fotoagePage = defineType({
  name: "fotoagePage",
  title: "FotoAge LED Page",
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
      name: "maskImage",
      title: "Fotoage Laser HDD Mask Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "introP2",
      title: "Introduction Paragraph 2",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "viewCtaText",
      title: "View Phototherapy CTA Button Text",
      type: "string",
    }),
    defineField({
      name: "hddHeading",
      title: "How Does HDD Help Heading",
      type: "string",
    }),
    defineField({
      name: "hddP1",
      title: "HDD Paragraph 1",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "hddP2",
      title: "HDD Paragraph 2",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "redLightImage",
      title: "Red Light Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "blueLightImage",
      title: "Blue Light Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "yellowLightImage",
      title: "Yellow Light Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "greenLightImage",
      title: "Green Light Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "customTitle",
      title: "Customizable Heading",
      type: "string",
    }),
    defineField({
      name: "customP1",
      title: "Customizable Paragraph",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "spectrumAreasImage",
      title: "4 Independent Treatment Areas Graphic",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "lightSpectrumInfo",
      title: "Light Spectrum Descriptions (Red, Blue, Yellow, Green)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "color", type: "string", title: "Light Color" },
            { name: "wavelength", type: "string", title: "Wavelength (e.g. 630nm)" },
            { name: "benefits", type: "text", rows: 3, title: "Targeted Benefits" },
          ],
        },
      ],
    }),
    defineField({
      name: "faqs",
      title: "FotoAge FAQs",
      type: "array",
      of: [{ type: "faqItem" }],
    }),
    defineField({
      name: "ctaButtonText",
      title: "CTA Button Text",
      type: "string",
      initialValue: "Book FotoAge Session",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "FotoAge LED Page",
        subtitle: "LED light therapy service copy",
      };
    },
  },
});
