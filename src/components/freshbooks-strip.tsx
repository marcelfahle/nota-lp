const ROWS: [string, string, string][] = [
  ["Standard USD monthly price", "$23/mo", "$9/mo"],
  ["Clients", "5", "∞"],
  ["Source", "closed", "MIT"],
  ["API access", "yes", "yes"],
];

export function FreshBooksStrip() {
  return (
    <section className="bg-ink px-4 py-20 text-term-fg md:px-8 md:py-28">
      <div className="mx-auto grid max-w-[88rem] gap-12 lg:grid-cols-12 lg:items-end lg:gap-8">
        <div className="lg:col-span-6">
          <p className="font-mono text-[13px] text-hi">Nota vs FreshBooks Lite</p>
          <h2 className="cond mt-4 text-[clamp(3.4rem,10vw,10rem)] leading-[0.82] font-black tracking-[-0.02em]">
            Drop
            <br />
            FreshBooks.
          </h2>
          <p className="mt-6 max-w-md font-serif text-[1.2rem] leading-[1.5] text-term-fg/80">
            Nota costs $14/month less than FreshBooks Lite at standard USD monthly prices,
            before tax. Promotions and annual discounts can change the comparison.
          </p>
          <a
            href="/freshbooks"
            className="group mt-8 inline-flex items-center gap-3 bg-hi px-6 py-4 text-[15px] font-semibold text-ink transition-colors duration-150 hover:bg-paper"
          >
            See the full breakdown
            <span className="transition-transform duration-200 ease-out group-hover:translate-x-1">→</span>
          </a>
        </div>

        <div className="lg:col-span-6">
          <table className="w-full text-left">
            <caption className="sr-only">Nota vs FreshBooks Lite at standard monthly prices, excluding promotions and tax</caption>
            <thead>
              <tr className="label text-term-dim">
                <th scope="col" className="pb-3 font-semibold">Feature</th>
                <th scope="col" className="pb-3 font-semibold">FreshBooks Lite</th>
                <th scope="col" className="pb-3 font-semibold text-hi">Nota</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map(([label, fb, nota]) => (
                <tr key={label} className="border-t border-term-fg/15">
                  <th scope="row" className="py-4 font-mono text-[12px] font-normal text-term-dim">{label}</th>
                  <td className="py-4 font-mono text-[clamp(1.1rem,1.8vw,1.5rem)] text-term-fg/70">
                    {fb}
                  </td>
                  <td className="py-4 font-dot text-[clamp(1.6rem,3vw,2.6rem)] font-black text-hi">
                    {nota}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
