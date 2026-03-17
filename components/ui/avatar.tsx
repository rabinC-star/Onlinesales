import * as React from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";

function Avatar({ className, ...props }: React.ComponentProps<"div">) {
  return <div className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)} {...props} />;
}

interface AvatarImageProps {
  src: string;
  alt: string;
  className?: string;
}

function AvatarImage({ className, src, alt }: AvatarImageProps) {
  return <Image src={src} alt={alt} fill sizes="48px" className={cn("aspect-square h-full w-full object-cover", className)} />;
}

function AvatarFallback({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex h-full w-full items-center justify-center rounded-full bg-slate-100 text-sm font-medium", className)} {...props} />
  );
}

export { Avatar, AvatarImage, AvatarFallback };
