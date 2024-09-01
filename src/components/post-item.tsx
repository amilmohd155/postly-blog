import Link from "next/link";
import Image from "next/image";
import React from "react";

type PostItemProps = {
  slug: string;
  title: string;
  description?: string;
  date: string;
  published: boolean;
  cover: any;
};

export default function PostItem({
  slug,
  cover,
  title,
  description,
}: // tags = ,
PostItemProps) {
  const id = 1;
  const tags = ["hello", "world"];

  return (
    <Link
      href={`/${slug}`}
      className="relative min-w-full max-h-dvh group/link px-4 md:px-0"
      key={id}
    >
      <span className="hidden md:group-hover/link:block absolute top-0 right-0 left-0 bottom-0 rounded-lg bg-gradient-to-tl from-blue-600/50 via-rose-400/50 to-indigo-400/50" />
      <article
        aria-labelledby={`article-title-${title}`}
        className="min-h-full grid grid-rows-[auto,1fr] gap-5 md:group-hover/link:scale-95 transition-transform ease-in-out duration-75 md:rounded-lg rounded-md border md:group-hover/link:border-transparent border-primary-dark/20 pb-2"
      >
        <header>
          <Image
            alt="image"
            src={cover}
            width={200}
            height={200}
            // loading="lazy"
            priority
            className="aspect-video w-full h-[150px] object-cover rounded-md md:rounded-lg"
          />
        </header>
        <section className="px-3 grid grid-rows-[auto,1fr,auto] gap-2">
          <h2
            id={`article-title-${title}`}
            className="text-2xl md:text-xl border-t border-b border-black/50 dark:border-white/50 py-2 capitalize"
          >
            {title}
          </h2>
          {description && (
            <p className="text-sm leading-normal line-clamp-4 md:line-clamp-3 my-2">
              {description}
            </p>
          )}
          <div className="flex flex-row gap-2 text-sm text-primary-dark/70 dark:text-primary-light/70">
            {tags.map((tag) => (
              <React.Fragment key={tag}>
                <span className="sr-only">{`Tag: ${tag}`}</span>
                <p aria-label={`Tag: ${tag}`}>{`#${tag}`}</p>
              </React.Fragment>
            ))}
          </div>
        </section>
      </article>
    </Link>
  );
}
