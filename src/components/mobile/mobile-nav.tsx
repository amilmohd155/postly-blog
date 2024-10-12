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
        <div className="flex flex-row items-center justify-between gap-3 p-4 text-2xl md:hidden">
          <button
            type="button"
            aria-expanded={open}
            aria-label="Open menu"
            className="rounded-full border border-border p-2"
            onClick={() => setOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <MdMenu />
          </button>
          <div className="flex flex-1 items-center justify-center rounded-full border border-border px-3 py-1 text-center">
            <span className="postly font-semibold">{siteConfig.name}</span>
          </div>
          <div className="rounded-full border border-border p-2">
            <span className="sr-only">Change theme</span>
            <ThemeSwitch size={24} />
          </div>
          <Drawable open={open} setOpen={setOpen} />
        </div>
      ) : (
        HeaderNavLinks.some((link) => link.href === pathName) && (
          <div className="relative m-5 grid grid-cols-[auto,1fr] items-center gap-2 md:hidden">
            <button
              className="rounded-full border border-border p-1"
              onClick={() => router.push("/")}
              aria-label="Return to homepage"
            >
              <span className="sr-only">Return to homepage</span>

              <MdArrowBack />
            </button>
            {HeaderNavLinks.some((link) => link.href === pathName) && (
              <p className="max-w-fit rounded-full border border-border px-6 text-center">
                {HeaderNavLinks.find((link) => link.href === pathName)?.title}
              </p>
            )}
          </div>
        )
      )}
    </>
  );
}

type DrawableProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};
const Drawable = ({ open, setOpen }: DrawableProps) => {
  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 top-0 z-50 grid grid-rows-[auto,1fr,auto] bg-card px-4 py-5 text-base text-card-foreground transition-transform duration-300 ease-in-out md:hidden",
        open ? "translate-x-0" : "-translate-x-[100%]",
      )}
    >
      <button
        type="button"
        aria-label="Close menu"
        aria-expanded={open}
        className="max-w-fit rounded-full border border-border p-2 text-2xl"
        onClick={() => setOpen(false)}
      >
        <span className="sr-only">Close main menu</span>
        <MdClose />
      </button>
      <ul className="my-6 space-y-3">
        {HeaderNavLinks.map(({ title, href }) => (
          <li key={title}>
            <MobileLink
              href={href}
              aria-label={title}
              onOpenChange={setOpen}
              className="block rounded-full border border-border px-3 py-4 font-semibold tracking-wide"
            >
              {title}
            </MobileLink>
          </li>
        ))}
      </ul>
      <div className="flex flex-col rounded-xl border border-border px-3 py-4">
        <span>
          <p className="postly inline-flex py-2 text-3xl font-semibold">
            {siteConfig.name}
          </p>
          {` `}&copy; {siteConfig.year}
        </span>
        <p>
          Created by <em>{siteConfig.author}</em>
        </p>
        <span>
          Built with <strong>Next.js</strong>, <strong>TailwindCSS</strong>,{" "}
          <strong>GSAP</strong>, and <strong>MDX</strong>
        </span>
        <span>
          Deployed on <strong>Vercel</strong>
        </span>
      </div>
    </div>
  );
};
