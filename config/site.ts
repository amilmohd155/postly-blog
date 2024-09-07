export const siteConfig = {
  name: "Postly",
  headerTitle: "Postly - Next.js Blog",
  url: "https://postly-amil.vercel.app/",
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
    github: "https://github.com/amilmohd155",
    website: "https://amilmohd155.vercel.app/",
    linkedin: "https://www.linkedin.com",
  },
};

export type SiteConfig = typeof siteConfig;
