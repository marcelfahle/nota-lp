"use client";

import { motion } from "motion/react";
import { MarkOvershoot } from "@/components/logo";

/* The card Nota renders inside a chat, whether that's ChatGPT, Claude or Nota. */
export function InvoiceCard({ sent, wide = false }: { sent: boolean; wide?: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={`w-full border border-ink/15 bg-[oklch(0.99_0.004_88)] text-ink shadow-[0_12px_24px_-16px_oklch(0.2_0.012_75/0.35)] ${wide ? "" : "max-w-[21rem]"}`}
    >
      <div className="flex items-center justify-between border-b border-ink/10 px-3.5 py-2">
        <span className="flex items-center gap-1.5 text-[12px] font-semibold">
          <MarkOvershoot className="h-4 w-auto" />
          Nota
          <span className="font-mono text-[11px] font-normal text-ink-2">· INV-0042</span>
        </span>
        <span
          className={`label px-1.5 py-0.5 text-[9.5px] transition-colors duration-300 ${
            sent ? "bg-hi text-ink" : "bg-ink/8 text-ink-2"
          }`}
        >
          {sent ? "Sent" : "Draft"}
        </span>
      </div>
      <div className="px-3.5 pt-3 pb-3.5">
        <div className="flex items-baseline justify-between gap-3">
          <p className="text-[14px] font-semibold">Oxide GmbH</p>
          <p className="font-mono text-[11px] text-ink-2">due 30 Oct</p>
        </div>
        <p className="font-mono text-[11px] text-ink-2">Consulting · 40 h × €120 · reverse charge</p>
        <p className="cond mt-2 text-[2rem] leading-none font-black tabular-nums">€4,800.00</p>
        <div className="mt-3 flex gap-1.5 text-[12px] font-semibold">
          {sent ? (
            <>
              <span className="bg-ink px-3 py-1.5 text-paper">Mark paid</span>
              <span className="border border-ink/20 px-3 py-1.5">Remind</span>
              <span className="border border-ink/20 px-3 py-1.5">PDF</span>
            </>
          ) : (
            <>
              <span className="bg-ink px-3 py-1.5 text-paper">Send</span>
              <span className="border border-ink/20 px-3 py-1.5">Preview PDF</span>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}
