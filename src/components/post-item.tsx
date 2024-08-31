import Link from "next/link";
import Image from "next/image";

type PostItemProps = {
  slug: string;
  title: string;
  description?: string;
  date: string;
  published: boolean;
  cover: any;
};

export default function PostItem({
  slug,
  cover,
  title,
  description,
}: // tags = ,
PostItemProps) {
  const id = 1;
  const tags = ["hello", "world"];

  return (
    <Link
      href={`/${slug}`}
      className="relative min-w-full group/link px-4 md:px-0"
      key={id}
    >
      <span className="hidden md:group-hover/link:block absolute top-0 right-0 left-0 bottom-0 rounded-lg bg-gradient-to-tl from-blue-600/50 via-rose-400/50 to-indigo-400/50" />
      <article className="flex flex-col gap-5 justify-between md:group-hover/link:scale-95 transition-transform ease-in-out duration-75 md:rounded-lg rounded-md border md:group-hover/link:border-transparent border-primary-dark/20 pb-2">
        <header>
          <Image
            alt="image"
            src={cover}
            width={200}
            height={200}
            loading="lazy"
            className="w-full h-[237px] object-cover rounded-md md:rounded-lg"
          />
        </header>
        <section className="px-3">
          <h2 className="text-2xl border-t border-b border-black/50 dark:border-white/50 py-2 capitalize">
            {title}
          </h2>
          {description && (
            <p className="text-sm leading-normal my-2">{description}</p>
          )}
          <div className="flex flex-row gap-2 text-sm text-primary-dark/70 dark:text-primary-light/70">
            {tags.map((tag) => (
              <p key={tag}>{`#${tag}`}</p>
            ))}
          </div>
        </section>
      </article>
    </Link>
  );
}
