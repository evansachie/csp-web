const values = [
  "Quality Control",
  "Integrity",
  "Professionalism",
  "On-Time Delivery",
  "Competitive Pricing",
  "Teamwork",
];

export function ServicesHero() {
  return (
    <section
      className="relative flex min-h-[70vh] flex-col justify-end bg-[url('/services-hero.jpg')] bg-cover bg-center px-6 pb-12 sm:px-8 lg:px-8"
    >
      <div
        className="absolute inset-0 z-0 [background:linear-gradient(to_bottom,rgba(0,0,0,0.25)_0%,rgba(0,0,0,0.72)_100%)]"
        aria-hidden
      />

      <div className="container relative z-10 mx-auto">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/60">
          What We Do
        </p>
        <h1 className="max-w-2xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
          Our Services
        </h1>
        <p className="mt-4 max-w-lg text-base text-white/75 sm:text-lg">
          End-to-end procurement, logistics, and advisory solutions built for
          businesses that move at the speed of global trade.
        </p>

        <ul className="mt-8 flex flex-wrap items-center gap-2.5">
          {values.map((value) => (
            <li
              key={value}
              className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm"
            >
              {value}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
