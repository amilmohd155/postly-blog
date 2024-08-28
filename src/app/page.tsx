import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { MdMenu } from "react-icons/md";

const Posts = [
  {
    id: "1",
    image: "/image.png",
    title: "How Apple's M1 Chip makes macOS development much less costly",
    caption:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis odit cumque amet sequi quaerat.",
    tags: ["Development", "Management"],
  },
  {
    id: "2",
    image: "/image.png",
    title: "How Apple's M1 Chip makes macOS development much less costly",
    caption:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis odit cumque amet sequi quaerat.",
    tags: ["Development", "Management"],
  },
  {
    id: "3",
    image: "/image.png",
    title: "How Apple's M1 Chip makes macOS development much less costly",
    caption:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis odit cumque amet sequi quaerat.",
    tags: ["Development", "Management"],
  },
  {
    id: "4",
    image: "/image.png",
    title: "How Apple's M1 Chip makes macOS development much less costly",
    caption:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis odit cumque amet sequi quaerat.",
    tags: ["Development", "Management"],
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className="md:px-3 max-h-full overflow-hidden">
        {/* Tabs */}
        <section className="md:hidden block px-4 mb-5">
          <div className="bg-white h-1"></div>
        </section>
        {/* Posts */}
        <section className="flex md:grid md:grid-cols-2 gap-5 overflow-x-scroll no-scrollbar">
          {Posts.map(({ id, image, title, caption, tags }) => (
            <Link
              href={`/blog/${id}`}
              className="relative min-w-full group/link px-4 md:px-0"
              key={title}
            >
              <span className="hidden lg:group-hover/link:block absolute top-0 right-0 left-0 bottom-0 bg-black/30 rounded" />
              <div className="flex flex-col gap-5 justify-between group-hover/link:scale-95 transition-transform ease-in-out duration-75">
                <Image
                  alt="image"
                  src={image}
                  width={200}
                  height={200}
                  loading="lazy"
                  className="w-full"
                />
                <h2 className="text-2xl border-t-2 border-b-2 py-5 capitalize">
                  {title}
                </h2>
                <p className="text-sm">{caption}</p>
                <div className="flex flex-row gap-2 text-sm text-slate-500">
                  {tags.map((tag) => (
                    <>
                      <p>{`#${tag}`}</p>
                      &#8226;
                    </>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </section>
      </main>
    </>
  );
}
