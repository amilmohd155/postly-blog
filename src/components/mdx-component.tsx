import React from "react";
import Image, { ImageProps } from "next/image";
import * as runtime from "react/jsx-runtime";
import { cn } from "@/lib/utils";
import { Toc } from "@stefanprobst/rehype-extract-toc";

const sharedComponents = {
  img: ({ className, alt, ...props }: ImageProps) => (
    <Image
      className={cn("max-w-full rounded", className)}
      alt={alt}
      {...props}
      width={1024}
      height={100}
      priority={true}
    />
  ),
};
const useMDXComponent = (code: string) => {
  const fn = new Function(code);

  return {
    Component: fn({ ...runtime }).default,
    TableOfContents: fn({ ...runtime }).toc as Toc,
  };
};

type MDXProps = {
  code: string;
  components?: Record<string, React.ComponentType>;
  [key: string]: any;
};

export function MDXComponent({ code, components, ...props }: MDXProps) {
  const { Component } = useMDXComponent(code);
  return (
    <Component components={{ ...sharedComponents, ...components }} {...props} />
  );
}

export function MDXTableOfContents({ code }: { code: string }) {
  const { TableOfContents } = useMDXComponent(code);

  return TableOfContents;
}
