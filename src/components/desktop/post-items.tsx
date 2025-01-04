import { Post } from "#site/content";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";

const PostFooter = ({ href }: { href: string }) => {
  return (
    <footer className="z-10 border-t border-border/50 text-sm">
      <Link
        href={`/${href}`}
        className="group flex w-full flex-row items-center justify-between px-4 py-3"
      >
        <span className="relative">
          <span>Read more</span>
          <span className="absolute -bottom-1 left-0 h-px w-0 bg-border/30 transition-all group-hover:w-full" />
        </span>
        <FaArrowRight className="-translate-x-2 transition-transform duration-75 ease-in-out group-hover:translate-x-0" />
      </Link>
    </footer>
  );
};

const PostItem01 = ({ post }: { post: Post }) => {
  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <div className="space-y-1 px-4 py-3 !pt-7">
        <time
          dateTime="2024-01-09"
          className="rounded-full border border-black px-3"
        >
          {formatDate(post.date)}
        </time>
        <h2 className="text-xl font-semibold">{post.title}</h2>
        <p className="line-clamp-5">{post.description}</p>
      </div>
      <div className="relative mx-4 my-3 flex-1 overflow-hidden rounded-lg">
        <Image
          src={post.cover}
          alt={post.title}
          className="relative z-0 h-full w-full overflow-hidden rounded-lg object-cover object-bottom transition-all duration-500 ease-in-out hover:scale-110 md:h-40 lg:h-full"
        />
      </div>
    </div>
  );
};

const PostItem02 = ({ post }: { post: Post }) => {
  return (
    <div className="flex flex-1 flex-row items-center gap-x-5 overflow-hidden p-4">
      <div className="flex-1 space-y-1">
        <time
          dateTime="2024-01-09"
          className="rounded-full border border-black px-3"
        >
          {formatDate(post.date)}
        </time>
        <h2 className="text-2xl font-semibold">{post.title}</h2>
        <p className="line-clamp-3">{post.description}</p>
      </div>
      <div className="relative h-full flex-[0.65] overflow-hidden rounded-lg">
        <Image
          src={post.cover}
          alt={post.title}
          className="relative z-0 h-full w-full rounded-lg object-cover transition-all duration-500 ease-in-out hover:scale-110"
        />
      </div>
    </div>
  );
};

const PostItem03 = ({ post }: { post: Post }) => {
  return (
    <div className="flex-1 overflow-hidden">
      <div className="relative mx-4 mt-4 h-[40%] overflow-hidden rounded-lg">
        <Image
          src={post.cover}
          alt={post.title}
          className="relative z-0 h-full w-full rounded-lg object-cover transition-all duration-500 ease-in-out hover:scale-110"
        />
        <time
          dateTime="2024-01-09"
          className="absolute bottom-3 left-3 z-10 rounded-full bg-border/30 px-3 text-foreground-invert dark:text-foreground"
        >
          {formatDate(post.date)}
        </time>
      </div>

      <div className="flex-1 px-4">
        <h2 className="text-lg font-semibold">{post.title}</h2>
        <p className="line-clamp-5">{post.description}</p>
      </div>
    </div>
  );
};

const PostItem04 = ({ post }: { post: Post }) => {
  return (
    <div className="relative flex-1 space-y-2 overflow-hidden p-4 pb-0">
      <div className="flex flex-row-reverse items-center justify-between">
        <div className="overflow-hidden rounded-full">
          <Image
            src={post.cover}
            alt={post.title}
            className="z-0 h-20 w-20 scale-150 rounded-full object-cover transition-all duration-500 ease-in-out hover:scale-100"
          />
        </div>
        <section>
          <time
            dateTime="2024-01-09"
            className="rounded-full border border-black px-3"
          >
            {formatDate(post.date)}
          </time>
          <h2 className="w-[75%] text-lg font-semibold">{post.title}</h2>
        </section>
      </div>
      <p className="line-clamp-3">{post.description}</p>
    </div>
  );
};

export { PostItem01, PostItem02, PostItem03, PostItem04, PostFooter };
