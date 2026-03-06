import {
  Factory,
  ShoppingCart,
  HeartPulse,
  HardHat,
  Shirt,
  Cog,
  Wheat,
  Truck,
} from "lucide-react";

const industries = [
  {
    icon: Factory,
    title: "Manufacturing",
    description:
      "Supplying machinery, raw materials, and industrial goods to manufacturers across global markets.",
  },
  {
    icon: ShoppingCart,
    title: "Retail & E-commerce",
    description:
      "Reliable sourcing and logistics for consumer goods, packaging, and inventory management.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description:
      "Procurement and delivery of medical equipment, consumables, and healthcare supplies.",
  },
  {
    icon: HardHat,
    title: "Construction",
    description:
      "Sourcing building materials, heavy equipment, and construction supplies on schedule.",
  },
  {
    icon: Shirt,
    title: "Apparel & Textiles",
    description:
      "End-to-end supply chain solutions for fabric, garments, and fashion industry materials.",
  },
  {
    icon: Cog,
    title: "Industrial Equipment",
    description:
      "Procurement and import of specialised machinery and industrial components worldwide.",
  },
  {
    icon: Wheat,
    title: "Agriculture & Food",
    description:
      "Sourcing agricultural machinery, food products, and agri-inputs across international markets.",
  },
  {
    icon: Truck,
    title: "Logistics Providers",
    description:
      "Supporting freight forwarders and distributors with warehousing, cargo, and supply chain services.",
  },
];

export function Industries() {
  return (
    <section className="bg-muted/40 py-20 sm:py-24 lg:py-28">
      <div className="container mx-auto px-6 sm:px-8 lg:px-8">
        <h2 className="mb-10 max-w-xl text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
          Industries We Serve
        </h2>

        <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => {
            const Icon = industry.icon;
            return (
              <div key={industry.title} className="flex flex-col gap-4">
                <Icon className="h-8 w-8 text-muted-foreground" strokeWidth={1.5} />
                <div>
                  <h3 className="mb-2 text-base font-bold text-foreground">
                    {industry.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {industry.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
