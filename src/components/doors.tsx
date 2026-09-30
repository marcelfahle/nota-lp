"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState, type ReactNode } from "react";
import { SectionLabel } from "@/components/section-label";
import { Terminal } from "@/components/terminal";

const TOOLS = [
  "create_invoice",
  "send_invoice",
  "send_reminder",
  "mark_paid",
  "duplicate_invoice",
  "cancel_invoice",
  "change_invoice_due_date",
  "download_pdf",
  "invoice_overview",
  "get_invoice",
  "list_invoices",
  "create_client",
  "list_clients",
];

const SAYINGS: [string, string][] = [
  ["What's overdue?", "invoice_overview"],
  ["Oxide paid. Mark it.", "mark_paid"],
  ["Same as last month for Oxide, but 46 hours.", "duplicate_invoice"],
  ["Nudge everyone who's late.", "send_reminder"],
  ["Push Acme's due date to Friday.", "change_invoice_due_date"],
];

const Cmd = ({ children }: { children: ReactNode }) => (
  <p>
    <span className="text-hi">$</span> {children}
  </p>
);
const Dim = ({ children }: { children: ReactNode }) => (
  <span className="text-term-dim">{children}</span>
);
const Ok = ({ children }: { children: ReactNode }) => (
  <p>
    <span className="text-hi">✓</span> {children}
  </p>
);

type Door = {
  key: string;
  label: string;
  tag: string;
  title: string;
  body: ReactNode;
  extra?: ReactNode;
  demo: ReactNode;
};

const Step = ({ n, children }: { n: number; children: ReactNode }) => (
  <li className="flex gap-4 border-t border-term-fg/10 py-3">
    <span className="font-dot text-2xl leading-none font-black text-hi">{n}</span>
    <span className="font-serif text-[1.05rem] leading-snug">{children}</span>
  </li>
);

