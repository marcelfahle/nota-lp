"use client";

import { motion } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";
import { InvoiceCard } from "@/components/demo/invoice-card";
import { PHASE, PROMPT, type DemoState } from "@/components/demo/timeline";
import { Logo, MarkOvershoot } from "@/components/logo";

/*
 * Stand-ins for the places people talk to Nota. They're deliberately
 * generic chat layouts, labelled by name, not copies of anyone's UI.
 */

const fade = {
  initial: { opacity: 0, y: 6 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] as const },
};

function Caret({ className = "bg-current" }: { className?: string }) {
  return <span className={`cursor-blink ml-px inline-block h-[1.1em] w-[2px] translate-y-[0.2em] ${className}`} />;
}

function Dots() {
  const [n, setN] = useState(1);
  useEffect(() => {
    const id = setInterval(() => setN((v) => (v % 3) + 1), 280);
    return () => clearInterval(id);
  }, []);
  return <span className="inline-block w-4 text-left">{".".repeat(n)}</span>;
}

function Frame({
  title,
  aside,
  className = "",
  children,
}: {
  title: ReactNode;
  aside?: ReactNode;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={`flex h-full flex-col overflow-hidden ring-1 ring-ink/15 ${className}`}>
      <div className="flex shrink-0 items-center justify-between gap-3 border-b border-current/10 px-4 py-2.5">
        <div className="flex min-w-0 items-center gap-2.5">
          <span className="flex gap-1" aria-hidden="true">
            <span className="h-2 w-2 bg-current opacity-20" />
            <span className="h-2 w-2 bg-current opacity-20" />
            <span className="h-2 w-2 bg-current opacity-20" />
          </span>
          {title}
        </div>
        {aside}
      </div>
      {children}
    </div>
  );
}

function ConnectedChip() {
  return (
    <span className="flex items-center gap-1.5 rounded-full border border-ink/15 px-2.5 py-1 text-[11px] font-medium text-ink-2">
      <MarkOvershoot className="h-3.5 w-auto" />
      Nota connected
    </span>
  );
}

/* ChatGPT-style: plain assistant text, rounded user bubble, pill composer. */
export function ChatGPTSurface({ phase, typed }: DemoState) {
  const sentPrompt = phase >= PHASE.thinking;
  return (
    <Frame
      className="bg-[oklch(0.99_0.002_90)] text-ink"
      title={<span className="text-[13px] font-semibold">ChatGPT</span>}
      aside={<ConnectedChip />}
    >
      <div className="flex min-h-0 flex-1 flex-col justify-end gap-3 overflow-hidden px-4 pt-4 md:px-6">
        {sentPrompt && (
          <motion.p {...fade} className="ml-auto max-w-[85%] rounded-[1.4rem] bg-[oklch(0.94_0.003_90)] px-4 py-2.5 text-[14px] leading-snug">
            {PROMPT}
          </motion.p>
        )}
        {phase === PHASE.thinking && (
          <p className="text-[14px] text-ink-2">
            Thinking<Dots />
          </p>
        )}
        {phase >= PHASE.creating && (
          <motion.p {...fade} className="text-[12.5px] text-ink-2">
            {phase === PHASE.creating ? "Calling Nota" : "Called Nota"} · <span className="font-mono">create_invoice</span>
            {phase === PHASE.creating && <Dots />}
          </motion.p>
        )}
        {phase >= PHASE.draft && (
          <motion.div {...fade} className="space-y-2.5">
            <p className="text-[14px] leading-snug">Here&rsquo;s the invoice for Oxide. Reverse charge applied, since they&rsquo;re in Germany.</p>
            <InvoiceCard sent={phase >= PHASE.sent} />
          </motion.div>
        )}
        {phase >= PHASE.sending && (
          <motion.p {...fade} className="text-[12.5px] text-ink-2">
            {phase === PHASE.sending ? "Calling Nota" : "Called Nota"} · <span className="font-mono">send_invoice</span>
            {phase === PHASE.sending && <Dots />}
          </motion.p>
        )}
        {phase >= PHASE.sent && (
          <motion.p {...fade} className="text-[14px] leading-snug">
            Sent. Oxide has the PDF and a pay link, due 30 October.
          </motion.p>
        )}
      </div>
      <div className="shrink-0 px-4 pt-3 pb-4 md:px-6">
        <div className="flex items-center gap-3 rounded-full border border-ink/15 bg-[oklch(0.99_0.002_90)] py-2 pr-2 pl-4 shadow-[0_2px_8px_-4px_oklch(0.2_0.012_75/0.2)]">
          <span className="min-w-0 flex-1 truncate text-[14px]">
            {phase === PHASE.typing ? (
              <>
                {PROMPT.slice(0, typed)}
                <Caret />
              </>
            ) : (
              <span className="text-ink-2">Ask anything</span>
            )}
          </span>
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-paper" aria-hidden="true">
            ↑
          </span>
        </div>
      </div>
    </Frame>
  );
}

