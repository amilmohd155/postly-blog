import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

type MobileLinkProps = {
  children: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
  className?: string;
} & LinkProps;

export default function MobileLink({
  children,
  onOpenChange,
  href,
  className,
  ...props
}: MobileLinkProps) {
  const router = useRouter();

  return (
    <Link
      className={cn(className)}
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      {...props}
    >
      {children}
    </Link>
  );
}
