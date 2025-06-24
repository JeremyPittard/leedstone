// additional blocks I would like to add in the future
import { fields, collection } from "@keystatic/core";

export const pages = collection({
  label: "Pages",
  slugField: "title",
  path: "src/content/pages/*",
  schema: {
    title: fields.slug({ name: { label: "Title" } }),
    content: fields.blocks(
      {
        hero: {
          label: "Hero",
          schema: fields.object({
            image: fields.image({
              label: "Image",
              directory: "public/images/hero/",
              publicPath: "/images/hero/",
            }),
            title: fields.text({ label: "Title" }),
            description: fields.text({ label: "Description", multiline: true }),
            cta: fields.blocks(
              {
                internalLink: {
                  label: "Internal Link",
                  schema: fields.object({
                    link: fields.relationship({
                      label: "Internal Link",
                      description: "Select a page on this site",
                      collection: "pages",
                    }),
                    linkText: fields.text({ label: "Link Text" }),
                  }),
                },
                externalLink: {
                  label: "External Link",
                  schema: fields.object({
                    link: fields.url({
                      label: "External Link",
                      description: "Select a page on this site",
                    }),
                    linkText: fields.text({ label: "Link Text" }),
                  }),
                },
              },
              { label: "CTA", validation: { length: { max: 2 } } }
            ),
          }),
        },
        pageHeader: {
          label: "Page Header",
          schema: fields.object(
            {
              image: fields.image({
                label: "Image",
                directory: "public/images/header/",
                publicPath: "/images/header/",
              }),
              title: fields.text({ label: "Title" }),
              description: fields.text({
                label: "Description",
                multiline: true,
              }),
            },
            { description: "Use this if a hero is... too much." }
          ),
        },
        textWithImage: {
          label: "Text With Image",
          schema: fields.object({
            image: fields.image({
              label: "Image",
              directory: "public/images/content/",
              publicPath: "/images/content/",
            }),
            title: fields.text({ label: "Title" }),
            description: fields.text({ label: "Description", multiline: true }),
            cta: fields.blocks(
              {
                internalLink: {
                  label: "Internal Link",
                  schema: fields.object({
                    link: fields.relationship({
                      label: "Internal Link",
                      description: "Select a page on this site",
                      collection: "pages",
                    }),
                    linkText: fields.text({ label: "Link Text" }),
                  }),
                },
                externalLink: {
                  label: "External Link",
                  schema: fields.object({
                    link: fields.url({
                      label: "External Link",
                      description: "Select a page on this site",
                    }),
                    linkText: fields.text({ label: "Link Text" }),
                  }),
                },
              },
              { label: "CTA", validation: { length: { max: 2 } } }
            ),
            imageSide: fields.select({
              label: "Image Side",
              defaultValue: "left",
              options: [
                { label: "Left Image", value: "left" },
                { label: "Right Image", value: "right" },
              ],
            }),
          }),
        },
        imageGrid: {
          label: "Image Grid",
          schema: fields.object({
            title: fields.text({ label: "Title" }),
            items: fields.array(
              fields.object({
                image: fields.image({
                  label: "Image",
                  directory: "public/images/content/",
                  publicPath: "/images/content/",
                }),
                title: fields.text({ label: "Title" }),
                description: fields.text({
                  label: "Description",
                  multiline: true,
                }),
                link: fields.blocks(
                  {
                    internalLink: {
                      label: "Internal Link",
                      schema: fields.relationship({
                        label: "Internal Link",
                        description: "Select a page on this site",
                        collection: "pages",
                      }),
                    },
                    externalLink: {
                      label: "External Link",
                      schema: fields.url({
                        label: "External Link",
                        description:
                          "paste a link to an external site (this will open in a new tab.)",
                      }),
                    },
                  },
                  { label: "CTA", validation: { length: { max: 1 } } }
                ),
              }),
              { validation: { length: { min: 1, max: 6 } } }
            ),
          }),
        },
        timeline: {
          label: "Timeline",
          schema: fields.object({
            title: fields.text({ label: "Title" }),
            description: fields.text({ label: "Description", multiline: true }),
            items: fields.array(
              fields.object({
                title: fields.text({ label: "Title" }),
                description: fields.text({
                  label: "Description",
                  multiline: true,
                }),
                image: fields.image({ label: "Image" }),
              }),
              { validation: { length: { min: 1 } } }
            ),
          }),
        },
        faqBlock: {
          label: "FAQ's",
          schema: fields.text({ label: "Title" }),
        },
        reviews: {
          label: "Reviews",
          schema: fields.text({ label: "Title" }),
        },
        BlogList: {
          label: "Recent Blog Posts",
          schema: fields.text({ label: "Title" }),
        },

        cta: {
          label: "CTA",
          schema: fields.object({
            image: fields.image({
              label: "Image",
              directory: "public/images/cta/",
              publicPath: "/images/cta/",
            }),
            title: fields.text({ label: "Title" }),
            description: fields.text({ label: "Description", multiline: true }),
            cta: fields.blocks(
              {
                internalLink: {
                  label: "Internal Link",
                  schema: fields.object({
                    link: fields.relationship({
                      label: "Internal Link",
                      description: "Select a page on this site",
                      collection: "pages",
                    }),
                    linkText: fields.text({ label: "Link Text" }),
                  }),
                },
                externalLink: {
                  label: "External Link",
                  schema: fields.object({
                    link: fields.url({
                      label: "External Link",
                      description: "Select a page on this site",
                    }),
                    linkText: fields.text({ label: "Link Text" }),
                  }),
                },
              },
              { label: "CTA", validation: { length: { max: 1 } } }
            ),
          }),
        },
        breakout: {
          label: "Breakout",
          schema: fields.object({
            title: fields.text({ label: "Title" }),
            description: fields.text({ label: "Description", multiline: true }),
            cta: fields.blocks(
              {
                internalLink: {
                  label: "Internal Link",
                  schema: fields.object({
                    link: fields.relationship({
                      label: "Internal Link",
                      description: "Select a page on this site",
                      collection: "pages",
                    }),
                    linkText: fields.text({ label: "Link Text" }),
                  }),
                },
                externalLink: {
                  label: "External Link",
                  schema: fields.object({
                    link: fields.url({
                      label: "External Link",
                      description: "Select a page on this site",
                    }),
                    linkText: fields.text({ label: "Link Text" }),
                  }),
                },
              },
              { label: "CTA", validation: { length: { max: 2 } } }
            ),
          }),
        },
        blockquote: {
          label: "Blockquote",
          schema: fields.object({
            quote: fields.text({ label: "quote" }),
            cite: fields.text({ label: "cite" }),
          }),
        },
      },
      { label: "Content" }
    ),
  },
});
