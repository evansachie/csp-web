import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section
      className="relative flex min-h-screen flex-col justify-end px-4 pb-16 sm:px-6 lg:px-8"
      style={{
        backgroundImage: "url(/hero-image.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.7) 100%)",
        }}
        aria-hidden
      />

      <div className="container relative z-10 mx-auto flex items-end justify-between gap-8">
        <div className="flex flex-col gap-6">
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Driving trade, seamlessly across the globe.
          </h1>
          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-md bg-white text-[#0a1628] font-semibold hover:bg-white/90"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-md border-white/50 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/services">Our Services</Link>
            </Button>
          </div>
        </div>

        <p className="max-w-xs pb-2 text-base text-white/80 sm:text-lg">
          Import. Export. Consultancy. — a global procurement and supply chain
          partner helping businesses move smarter and faster.
        </p>
      </div>
    </section>
  );
}
