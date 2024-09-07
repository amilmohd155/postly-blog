import { FooterLinks } from "@config/nav-links";
import { siteConfig } from "@config/site";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="hidden md:flex flex-row py-5 md:px-5 border-t  items-baseline justify-between border-black/50 dark:border-white/50">
      <article className="flex items-baseline gap-2">
        <Link
          href="/"
          title={siteConfig.name}
          aria-label={`${siteConfig.name} homepage`}
          className="text-2xl font-semibold bg-gradient-to-tl from-blue-600 via-rose-400 to-indigo-400 inline-block text-transparent bg-clip-text"
        >
          {siteConfig.name}
        </Link>
        <p>
          <time dateTime={siteConfig.year.toString()}>
            &copy; {siteConfig.year}
          </time>
        </p>
        <Link href="/about" aria-label={`Author: ${siteConfig.author}`}>
          {siteConfig.author}
        </Link>
      </article>
      <nav aria-label="Footer Navigation">
        Built with <span aria-hidden>:</span>
        {FooterLinks.map(({ title, href }) => (
          <Link
            key={title}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="after:content-[',_'] last-of-type:after:content-none first-of-type:before:content-['_']"
          >
            {title}
          </Link>
        ))}
      </nav>
    </footer>
  );
}
