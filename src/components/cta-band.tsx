import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28 lg:py-32"
      style={{
        background: "linear-gradient(135deg, #f0f2f5 0%, #e8edf5 50%, #f5f7fa 100%)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          
          {/* Left: copy */}
          <div className="flex flex-col gap-7">
            <h2 className="text-5xl font-extrabold leading-[1.08] tracking-tight text-gray-950 sm:text-6xl lg:text-7xl">
              Have a shipment to move?
            </h2>
            <p className="max-w-sm text-base leading-relaxed text-gray-500">
              Partner with us for reliable, transparent, and efficient logistics
              solutions tailored to your business needs.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="group rounded-xl bg-gray-950 px-6 font-semibold text-white hover:bg-gray-800"
              >
                <Link href="/contact" className="flex items-center gap-1.5">
                  Get a Free Quote
                  <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="group rounded-xl border border-gray-300 bg-white px-6 font-semibold text-gray-900 hover:bg-gray-50"
              >
                <Link href="/contact" className="flex items-center gap-1.5">
                  Contact Us
                  <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right: floating image collage */}
          <div className="relative h-[480px]">

            {/* Blue accent square — top left */}
            <div className="absolute left-[8%] top-[6%] size-16 rounded-2xl bg-[#4F7BF7]" />

            {/* Main large image — center */}
            <div className="absolute left-[18%] top-[8%] h-56 w-64 overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/cta-2.jpg"
                alt="Cargo ship aerial view"
                fill
                className="object-cover"
                sizes="256px"
              />
            </div>

            {/* Top right image — warehouse worker */}
            <div className="absolute right-[0%] top-[0%] h-44 w-40 overflow-hidden rounded-2xl shadow-md">
              <Image
                src="/cta-1.jpg"
                alt="Warehouse worker"
                fill
                className="object-cover"
                sizes="160px"
              />
            </div>

            {/* Bottom left image — port/containers */}
            <div className="absolute bottom-[8%] left-[0%] h-44 w-44 overflow-hidden rounded-2xl shadow-md">
              <Image
                src="/cta-3.jpg"
                alt="Container port"
                fill
                className="object-cover"
                sizes="176px"
              />
            </div>

            {/* Light blue accent square — middle */}
            <div className="absolute bottom-[30%] left-[38%] size-10 rounded-xl bg-[#c7d8ff]" />

            {/* Bottom right image — truck/freight */}
            <div className="absolute bottom-[4%] right-[0%] h-48 w-44 overflow-hidden rounded-2xl shadow-md">
              <Image
                src="/cta-4.jpg"
                alt="Freight transport"
                fill
                className="object-cover"
                sizes="176px"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}