"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { MdArrowBack, MdClose, MdMenu } from "react-icons/md";
import ThemeSwitch from "./theme-swtich";

const MenuItems = ["blogs", "about"];
const appName = "Postly";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();
  const router = useRouter();

  return (
    <nav aria-label="Main Navigation">
      {/* Mobile Navigation */}
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
            <span className="text-2xl font-semibold bg-gradient-to-tl from-blue-600 via-rose-400 to-indigo-400 inline-block text-transparent bg-clip-text">
              {appName}
            </span>
          </div>
          <ThemeSwitch className="text-2xl" />
          <div
            className={clsx(
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
              {MenuItems.map((label) => (
                <li
                  key={label}
                  className="py-4 font-semibold tracking-wide border-b border-white dark:border-black focus-within:bg-black"
                >
                  <Link href="/">{label}</Link>
                </li>
              ))}
            </ul>
            <div>
              <span>
                <p className="py-2 text-3xl font-semibold bg-gradient-to-tl from-blue-600 via-rose-400 to-indigo-400 inline-block text-transparent bg-clip-text">
                  {appName}
                </p>
                {` `}© 2024
              </span>
              <p>
                Created by <b>Amil Muhammed Hamza</b>
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
        >
          <MdArrowBack />
        </button>
      )}

      {/* Desktop Nav */}
      <div className="relative w-full z-50 hidden md:block  px-4 py-5">
        <div className="flex flex-row text-2xl tracking-wide justify-between items-baseline">
          <div className="md:block bg-gradient-to-tl from-blue-600 via-rose-400 to-indigo-400 inline-block text-transparent bg-clip-text">
            {appName}
          </div>
          <ul className="flex flex-row gap-5 items-center font-semibold text-xl cursor-pointer">
            {MenuItems.map((label) => (
              <li key={label} className="hover:text-violet-400">
                {label}
              </li>
            ))}
            <li>
              <ThemeSwitch />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