/* Claude-style: warm paper, serif answers, visible tool blocks. */
function ToolBlock({ name, done, result }: { name: string; done: boolean; result: string }) {
  return (
    <motion.div {...fade} className="rounded-lg border border-ink/12 bg-[oklch(0.985_0.008_85)] px-3 py-2 text-[12.5px]">
      <p className="flex items-center justify-between gap-3">
        <span>
          <span className="font-semibold">nota</span>
          <span className="text-ink-2"> › </span>
          <span className="font-mono">{name}</span>
        </span>
        <span className="text-ink-2">{done ? "✓" : <Dots />}</span>
      </p>
      {done && <p className="mt-0.5 font-mono text-[11px] text-ink-2">{result}</p>}
    </motion.div>
  );
}

export function ClaudeSurface({ phase, typed }: DemoState) {
  const sentPrompt = phase >= PHASE.thinking;
  return (
    <Frame
      className="bg-[oklch(0.965_0.014_82)] text-ink"
      title={<span className="text-[13px] font-semibold">Claude</span>}
      aside={<ConnectedChip />}
    >
      <div className="flex min-h-0 flex-1 flex-col justify-end gap-3 overflow-hidden px-4 pt-4 md:px-6">
        {sentPrompt && (
          <motion.p {...fade} className="ml-auto max-w-[85%] rounded-xl bg-[oklch(0.91_0.018_80)] px-4 py-2.5 text-[14px] leading-snug">
            {PROMPT}
          </motion.p>
        )}
        {phase === PHASE.thinking && (
          <p className="font-serif text-[15px] text-ink-2 italic">
            Thinking<Dots />
          </p>
        )}
        {phase >= PHASE.creating && (
          <ToolBlock name="create_invoice" done={phase >= PHASE.draft} result="INV-0042 · draft · €4,800.00" />
        )}
        {phase >= PHASE.draft && (
          <motion.div {...fade} className="space-y-2.5">
            <InvoiceCard sent={phase >= PHASE.sent} />
          </motion.div>
        )}
        {phase >= PHASE.sending && (
          <ToolBlock name="send_invoice" done={phase >= PHASE.sent} result="sent · PDF + XRechnung attached" />
        )}
        {phase >= PHASE.sent && (
          <motion.p {...fade} className="font-serif text-[15.5px] leading-snug">
            Done. INV-0042 is in Oxide&rsquo;s inbox with a pay link. Want a reminder if it&rsquo;s not paid by the 30th?
          </motion.p>
        )}
      </div>
      <div className="shrink-0 px-4 pt-3 pb-4 md:px-6">
        <div className="rounded-2xl border border-ink/15 bg-[oklch(0.985_0.008_85)] px-4 py-3">
          <p className="truncate text-[14px]">
            {phase === PHASE.typing ? (
              <>
                {PROMPT.slice(0, typed)}
                <Caret />
              </>
            ) : (
              <span className="text-ink-2">Reply to Claude…</span>
            )}
          </p>
        </div>
      </div>
    </Frame>
  );
}

