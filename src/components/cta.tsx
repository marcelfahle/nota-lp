"use client";

import dynamic from "next/dynamic";
import { CopyCommand } from "@/components/copy-command";
import { START_URL, palette } from "@/lib/palette";

const DitherField = dynamic(
  () => import("@/components/dither/dither-field").then((m) => m.DitherField),
  { ssr: false },
);

export function CTA() {
  return (
    <section className="relative isolate overflow-hidden bg-ink px-4 py-28 text-term-fg md:px-8 md:py-40">
      <DitherField
        a={palette.ink}
        b="#2a251f"
        mode="field"
        bias={0.32}
        pixel={5}
        speed={0.6}
        className="absolute inset-0 -z-10 h-full w-full"
      />
      <div className="mx-auto max-w-[88rem]">
        <h2 className="cond text-[clamp(3.6rem,12vw,12.5rem)] leading-[0.82] font-black tracking-[-0.02em]">
          Your next invoice
          <br />
          is <span className="bg-hi px-[0.08em] text-ink">one sentence</span> long.
        </h2>
        <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <a
            href={START_URL}
            className="group inline-flex items-center gap-3 bg-hi px-7 py-4 text-[16px] font-semibold text-ink transition-colors duration-150 hover:bg-paper"
          >
            Send your first invoice
            <span className="transition-transform duration-200 ease-out group-hover:translate-x-1">→</span>
          </a>
          <CopyCommand command="npx -y @nota-app/mcp" tone="ink" className="bg-ink" />
        </div>
        <p className="mt-6 font-mono text-[12px] text-term-dim">
          Free for 5 invoices a month · No card · Unlimited clients
        </p>
      </div>
    </section>
  );
}
