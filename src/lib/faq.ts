// Written for the questions people actually type into Google and ChatGPT.
// Shared by the FAQ section and its FAQPage JSON-LD.
export const FAQ: { q: string; a: string }[] = [
  {
    q: "Can ChatGPT create and send invoices?",
    a: "Not on its own. ChatGPT can write something that looks like an invoice, but it can't number it, email it, take payment or chase it. Connect Nota and it can: you describe the work, and Nota creates a real invoice with a PDF and a Stripe pay link and sends it to your client.",
  },
  {
    q: "How do I send an invoice from Claude?",
    a: "Add Nota as a connector in Claude (or run claude mcp add in Claude Code), sign in, then say something like “invoice Oxide for 40 hours at €120”. Claude calls Nota's create_invoice and send_invoice tools. You see the draft before it goes out.",
  },
  {
    q: "Will the AI send invoices without asking me?",
    a: "No. Creating an invoice makes a draft. Sending is a separate step that only happens when you ask for it.",
  },
  {
    q: "What is MCP?",
    a: "The Model Context Protocol is the open standard AI assistants use to plug into other apps. Nota's MCP server gives ChatGPT, Claude, Cursor and other clients 13 invoicing tools: create, send, remind, mark paid, duplicate and more.",
  },
  {
    q: "Is Nota a good FreshBooks alternative?",
    a: "Nota is an option if you need invoicing without time tracking, payroll or expense management. Nota is $9/month with unlimited clients and invoices. FreshBooks Lite's standard USD monthly price is $23 for up to five billable clients. This compares monthly billing before tax; promotions and annual plans can change the cost. Both products offer an API.",
  },
  {
    q: "Does Nota handle EU e-invoicing and reverse charge?",
    a: "Yes. Every invoice can be exported as an XRechnung e-invoice, and marking an invoice reverse charge sets VAT to zero and prints the required note.",
  },
  {
    q: "Is Nota really free and open source?",
    a: "The code is MIT-licensed with no software license fee; self-hosting has infrastructure and service costs. The hosted version is free for 5 invoices a month with every feature, and $9/month for unlimited invoices, plus applicable tax. Stripe processing fees apply to online payments.",
  },
];