/* Nota itself: the web app with its chat docked on the right. */
const ROWS = [
  { n: "INV-0041", c: "Nordlicht", a: "€2,400.00", s: "Paid" },
  { n: "INV-0040", c: "Kiosko Dénia", a: "€380.00", s: "Paid" },
  { n: "INV-0039", c: "Acme", a: "€1,150.00", s: "Overdue" },
  { n: "INV-0038", c: "Nordlicht", a: "€2,400.00", s: "Paid" },
];

function StatusPill({ s }: { s: string }) {
  const tone =
    s === "Paid" ? "text-ink-2" : s === "Overdue" ? "text-red" : s === "Sent" ? "bg-hi text-ink" : "bg-ink/8 text-ink-2";
  return <span className={`label px-1.5 py-0.5 text-[9px] ${tone}`}>{s}</span>;
}

export function NotaSurface({ phase, typed }: DemoState) {
  const sentPrompt = phase >= PHASE.thinking;
  const newRow = phase >= PHASE.draft;
  return (
    <Frame
      className="bg-paper text-ink"
      title={
        <span className="truncate rounded-md bg-ink/6 px-2.5 py-0.5 font-mono text-[11px] text-ink-2">
          app.withnota.com/invoices
        </span>
      }
    >
      <div className="flex min-h-0 flex-1">
        <aside className="hidden w-36 shrink-0 flex-col gap-1 border-r border-ink/10 p-3 text-[13px] lg:flex">
          <Logo className="mb-3 scale-[0.8] origin-left" />
          <span className="bg-ink/6 px-2 py-1 font-semibold">Invoices</span>
          <span className="px-2 py-1 text-ink-2">Clients</span>
          <span className="px-2 py-1 text-ink-2">Bank accounts</span>
          <span className="px-2 py-1 text-ink-2">Settings</span>
        </aside>

        <div className="hidden min-w-0 flex-1 flex-col p-4 sm:flex">
          <div className="flex items-baseline justify-between">
            <p className="semi-cond text-[1.4rem] font-extrabold">Invoices</p>
            <p className="font-mono text-[11px] text-ink-2">Sep 2026</p>
          </div>
          <div className="mt-3 border-t border-ink/10 text-[12.5px]">
            {newRow && (
              <motion.div
                initial={{ opacity: 0, backgroundColor: "oklch(0.93 0.21 122 / 0.9)" }}
                animate={{ opacity: 1, backgroundColor: "oklch(0.93 0.21 122 / 0.25)" }}
                transition={{ duration: 1.2 }}
                className="grid grid-cols-[4.4rem_1fr_auto] items-center gap-2 border-b border-ink/10 px-1.5 py-2"
              >
                <span className="font-mono text-[11px]">INV-0042</span>
                <span className="truncate font-semibold">Oxide GmbH</span>
                <span className="flex items-center gap-2">
                  <span className="font-mono tabular-nums">€4,800.00</span>
                  <StatusPill s={phase >= PHASE.sent ? "Sent" : "Draft"} />
                </span>
              </motion.div>
            )}
            {ROWS.map((r) => (
              <div key={r.n} className="grid grid-cols-[4.4rem_1fr_auto] items-center gap-2 border-b border-ink/10 px-1.5 py-2">
                <span className="font-mono text-[11px] text-ink-2">{r.n}</span>
                <span className="truncate">{r.c}</span>
                <span className="flex items-center gap-2">
                  <span className="font-mono text-ink-2 tabular-nums">{r.a}</span>
                  <StatusPill s={r.s} />
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-full shrink-0 flex-col border-l border-ink/10 bg-[oklch(0.985_0.006_88)] sm:w-[54%] lg:w-[46%]">
          <div className="flex items-center justify-between border-b border-ink/10 px-3.5 py-2">
            <span className="flex items-center gap-1.5 text-[12px] font-semibold">
              <MarkOvershoot className="h-4 w-auto" /> Chat
            </span>
            <span className="font-mono text-[10px] text-ink-2">knows your clients</span>
          </div>
          <div className="flex min-h-0 flex-1 flex-col justify-end gap-2.5 overflow-hidden px-3.5 pt-3">
            {sentPrompt && (
              <motion.p {...fade} className="ml-auto max-w-[92%] bg-ink px-3 py-2 text-[13px] leading-snug text-paper">
                {PROMPT}
              </motion.p>
            )}
            {(phase === PHASE.thinking || phase === PHASE.creating) && (
              <p className="font-serif text-[14px] text-ink-2 italic">
                Drafting<Dots />
              </p>
            )}
            {phase >= PHASE.draft && (
              <motion.div {...fade} className="space-y-2">
                <p className="font-serif text-[14.5px] leading-snug">Draft&rsquo;s ready. Reverse charge applied.</p>
                <InvoiceCard sent={phase >= PHASE.sent} wide />
              </motion.div>
            )}
            {phase >= PHASE.sent && (
              <motion.p {...fade} className="font-serif text-[14.5px] leading-snug">
                Sent to Oxide. Say &ldquo;remind Oxide&rdquo; if it runs late.
              </motion.p>
            )}
          </div>
          <div className="px-3.5 pt-2.5 pb-3.5">
            <p className="truncate border border-ink/15 bg-paper px-3 py-2 text-[13px]">
              {phase === PHASE.typing ? (
                <>
                  {PROMPT.slice(0, typed)}
                  <Caret />
                </>
              ) : (
                <span className="text-ink-2">Tell Nota what you did…</span>
              )}
            </p>
          </div>
        </div>
      </div>
    </Frame>
  );
}

/* Claude Code in a terminal, for the people who asked. */
function ToolLine({ name, running, result }: { name: string; running: boolean; result: string }) {
  return (
    <div className="mt-3">
      <p>
        <span className={running ? "text-term-dim" : "text-hi"}>⏺</span> <span className="font-semibold">nota</span>
        <span className="text-term-dim"> · </span>
        {name}
        <span className="text-term-dim"> (MCP)</span>
      </p>
      <p className="pl-4 text-term-dim">
        ⎿&nbsp;&nbsp;{running ? "Running…" : <span className="text-term-fg/85">{result}</span>}
      </p>
    </div>
  );
}

export function TerminalSurface({ phase, typed }: DemoState) {
  return (
    <Frame
      className="bg-term font-mono text-[12.5px] leading-[1.7] text-term-fg md:text-[13px]"
      title={<span className="text-[11px] text-term-dim">claude — ~/clients/oxide</span>}
    >
      <div className="flex min-h-0 flex-1 flex-col justify-end overflow-hidden px-4 pb-4 md:px-5">
        <p className="text-term-dim">
          <span className="text-hi">✻</span> Claude Code · MCP: <span className="text-term-fg">nota</span> connected
        </p>
        <div className="mt-3 flex gap-2 border border-term-fg/15 px-3 py-2">
          <span className="text-term-dim">&gt;</span>
          <span className="min-w-0 flex-1 break-words">
            {PROMPT.slice(0, typed).toLowerCase()}
            {phase < PHASE.thinking && <Caret className="bg-term-fg/80" />}
          </span>
        </div>
        {phase === PHASE.thinking && (
          <p className="mt-3 text-term-dim">
            <span className="text-hi">✻</span> Invoicing<Dots />
          </p>
        )}
        {phase >= PHASE.creating && (
          <ToolLine name="create_invoice" running={phase === PHASE.creating} result="Draft INV-0042 · Oxide GmbH · €4,800.00" />
        )}
        {phase >= PHASE.sending && (
          <ToolLine name="send_invoice" running={phase === PHASE.sending} result="Sent · PDF + XRechnung attached" />
        )}
        {phase >= PHASE.sent && (
          <motion.p {...fade} className="mt-3">
            <span>⏺</span> Done. INV-0042 is in Oxide&rsquo;s inbox —{" "}
            <span className="bg-hi px-1 text-ink">€4,800.00</span>, due 30 Oct.
          </motion.p>
        )}
      </div>
    </Frame>
  );
}
