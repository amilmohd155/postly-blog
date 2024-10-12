import Link from "next/link";
import Image from "next/image";
import React from "react";

type PostItemProps = {
  slug: string;
  title: string;
  description?: string;
  date: string;
  published: boolean;
  tags?: string[];
  cover: any;
};

export default function PostItem({
  slug,
  cover,
  title,
  description,
  tags,
}: PostItemProps) {
  const id = 1;

  return (
    <Link href={`/${slug}`} className="group/link relative px-4" key={id}>
      <article
        aria-labelledby={`article-title-${title}`}
        className="border-primary-dark/20 grid min-h-full grid-rows-[auto,1fr] gap-5 rounded-md border pb-2 transition-transform duration-75 ease-in-out md:rounded-lg md:group-hover/link:scale-95 md:group-hover/link:border-transparent"
      >
        <header>
          <Image
            alt="image"
            src={cover}
            width={200}
            height={200}
            priority
            className="aspect-video h-[150px] w-full rounded-md object-cover"
          />
        </header>
        <section className="grid grid-rows-[auto,1fr,auto] gap-2 px-3">
          <h2
            id={`article-title-${title}`}
            className="border-b border-t border-black/50 py-2 text-2xl capitalize dark:border-white/50 md:text-xl"
          >
            {title}
          </h2>
          {/* {description && (
            <p className="my-2 text-sm leading-normal">{description}</p>
          )} */}
          {tags && (
            <div className="text-primary-dark/70 dark:text-primary-light/70 flex flex-row gap-2 text-sm">
              {tags.map((tag) => (
                <React.Fragment key={tag}>
                  <span className="sr-only">{`Tag: ${tag}`}</span>
                  <p aria-label={`Tag: ${tag}`}>{`#${tag}`}</p>
                </React.Fragment>
              ))}
            </div>
          )}
        </section>
      </article>
    </Link>
  );
}
