import { defineArrayMember, defineField, defineType } from "sanity";

export default defineType({
  name: "artist",
  title: "Artist",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (Rule) => [Rule.required()],
    }),
    defineField({
      name: "slug",
      type: "slug",
      validation: (SlugRule) => [SlugRule.required()],
      options: {
        source: "name",
        maxLength: 96,
      },
    }),
    defineField({
      name: "overview",
      type: "text",
      description: "Used for the <meta> description tag for SEO",
      validation: (Rule) => [Rule.required(), Rule.max(155)],
    }),
    defineField({
      name: "coverImage",
      type: "image",
      validation: (Rule) => [Rule.required()],
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "links",
      type: "array",
      of: [
        defineArrayMember({
          type: "link",
        }),
      ],
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
  ],
});
