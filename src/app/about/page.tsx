import { siteConfig } from "@config/site";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLink, FaUser } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "About",
};
// About page
export default function AboutPage() {
  return (
    <>
      <article className="prose-sm grid min-w-full gap-5 rounded px-5 dark:prose-invert lg:prose lg:mt-10 lg:grid-cols-[auto,1fr,auto] lg:px-0">
        <header>
          <Image
            alt=""
            src="/postly.svg"
            width={192}
            height={192}
            className="not-prose w-40 rounded-full"
          />
        </header>
        <section>
          <h1 className="postly lg:postly !m-0">{siteConfig.name}</h1>
          <h3 className="!m-0">Personal blogging website</h3>
          <p>
            Postly is a personal blogging website developed by Amil Muhammed
            Hamza using modern technologies like <strong>Next.js</strong>,{" "}
            <strong>Tailwind CSS</strong>, <strong>MDX</strong>, and{` `}
            <strong>Velite</strong>. Designed for performance and seamless
            content management, Postly allows dynamic blogging with markdown and
            React components using MDX. The interface, styled with Tailwind CSS,
            is sleek, responsive, and customizable, while deployment on Vercel
            provides fast, reliable, and globally distributed hosting. Postly is
            a perfect platform for developers and writers to share their
            thoughts and projects, offering a smooth and efficient blogging
            experience.
          </p>
          <Link
            href={siteConfig.repository}
            title="Go to my portfolio page"
            className="not-prose"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="flex max-w-fit flex-row items-center justify-center gap-2 rounded bg-slate-700 px-3 py-2 text-lg font-semibold capitalize leading-tight text-primary-light hover:bg-slate-50 hover:text-primary-dark dark:bg-slate-100 dark:text-primary-dark dark:hover:bg-slate-900 dark:hover:text-primary-light">
              <FaGithub />
              <p>GitHub</p>
            </span>
          </Link>
        </section>
      </article>
      <article className="prose-sm mt-10 grid min-w-full gap-5 rounded px-5 dark:prose-invert lg:prose lg:grid-cols-[auto,1fr,auto] lg:px-0">
        <header>
          <Image
            alt=""
            src="/about.jpg"
            width={192}
            height={192}
            className="not-prose w-40 rounded-full"
          />
        </header>
        <section>
          <h1 className="!m-0">{siteConfig.author}</h1>
          <h3 className="!m-0">Full stack developer</h3>
          <p>
            As a graduate in Software Engineering from Kingston University, I am
            deeply passionate about applying the latest technologies and
            techniques in full-stack development and 3D game development. I have
            hands-on experience with <strong>React</strong>,{" "}
            <strong>React Native</strong>, <strong>Node.js</strong>,{" "}
            <strong>NestJS</strong>, <strong>Apollo GraphQL</strong>, and
            microservices, enabling me to create dynamic and responsive native
            applications that meet user needs and expectations.
          </p>
          <div className="flex gap-5">
            <Link
              href={siteConfig.links.website}
              title="Go to my portfolio page"
              className="not-prose group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex max-w-fit flex-row items-center justify-center gap-2 rounded bg-slate-700 px-3 py-2 text-lg font-semibold capitalize leading-tight text-primary-light hover:bg-slate-50 hover:text-primary-dark dark:bg-slate-100 dark:text-primary-dark dark:hover:bg-slate-900 dark:hover:text-primary-light">
                <FaLink />
                <p>Website</p>
              </span>
            </Link>
            <Link
              href={siteConfig.links.github}
              title="Go to my portfolio page"
              className="not-prose group"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="flex max-w-fit flex-row items-center justify-center gap-2 rounded bg-slate-700 px-3 py-2 text-lg font-semibold capitalize leading-tight text-primary-light hover:bg-slate-50 hover:text-primary-dark dark:bg-slate-100 dark:text-primary-dark dark:hover:bg-slate-900 dark:hover:text-primary-light">
                <FaGithub />
                <p>GitHub</p>
              </span>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
