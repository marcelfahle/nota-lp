"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function WhyNota() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="features" className="border-t border-border px-6 py-24 md:py-36">
      <div ref={ref} className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-display text-3xl tracking-tight md:text-4xl">
            You shouldn&rsquo;t have to think
            <br />
            <em>about invoicing software.</em>
          </h2>
          <p className="mt-4 max-w-md text-muted">
            FreshBooks charges $23/month and limits you to 5 clients.
            Every alternative is a variation of the same formula: feature
            creep, upsells, gated functionality.
          </p>
        </motion.div>

        {/* Before / After — Kathy Sierra style */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-16 grid gap-px border border-border bg-border md:grid-cols-2"
        >
          <div className="bg-background p-8">
            <p className="font-mono text-[10px] tracking-wider text-muted uppercase">
              Without Nota
            </p>
            <ul className="mt-6 space-y-4 text-[15px] text-muted">
              <li className="flex gap-3">
                <span className="mt-0.5 shrink-0 text-muted/40">—</span>
                Open FreshBooks. Navigate to invoices. Click &ldquo;New.&rdquo;
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 shrink-0 text-muted/40">—</span>
                Search for client. Fill in line items. Set due date.
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 shrink-0 text-muted/40">—</span>
                Preview. Adjust. Preview again. Send.
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 shrink-0 text-muted/40">—</span>
                12 clicks. 4 minutes. A generic PDF.
              </li>
            </ul>
          </div>
          <div className="bg-background p-8">
            <p className="font-mono text-[10px] tracking-wider text-muted uppercase">
              With Nota
            </p>
            <ul className="mt-6 space-y-4 text-[15px]">
              <li className="flex gap-3">
                <span className="mt-0.5 shrink-0 text-accent">→</span>
                &ldquo;Invoice Oxide for 40 hours consulting at €120/hr&rdquo;
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 shrink-0 text-accent">→</span>
                Invoice created. Preview shown. One click to send.
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 shrink-0 text-accent">→</span>
                Beautiful PDF. Clean email. Stripe payment link.
              </li>
              <li className="flex gap-3">
                <span className="mt-0.5 shrink-0 text-accent">→</span>
                30 seconds. You look professional. Your client pays fast.
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Features — minimal list */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 grid gap-x-12 gap-y-6 text-sm md:grid-cols-2"
        >
          {[
            ["Unlimited clients", "No caps — send as many invoices as you need"],
            ["Beautiful PDFs", "Your logo, your colors, not a generic template"],
            ["Stripe payments", "Your client clicks 'Pay now' — money in your account"],
            ["Open source", "See the code, self-host for free if you want"],
            ["Automatic reminders", "Nota follows up so you don't have to"],
            ["EU-ready", "Handles VAT, reverse charge, and XRechnung out of the box"],
          ].map(([title, desc]) => (
            <div key={title} className="flex gap-3">
              <span className="mt-0.5 shrink-0 text-muted">·</span>
              <div>
                <span className="font-medium">{title}</span>
                <span className="text-muted"> — {desc}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
