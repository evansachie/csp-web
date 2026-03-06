"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <button
      onClick={scrollTop}
      aria-label="Scroll to top"
      className={cn(
        "fixed bottom-8 right-8 z-50 flex size-11 items-center justify-center rounded-full bg-[#4F7BF7] text-white shadow-lg ring-1 ring-[#4F7BF7]/40 transition-all duration-300 hover:bg-[#3a65e0] hover:shadow-[#4F7BF7]/30 hover:shadow-xl",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <ArrowUp className="size-4" strokeWidth={2.5} />
    </button>
  );
}
