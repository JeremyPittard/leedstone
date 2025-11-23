import { fields, collection } from "@keystatic/core";

export const posts = collection({
  label: "Posts",
  slugField: "title",
  path: "src/content/posts/*",
  format: { contentField: "content" },
  schema: {
    title: fields.slug({ name: { label: "Title" } }),
    image: fields.image({
      label: "Image",
      directory: "src/assets/images/posts",
      publicPath: "src/assets/images/posts",
      validation: { isRequired: true },
    }),
    description: fields.text({
      label: "Description",
      multiline: true,
      description: "Short catchy description of what the post is about",
    }),
    publishDate: fields.date({
      label: "Published Date",
      description: "The Publish Date to be shown",
      defaultValue: new Date().toISOString(),
    }),
    content: fields.markdoc({
      label: "Content",
      options: {
        // @ts-ignore
        heading: {
          levels: [2, 3, 4, 5, 6],
        },
        image: {
          directory: "src/assets/images/posts",
          publicPath: "../../assets/images/posts/",
        },
      },
    }),
  },
});
