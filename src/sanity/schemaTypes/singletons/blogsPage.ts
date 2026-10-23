import { defineField, defineType } from "sanity";

export const blogsPage = defineType({
  name: "blogsPage",
  title: "Blog Listing Page Header",
  type: "document",
  fields: [
    defineField({
      name: "heroTitle",
      title: "Hero Title",
      type: "string",
      initialValue: "Articles & Clinical Insights",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "badgeText",
      title: "Hero Badge Text",
      type: "string",
    }),
    defineField({
      name: "questionTitle",
      title: "Bottom Question Title",
      type: "string",
    }),
    defineField({
      name: "questionDesc",
      title: "Bottom Question Description",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "contactUsText",
      title: "Bottom Contact Us Button Text",
      type: "string",
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Blog Listing Page Header",
        subtitle: "Blog catalog headline and description",
      };
    },
  },
});
