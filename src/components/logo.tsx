import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  isFooter?: boolean;
  variant?: "dark" | "light";
  alt?: string;
  className?: string;
};

export function Logo({ isFooter, variant, alt = "CSP", className }: LogoProps) {
  const src = isFooter || variant === "dark" ? "/logo.svg" : "/logo.svg";
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2.5 font-semibold", className)}
      aria-label="CSP – Home"
    >
      <Image
        src={src}
        alt={alt}
        width={36}
        height={36}
        className="h-9 w-9 shrink-0"
        priority
      />
      <span
        className={cn(
          "text-sm font-bold leading-tight",
          isFooter || variant === "light" ? "text-white" : "text-foreground",
        )}
      >
        CSP Procurement
        <br />
        and Trading Ltd
      </span>
    </Link>
  );
}
