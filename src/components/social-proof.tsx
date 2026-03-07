"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const testimonials = [
  {
    quote:
      "I used to spend 20 minutes per invoice in FreshBooks. With Nota I type one line and it's done. My clients actually comment on how clean the invoices look.",
    name: "Rob Hope",
    role: "Bold Video · Yo! Podcast",
    initials: "RH",
  },
  {
    quote:
      "As a founder, invoicing is the last thing I want to think about. Nota made it disappear from my to-do list entirely.",
    name: "Vanessa Roberts",
    role: "FounderWell",
    initials: "VR",
  },
  {
    quote:
      "Open source, great API, and it just works. Exactly what I was looking for after years of bloated invoicing tools.",
    name: "Mac Martine",
    role: "Wildfront",
    initials: "MM",
  },
];

export function SocialProof() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="border-t border-border px-6 py-24 md:py-36">
      <div ref={ref} className="mx-auto max-w-3xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 font-mono text-xs tracking-wide text-muted uppercase"
        >
          What people are saying
        </motion.p>

        <div className="grid gap-px border border-border bg-border md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 8 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="bg-background p-6 md:p-8"
            >
              <p className="text-sm leading-relaxed text-muted">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                {/* Avatar placeholder — replace src with real headshots */}
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-border text-[11px] font-medium text-muted">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-muted">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
