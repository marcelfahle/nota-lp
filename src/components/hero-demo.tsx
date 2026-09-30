"use client";

import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import {
  ChatGPTSurface,
  ClaudeSurface,
  NotaSurface,
  TerminalSurface,
} from "@/components/demo/surfaces";
import { DEMO_LENGTH, PHASE, useDemoTimeline } from "@/components/demo/timeline";
import { DitherReveal } from "@/components/dither/dither-reveal";
import { InvoicePaper } from "@/components/invoice-paper";
import { Stamp } from "@/components/stamp";
import { palette } from "@/lib/palette";

export const SURFACES = [
  { key: "chatgpt", label: "ChatGPT", word: "ChatGPT", Surface: ChatGPTSurface },
  { key: "claude", label: "Claude", word: "Claude", Surface: ClaudeSurface },
  { key: "nota", label: "Nota app", word: "Nota", Surface: NotaSurface },
  { key: "terminal", label: "Terminal", word: "your terminal", Surface: TerminalSurface },
] as const;

export function HeroDemo({
  active,
  onChange,
}: {
  active: number;
  onChange: (i: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.2 });
  const started = useInView(ref, { amount: 0.2, once: true });
  const [run, setRun] = useState(0);
  const [auto, setAuto] = useState(true);
  const { phase, typed } = useDemoTimeline(run, started);
  const baseId = "hero-demo";

  // Cycle through surfaces until someone picks one.
  useEffect(() => {
    if (!auto || !inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setTimeout(() => {
      onChange((active + 1) % SURFACES.length);
      setRun((r) => r + 1);
    }, DEMO_LENGTH);
    return () => clearTimeout(t);
  }, [auto, inView, active, run, onChange]);

  const pick = (i: number) => {
    setAuto(false);
    onChange(i);
    setRun((r) => r + 1);
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = (active + (e.key === "ArrowRight" ? 1 : SURFACES.length - 1)) % SURFACES.length;
    pick(next);
    document.getElementById(`${baseId}-tab-${next}`)?.focus();
  };

  const { Surface } = SURFACES[active];
  const printing = phase >= PHASE.print;

  return (
    <div className="relative">
      <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
        <div
          role="tablist"
          aria-label="Where to use Nota"
          onKeyDown={onKey}
          className="flex flex-wrap border border-ink/20 bg-paper p-1"
        >
          {SURFACES.map((s, i) => {
            const on = i === active;
            return (
              <button
                key={s.key}
                id={`${baseId}-tab-${i}`}
                role="tab"
                type="button"
                aria-selected={on}
                aria-controls={`${baseId}-panel`}
                tabIndex={on ? 0 : -1}
                onClick={() => pick(i)}
                className={`relative overflow-hidden px-3 py-1.5 text-[13px] font-semibold transition-colors duration-150 sm:px-4 ${
                  on ? "bg-ink text-paper" : "text-ink-2 hover:text-ink"
                }`}
              >
                {s.label}
                {on && auto && inView && (
                  <motion.span
                    key={run}
                    aria-hidden="true"
                    className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-hi"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: DEMO_LENGTH / 1000, ease: "linear" }}
                  />
                )}
              </button>
            );
          })}
        </div>
        <button
          type="button"
          onClick={() => setRun((r) => r + 1)}
          className="label text-[10px] text-ink-2 transition-colors hover:text-ink"
        >
          ↻ Replay
        </button>
      </div>

      <div
        id={`${baseId}-panel`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${active}`}
        ref={ref}
        className="relative z-20 h-[30rem] shadow-[0_40px_80px_-40px_oklch(0.2_0.012_75/0.55)] md:h-[31rem]"
      >
        <Surface phase={phase} typed={typed} />
      </div>

      {/* The paper that comes out of the chat. */}
      <div className="relative z-10 -mt-8 ml-auto w-[92%] sm:w-[78%] md:-mt-12 md:mr-[-4%] md:w-[62%]">
        <motion.div
          initial={false}
          animate={printing ? { y: 0, rotate: 2.2, opacity: 1 } : { y: -60, rotate: 0, opacity: 0 }}
          transition={{ duration: printing ? 1.3 : 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative origin-top text-[11px] sm:text-[12px] md:text-[12.5px]"
        >
          <InvoicePaper />
          <DitherReveal key={`${active}-${run}`} play={printing} color={palette.term} cell={5} duration={1250} />
          {phase >= PHASE.stamp && (
            <motion.div
              initial={{ scale: 1.8, opacity: 0, rotate: -18 }}
              animate={{ scale: 1, opacity: 0.92, rotate: -11 }}
              transition={{ duration: 0.18, ease: [0.7, 0, 0.84, 0] }}
              className="pointer-events-none absolute top-[18%] left-[34%] w-[46%] text-red mix-blend-multiply"
            >
              <Stamp word="SENT" sub="30 SEP 2026 · 09:41" className="w-full" />
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
