export function SectionLabel({
  n,
  children,
  tone = "paper",
}: {
  n: string;
  children: React.ReactNode;
  tone?: "paper" | "ink";
}) {
  const rule = tone === "paper" ? "border-ink/15 text-ink-2" : "border-term-fg/15 text-term-dim";
  return (
    <div className={`flex items-baseline justify-between border-b pb-3 ${rule}`}>
      <p className="label">
        <span className={tone === "paper" ? "text-ink" : "text-hi"}>{n}</span>
        <span className="mx-2 opacity-40">/</span>
        {children}
      </p>
      <p className="label hidden opacity-60 sm:block">Nota · withnota.com</p>
    </div>
  );
}