const DOORS: Door[] = [
  {
    key: "chat",
    label: "Chat",
    tag: "built into Nota",
    title: "Built in. Nothing to set up.",
    body: (
      <>
        Every Nota account comes with the chat. It knows your clients and what you billed them
        last time, so &ldquo;same as last month for Oxide&rdquo; just works. Check the draft, hit
        send.
      </>
    ),
    extra: (
      <div className="mt-8">
        <p className="label text-term-dim">Things people actually say</p>
        <ul className="mt-3 divide-y divide-term-fg/10 border-y border-term-fg/10">
          {SAYINGS.map(([said, tool]) => (
            <li key={tool} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-2.5">
              <span className="font-serif text-[1.05rem] italic">&ldquo;{said}&rdquo;</span>
              <span className="font-mono text-[11px] text-hi">{tool}</span>
            </li>
          ))}
        </ul>
      </div>
    ),
    demo: (
      <div className="bg-paper p-5 text-ink ring-1 ring-term-fg/10 md:p-7">
        <div className="flex items-center justify-between border-b border-ink/10 pb-3">
          <p className="label text-ink-2">Nota · Chat</p>
          <p className="font-mono text-[11px] text-ink-2">app.withnota.com</p>
        </div>
        <div className="mt-5 flex justify-end">
          <p className="max-w-[85%] bg-ink px-4 py-3 text-[15px] text-paper">
            Same as last month for Oxide, but 46 hours.
          </p>
        </div>
        <div className="mt-4 max-w-[92%]">
          <p className="font-serif text-[16px]">
            Copied INV-0042 and changed the hours. Everything else is the same as September.
          </p>
          <div className="mt-3 border border-ink/15 bg-[oklch(0.985_0.006_88)] p-4">
            <div className="flex items-baseline justify-between">
              <p className="font-semibold">Oxide GmbH</p>
              <p className="font-mono text-[11px] text-ink-2">INV-0043 · draft</p>
            </div>
            <p className="mt-1 font-mono text-[12px] text-ink-2">46 h × €120.00 · due 30 Nov</p>
            <p className="cond mt-3 text-4xl font-black tabular-nums">€5,520.00</p>
            <div className="mt-4 flex gap-2 text-[13px] font-semibold">
              <span className="bg-ink px-4 py-2 text-paper">Send invoice</span>
              <span className="border border-ink/20 px-4 py-2">Preview PDF</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    key: "connect",
    label: "ChatGPT & Claude",
    tag: "connector · no code",
    title: "Add Nota to ChatGPT or Claude.",
    body: (
      <>
        Nota speaks MCP, the open standard ChatGPT and Claude use to plug in apps. Add it as a
        connector, sign in once, and your assistant gets {TOOLS.length} invoicing tools.
        Invoices show up as live cards you can send, remind and mark paid without leaving the
        chat.
      </>
    ),
    extra: (
      <ol className="mt-8 border-b border-term-fg/10">
        <Step n={1}>In ChatGPT or Claude, open Settings → Connectors.</Step>
        <Step n={2}>Add a custom connector with Nota&rsquo;s URL.</Step>
        <Step n={3}>Sign in to Nota and approve. That&rsquo;s it.</Step>
      </ol>
    ),
    demo: (
      <div className="bg-paper text-ink ring-1 ring-term-fg/10">
        <div className="border-b border-ink/10 px-5 py-3 md:px-7">
          <p className="semi-cond text-[1.2rem] font-extrabold">Add custom connector</p>
        </div>
        <div className="space-y-4 px-5 py-5 md:px-7">
          <div>
            <p className="label text-[10px] text-ink-2">Name</p>
            <p className="mt-1.5 border border-ink/20 bg-[oklch(0.99_0.004_88)] px-3 py-2 text-[14px]">Nota</p>
          </div>
          <div>
            <p className="label text-[10px] text-ink-2">Connector URL</p>
            <p className="mt-1.5 border-2 border-ink bg-[oklch(0.99_0.004_88)] px-3 py-2 font-mono text-[13px]">
              https://mcp.withnota.com/mcp
            </p>
          </div>
          <div className="flex items-center justify-between gap-4">
            <p className="font-mono text-[11px] text-ink-2">Sign in with your Nota account</p>
            <span className="bg-ink px-4 py-2 text-[13px] font-semibold text-paper">Connect</span>
          </div>
        </div>
        <div className="border-t border-ink/10 bg-paper-2 px-5 py-4 md:px-7">
          <p className="flex items-center gap-2 text-[13px] font-semibold">
            <span className="h-2 w-2 bg-hi ring-1 ring-ink" />
            Nota · connected · {TOOLS.length} tools
          </p>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {TOOLS.map((t) => (
              <span key={t} className="border border-ink/15 bg-paper px-2 py-0.5 font-mono text-[11px]">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    key: "terminal",
    label: "Terminal",
    tag: "Claude Code · Cursor · CLI",
    title: "For people who live in the terminal.",
    body: (
      <>
        Claude Code, Cursor and any other MCP client can use the same server. And{" "}
        <code className="font-mono text-[0.9em] text-hi">nota</code> is a real CLI that reads line
        items the way you write them: <span className="font-mono text-[0.9em]">&ldquo;40hrs at 120&rdquo;</span>.
      </>
    ),
    extra: (
      <div className="mt-8">
        <p className="label text-term-dim">Install the CLI</p>
        <p className="mt-3 font-mono text-[13px]">
          <span className="text-hi">$</span> bun add -g @nota-app/cli
        </p>
      </div>
    ),
    demo: (
      <Terminal title="~/clients/oxide — zsh">
        <Cmd>
          claude mcp add nota \
          <br />
          <span className="pl-6">--env NOTA_API_KEY=nota_•••••••• \</span>
          <br />
          <span className="pl-6">-- npx -y @nota-app/mcp</span>
        </Cmd>
        <Ok>Added stdio MCP server nota</Ok>
        <div className="mt-4" />
        <Cmd>
          nota invoices create \
          <br />
          <span className="pl-6">--client &quot;Oxide GmbH&quot; \</span>
          <br />
          <span className="pl-6">--item &quot;Development, 40hrs at 120&quot; \</span>
          <br />
          <span className="pl-6">--tax-rate 21</span>
        </Cmd>
        <Ok>
          Created INV-0042 <Dim>·</Dim> Oxide GmbH <Dim>·</Dim> €5,808.00
        </Ok>
        <div className="mt-4" />
        <Cmd>nota invoices send INV-0042</Cmd>
        <Ok>Sent INV-0042 to Oxide GmbH</Ok>
        <div className="mt-4" />
        <Cmd>
          nota invoices list --status overdue <Dim># go outside</Dim>
        </Cmd>
      </Terminal>
    ),
  },
  {
    key: "api",
    label: "API",
    tag: "for your cron jobs",
    title: "Everything above runs on this.",
    body: (
      <>
        A boring, documented REST API with bearer tokens. The web app, the chat, the CLI and
        the MCP server all sit on it. Wire it to Zapier, a cron job, or your own dashboard.
      </>
    ),
    demo: (
      <Terminal title="POST /api/v1/invoices">
        <Cmd>
          curl https://app.withnota.com/api/v1/invoices \
          <br />
          <span className="pl-6">-H &quot;Authorization: Bearer $NOTA_API_KEY&quot; \</span>
          <br />
          <span className="pl-6">-H &quot;Content-Type: application/json&quot; \</span>
          <br />
          <span className="pl-6">-d &apos;{"{"}&quot;clientId&quot;: &quot;c_oxide&quot;,</span>
          <br />
          <span className="pl-10">&quot;currency&quot;: &quot;EUR&quot;, &quot;reverseCharge&quot;: true,</span>
          <br />
          <span className="pl-10">&quot;lineItems&quot;: [{"{"}&quot;description&quot;: &quot;Consulting&quot;,</span>
          <br />
          <span className="pl-12">&quot;quantity&quot;: 40, &quot;unitPrice&quot;: 120{"}"}]{"}"}&apos;</span>
        </Cmd>
        <div className="mt-4 text-term-fg/85">
          <p>{"{"}</p>
          <p className="pl-4">
            <Dim>&quot;number&quot;:</Dim> &quot;INV-0042&quot;,
          </p>
          <p className="pl-4">
            <Dim>&quot;status&quot;:</Dim> <span className="text-hi">&quot;draft&quot;</span>,
          </p>
          <p className="pl-4">
            <Dim>&quot;total&quot;:</Dim> 4800,
          </p>
          <p className="pl-4">
            <Dim>&quot;dueAt&quot;:</Dim> &quot;2026-10-30&quot;
          </p>
          <p>{"}"}</p>
        </div>
      </Terminal>
    ),
  },
];

export function Doors() {
  const [active, setActive] = useState(0);
  const baseId = "doors";
  const door = DOORS[active];

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    e.preventDefault();
    const next = (active + (e.key === "ArrowRight" ? 1 : DOORS.length - 1)) % DOORS.length;
    setActive(next);
    document.getElementById(`${baseId}-tab-${next}`)?.focus();
  };

  return (
    <section id="doors" className="bg-ink px-4 pt-6 pb-24 text-term-fg md:px-8 md:pb-36">
      <div className="mx-auto max-w-[88rem]">
        <SectionLabel n="01" tone="ink">
          Ways in
        </SectionLabel>

        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          <h2 className="cond text-[clamp(3rem,8vw,8rem)] leading-[0.86] font-black tracking-[-0.015em] lg:col-span-7">
            Four ways in.
            <br />
            <span className="text-hi">Zero forms.</span>
          </h2>
          <p className="font-serif text-[1.25rem] leading-[1.5] text-term-fg/80 lg:col-span-5 lg:self-end">
            Nota&rsquo;s whole product is an API. The chat, the ChatGPT and Claude connector, the
            CLI: four doors into the same room. Use whichever one is already open on your
            screen.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Ways to use Nota"
          onKeyDown={onKey}
          className="mt-14 grid grid-cols-2 border-t border-l border-term-fg/15 md:grid-cols-4"
        >
          {DOORS.map((d, i) => {
            const on = i === active;
            return (
              <button
                key={d.key}
                id={`${baseId}-tab-${i}`}
                role="tab"
                type="button"
                aria-selected={on}
                aria-controls={`${baseId}-panel`}
                tabIndex={on ? 0 : -1}
                onClick={() => setActive(i)}
                className={`group relative border-r border-b border-term-fg/15 px-4 py-4 text-left transition-colors duration-150 md:px-5 md:py-5 ${
                  on ? "bg-hi text-ink" : "hover:bg-term-fg/[0.04]"
                }`}
              >
                <span className={`font-mono text-[11px] ${on ? "text-ink/60" : "text-term-dim"}`}>
                  0{i + 1}
                </span>
                <span className="cond mt-1 block text-[1.9rem] leading-[0.95] font-black md:text-[2.3rem] xl:text-5xl">
                  {d.label}
                </span>
                <span className={`label mt-2 block text-[10px] ${on ? "text-ink/70" : "text-term-dim"}`}>
                  {d.tag}
                </span>
              </button>
            );
          })}
        </div>

        <div
          id={`${baseId}-panel`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${active}`}
          className="grid gap-10 border-x border-b border-term-fg/15 p-5 md:p-8 lg:grid-cols-12 lg:gap-12 lg:p-10"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={door.key}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.22, ease: [0.25, 1, 0.5, 1] }}
              className="grid gap-10 lg:col-span-12 lg:grid-cols-12 lg:gap-12"
            >
              <div className="lg:col-span-5">
                <h3 className="semi-cond text-[2rem] leading-[1] font-extrabold tracking-tight md:text-[2.4rem]">
                  {door.title}
                </h3>
                <p className="mt-4 font-serif text-[1.15rem] leading-[1.55] text-term-fg/80">
                  {door.body}
                </p>
                {door.extra}
              </div>
              <div className="min-w-0 lg:col-span-7">{door.demo}</div>
            </motion.div>
          </AnimatePresence>
        </div>

        <p className="mt-6 font-mono text-[12px] text-term-dim">
          Works with ChatGPT, Claude, Claude Code, Cursor and any other MCP client.
        </p>
      </div>
    </section>
  );
}
