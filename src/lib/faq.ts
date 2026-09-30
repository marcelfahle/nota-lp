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
    a: "If you send invoices and don't need time tracking, payroll or expense management, yes. Nota is $9 a month with unlimited clients. FreshBooks Lite is $23 a month and stops at five.",
  },
  {
    q: "Does Nota handle EU e-invoicing and reverse charge?",
    a: "Yes. Every invoice can be exported as an XRechnung e-invoice, and marking an invoice reverse charge sets VAT to zero and prints the required note.",
  },
  {
    q: "Is Nota really free and open source?",
    a: "The code is MIT-licensed, so you can self-host it for nothing. The hosted version is free for 5 invoices a month with every feature, and $9 a month for unlimited.",
  },
];
