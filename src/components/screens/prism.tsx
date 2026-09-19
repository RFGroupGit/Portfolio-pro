import { DocsFrame } from './chrome'

function DocsNav({ active }: { active: string }) {
  const items = ['Foundations', 'Button', 'Field', 'Table', 'Contribute']
  return (
    <aside className="hidden w-40 shrink-0 border-r border-ink/10 bg-[#fafafa] p-3 md:block">
      <p className="mb-3 font-mono text-[9px] tracking-[0.16em] uppercase text-muted">Library</p>
      <ul className="space-y-0.5">
        {items.map((item) => (
          <li
            key={item}
            className={`px-2 py-1.5 font-mono text-[10px] ${item === active ? 'bg-ink text-white' : 'text-ink/50'}`}
          >
            {item}
          </li>
        ))}
      </ul>
    </aside>
  )
}

export function PrismAuditScreen() {
  return (
    <DocsFrame crumb="workshop / inventory">
      <div className="p-5">
        <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-muted">Collected from 4 products</p>
        <p className="mt-1 font-display text-xl">Buttons only — 31 variants</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {[
            'Primary A',
            'Primary B',
            'Ghost',
            'Ghost dark',
            'Link',
            'Warn',
            'Pill',
            'Icon',
            'CTA green',
            'CTA blue',
            'Tiny',
            'Huge',
          ].map((label, i) => (
            <span
              key={label}
              className={`px-3 py-2 font-mono text-[10px] ${
                i % 4 === 0
                  ? 'rounded-none bg-ink text-white'
                  : i % 4 === 1
                    ? 'rounded-full border border-ink'
                    : i % 4 === 2
                      ? 'rounded bg-ink/10'
                      : 'border border-dashed border-ink/40 text-muted'
              }`}
            >
              {label}
            </span>
          ))}
        </div>
        <p className="mt-5 border-t border-ink/10 pt-4 font-mono text-[10px] text-muted">
          Workshop decision: keep 4 states. Retire the rest. 9 of these called themselves “primary”.
        </p>
      </div>
    </DocsFrame>
  )
}

