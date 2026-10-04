import { CopyCommand } from "@/components/copy-command";
import { SectionLabel } from "@/components/section-label";
import { Terminal } from "@/components/terminal";
import { GITHUB_URL } from "@/lib/palette";

const TREE: [string, string][] = [
  ["apps/web", "Next.js app, REST API, AI chat"],
  ["apps/cli", "the nota command"],
  ["apps/mcp", "the MCP server"],
  ["packages/sdk", "typed API client"],
];

export function OpenSource() {
  return (
    <section className="px-4 pt-6 pb-24 md:px-8 md:pb-36">
      <div className="mx-auto max-w-[88rem]">
        <SectionLabel n="06">Open source</SectionLabel>

        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="min-w-0 lg:col-span-6">
            <h2 className="cond text-[clamp(3rem,7vw,7rem)] leading-[0.86] font-black tracking-[-0.015em]">
              Read every line that touches your money.
            </h2>
            <p className="mt-8 max-w-lg font-serif text-[1.2rem] leading-[1.55]">
              Nota is MIT-licensed. Self-host it on your own box, fork it, or send a pull request.
              If we ever get it wrong, you can take your invoices and leave. That&rsquo;s the point.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <CopyCommand command={`git clone ${GITHUB_URL}`} />
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] font-semibold underline decoration-ink/30 decoration-2 underline-offset-4 transition-colors hover:decoration-red"
              >
                Star it on GitHub ↗
              </a>
            </div>
          </div>

          <div className="min-w-0 lg:col-span-6">
            <Terminal title="~/nota — zsh">
              <p>
                <span className="text-hi">$</span> bun install &amp;&amp; bun run dev
              </p>
              <p className="mt-4 text-term-dim">nota/</p>
              {TREE.map(([path, what], i) => (
                <p key={path} className="flex gap-3">
                  <span className="text-term-dim">{i === TREE.length - 1 ? "└─" : "├─"}</span>
                  <span className="w-28 shrink-0 text-term-fg sm:w-32">{path}</span>
                  <span className="truncate text-term-dim"># {what}</span>
                </p>
              ))}
              <p className="mt-4">
                <span className="text-hi">✓</span> Ready on http://localhost:3000
              </p>
            </Terminal>
          </div>
        </div>
      </div>
    </section>
  );
}
