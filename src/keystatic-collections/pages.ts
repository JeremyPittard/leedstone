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
              directory: "src/assets/images/hero",
              publicPath: "src/assets/images/hero",
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
              { label: "CTA", validation: { length: { max: 2 } } },
            ),
          }),
        },
        pageHeader: {
          label: "Page Header",
          schema: fields.object(
            {
              image: fields.image({
                label: "Image",
                directory: "src/assets/images/header",
                publicPath: "src/assets/images/header",
              }),
              title: fields.text({ label: "Title" }),
              description: fields.text({
                label: "Description",
                multiline: true,
              }),
            },
            { description: "Use this if a hero is... too much." },
          ),
        },
        textWithImage: {
          label: "Text With Image",
          schema: fields.object({
            image: fields.image({
              label: "Image",
              directory: "src/assets/images",
              publicPath: "src/assets/images",
            }),
            title: fields.text({ label: "Title" }),
            description: fields.text({ label: "Description", multiline: true }),
            tagline: fields.text({ label: "Tagline" }),
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
              { label: "CTA", validation: { length: { max: 2 } } },
            ),
            imageSide: fields.select({
              label: "Image Side",
              defaultValue: "right",
              options: [
                { label: "Left Image", value: "left" },
                { label: "Right Image", value: "right" },
              ],
            }),
          }),
        },
        featuresBlock: {
          label: "Features",
          schema: fields.object({
            title: fields.text({ label: "Title" }),
            description: fields.text({ label: "Description", multiline: true }),
            tagline: fields.text({ label: "Tagline" }),
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
              { label: "CTA", validation: { length: { max: 2 } } },
            ),
            feature: fields.array(
              fields.object({
                image: fields.image({
                  label: "Image",
                  directory: "src/assets/images/",
                  publicPath: "src/assets/images/",
                }),
                title: fields.text({
                  label: "Title",
                  validation: { isRequired: true },
                }),
                description: fields.text({
                  label: "description",
                  multiline: true,
                }),
              }),
              {
                label: "Feature List",
                itemLabel: (props) => props.fields.title.value,
                validation: { length: { min: 1, max: 3 } },
              },
            ),
          }),
        },
        timeline: {
          label: "Timeline",
          schema: fields.object({
            title: fields.text({ label: "Title" }),
            description: fields.text({ label: "Description", multiline: true }),
            tagline: fields.text({ label: "Tagline" }),
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
              { label: "CTA", validation: { length: { max: 2 } } },
            ),
            items: fields.array(
              fields.object({
                title: fields.text({ label: "Title" }),
                description: fields.text({
                  label: "Description",
                  multiline: true,
                }),
                image: fields.image({ label: "Image" }),
              }),
              { validation: { length: { min: 1 } } },
            ),
          }),
        },
        faqBlock: {
          label: "FAQ's",
          schema: fields.object({
            title: fields.text({ label: "Title" }),
            description: fields.text({ label: "Description", multiline: true }),
          }),
        },
        reviews: {
          label: "Reviews",
          schema: fields.object({
            title: fields.text({ label: "Title" }),
            description: fields.text({ label: "Description", multiline: true }),
          }),
        },
        BlogList: {
          label: "Recent Blog Posts",
          schema: fields.text({ label: "Title" }),
        },

        cta: {
          label: "CTA",
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
              { label: "CTA", validation: { length: { max: 2 } } },
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
      { label: "Content" },
    ),
  },
});
