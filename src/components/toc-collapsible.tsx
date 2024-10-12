"use client";

import { useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./collapsible";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { TocEntry } from "@stefanprobst/rehype-extract-toc";
import { ToC } from "./toc";
import { cn } from "@/lib/utils";

export const TocCollapsible = ({
  tableOfContents,
  headerTags,
}: {
  tableOfContents: TocEntry[];
  headerTags: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible
      open={open}
      onOpenChange={setOpen}
      className="space-y-2 md:hidden"
    >
      <CollapsibleTrigger asChild>
        <button className="flex w-full items-center justify-between rounded-full border border-primary px-3 py-1 font-semibold">
          <span>Table of Contents</span>
          <MdOutlineKeyboardArrowDown
            className={cn(
              "h-6 w-6 transform transition-transform duration-300",
              open ? "rotate-180" : "rotate-0",
            )}
          />
        </button>
      </CollapsibleTrigger>
      <CollapsibleContent className="CollapsibleContent">
        <ul className="ml-5 flex list-outside list-none flex-col space-y-2">
          {tableOfContents.map((toc) => (
            <li key={toc.id}>
              <ToC toc={toc} active={headerTags === toc.id} />
            </li>
          ))}
        </ul>
      </CollapsibleContent>
    </Collapsible>
  );
};
