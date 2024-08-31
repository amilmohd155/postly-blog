"use client";
import PostItem from "@/components/post-item";
import { useEffect, useRef, useState } from "react";
import { Blogs } from "@/data/blogs";
import { posts } from "#site/content";
import useHorizontalCarousel from "@/hooks/useHorizontalCarousel";

export default function Home() {
  const displayPosts = posts;

  const { scrollRef } = useHorizontalCarousel();

  return (
    // <main className="md:px-3 md:pb-10 flex-1 max-h-full overflow-hidden">
    <>
      {/* header */}
      <article className="hidden md:flex  prose dark:prose-invert items-center flex-col min-w-full mb-5 rounded-lg dark:bg-slate-300/10 shadow-md dark:shadow-none py-5">
        <header>
          <h1 className="my-0 bg-gradient-to-tl from-blue-600 via-rose-400 to-indigo-400 inline-block text-transparent bg-clip-text">
            Postly
          </h1>
          <p className="sr-only">Blog title: Postly</p>{" "}
          {/* Optional: Hidden for screen readers */}
        </header>
        <section>
          <h2 className="my-0">This is where I tell stories</h2>
        </section>
        <footer>
          <p className="my-1">
            Created by <strong>Amil Muhammed Hamza</strong>
          </p>
        </footer>
      </article>
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
          <PostItem {...post} key={post.slugAsParams} />
        ))}
      </section>
    </>
    // </main>
  );
}
