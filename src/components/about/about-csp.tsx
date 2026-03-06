export function AboutCSP() {
  return (
    <section className="bg-background py-20 sm:py-24 lg:py-28">
      <div className="container mx-auto px-6 sm:px-8 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 className="text-3xl font-extrabold leading-tight text-foreground sm:text-4xl lg:text-5xl">
              A procurement partner built for global complexity.
            </h2>
          </div>

          <div className="flex flex-col gap-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
            <p>
              CSP is a leading Procurement and Supply Chain Management Services
              firm specialising in procurement services and supply chain
              management. We help ensure that businesses — and the people they
              serve — move smarter and faster towards their goals.
            </p>
            <p>
              We deliver procurement and supply chain management solutions to{" "}
              <span className="font-semibold text-foreground">Governments</span>
              ,{" "}
              <span className="font-semibold text-foreground">NGOs</span>,{" "}
              <span className="font-semibold text-foreground">individuals</span>
              , and{" "}
              <span className="font-semibold text-foreground">
                small, medium, and large corporate organisations
              </span>{" "}
              worldwide. No matter the scale, we bring the same standard of
              precision, transparency, and commercial rigour to every engagement.
            </p>
            <p>
              With over 15 years of experience and a presence spanning 30+
              countries, CSP has established itself as a trusted partner for
              organisations navigating the demands of international trade.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
