import { defineField, defineType } from "sanity";

export const contactPage = defineType({
  name: "contactPage",
  title: "Contact Us Page",
  type: "document",
  fields: [
    defineField({
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
      initialValue: "Contact Us",
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
      name: "contactInfoHeading",
      title: "Contact Info Section Heading",
      type: "string",
    }),
    defineField({
      name: "clinicAddress",
      title: "Clinic Address",
      type: "string",
      initialValue: "2 Wimpole Street, London W1G 0EB",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "telephone",
      title: "Clinic Telephone Number",
      type: "string",
      initialValue: "+44 20 7946 0990",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "mobilePhone",
      title: "Clinic Mobile / WhatsApp Number",
      type: "string",
      initialValue: "078 1847 4041",
    }),
    defineField({
      name: "email",
      title: "Clinic Email",
      type: "string",
      initialValue: "info@yourhealthfirst.uk",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "hoursTitle",
      title: "Opening Hours Title",
      type: "string",
    }),
    defineField({
      name: "monFri",
      title: "Monday – Friday Hours Text",
      type: "string",
    }),
    defineField({
      name: "saturday",
      title: "Saturday Hours Text",
      type: "string",
    }),
    defineField({
      name: "sunday",
      title: "Sunday Hours Text",
      type: "string",
    }),
    defineField({
      name: "transportTitle",
      title: "Transport Section Title",
      type: "string",
    }),
    defineField({
      name: "mapImage",
      title: "Clinic Map Photo / Graphic",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "directionsTitle",
      title: "Map Bar Clinic Title",
      type: "string",
    }),
    defineField({
      name: "directionsAddress",
      title: "Map Bar Address Text",
      type: "string",
    }),
    defineField({
      name: "directionsButtonText",
      title: "Get Directions Button Text",
      type: "string",
    }),
    defineField({
      name: "directions",
      title: "Transit & Parking Guidance",
      type: "text",
      rows: 4,
      description: "Instructions for Bond Street / Oxford Circus tube stations and local parking",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Contact Us Page",
        subtitle: "Address, phone, hours, and travel directions",
      };
    },
  },
});
