/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { posts } from "#site/content";
import { formatDate } from "@/lib/utils";
import { siteConfig } from "@config/site";
import { ImageResponse } from "next/og";
import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

type Props = {
  params: {
    slug: string[];
  };
};

export async function GET(request: NextRequest, { params }: Props) {
  //   console.log(blog);

  try {
    const slug = params?.slug?.join("/");

    const blog = posts.find((blog) => blog.slugAsParams === slug);

    const cover = blog?.cover.src
      ? await fetch(new URL(blog?.cover.src, siteConfig.url)).then(
          (res) => res.arrayBuffer() as unknown as string,
        )
      : undefined;

    return new ImageResponse(
      (
        <div tw="flex flex-col justify-between w-full h-full p-20 text-white">
          {/* Cover */}
          {cover && (
            <img
              src={cover}
              width={1200}
              height={630}
              style={{ objectFit: "cover" }}
              tw="absolute"
            />
          )}
          {/* Overlay */}
          <div tw="absolute left-0 right-0 top-0 bottom-0 bg-black/80"></div>
          <p
            tw="text-4xl"
            style={{
              background:
                "linear-gradient(to top left, #2563eb, #fb7185, #818cf8)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Postly
          </p>
          {/* Blog details */}
          <div tw="flex flex-col">
            <p tw="text-6xl">{blog?.title}</p>
            <p tw="m-0 text-2xl">{blog?.author}</p>
            {blog?.date && <p tw="m-0 text-xl">{formatDate(blog?.date)}</p>}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (error) {
    console.log(error);

    const e = error as Error;
    //localhost:3000/blog/2024-01-09-broken-flowers/broken-flowers
    http: return NextResponse.json(
      {
        error: e.message,
      },
      {
        status: 500,
      },
    );
  }
}
