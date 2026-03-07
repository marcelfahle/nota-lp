"use client";

import { motion } from "motion/react";

const comparisons = [
  {
    label: "Monthly price",
    freshbooks: "$23",
    nota: "$9",
  },
  {
    label: "Client limit",
    freshbooks: "5 clients",
    nota: "Unlimited",
  },
  {
    label: "6th client",
    freshbooks: "Upgrade to $43/mo",
    nota: "Included",
  },
  {
    label: "Invoice creation",
    freshbooks: "12 clicks, 4 minutes",
    nota: "1 sentence, 30 seconds",
  },
  {
    label: "Payment links",
    freshbooks: "Extra fee",
    nota: "Stripe, built in",
  },
  {
    label: "API access",
    freshbooks: "No",
    nota: "Full REST API",
  },
  {
    label: "Open source",
    freshbooks: "No",
    nota: "MIT licensed",
  },
  {
    label: "Self-host",
    freshbooks: "No",
    nota: "Free, forever",
  },
];

const painPoints = [
  {
    title: "You're paying $23/month to send 3 invoices",
    body: "FreshBooks Lite costs $23/month and caps you at 5 clients. Need a 6th? That\u2019s $43/month (Plus plan). Nota is $9/month for unlimited everything — or free for up to 5 invoices/month.",
  },
  {
    title: "Creating an invoice takes 12 clicks",
    body: "Open FreshBooks. Navigate to invoices. Click New. Search client. Add line items. Set due date. Preview. Adjust formatting. Preview again. Send. With Nota, you type one sentence and it's done.",
  },
  {
    title: "Your invoices look like everyone else's",
    body: "FreshBooks gives you the same template from 2014. Nota generates clean, modern invoices with your branding — the kind that make clients think you have your shit together.",
  },
  {
    title: "You can't see the code",
    body: "FreshBooks is a black box. You can't audit it, extend it, or self-host it. Nota is MIT-licensed open source. You own your data and your workflow.",
  },
];

export function FreshBooksContent() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 pt-32 pb-24 md:pt-44 md:pb-36">
        <div className="mx-auto max-w-3xl">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-5 font-mono text-xs tracking-wide text-muted uppercase"
          >
            Nota vs FreshBooks
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="font-display text-[clamp(2.5rem,5.5vw,4rem)] leading-[1.08] tracking-tight"
          >
            FreshBooks charges $23/mo
            <br />
            <span className="text-muted line-through decoration-muted/40">
              for 5 clients.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-muted"
          >
            Nota gives you unlimited clients, unlimited invoices, and a faster
            workflow for{" "}
            <span className="font-medium text-foreground">$9/month</span>.
            Open source. No upsells. No bullshit.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-10 flex items-center gap-4"
          >
            <a
              href="https://app.withnota.com"
              className="rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-80"
            >
              Switch to Nota — free to start
            </a>
          </motion.div>
        </div>
      </section>

      {/* The math */}
      <section className="border-t border-border px-6 py-24 md:py-36">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="font-mono text-xs tracking-wide text-muted uppercase">
              The math
            </p>
            <h2 className="mt-4 font-display text-3xl tracking-tight md:text-4xl">
              You&rsquo;re overpaying by 3×.
            </h2>
            <p className="mt-4 max-w-md text-muted">
              Side by side. No spin. Just the numbers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-12 overflow-x-auto"
          >
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-foreground">
                  <th className="pb-3 pr-8 font-mono text-[10px] tracking-wider text-muted uppercase" />
                  <th className="pb-3 pr-8 font-mono text-[10px] tracking-wider text-muted uppercase">
                    FreshBooks
                  </th>
                  <th className="pb-3 font-mono text-[10px] font-bold tracking-wider uppercase">
                    Nota
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row) => (
                  <tr key={row.label} className="border-b border-border">
                    <td className="py-3.5 pr-8 font-medium">{row.label}</td>
                    <td className="py-3.5 pr-8 text-muted">
                      {row.freshbooks}
                    </td>
                    <td className="py-3.5 font-medium">{row.nota}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Annual savings callout */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-12 border border-border bg-[#0f0f0f] p-8"
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-mono text-[10px] tracking-wider text-muted uppercase">
                  Annual savings
                </p>
                <p className="mt-2 font-display text-4xl tracking-tight">
                  $168
                </p>
                <p className="mt-1 text-sm text-muted">
                  per year switching from FreshBooks Lite to Nota
                </p>
              </div>
              <div className="text-sm text-muted">
                <p>
                  FreshBooks Lite: $23 × 12 ={" "}
                  <span className="text-foreground">$276/yr</span>
                </p>
                <p className="mt-1">
                  Nota: $9 × 12 ={" "}
                  <span className="text-foreground">$108/yr</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pain points */}
      <section className="border-t border-border px-6 py-24 md:py-36">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl tracking-tight md:text-4xl">
              Why people leave FreshBooks.
            </h2>
          </motion.div>

          <div className="mt-12 space-y-px border border-border bg-border">
            {painPoints.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-background p-8"
              >
                <h3 className="text-base font-medium">{point.title}</h3>
                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
                  {point.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration CTA */}
      <section className="border-t border-border px-6 py-24 md:py-36">
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl tracking-tight md:text-5xl">
              Switching takes
              <br />
              <em className="text-accent">5 minutes.</em>
            </h2>
            <p className="mt-4 max-w-md text-muted">
              Export your client list from FreshBooks. Import into Nota. Your
              next invoice goes out the same day.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href="https://app.withnota.com"
                className="inline-block bg-foreground px-6 py-3 text-center text-sm font-medium text-background transition-opacity hover:opacity-80"
              >
                Start with Nota — free →
              </a>
              <a
                href="/"
                className="text-sm text-muted underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-muted"
              >
                Back to homepage
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="border-t border-border px-6 py-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs leading-relaxed text-muted/60">
            FreshBooks is a trademark of FreshBooks. Nota is not affiliated
            with, endorsed by, or sponsored by FreshBooks. Pricing and feature
            information is based on publicly available sources as of March 2026
            and may change. All comparisons reference FreshBooks Lite
            ($23/mo) unless otherwise noted.
          </p>
        </div>
      </section>
    </>
  );
}
