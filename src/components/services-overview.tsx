import Link from "next/link";
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
  },
  {
    icon: GitBranch,
    title: "Supply Chain Management",
    description:
      "End-to-end procurement and supply chain solutions that improve efficiency, minimise costs, and support business growth.",
    href: "/services#supply-chain",
    featured: false,
  },
  {
    icon: Briefcase,
    title: "Business Advisory",
    description:
      "Strategic guidance for informed decision-making, operational efficiency, risk management, and stronger governance.",
    href: "/services#advisory",
    featured: false,
  },
  {
    icon: Monitor,
    title: "IT Consultancy",
    description:
      "Expert guidance on technology strategy, systems implementation, and digital optimisation tailored to your business.",
    href: "/services#it",
    featured: false,
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
                className={`group relative flex min-h-72 flex-col justify-between rounded-2xl p-6 transition-opacity hover:opacity-90 ${
                  service.featured
                    ? "bg-foreground text-background"
                    : "bg-muted text-foreground"
                }`}
              >
                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      service.featured
                        ? "bg-background/15"
                        : "bg-background"
                    }`}
                  >
                    <Icon
                      className={`h-5 w-5 ${
                        service.featured ? "text-background" : "text-foreground"
                      }`}
                    />
                  </div>
                  <ArrowUpRight
                    className={`h-5 w-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                      service.featured
                        ? "text-background/70"
                        : "text-muted-foreground"
                    }`}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-bold leading-snug">
                    {service.title}
                  </h3>
                  <p
                    className={`line-clamp-3 text-sm leading-relaxed ${
                      service.featured
                        ? "text-background/70"
                        : "text-muted-foreground"
                    }`}
                  >
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
