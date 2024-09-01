import { posts } from "#site/content";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

export default function BlogsPage() {
  const allBlogs = posts;

  return (
    <article className="p-5 md:p-0">
      <section className="mt-12 md:mt-0 pb-5 text-center">
        <h1 className="text-2xl font-semibold bg-gradient-to-tl from-blue-600 via-rose-400 to-indigo-400 inline-block text-transparent bg-clip-text uppercase">
          All blogs
        </h1>
      </section>
      <section>
        <ul>
          {allBlogs.map((blog) => (
            <li key={blog.slug}>
              <Link href={`/${blog.slug}`}>
                <article className="px-2 py-1 md:p-3 border border-secodary-dark dark:border-secodary-dark rounded my-5">
                  <h2 className="text-lg font-semibold">{blog.title}</h2>

                  <h3 className="hidden md:block py-2 text-base">
                    {blog.description}
                  </h3>
                  <section className="flex flex-col md:flex-row text-sm md:justify-between">
                    <p className="text-sm">
                      Written by <strong>{blog.author}</strong>
                    </p>
                    <p className="text-sm">
                      Published on {` `}
                      <time dateTime={formatDate(blog.date)}>
                        {formatDate(blog.date)}
                      </time>
                    </p>
                  </section>
                </article>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
