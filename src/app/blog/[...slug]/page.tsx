import Image from "next/image";
import { notFound } from "next/navigation";
import { posts } from "#site/content";
import { MDXComponent } from "@/components/mdx-component";
import "@/style/mdx.css";
import { formatDate } from "@/lib/utils";

type BlogPageProps = {
  params: {
    slug: string[];
  };
};

async function getBlogFromParams(params: BlogPageProps["params"]) {
  const slug = params?.slug?.join("/");

  const blog = posts.find((blog) => blog.slugAsParams === slug);

  return blog;
}

export async function generateStaticParams(): Promise<
  BlogPageProps["params"][]
> {
  return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

export default async function BlogPage({ params }: BlogPageProps) {
  const blog = await getBlogFromParams(params);

  if (!blog || !blog.published) {
    notFound();
  }
  return (
    <article className="flex-1">
      <Image
        src={blog.cover}
        alt={`Image`}
        width={400}
        height={400}
        className="w-full h-60 md:max-h-52 md:object-cover md:rounded-lg"
      />
      <section className="prose-sm md:prose dark:prose-invert !max-w-none p-5 md:p-0 ">
        <h1 className="!mt-10 !mb-2">{blog.title}</h1>
        <h3 className="!my-0 dark:font-thin font-light">{blog.description}</h3>
        <section className="flex flex-col md:flex-row justify-between py-5">
          <p className="!my-0">
            Written by <b>{blog.author}</b>
          </p>
          <p className="!my-0">{formatDate(blog.date)}</p>
        </section>
        <hr className="not-prose h-px bg-gray-500/30 border-0 dark:bg-gray-700" />
        <article className="py-5">
          <MDXComponent code={blog.body} />
        </article>
      </section>
    </article>
  );
}
