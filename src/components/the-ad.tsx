"use client";

import { motion } from "motion/react";
import { InvoicePaper } from "@/components/invoice-paper";
import { SectionLabel } from "@/components/section-label";
import { Stamp } from "@/components/stamp";

/*
 * Laid out like a 1960s long-copy print ad: picture, caption, headline,
 * then numbered facts in columns. People read captions; so, a caption.
 */

const FACTS = [
  "The invoice is the last thing your client sees before paying you. So Nota sets it like a document, not a spreadsheet: real type, generous margins, your name at the top and nothing fighting it for attention.",
  "Every invoice goes out as a PDF and as an XRechnung e-invoice. When a German accounts team asks for “the XML”, you already sent it.",
  "Billing across an EU border? Mark it reverse charge. Nota zeroes the VAT and prints the note on the invoice, so nobody has to email you about it.",
  "The Pay button is Stripe. Your client pays with whatever your Stripe account accepts. Nota adds nothing on top of Stripe’s own fee.",
  "Invoice numbers are sequential and never collide. Change your numbering scheme and Nota skips numbers already taken instead of reusing them.",
  "More than one bank account? Attach one to each client. Your Swiss client sees the CHF account; everyone else sees EUR.",
  "Late payer? Say “nudge Oxide”. A polite reminder goes out. You don’t have to write it, or feel awkward about it.",
  "Every send, reminder and payment is written to an activity log, so “did they get it?” always has an answer.",
  "Nota is MIT-licensed. You can read every line of code that touches your money.",
];

const QUOTES = [
  {
    quote:
      "I used to spend 20 minutes per invoice in FreshBooks. With Nota I type one line and it's done. My clients actually comment on how clean the invoices look.",
    name: "Rob Hope",
    role: "Bold Video · Yo! Podcast",
  },
  {
    quote:
      "As a founder, invoicing is the last thing I want to think about. Nota made it disappear from my to-do list entirely.",
    name: "Vanessa Roberts",
    role: "FounderWell",
  },
  {
    quote:
      "Open source, great API, and it just works. Exactly what I was looking for after years of bloated invoicing tools.",
    name: "Mac Martine",
    role: "Wildfront",
  },
];

export function TheAd() {
  return (
    <section className="overflow-x-clip bg-paper-2 px-4 pt-6 pb-24 md:px-8 md:pb-36">
      <div className="mx-auto max-w-[88rem]">
        <SectionLabel n="03">What your client sees</SectionLabel>

        <figure className="mx-auto mt-16 max-w-[34rem] md:mt-24">
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: -1.6 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="halftone-shadow relative isolate text-[12px] sm:text-[14px] md:text-[15px]"
          >
            <InvoicePaper />
            <motion.div
              initial={{ scale: 1.9, opacity: 0, rotate: 4 }}
              whileInView={{ scale: 1, opacity: 0.9, rotate: 14 }}
              viewport={{ once: true, margin: "-20%" }}
              transition={{ duration: 0.18, delay: 0.7, ease: [0.7, 0, 0.84, 0] }}
              className="pointer-events-none absolute top-[40%] right-[2%] w-[48%] text-red mix-blend-multiply md:right-[-6%] md:w-[52%]"
            >
              <Stamp word="PAID" sub="4 DAYS LATER" className="w-full" />
            </motion.div>
          </motion.div>
          <figcaption className="mx-auto mt-10 max-w-sm text-center font-serif text-[0.98rem] leading-snug text-ink-2 italic">
            INV-0042, as Oxide GmbH received it. One sentence to write, one click to pay. Paid in
            four days.
          </figcaption>
        </figure>

        <div className="mx-auto mt-20 max-w-5xl text-center">
          <h2
            className="font-serif text-[clamp(2.4rem,5.6vw,5rem)] leading-[1.02] font-medium tracking-[-0.02em]"
            style={{ fontVariationSettings: '"opsz" 72' }}
          >
            &ldquo;At €4,800, the loudest thing on this invoice is the Pay button.&rdquo;
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-serif text-[1.2rem] leading-[1.5] text-ink-2 italic">
            What makes this the best-looking invoice your client will get all year? There is no
            magic to it. Just patient attention to detail.
          </p>
        </div>

        <ol className="mx-auto mt-16 max-w-6xl gap-x-10 font-serif text-[1.08rem] leading-[1.6] md:columns-2 lg:columns-3">
          {FACTS.map((fact, i) => (
            <li key={i} className="mb-6 break-inside-avoid">
              <span className="cond mr-2 text-[1.3em] font-black">{i + 1}.</span>
              {fact}
            </li>
          ))}
        </ol>

        <div className="mx-auto mt-20 grid max-w-6xl gap-px border border-ink/15 bg-ink/15 md:grid-cols-3">
          {QUOTES.map((q) => (
            <blockquote key={q.name} className="bg-paper-2 p-7 md:p-8">
              <p className="font-serif text-[1.15rem] leading-[1.5] italic">&ldquo;{q.quote}&rdquo;</p>
              <footer className="mt-6">
                <p className="text-[14px] font-bold">{q.name}</p>
                <p className="font-mono text-[11px] text-ink-2">{q.role}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
