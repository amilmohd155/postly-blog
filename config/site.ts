export const siteConfig = {
  name: "Postly",
  headerTitle: "Postly - Next.js Blog",
  url: process.env.VERCEL_URL || "http://localhost:3000",
  year: 2024,
  repository: "https://github.com/amilmohd155/nextjs-blog",
  icon: `${process.env.BASE_PATH || ""}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ""}/static/images/twitter-card.png`,
  description: "Nextjs 14 blog using velite and tailwind",
  language: "en-UK",
  locale: "en-UK",
  author: "Amil Muhammed Hamza",
  links: {
    twitter: "",
    github: "",
    website: "https://amilmohd155.vercel.app/",
    linkedin: "https://www.linkedin.com",
  },
};

export type SiteConfig = typeof siteConfig;
