import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { Card } from '../components/Card';
import { ArrowNarrowLeftIcon } from "@heroicons/react/solid";
import Image from "next/image";

export const dynamic = 'force-static';
export const revalidate = 3600; // Revalidate every hour

// Function to extract frontmatter from MDX files
function extractFrontmatter(content) {
  const frontmatterRegex = /---\r?\n([\s\S]*?)\r?\n---/;
  const match = content.match(frontmatterRegex);

  if (!match) return {};

  const frontmatter = {};
  const frontmatterLines = match[1].split('\n');

  frontmatterLines.forEach(line => {
    const [key, ...valueArr] = line.split(':');
    if (key && valueArr.length) {
      frontmatter[key.trim()] = valueArr.join(':').trim();
    }
  });

  return frontmatter;
}

// Get blog metadata from folder names and MDX files
async function getBlogPosts() {
  const blogDir = path.join(process.cwd(), 'app/blog');
  const dirs = fs.readdirSync(blogDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && !dirent.name.startsWith('.'))
    .filter(dirent => dirent.name !== 'layout.js' && dirent.name !== 'page.js')
    .map(dirent => dirent.name);

  return dirs.map(slug => {
    // Try to read the MDX file to extract title and date
    const mdxPath = path.join(blogDir, slug, 'page.mdx');
    let title = slug;
    let date = '2000-01-01'; // Default date if none is provided

    if (fs.existsSync(mdxPath)) {
      const content = fs.readFileSync(mdxPath, 'utf8');

      // Extract frontmatter
      const frontmatter = extractFrontmatter(content);

      // Use frontmatter title or extract from content
      if (frontmatter.title) {
        title = frontmatter.title;
      } else {
        // Extract title from first heading if no frontmatter title
        const titleMatch = content.match(/^#\s+(.*)$/m);
        if (titleMatch) {
          title = titleMatch[1];
        }
      }

      // Use frontmatter date if available
      if (frontmatter.date) {
        date = frontmatter.date;
      }
    }

    return {
      slug,
      title,
      date
    };
  })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <div className="max-w-2xl mx-auto px-6 py-8">
      <div className="flex gap-4 mb-8">
        <Link
          href="/"
          className="flex px-4 py-1 border border-slate-400 rounded-3xl w-max items-center gap-2 hover:bg-indigo-400 group hover:text-white"
        >
          <ArrowNarrowLeftIcon className="w-4 opacity-30 group-hover:opacity-80" />
          <p className="opacity-50 group-hover:opacity-80">Home</p>
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-8">Blog</h1>

      {posts.length === 0 ? (
        <Card>
          <p className="text-gray-500">No blog posts yet. Check back soon!</p>
        </Card>
      ) : (
        <div className="space-y-4">
          {posts.map(post => (
            <Link href={`/blog/${post.slug}`} key={post.slug}>
              <Card className="hover:shadow-md transition-shadow duration-200">
                <h2 className="text-xl font-medium mb-2">{post.title}</h2>
                <div className="text-gray-500 text-sm">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
} 