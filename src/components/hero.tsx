"use client";

import { motion } from "motion/react";
import { useState, useEffect } from "react";

const TYPING_TEXT =
  "Invoice Oxide for 40 hours consulting at €120/hr, due in 30 days";

function HeroDemo() {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const startDelay = setTimeout(() => {
      let i = 0;
      const id = setInterval(() => {
        i++;
        setDisplayed(TYPING_TEXT.slice(0, i));
        if (i >= TYPING_TEXT.length) {
          clearInterval(id);
          setTimeout(() => setDone(true), 600);
        }
      }, 35);
      return () => clearInterval(id);
    }, 1200);
    return () => clearTimeout(startDelay);
  }, []);

  return (
    <div className="mt-14 md:mt-16">
      {/* Input */}
      <div className="border border-border bg-[#0f0f0f] p-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-block h-2 w-2 rounded-full bg-muted/30" />
          <span className="inline-block h-2 w-2 rounded-full bg-muted/30" />
          <span className="inline-block h-2 w-2 rounded-full bg-muted/30" />
        </div>
        <div className="font-mono text-sm leading-relaxed">
          <span className="text-muted">→ </span>
          <span>{displayed}</span>
          {!done && (
            <span className="cursor-blink ml-0.5 inline-block h-4 w-[2px] bg-accent align-middle" />
          )}
        </div>
      </div>

      {/* Invoice result */}
      {done && (
        <motion.div
          initial={{ opacity: 0, y: 8, scaleY: 0.97 }}
          animate={{ opacity: 1, y: 0, scaleY: 1 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="border border-t-0 border-border bg-[#0f0f0f] origin-top"
        >
          {/* Status bar */}
          <div className="flex items-center gap-2 px-5 py-3 border-b border-border">
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.15, type: "spring", stiffness: 400 }}
              className="inline-block h-1.5 w-1.5 rounded-full bg-accent"
            />
            <span className="font-mono text-xs text-muted">
              Invoice created · ready to send
            </span>
          </div>

          {/* Invoice summary */}
          <div className="px-5 py-5">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm font-medium">Oxide Computer Company</p>
                <p className="mt-0.5 text-xs text-muted">
                  40 hrs × €120/hr · due in 30 days
                </p>
              </div>
              <div className="text-right">
                <p className="font-display text-xl tracking-tight">
                  €4,800.00
                </p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="mt-5 flex gap-3">
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
                className="flex-1 bg-foreground py-2 text-center text-xs font-medium text-background"
              >
                Send invoice →
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                className="border border-border py-2 px-4 text-center text-xs text-muted"
              >
                Preview PDF
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}

export function Hero() {
  return (
    <section className="px-6 pt-32 pb-24 md:pt-44 md:pb-36">
      <div className="mx-auto max-w-3xl">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-5 font-mono text-xs tracking-wide text-muted uppercase"
        >
          Invoicing for freelancers & small teams
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="font-display text-[clamp(2.75rem,6vw,4.5rem)] leading-[1.05] tracking-tight"
        >
          Send invoices.
          <br />
          Get paid. <em>Move on.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 max-w-lg text-lg leading-relaxed text-muted"
        >
          Describe your work in one sentence — Nota turns it into a professional
          invoice with a payment link, ready to send.{" "}
          <span className="text-accent">$9/month</span>.
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
            Create your first invoice
          </a>
          <a
            href="https://github.com/nota-app/nota"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-muted"
          >
            View source
          </a>
        </motion.div>

        {/* Live demo */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <HeroDemo />
        </motion.div>
      </div>
    </section>
  );
}
