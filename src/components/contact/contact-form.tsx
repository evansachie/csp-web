"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, ArrowRight, Loader2 } from "lucide-react";

const SHEET_ENDPOINT = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL ?? "";

const contactDetails = [
  {
    icon: Mail,
    label: "Email",
    value: "info@cspconsultancy.com",
    href: "mailto:info@cspconsultancy.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (000) 000-0000",
    href: "tel:+10000000000",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Global Operations — Africa, Middle East & Asia",
    href: undefined,
  },
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      submittedAt: new Date().toISOString(),
    };

    if (!SHEET_ENDPOINT) {
      setSubmitted(true);
      return;
    }

    setLoading(true);
    try {
      await fetch(SHEET_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="bg-muted/30 py-16 sm:py-20 lg:py-24">
      <div className="container mx-auto px-6 sm:px-8 lg:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col gap-10">
            <div>
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                Contact Details
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Our team operates across multiple time zones — we&apos;ll get
                back to you within one business day.
              </p>
            </div>

            <ul className="flex flex-col gap-6">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-foreground/8">
                    <Icon className="size-4 text-foreground" strokeWidth={1.75} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {label}
                    </div>
                    {href ? (
                      <a
                        href={href}
                        className="mt-0.5 text-sm font-medium text-foreground hover:underline"
                      >
                        {value}
                      </a>
                    ) : (
                      <div className="mt-0.5 text-sm font-medium text-foreground">
                        {value}
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl bg-background p-8 shadow-sm sm:p-10">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center gap-4 py-12 text-center">
                <div className="flex size-14 items-center justify-center rounded-full bg-foreground">
                  <ArrowRight className="size-5 text-background" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  Message received.
                </h3>
                <p className="max-w-xs text-sm text-muted-foreground">
                  Thanks for reaching out. A member of our team will be in
                  touch with you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h2 className="mb-1 text-xl font-bold text-foreground">
                  Send us a message
                </h2>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Jane Doe"
                      className="rounded-xl border border-border bg-muted/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-foreground/20"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      placeholder="Acme Corp"
                      className="rounded-xl border border-border bg-muted/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-foreground/20"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="jane@company.com"
                      className="rounded-xl border border-border bg-muted/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-foreground/20"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+1 000 000 0000"
                      className="rounded-xl border border-border bg-muted/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-foreground/20"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your shipment, supply chain challenge, or how we can help…"
                    className="resize-none rounded-xl border border-border bg-muted/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-foreground/20"
                  />
                </div>

                {error && (
                  <p className="text-sm text-red-500">{error}</p>
                )}

                <Button
                  type="submit"
                  disabled={loading}
                  size="lg"
                  className="group mt-1 rounded-xl bg-foreground font-semibold text-background hover:opacity-85 disabled:opacity-60"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="size-4 animate-spin" />
                      Sending…
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Send Message
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
