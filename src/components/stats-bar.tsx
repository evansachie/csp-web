export function StatsBar() {
  const stats = [
    { value: "30+", label: "Countries Served" },
    { value: "15+", label: "Years of Experience" },
    { value: "2,500+", label: "Successful Shipments" },
    { value: "8+", label: "Industries Covered" },
  ];

  return (
    <section className="w-full bg-background py-20 sm:py-24 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col">
              <div className="mb-3 text-5xl font-bold text-foreground sm:text-6xl lg:text-7xl">
                {stat.value}
              </div>
              <div className="border-t border-border pt-3 text-sm font-medium text-muted-foreground sm:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
