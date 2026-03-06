const markets = [
  {
    flag: "🇦🇪",
    region: "Dubai & UAE",
    focus: "Re-export hub, free zone procurement, and Middle East distribution.",
  },
  {
    flag: "🌍",
    region: "West Africa",
    focus:
      "Ghana-based operations serving governments, NGOs, and corporates across the sub-region.",
  },
  {
    flag: "🇭🇰",
    region: "Hong Kong",
    focus: "Asia-Pacific sourcing, manufacturing liaison, and cargo consolidation.",
  },
  {
    flag: "🇨🇳",
    region: "China",
    focus: "Factory-direct procurement, quality inspection, and container freight.",
  },
  {
    flag: "🇬🇧",
    region: "United Kingdom",
    focus: "European supply chain partnerships and advisory services.",
  },
  {
    flag: "🇺🇸",
    region: "United States",
    focus: "North American sourcing, compliance, and cross-border logistics.",
  },
];

export function GlobalReach() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-primary">
            <span className="inline-block h-px w-8 bg-primary" />
            Global Presence
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Where we operate
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            CSP has built deep trade relationships across key global corridors — from
            West Africa to the Gulf, South-East Asia to Europe.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {markets.map(({ flag, region, focus }) => (
            <div
              key={region}
              className="group flex flex-col gap-3 rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-md"
            >
              <span className="text-4xl leading-none" aria-hidden="true">
                {flag}
              </span>
              <div>
                <h3 className="text-base font-semibold text-foreground">{region}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {focus}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
