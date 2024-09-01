import { posts } from "#site/content";
import HeroSection from "@/components/hero";
import TopBlogs from "@/components/mobile/top-blogs";
import PostItem from "@/components/post-item";
import { sortPosts } from "@/lib/utils";

export default function Home() {
  const displayPosts = sortPosts(posts);

  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Mobile Top Blogs */}
      <TopBlogs posts={displayPosts} />

      {/* Desktop Top blogs */}
      <section className="hidden md:grid md:grid-cols-2 md:gap-5">
        {displayPosts.map((post) => (
          <PostItem {...post} key={post.slugAsParams} />
        ))}
      </section>
    </>
  );
}
