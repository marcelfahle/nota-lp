"use client";

import { useEffect, useRef, useState } from "react";

// Shade blocks are literally dither glyphs.
const GLYPHS = "░▒▓█▚▞";

/* Shows `text`; whenever it changes, scrambles through dither glyphs into it. */
export function ScrambleWord({
  text,
  srText,
  className,
}: {
  text: string;
  srText?: string;
  className?: string;
}) {
  const [shown, setShown] = useState(text);
  const prev = useRef(text);

  useEffect(() => {
    const from = prev.current;
    prev.current = text;
    if (from === text) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(text);
      return;
    }

    const len = Math.max(text.length, from.length);
    const settle = Array.from({ length: len }, (_, i) => 5 + i * 1.6 + Math.random() * 5);
    let frame = 0;
    let timer = 0;
    const step = () => {
      frame++;
      let out = "";
      let done = true;
      for (let i = 0; i < len; i++) {
        if (frame >= settle[i]) {
          out += text[i] ?? "";
        } else {
          done = false;
          out += frame < 3 && from[i] ? from[i] : GLYPHS[(Math.random() * GLYPHS.length) | 0];
        }
      }
      setShown(out);
      if (!done) timer = window.setTimeout(step, 34);
    };
    step();
    return () => clearTimeout(timer);
  }, [text]);

  return (
    <span className={className}>
      {srText && <span className="sr-only">{srText}</span>}
      <span aria-hidden={srText ? true : undefined}>{shown}</span>
    </span>
  );
}
