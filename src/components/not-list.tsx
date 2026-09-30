"use client";

import { motion } from "motion/react";
import { SectionLabel } from "@/components/section-label";

const NEVER = [
  "Time tracking",
  "Expense tracking",
  "Payroll",
  "Project management",
  "Proposals & e-signatures",
  "An “insights” dashboard",
  "Per-seat pricing",
  "A 5-client limit",
  "Upgrade modals",
  "A chatbot nobody asked for",
];

const KEPT = ["Clients", "Invoices", "PDFs", "Pay links", "Reminders", "E-invoices"];

// Hand-drawn strike: slightly uneven, like a red pen dragged across.
const STRIKES = [
  "M2 14 C 40 9, 120 17, 200 11 S 330 13, 398 8",
  "M1 11 C 70 16, 150 7, 230 13 S 340 9, 399 15",
  "M3 13 C 60 8, 160 16, 250 10 S 350 14, 397 11",
];

function Struck({ text, i }: { text: string; i: number }) {
  return (
    <li className="relative w-fit">
      <span className="text-ink/45">{text}</span>
      <svg
        aria-hidden="true"
        viewBox="0 0 400 24"
        preserveAspectRatio="none"
        className="pointer-events-none absolute top-1/2 left-[-2%] h-[0.5em] w-[104%] -translate-y-[40%] overflow-visible text-red"
      >
        <motion.path
          d={STRIKES[i % STRIKES.length]}
          fill="none"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.38, delay: 0.1 + i * 0.07, ease: [0.65, 0, 0.35, 1] }}
        />
      </svg>
      <span className="sr-only"> (not included)</span>
    </li>
  );
}

export function NotList() {
  return (
    <section id="not" className="px-4 pt-6 pb-24 md:px-8 md:pb-36">
      <div className="mx-auto max-w-[88rem]">
        <SectionLabel n="02">What it won&rsquo;t do</SectionLabel>

        <div className="mt-10 grid gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <h2 className="cond text-[clamp(3rem,7vw,7rem)] leading-[0.86] font-black tracking-[-0.015em]">
                We didn&rsquo;t build time tracking.
                <br />
                <span className="text-red">You&rsquo;re welcome.</span>
              </h2>
              <div className="mt-8 max-w-md space-y-4 font-serif text-[1.2rem] leading-[1.55]">
                <p>
                  Every invoicing app starts simple. Then it grows a CRM, a time tracker and a
                  payroll module. Then the price triples.
                </p>
                <p>
                  Nota does one job: it gets you paid. Here&rsquo;s the list of things we will
                  happily never ship.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ul className="semi-cond space-y-1 text-[clamp(1.9rem,4.2vw,3.6rem)] leading-[1.08] font-extrabold tracking-[-0.01em]">
              {NEVER.map((item, i) => (
                <Struck key={item} text={item} i={i} />
              ))}
            </ul>

            <div className="mt-14 border-t-2 border-ink pt-6">
              <p className="label text-ink-2">What&rsquo;s left</p>
              <p className="cond mt-3 text-[clamp(2.2rem,4.6vw,4rem)] leading-[1] font-black">
                {KEPT.map((k, i) => (
                  <span key={k}>
                    <span className="hl">{k}</span>
                    {i < KEPT.length - 1 ? <span className="text-ink/30">. </span> : "."}
                  </span>
                ))}
              </p>
              <p className="mt-5 font-serif text-[1.2rem] text-ink-2 italic">
                That&rsquo;s the product. It&rsquo;s enough.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
