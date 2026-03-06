import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type LogoProps = {
  isFooter?: boolean;
  alt?: string;
  className?: string;
};

export function Logo({ isFooter, alt = "CSP", className }: LogoProps) {
  const src = isFooter ? "/logo-white.svg" : "/logo-dark.svg";
  return (
    <Link
      href="/"
      className={cn("flex items-center gap-2 font-semibold", className)}
      aria-label="CSP – Home"
    >
      <Image
        src={src}
        alt={alt}
        width={120}
        height={32}
        className="h-8 w-auto"
        priority
      />
    </Link>
  );
}
