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
    content: fields.markdoc({
      label: "Content",
      options: {
        image: {
          directory: "src/assets/images/posts",
          publicPath: "../../assets/images/posts/",
        },
      },
    }),
  },
});
