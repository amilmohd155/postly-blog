"use client";

import { useHover } from "@/providers/hover";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { RefObject, useEffect, useRef } from "react";

const CustomCursor = ({
  container,
}: {
  container: RefObject<HTMLDivElement>;
}) => {
  const cursorRef = useRef<HTMLSpanElement>(null);
  const followerRef = useRef<HTMLSpanElement>(null);

  // const {
  //   state: { isAnyHovered },
  // } = useHover();

  useGSAP(() => {
    const cursorXSetter = gsap.quickTo(cursorRef.current, "x", {
      duration: 0.2,
      ease: "power3",
    });
    const cursorYSetter = gsap.quickTo(cursorRef.current, "y", {
      duration: 0.2,
      ease: "power3",
    });

    const cursorOpacitySetter = gsap.quickTo(cursorRef.current, "opacity", {
      duration: 0.2,
      ease: "power3",
    });

    const followerXSetter = gsap.quickTo(followerRef.current, "x", {
      duration: 0.6,
      ease: "power3",
    });
    const followerYSetter = gsap.quickTo(followerRef.current, "y", {
      duration: 0.6,
      ease: "power3",
    });

    const followerOpacitySetter = gsap.quickTo(followerRef.current, "opacity", {
      duration: 0.6,
      ease: "power3",
    });

    window.addEventListener("mousemove", (e) => {
      cursorXSetter(e.offsetX);
      cursorYSetter(e.offsetY);
      followerXSetter(e.offsetX);
      followerYSetter(e.offsetY);
    });

    container.current?.addEventListener("mouseleave", () => {
      cursorOpacitySetter(0);
      gsap.to(cursorRef.current, {
        scale: 0,
      });
      followerOpacitySetter(0);
      gsap.to(followerRef.current, { scale: 0 });
    });

    container.current?.addEventListener("mouseover", () => {
      cursorOpacitySetter(1);
      gsap.to(cursorRef.current, {
        scale: 1,
      });
      followerOpacitySetter(1);
      gsap.to(followerRef.current, { scale: 1 });
    });

    // if (isAnyHovered) {
    //   gsap.to(followerRef.current, {
    //     scale: 2,
    //   });
    //   gsap.to(cursorRef.current, {
    //     scale: 2,
    //   });
    // } else {
    //   gsap.to(followerRef.current, {
    //     scale: 1,
    //   });
    //   gsap.to(cursorRef.current, {
    //     scale: 1,
    //   });
    // }
  }, []);

  return (
    <div>
      <span
        id="cursor"
        ref={cursorRef}
        className="pointer-events-none fixed z-50 h-1 w-1 -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full bg-black opacity-0 dark:bg-white"
      />
      <span
        ref={followerRef}
        className="pointer-events-none fixed z-50 h-8 w-8 -translate-x-1/2 -translate-y-1/2 scale-0 rounded-full border border-black bg-transparent opacity-0 dark:border-white"
      />
    </div>
  );
};

export default CustomCursor;
