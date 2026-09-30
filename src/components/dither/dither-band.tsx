"use client";

import dynamic from "next/dynamic";
import { palette } from "@/lib/palette";

const DitherField = dynamic(
  () => import("@/components/dither/dither-field").then((m) => m.DitherField),
  { ssr: false },
);

/* Paper dissolving into ink (or back), used between light and dark sections. */
export function DitherBand({
  direction,
  className = "h-40 md:h-56",
}: {
  direction: "to-ink" | "to-paper";
  className?: string;
}) {
  const [a, b] =
    direction === "to-ink" ? [palette.paper, palette.ink] : [palette.ink, palette.paper];
  return (
    <div
      aria-hidden="true"
      className={`relative ${className}`}
      style={{
        background: `linear-gradient(to bottom, ${a}, ${b})`,
      }}
    >
      <DitherField a={a} b={b} mode="down" className="absolute inset-0 h-full w-full" />
    </div>
  );
}
