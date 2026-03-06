"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "@/components/icons/menu-icon";
import { XIcon } from "@/components/icons/x-icon";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/#industries", label: "Industries" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
] as const;

type HeaderProps = {
  variant?: "dark" | "light";
  className?: string;
};

export function Header({ variant, className }: HeaderProps) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const resolvedVariant = variant ?? (pathname === "/" ? "dark" : "light");
  const isDark = resolvedVariant === "dark";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = cn(
    "font-medium transition-colors hover:opacity-80",
    "text-[15px]",
    isDark ? "text-white" : "text-foreground"
  );

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isDark
          ? scrolled
            ? "bg-black/60 text-white backdrop-blur-md shadow-sm"
            : "bg-transparent text-hero-foreground"
          : scrolled
            ? "bg-white/80 text-foreground backdrop-blur-md shadow-sm"
            : "bg-background text-foreground shadow-sm",
        className
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Logo
          variant={isDark ? "light" : "dark"}
          className={isDark ? "text-hero-foreground" : "text-foreground"}
        />

        <nav className="hidden flex-1 items-center justify-center gap-8 md:flex" aria-label="Main">
          {navLinks.map(({ href, label }) => {
            const isActive =
              pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  linkClass,
                  isActive && "underline underline-offset-4",
                  isActive && !isDark && "text-primary",
                  !isActive && isDark && "text-white/90",
                  !isActive && !isDark && "text-muted-foreground"
                )}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Button
            asChild
            variant="outline"
            size="default"
            className={cn(
              "rounded-md",
              isDark
                ? "border-white/50 bg-transparent text-white hover:bg-white/10 hover:text-white"
                : "border-input bg-background hover:bg-accent hover:text-accent-foreground"
            )}
          >
            <Link href="/contact#quote">Get a Quote</Link>
          </Button>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            className={cn(
              "md:hidden",
              isDark
                ? "text-white hover:bg-white/10 hover:text-white"
                : "text-foreground hover:bg-accent"
            )}
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <XIcon className="size-6" />
            ) : (
              <MenuIcon className="size-6" />
            )}
          </Button>
        </div>
      </div>

      <div className={cn("h-px w-full", isDark ? "bg-white/20" : "bg-border")} aria-hidden />

      <div
        className={cn(
          "absolute left-0 right-0 top-full z-40 border-b bg-background/95 backdrop-blur md:hidden",
          isDark && "border-white/20 bg-black/80",
          mobileOpen ? "block" : "hidden"
        )}
      >
        <nav className="container mx-auto flex flex-col gap-1 px-4 py-4" aria-label="Main">
          {navLinks.map(({ href, label }) => {
            const isActive =
              pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "rounded-md px-4 py-3 text-[15px] font-medium transition-colors",
                  isDark ? "text-white hover:bg-white/10" : "text-foreground hover:bg-accent",
                  isActive && "underline underline-offset-4"
                )}
                onClick={() => setMobileOpen(false)}
              >
                {label}
              </Link>
            );
          })}
          <div className="mt-2 border-t pt-2">
            <Link
              href="/contact#quote"
              className={cn(
                "block rounded-md px-4 py-3 text-[15px] font-medium",
                isDark ? "text-white hover:bg-white/10" : "text-foreground hover:bg-accent"
              )}
              onClick={() => setMobileOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
