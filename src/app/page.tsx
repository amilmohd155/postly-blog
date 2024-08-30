"use client";
import PostItem from "@/components/post-item";
import { useEffect, useRef, useState } from "react";
import { Blogs } from "@/data/blogs";
import { posts } from "#site/content";
import useHorizontalCarousel from "@/hooks/useHorizontalCarousel";

export default function Home() {
  const displayPosts = posts;

  console.log(
    "🚀 ~ file: page.tsx:37 ~ Home ~ posts[0].updated:",
    posts[0].updated
  );

  const { scrollRef } = useHorizontalCarousel();

  return (
    <main className="md:px-3 max-h-full overflow-hidden">
      {/* Tabs */}
      <section className="md:hidden block px-4 mb-5">
        <div className="dark:bg-white/80 bg-black/80 border-t" />
      </section>
      {/* Posts */}
      <section
        ref={scrollRef}
        className="flex md:grid md:grid-cols-2 md:gap-5 overflow-x-scroll no-scrollbar transition-transform duration-75"
        style={{
          transition: "scroll-left 0.5s ease-in-out",
        }}
      >
        {displayPosts.map((post) => (
          <PostItem {...post} key={post.slug} />
        ))}
      </section>
    </main>
  );
}
