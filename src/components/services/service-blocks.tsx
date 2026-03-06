import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const services = [
  {
    id: "freight",
    category: "Logistics",
    tagline: "Global freight, handled with precision.",
    body: "We manage the full movement of your goods — air, sea, and road — across international borders. Our freight forwarding service covers documentation, customs clearance, tracking, and last-mile delivery, so your shipments arrive on time, every time.",
    cta: "Learn more about Freight Forwarding",
    image: "/services/freight-forwarding.jpg",
    imageAlt: "Cargo containers at a port terminal",
    imageRight: true,
  },
  {
    id: "warehousing",
    category: "Storage & Distribution",
    tagline: "Secure storage. Smart distribution.",
    body: "Our warehousing facilities are designed for reliability and efficiency. Whether you need short-term storage or a long-term distribution hub, we provide inventory management, order fulfilment, and real-time stock visibility.",
    cta: "Learn more about Warehousing",
    image: "/services/warehousing.jpg",
    imageAlt: "Inside a large warehouse",
    imageRight: false,
  },
  {
    id: "cargo-insurance",
    category: "Risk Management",
    tagline: "Protect every shipment, every route.",
    body: "Cargo loss, damage, and delays are real risks in global trade. Our cargo insurance solutions give you comprehensive cover tailored to your goods and shipping lanes, backed by trusted underwriters and fast claims processing.",
    cta: "Learn more about Cargo Insurance",
    image: "/services/cargo-insurance.jpg",
    imageAlt: "Containers on a cargo ship at sea",
    imageRight: true,
  },
  {
    id: "supply-chain",
    category: "Supply Chain",
    tagline: "End-to-end visibility, zero blind spots.",
    body: "We design, optimise, and manage supply chains that are resilient, transparent, and cost-effective. From supplier onboarding to last-mile delivery, we give you full control and real-time data across every node.",
    cta: "Learn more about Supply Chain Management",
    image: "/services/supply-chain.jpg",
    imageAlt: "Supply chain operations overview",
    imageRight: false,
  },
  {
    id: "advisory",
    category: "Advisory",
    tagline: "Strategy built for growth markets.",
    body: "Our business advisory team brings deep expertise in international trade, procurement strategy, and market entry. We help companies navigate new markets, cut costs, and build the commercial partnerships that drive long-term growth.",
    cta: "Learn more about Business Advisory",
    image: "/services/business-advisory.jpg",
    imageAlt: "Business team in discussion",
    imageRight: true,
  },
  {
    id: "it",
    category: "Technology",
    tagline: "Digital infrastructure for modern logistics.",
    body: "From ERP integrations to custom logistics software, our IT consultancy arm helps businesses modernise their operations. We deliver scalable tech solutions that connect your supply chain, automate reporting, and improve decision-making.",
    cta: "Learn more about IT Consultancy",
    image: "/services/it-consultancy.jpg",
    imageAlt: "IT and software infrastructure",
    imageRight: false,
  },
];

export function ServiceBlocks() {
  return (
    <div>
      {services.map((service, index) => (
        <section
          key={service.category}
          id={service.id}
          className={`py-20 sm:py-24 lg:py-28 ${index % 2 === 0 ? "bg-background" : "bg-muted/40"}`}
        >
          <div className="container mx-auto px-6 sm:px-8 lg:px-8">
            <div
              className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-20 ${!service.imageRight ? "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1" : ""}`}
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {service.category}
                  </p>
                  <span className="h-px w-8 bg-muted-foreground/40" />
                </div>
                <h2 className="text-3xl font-extrabold leading-tight text-foreground sm:text-4xl lg:text-5xl">
                  {service.tagline}
                </h2>
                <p className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
                  {service.body}
                </p>
                <div>
                  <Button
                    asChild
                    className="group rounded-xl bg-foreground px-6 font-semibold text-background hover:opacity-85"
                  >
                    <Link href="/contact" className="flex items-center gap-2">
                      {service.cta}
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="relative h-72 overflow-hidden rounded-2xl bg-muted sm:h-96 lg:h-120">
                <Image
                  src={service.image}
                  alt={service.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
