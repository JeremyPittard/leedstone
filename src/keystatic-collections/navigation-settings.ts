import { fields, singleton } from "@keystatic/core";

export const navigationSettings = singleton({
  label: "Navigation",
  path: "src/content/site-settings/navigation",
  schema: {
    homePage: fields.relationship({
      label: "Home Page",
      description: "Select a page to be your home page",
      collection: "pages",
    }),
    navigationLinks: fields.blocks(
      {
        // First block option is a link to an internal page
        page: {
          label: "Page",
          itemLabel: (props) => {
            let label = "Page";
            if (props.fields.label.value) {
              label = props.fields.label.value;
              return label;
            }

            if (props.fields.link.value) {
              return props.fields.link.value;
            }

            return label;
          },
          schema: fields.object({
            link: fields.relationship({
              label: "Page",
              collection: "pages",
            }),
            label: fields.text({ label: "Label" }),
          }),
        },
        // Second block option is a link to a URL
        url: {
          label: "External Page",
          itemLabel: (props) => {
            let label = "Page";
            if (props.fields.label.value) {
              label = props.fields.label.value;
              return label;
            }

            if (props.fields.link.value) {
              return props.fields.link.value;
            }

            return label;
          },
          schema: fields.object({
            link: fields.text({
              label: "URL",
              description: "must start with https://",
              validation: {
                pattern: {
                  regex: /^https:\/\/.+/,
                  message: "Must start with https://",
                },
              },
            }),
            label: fields.text({
              label: "Label",
              description: "the text to display on your link",
            }),
          }),
        },
      },
      {
        label: "Navigation Links",
        description: "Add links to your header navigation (max 4)",
        validation: { length: { max: 4 } },
      },
    ),
    ctaLinks: fields.blocks(
      {
        // First block option is a link to an internal page
        page: {
          label: "Page",
          itemLabel: (props) => {
            let label = "Page";
            if (props.fields.label.value) {
              label = props.fields.label.value;
              return label;
            }

            if (props.fields.link.value) {
              return props.fields.link.value;
            }

            return label;
          },
          schema: fields.object({
            link: fields.relationship({
              label: "Page",
              collection: "pages",
            }),
            label: fields.text({ label: "Label" }),
          }),
        },
        // Second block option is a link to a URL
        url: {
          label: "External Page",
          schema: fields.object({
            link: fields.text({
              label: "URL",
              description: "must start with https://",
              validation: {
                pattern: {
                  regex: /^https:\/\/.+/,
                  message: "Must start with https://",
                },
              },
            }),
            label: fields.text({ label: "Label" }),
          }),
        },
      },
      {
        label: "CTA Button Links",
        description: "Links to be used as CTA buttons in header (max 2)",
        validation: { length: { max: 2 } },
      },
    ),
    footerNavigationLinks: fields.blocks(
      {
        // First block option is a link to an internal page
        page: {
          label: "Internal Page",
          itemLabel: (props) => {
            let label = "Page";
            if (props.fields.label.value) {
              label = props.fields.label.value;
              return label;
            }

            if (props.fields.link.value) {
              return props.fields.link.value;
            }

            return label;
          },
          schema: fields.object({
            link: fields.relationship({
              label: "Page",
              collection: "pages",
            }),
            label: fields.text({ label: "Label" }),
          }),
        },
        // Second block option is a link to a URL
        url: {
          label: "External Page",
          itemLabel: (props) => {
            let label = "Page";
            if (props.fields.label.value) {
              label = props.fields.label.value;
              return label;
            }

            if (props.fields.link.value) {
              return props.fields.link.value;
            }

            return label;
          },
          schema: fields.object({
            link: fields.text({
              label: "URL",
              description: "must start with https://",
              validation: {
                pattern: {
                  regex: /^https:\/\/.+/,
                  message: "Must start with https://",
                },
              },
            }),
            label: fields.text({
              label: "Label",
              description: "the text to display on your link",
            }),
          }),
        },
      },
      {
        label: "Footer Links",
        description: "Add links to your footer navigation (max 15)",
        validation: { length: { max: 15 } },
      },
    ),
    footerCta: fields.object({
      schema: fields.object({
        title: fields.text({ label: "Footer CTA Title" }),
        description: fields.text({ label: "Footer CTA Description" }),
        ctaLinks: fields.blocks(
          {
            // First block option is a link to an internal page
            page: {
              label: "Internal Page",
              itemLabel: (props) => {
                let label = "Page";
                if (props.fields.linkText.value) {
                  label = props.fields.linkText.value;
                  return label;
                }

                if (props.fields.link.value) {
                  return props.fields.link.value;
                }

                return label;
              },
              schema: fields.object({
                link: fields.relationship({
                  label: "Internal Page",
                  collection: "pages",
                }),
                linkText: fields.text({ label: "Label" }),
              }),
            },
            // Second block option is a link to a URL
            url: {
              label: "External Page",
              schema: fields.object({
                link: fields.text({
                  label: "URL",
                  description: "must start with https://",
                  validation: {
                    pattern: {
                      regex: /^https:\/\/.+/,
                      message: "Must start with https://",
                    },
                  },
                }),
                linkText: fields.text({ label: "Label" }),
              }),
            },
          },
          {
            label: "CTA Button Links",
            description: "Links to be used as CTA buttons in header (max 2)",
            validation: { length: { max: 2 } },
          },
        ),
      }),
    }),
  },
});
