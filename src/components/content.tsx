"use client";

import gsap from "gsap";
import { ComponentProps, PropsWithChildren, useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export const Content = ({ children }: {} & PropsWithChildren) => {
  useGSAP(
    (context, contextSafe) => {
      const parent = document.getElementById("content")!;

      const headers = parent.querySelectorAll("h1, h2, h3, h4, h5, h6");

      headers.forEach((header) => {
        ScrollTrigger.create({
          scroller: parent,
          trigger: headers,
          start: "top bottom",
          end: "bottom top",
          markers: true,
          onEnter: () => {
            console.log("Prominent header:", header.id);
          },
        });
      });
    },
    { dependencies: [], scope: "#content" },
  );

  return <>{children}</>;
};
