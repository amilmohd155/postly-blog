import Image from "next/image";

export default function Blog() {
  return (
    <div>
      <Image
        src="/image.png"
        alt="image"
        width={400}
        height={400}
        className="w-full lg:h-52 lg:object-cover"
      />
      <article className="p-5">
        <h1 className="text-3xl">
          {"How Apple's M1 Chip makes macOS development much less costly"}
        </h1>
        <div className="flex justify-between text-sm mt-5 border-b py-5">
          <p className="">
            Written by{" "}
            <span className="font-semibold">Amil Muhammed Hamza</span>
          </p>
          <p>Aug 28, 2024</p>
        </div>
        <p className="mt-10 text-wrap tracking-tight leading-relaxed">
          Next.js App Directory and React Server Components Now that Next.js App
          router is finally stable and is mostly feature compatible with Page
          Router, the codebase has been migrated to new setup. This allows for a
          hybrid rendering approach, with the use of React Server Components
          generated on the server side for faster page loads and smaller bundle
          sizes, while retaining the ability to sprinkle in client side React
          components for interactivity.1 With addition powers comes a new
          paradigm to learn. I have migrated the codebase to make use of the new
          features as much as possible. This includes changes in the folder
          structure, splitting components into server vs client components,
          leveraging server side data fetching and using the recommended
          Metadata API for SEO discoverability. While this simplifies the
          codebase to some extent, it makes migration from the old codebase more
          difficult. If you are looking to migrate, I recommend starting from a
          fresh template and copying over your customizations and existing
          content. See the migration recommendations section for more details.
          Typescript First The codebase has been migrated to Typescript. While
          the previous version of the template was available in both Javascript
          and Typescript, I decided to reduce the maintenance burden and focus
          on Typescript. This also allows for better type checking and code
          completion in IDEs. Typescript is also a perfect match with our new
          type-safe markdown processor - Contentlayer. Contentlayer Contentlayer
          is a content SDK that validates and transforms your content into
          type-safe JSON data that you can easily import into your application.
          It makes working with local markdown or MDX files a breeze. This
          replaces MDX-bundler and our own markdown processing workflow. First,
          a content source is defined, specifying the name of the document type,
          the source where it is located along with the frontmatter fields and
          any additional computed fields that should be generated as part of the
          process.
        </p>
      </article>
    </div>
  );
}
