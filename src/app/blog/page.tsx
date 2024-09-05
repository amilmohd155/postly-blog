import { posts } from "#site/content";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs",
};

export default function BlogsPage() {
  const allBlogs = posts;

  return (
    <article className="px-5 md:p-0">
      <header className="hidden py-5 text-xl text-primary-dark dark:text-primary-light md:flex">
        All Blogs
      </header>
      <section className="">
        <ul className="flex flex-col gap-4">
          {allBlogs.map((blog) => (
            <li key={blog.slug}>
              <Link href={`/${blog.slug}`} className="group">
                <article className="grid rounded bg-secodary-dark dark:bg-secodary-light md:grid-cols-[1fr,3fr,auto] group-hover:md:shadow-md">
                  <Image
                    src={blog.cover}
                    alt={`Cover image for ${blog.title}`}
                    width={512}
                    height={100}
                    className="aspect-video min-h-full rounded-t object-cover md:rounded-l"
                  />

                  <div className="grid grid-rows-[auto,1fr,auto] px-5 py-3">
                    <header>
                      <h2 className="text-lg font-semibold">{blog.title}</h2>
                    </header>

                    <p className="hidden py-2 text-base md:block">
                      {blog.description}
                    </p>

                    <footer className="flex flex-col text-sm md:flex-row md:justify-between">
                      <p className="text-sm">
                        Written by <strong>{blog.author}</strong>
                      </p>
                      <p className="text-sm">
                        Published on {` `}
                        <time dateTime={formatDate(blog.date)}>
                          {formatDate(blog.date)}
                        </time>
                      </p>
                    </footer>
                  </div>
                </article>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
