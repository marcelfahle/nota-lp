/*
 * The Nota checkbox: ticked so fast it broke out of the box.
 * `tone` is the background the mark sits on.
 */

type Tone = "paper" | "ink";
type MarkProps = { className?: string; tone?: Tone };

const INK = "var(--color-ink)";
const HI = "var(--color-hi)";

export function MarkOvershoot({ className = "h-6 w-auto", tone = "paper" }: MarkProps) {
  const box = tone === "paper" ? INK : HI;
  const tickIn = tone === "paper" ? HI : INK;
  // The overshoot shares the box colour, so it can overlap the box edge freely.
  return (
    <svg viewBox="0 -1 26 33" className={className} aria-hidden="true">
      <rect x="1" y="8" width="23" height="23" rx="4" fill={box} />
      <path
        d="M5.6 18.6 L10.6 23.6 L22.6 1.6"
        fill="none"
        stroke={tickIn}
        strokeWidth="4.4"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <polygon points="21.42,8.60 25.75,0.67 21.67,-1.55 16.14,8.60" fill={box} />
    </svg>
  );
}

export const LogoMark = MarkOvershoot;

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`cond leading-none font-black tracking-[-0.01em] ${className}`}>Nota</span>
  );
}

export function Logo({ className = "", tone = "paper" }: { className?: string; tone?: Tone }) {
  return (
    <span className={`inline-flex items-end gap-1.5 ${className}`}>
      <LogoMark tone={tone} className="h-[1.9rem] w-auto" />
      <Wordmark className="mb-[-0.08em] text-[1.6rem]" />
    </span>
  );
}
