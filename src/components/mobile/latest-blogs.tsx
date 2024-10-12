"use client";

import { Post } from "#site/content";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Tag } from "../tags";
import { cn, formatDate } from "@/lib/utils";

const MobileLatestBlogs = ({ posts }: { posts: Post[] }) => {
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

export default MobileLatestBlogs;
