import { Logo } from "@/components/logo";
import { GITHUB_URL } from "@/lib/palette";

export function Footer() {
  return (
    <footer className="overflow-hidden bg-ink px-4 pt-12 text-term-fg md:px-8">
      <div className="mx-auto max-w-[88rem]">
        <div className="flex flex-col justify-between gap-8 border-t border-term-fg/15 pt-8 md:flex-row md:items-start">
          <div>
            <Logo tone="ink" className="text-term-fg" />
            <p className="mt-3 font-serif text-[1.05rem] text-term-fg/70 italic">
              Invoices without the nonsense. Built in Dénia, Spain.
            </p>
          </div>
          <ul className="grid grid-cols-2 gap-x-10 gap-y-2 text-[13px] text-term-dim sm:flex sm:gap-6">
            <li>
              <a href={GITHUB_URL} className="transition-colors hover:text-hi">
                GitHub
              </a>
            </li>
            <li>
              <a href="/freshbooks" className="transition-colors hover:text-hi">
                vs FreshBooks
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-hi">
                Docs
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-hi">
                Privacy
              </a>
            </li>
            <li className="font-mono text-[12px]">© {new Date().getFullYear()}</li>
          </ul>
        </div>
      </div>
      <p
        aria-hidden="true"
        className="mt-10 -mb-[0.2em] text-center font-dot text-[27vw] leading-[0.8] font-black tracking-[-0.02em] text-term-fg/[0.07] select-none"
      >
        NOTA
      </p>
    </footer>
  );
}
