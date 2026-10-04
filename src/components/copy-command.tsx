"use client";

import { useState } from "react";

export function CopyCommand({
  command,
  className = "",
  tone = "paper",
}: {
  command: string;
  className?: string;
  tone?: "paper" | "ink";
}) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard blocked; the command is still selectable.
    }
  };

  const toneClass =
    tone === "paper"
      ? "border-ink/20 text-ink hover:border-ink"
      : "border-term-fg/20 text-term-fg hover:border-term-fg/60";

  return (
    <button
      type="button"
      onClick={copy}
      className={`group inline-flex max-w-full items-center gap-3 border px-4 py-3 font-mono text-[13px] transition-colors duration-150 ${toneClass} ${className}`}
    >
      <span className={tone === "paper" ? "text-ink-2" : "text-hi"}>$</span>
      <span className="min-w-0 [overflow-wrap:anywhere] select-all">{command}</span>
      <span
        className={`label ml-1 transition-opacity duration-150 ${copied ? "text-red opacity-100" : "opacity-50 group-hover:opacity-100"}`}
        aria-live="polite"
      >
        {copied ? "Copied" : "Copy"}
      </span>
    </button>
  );
}
