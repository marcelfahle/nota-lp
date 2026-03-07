"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function Pricing() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="pricing" className="border-t border-border px-6 py-24 md:py-36">
      <div ref={ref} className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl tracking-tight md:text-4xl">
            One plan. Everything included.
          </h2>
          <p className="mt-4 max-w-md text-muted">
            No tiers. No feature gating. Volume-gated, not capability-gated.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2"
        >
          {/* Free */}
          <div className="bg-background p-8">
            <p className="font-mono text-[10px] tracking-wider text-muted uppercase">
              Free
            </p>
            <p className="mt-3 font-display text-4xl tracking-tight">$0</p>
            <p className="mt-1 text-sm text-muted">per month</p>
            <ul className="mt-4 space-y-1.5 text-sm text-muted">
              <li>5 invoices per month</li>
              <li>Stripe payment links</li>
              <li>PDF &amp; email delivery</li>
              <li>No credit card required</li>
            </ul>
            <a
              href="https://app.withnota.com"
              className="mt-8 block border border-border py-2.5 text-center text-sm font-medium transition-colors hover:bg-foreground/[0.02]"
            >
              Start free
            </a>
          </div>

          {/* Pro */}
          <div className="bg-background p-8">
            <p className="font-mono text-[10px] tracking-wider text-muted uppercase">
              Nota
            </p>
            <p className="mt-3 font-display text-4xl tracking-tight">$9</p>
            <p className="mt-1 text-sm text-muted">
              per month · $90/year
            </p>
            <ul className="mt-4 space-y-1.5 text-sm text-muted">
              <li>Unlimited invoices &amp; clients</li>
              <li>Custom branding &amp; domain</li>
              <li>Automatic payment reminders</li>
              <li>Priority support</li>
            </ul>
            <a
              href="https://app.withnota.com"
              className="mt-8 block bg-foreground py-2.5 text-center text-sm font-medium text-background transition-opacity hover:opacity-80"
            >
              Get started
            </a>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 text-sm text-muted"
        >
          Self-host for free, always.{" "}
          <a
            href="https://github.com/nota-app/nota"
            className="underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-muted"
          >
            View source on GitHub
          </a>
        </motion.p>
      </div>
    </section>
  );
}
