import { siteConfig } from "@config/site";
import Link from "next/link";
import { FaGithub, FaUser } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <article className="prose mb-5 hidden min-w-full flex-col items-center rounded-lg py-5 shadow-md dark:prose-invert dark:bg-slate-300/10 dark:shadow-none md:flex">
      <header>
        <h1 className="postly my-0 inline-block">Postly</h1>
        <p className="sr-only">Blog title: Postly</p>{" "}
        {/* Optional: Hidden for screen readers */}
      </header>
      <section>
        <h2 className="my-0">This is where I tell stories</h2>
      </section>

      <footer className="grid grid-cols-2 gap-4">
        <button className="not-prose rounded-xl px-2 py-2 text-lg">
          <Link
            href={siteConfig.repository}
            aria-label="Visit the GitHub repository (opens in a new tab)"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="flex flex-row items-center gap-2">
              <FaGithub aria-hidden="true" />
              <span>GitHub</span>
            </span>
          </Link>
        </button>
        <button className="not-prose rounded-xl px-2 py-2 text-lg">
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={siteConfig.links.website}
            aria-label="Learn more about me in my portfolio website (opens in a new tab)"
          >
            <span className="flex flex-row items-center gap-2">
              <FaUser aria-hidden="true" />
              <span>About</span>
            </span>
          </Link>
        </button>
      </footer>
    </article>
  );
}
