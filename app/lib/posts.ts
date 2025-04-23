import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface PostMetadata {
  title: string;
  description?: string;
  date: string;
  tags?: string[];
}

export interface Post {
  slug: string;
  metadata: PostMetadata;
  content: string;
}

export function getPostSlugs(): string[] {
  const postsDirectory = path.join(process.cwd(), "app/blog");
  return fs
    .readdirSync(postsDirectory, { withFileTypes: true })
    .filter(
      (dirent) =>
        dirent.isDirectory() &&
        !dirent.name.startsWith(".") &&
        !dirent.name.startsWith("[")
    )
    .map((dirent) => dirent.name);
}

export async function getPost(slug: string): Promise<Post> {
  const mdxPath = path.join(process.cwd(), "app/blog", slug, "page.mdx");

  if (!fs.existsSync(mdxPath)) {
    throw new Error(`Post not found: ${slug}`);
  }

  const source = fs.readFileSync(mdxPath, "utf8");
  const { content, data } = matter(source);

  if (!data.title || !data.date) {
    throw new Error(`Missing required metadata fields in: ${slug}`);
  }

  return {
    slug,
    metadata: {
      title: data.title,
      description: data.description,
      date: data.date,
      tags: Array.isArray(data.tags) ? data.tags : [],
    },
    content,
  };
}

export async function getAllPosts(): Promise<Post[]> {
  const slugs = getPostSlugs();
  const posts = await Promise.all(slugs.map(async (slug) => getPost(slug)));

  return posts.sort(
    (a, b) =>
      new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime()
  );
}

export function formatPostDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}
