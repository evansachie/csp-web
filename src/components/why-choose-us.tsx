import Image from "next/image";
import { ChevronRight } from "lucide-react";

const values = [
  {
    title: "Quality Control",
    description:
      "Rigorous standards applied at every stage — from sourcing to final delivery — so you receive exactly what you expect.",
  },
  {
    title: "On-Time Delivery",
    description:
      "We optimise routes, manage documentation, and coordinate logistics to ensure your goods arrive on schedule, every time.",
  },
  {
    title: "Competitive Pricing",
    description:
      "Transparent, fair pricing with no hidden costs. We focus on delivering maximum value for every dollar you invest.",
  },
  {
    title: "Integrity & Professionalism",
    description:
      "Honesty, discipline, and mutual respect underpin every client relationship and business decision we make.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-background py-20 sm:py-24 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col">
            <h2 className="mb-3 text-4xl font-bold leading-tight text-foreground sm:text-5xl">
              Trusted by Businesses
            </h2>
            <p className="mb-10 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
              Quality, precision, and integrity at the heart of every shipment,
              procurement, and advisory engagement we undertake.
            </p>

            <div className="flex flex-col divide-y divide-border">
              {values.map((value) => (
                <details key={value.title} className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <span className="text-lg font-semibold text-foreground">
                      {value.title}
                    </span>
                    <ChevronRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-90" />
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </details>
              ))}
            </div>
          </div>

          <div className="relative h-80 overflow-hidden rounded-2xl lg:h-auto lg:min-h-125">
            <Image
              src="/choose-us.jpg"
              alt="CSP operations — cargo ship at sea"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
