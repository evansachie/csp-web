"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const AUTOPLAY_INTERVAL = 5000;

const testimonials = [
  {
    quote:
      "CSP transformed how we handle cross-border procurement. Their team is responsive, professional, and always delivers on time — exactly what a growing business needs.",
    name: "Kwame Asante",
    role: "CEO, Asante Trading Co.",
    since: "Client since 2022",
    image: "/testimonial-1.jpg",
  },
  {
    quote:
      "Working with CSP on our supply chain overhaul was a game changer. They brought clarity, structure, and real cost savings to a process that had been a headache for years.",
    name: "Priya Nair",
    role: "Head of Operations, MedEquip Africa",
    since: "Client since 2023",
    image: "/testimonial-2.jpg",
  },
  {
    quote:
      "From freight forwarding to business advisory, CSP handles everything with precision. Their global network and local expertise is unmatched in the markets we operate in.",
    name: "James Osei-Bonsu",
    role: "Procurement Director, BuildCore Ltd.",
    since: "Client since 2021",
    image: "/testimonial-3.jpg",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const t = testimonials[active];

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [active]);

  function goTo(index: number) {
    setActive(index);
  }

  return (
    <section className="bg-muted/40 py-20 sm:py-24 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl bg-background">
          <div className="flex flex-col sm:flex-row">
            <div className="relative h-64 w-full shrink-0 sm:h-auto sm:w-72 lg:w-96">
              <Image
                key={t.image}
                src={t.image}
                alt={t.name}
                fill
                className="object-cover transition-opacity duration-500"
                sizes="(max-width: 640px) 100vw, 384px"
              />
            </div>

            <div className="flex flex-1 flex-col justify-between gap-8 p-8 sm:p-10 lg:p-12">
              <p className="text-xl leading-snug text-foreground sm:text-2xl lg:text-3xl">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-end justify-between gap-4">
                <div>
                  <div className="font-semibold text-foreground">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
                <div className="text-right text-xs font-medium uppercase tracking-widest text-muted-foreground">
                  {t.since}
                </div>
              </div>

              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={cn(
                      "h-2 rounded-full transition-all duration-300",
                      i === active
                        ? "w-6 bg-foreground"
                        : "w-2 bg-border hover:bg-muted-foreground"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
