import Link from "next/link";
import ThemeSwitch from "../theme-swtich";
import { siteConfig } from "@config/site";
import { HeaderNavLinks } from "@config/nav-links";

export default function DesktopNav() {
  return (
    <div className="relative w-full z-50 hidden md:block  px-4 py-5">
      <div className="flex flex-row text-2xl tracking-wide justify-between items-baseline">
        <Link href="/" aria-label="Logo">
          <span className="md:block bg-gradient-to-tl from-blue-600 via-rose-400 to-indigo-400 inline-block text-transparent bg-clip-text">
            {siteConfig.name}
          </span>
        </Link>
        <ul className="flex flex-row gap-5 items-center font-semibold text-xl cursor-pointer">
          {HeaderNavLinks.map(({ title, href }) => (
            <li key={title} className="hover:text-violet-400">
              <Link href={href} aria-label={title}>
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
