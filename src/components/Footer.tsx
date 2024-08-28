import Link from "next/link";

const appName = "Postly";
export default function Footer() {
  return (
    <footer className="hidden md:flex flex-row mt-10 py-5 md:px-5 border-t items-baseline justify-between border-black dark:border-white">
      <div className="inline-flex items-baseline gap-2">
        <Link href="/" title={appName}>
          <p className="text-2xl font-semibold bg-gradient-to-tl from-blue-600 via-rose-400 to-indigo-400 inline-block text-transparent bg-clip-text">
            {appName}
          </p>
        </Link>
        <p>© 2024</p>
        <p>Amil Muhammed Hamza</p>
      </div>
      <div className="inline-flex gap-2">
        <p>TailwindCSS</p>
        <p>Nextjs</p>
        <p>Vercel</p>
      </div>
    </footer>
  );
}
