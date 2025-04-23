import { MetadataRoute } from "next";
import { getAllPosts } from "./lib/posts";

export const baseUrl = "https://tanshinjie.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://tanshinjie.com";

  const blogPosts = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.metadata.date),
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },
    ...blogPosts,
  ];
}
