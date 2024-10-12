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
        <div className="flex flex-row items-center justify-between gap-5 px-4 py-5 md:hidden">
          <button
            type="button"
            aria-expanded={open}
            aria-label="Open menu"
            className="text-2xl"
            onClick={() => setOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <MdMenu />
          </button>
          <div className="flex items-center gap-2">
            <Link href="/" aria-label="Logo">
              <span className="inline-block bg-gradient-to-tl from-blue-600 via-rose-400 to-indigo-400 bg-clip-text text-2xl font-semibold text-transparent">
                {siteConfig.name}
              </span>
            </Link>
          </div>
          <ThemeSwitch className="text-xl" size={24} />
          <div
            className={cn(
              "fixed bottom-0 left-0 right-0 top-0 z-50 grid grid-rows-[auto,1fr,auto] bg-primary px-4 py-5 text-white transition-transform duration-300 ease-in-out dark:text-slate-950 md:hidden",
              open ? "translate-x-0" : "-translate-x-[100%]",
            )}
          >
            <button
              type="button"
              aria-label="Close menu"
              aria-expanded={open}
              className="p-2 text-2xl"
              onClick={() => setOpen(false)}
            >
              <MdClose />
            </button>
            <ul className="my-6 border-white first-of-type:border-t dark:border-black">
              {HeaderNavLinks.map(({ title, href }) => (
                <li key={title}>
                  <MobileLink
                    href={href}
                    aria-label={title}
                    onOpenChange={setOpen}
                    className="block border-b border-white py-4 font-semibold tracking-wide focus-within:bg-black dark:border-black"
                  >
                    {title}
                  </MobileLink>
                </li>
              ))}
            </ul>
            <div>
              <span>
                <p className="inline-block bg-gradient-to-tl from-blue-600 via-rose-400 to-indigo-400 bg-clip-text py-2 text-3xl font-semibold text-transparent">
                  {siteConfig.name}
                </p>
                {` `}&copy; {siteConfig.year}
              </span>
              <p>
                Created by <b>{siteConfig.author}</b>
              </p>
              <span>
                Built with{" "}
                <ul className="ml-5 inline-flex list-disc gap-5 font-semibold tracking-wide text-white/70 dark:text-black/70">
                  <li>TailwindCSS</li>
                  <li>Nextjs</li>
                  <li>Vercel</li>
                </ul>
              </span>
            </div>
          </div>
        </div>
      ) : (
        HeaderNavLinks.some((link) => link.href === pathName) && (
          <div className="relative m-5 grid grid-cols-[auto,1fr] items-center gap-2 md:hidden">
            <button
              className="rounded-full border p-1 text-2xl"
              onClick={() => router.push("/")}
              aria-label="Go back"
            >
              <MdArrowBack />
            </button>
            {HeaderNavLinks.some((link) => link.href === pathName) && (
              <p className="max-w-fit rounded-full border px-6 text-center text-2xl">
                {HeaderNavLinks.find((link) => link.href === pathName)?.title}
              </p>
            )}
          </div>
        )
      )}
    </>
  );
}

// (
//   <div
//     className={cn(
//       HeaderNavLinks.some((link) => link.href === pathName)
//         ? "relative"
//         : "hidden",
//       "m-5 grid grid-cols-[auto,1fr] items-center gap-2 md:hidden",
//     )}
//   >
//     <button
//       className="rounded-full border p-1 text-2xl"
//       onClick={() => router.push("/")}
//       aria-label="Go back"
//     >
//       <MdArrowBack />
//     </button>
//     {HeaderNavLinks.some((link) => link.href === pathName) && (
//       <p className="max-w-fit rounded-full border px-6 text-center text-2xl">
//         {HeaderNavLinks.find((link) => link.href === pathName)?.title}
//       </p>
//     )}
//   </div>
// )
