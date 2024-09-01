import Link from "next/link";
import { FaGithub, FaUser } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <article className="hidden md:flex  prose dark:prose-invert items-center flex-col min-w-full mb-5 rounded-lg dark:bg-slate-300/10 shadow-md dark:shadow-none py-5">
      <header>
        <h1 className="my-0 bg-gradient-to-tl from-blue-600 via-rose-400 to-indigo-400 inline-block text-transparent bg-clip-text">
          Postly
        </h1>
        <p className="sr-only">Blog title: Postly</p>{" "}
        {/* Optional: Hidden for screen readers */}
      </header>
      <section>
        <h2 className="my-0">This is where I tell stories</h2>
      </section>
      {/* <p className="my-1">
          Created by <strong>Amil Muhammed Hamza</strong>
        </p> */}
      <footer className="grid grid-cols-2 gap-4">
        <button className="not-prose px-2 py-2 rounded-xl text-lg">
          <Link href="/" aria-label="Visit the GitHub repository">
            <span className="flex flex-row items-center gap-2">
              <FaGithub aria-hidden="true" />
              <span>GitHub</span>
            </span>
          </Link>
        </button>
        <button className="not-prose px-2 py-2 rounded-xl text-lg">
          <Link href="/" aria-label="Learn more about me on the About page">
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
