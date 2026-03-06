export function AboutHero() {
  return (
    <section className="relative flex min-h-[75vh] flex-col justify-end bg-[url('/about-hero.jpg')] bg-cover bg-center px-6 pb-14 sm:px-8 lg:px-8">
      <div
        className="absolute inset-0 z-0 [background:linear-gradient(to_bottom,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.68)_100%)]"
        aria-hidden
      />

      <div className="container relative z-10 mx-auto">
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/60">
          Who We Are
        </p>
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
          Global Reach. Local Expertise. Trade Simplified.
        </h1>
        <p className="mt-4 max-w-md text-base text-white/70 sm:text-lg">
          A procurement and supply chain partner built for the complexity of
          modern global trade.
        </p>
      </div>
    </section>
  );
}
