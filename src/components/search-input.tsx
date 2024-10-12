"use client";

import { cn } from "@/lib/utils";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import { MdArrowForward } from "react-icons/md";
import { useDebouncedCallback } from "use-debounce";

export const SearchInput = ({ className }: { className?: string }) => {
  const [value, setValue] = useState("");

  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (term) {
      params.set("query", term.trim());
    } else {
      params.delete("query");
    }

    router.push(`${pathName}?${params.toString()}`);
  }, 300);

  return (
    <div
      className={cn(
        "relative rounded-full text-foreground ring ring-ring/50 transition-all duration-300 focus-within:ring-ring/80",
        className,
      )}
    >
      <input
        placeholder="Search"
        className="peer w-full rounded-full bg-transparent py-2 pe-14 ps-14 placeholder:text-input-foreground/50 focus-visible:outline-none lg:py-3"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("query")?.toString()}
      />
      <FaSearch className="absolute inset-0 left-5 top-1/2 -translate-y-1/2 cursor-text text-input-foreground/50 transition-colors duration-100 peer-focus-visible:text-input-foreground" />

      <AiOutlineClose
        className={cn(
          "absolute right-5 top-1/2 flex -translate-y-1/2 cursor-pointer text-primary transition-transform duration-300 hover:scale-90",
          value ? "scale-100" : "scale-0",
        )}
        onClick={() => {
          setValue("");
          const params = new URLSearchParams(searchParams);
          params.delete("query");
          router.push(`${pathName}?${params.toString()}`);
        }}
      />
    </div>
  );
};
