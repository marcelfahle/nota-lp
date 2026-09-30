import { useId } from "react";

/* Rubber stamp with an eroded-ink texture. Pure SVG, scales with font-size. */
export function Stamp({
  word,
  sub,
  className,
}: {
  word: string;
  sub?: string;
  className?: string;
}) {
  const id = useId().replace(/:/g, "");
  return (
    <svg
      viewBox="0 0 260 110"
      className={className}
      role="img"
      aria-label={sub ? `${word} — ${sub}` : word}
    >
      <defs>
        <filter id={`ink-${id}`} x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" seed="7" result="n" />
          <feColorMatrix
            in="n"
            type="matrix"
            values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -14 9.4"
            result="holes"
          />
          <feComposite in="SourceGraphic" in2="holes" operator="in" result="eroded" />
          <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="1" seed="3" result="warp" />
          <feDisplacementMap in="eroded" in2="warp" scale="3" />
        </filter>
      </defs>
      <g filter={`url(#ink-${id})`} fill="none" stroke="currentColor">
        <rect x="5" y="5" width="250" height="100" rx="10" strokeWidth="5" />
        <rect x="14" y="14" width="232" height="82" rx="5" strokeWidth="2" />
        <text
          x="130"
          y={sub ? 66 : 74}
          textAnchor="middle"
          fill="currentColor"
          stroke="none"
          style={{
            fontFamily: "var(--font-display)",
            fontVariationSettings: '"wdth" 125',
            fontWeight: 900,
            fontSize: sub ? 50 : 60,
            letterSpacing: "0.06em",
          }}
        >
          {word}
        </text>
        {sub && (
          <text
            x="130"
            y="86"
            textAnchor="middle"
            fill="currentColor"
            stroke="none"
            style={{
              fontFamily: "var(--font-geist-mono)",
              fontWeight: 600,
              fontSize: 12,
              letterSpacing: "0.12em",
            }}
          >
            {sub}
          </text>
        )}
      </g>
    </svg>
  );
}
