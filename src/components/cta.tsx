"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="border-t border-border px-6 py-24 md:py-36">
      <div ref={ref} className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl tracking-tight md:text-5xl">
            Your next invoice takes
            <br />
            <em className="text-accent">30 seconds.</em>
          </h2>
          <p className="mt-4 max-w-md text-muted">
            Free to start. No credit card. Cancel anytime.
          </p>
          <div className="mt-8">
            <a
              href="https://app.withnota.com"
              className="inline-block bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-80"
            >
              Create your first invoice →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
