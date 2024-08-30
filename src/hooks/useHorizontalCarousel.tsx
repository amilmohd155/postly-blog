import { useEffect, useRef } from "react";

type HorizontalCarouselProps = {};

const useHorizontalCarousel = () => {
  const scrollRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        const currentScrollX = scrollRef.current.scrollLeft;
        const windowWidth = window.outerWidth;

        if (currentScrollX < windowWidth / 5) {
          scrollRef.current.scrollLeft = 0;
        } else {
          const multiple = Math.floor(currentScrollX / windowWidth);
          const newScrollX =
            currentScrollX < multiple * windowWidth + windowWidth / 2
              ? multiple * windowWidth
              : (multiple + 1) * windowWidth;
          scrollRef.current.scrollLeft = newScrollX;
        }
      }
    };

    const element = scrollRef.current;

    if (element) {
      element.addEventListener("scrollend", handleScroll);
    }

    return () => {
      if (element) {
        element.removeEventListener("scrollend", handleScroll);
      }
    };
  });

  return { scrollRef };
};

export default useHorizontalCarousel;
