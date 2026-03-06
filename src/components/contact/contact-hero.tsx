export function ContactHero() {
  return (
    <section className="bg-background pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-36 lg:pb-20">
      <div className="container mx-auto px-6 sm:px-8 lg:px-8">
        <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Get in Touch
        </p>
        <h1 className="max-w-2xl text-4xl font-extrabold leading-tight text-foreground sm:text-5xl lg:text-6xl">
          Have a shipment to move?
          <br />
          <span className="text-muted-foreground font-extrabold">A supply chain to rethink?</span>
          <br />
          <span className="text-muted-foreground/60 font-extrabold">A market to enter?</span>
        </h1>
        <p className="mt-5 max-w-md text-base text-muted-foreground sm:text-lg">
          We&apos;re here to help you act with speed, precision, and confidence.
          Reach out and a member of our team will be in touch shortly.
        </p>
      </div>
    </section>
  );
}
