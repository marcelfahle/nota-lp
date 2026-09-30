"use client";

import { useEffect, useState } from "react";

export const PROMPT =
  "Invoice Oxide for 40 hours of consulting in September, €120/h, due in 30 days. Send it.";

/*
 * One script, four surfaces. Each phase unlocks the next beat:
 * 0 idle · 1 typing · 2 thinking · 3 create_invoice · 4 draft card
 * 5 send_invoice · 6 sent · 7 print · 8 stamp
 */
export const PHASE = {
  idle: 0,
  typing: 1,
  thinking: 2,
  creating: 3,
  draft: 4,
  sending: 5,
  sent: 6,
  print: 7,
  stamp: 8,
} as const;

const AT = [0, 450, 2050, 2650, 3250, 4150, 4750, 5250, 6600];
const TYPE_MS = 1450;
export const DEMO_LENGTH = 9400;

export function useDemoTimeline(run: number, playing: boolean) {
  const [phase, setPhase] = useState(0);
  const [typed, setTyped] = useState(0);

  useEffect(() => {
    if (!playing) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTyped(PROMPT.length);
      setPhase(PHASE.stamp);
      return;
    }

    setPhase(0);
    setTyped(0);
    const timers = AT.map((at, i) => window.setTimeout(() => setPhase(i), at + 300));
    const perChar = TYPE_MS / PROMPT.length;
    for (let c = 1; c <= PROMPT.length; c++) {
      timers.push(window.setTimeout(() => setTyped(c), AT[1] + 300 + c * perChar));
    }
    return () => timers.forEach(clearTimeout);
  }, [run, playing]);

  return { phase, typed };
}

export type DemoState = { phase: number; typed: number };
