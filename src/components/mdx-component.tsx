import React from "react";
import Image from "next/image";
import * as runtime from "react/jsx-runtime";

const sharedComponents = {
  Image,
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
