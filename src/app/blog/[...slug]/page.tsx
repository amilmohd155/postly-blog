import "@/style/mdx.css";
import Image from "next/image";
import { notFound } from "next/navigation";
import { posts } from "#site/content";
import { MDXComponent, MDXTableOfContents } from "@/components/mdx-component";
import { cn, formatDate } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";
import { GoTopButton, ToC } from "@/components/toc";
import { BiLink, BiUpArrow, BiUpArrowCircle } from "react-icons/bi";
import { FaLinkedin, FaLinkedinIn, FaWhatsapp } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { CopyToClipboard, SocialShare } from "@/components/social-share";
import { siteConfig } from "@config/site";
import {
  HiCheck,
  HiClipboard,
  HiOutlineClipboard,
  HiOutlineClipboardDocument,
} from "react-icons/hi2";
import { Content } from "@/components/content";
import { BlogPageComponent } from "@/components/blog-page";

type BlogPageProps = {
  params: {
    slug: string[];
  };
};

async function getBlogFromParams(params: BlogPageProps["params"]) {
  const slug = params?.slug?.join("/");

  const blog = posts.find((blog) => blog.slugAsParams === slug);

  return blog;
}

export async function generateStaticParams(): Promise<
  BlogPageProps["params"][]
> {
  return posts.map((post) => ({ slug: post.slugAsParams.split("/") }));
}

export async function generateMetadata({
  params,
}: BlogPageProps): Promise<Metadata> {
  const blog = await getBlogFromParams(params);

  return {
    title: blog?.title,
    description: blog?.description,
    openGraph: {
      title: blog?.title,
      authors: blog?.author,
      images: [
        {
          url: `/api/opengraph/${params.slug.join("/")}`,
        },
      ],
    },
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const blog = await getBlogFromParams(params);

  if (!blog || !blog.published) {
    notFound();
  }

  const tableOfContents = MDXTableOfContents({ code: blog.body });

  return <BlogPageComponent blog={blog} tableOfContents={tableOfContents} />;
}
