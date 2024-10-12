"use client";

import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";

const MAX_TAGS_DEFAULT_SHOWN = 8 as const;

export const Tags = ({ tags }: { tags: string[] }) => {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showMore, setShowMore] = useState(
    tags.length > MAX_TAGS_DEFAULT_SHOWN,
  );

  const handleOnSelectTag = (tag: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");

    const updatedTagsSet = new Set(selectedTags);

    if (updatedTagsSet.has(tag)) {
      updatedTagsSet.delete(tag);
    } else {
      updatedTagsSet.add(tag);
    }

    const updateTags = Array.from(updatedTagsSet);
    setSelectedTags(updateTags);

    updateTags.length > 0
      ? params.set("tags", updateTags.join(","))
      : params.delete("tags");

    router.push(`${pathName}?${params.toString()}`);
  };

  if (tags.length === 0) {
    return null;
  }

  return (
    <div className="flex flex-row flex-wrap items-start gap-x-3 gap-y-2">
      {(showMore ? tags.slice(0, MAX_TAGS_DEFAULT_SHOWN) : tags).map((tag) => (
        <Tag
          key={tag}
          tag={tag}
          active={selectedTags.includes(tag)}
          onSelectTag={handleOnSelectTag}
        />
      ))}
      {tags.length > MAX_TAGS_DEFAULT_SHOWN && (
        <button
          className="flex items-center rounded-full border bg-tag-accent px-2 py-2 text-tag-foreground-invert md:gap-1 lg:gap-2 lg:px-3"
          onClick={() => setShowMore(!showMore)}
        >
          <span>{showMore ? `${tags.length - 8} more` : `Show less`}</span>
        </button>
      )}
    </div>
  );
};

export const Tag = ({
  tag,
  active,
  effects = true,
  showIcon = true,
  onSelectTag,
  className,
}: {
  tag: string;
  active: boolean;
  effects?: boolean;
  showIcon?: boolean;
  onSelectTag?: (tag: string) => void;
  className?: string;
}) => {
  return (
    <button
      className={cn(
        "flex items-center rounded-full border px-2 py-2 capitalize md:gap-1 lg:gap-2 lg:px-3",
        className,
        active ? "bg-tag text-tag-foreground" : "text-tag",
        effects &&
          "transition-all duration-300 hover:scale-95 hover:bg-tag hover:text-tag-foreground",
      )}
      onClick={() => onSelectTag && onSelectTag(tag)}
    >
      {showIcon && (active ? <AiOutlineClose /> : <FaPlus />)}
      <span>{tag}</span>
    </button>
  );
};
