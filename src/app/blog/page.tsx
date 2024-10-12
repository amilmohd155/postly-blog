import { cn, formatDate } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { MdArrowOutward } from "react-icons/md";
import { SearchInput } from "@/components/search-input";
import { Pagination } from "@/components/pagination";
import { Tag, Tags } from "@/components/tags";
import { nameFilter } from "@/lib/filters";
import { Post, posts } from "#site/content";

export const metadata: Metadata = {
  title: "Blogs",
};

const testData = [
  {
    slug: "young",
    title: "Check easy receive past order experience fine all.",
    date: "2021-11-26",
    cover: {
      src: "https://picsum.photos/200",
      width: 200,
      height: 200,
      blurDataURL: "",
      blurHeight: 0,
      blurWidth: 0,
    },
    body: "Discussion whose scene still enter town expert image. Section only charge whom present from.",
    description:
      "Thought research catch thousand fill administration American wide.",
    tags: ["hope", "expert", "study", "travel", "hope"],
  },
  {
    slug: "car-rate-understand",
    title: "Approach today start partner win one.",
    date: "2005-04-28",
    cover: {
      src: "https://picsum.photos/200",
      width: 200,
      height: 200,
      blurDataURL: "",
      blurHeight: 0,
      blurWidth: 0,
    },
    body: "Term lead against program either region life contain.",
    description:
      "Thought research catch thousand fill administration American wide.",
    tags: ["trade", "current", "spend", "popular"],
  },
  {
    slug: "relationship-every",
    title: "Sport technology again history military now chair focus.",
    date: "2019-02-28",
    cover: {
      src: "https://picsum.photos/200",
      width: 200,
      height: 200,
      blurDataURL: "",
      blurHeight: 0,
      blurWidth: 0,
    },
    body: "Measure church institution pass. Already staff point story know.",
    description: "Effect can produce recent bit around head.",
    tags: ["organization", "fine"],
  },
  {
    slug: "cold-experience",
    title: "Participant blue station fast talk suffer.",
    date: "1973-11-12",
    cover: {
      src: "https://picsum.photos/200",
      width: 200,
      height: 200,
      blurDataURL: "",
      blurHeight: 0,
      blurWidth: 0,
    },
    body: "Simply education deep produce purpose. Year economic even.",
    description: "Home you might enjoy each best allow short ground.",
    tags: ["official", "ground"],
  },
  {
    slug: "pay-try-all",
    title: "American finish word who road firm where.",
    date: "2005-05-08",
    cover: {
      src: "https://picsum.photos/200",
      width: 200,
      height: 200,
      blurDataURL: "",
      blurHeight: 0,
      blurWidth: 0,
    },
    body: "Specific here simple voice purpose cup. Physical we window film operation.",
    description:
      "Thought research catch thousand fill administration American wide.",
    tags: ["already", "position", "store"],
  },
  {
    slug: "early-eat-find",
    title: "Wide return need tree.",
    date: "2013-02-22",
    cover: {
      src: "https://picsum.photos/200",
      width: 200,
      height: 200,
      blurDataURL: "",
      blurHeight: 0,
      blurWidth: 0,
    },
    body: "Best guy build.\nGood may number.\nDinner according good author.",
    description:
      "Person yourself concern buy tonight yes candidate employee skin expect.",
    tags: ["thousand"],
  },
  {
    slug: "political-check",
    title: "Local forget anything wind what such could.",
    date: "1970-06-02",
    cover: {
      src: "https://picsum.photos/200",
      width: 200,
      height: 200,
      blurDataURL: "",
      blurHeight: 0,
      blurWidth: 0,
    },
    body: "Walk arrive ok fear keep. Opportunity sometimes lawyer arm plant.",
    description:
      "Thought research catch thousand fill administration American wide.",
    tags: [],
  },
  {
    slug: "trouble-whole",
    title: "Back teach serious. Soldier person return should produce watch.",
    date: "1997-12-01",
    cover: {
      src: "https://picsum.photos/200",
      width: 200,
      height: 200,
      blurDataURL: "",
      blurHeight: 0,
      blurWidth: 0,
    },
    body: "Price lose argue responsibility standard watch up.",
    description: "Hope floor against end although board.",
    tags: ["board", "standard"],
  },
  {
    slug: "phone-husband-break",
    title: "Window edge though form smile listen late.",
    date: "2023-07-07",
    cover: {
      src: "https://picsum.photos/200",
      width: 200,
      height: 200,
      blurDataURL: "",
      blurHeight: 0,
      blurWidth: 0,
    },
    body: "Send win discussion population. Good reveal serve around issue.",
    description: "Nothing whose country improve knowledge upon home strategy.",
    tags: ["issue", "strategy"],
  },
  {
    slug: "friend-fire-apply",
    title: "Arrive special oil hotel music money account open work.",
    date: "1989-10-29",
    cover: {
      src: "https://picsum.photos/200",
      width: 200,
      height: 200,
      blurDataURL: "",
      blurHeight: 0,
      blurWidth: 0,
    },
    body: "Mouth such recently reason each. Summer kitchen bit me.",
    description: "Card fear husband green nation population.",
    tags: ["possible"],
  },
  {
    slug: "structure-team-green",
    title: "Foreign green college allow need. Serve dog security.",
    date: "2020-04-19",
    cover: {
      src: "https://picsum.photos/200",
      width: 200,
      height: 200,
      blurDataURL: "",
      blurHeight: 0,
      blurWidth: 0,
    },
    body: "Mind level exactly. Question look through dinner.",
    description:
      "Long toward site spend media. Task technology reflect home media social.",
    tags: ["media", "policy"],
  },
  {
    slug: "husband-light-eye",
    title: "Court approach board within right prevent.",
    date: "2000-12-19",
    cover: {
      src: "https://picsum.photos/200",
      width: 200,
      height: 200,
      blurDataURL: "",
      blurHeight: 0,
      blurWidth: 0,
    },
    body: "Clear money miss. Effect pay near young image wide alone special.",
    description: "Alone special front peace.",
    tags: [],
  },
  {
    slug: "activity-student-read",
    title: "Religious including concern government strategy full.",
    date: "2011-08-30",
    cover: {
      src: "https://picsum.photos/200",
      width: 200,
      height: 200,
      blurDataURL: "",
      blurHeight: 0,
      blurWidth: 0,
    },
    body: "Debate trial store ground child plan money. Professor decide mention.",
    description: "Firm step time reach task.",
    tags: ["strategy", "child"],
  },
  {
    slug: "right-situation",
    title: "Attorney top economic success push young eye.",
    date: "2003-03-03",
    cover: {
      src: "https://picsum.photos/200",
      width: 200,
      height: 200,
      blurDataURL: "",
      blurHeight: 0,
      blurWidth: 0,
    },
    body: "Whose player research vote health economy despite family.",
    description: "Nothing project team level better.",
    tags: ["team", "agency"],
  },
  {
    slug: "goal-official",
    title: "Budget whole again subject mission through. Worker minute.",
    date: "2018-09-05",
    cover: {
      src: "https://picsum.photos/200",
      width: 200,
      height: 200,
      blurDataURL: "",
      blurHeight: 0,
      blurWidth: 0,
    },
    body: "Keep home apply at next. Perform wife together near individual artist.",
    description: "Nothing project team level better.",
    tags: ["worker", "mission"],
  },
];

