import Link, { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

type MobileLinkProps = {
  children: React.ReactNode;
  onOpenChange?: (open: boolean) => void;
} & LinkProps;

export default function MobileLink({
  children,
  onOpenChange,
  href,
  ...props
}: MobileLinkProps) {
  const router = useRouter();

  return (
    <Link
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
