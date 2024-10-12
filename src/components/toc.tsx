"use client";

import { cn } from "@/lib/utils";
import { TocEntry } from "@stefanprobst/rehype-extract-toc";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import Link from "next/link";
import { forwardRef, useEffect, useRef, useState } from "react";
import { BiUpArrow } from "react-icons/bi";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin);

export const ToC = ({
  toc,
  active = false,
}: {
  toc: TocEntry;
  active?: boolean;
}) => {
  const { contextSafe } = useGSAP();

  const scrollTo = contextSafe(() => {
    gsap.to("#content", {
      duration: 0.5,
      scrollTo: {
        y: `#${toc.id}`,
        offsetY: 100,
      },
    });
  });

  return (
    <li className="group">
      <Link href={`#${toc.id}`} scroll={false} onClick={() => scrollTo()}>
        <span className="relative">
          <span
            className={cn(
              "text-foreground/50 transition-colors duration-300",
              active && "text-foreground",
            )}
          >
            {toc.value}
          </span>
        </span>
      </Link>
    </li>
  );
};

export const GoTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef(null);

  const { contextSafe } = useGSAP(
    (context, contextSafe) => {
      gsap.registerPlugin(ScrollToPlugin, useGSAP, ScrollTrigger);

      const contentContainer = document.getElementById("content")!;
      const buttonAnim = gsap.fromTo(
        buttonRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,

          duration: 0.2,
        },
      );

      const fadeIn = contextSafe?.(() => {
        buttonAnim.play();
      });
      const fadeOut = contextSafe?.(() => {
        buttonAnim.reverse();
      });

      ScrollTrigger.create({
        scroller: "#content",
        start: "top top",
        onUpdate: (self) => {
          if (self.progress > 0.3) {
            setIsVisible(true);
            fadeIn?.();
          } else {
            setIsVisible(false);
            fadeOut?.();
          }
        },
      });
    },
    { dependencies: [] },
  );

  const handleButtonClick = contextSafe(() => {
    gsap.to("#content", {
      duration: 0.5,
      scrollTo: {
        y: 0,
      },
    });
  });

  return (
    <button
      title="Go to top"
      ref={buttonRef}
      className={cn(
        "fixed bottom-10 rounded-full bg-black p-3 text-primary transition-all duration-300 ease-in-out md:bottom-5 md:right-5 lg:right-10",
        isVisible ? "scale-100" : "scale-0",
      )}
      onClick={() => handleButtonClick()}
    >
      <BiUpArrow className="h-6 w-6" />
    </button>
  );
};
