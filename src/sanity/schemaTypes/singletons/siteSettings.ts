import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Global Header & Footer",
  type: "document",
  fields: [
    defineField({
      name: "logoImage",
      title: "Header Clinic Logo Image",
      type: "image",
      options: { hotspot: true },
      description: "Custom header logo (defaults to /images/logo.png if not uploaded)",
    }),
    defineField({
      name: "announcementBar",
      title: "Top Announcement Bar Text",
      type: "string",
      description: "e.g. 'Harley Street Clinic — Consultations Available'",
    }),
    defineField({
      name: "headerPhone",
      title: "Header Phone Number",
      type: "string",
      initialValue: "0207 225 3582",
    }),
    defineField({
      name: "headerAddress",
      title: "Header Street Address",
      type: "string",
      initialValue: "2 Wimpole Street, W1G 0EB",
    }),
    defineField({
      name: "headerLocation",
      title: "Header Location Label",
      type: "string",
      initialValue: "Harley Street • London",
    }),
    defineField({
      name: "headerCtaText",
      title: "Header Book Button Text",
      type: "string",
      initialValue: "Book Consultation",
    }),
    defineField({
      name: "clinicName",
      title: "Footer Clinic Name",
      type: "string",
      initialValue: "Your Health First",
    }),
    defineField({
      name: "footerCtaHeading",
      title: "Footer CTA Main Heading",
      type: "string",
      initialValue: "EXPERIENCE EXCEPTIONAL MEDICAL AESTHETICS",
    }),
    defineField({
      name: "footerCtaSubtitle",
      title: "Footer CTA Subtitle",
      type: "string",
    }),
    defineField({
      name: "footerCtaDescription",
      title: "Footer CTA Description",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "callNowText",
      title: "Call Now Button Text",
      type: "string",
      initialValue: "Call Now",
    }),
    defineField({
      name: "emailNowText",
      title: "Email Now Button Text",
      type: "string",
      initialValue: "Email Now",
    }),
    defineField({
      name: "contactPhone1",
      title: "Primary Clinic Phone",
      type: "string",
      initialValue: "0207 225 3582",
    }),
    defineField({
      name: "contactPhone2",
      title: "Mobile / WhatsApp Phone",
      type: "string",
      initialValue: "07818 474041",
    }),
    defineField({
      name: "contactEmail",
      title: "Contact Email Address",
      type: "string",
      initialValue: "info@yourhealthfirst.uk",
    }),
    defineField({
      name: "contactAddress",
      title: "Contact Address",
      type: "string",
      initialValue: "2 Wimpole Street, London W1G 0EB",
    }),
    defineField({
      name: "footerBio",
      title: "Footer Clinic Brief Bio",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "regulatoryNotice",
      title: "Footer Regulatory Accreditations (GMC / CQC)",
      type: "string",
      description: "Doctor credentials & clinic regulatory statement",
    }),
    defineField({
      name: "copyrightText",
      title: "Footer Copyright Notice",
      type: "string",
      initialValue: "© 2026 YourHealthFirst Clinic. All rights reserved. 2 Wimpole Street, 2nd Floor, London W1G 0EB.",
    }),
    defineField({
      name: "accreditationLogos",
      title: "Footer Accreditation Logos",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "image", title: "Logo Image", type: "image", options: { hotspot: true } },
            { name: "alt", title: "Alt Description", type: "string" },
          ],
        },
      ],
      description: "Optional list of accreditation logos to override defaults in footer",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Global Header & Footer",
        subtitle: "Announcement banner, contact info, logos, and footer badges",
      };
    },
  },
});
