/*
 * The invoice your client receives. Sized in em so one font-size on the
 * wrapper scales the whole document.
 */
export function InvoicePaper({ className = "" }: { className?: string }) {
  return (
    <article
      className={`bg-[oklch(0.985_0.006_88)] text-ink shadow-[0_1px_0_oklch(0.2_0.012_75/0.08),0_30px_60px_-30px_oklch(0.2_0.012_75/0.35)] ${className}`}
      aria-label="Example invoice INV-0042 for Oxide GmbH, €4,800.00"
    >
      <div className="p-[2.4em]">
        <header className="flex items-start justify-between gap-[1em]">
          <div>
            <p className="text-[1.05em] font-bold tracking-tight">Studio Marcel</p>
            <p className="mt-[0.2em] font-serif text-[0.85em] leading-snug text-ink-2">
              Carrer Marqués de Campo 12
              <br />
              03700 Dénia, Spain
            </p>
          </div>
          <div className="text-right">
            <p className="cond text-[2.4em] leading-[0.85] font-black tracking-tight">
              Invoice
            </p>
            <p className="mt-[0.35em] font-mono text-[0.75em] text-ink-2">INV-0042</p>
          </div>
        </header>

        <div className="mt-[2em] grid grid-cols-3 gap-[1em] border-y border-ink/15 py-[1em]">
          <div>
            <p className="label text-[0.6em] text-ink-2">Billed to</p>
            <p className="mt-[0.35em] text-[0.9em] font-semibold">Oxide GmbH</p>
            <p className="font-serif text-[0.8em] text-ink-2">Berlin, DE</p>
          </div>
          <div>
            <p className="label text-[0.6em] text-ink-2">Issued</p>
            <p className="mt-[0.35em] font-mono text-[0.8em]">30 Sep 2026</p>
          </div>
          <div>
            <p className="label text-[0.6em] text-ink-2">Due</p>
            <p className="mt-[0.35em] font-mono text-[0.8em]">30 Oct 2026</p>
          </div>
        </div>

        <table className="mt-[1.4em] w-full text-[0.85em]">
          <thead>
            <tr className="text-left text-ink-2">
              <th className="label pb-[0.6em] text-[0.7em] font-semibold">Description</th>
              <th className="label pb-[0.6em] text-right text-[0.7em] font-semibold">Qty</th>
              <th className="label pb-[0.6em] text-right text-[0.7em] font-semibold">Amount</th>
            </tr>
          </thead>
          <tbody className="font-serif">
            <tr className="border-t border-ink/10">
              <td className="py-[0.6em]">
                Consulting — September
                <span className="block font-mono text-[0.8em] text-ink-2">€120.00 / hour</span>
              </td>
              <td className="py-[0.6em] text-right font-mono tabular-nums">40</td>
              <td className="py-[0.6em] text-right font-mono tabular-nums">4,800.00</td>
            </tr>
          </tbody>
        </table>

        <div className="mt-[0.6em] space-y-[0.3em] border-t border-ink/15 pt-[0.8em] font-mono text-[0.78em] tabular-nums">
          <div className="flex justify-between text-ink-2">
            <span>Subtotal</span>
            <span>4,800.00</span>
          </div>
          <div className="flex justify-between text-ink-2">
            <span>VAT 0% · reverse charge</span>
            <span>0.00</span>
          </div>
        </div>

        <div className="mt-[1em] flex items-end justify-between">
          <p className="label text-[0.65em]">Total due</p>
          <p className="cond text-[2.6em] leading-none font-black tracking-tight tabular-nums">
            €4,800.00
          </p>
        </div>

        <div className="mt-[1.4em] flex items-center justify-between bg-ink px-[1.1em] py-[0.85em] text-paper">
          <span className="text-[0.85em] font-semibold">Pay €4,800.00</span>
          <span className="font-mono text-[0.75em] text-hi">card · SEPA · →</span>
        </div>

        <footer className="mt-[1.4em] flex items-center justify-between font-mono text-[0.62em] text-ink-2">
          <span>PDF + XRechnung</span>
          <span>Sent with Nota</span>
        </footer>
      </div>
    </article>
  );
}
