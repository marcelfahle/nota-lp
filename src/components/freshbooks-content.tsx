"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { DitherBand } from "@/components/dither/dither-band";
import { SectionLabel } from "@/components/section-label";
import { START_URL } from "@/lib/palette";

const comparisons: [string, string, string][] = [
  ["Monthly price", "$23", "$9"],
  ["Client limit", "5 clients", "Unlimited"],
  ["6th client", "Upgrade to $43/mo", "Included"],
  ["Invoice creation", "12 clicks, 4 minutes", "1 sentence, 30 seconds"],
  ["Payment links", "Extra fee", "Stripe, built in"],
  ["API access", "No", "Full REST API"],
  ["MCP + CLI", "No", "13 tools + a real CLI"],
  ["Open source", "No", "MIT licensed"],
  ["Self-host", "No", "Free, forever"],
];

const painPoints = [
  {
    title: "You're paying $23/month to send 3 invoices",
    body: "FreshBooks Lite costs $23/month and caps you at 5 clients. Need a 6th? That’s $43/month (Plus plan). Nota is $9/month for unlimited everything, or free for up to 5 invoices a month.",
  },
  {
    title: "Creating an invoice takes 12 clicks",
    body: "Open FreshBooks. Navigate to invoices. Click New. Search client. Add line items. Set due date. Preview. Adjust formatting. Preview again. Send. With Nota, you type one sentence and it’s done.",
  },
  {
    title: "Your invoices look like everyone else's",
    body: "FreshBooks gives you the same template from 2014. Nota sends clean, modern invoices with your branding, the kind that make clients think you have your shit together.",
  },
  {
    title: "You can't see the code",
    body: "FreshBooks is a black box. You can’t audit it, extend it, or self-host it. Nota is MIT-licensed open source. You own your data and your workflow.",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function FreshBooksContent() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink px-4 pt-28 pb-20 text-term-fg md:px-8 md:pt-36 md:pb-28">
        <div className="mx-auto max-w-[88rem]">
          <p className="font-mono text-[14px] text-hi">dropfreshbooks.com</p>
          <h1 className="cond mt-5 text-[clamp(3.6rem,13vw,13rem)] leading-[0.82] font-black tracking-[-0.02em]">
            <span className="block overflow-hidden pb-[0.04em]">
              <motion.span
                className="block"
                initial={{ y: "105%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease }}
              >
                Drop
              </motion.span>
            </span>
            <span className="block overflow-hidden pb-[0.04em]">
              <motion.span
                className="block"
                initial={{ y: "105%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.08, ease }}
              >
                FreshBooks.
              </motion.span>
            </span>
          </h1>

          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-8">
            <p className="font-serif text-[1.4rem] leading-[1.45] text-term-fg/85 lg:col-span-6">
              FreshBooks charges{" "}
              <span className="text-term-fg/50 line-through decoration-red decoration-2">
                $23/mo for 5 clients
              </span>
              . Nota gives you unlimited clients, unlimited invoices and a faster workflow for{" "}
              <span className="bg-hi px-1 text-ink">$9/month</span>. Open source. No upsells. No
              bullshit.
            </p>
            <div className="flex flex-col items-start gap-3 lg:col-span-5 lg:col-start-8 lg:items-end lg:justify-end">
              <a
                href={START_URL}
                className="group inline-flex items-center gap-3 bg-hi px-7 py-4 text-[16px] font-semibold text-ink transition-colors duration-150 hover:bg-paper"
              >
                Switch to Nota, free to start
                <span className="transition-transform duration-200 ease-out group-hover:translate-x-1">→</span>
              </a>
              <p className="font-mono text-[12px] text-term-dim">5 invoices a month free · No card</p>
            </div>
          </div>
        </div>
      </section>

      <DitherBand direction="to-paper" className="h-32 md:h-44" />

      {/* The math */}
      <section className="px-4 pt-6 pb-24 md:px-8 md:pb-32">
        <div className="mx-auto max-w-[88rem]">
          <SectionLabel n="01">The math</SectionLabel>

          <div className="mt-10 grid gap-14 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <h2 className="cond text-[clamp(3rem,7vw,7rem)] leading-[0.86] font-black tracking-[-0.015em]">
                You&rsquo;re overpaying by <span className="text-red">3&times;.</span>
              </h2>
              <p className="mt-6 font-serif text-[1.2rem] text-ink-2 italic">
                Side by side. No spin. Just the numbers.
              </p>

              <div className="mt-12 border-t-2 border-ink pt-6">
                <p className="label text-ink-2">Annual savings</p>
                <p className="mt-3 font-dot text-[clamp(5rem,10vw,8rem)] leading-[0.8] font-black">$168</p>
                <div className="mt-6 space-y-1 font-mono text-[13px]">
                  <p className="flex justify-between gap-6 text-ink-2">
                    <span>FreshBooks Lite · $23 × 12</span>
                    <span className="line-through decoration-red decoration-2">$276/yr</span>
                  </p>
                  <p className="flex justify-between gap-6">
                    <span>Nota · $9 × 12</span>
                    <span>$108/yr</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto lg:col-span-7">
              <table className="w-full min-w-[32rem] text-left">
                <thead>
                  <tr className="border-b-2 border-ink">
                    <th className="label pb-3 font-semibold text-ink-2" />
                    <th className="label pb-3 font-semibold text-ink-2">FreshBooks</th>
                    <th className="label pb-3 font-semibold">Nota</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map(([label, fb, nota]) => (
                    <tr key={label} className="border-b border-ink/15">
                      <td className="py-4 pr-6 font-mono text-[12px] text-ink-2">{label}</td>
                      <td className="py-4 pr-6 font-serif text-[1.1rem] text-ink-2 line-through decoration-red/70 decoration-2">
                        {fb}
                      </td>
                      <td className="semi-cond py-4 text-[1.25rem] font-extrabold">{nota}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="bg-paper-2 px-4 pt-6 pb-24 md:px-8 md:pb-32">
        <div className="mx-auto max-w-[88rem]">
          <SectionLabel n="02">Why people leave</SectionLabel>
          <h2 className="cond mt-10 max-w-4xl text-[clamp(3rem,7vw,7rem)] leading-[0.86] font-black tracking-[-0.015em]">
            Why people leave FreshBooks.
          </h2>

          <ol className="mt-14 grid gap-px border border-ink/15 bg-ink/15 md:grid-cols-2">
            {painPoints.map((point, i) => (
              <motion.li
                key={point.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: i * 0.06, ease }}
                className="bg-paper-2 p-7 md:p-10"
              >
                <span className="font-dot text-5xl leading-none font-black text-red">0{i + 1}</span>
                <h3 className="semi-cond mt-5 text-[1.7rem] leading-[1.05] font-extrabold tracking-tight">
                  {point.title}
                </h3>
                <p className="mt-4 font-serif text-[1.12rem] leading-[1.55] text-ink/85">{point.body}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* Switch CTA */}
      <section className="bg-ink px-4 py-24 text-term-fg md:px-8 md:py-36">
        <div className="mx-auto max-w-[88rem]">
          <h2 className="cond text-[clamp(3.4rem,10vw,10rem)] leading-[0.84] font-black tracking-[-0.02em]">
            Switching takes
            <br />
            <span className="bg-hi px-[0.08em] text-ink">one afternoon.</span>
          </h2>
          <p className="mt-8 max-w-xl font-serif text-[1.25rem] leading-[1.5] text-term-fg/80">
            Add your clients, or paste the list into Nota&rsquo;s chat and let it do the typing.
            Send your next invoice from Nota. Then cancel FreshBooks and keep the $168.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
            <a
              href={START_URL}
              className="group inline-flex items-center gap-3 bg-hi px-7 py-4 text-[16px] font-semibold text-ink transition-colors duration-150 hover:bg-paper"
            >
              Start with Nota, free
              <span className="transition-transform duration-200 ease-out group-hover:translate-x-1">→</span>
            </a>
            <Link
              href="/"
              className="text-[15px] font-semibold text-term-fg/80 underline decoration-term-fg/30 decoration-2 underline-offset-4 transition-colors hover:text-term-fg hover:decoration-hi"
            >
              Back to homepage
            </Link>
          </div>

          <p className="mt-20 max-w-3xl border-t border-term-fg/15 pt-6 font-mono text-[11px] leading-relaxed text-term-dim">
            FreshBooks is a trademark of FreshBooks. Nota is not affiliated with, endorsed by, or
            sponsored by FreshBooks. Pricing and feature information is based on publicly
            available sources as of September 2026 and may change. All comparisons reference
            FreshBooks Lite ($23/mo) unless otherwise noted.
          </p>
        </div>
      </section>
    </>
  );
}
