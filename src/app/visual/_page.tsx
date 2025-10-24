"use client";

import { useRef } from "react";
import CustomCursor from "@/components/custom-cursor";
import { CardStack } from "@/components/visualizer/card-stack";

export default function Visualizer() {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={containerRef}
      id="container-visualizer"
      className="relative flex h-screen w-full cursor-none flex-col"
    >
      <CustomCursor container={containerRef} />
      <CardStack />

      {/* Overlay */}
      <h1 className="pointer-events-none absolute right-0 top-0 mx-5 mt-5 flex flex-col px-4 text-5xl font-semibold uppercase text-primary opacity-80">
        {String("Latest")
          .split("")
          .map((letter, index) => (
            <span
              key={index}
              style={{
                transitionDelay: `${index * 0.1}s`,
              }}
            >
              {letter}
            </span>
          ))}
      </h1>
      {/* Guide */}
      <div className="pointer-events-none absolute bottom-0 right-0 mx-4 mb-4 space-y-1 p-4 text-right font-mono text-xs font-thin text-foreground/50">
        {/* <h1 className="text-xl font-semibold">Latest Posts</h1> */}
        <p>scroll up/down</p>
        <p>click to preview blog</p>
        <p>double click to go to blog</p>
      </div>
    </div>
  );
}
