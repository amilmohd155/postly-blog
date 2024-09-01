import React from "react";
import Image, { ImageProps } from "next/image";
import * as runtime from "react/jsx-runtime";
import { cn } from "@/lib/utils";

const sharedComponents = {
  img: ({ className, alt, ...props }: ImageProps) => (
    <Image
      className={cn("rounded max-w-full", className)}
      alt={alt}
      {...props}
      width={1024}
      height={100}
      loading="lazy"
    />
  ),
};
const useMDXComponent = (code: string) => {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
};

type MDXProps = {
  code: string;
  components?: Record<string, React.ComponentType>;
  [key: string]: any;
};

export function MDXComponent({ code, components, ...props }: MDXProps) {
  const Component = useMDXComponent(code);
  return (
    <Component components={{ ...sharedComponents, ...components }} {...props} />
  );
}
