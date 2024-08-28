"use client";
import Post from "@/components/Post";
import { useEffect, useRef, useState } from "react";
import { Blogs } from "@/data/blogs";

export default function Home() {
  const [scrollX, setScrollX] = useState(0);
  const scrollRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const currentScrollX = scrollRef.current.scrollLeft;
        const windowWidth = window.outerWidth;

        if (currentScrollX < windowWidth / 5) {
          scrollRef.current.scrollLeft = 0;
        } else {
          const multiple = Math.floor(currentScrollX / windowWidth);
          const newScrollX =
            currentScrollX < multiple * windowWidth + windowWidth / 2
              ? multiple * windowWidth
              : (multiple + 1) * windowWidth;
          scrollRef.current.scrollLeft = newScrollX;
        }
      }
    };

    const element = scrollRef.current;

    if (element) {
      element.addEventListener("scrollend", handleScroll);
      // console.log(window.innerWidth);
    }

    return () => {
      if (element) {
        element.removeEventListener("scrollend", handleScroll);
      }
    };
  });

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
        {Blogs.map((blog) => (
          <Post {...blog} />
        ))}
      </section>
    </main>
  );
}
