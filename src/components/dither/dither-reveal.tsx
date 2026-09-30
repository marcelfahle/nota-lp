"use client";

import { useEffect, useEffectEvent, useRef } from "react";

/*
 * Covers its parent with ink cells that clear top-to-bottom in Bayer
 * order, so the content underneath looks like it's being printed.
 */

const b2 = (x: number, y: number) => {
  x = Math.floor(x);
  y = Math.floor(y);
  return (x * 0.5 + y * y * 0.75) % 1;
};
const b4 = (x: number, y: number) => b2(x / 2, y / 2) * 0.25 + b2(x, y);
const b8 = (x: number, y: number) => b4(x / 2, y / 2) * 0.25 + b2(x, y);

const BAYER8 = Array.from({ length: 64 }, (_, i) => b8(i % 8, i >> 3) + 0.5 / 64);

type Props = {
  play: boolean;
  color: string;
  cell?: number;
  duration?: number;
  className?: string;
  onDone?: () => void;
};

export function DitherReveal({
  play,
  color,
  cell = 6,
  duration = 1100,
  className,
  onDone,
}: Props) {
  const ref = useRef<HTMLCanvasElement>(null);
  const done = useEffectEvent(() => onDone?.());

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const cols = Math.ceil(w / cell);
    const rows = Math.ceil(h / cell);

    const paint = (progress: number) => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = color;
      // Printer head sweeps down; the dither pattern softens its edge.
      const edge = progress * 1.35;
      for (let y = 0; y < rows; y++) {
        const ry = (y / rows) * 0.65;
        for (let x = 0; x < cols; x++) {
          const v = BAYER8[(y & 7) * 8 + (x & 7)] * 0.7 + ry;
          if (v >= edge) ctx.fillRect(x * cell, y * cell, cell, cell);
        }
      }
    };

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!play) {
      paint(0);
      return;
    }
    if (reduced) {
      paint(1);
      done();
      return;
    }

    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min(1, (now - t0) / duration);
      // Quantise time a little so it steps like hardware.
      paint(Math.round(p * 40) / 40);
      if (p < 1) raf = requestAnimationFrame(tick);
      else done();
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [play, color, cell, duration]);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className={className ?? "pointer-events-none absolute inset-0 h-full w-full"}
    />
  );
}
