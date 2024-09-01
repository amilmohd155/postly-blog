export const siteConfig = {
  name: "Postly",
  headerTitle: "Postly - Next.js Blog",
  url: "http://localhost:3000",
  year: 2024,
  repository: "",
  icon: `${process.env.BASE_PATH || ""}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ""}/static/images/twitter-card.png`,
  description: "Nextjs 14 blog using velite and tailwind",
  language: "en-UK",
  locale: "en-UK",
  author: "Amil Muhammed Hamza",
  links: {
    twitter: "",
    github: "",
    website: "",
    linkedin: "https://www.linkedin.com",
  },
};

export type SiteConfig = typeof siteConfig;
