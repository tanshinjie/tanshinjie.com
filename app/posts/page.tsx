import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "Posts",
  description: "Notes, thoughts, and reflections.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">My Blog</h1>
      <BlogPosts />
    </section>
  );
}
