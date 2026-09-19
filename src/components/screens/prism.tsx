import { DocsFrame } from './chrome'
import { LensysMark } from './marks'

function DocsNav({ active }: { active: string }) {
  const items = ['Foundations', 'Button', 'Field', 'Table', 'Contribute']
  return (
    <aside className="hidden w-40 shrink-0 border-r border-[#1B4F9E]/10 bg-[#F4F8FC] p-3 md:block">
      <p className="mb-3 font-sans text-[9px] font-semibold tracking-[0.16em] uppercase text-[#1B4F9E]/55">Library</p>
      <ul className="space-y-0.5">
        {items.map((item) => (
          <li
            key={item}
            className={`rounded-full px-2 py-1.5 font-sans text-[10px] ${
              item === active ? 'bg-[#1B4F9E] text-white' : 'text-[#1B4F9E]/55'
            }`}
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
        <p className="font-sans text-[10px] font-semibold tracking-[0.14em] uppercase text-[#1B4F9E]">
          Collected from 4 products
        </p>
        <p className="mt-1 font-display text-xl text-[#1B4F9E]">Buttons only — 31 variants</p>
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
              className={`px-3 py-2 font-sans text-[10px] ${
                i % 4 === 0
                  ? 'rounded-full bg-[#1B4F9E] text-white'
                  : i % 4 === 1
                    ? 'rounded-full border border-[#1B4F9E] text-[#1B4F9E]'
                    : i % 4 === 2
                      ? 'rounded-lg bg-[#1B4F9E]/10 text-[#1B4F9E]'
                      : 'rounded-full border border-dashed border-[#1B4F9E]/40 text-[#1B4F9E]/50'
              }`}
            >
              {label}
            </span>
          ))}
        </div>
        <p className="mt-5 border-t border-[#1B4F9E]/10 pt-4 font-sans text-[10px] text-[#666]">
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
            <p className="mb-3 font-sans text-[10px] font-semibold tracking-[0.14em] uppercase text-[#1B4F9E]/55">
              Colour
            </p>
            <div className="space-y-1">
              {[
                ['navy', '#1B4F9E'],
                ['cta', '#0C71C3'],
                ['sky', '#5BA3D9'],
                ['ink', '#333333'],
                ['muted', '#666666'],
                ['paper', '#F4F8FC'],
              ].map(([name, hex]) => (
                <div key={name} className="flex items-center gap-2">
                  <span className="h-7 w-7 rounded-md border border-[#1B4F9E]/10" style={{ background: hex }} />
                  <span className="font-sans text-[10px] text-[#333]">
                    --{name}
                    <span className="ml-2 text-[#666]">{hex}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-3 font-sans text-[10px] font-semibold tracking-[0.14em] uppercase text-[#1B4F9E]/55">
              Type
            </p>
            <p className="font-display text-4xl leading-none text-[#1B4F9E]">Aa</p>
            <p className="mt-2 font-sans text-[10px] text-[#666]">14 / 16 / 24 / 40 · 400 / 700</p>
            <p className="mt-4 font-sans text-[10px] text-[#666]">One navy. No squad greys.</p>
          </div>
          <div>
            <p className="mb-3 font-sans text-[10px] font-semibold tracking-[0.14em] uppercase text-[#1B4F9E]/55">
              Spacing
            </p>
            <div className="flex items-end gap-1">
              {[8, 12, 16, 24, 32, 48].map((n) => (
                <div key={n} className="w-3 rounded-sm bg-[#1B4F9E]" style={{ height: n }} />
              ))}
            </div>
            <p className="mt-3 font-sans text-[10px] text-[#666]">space-1 → space-6</p>
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
            <p className="font-display text-xl text-[#1B4F9E]">Button</p>
            <span className="font-sans text-[10px] text-[#666]">stable · 2.4</span>
          </div>
          <div className="flex flex-wrap gap-2 rounded-2xl border border-dashed border-[#1B4F9E]/20 bg-[#F4F8FC] p-4">
            <span className="rounded-full bg-[#1B4F9E] px-4 py-2 text-white">Default</span>
            <span className="rounded-full bg-[#0C71C3] px-4 py-2 text-white">Hover</span>
            <span className="rounded-full border border-[#1B4F9E] px-4 py-2 text-[#1B4F9E]">Secondary</span>
            <span className="rounded-full px-4 py-2 text-[#1B4F9E]/40">Disabled</span>
            <span className="rounded-full ring-2 ring-[#1B4F9E] px-4 py-2 text-[#1B4F9E]">Focus</span>
          </div>
          <div className="mt-5 grid gap-3 border-t border-[#1B4F9E]/10 pt-4 md:grid-cols-2">
            <p>
              <span className="font-medium text-[#1B4F9E]">Do.</span> One primary action per view.
            </p>
            <p>
              <span className="font-medium text-[#1B4F9E]">Don’t.</span> Invent a colour for a single squad.
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
        <p className="font-display text-xl text-[#1B4F9E]">Contrast pairs</p>
        <p className="mt-1 font-sans text-[10px] text-[#666]">Checked at token level. Fail here = not a component.</p>
        <div className="mt-5 grid gap-2 sm:grid-cols-2">
          {[
            ['navy on paper', 'AAA', true],
            ['navy on white', 'AAA', true],
            ['muted on paper', 'AA large', true],
            ['sky on white', 'Fail', false],
          ].map(([pair, level, ok]) => (
            <div
              key={String(pair)}
              className="flex items-center justify-between rounded-xl border border-[#1B4F9E]/15 px-3 py-3"
            >
              <span className="font-sans text-[11px]">{pair}</span>
              <span
                className={`rounded-full px-2 py-0.5 font-sans text-[10px] ${
                  ok ? 'bg-[#1B4F9E]/10 text-[#1B4F9E]' : 'bg-[#1B4F9E] text-white'
                }`}
              >
                {level}
              </span>
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
          <p className="font-display text-xl text-[#1B4F9E]">Propose a pattern</p>
          <ol className="mt-4 space-y-3">
            {[
              'Open an RFC in the Prism Jira project',
              'Attach the Figma frame in the shared library — not a private file',
              'Monthly review: design + one engineer per squad',
              'Accepted: token or component. Rejected: use an existing pattern',
            ].map((step, i) => (
              <li key={step} className="flex gap-3 border-b border-[#1B4F9E]/10 pb-3 font-sans text-[11px]">
                <span className="font-semibold text-[#1B4F9E]">{String(i + 1).padStart(2, '0')}</span>
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
    <DocsFrame crumb="example / consultations · Lensys">
      <div className="p-5">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <LensysMark className="h-5 w-5 text-[#1B4F9E]" />
            <p className="font-display text-xl text-[#1B4F9E]">Consult 8841</p>
          </div>
          <span className="rounded-full bg-[#1B4F9E] px-3 py-1.5 text-[11px] text-white">Open record</span>
        </div>
        <div className="overflow-hidden rounded-xl border border-[#1B4F9E]/15">
          <div className="grid grid-cols-4 bg-[#F4F8FC] px-3 py-2 font-sans text-[9px] font-semibold tracking-[0.12em] uppercase text-[#1B4F9E]/55">
            <span>Patient</span>
            <span>ASA</span>
            <span>Status</span>
            <span>Owner</span>
          </div>
          {[
            ['Martin, L.', '2', 'Ready', 'Squad 2'],
            ['Nguyen, A.', '3', 'Ready', 'Squad 1'],
            ['Rossi, P.', '1', 'Hold', 'Squad 2'],
          ].map((row) => (
            <div key={row[0]} className="grid grid-cols-4 border-t border-[#1B4F9E]/10 px-3 py-2">
              {row.map((cell) => (
                <span key={cell}>{cell}</span>
              ))}
            </div>
          ))}
        </div>
        <p className="mt-3 font-sans text-[10px] text-[#666]">
          Same table, button and status as the Prism spec — no local variants.
        </p>
      </div>
    </DocsFrame>
  )
}