const colors = [
  "#ded6c4",
  "#807d5f",
  "#85624d",
  "#b2a48e",
  "#606C38",
  "#283618",
  "#DDA15E",
] as const;

const MAX_ITEM_PER_PAGE = 4 as const;

export default function BlogsPage({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}) {
  const query = (searchParams["query"] as string) || "";
  const currentPage = Number(searchParams["page"]) || 1;
  const tagsQuery = (searchParams["tags"] as string) || "";

  const start = (currentPage - 1) * MAX_ITEM_PER_PAGE;
  const end = start + MAX_ITEM_PER_PAGE;

  // const totalPosts = posts;
  const totalPosts = posts;

  const tags = Array.from(
    new Set(totalPosts.map((post) => post.tags).flat()),
  ).filter((tag): tag is string => tag !== undefined);

  const blogs = [...totalPosts]
    .filter(nameFilter<(typeof totalPosts)[number]>("title", query))
    .filter(
      (blog) =>
        !tagsQuery ||
        blog.tags?.some((tag) => tagsQuery.split(",")?.includes(tag)),
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <>
      {/* Mobile */}
      <main className="space-y-2 px-5 pb-5 md:hidden">
        <header className="space-y-5 rounded-xl border border-border p-2">
          <h2 className="text-2xl text-primary">
            Stories and Learnings from My Journey
          </h2>
          <SearchInput className="mx-2 text-xl" />
          <div className="my-3 flex-1 overflow-y-auto text-xs">
            <Tags tags={tags} />
          </div>
        </header>

        {/* Pagination */}
        <Pagination
          pageSize={MAX_ITEM_PER_PAGE}
          totalCount={tagsQuery || query ? blogs.length : totalPosts.length}
        />

        <section className="rounded-xl border p-2">
          <ul className="space-y-3">
            {blogs.slice(start, end).map((blog) => (
              <li key={blog.slug}>
                <BlogListItem blog={blog as Post} />
              </li>
            ))}
          </ul>
        </section>
      </main>

      {/* Desktop */}
      <main className="mx-4 mb-5 hidden flex-1 grid-cols-6 grid-rows-1 overflow-hidden md:grid md:gap-x-1 lg:gap-x-3">
        <header className="col-span-2 row-auto flex flex-col rounded-xl border border-border px-4 pb-5 pt-8 dark:bg-transparent lg:px-6 lg:pt-12">
          <h1 className="font-semibold text-foreground md:text-3xl lg:text-5xl">
            Blogs
          </h1>
          <h2 className="mt-2 text-primary md:text-lg lg:text-xl">
            Stories and Learnings from My Journey
          </h2>
          <SearchInput className="my-5 md:flex md:text-sm lg:text-xl" />
          <div className="flex-1 overflow-y-auto text-xs md:mb-2 lg:mb-0">
            <Tags tags={tags} />
          </div>

          {/* Pagination */}
          <Pagination
            pageSize={MAX_ITEM_PER_PAGE}
            totalCount={tagsQuery || query ? blogs.length : totalPosts.length}
          />
        </header>
        <section className="col-span-4 row-span-1 rounded-xl border border-border p-4">
          <ul className="grid h-full grid-cols-4 grid-rows-2 gap-4">
            {blogs.slice(start, end).map((blog) => (
              <li key={blog.slug} className="col-span-2 row-auto">
                <BlogListItem blog={blog as Post} />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}

const BlogListItem = ({ blog }: { blog: Post }) => {
  return (
    <Link href={`/${blog.slug}`} className="group">
      <article className="flex flex-col space-y-1 rounded-lg pb-3 md:h-full group-hover:md:shadow-sm group-hover:md:shadow-gray-600/40">
        <Image
          src={blog.cover}
          alt={`Cover image for ${blog.title}`}
          width={512}
          height={100}
          className="aspect-video h-28 max-h-full rounded-t-lg object-cover"
        />
        <time
          dateTime={formatDate(blog.date)}
          className="px-3 font-mono text-xs font-semibold text-primary"
        >
          {formatDate(blog.date)}
        </time>

        <div className="relative flex flex-1 flex-col justify-between px-3 md:gap-y-1 lg:gap-0">
          <div className="space-y-1">
            <div className="flex flex-row items-start gap-x-3">
              <h2
                className={cn(
                  "flex-1 font-semibold",
                  blog.title.length > 40
                    ? "md:text-sm lg:text-base"
                    : "md:text-base lg:text-lg",
                )}
              >
                {blog.title}
              </h2>
              <MdArrowOutward className="inline-block h-6 w-6 shrink-0 translate-y-px transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none" />
            </div>

            <p className="line-clamp-2 text-sm font-normal text-muted-foreground">
              {blog.description}
            </p>
          </div>

          {blog.tags && (
            <div className="mt-5 flex flex-row gap-2 text-xs md:mt-0 md:overflow-hidden">
              {blog.tags.map((tag) => (
                <Tag
                  key={tag}
                  tag={tag}
                  active={false}
                  effects={false}
                  showIcon={false}
                />
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
};
