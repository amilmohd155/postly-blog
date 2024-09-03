import { posts } from "#site/content";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

export default function BlogsPage() {
  const allBlogs = posts;

  return (
    <article className="px-5 md:p-0">
      <section>
        <ul className="flex flex-col gap-4">
          {allBlogs.map((blog) => (
            <li key={blog.slug}>
              <Link href={`/${blog.slug}`} className="group">
                <article className="grid md:grid-cols-[1fr,3fr,auto] rounded group-hover:md:shadow-md dark:bg-secodary-light bg-secodary-dark">
                  <Image
                    src={blog.cover}
                    alt={`Cover image for ${blog.title}`}
                    width={512}
                    height={100}
                    className="aspect-video rounded-t md:rounded-l object-cover min-h-full"
                  />

                  <div className="grid grid-rows-[auto,1fr,auto] px-5 py-3">
                    <header>
                      <h2 className="text-lg font-semibold">{blog.title}</h2>
                    </header>

                    <p className="hidden md:block py-2 text-base">
                      {blog.description}
                    </p>

                    <footer className="flex flex-col md:flex-row text-sm md:justify-between">
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
