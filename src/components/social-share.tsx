"use client";
import { cn } from "@/lib/utils";
import { siteConfig } from "@config/site";
import { useRef, useState } from "react";
import { HiCheck, HiOutlineClipboard } from "react-icons/hi2";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  XIcon,
} from "react-share";
import { gsap } from "gsap";

type SocialShareProps = {
  url: string;
} & React.ComponentProps<"div">;
export const SocialShare = ({ url, className, ...props }: SocialShareProps) => {
  const shareUrl = siteConfig.url + url;

  return (
    <div className={cn(className)} {...props}>
      <FacebookShareButton url={shareUrl} title="Share on Facebook">
        <FacebookIcon round size={32} />
      </FacebookShareButton>
      <TwitterShareButton
        url={`${siteConfig.url}${url}`}
        title="Share on X(formerly Twitter)"
      >
        <XIcon round size={32} />
      </TwitterShareButton>
      <LinkedinShareButton
        url={`${siteConfig.url}${url}`}
        title="Share on Linkedin"
      >
        <LinkedinIcon round size={32} />
      </LinkedinShareButton>
      <WhatsappShareButton
        url={`${siteConfig.url}${url}`}
        title="Share on Whatsapp"
      >
        <WhatsappIcon round size={32} />
      </WhatsappShareButton>
    </div>
  );
};

export const CopyToClipboard = ({ url }: { url: string }) => {
  const copyRef = useRef(null);
  const copiedRef = useRef(null);

  const handleOnClick = () => {
    navigator.clipboard.writeText(`${siteConfig.url}${url}`);

    const enterTimeline = gsap.timeline({ paused: true });
    enterTimeline.to(copyRef.current, {
      y: "100%",
      duration: 0.5,
    });
    enterTimeline.to(copiedRef.current, {
      y: "0%",
      duration: 0.5,
    });

    enterTimeline.play();

    setTimeout(() => {
      enterTimeline.reverse();
    }, 5000);
  };

  return (
    <div className="flex justify-center">
      <button
        className="relative overflow-hidden rounded-full border border-primary px-3 py-1"
        onClick={handleOnClick}
      >
        <span
          ref={copyRef}
          className="flex flex-row items-center gap-2 transition-transform duration-500"
        >
          Copy to Clipboard
          <HiOutlineClipboard className="h-4 w-4" />
        </span>

        <span
          ref={copiedRef}
          className="absolute bottom-0 left-0 right-0 top-0 flex -translate-y-full transform flex-row items-center justify-center gap-2 bg-primary text-primary-foreground"
        >
          <p>Copied</p>
          <HiCheck className="h-4 w-4" />
        </span>
      </button>
    </div>
  );
};
