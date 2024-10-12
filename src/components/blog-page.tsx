"use client";

import { Post } from "#site/content";
import { formatDate } from "@/lib/utils";
import { Toc } from "@stefanprobst/rehype-extract-toc";
import { MDXComponent } from "./mdx-component";
import { CopyToClipboard, SocialShare } from "./social-share";
import { ToC, GoTopButton } from "./toc";
import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { MdArrowBack, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useRouter } from "next/navigation";
import { TocCollapsible } from "./toc-collapsible";

type BlogPageProps = {
  blog: Post;
  tableOfContents: Toc;
};

export const BlogPageComponent = ({ blog, tableOfContents }: BlogPageProps) => {
  const parentRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [headerTags, setHeaderTags] = useState<string>("");

  const router = useRouter();

  useGSAP(
    (context, contextSafe) => {
      gsap.registerPlugin(useGSAP, ScrollTrigger);
      //   const headers = contentRef.current?.querySelectorAll("h1, h2, h3")!;

      const headers = gsap.utils.toArray<Element>(
        " h2, h3, h4",
        contentRef.current,
      );

      headers.forEach((header) => {
        ScrollTrigger.create({
          scroller: parentRef.current,
          trigger: header,
          start: "top center",
          end: "center bottom",
          // markers: true,
          onEnter: () => {
            setHeaderTags(header.id);
          },
          onEnterBack: () => {
            setHeaderTags(header.id);
          },
        });
      });
    },
    { dependencies: [parentRef, contentRef, headerTags], scope: parentRef },
  );

  return (
    <main className="mx-4 mb-4 grid grid-cols-1 space-y-2 overflow-hidden pt-5 md:grid-cols-6 md:grid-rows-1 md:gap-3 md:space-y-0 md:pt-0">
      <article className="col-span-1 row-span-1 flex-1 space-y-5 rounded-lg border border-border p-4 transition-all duration-700 md:col-span-2">
        <div className="relative">
          <button
            className="absolute left-0 top-0 rounded-full border p-1 text-2xl md:hidden"
            onClick={() => router.push("/")}
            aria-label="Go back"
          >
            <MdArrowBack />
          </button>
          <CopyToClipboard url={blog.slug} />
        </div>
        <SocialShare
          className="flex flex-row justify-evenly px-4 py-2 text-center"
          url={blog.slug}
        />
        {tableOfContents.length > 0 && (
          <>
            <section className="hidden space-y-5 md:block">
              <div className="flex items-center justify-between rounded-full border border-primary px-3 py-1 font-semibold">
                <h1>Table of Contents</h1>
              </div>

              <ul className="ml-5 flex list-outside list-none flex-col space-y-2">
                {tableOfContents.map((toc) => (
                  <ToC key={toc.id} toc={toc} active={headerTags === toc.id} />
                ))}
              </ul>
            </section>
            <TocCollapsible
              tableOfContents={tableOfContents}
              headerTags={headerTags}
            />
          </>
        )}
      </article>
      <article
        id="content"
        ref={parentRef}
        className="prose-sm relative col-span-1 row-span-1 !max-w-none overflow-y-auto overflow-x-hidden rounded-lg border border-border p-4 scrollbar-thin scrollbar-track-rounded-full scrollbar-thumb-rounded-full dark:prose-invert md:prose md:col-span-4"
      >
        <div className="relative h-[80%] w-full rounded-lg bg-black/80 dark:bg-transparent">
          <Image
            src={blog.cover}
            alt={`Image`}
            width={400}
            height={400}
            className="not-prose h-full w-full rounded-lg object-cover mix-blend-overlay"
          />
          <section className="absolute inset-0 flex h-full w-full flex-col justify-end px-5">
            <h3 className="max-w-fit rounded-lg bg-primary px-2 !text-foreground-invert">
              {blog.title}
            </h3>
            <h6 className="rounded-lg bg-primary px-2 text-primary-foreground">
              {blog.description}
            </h6>
            <time
              dateTime={formatDate(blog.date)}
              className="py-3 font-mono text-sm text-muted-foreground"
            >
              {formatDate(blog.date)}
            </time>
          </section>
        </div>
        <hr className="!border-border/50" />
        <div ref={contentRef} className="pb-12 md:pb-0">
          <MDXComponent code={blog.body} />
        </div>
        <GoTopButton />
      </article>
    </main>
  );
};