export function PrismTokensScreen() {
  return (
    <DocsFrame crumb="foundations / tokens">
      <div className="flex min-h-[360px]">
        <DocsNav active="Foundations" />
        <div className="grid flex-1 gap-8 p-5 md:grid-cols-3">
          <div>
            <p className="mb-3 font-mono text-[10px] tracking-[0.14em] uppercase text-muted">Colour</p>
            <div className="space-y-1">
              {[
                ['ink', '#0B0B0B'],
                ['ink-soft', '#2A2A2A'],
                ['muted', '#6E6E6E'],
                ['line', '#D9D9D4'],
                ['paper', '#F4F4F1'],
              ].map(([name, hex]) => (
                <div key={name} className="flex items-center gap-2">
                  <span className="h-7 w-7 border border-ink/10" style={{ background: hex }} />
                  <span className="font-mono text-[10px]">
                    --{name}
                    <span className="ml-2 text-muted">{hex}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-3 font-mono text-[10px] tracking-[0.14em] uppercase text-muted">Type</p>
            <p className="text-4xl leading-none">Aa</p>
            <p className="mt-2 font-mono text-[10px] text-muted">14 / 16 / 24 / 40 · 400 / 500</p>
            <p className="mt-4 font-mono text-[10px] text-muted">One text colour. No squad greys.</p>
          </div>
          <div>
            <p className="mb-3 font-mono text-[10px] tracking-[0.14em] uppercase text-muted">Spacing</p>
            <div className="flex items-end gap-1">
              {[8, 12, 16, 24, 32, 48].map((n) => (
                <div key={n} className="w-3 bg-ink" style={{ height: n }} />
              ))}
            </div>
            <p className="mt-3 font-mono text-[10px] text-muted">space-1 → space-6</p>
          </div>
        </div>
      </div>
    </DocsFrame>
  )
}

export function PrismButtonScreen() {
  return (
    <DocsFrame crumb="components / button">
      <div className="flex min-h-[360px]">
        <DocsNav active="Button" />
        <div className="flex-1 p-5">
          <div className="mb-4 flex items-baseline justify-between">
            <p className="font-display text-xl">Button</p>
            <span className="font-mono text-[10px] text-muted">stable · 2.4</span>
          </div>
          <div className="flex flex-wrap gap-2 border border-dashed border-ink/20 bg-[#fafafa] p-4">
            <span className="rounded-sm bg-ink px-4 py-2 text-white">Default</span>
            <span className="rounded-sm bg-ink/70 px-4 py-2 text-white">Hover</span>
            <span className="rounded-sm border border-ink px-4 py-2">Secondary</span>
            <span className="rounded-sm px-4 py-2 text-muted">Disabled</span>
            <span className="rounded-sm ring-2 ring-ink px-4 py-2">Focus</span>
          </div>
          <div className="mt-5 grid gap-3 border-t border-ink/10 pt-4 md:grid-cols-2">
            <p>
              <span className="font-medium">Do.</span> One primary action per view.
            </p>
            <p>
              <span className="font-medium">Don’t.</span> Invent a colour for a single squad.
            </p>
          </div>
        </div>
      </div>
    </DocsFrame>
  )
}

export function PrismA11yScreen() {
  return (
    <DocsFrame crumb="foundations / contrast">
      <div className="p-5">
        <p className="font-display text-xl">Contrast pairs</p>
        <p className="mt-1 font-mono text-[10px] text-muted">Checked at token level. Fail here = not a component.</p>
        <div className="mt-5 grid gap-2 sm:grid-cols-2">
          {[
            ['ink on paper', 'AAA', true],
            ['ink on line', 'AA', true],
            ['muted on paper', 'AA large', true],
            ['muted on line', 'Fail', false],
          ].map(([pair, level, ok]) => (
            <div key={String(pair)} className="flex items-center justify-between border border-ink/15 px-3 py-3">
              <span className="font-mono text-[11px]">{pair}</span>
              <span className={`font-mono text-[10px] ${ok ? 'text-ink' : 'bg-ink px-2 py-0.5 text-white'}`}>{level}</span>
            </div>
          ))}
        </div>
      </div>
    </DocsFrame>
  )
}

export function PrismDocsScreen() {
  return (
    <DocsFrame crumb="contribute / RFC">
      <div className="flex min-h-[360px]">
        <DocsNav active="Contribute" />
        <div className="flex-1 p-5">
          <p className="font-display text-xl">Propose a pattern</p>
          <ol className="mt-4 space-y-3">
            {[
              'Open an RFC in the Prism Jira project',
              'Attach the Figma frame in the shared library — not a private file',
              'Monthly review: design + one engineer per squad',
              'Accepted: token or component. Rejected: use an existing pattern',
            ].map((step, i) => (
              <li key={step} className="flex gap-3 border-b border-ink/10 pb-3 font-mono text-[11px]">
                <span className="text-muted">{String(i + 1).padStart(2, '0')}</span>
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </DocsFrame>
  )
}

export function PrismProductScreen() {
  return (
    <DocsFrame crumb="example / orders · Lensys">
      <div className="p-5">
        <div className="mb-4 flex items-center justify-between">
          <p className="font-display text-xl">Order 8841</p>
          <span className="rounded-sm bg-ink px-3 py-1.5 text-[11px] text-white">Primary action</span>
        </div>
        <div className="overflow-hidden border border-ink/15">
          <div className="grid grid-cols-4 bg-[#fafafa] px-3 py-2 font-mono text-[9px] tracking-[0.12em] uppercase text-muted">
            <span>Item</span>
            <span>Qty</span>
            <span>Status</span>
            <span>Owner</span>
          </div>
          {['Housing A', 'Seal kit', 'Firmware'].map((row) => (
            <div key={row} className="grid grid-cols-4 border-t border-ink/10 px-3 py-2">
              <span>{row}</span>
              <span>12</span>
              <span>Ready</span>
              <span>Squad 2</span>
            </div>
          ))}
        </div>
        <p className="mt-3 font-mono text-[10px] text-muted">Same table, button and status as the Prism spec — no local variants.</p>
      </div>
    </DocsFrame>
  )
}
