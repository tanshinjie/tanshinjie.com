import RSS from "rss";
import { getAllPosts } from "../lib/posts";

export async function GET() {
  const posts = await getAllPosts();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://tanshinjie.com";

  const feed = new RSS({
    title: "Tan Shin Jie's Blog",
    description: "Personal blog about web development and technology",
    site_url: baseUrl,
    feed_url: `${baseUrl}/feed.xml`,
    language: "en",
  });

  posts.forEach((post) => {
    feed.item({
      title: post.metadata.title,
      description: post.metadata.description || "",
      url: `${baseUrl}/blog/${post.slug}`,
      date: post.metadata.date,
      categories: post.metadata.tags || [],
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
