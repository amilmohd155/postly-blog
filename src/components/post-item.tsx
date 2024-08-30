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
      <span className="hidden lg:group-hover/link:block absolute top-0 right-0 left-0 bottom-0 bg-black/30 rounded" />
      <div className="flex flex-col gap-5 justify-between group-hover/link:scale-95 transition-transform ease-in-out duration-75">
        <Image
          alt="image"
          src={cover}
          width={200}
          height={200}
          loading="lazy"
          className="w-full h-[237px] object-cover rounded-md md:rounded-lg"
        />
        <h2 className="text-2xl border-t border-b border-black/10 dark:border-white/10 py-5 capitalize">
          {title}
        </h2>
        {description && <p className="text-sm">{description}</p>}
        <div className="flex flex-row gap-2 text-sm text-primary-dark/70 dark:text-primary-light/70">
          {tags.map((tag) => (
            <p key={tag}>{`#${tag}`}</p>
          ))}
        </div>
      </div>
    </Link>
  );
}
