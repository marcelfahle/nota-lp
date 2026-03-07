"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function AiDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how" className="border-t border-border px-6 py-24 md:py-36">
      <div ref={ref} className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs tracking-wide text-muted uppercase">
            How it works
          </p>
          <h2 className="mt-4 font-display text-3xl tracking-tight md:text-4xl">
            One product.
            <br />
            <em>Multiple ways in.</em>
          </h2>
          <p className="mt-4 max-w-md text-muted">
            Use Nota from the browser, or plug it into the tools you already
            use.
          </p>
        </motion.div>

        {/* Main entry point */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-12 border border-border bg-[#0f0f0f] p-8"
        >
          <p className="text-sm font-medium">Web app</p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">
            Type a sentence, get an invoice. Edit, preview, send — all in one
            place. No signup forms, no 14-step onboarding.
          </p>
          <a
            href="https://app.withnota.com"
            className="mt-5 inline-block text-sm text-accent underline decoration-accent/30 underline-offset-4 transition-colors hover:decoration-accent"
          >
            Try it now →
          </a>
        </motion.div>

        {/* Developer tools */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-px grid gap-px border border-border bg-border md:grid-cols-2"
        >
          <div className="bg-background p-6">
            <div className="flex items-center gap-2">
              <p className="text-sm font-medium">REST API</p>
              <span className="rounded bg-border px-1.5 py-0.5 font-mono text-[10px] text-muted">
                v1
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Create invoices programmatically. Connect to Zapier, Make, or
              build your own integration.
            </p>
          </div>
          <div className="bg-background p-6">
            <div className="flex items-center gap-2">
              <p className="text-sm font-medium">CLI + MCP</p>
              <span className="rounded bg-border px-1.5 py-0.5 font-mono text-[10px] text-muted">
                dev
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Generate invoices from your terminal or through Claude, Cursor,
              and other AI tools.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
