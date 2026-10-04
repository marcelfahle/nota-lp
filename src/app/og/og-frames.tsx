"use client";

import dynamic from "next/dynamic";
import { InvoicePaper } from "@/components/invoice-paper";
import { MarkOvershoot, Wordmark } from "@/components/logo";
import { Stamp } from "@/components/stamp";
import { palette } from "@/lib/palette";

/*
 * 1200×630 share cards, rendered with the real components and screenshotted
 * into app/opengraph-image.png and friends. Open /og or /og/freshbooks at
 * 1200×630 and capture #og to regenerate.
 */

const DitherField = dynamic(
  () => import("@/components/dither/dither-field").then((m) => m.DitherField),
  { ssr: false },
);

export function OgHome() {
  return (
    <div id="og" className="relative h-[630px] w-[1200px] overflow-hidden bg-paper text-ink">
      <div className="absolute inset-x-0 top-0 flex items-center justify-between px-14 pt-11">
        <span className="inline-flex items-end gap-2">
          <MarkOvershoot className="h-[46px] w-auto" />
          <Wordmark className="mb-[-3px] text-[40px]" />
        </span>
        <p className="label text-[13px] text-ink-2">AI invoicing · ChatGPT · Claude · Open source</p>
      </div>

      <h1 className="cond absolute top-[138px] left-14 text-[128px] leading-[0.84] font-black tracking-[-0.02em]">
        Tell{" "}
        <span className="relative inline-block">
          <span className="absolute inset-x-[-6px] top-[18px] bottom-[4px] bg-hi" />
          <span className="relative">ChatGPT</span>
        </span>
        <br />
        to send the
        <br />
        invoice.
      </h1>

      <div className="absolute top-[108px] right-[64px] w-[392px] rotate-[3deg] text-[10.5px]">
        <InvoicePaper />
        <div className="absolute top-[26%] left-[30%] w-[52%] -rotate-[13deg] text-red mix-blend-multiply">
          <Stamp word="SENT" sub="30 SEP 2026 · 09:41" className="w-full" />
        </div>
      </div>

      <div className="absolute top-[292px] right-[236px] w-[400px] space-y-2.5 bg-[oklch(0.99_0.002_90)] p-4 text-[14px] ring-1 ring-ink/15 shadow-[0_30px_60px_-30px_oklch(0.2_0.012_75/0.6)]">
        <p className="flex items-center justify-between text-[12px] font-semibold">
          ChatGPT
          <span className="flex items-center gap-1.5 rounded-full border border-ink/15 px-2 py-0.5 text-[11px] font-medium text-ink-2">
            <MarkOvershoot className="h-3.5 w-auto" /> Nota connected
          </span>
        </p>
        <p className="ml-auto w-fit max-w-[88%] rounded-[1.2rem] bg-[oklch(0.94_0.003_90)] px-3.5 py-2 leading-snug">
          Invoice Oxide for 40h at €120. Send it.
        </p>
        <p className="text-[12px] text-ink-2">
          Called Nota · <span className="font-mono">send_invoice</span>
        </p>
        <p className="leading-snug">
          Sent. Oxide has the PDF and a pay link: <span className="bg-hi px-1">€4,800.00</span>
        </p>
      </div>

      <div className="absolute inset-x-0 bottom-[64px] h-[110px]">
        <DitherField
          a={palette.paper}
          b={palette.ink}
          mode="down"
          pixel={5}
          interactive={false}
          speed={0}
          className="absolute inset-0 h-full w-full"
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 flex h-[66px] items-center justify-between bg-ink px-14 text-term-fg">
        <p className="font-mono text-[22px]">
          <span className="text-hi">$</span> withnota.com
        </p>
        <p className="label text-[14px]">
          $9/mo <span className="text-term-dim">·</span> MIT <span className="text-term-dim">·</span> Self-host free
        </p>
      </div>
    </div>
  );
}

export function OgFreshBooks() {
  return (
    <div id="og" className="relative h-[630px] w-[1200px] overflow-hidden bg-ink text-term-fg">
      <div className="absolute inset-x-0 top-0 h-[120px]">
        <DitherField
          a={palette.paper}
          b={palette.ink}
          mode="down"
          pixel={5}
          interactive={false}
          speed={0}
          className="absolute inset-0 h-full w-full"
        />
      </div>

      <p className="absolute top-[150px] left-14 font-mono text-[22px] text-hi">Nota vs FreshBooks Lite</p>
      <h1 className="cond absolute top-[196px] left-14 text-[168px] leading-[0.82] font-black tracking-[-0.02em]">
        Drop
        <br />
        FreshBooks.
      </h1>

      <div className="absolute top-[200px] right-14 w-[330px] space-y-5">
        {[
          ["$23/mo", "$9/mo"],
          ["5 clients", "∞"],
          ["closed", "MIT"],
        ].map(([fb, nota]) => (
          <div key={fb} className="flex items-baseline justify-between border-t border-term-fg/15 pt-4">
            <span className="font-mono text-[22px] text-term-fg/45 line-through decoration-red decoration-2">
              {fb}
            </span>
            <span className="font-dot text-[46px] leading-none font-black text-hi">{nota}</span>
          </div>
        ))}
      </div>

      <p className="absolute right-14 bottom-[112px] w-[330px] font-mono text-[15px] leading-relaxed text-term-dim">
        Standard USD monthly prices, before tax. Promotions and annual plans differ.
      </p>

      <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-14 pb-10">
        <span className="inline-flex items-end gap-2">
          <MarkOvershoot tone="ink" className="h-[40px] w-auto" />
          <Wordmark className="mb-[-3px] text-[34px]" />
        </span>
        <p className="label text-[14px] text-term-dim">Unlimited clients · Open source · MCP + CLI</p>
      </div>
    </div>
  );
}
