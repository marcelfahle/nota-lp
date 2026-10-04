import { SectionLabel } from "@/components/section-label";
import { FAQ } from "@/lib/faq";

export function Faq() {
  return (
    <section id="faq" className="px-4 pt-6 pb-24 md:px-8 md:pb-36">
      <div className="mx-auto max-w-[88rem]">
        <SectionLabel n="05">Questions</SectionLabel>

        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <h2 className="cond text-[clamp(3rem,7vw,7rem)] leading-[0.86] font-black tracking-[-0.015em]">
                Questions about Nota.
              </h2>
              <p className="mt-6 max-w-sm font-serif text-[1.2rem] leading-[1.5] text-ink-2 italic">
                Invoicing, AI connectors, pricing and self-hosting, explained.
              </p>
            </div>
          </div>

          <div className="border-t-2 border-ink lg:col-span-7">
            {FAQ.map(({ q, a }, i) => (
              <details key={q} className="group border-b border-ink/15" open={i === 0}>
                <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 py-6 [&::-webkit-details-marker]:hidden">
                  <h3 className="semi-cond text-[1.45rem] leading-[1.1] font-extrabold tracking-tight md:text-[1.7rem]">
                    {q}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="font-mono text-xl text-ink-2 transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-2xl pb-7 font-serif text-[1.15rem] leading-[1.55] text-ink/85">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
