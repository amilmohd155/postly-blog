"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { MdMenu, MdClose, MdArrowBack } from "react-icons/md";
import ThemeSwitch from "@/components/theme-swtich";
import { cn } from "@/lib/utils";
import MobileLink from "./mobile-link";
import { HeaderNavLinks } from "@config/nav-links";
import { siteConfig } from "@config/site";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();
  const router = useRouter();

  return (
    <>
      {pathName === "/" ? (
        <div className="flex flex-row gap-5 items-center px-4 py-5 justify-between md:hidden">
          <button
            type="button"
            aria-expanded={open}
            aria-label="Open menu"
            className="text-2xl "
            onClick={() => setOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <MdMenu />
          </button>
          <div className="items-center flex gap-2">
            <Link href="/" aria-label="Logo">
              <span className="text-2xl font-semibold bg-gradient-to-tl from-blue-600 via-rose-400 to-indigo-400 inline-block text-transparent bg-clip-text">
                {siteConfig.name}
              </span>
            </Link>
          </div>
          <ThemeSwitch className="text-2xl" />
          <div
            className={cn(
              "fixed bottom-0 left-0 right-0 top-0 px-4 py-5 z-50 flex flex-col bg-secodary-light dark:bg-secodary-dark text-white dark:text-slate-950 transition-transform duration-300 ease-in-out md:hidden",
              open ? "translate-x-0" : "-translate-x-[100%]"
            )}
          >
            <button
              type="button"
              aria-label="Close menu"
              aria-expanded={open}
              className="text-2xl p-2"
              onClick={() => setOpen(false)}
            >
              <MdClose />
            </button>
            <ul className="flex-1 mt-6 first-of-type:border-t border-white dark:border-black group/list">
              {HeaderNavLinks.map(({ title, href }) => (
                <li
                  key={title}
                  className="py-4 font-semibold tracking-wide border-b border-white dark:border-black focus-within:bg-black"
                >
                  <MobileLink
                    href={href}
                    aria-label={title}
                    onOpenChange={setOpen}
                  >
                    {title}
                  </MobileLink>
                </li>
              ))}
            </ul>
            <div>
              <span>
                <p className="py-2 text-3xl font-semibold bg-gradient-to-tl from-blue-600 via-rose-400 to-indigo-400 inline-block text-transparent bg-clip-text">
                  {siteConfig.name}
                </p>
                {` `}&copy; {siteConfig.year}
              </span>
              <p>
                Created by <b>{siteConfig.author}</b>
              </p>
              <span>
                Built with{" "}
                <ul className="ml-5 inline-flex gap-5 font-semibold tracking-wide list-disc dark:text-black/70 text-white/70">
                  <li>TailwindCSS</li>
                  <li>Nextjs</li>
                  <li>Vercel</li>
                </ul>
              </span>
            </div>
          </div>
        </div>
      ) : (
        <button
          className="absolute left-0 top-0 m-5 p-2 text-2xl md:hidden rounded-full bg-black text-white "
          onClick={() => router.back()}
          aria-label="Go back"
        >
          <MdArrowBack />
        </button>
      )}
    </>
  );
}
