import { Link } from "next-view-transitions";

import { formatDate, getBlogPosts } from "app/blogs/utils";

export function BlogPosts() {
  let allBlogs = getBlogPosts();

  return (
    <div className="space-y-6">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="group block transition-all"
            href={`/blogs/${post.slug}`}
          >
            <div className="flex flex-col space-y-1">
              <div className="w-full flex flex-col md:flex-row md:items-baseline space-y-2 md:space-y-0 md:space-x-4">
                <p className="text-sm text-neutral-500 dark:text-neutral-400 font-mono">
                  {formatDate(post.metadata.publishedAt, false)}
                </p>
                <p className="text-neutral-900 dark:text-neutral-100 font-medium group-hover:text-black dark:group-hover:text-white transition-colors">
                  {post.metadata.title}
                </p>
              </div>
            </div>
          </Link>
        ))}
    </div>
  );
}
