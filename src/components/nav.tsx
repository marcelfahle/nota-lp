import Link from "next/link";
import { Logo } from "@/components/logo";
import { GITHUB_URL, LOGIN_URL, START_URL } from "@/lib/palette";

const links = [
  { href: "/#doors", label: "How it works" },
  { href: "/#not", label: "What it won't do" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/freshbooks", label: "vs FreshBooks" },
];

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/10 bg-paper/85 backdrop-blur-md backdrop-saturate-150">
      <nav aria-label="Main navigation" className="mx-auto flex h-14 max-w-[88rem] items-center justify-between px-4 md:px-8">
        <Link href="/" aria-label="Nota home">
          <Logo />
        </Link>
        <div className="flex items-center gap-4 md:gap-6">
          <ul className="hidden items-center gap-6 text-[13px] font-medium text-ink-2 lg:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors duration-150 hover:text-ink">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[12px] transition-colors duration-150 hover:text-ink"
              >
                GitHub ↗
              </a>
            </li>
          </ul>
          <a
            href={LOGIN_URL}
            className="py-2 text-[13px] font-medium text-ink-2 transition-colors duration-150 hover:text-ink"
          >
            Log in
          </a>
          <a
            href={START_URL}
            className="bg-ink px-4 py-2 text-[13px] font-semibold text-paper transition-colors duration-150 hover:bg-red"
          >
            Start free
          </a>
        </div>
      </nav>
    </header>
  );
}
