"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function InvoicePreview() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="border-t border-border px-6 py-24 md:py-36">
      <div ref={ref} className="mx-auto max-w-3xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center text-sm text-muted"
        >
          What your client receives
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-md border border-border bg-[#111111] p-10"
        >
          {/* From */}
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm font-semibold">Studio Marcel</p>
              <p className="mt-0.5 text-xs text-muted">hello@studiomarcel.dev</p>
            </div>
            <p className="font-mono text-[11px] text-muted">INV-2026-0042</p>
          </div>

          <div className="my-8 h-px bg-border" />

          {/* Bill to */}
          <div className="mb-8">
            <p className="mb-1 font-mono text-[10px] tracking-wider text-muted uppercase">
              Bill to
            </p>
            <p className="text-sm font-medium">Oxide Computer Company</p>
          </div>

          {/* Items */}
          <div className="space-y-4 text-sm">
            <div className="flex justify-between">
              <div>
                <p>Consulting services</p>
                <p className="text-xs text-muted">40 hrs × €120</p>
              </div>
              <p className="font-mono tabular-nums text-muted">€4,800.00</p>
            </div>
            <div className="flex justify-between">
              <div>
                <p>Design review</p>
                <p className="text-xs text-muted">8 hrs × €120</p>
              </div>
              <p className="font-mono tabular-nums text-muted">€960.00</p>
            </div>
          </div>

          <div className="my-8 h-px bg-border" />

          {/* Total */}
          <div className="flex items-end justify-between">
            <p className="text-xs text-muted">Due March 28, 2026</p>
            <div className="text-right">
              <p className="font-mono text-[10px] tracking-wider text-muted uppercase">
                Total
              </p>
              <p className="font-display text-2xl tracking-tight">€5,760.00</p>
            </div>
          </div>

          <button className="mt-8 w-full bg-foreground py-3 text-sm font-medium text-background transition-opacity hover:opacity-80">
            Pay now →
          </button>

          <p className="mt-4 text-center font-mono text-[10px] text-muted">
            Sent with Nota
          </p>
        </motion.div>
      </div>
    </section>
  );
}
