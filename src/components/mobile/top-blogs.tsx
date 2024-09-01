"use client";

import { useMotionValue, motion } from "framer-motion";
import { useState } from "react";
import PostItem from "@/components/post-item";
import { Post } from "#site/content";
import ProgessBar from "../progress-bar";

export default function TopBlogs({ posts }: { posts: Post[] }) {
  const postsLength = posts.length;

  const [blogIndex, setBlogIndex] = useState(0);

  const dragX = useMotionValue(0);

  const onDragEnd = () => {
    const x = dragX.get();
    const dragBuffer = window.innerWidth / 3;

    if (x <= -dragBuffer && blogIndex < postsLength - 1) {
      setBlogIndex((prev) => ++prev);
    } else if (x >= dragBuffer && blogIndex > 0) {
      setBlogIndex((prev) => --prev);
    }
  };

  return (
    <>
      {/* Progress bar */}
      <ProgessBar width={((blogIndex + 1) / postsLength) * 100} />

      {/* Top Blogs */}
      <section className="relative md:hidden mb-5">
        <motion.div
          drag="x"
          dragConstraints={{
            left: 0,
            right: 0,
          }}
          style={{
            x: dragX,
          }}
          animate={{
            translateX: `-${blogIndex * 100}%`,
          }}
          transition={{
            type: "tween",
            ease: "easeInOut",
            duration: "0.8",
          }}
          onDragEnd={onDragEnd}
          className="flex"
        >
          {posts.map((post) => (
            <PostItem {...post} key={post.slugAsParams} />
          ))}
        </motion.div>
      </section>
    </>
  );
}
