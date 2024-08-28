import Link from "next/link";
import Image from "next/image";

export default function Post({
  id,
  image,
  title,
  caption,
  tags,
}: {
  id: string;
  image: string;
  title: string;
  caption: string;
  tags: string[];
}) {
  return (
    <Link
      href={`/blog/${id}`}
      className="relative min-w-full group/link px-4 md:px-0"
      key={id}
    >
      <span className="hidden lg:group-hover/link:block absolute top-0 right-0 left-0 bottom-0 bg-black/30 rounded" />
      <div className="flex flex-col gap-5 justify-between group-hover/link:scale-95 transition-transform ease-in-out duration-75">
        <Image
          alt="image"
          src={image}
          width={200}
          height={200}
          loading="lazy"
          className="w-full h-[237px] object-cover rounded-md md:rounded-lg"
        />
        <h2 className="text-2xl border-t border-b border-black dark:border-white py-5 capitalize">
          {title}
        </h2>
        <p className="text-sm">{caption}</p>
        <div className="flex flex-row gap-2 text-sm text-primary-dark/70 dark:text-primary-light/70">
          {tags.map((tag) => (
            <p key={tag}>{`#${tag}`}</p>
          ))}
        </div>
      </div>
    </Link>
  );
}
