"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

type PaginationProps = {
  pageSize: number;
  totalCount: number;
};

export const Pagination = ({ pageSize, totalCount }: PaginationProps) => {
  const pagesCount = Math.ceil(totalCount / pageSize);

  const pathName = usePathname();
  const searchParams = useSearchParams();

  const currentPage = Number(searchParams.get("page")) || 1;

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    return `${pathName}?${params.toString()}`;
  };

  if (pagesCount <= 1) {
    return null;
  }

  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (
    <nav className="mx-auto flex w-full rounded-xl border p-2 text-sm text-primary md:rounded-none md:border-0 md:p-0">
      <ul className="flex w-full flex-row items-center justify-between gap-1">
        {/* Previous button */}
        <li className="flex-1">
          <Link
            aria-disabled={currentPage === 1}
            href={createPageURL(currentPage - 1)}
            className={cn(
              "group flex flex-row items-center justify-start gap-2",
              currentPage === 1
                ? "pointer-events-none text-muted"
                : "cursor-pointer",
            )}
          >
            <FaArrowLeft className="h-4 w-4 transition-transform duration-200 ease-linear group-hover:-translate-x-1" />
            <span className="relative">
              Previous
              <span className="absolute -bottom-1 right-0 h-0.5 w-0 bg-primary transition-all group-hover:w-full" />
            </span>
          </Link>
        </li>
        <li className="flex flex-none items-end gap-1">
          <p className="font-semibold text-primary">
            {currentPage} / {pagesCount}
          </p>
        </li>
        {/* Next button */}
        <li className="flex-1">
          <Link
            href={createPageURL(currentPage + 1)}
            aria-disabled={currentPage === pagesCount}
            className={cn(
              "group flex flex-row items-center justify-end gap-2",
              currentPage === pagesCount
                ? "pointer-events-none text-muted"
                : "cursor-pointer",
            )}
          >
            <span className="relative">
              Next
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all group-hover:w-full" />
            </span>
            <FaArrowRight className="h-4 w-4 transition-transform duration-200 ease-linear group-hover:translate-x-1" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
