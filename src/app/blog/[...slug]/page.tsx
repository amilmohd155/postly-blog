import "@/style/mdx.css";
import Image from "next/image";
import { notFound } from "next/navigation";
import { posts } from "#site/content";
import { MDXComponent } from "@/components/mdx-component";
import { formatDate } from "@/lib/utils";
import { Metadata } from "next";

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

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const blog = await getBlogFromParams(params);

  return {
    title: blog?.title,
    description: blog?.description,
    openGraph: {
      title: blog?.title,
      authors: blog?.author,
      images: [
        {
          url: `/api/opengraph/${params.slug.join("/")}`,
        },
      ],
    },
  };
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
        className="h-60 w-full md:max-h-52 md:rounded-lg md:object-cover"
      />
      <section className="prose-sm !max-w-none p-5 dark:prose-invert md:prose md:p-0">
        <h1 className="!mb-2 !mt-0 md:!mt-5">{blog.title}</h1>
        <h3 className="!my-0 font-light dark:font-thin">{blog.description}</h3>
        <section className="flex flex-col justify-between py-5 md:flex-row">
          <p className="!my-0">
            Written by <b>{blog.author}</b>
          </p>
          <p className="!my-0">{formatDate(blog.date)}</p>
        </section>
        <hr className="not-prose h-px border-0 bg-gray-500/30 dark:bg-gray-700" />
        <article className="py-5">
          <MDXComponent code={blog.body} />
        </article>
      </section>
    </article>
  );
}
