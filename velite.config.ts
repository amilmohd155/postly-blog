import { defineConfig, defineCollection, s } from "velite";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import { promisify } from "util";
import { exec } from "child_process";

const computedFields = <T extends { slug: string }>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split("/").slice(1).join("/"),
});

const execAsyn = promisify(exec);

const timestamp = () =>
  s
    .custom<string | undefined>((i) => i === undefined || typeof i === "string")
    .transform<string>(async (value, { meta, addIssue }) => {
      if (value != null) {
        addIssue({
          fatal: false,
          code: "custom",
          message:
            "`s.timestamp()` schema will resolve the value from `gir log -1 --format=%cd",
        });
      }

      const { stdout } = await execAsyn(`git log -1 --format=%cd ${meta.path}`);

      return new Date(stdout).toISOString();
    });

const posts = defineCollection({
  name: "Post",
  pattern: "blog/**/*.mdx",
  schema: s
    .object({
      slug: s.path(),
      title: s.string().max(90),
      description: s.string().max(999).optional(),
      date: s.isodate(),
      updated: timestamp(),
      published: s.boolean().default(true),
      tags: s.array(s.string()).optional(),
      cover: s.image(),
      body: s.mdx(),
    })
    .transform(computedFields),
});

export default defineConfig({
  root: "content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: { posts },
  mdx: {
    rehypePlugins: [
      rehypeSlug as any,
      [rehypePrettyCode, { theme: "github-dark" }],
      [
        rehypeAutolinkHeadings,
        {
          behavior: "wrap",
          properties: {
            className: ["subheading-anchor"],
            ariaLabel: "Link to section",
          },
        },
      ],
    ],
    remarkPlugins: [],
  },
});
