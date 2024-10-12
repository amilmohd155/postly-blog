import { Post, posts } from "#site/content";
import MobileLatestBlogs, { MLB } from "@/components/mobile/latest-blogs";
import { cn, formatDate, sortPosts } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

export default function Home() {
  const latestPosts = sortPosts([...posts, ...posts].slice(0, 4));

  const getColSpan = (index: number): string => {
    switch (index) {
      case 0:
        return "lg:col-span-2 lg:row-span-2 md:col-span-2 md:row-span- bg-[#ded6c4]";
      case 1:
        return "lg:col-span-4 lg:row-span-1 md:col-span-2 md:row-span-1 bg-[#807d5f]";
      case 2:
        return "lg:col-span-2 lg:row-span-1 md:col-span-1 md:row-span-1 bg-[#85624d]";
      case 3:
        return "lg:col-span-2 lg:row-span-1 md:col-span-1 md:row-span-1 bg-[#b2a48e]";
      default:
        return "lg:col-span-2 lg:row-span-1 md:col-span-1 md:row-span-1 bg-[#ded6c4]";
    }
  };

  const getPostItem = (post: Post, index: number) => {
    switch (index) {
      case 0:
        return <PostItem01 post={post} />;
      case 1:
        return <PostItem02 post={post} />;
      case 2:
        return <PostItem03 post={post} />;
      case 3:
        return <PostItem04 post={post} />;
      default:
        return <PostItem01 post={post} />;
    }
  };

  return (
    <>
      {/* Mobile Top Blogs */}
      {/* <MobileLatestBlogs posts={latestPosts} /> */}
      <MLB posts={latestPosts} />
      <main className="hidden flex-1 text-foreground dark:text-foreground-invert md:flex lg:overflow-hidden">
        {/* Desktop Top blogs */}
        <section className="mb-5 grid w-full grid-cols-2 grid-rows-2 gap-4 px-4 lg:max-h-full lg:grid-cols-6 lg:grid-rows-2">
          {latestPosts.map((post, index) => (
            <article
              key={post.slug}
              className={cn(
                "flex flex-col gap-y-3 rounded-lg",
                getColSpan(index),
              )}
            >
              {getPostItem(post, index)}
              <PostFooter href={post.slug} />
            </article>
          ))}
        </section>
      </main>
    </>
  );
}

const PostFooter = ({ href }: { href: string }) => {
  return (
    <footer className="border-t border-black">
      <Link
        href={`/${href}`}
        className="group flex w-full flex-row items-center justify-between px-4 py-4 uppercase"
      >
        <span className="relative">
          <span>Read more</span>
          <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-black transition-all group-hover:w-full" />
        </span>
        <FaArrowRight className="-translate-x-2 transition-transform duration-75 ease-in-out group-hover:translate-x-0" />
      </Link>
    </footer>
  );
};

const PostItem01 = ({ post }: { post: Post }) => {
  return (
    <>
      <div className="space-y-1 px-4 py-3 !pt-7">
        <time
          dateTime="2024-01-09"
          className="rounded-full border border-black px-1"
        >
          {formatDate(post.date)}
        </time>
        <h2 className="text-xl font-semibold">{post.title}</h2>
        <p className="line-clamp-3">{post.description}</p>
      </div>
      <div className="relative mx-4 my-3 flex-1 overflow-hidden rounded-xl">
        <Image
          src={post.cover}
          alt={post.title}
          className="relative z-0 w-full overflow-hidden rounded-xl object-cover object-bottom transition-all duration-500 ease-in-out hover:scale-110 md:h-40 lg:h-full"
        />
      </div>
    </>
  );
};

const PostItem02 = ({ post }: { post: Post }) => {
  return (
    <div className="flex flex-1 flex-row items-center gap-x-5 p-4">
      <div className="flex-1 space-y-1">
        <time
          dateTime="2024-01-09"
          className="rounded-full border border-black px-1"
        >
          {formatDate(post.date)}
        </time>
        <h2 className="text-2xl font-semibold">{post.title}</h2>
        <p className="line-clamp-3">{post.description}</p>
      </div>
      <div className="relative h-full flex-[0.65] overflow-hidden rounded-xl">
        <Image
          src={post.cover}
          alt={post.title}
          className="relative z-0 h-full w-full rounded-xl object-cover transition-all duration-500 ease-in-out hover:scale-110"
        />
      </div>
    </div>
  );
};

const PostItem03 = ({ post }: { post: Post }) => {
  return (
    <>
      <div className="relative mx-4 mt-4 h-[40%] overflow-hidden rounded-xl">
        <Image
          src={post.cover}
          alt={post.title}
          className="relative z-0 h-full w-full rounded-xl object-cover transition-all duration-500 ease-in-out hover:scale-110"
        />
      </div>

      <div className="flex-1 px-4">
        <h2 className="text-lg font-semibold">{post.title}</h2>
        <p className="line-clamp-3">{post.description}</p>
      </div>
    </>
  );
};

const PostItem04 = ({ post }: { post: Post }) => {
  return (
    <>
      <div className="flex flex-row items-start justify-between gap-x-3 px-4 pt-4">
        <time
          dateTime="2024-01-09"
          className="rounded-full border border-black px-1"
        >
          {formatDate(post.date)}
        </time>
        <div className="relative overflow-hidden rounded-full">
          <Image
            src={post.cover}
            alt={post.title}
            className="relative z-0 h-20 w-20 scale-150 rounded-full object-cover transition-all duration-500 ease-in-out hover:scale-100"
          />
        </div>
      </div>
      <div className="flex-1 space-y-2 px-4">
        <h2 className="w-[85%] text-lg font-semibold">{post.title}</h2>
        <p className="line-clamp-3">{post.description}</p>
      </div>
    </>
  );
};
