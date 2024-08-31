import Link from "next/link";

const appName = "Postly";
export default function Footer() {
  return (
    <footer className="hidden md:flex flex-row py-5 md:px-5 border-t  items-baseline justify-between border-black/50 dark:border-white/50">
      <article className="flex items-baseline gap-2">
        <Link
          href="/"
          title={appName}
          aria-label={`${appName} homepage`}
          className="text-2xl font-semibold bg-gradient-to-tl from-blue-600 via-rose-400 to-indigo-400 inline-block text-transparent bg-clip-text"
        >
          {appName}
        </Link>
        <p>
          <time dateTime="2024">&copy; 2024</time>
        </p>
        <Link href="/" aria-label="Author: Amil Muhammed Hamza">
          Amil Muhammed Hamza
        </Link>
      </article>
      <nav aria-label="Footer Navigation">
        <ul className="flex gap-2">
          <li className="flex items-center">
            Built with <span aria-hidden="true">:</span>{" "}
            {/* Text indicator for visual users */}
          </li>
          <li>
            <Link
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              TailwindCSS
            </Link>
          </li>
          <li>
            <Link
              href="https://nextjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next.js
            </Link>
          </li>
          <li>
            <Link
              href="https://vercel.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vercel
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
