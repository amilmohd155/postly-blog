import Image from "next/image";
import { notFound, useRouter } from "next/navigation";
import { MdArrowBack, MdBackHand } from "react-icons/md";
import { posts } from "#site/content";

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

export default async function BlogPage({ params }: BlogPageProps) {
  const blog = await getBlogFromParams(params);

  if (!blog || !blog.published) {
    notFound();
  }
  return (
    <main className="flex-1 max-h-full overflow-hidden">
      <article className="flex-1">
        <Image
          src={blog.cover}
          alt="image"
          width={400}
          height={400}
          className="w-full h-60 md:max-h-52 md:object-cover md:rounded-lg"
        />
        <section className="p-5 md:p-0 ">
          <h1>{blog.title}</h1>
          <h2>{blog.description}</h2>
          <section className="flex justify-between text-sm py-5">
            <p className="">
              Written by <span className="font-semibold">{blog.author}</span>
            </p>
            <p>{}</p>
          </section>
          <hr />
          <article></article>
        </section>
      </article>
    </main>
  );
}
