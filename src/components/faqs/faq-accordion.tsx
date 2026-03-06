"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCategory {
  category: string;
  items: FaqItem[];
}

function AccordionItem({ question, answer }: FaqItem) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border last:border-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-start justify-between gap-6 py-5 text-left"
        data-state={open ? "open" : "closed"}
      >
        <span className="text-sm font-semibold text-foreground sm:text-base">
          {question}
        </span>
        <span className="mt-0.5 shrink-0 text-primary">
          {open ? (
            <Minus className="size-4" strokeWidth={2} />
          ) : (
            <Plus className="size-4" strokeWidth={2} />
          )}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 pb-5 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-sm leading-relaxed text-muted-foreground">{answer}</p>
      </div>
    </div>
  );
}

export function FaqAccordion({ categories }: { categories: FaqCategory[] }) {
  return (
    <div className="flex flex-col gap-12">
      {categories.map(({ category, items }) => (
        <div key={category}>
          <h2 className="mb-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-primary">
            <span className="inline-block h-px w-6 bg-primary" />
            {category}
          </h2>
          <div className="rounded-2xl border border-border bg-card px-6">
            {items.map((item) => (
              <AccordionItem key={item.question} {...item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
