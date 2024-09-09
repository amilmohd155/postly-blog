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
    <div className="relative z-50 hidden w-full px-4 py-5 md:block">
      <div className="flex flex-row items-baseline justify-between text-2xl tracking-wide">
        <Link href="/" aria-label="Logo" title={siteConfig.name}>
          <span className="inline-block bg-gradient-to-tl from-blue-600 via-rose-400 to-indigo-400 bg-clip-text text-transparent md:block">
            {siteConfig.name}
          </span>
        </Link>
        <ul className="flex cursor-pointer flex-row items-center gap-5 text-xl font-semibold">
          {HeaderNavLinks.map(({ title, href }) => (
            <li key={title}>
              <Link
                href={href}
                aria-label={title}
                title={title}
                className={cn(
                  pathName === href
                    ? "text-indigo-400"
                    : "text-primary-dark dark:text-primary-light",
                  "hover:text-rose-400 dark:hover:text-rose-400",
                )}
              >
                {title}
              </Link>
            </li>
          ))}
          <li>
            <ThemeSwitch />
          </li>
        </ul>
      </div>
    </div>
  );
}
