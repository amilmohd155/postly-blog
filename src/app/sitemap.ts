import { posts } from "#site/content";
import { siteConfig } from "@config/site";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const blogEntries: MetadataRoute.Sitemap = posts.map((blog) => ({
    url: `${siteConfig.url}/${blog.slug}`,
    lastModified: blog.updated,
  }));

  return [
    {
      url: `${siteConfig.url}/`,
      priority: 1,
    },
    {
      url: `${siteConfig.url}/visual`,
    },
    {
      url: `${siteConfig.url}/about`,
    },
    {
      url: `${siteConfig.url}/blog`,
    },
    ...blogEntries,
  ];
}
