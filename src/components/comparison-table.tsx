"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const rows = [
  { label: "Price", freshbooks: "$23/mo", wave: "Free + fees", nota: "$9/mo" },
  { label: "Client limit", freshbooks: "5", wave: "Unlimited", nota: "Unlimited" },
  { label: "Open source", freshbooks: false, wave: false, nota: true },
  { label: "API & integrations", freshbooks: false, wave: false, nota: true },
  { label: "Create from text", freshbooks: false, wave: false, nota: true },
  { label: "Self-host option", freshbooks: false, wave: false, nota: true },
];

function Cell({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return (
      <span className={value ? "text-accent" : "text-muted/30"}>
        {value ? "Yes" : "No"}
      </span>
    );
  }
  return <span>{value}</span>;
}

export function ComparisonTable() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="border-t border-border px-6 py-24 md:py-36">
      <div ref={ref} className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="font-display text-3xl tracking-tight md:text-4xl">
            The comparison.
          </h2>
          <p className="mt-4 max-w-md text-muted">
            How Nota stacks up against the tools you&rsquo;re probably using today.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="overflow-x-auto"
        >
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-foreground">
                <th className="pb-3 pr-8 font-mono text-[10px] tracking-wider text-muted uppercase" />
                <th className="pb-3 pr-8 font-mono text-[10px] tracking-wider text-muted uppercase">
                  FreshBooks
                </th>
                <th className="pb-3 pr-8 font-mono text-[10px] tracking-wider text-muted uppercase">
                  Wave
                </th>
                <th className="pb-3 font-mono text-[10px] font-bold tracking-wider uppercase">
                  Nota
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.label} className="border-b border-border">
                  <td className="py-3.5 pr-8 font-medium">{row.label}</td>
                  <td className="py-3.5 pr-8 text-muted">
                    <Cell value={row.freshbooks} />
                  </td>
                  <td className="py-3.5 pr-8 text-muted">
                    <Cell value={row.wave} />
                  </td>
                  <td className="py-3.5 font-medium">
                    <Cell value={row.nota} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
