import { Post, posts } from "#site/content";
import {
  PostFooter,
  PostItem01,
  PostItem02,
  PostItem03,
  PostItem04,
} from "@/components/desktop/post-items";
import MobileLatestBlogs from "@/components/mobile/latest-blogs";
import { cn, sortPosts } from "@/lib/utils";

export default function Home() {
  const latestPosts = sortPosts([...posts].slice(0, 4));

  const getColSpan = (index: number): string => {
    switch (index) {
      case 0:
        return "lg:col-span-2 lg:row-span-2 md:col-span-2 md:row-span-2 ";
      case 1:
        return "lg:col-span-4 lg:row-span-1 md:col-span-2 md:row-span-1 ";
      case 2:
        return "lg:col-span-2 lg:row-span-1 md:col-span-1 md:row-span-1";
      case 3:
        return "lg:col-span-2 lg:row-span-1 md:col-span-1 md:row-span-1 ";
      default:
        return "";
    }
  };

  const getPostItem = (post: Post, index: number) => {
    switch (index) {
      case 0:
        return <PostItem01 post={post} />;
      case 1:
        return <PostItem02 post={post} />;
      case 2:
        return <PostItem03 post={post} />;
      case 3:
        return <PostItem04 post={post} />;
      default:
        return null;
    }
  };

  return (
    <>
      {/* Mobile Top Blogs */}
      <MobileLatestBlogs posts={latestPosts} />

      {/* Desktop Top blogs */}
      <main className="hidden flex-1 text-foreground md:flex lg:overflow-hidden">
        <section className="mb-5 grid w-full grid-cols-2 grid-rows-2 gap-2 px-4 lg:max-h-full lg:grid-cols-6 lg:grid-rows-2">
          {latestPosts.map((post, index) => (
            <article
              key={post.slug}
              className={cn(
                "grid grid-rows-1 rounded-lg",
                getColSpan(index),
                "border border-border",
              )}
            >
              {getPostItem(post, index)}
              <PostFooter href={post.slug} />
            </article>
          ))}
        </section>
      </main>
    </>
  );
}
