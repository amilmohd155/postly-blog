"use client";

import Link from "next/link";
import ThemeSwitch from "../theme-swtich";
import { siteConfig } from "@config/site";
import { HeaderNavLinks } from "@config/nav-links";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { IoCubeOutline } from "react-icons/io5";

export default function DesktopNav() {
  const pathName = usePathname();

  return (
    <div className="relative z-50 my-2 hidden flex-1 flex-row items-center rounded-full border border-border px-4 py-[1px] text-xl tracking-wide md:mx-4 md:flex">
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
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-primary",
                "rounded-full border px-10 py-2 capitalize hover:border-primary hover:bg-primary hover:text-primary-foreground",
              )}
            >
              {title}
            </Link>
          </li>
        ))}
        <div className="absolute right-2 flex items-center gap-x-2">
          <li className="hidden lg:flex">
            <Link
              href={"/visual"}
              aria-label="Go to 3D Visualizer"
              title="3D Visualizer"
              className={cn(
                pathName === "/visual"
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-primary",
                "rounded-full border px-10 py-2 capitalize hover:border-primary hover:bg-primary hover:text-primary-foreground",
                "flex items-center gap-x-1",
              )}
            >
              {/* <span className="flex items-center gap-x-1"> */}
              <IoCubeOutline className="h-5 w-5" />
              {"3D Visualizer"}
              {/* </span> */}
            </Link>
          </li>
          <li className="rounded-full border border-border text-sm text-primary hover:border-primary hover:bg-primary hover:text-primary-foreground">
            <ThemeSwitch className="p-2" />
          </li>
        </div>
      </ul>
    </div>
  );
}
