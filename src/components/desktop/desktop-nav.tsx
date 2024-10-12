"use client";

import Link from "next/link";
import ThemeSwitch from "../theme-swtich";
import { siteConfig } from "@config/site";
import { HeaderNavLinks } from "@config/nav-links";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function DesktopNav() {
  const pathName = usePathname();

  return (
    <div className="relative z-50 my-2 hidden flex-1 flex-row items-center rounded-full border px-4 py-[1px] text-xl tracking-wide md:mx-4 md:flex">
      <Link href="/" aria-label="Logo" title={siteConfig.name}>
        <span className="postly block px-10 py-2">{siteConfig.name}</span>
      </Link>
      <ul className="flex flex-1 cursor-pointer flex-row items-center gap-x-1 text-sm font-semibold">
        {HeaderNavLinks.map(({ title, href }) => (
          <li key={title}>
            <Link
              href={href}
              aria-label={title}
              title={title}
              className={cn(
                pathName === href
                  ? "bg-primary text-primary-foreground"
                  : "text-primary",
                "rounded-full border px-10 py-2 capitalize hover:bg-primary hover:text-primary-foreground",
              )}
            >
              {title}
            </Link>
          </li>
        ))}
        <li className="absolute right-2 rounded-full border text-sm text-primary hover:bg-primary hover:text-primary-foreground">
          <ThemeSwitch className="p-2" />
        </li>
      </ul>
    </div>
  );
}
