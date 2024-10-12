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
    <main className="mx-4 mb-5 grid max-w-none flex-1 gap-2 pb-5 md:grid-cols-2 md:overflow-hidden md:pb-0">
      <article className="prose prose-sm relative rounded-xl border border-border p-5 dark:prose-invert lg:prose">
        <p className="max-w-fit rounded-full border border-border/50 px-2 py-1">
          About Postly
        </p>
        <header>
          <Image
            alt=""
            src="/postly.png"
            width={192}
            height={192}
            className="absolute right-10 top-0 w-24 rounded-full border-2 border-border/50 p-2 md:w-24 md:p-5 lg:w-32"
          />
        </header>
        <section>
          <h1 className="postly">{siteConfig.name}</h1>
          <h3 className="">Personal blogging website</h3>
          <p>
            Postly is a personal blogging website developed by Amil Muhammed
            Hamza using modern technologies like <strong>Next.js</strong>,{" "}
            <strong>Tailwind CSS</strong>, <strong>GSAP</strong>,{" "}
            <strong>MDX</strong>, and{` `}
            <strong>Velite</strong>. Designed for performance and seamless
            content management, Postly allows dynamic blogging with markdown and
            React components using MDX. The interface, styled with Tailwind CSS,
            is sleek, responsive, and customizable, while deployment on Vercel
            provides fast, reliable, and globally distributed hosting. Postly is
            a perfect platform for developers and writers to share their
            thoughts and projects, offering a smooth and efficient blogging
            experience.
          </p>

          <SocialButton
            url={siteConfig.repository}
            title="Project repository on GitHub"
            label="Project on GitHub"
            icon={<FaGithub />}
          />
        </section>
      </article>
      <article className="prose prose-sm relative rounded-xl border border-border p-5 dark:prose-invert lg:prose">
        <p className="max-w-fit rounded-full border border-border/50 px-2 py-1">
          About Author
        </p>
        <header>
          <Image
            alt=""
            src="/about.jpg"
            width={192}
            height={192}
            className="absolute -top-4 right-10 w-24 rounded-full border-2 border-border/50 p-2 md:top-0 md:w-24 md:p-5 lg:w-32"
          />
        </header>
        <section>
          <h1 className="max-w-[70%]">{siteConfig.author}</h1>
          <h3 className="">Full stack developer</h3>
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
            <SocialButton
              url={siteConfig.links.website}
              title="Go to my portfolio page"
              label="Portfolio"
              icon={<FaLink />}
            />
            <SocialButton
              url={siteConfig.links.github}
              title="Go to my portfolio page"
              label="GitHub"
              icon={<FaGithub />}
            />
          </div>
        </section>
      </article>
    </main>
  );
}

const SocialButton = ({
  url,
  title,
  label,
  icon,
}: {
  url: string;
  label: string;
  title: string;
  icon: JSX.Element;
}) => {
  return (
    <Link
      href={url}
      title={title}
      className="not-prose group"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="flex max-w-fit flex-row items-center gap-2 rounded-full border border-primary/50 px-4 py-1 text-primary hover:bg-primary hover:text-primary-foreground">
        {icon}
        <p>{label}</p>
      </span>
    </Link>
  );
};
