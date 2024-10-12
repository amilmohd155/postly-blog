"use client";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ThemeSwitch({
  className,
  size = 34,
}: {
  className?: string;
  size?: number;
}) {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        width={size}
        height={size}
        sizes={`${size}x${size}`}
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
        className={className}
      />
    );

  if (resolvedTheme === "dark") {
    return (
      <FiSun
        className={className}
        onClick={() => setTheme("light")}
        title="Switch to light Mode"
        size={size}
      />
    );
  }

  if (resolvedTheme === "light") {
    return (
      <FiMoon
        className={className}
        onClick={() => setTheme("dark")}
        title="Switch to dark Mode"
        size={size}
      />
    );
  }
}
