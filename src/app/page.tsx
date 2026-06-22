import Link from "next/link";
import { ArrowUpRight, Terminal, Zap, Download, List, Info } from "@/components/icons";

const COMMANDS = [
  { name: "init", desc: "Scaffold a Next.js + Tailwind v4 app wired up to AgeZero UI." },
  { name: "add", desc: "Copy one component from the registry into your project. \`agezero-ui add <slug>\`." },
  { name: "list", desc: "List all 138+ registry entries, filter by type (ui, ai, block, section, icon, …)." },
  { name: "info", desc: "Show component props, dependencies, registry deps, and source path." },
  { name: "mcp", desc: "Bootstrap the @agezero/mcp server config in your .cursor/ or .vscode/." },
];

export default function CliPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-border/60">
        <div aria-hidden className="absolute inset-0 -z-10" style={{ background: "radial-gradient(ellipse at top, hsl(var(--primary)/0.10), transparent 60%)" }} />
        <div className="mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
          <div className="inline-flex items-center gap-2 rounded-md border border-border/60 bg-background/60 px-3 py-1 text-xs backdrop-blur">
            <Terminal size={12} /> npm install -g @agezero/cli
          </div>
          <h1 className="mt-6 text-balance text-5xl font-semibold tracking-tight sm:text-7xl">
            One CLI to install<br />
            <span className="bg-clip-text text-transparent" style={{ backgroundImage: "linear-gradient(135deg, #f59e0b, #ef4444)" }}>
              the whole kit.
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Init a Next.js app. Add components by slug. Bootstrap the MCP server. Zero runtime dependencies, single binary, ~150KB.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a href="https://github.com/pathtoresiliencebv/agezero-ui/tree/main/packages/agezero-cli" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90">
              View source <ArrowUpRight size={16} />
            </a>
            <Link href="https://ui.agezero.io/registry/" className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-6 py-3 text-sm font-medium shadow-xs hover:bg-accent">
              Browse registry <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-semibold tracking-tight">Install</h2>
          <pre className="mt-4 overflow-x-auto rounded-lg border border-border/60 bg-card p-4 text-xs leading-relaxed">
            <code>{`npm install -g @agezero/cli
# or
pnpm add -g @agezero/cli
# or
npx @agezero/cli@latest init`}</code>
          </pre>
        </div>
      </section>

      <section className="border-b border-border/60 py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex items-center gap-2">
            <Zap size={20} />
            <h2 className="text-2xl font-semibold tracking-tight">5 commands</h2>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {COMMANDS.map((c) => (
              <div key={c.name} className="rounded-lg border border-border/60 bg-card p-5">
                <div className="flex items-center gap-2 font-mono text-sm font-semibold">
                  <Terminal size={14} className="text-muted-foreground" />
                  agezero-ui {c.name}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border/60 py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-2xl font-semibold tracking-tight">Walkthrough</h2>
          <pre className="mt-4 overflow-x-auto rounded-lg border border-border/60 bg-card p-4 text-xs leading-relaxed">
            <code>{`# 1. Scaffold a fresh Next.js app
$ agezero-ui init my-app
✓ Created my-app with Next.js 15 + Tailwind v4

# 2. Add the components you need
$ agezero-ui add button card badge input dialog
✓ Added 5 components to src/components/ui/

# 3. Add a chat UI bundle in one shot
$ agezero-ui add message conversation prompt-input
✓ Added 3 AI components

# 4. Browse the registry
$ agezero-ui list --type=ai
> 22 AI components available
> agent-card, citation, code-block, conversation, …

# 5. Bootstrap the MCP server in Cursor
$ agezero-ui mcp
✓ Wrote .cursor/mcp.json`}</code>
          </pre>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-semibold tracking-tight">Zero deps. One binary.</h2>
          <p className="mt-3 text-muted-foreground">
            The CLI is a standalone TypeScript package. No global installs of Next, no TS runtime, no bundler. Just Node.js.
          </p>
          <a href="https://github.com/pathtoresiliencebv/agezero-ui/tree/main/packages/agezero-cli" target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            View on GitHub <ArrowUpRight size={16} />
          </a>
        </div>
      </section>
    </>
  );
}
