"use client";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";

const MenuItems = ["About", "Portfolio", "Testimonials"];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav aria-label="Main Navigation">
      <div>
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
        <div
          className={clsx(
            "fixed bottom-0 left-0 right-0 top-0 p-5 flex flex-col bg-green-600 transition-transform duration-300 ease-in-out md:hidden",
            open ? "translate-x-0" : "-translate-x-[100%]"
          )}
        >
          <button
            type="button"
            aria-label="Close menu"
            aria-expanded={open}
            className="text-2xl"
            onClick={() => setOpen(false)}
          >
            <MdClose />
          </button>
          <ul className="mt-8">
            {MenuItems.map((label) => (
              <li
                key={label}
                className="first-of-type:border-t-2 border-b-2 py-4 font-semibold tracking-wide focus-within:bg-black"
              >
                <Link href="/">{label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative z-50 hidden md:block">
          <ul className="flex flex-row justify-center items-center gap-5 font-semibold text-xl uppercase cursor-pointer leading-relaxed tracking-wider">
            {MenuItems.map((label) => (
              <li key={label} className="hover:text-violet-400">
                {label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
