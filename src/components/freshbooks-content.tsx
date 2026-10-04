"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { DitherBand } from "@/components/dither/dither-band";
import { SectionLabel } from "@/components/section-label";
import { START_URL } from "@/lib/palette";

const comparisons: [string, string, string][] = [
  ["Standard monthly price (USD)", "$23", "$9"],
  ["Client limit", "5 billable clients", "Unlimited"],
  ["6th client", "Upgrade to $43/mo", "Included"],
  ["Invoice creation", "Invoice editor + API", "AI chat + REST API"],
  ["Online payments", "Available; processing fees apply", "Stripe; processing fees apply"],
  ["API access", "Yes, OAuth 2.0 API", "Yes, REST API"],
  ["Time tracking", "Included", "Not included"],
  ["Open source", "No", "MIT licensed"],
  ["Self-host", "No", "No license fee; hosting costs apply"],
];

const painPoints = [
  {
    title: "Unlimited clients on the paid plan",
    body: "FreshBooks Lite supports five billable clients; Plus supports up to 50. Nota's $9/month plan includes unlimited clients and invoices. Nota's free plan includes five invoices a month with unlimited clients.",
  },
  {
    title: "Create invoices in your AI chat",
    body: "Describe the client and work in ChatGPT, Claude or Nota's own chat. Nota creates a draft for you to review, then sends it when you ask. FreshBooks offers an invoice editor and an API for creating and sending invoices.",
  },
  {
    title: "Choose the features you need",
    body: "FreshBooks includes time tracking and expense management. Nota focuses on invoicing, with PDFs, Stripe pay links and XRechnung exports. If you rely on accounting features beyond invoicing, check your requirements before switching.",
  },
  {
    title: "Inspect and self-host the code",
    body: "Nota is MIT-licensed open source: you can inspect the code, modify it and self-host it. FreshBooks is proprietary software, but its API supports custom integrations. Self-hosting Nota has infrastructure and service costs.",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

export function FreshBooksContent() {
  return (
    <>
      {/* Hero */}
      <section className="bg-ink px-4 pt-28 pb-20 text-term-fg md:px-8 md:pt-36 md:pb-28">
        <div className="mx-auto max-w-[88rem]">
          <nav aria-label="Breadcrumb" className="font-mono text-[14px] text-hi">
            <ol className="flex flex-wrap gap-2">
              <li><Link href="/" className="underline">Nota</Link></li>
              <li><span aria-hidden="true">/ </span><span aria-current="page">FreshBooks comparison</span></li>
            </ol>
          </nav>
          <h1 className="cond mt-5 text-[clamp(3.6rem,13vw,13rem)] leading-[0.82] font-black tracking-[-0.02em]">
            <span className="block overflow-hidden pb-[0.04em]">
              <motion.span
                className="block"
                initial={{ y: "105%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, ease }}
              >
                Nota vs
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
              Nota is open-source invoicing software for ChatGPT, Claude and its own chat.
              Its paid plan includes unlimited clients and invoices for{" "}
              <span className="bg-hi px-1 text-ink">$9/month</span>. FreshBooks Lite is $23/month
              for five billable clients at standard USD monthly pricing. Both offer an API;
              FreshBooks also includes time tracking and expense management.
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
                <span className="text-red">$14/month less.</span>
              </h2>
              <p className="mt-6 font-serif text-[1.2rem] text-ink-2 italic">
                Nota vs FreshBooks Lite at standard USD monthly prices, before tax.
              </p>

              <div className="mt-12 border-t-2 border-ink pt-6">
                <p className="label text-ink-2">Difference over 12 monthly payments</p>
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
              <table aria-describedby="comparison-pricing-note" className="w-full min-w-[32rem] text-left">
                <caption className="sr-only">Nota vs FreshBooks Lite: pricing and invoicing features</caption>
                <thead>
                  <tr className="border-b-2 border-ink">
                    <th scope="col" className="label pb-3 font-semibold text-ink-2">Feature</th>
                    <th scope="col" className="label pb-3 font-semibold text-ink-2">FreshBooks Lite</th>
                    <th scope="col" className="label pb-3 font-semibold">Nota</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisons.map(([label, fb, nota]) => (
                    <tr key={label} className="border-b border-ink/15">
                      <th scope="row" className="py-4 pr-6 font-mono text-[12px] font-normal text-ink-2">{label}</th>
                      <td className="py-4 pr-6 font-serif text-[1.1rem] text-ink-2">
                        {fb}
                      </td>
                      <td className="semi-cond py-4 text-[1.25rem] font-extrabold">{nota}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p id="comparison-pricing-note" className="mt-6 text-sm leading-relaxed text-ink-2">
                Standard USD monthly subscriptions, before tax. The $168 difference is
                ($23 − $9) × 12, not a comparison of annual plans. Promotions and annual
                discounts can change the result: on October 4, 2026, FreshBooks advertised
                Lite at $1/month for the first year, subject to offer terms. Payment
                processing fees are separate; Nota adds no transaction fee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="bg-paper-2 px-4 pt-6 pb-24 md:px-8 md:pb-32">
        <div className="mx-auto max-w-[88rem]">
          <SectionLabel n="02">The trade-offs</SectionLabel>
          <h2 className="cond mt-10 max-w-4xl text-[clamp(3rem,7vw,7rem)] leading-[0.86] font-black tracking-[-0.015em]">
            Is Nota right for your invoicing?
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
            Try Nota with
            <br />
            <span className="bg-hi px-[0.08em] text-ink">your next invoice.</span>
          </h2>
          <p className="mt-8 max-w-xl font-serif text-[1.25rem] leading-[1.5] text-term-fg/80">
            Add your clients, or paste the list into Nota&rsquo;s chat and let it do the typing.
            Review the draft and send your next invoice from Nota. Check that it covers your
            workflow before changing subscriptions.
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
            sponsored by FreshBooks. Checked <time dateTime="2026-10-04">October 4, 2026</time>.
            Sources: <a className="underline" href="https://www.freshbooks.com/pricing">FreshBooks pricing and features</a>,{" "}
            <a className="underline" href="https://www.freshbooks.com/2026-faq-price-change">standard subscription prices</a> and{" "}
            <a className="underline" href="https://www.freshbooks.com/api/start/">API documentation</a>.
            Prices and features may change. Comparisons reference FreshBooks Lite unless noted.
          </p>
        </div>
      </section>
    </>
  );
}
