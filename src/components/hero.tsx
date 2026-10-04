"use client";

import { motion } from "motion/react";
import { useState } from "react";
import { HeroDemo, SURFACES } from "@/components/hero-demo";
import { ScrambleWord } from "@/components/scramble-word";
import { START_URL } from "@/lib/palette";

const ease = [0.16, 1, 0.3, 1] as const;

function Line({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden pb-[0.06em]">
      <motion.span
        className="block"
        initial={{ y: "105%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay, ease }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function Hero() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative overflow-x-clip px-4 pt-24 md:px-8 md:pt-28">
      <div className="mx-auto max-w-[88rem]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-b border-ink/15 pb-3"
        >
          <p className="label text-ink-2">
            INV-0001 <span className="text-ink/30">/</span> AI invoicing, open source
          </p>
          <p className="label hidden text-ink-2 sm:block">
            Works in ChatGPT <span className="text-ink/30">·</span> Claude{" "}
            <span className="text-ink/30">·</span> Nota <span className="text-ink/30">·</span>{" "}
            Terminal
          </p>
        </motion.div>

        <h1 className="cond mt-6 text-[clamp(3.4rem,11.2vw,11.5rem)] leading-[0.84] font-black tracking-[-0.02em] md:mt-8">
          <Line delay={0.05}>
            Tell{" "}
            <span className="relative inline-block">
              <motion.span
                aria-hidden="true"
                className="absolute inset-x-[-0.06em] top-[0.14em] bottom-[0.04em] origin-left bg-hi"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.55, delay: 0.75, ease }}
              />
              <ScrambleWord
                text={SURFACES[active].word}
                srText="ChatGPT, Claude or Nota"
                className="relative"
              />
            </span>
          </Line>
          <Line delay={0.15}>to send the invoice.</Line>
        </h1>

        <div className="mt-10 grid gap-12 pb-24 md:mt-14 lg:grid-cols-12 lg:gap-8 lg:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease }}
            className="lg:col-span-4 lg:pr-6"
          >
            <p className="font-serif text-[1.3rem] leading-[1.45] text-ink md:text-[1.4rem]">
              Nota is open-source AI invoicing software. Describe your work in plain words to
              create an invoice with a PDF and a Stripe pay link, then ask Nota to send it or
              remind your client.
            </p>
            <p className="mt-4 font-serif text-[1.3rem] leading-[1.45] text-ink md:text-[1.4rem]">
              Do it right inside <strong className="font-semibold">ChatGPT</strong> or{" "}
              <strong className="font-semibold">Claude</strong>, or in Nota&rsquo;s own chat.
            </p>
            <p className="mt-4 font-serif text-[1.3rem] leading-[1.45] text-ink-2 italic md:text-[1.4rem]">
              $9 a month. Unlimited clients. Open source.
            </p>

            <div className="mt-8 flex flex-col items-start gap-4">
              <a
                href={START_URL}
                className="group inline-flex items-center gap-3 bg-ink px-6 py-4 text-[15px] font-semibold text-paper transition-colors duration-150 hover:bg-red"
              >
                Send your first invoice
                <span className="transition-transform duration-200 ease-out group-hover:translate-x-1">
                  →
                </span>
              </a>
              <a
                href="#doors"
                className="text-[15px] font-semibold underline decoration-ink/30 decoration-2 underline-offset-4 transition-colors hover:decoration-red"
              >
                Connect ChatGPT or Claude
              </a>
            </div>

            <ul className="mt-8 space-y-1.5 font-mono text-[12px] text-ink-2">
              <li>
                <span className="text-ink">✓</span> 5 invoices a month free. No card.
              </li>
              <li>
                <span className="text-ink">✓</span> Unlimited clients. Always.
              </li>
              <li>
                <span className="text-red">✕</span> No time tracking. On purpose.
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease }}
            className="lg:col-span-8 lg:pl-8"
          >
            <HeroDemo active={active} onChange={setActive} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
