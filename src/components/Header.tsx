"use client";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";

const MenuItems = ["All Posts", "About", "Portfolio"];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav aria-label="Main Navigation">
      <div className="flex flex-row gap-5 items-center px-4 py-5">
        {/* Mobile Navigation */}
        <button
          type="button"
          aria-expanded={open}
          aria-label="Open menu"
          className="block md:hidden text-2xl "
          onClick={() => setOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <MdMenu />
        </button>
        <div className="md:hidden text-2xl font-bold">Blog</div>
        <div
          className={clsx(
            "fixed bottom-0 left-0 right-0 top-0 px-4 py-5 z-50 flex flex-col bg-green-600 transition-transform duration-300 ease-in-out md:hidden",
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
          <ul className="mt-6 divide-y last-of-type:border-b first-of-type:border-t">
            {MenuItems.map((label) => (
              <li
                key={label}
                className="py-4 font-semibold tracking-wide focus-within:bg-black"
              >
                <Link href="/">{label}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/* Desktop Nav */}
        <div className="relative w-full z-50 hidden md:block">
          <div className="flex flex-row text-2xl tracking-wide justify-between items-baseline">
            <div className="md:block">Blog</div>
            <ul className="flex flex-row gap-5 font-semibold text-xl uppercase cursor-pointer leading-relaxed tracking-wider">
              {MenuItems.map((label) => (
                <li key={label} className="hover:text-violet-400">
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
