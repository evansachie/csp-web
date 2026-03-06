export function ContactMap() {
  return (
    <section className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-6 sm:px-8 lg:px-8">
        <div className="mb-8">
          <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Our Location
          </p>
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Find us in Accra, Ghana
          </h2>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border">
          <iframe
            title="CSP Office Location — Accra, Ghana"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127521.88085720827!2d-0.2676823!3d5.5912702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9084b2b7a773%3A0xbed14ed8650e2dd3!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sgh!4v1700000000000!5m2!1sen!2sgh"
            width="100%"
            height="480"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full border-0"
          />
        </div>
      </div>
    </section>
  );
}
