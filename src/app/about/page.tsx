import { siteConfig } from "@config/site";
import Image from "next/image";
import Link from "next/link";
import { FaUser } from "react-icons/fa6";
export default function AboutPage() {
  return (
    <article className="grid md:grid-cols-[auto,1fr,auto] md:mt-20 min-w-full gap-2 prose dark:prose-invert">
      <header className="flex flex-col items-center gap-2">
        <Image
          alt=""
          src="/static/about.jpg"
          width={192}
          height={192}
          className="w-40 rounded-full !my-0"
        />
        <h2 className="!my-0">{siteConfig.author}</h2>
        <h3 className="!my-0">Full stack developer</h3>
        <Link
          href="https://amilmohd155.vercel.app/"
          title="Go to my portfolio page"
          className="not-prose group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="font-semibold leading-tight flex flex-row items-center gap-2 text-lg capitalize bg-indigo-400 px-3 py-2 rounded-2xl text-primary-light dark:text-primary-dark group-hover:text-violet-300 group-focus-visible:text-violet-300">
            <FaUser />
            <p>Resume</p>
          </span>
        </Link>
      </header>
      <section className="px-5">
        <p>
          As a graduate in Software Engineering from Kingston University, I am
          deeply passionate about applying the latest technologies and
          techniques in full-stack development and 3D game development. I have
          hands-on experience with <strong>React</strong>,{" "}
          <strong>React Native</strong>, <strong>Node.js</strong>,{" "}
          <strong>NestJS</strong>, <strong>Apollo GraphQL</strong>, and
          microservices, enabling me to create dynamic and responsive native
          applications that meet user needs and expectations.
          <br></br>
          Previously, I worked as a 3D artist at Juego Studios Private Limited,
          where I contributed to the design and development of several 3D games
          across various platforms and genres. My creativity and skills in 3D
          modeling, texturing, lighting, and animation allowed me to create
          realistic and immersive game environments and characters. I also
          collaborated closely with the development team to ensure the
          games&apos; optimal performance and quality. Additionally, during an
          internship at eClerx, I honed my skills in full-stack development,
          gaining practical experience with agile methodologies and a variety of
          software development tools, which has further strengthened my ability
          to build and maintain scalable applications.
        </p>
      </section>
    </article>
  );
}
