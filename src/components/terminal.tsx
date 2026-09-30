import type { ReactNode } from "react";

export function Terminal({
  title,
  children,
  aside,
  className = "",
}: {
  title: string;
  children: ReactNode;
  aside?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-term text-term-fg ring-1 ring-term-fg/10 ${className}`}
    >
      <div className="flex items-center justify-between gap-4 border-b border-term-fg/10 px-4 py-2.5">
        <div className="flex items-center gap-3">
          <span className="flex gap-1" aria-hidden="true">
            <span className="h-2 w-2 bg-term-fg/25" />
            <span className="h-2 w-2 bg-term-fg/25" />
            <span className="h-2 w-2 bg-hi" />
          </span>
          <span className="font-mono text-[11px] text-term-dim">{title}</span>
        </div>
        {aside}
      </div>
      <div className="px-4 py-4 font-mono text-[12.5px] leading-[1.7] md:px-5 md:text-[13px]">
        {children}
      </div>
    </div>
  );
}
