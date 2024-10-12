"use client";

import { useMotionValue, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import PostItem from "@/components/mobile/post-item";
import { Post } from "#site/content";
import ProgessBar from "../progress-bar";
import gsap from "gsap";
import { Draggable, InertiaPlugin } from "gsap/all";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { title } from "process";
import React from "react";
import Image from "next/image";
import { Tag } from "../tags";
import { cn, formatDate } from "@/lib/utils";

export default function MobileLatestBlogs({ posts }: { posts: Post[] }) {
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
    <main className="h-full w-full overflow-hidden md:hidden">
      {/* Progress bar */}
      <ProgessBar width={((blogIndex + 1) / postsLength) * 100} />

      {/* Top Blogs */}
      <section className="relative mb-5 md:hidden">
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
    </main>
  );
}

gsap.registerPlugin(Draggable, InertiaPlugin, useGSAP);

export const MLB = ({ posts }: { posts: Post[] }) => {
  return (
    <main className="flex flex-col gap-y-2 px-2 pb-5 md:hidden">
      {posts.map(
        ({ slug, cover, title, description, tags, slugAsParams, date }) => (
          <Link href={`/${slug}`} key={slugAsParams}>
            <article
              aria-labelledby={`article-title-${title}`}
              className="grid max-h-fit grid-cols-10 gap-x-3 rounded-md border border-border/50 p-1 text-sm transition-transform duration-75 ease-in-out"
            >
              <Image
                alt="image"
                src={cover}
                width={200}
                height={200}
                priority
                className="col-span-4 h-full max-h-[160px] rounded-md object-cover"
              />

              <section className="col-span-6 grid grid-rows-[auto,1fr,auto] gap-y-2 py-4">
                <p className="font-mono text-xs text-primary/60">
                  {formatDate(date)}
                </p>

                <h2
                  id={`article-title-${title}`}
                  className={cn(title.length > 40 ? "text-xs" : "text-sm")}
                >
                  {title}
                </h2>
                {/* {description && (
                <p className="my-2 line-clamp-2 leading-normal text-muted-foreground">
                  {description}
                </p>
              )} */}
                {tags && (
                  <div className="flex flex-wrap gap-1 !text-xs">
                    {tags.slice(0, 3).map((tag) => (
                      <Tag
                        tag={tag}
                        key={tag}
                        active={false}
                        showIcon={false}
                        className="py-1"
                      />
                    ))}
                  </div>
                )}
              </section>
            </article>
          </Link>
        ),
      )}
    </main>
  );
};
