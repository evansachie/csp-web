import Link from "next/link";
import Image from "next/image";
import {
  Globe,
  GitBranch,
  Briefcase,
  Monitor,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Import & Export",
    description:
      "Reliable sourcing and delivery of general goods, machinery, food products, electronics, and more — across borders, on time.",
    href: "/services#import-export",
    featured: true,
    image: "/cta-4.jpg",
  },
  {
    icon: GitBranch,
    title: "Supply Chain Management",
    description:
      "End-to-end procurement and supply chain solutions that improve efficiency, minimise costs, and support business growth.",
    href: "/services#supply-chain",
    featured: false,
    image: "/service-supply-chain.jpg",
  },
  {
    icon: Briefcase,
    title: "Business Advisory",
    description:
      "Strategic guidance for informed decision-making, operational efficiency, risk management, and stronger governance.",
    href: "/services#advisory",
    featured: false,
    image: "/service-advisory.jpg",
  },
  {
    icon: Monitor,
    title: "IT Consultancy",
    description:
      "Expert guidance on technology strategy, systems implementation, and digital optimisation tailored to your business.",
    href: "/services#it",
    featured: false,
    image: "/service-it.jpg",
  },
];

export function ServicesOverview() {
  return (
    <section className="bg-muted/60 py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-6 sm:px-8 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <h2 className="max-w-xs text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
            Our Services
          </h2>
          <div className="flex flex-col gap-4 sm:items-end sm:text-right">
            <Link
              href="/services"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              View all Services
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground sm:text-base">
              Quality control, competitive pricing, and integrity at the core of
              every service we deliver — globally.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.title}
                href={service.href}
                className="group relative flex min-h-72 flex-col justify-between overflow-hidden rounded-2xl p-6 transition-opacity hover:opacity-90"
              >
                <Image
                  src={service.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className={`absolute inset-0 ${service.featured ? "bg-foreground/80" : "bg-foreground/55"}`} />

                <div className="relative flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-white/70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>

                <div className="relative flex flex-col gap-2">
                  <h3 className="text-xl font-bold leading-snug text-white">
                    {service.title}
                  </h3>
                  <p className="line-clamp-3 text-sm leading-relaxed text-white/70">
                    {service.description}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
