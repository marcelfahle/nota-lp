"use client";

import { motion } from "motion/react";
import { SectionLabel } from "@/components/section-label";
import { APP_URL } from "@/lib/palette";

const STACK: [string, string][] = [
  ["Unlimited invoices", "incl."],
  ["Unlimited clients", "incl."],
  ["MCP server · 13 tools", "incl."],
  ["CLI + REST API", "incl."],
  ["In-app AI chat", "incl."],
  ["PDF + XRechnung", "incl."],
  ["Stripe pay links", "0% Nota fee"],
  ["Reminders", "incl."],
  ["Reverse charge VAT", "incl."],
  ["Time tracking", "lol, no"],
];

// Deterministic barcode, so server and client render the same bars.
const BARS = Array.from({ length: 46 }, (_, i) => 1 + ((i * 7919) % 5 === 0 ? 3 : (i * 31) % 3));

function Receipt() {
  return (
    <div className="relative mx-auto w-full max-w-[25rem]">
      {/* The printer slot. The paper is clipped at its lip. */}
      <div className="relative z-10 mx-[-4%] h-3 bg-ink" />
      <div className="overflow-hidden pb-10">
      <motion.div
        initial={{ y: "-100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-20%" }}
        transition={{ duration: 1.8, ease: [0.25, 1, 0.5, 1] }}
        className="receipt-edge bg-[oklch(0.985_0.006_88)] px-7 pt-8 pb-10 font-mono text-[12.5px] text-ink shadow-[0_24px_40px_-24px_oklch(0.2_0.012_75/0.4)]"
      >
        <p className="text-center font-dot text-[2.2rem] leading-none font-black tracking-[0.2em]">
          NOTA
        </p>
        <p className="mt-2 text-center text-[11px] text-ink-2">withnota.com · Dénia, ES</p>
        <p className="mt-4 flex justify-between text-[11px] text-ink-2">
          <span>RECEIPT #0009</span>
          <span>30.09.2026</span>
        </p>
        <p className="my-3 overflow-hidden whitespace-nowrap text-ink/40">{"- ".repeat(40)}</p>
        <ul className="space-y-1">
          {STACK.map(([item, price]) => (
            <li key={item} className="flex items-baseline gap-2">
              <span className={item === "Time tracking" ? "text-ink-2 line-through decoration-red decoration-2" : ""}>
                {item}
              </span>
              <span className="min-w-0 flex-1 overflow-hidden whitespace-nowrap text-ink/30">
                {".".repeat(40)}
              </span>
              <span className={price === "lol, no" ? "text-red" : ""}>{price}</span>
            </li>
          ))}
        </ul>
        <p className="my-3 overflow-hidden whitespace-nowrap text-ink/40">{"- ".repeat(40)}</p>
        <div className="space-y-1 text-ink-2">
          <p className="flex justify-between">
            <span>Billed yearly</span>
            <span>$90.00 / yr</span>
          </p>
          <p className="flex justify-between">
            <span>Self-hosted</span>
            <span>$0.00</span>
          </p>
          <p className="flex justify-between">
            <span>First 5 invoices / mo</span>
            <span>$0.00</span>
          </p>
        </div>
        <p className="my-3 overflow-hidden whitespace-nowrap text-ink/40">{"= ".repeat(40)}</p>
        <div className="flex items-end justify-between">
          <span className="font-semibold">MONTHLY PRICE</span>
          <span className="font-dot text-[4.6rem] leading-[0.75] font-black">$9</span>
        </div>
        <p className="mt-3 text-[11px] text-ink-2">USD, plus applicable tax.</p>
        <div className="mt-7 flex h-12 items-stretch justify-center gap-[2px]" aria-hidden="true">
          {BARS.map((w, i) => (
            <span key={i} className="bg-ink" style={{ width: w }} />
          ))}
        </div>
        <p className="mt-4 text-center text-[11px] tracking-[0.2em]">THANK YOU · GO GET PAID</p>
      </motion.div>
      </div>
    </div>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="px-4 pt-6 pb-24 md:px-8 md:pb-36">
      <div className="mx-auto max-w-[88rem]">
        <SectionLabel n="04">Pricing</SectionLabel>

        <div className="mt-10 grid items-start gap-16 lg:grid-cols-12 lg:gap-8">
          <div className="min-w-0 lg:col-span-7">
            <h2 className="cond text-[clamp(3rem,8vw,8rem)] leading-[0.86] font-black tracking-[-0.015em]">
              $9. That&rsquo;s the
              <br />
              pricing page.
            </h2>

            <dl className="mt-12 max-w-2xl divide-y divide-ink/15 border-y border-ink/15">
              {[
                ["FreshBooks Lite", "$23 a month. Five clients. Client number six means the $43 plan."],
                ["Nota", "$9 a month. Unlimited clients, unlimited invoices, every feature."],
                ["Nota Free", "Five invoices every month, forever. Not a trial. Every feature included. No card."],
                ["Self-hosted", "$0. It’s MIT. Clone it, run it, change it."],
              ].map(([k, v], i) => (
                <div key={k} className="grid gap-1 py-5 sm:grid-cols-[11rem_1fr] sm:gap-6">
                  <dt className={`semi-cond text-[1.1rem] font-extrabold ${i === 0 ? "text-ink-2 line-through decoration-red decoration-2" : ""}`}>
                    {k}
                  </dt>
                  <dd className="font-serif text-[1.15rem] leading-[1.5]">{v}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-6 max-w-xl text-sm text-ink-2">
              Prices are in USD, plus applicable tax calculated at checkout. Stripe charges
              its standard payment processing fees; Nota adds no transaction fee.
            </p>

            <p className="mt-8 max-w-xl font-serif text-[1.2rem] leading-[1.5]">
              We limit <em>volume</em>, never <em>features</em>. If Nota can do it, the free plan
              can do it. Upgrade when you send your sixth invoice in a month, which is a nice
              problem to have.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href={APP_URL}
                className="group inline-flex items-center gap-3 bg-ink px-6 py-4 text-[15px] font-semibold text-paper transition-colors duration-150 hover:bg-red"
              >
                Start free
                <span className="transition-transform duration-200 ease-out group-hover:translate-x-1">→</span>
              </a>
              <a
                href="/freshbooks"
                className="text-[15px] font-semibold underline decoration-ink/30 decoration-2 underline-offset-4 transition-colors hover:decoration-red"
              >
                See the FreshBooks math
              </a>
            </div>
          </div>

          <div className="min-w-0 lg:col-span-5 lg:pt-4">
            <Receipt />
          </div>
        </div>
      </div>
    </section>
  );
}
