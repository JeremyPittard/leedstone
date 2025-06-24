import { fields, singleton } from "@keystatic/core";

export const siteSettings = singleton({
  label: "Site Details",
  path: "src/content/site-settings/site-details",
  schema: {
    title: fields.text({ label: "Site Title" }),
    businessName: fields.text({ label: "Site Title" }),
    logo: fields.image({ label: "Site Logo", directory: "public/images/logo" }),
    sitewideBanner: fields.text({ label: "Sitewide Banner" }),
    sitewideBannerLink: fields.url({
      label: "CTA for banner",
      description: "paste in a url for a CTA in the banner",
    }),
    isSitewideBannerLinkExternal: fields.checkbox({
      label: "Does this link to an external website?",
    }),
    socialMediaLinks: fields.blocks(
      {
        url: {
          label: "External Page",
          schema: fields.object({
            link: fields.url({ label: "URL" }),
            label: fields.text({ label: "Label" }),
            icon: fields.select({
              label: "Icon",
              description: "Icon to show for social media link",
              options: [
                {
                  label: "Facebook",
                  value: "facebook",
                },
                {
                  label: "LinkedIn",
                  value: "linkedin",
                },
                {
                  label: "Reddit",
                  value: "reddit",
                },
                {
                  label: "Twitter",
                  value: "twitter",
                },
                {
                  label: "Discord",
                  value: "discord",
                },
                {
                  label: "YouTube",
                  value: "youtube",
                },
                {
                  label: "Spotify",
                  value: "spotify",
                },
                {
                  label: "GitHub",
                  value: "github",
                },
                {
                  label: "GitLab",
                  value: "gitlab",
                },
                {
                  label: "Mastodon",
                  value: "mastodon",
                },
                {
                  label: "Threads",
                  value: "threads",
                },
                {
                  label: "Bluesky",
                  value: "bluesky",
                },
                {
                  label: "X",
                  value: "X",
                },
              ],
              defaultValue: "facebook",
            }),
          }),
        },
      },
      {
        label: "Social Media Links",
        description: "links to your social media profiles",
        validation: { length: { max: 2 } },
      }
    ),
  },
});
