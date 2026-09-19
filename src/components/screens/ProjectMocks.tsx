import type { ReactNode } from 'react'

export function BrowserFrame({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-xl border border-ink/15 bg-surface shadow-[0_20px_50px_-32px_rgba(11,11,11,0.35)]">
      <div className="flex items-center gap-2 border-b border-ink/10 bg-paper px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-ink/20" />
        <span className="h-2 w-2 rounded-full bg-ink/20" />
        <span className="h-2 w-2 rounded-full bg-ink/20" />
        <p className="ml-2 truncate font-mono text-[10px] tracking-wide text-muted">{title}</p>
      </div>
      <div className="min-h-[280px] bg-surface text-[11px] leading-snug text-ink md:min-h-[340px] md:text-xs">
        {children}
      </div>
    </div>
  )
}

export function PhoneFrame({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[280px] overflow-hidden rounded-[1.6rem] border border-ink/20 bg-ink p-2 shadow-[0_20px_50px_-32px_rgba(11,11,11,0.45)]">
      <div className="overflow-hidden rounded-[1.25rem] bg-surface">
        <div className="flex items-center justify-between bg-paper px-4 py-2">
          <span className="font-mono text-[9px] text-muted">09:41</span>
          <span className="h-3 w-16 rounded-full bg-ink/10" />
          <span className="font-mono text-[9px] text-muted">{title}</span>
        </div>
        <div className="min-h-[420px] text-[11px] text-ink">{children}</div>
      </div>
    </div>
  )
}

function Sidebar({ items, active }: { items: string[]; active: string }) {
  return (
    <aside className="hidden w-36 shrink-0 border-r border-ink/10 bg-paper p-3 md:block">
      <p className="mb-4 text-[10px] font-semibold tracking-[0.14em] uppercase">Ops</p>
      <ul className="space-y-1">
        {items.map((item) => (
          <li
            key={item}
            className={`rounded-md px-2 py-1.5 ${item === active ? 'bg-ink text-paper' : 'text-muted'}`}
          >
            {item}
          </li>
        ))}
      </ul>
    </aside>
  )
}

export function FlightMapScreen() {
  return (
    <BrowserFrame title="app.dronemapping.com / missions / SOL-441">
      <div className="flex min-h-[340px]">
        <Sidebar items={['Missions', 'Fleet', 'Datasets', 'Reports']} active="Missions" />
        <div className="grid flex-1 grid-cols-1 md:grid-cols-[1fr_14rem]">
          <div className="relative bg-[#ecece8] p-4">
            <div
              className="absolute inset-4 rounded-lg border border-ink/10"
              style={{
                backgroundImage:
                  'linear-gradient(#d0d0ca 1px, transparent 1px), linear-gradient(90deg, #d0d0ca 1px, transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />
            <svg className="absolute inset-8" viewBox="0 0 400 220" fill="none" aria-hidden="true">
              <polygon points="40,40 280,30 320,170 60,190" stroke="#0b0b0b" strokeWidth="1.5" fill="rgba(11,11,11,0.04)" />
              <path d="M70 50 L250 48 L290 150 L90 165 Z" stroke="#0b0b0b" strokeDasharray="4 4" />
              <circle cx="70" cy="50" r="4" fill="#0b0b0b" />
            </svg>
            <p className="relative font-medium">Solar farm survey — Ballarat West</p>
            <p className="relative mt-1 text-muted">Polygon · 64 ha · 2.6 cm/px</p>
          </div>
          <div className="space-y-3 border-t border-ink/10 p-4 md:border-t-0 md:border-l">
            <p className="text-[10px] tracking-[0.14em] uppercase text-muted">Readiness</p>
            <p className="text-2xl font-medium">Ready to fly</p>
            <ul className="space-y-2 text-muted">
              <li>Coverage 100 %</li>
              <li>Battery 4 / 4</li>
              <li>Weather window 2h</li>
              <li>Checklist 8 / 8</li>
            </ul>
          </div>
        </div>
      </div>
    </BrowserFrame>
  )
}

export function FlightParamsScreen() {
  return (
    <BrowserFrame title="app.dronemapping.com / missions / SOL-441 / parameters">
      <div className="grid min-h-[340px] md:grid-cols-[16rem_1fr]">
        <div className="space-y-4 border-b border-ink/10 p-4 md:border-r md:border-b-0">
          <p className="text-[10px] tracking-[0.14em] uppercase text-muted">Flight parameters</p>
          {[
            ['Altitude', '120 m'],
            ['Front overlap', '80 %'],
            ['Side overlap', '70 %'],
            ['GSD', '2.6 cm/px'],
            ['Speed', '8 m/s'],
          ].map(([label, value]) => (
            <div key={label} className="flex items-center justify-between border-b border-ink/10 pb-2">
              <span className="text-muted">{label}</span>
              <span className="font-medium">{value}</span>
            </div>
          ))}
          <p className="rounded-md bg-ink px-3 py-2 text-center text-paper">Update coverage</p>
        </div>
        <div className="bg-[#ecece8] p-4">
          <p className="mb-2 font-medium">Live coverage preview</p>
          <div className="grid h-56 grid-cols-8 grid-rows-5 gap-1 rounded-lg bg-paper p-2">
            {Array.from({ length: 40 }, (_, i) => (
              <span key={i} className={`rounded-sm ${i < 37 ? 'bg-ink/70' : 'bg-ink/15'}`} />
            ))}
          </div>
          <p className="mt-2 text-muted">37 / 40 strips covered · 3 remaining on the western edge</p>
        </div>
      </div>
    </BrowserFrame>
  )
}

export function FlightMobileScreen() {
  return (
    <PhoneFrame title="Field">
      <div className="p-4">
        <p className="text-[10px] tracking-[0.14em] uppercase text-muted">Pre-flight · SOL-441</p>
        <h3 className="mt-1 text-lg font-medium">Checklist</h3>
        <ul className="mt-4 space-y-2">
          {[
            ['Airspace NOTAM', true],
            ['Batteries 4/4 charged', true],
            ['SD cards formatted', true],
            ['Home point set', true],
            ['Coverage confirmed', true],
            ['Wind < 8 m/s', false],
          ].map(([label, done]) => (
            <li
              key={String(label)}
              className={`flex items-center justify-between rounded-lg border px-3 py-3 ${
                done ? 'border-ink bg-ink text-paper' : 'border-ink/20'
              }`}
            >
              <span>{label}</span>
              <span>{done ? 'OK' : '—'}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 rounded-full border border-ink/20 py-3 text-center text-muted">Launch locked until complete</p>
      </div>
    </PhoneFrame>
  )
}

export function FlightReviewScreen() {
  return (
    <BrowserFrame title="app.dronemapping.com / datasets / SOL-441">
      <div className="p-4">
        <div className="mb-4 flex items-end justify-between">
          <div>
            <p className="text-[10px] tracking-[0.14em] uppercase text-muted">Geospatial review</p>
            <p className="text-lg font-medium">1,248 images · 3 flags</p>
          </div>
          <p className="rounded-full bg-ink px-3 py-1 text-paper">Hold processing</p>
        </div>
        <div className="grid grid-cols-4 gap-2 md:grid-cols-6">
          {Array.from({ length: 12 }, (_, i) => (
            <div key={i} className={`aspect-[4/3] rounded-md ${[2, 7, 10].includes(i) ? 'bg-ink' : 'bg-ink/10'}`}>
              {[2, 7, 10].includes(i) ? (
                <p className="p-2 text-[9px] text-paper">{i === 2 ? 'Blur' : i === 7 ? 'Gap' : 'Exposure'}</p>
              ) : null}
            </div>
          ))}
        </div>
        <p className="mt-3 text-muted">Flags must be accepted or the set is rejected before orthomosaic generation.</p>
      </div>
    </BrowserFrame>
  )
}

export function FlightDsScreen() {
  return (
    <BrowserFrame title="ds.dronemapping.com / components">
      <div className="grid gap-4 p-4 md:grid-cols-3">
        <div className="rounded-lg border border-ink/15 p-3">
          <p className="mb-3 text-[10px] tracking-[0.14em] uppercase text-muted">Status</p>
          <div className="flex flex-wrap gap-2">
            {['Ready', 'Blocked', 'In flight', 'Review'].map((s) => (
              <span key={s} className="rounded-full border border-ink px-2 py-1">
                {s}
              </span>
            ))}
          </div>
        </div>
        <div className="rounded-lg border border-ink/15 p-3">
          <p className="mb-3 text-[10px] tracking-[0.14em] uppercase text-muted">Checklist row</p>
          <div className="space-y-2">
            <div className="rounded-md bg-ink px-2 py-2 text-paper">Complete</div>
            <div className="rounded-md border border-ink/20 px-2 py-2">Pending</div>
          </div>
        </div>
        <div className="rounded-lg border border-ink/15 p-3">
          <p className="mb-3 text-[10px] tracking-[0.14em] uppercase text-muted">Map chrome</p>
          <div className="h-24 rounded-md bg-[#ecece8] p-2">
            <div className="ml-auto w-8 space-y-1">
              <span className="block h-8 rounded-md bg-surface" />
              <span className="block h-8 rounded-md bg-surface" />
            </div>
          </div>
        </div>
      </div>
    </BrowserFrame>
  )
}

export function PrismAuditScreen() {
  return (
    <BrowserFrame title="workshop · UI inventory · Lensys">
      <div className="p-4">
        <p className="mb-3 font-medium">Collected from 4 products — buttons only</p>
        <div className="flex flex-wrap gap-2">
          {['Primary', 'Primary 2', 'Ghost', 'Ghost dark', 'Link', 'Warn', 'Pill', 'Icon', 'CTA green', 'CTA blue', 'Tiny', 'Huge'].map(
            (label, i) => (
              <span
                key={label}
                className={`px-3 py-2 ${i % 3 === 0 ? 'rounded-none bg-ink text-paper' : i % 3 === 1 ? 'rounded-full border border-ink' : 'rounded-md bg-ink/10'}`}
              >
                {label}
              </span>
            ),
          )}
        </div>
        <p className="mt-4 text-muted">31 button variants · 9 “primary” greys. Workshop decision: keep 4 states, retire the rest.</p>
      </div>
    </BrowserFrame>
  )
}

export function PrismTokensScreen() {
  return (
    <BrowserFrame title="prism.lensys.dev / foundations">
      <div className="grid gap-6 p-4 md:grid-cols-3">
        <div>
          <p className="mb-2 text-[10px] tracking-[0.14em] uppercase text-muted">Colour</p>
          <div className="grid grid-cols-5 gap-1">
            {['#0B0B0B', '#2A2A2A', '#6E6E6E', '#D9D9D4', '#F4F4F1'].map((c) => (
              <div key={c}>
                <div className="aspect-square rounded-md border border-ink/10" style={{ background: c }} />
                <p className="mt-1 font-mono text-[8px]">{c}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-2 text-[10px] tracking-[0.14em] uppercase text-muted">Type</p>
          <p className="text-3xl font-medium">Aa</p>
          <p className="text-muted">Outfit / Plus Jakarta · 14 / 16 / 24 / 40</p>
        </div>
        <div>
          <p className="mb-2 text-[10px] tracking-[0.14em] uppercase text-muted">Spacing</p>
          <div className="flex items-end gap-1">
            {[8, 12, 16, 24, 32, 48].map((n) => (
              <div key={n} className="w-4 bg-ink" style={{ height: n }} />
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  )
}

export function PrismButtonScreen() {
  return (
    <BrowserFrame title="prism.lensys.dev / components / button">
      <div className="p-4">
        <p className="mb-4 font-medium">Button · all states</p>
        <div className="flex flex-wrap gap-3">
          <span className="rounded-full bg-ink px-4 py-2 text-paper">Default</span>
          <span className="rounded-full bg-ink/70 px-4 py-2 text-paper">Hover</span>
          <span className="rounded-full border border-ink px-4 py-2">Secondary</span>
          <span className="rounded-full px-4 py-2 text-muted">Disabled</span>
          <span className="rounded-full ring-2 ring-ink px-4 py-2">Focus</span>
        </div>
        <div className="mt-6 grid gap-3 border-t border-ink/10 pt-4 md:grid-cols-2">
          <p>
            <span className="font-medium">Do.</span> One primary action per view.
          </p>
          <p>
            <span className="font-medium">Don’t.</span> Invent a new colour for a single squad.
          </p>
        </div>
      </div>
    </BrowserFrame>
  )
}

export function PrismDocsScreen() {
  return (
    <BrowserFrame title="prism.lensys.dev / contribute">
      <div className="p-4">
        <ol className="space-y-3">
          {[
            'Open a RFC in the Prism Jira project',
            'Attach the Figma frame in the shared library — not a private file',
            'Monthly review with design + one engineer per squad',
            'If accepted: token or component. If not: use an existing pattern',
          ].map((step, i) => (
            <li key={step} className="flex gap-3 border-b border-ink/10 pb-3">
              <span className="font-mono text-muted">{String(i + 1).padStart(2, '0')}</span>
              {step}
            </li>
          ))}
        </ol>
      </div>
    </BrowserFrame>
  )
}

export function PrismProductScreen() {
  return (
    <BrowserFrame title="lensys.app / orders / 8841">
      <div className="p-4">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-lg font-medium">Order 8841</p>
          <span className="rounded-full bg-ink px-3 py-1 text-paper">Primary action</span>
        </div>
        <div className="overflow-hidden rounded-lg border border-ink/15">
          <div className="grid grid-cols-4 bg-paper px-3 py-2 text-[10px] tracking-[0.12em] uppercase text-muted">
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
        <p className="mt-3 text-muted">Same table, button and status chip as the Prism spec — no local variants.</p>
      </div>
    </BrowserFrame>
  )
}

export function QuoteLegacyScreen() {
  return (
    <BrowserFrame title="legacy.techform.local / configurator">
      <div className="grid grid-cols-2 gap-2 p-3 md:grid-cols-4">
        {Array.from({ length: 16 }, (_, i) => (
          <label key={i} className="border border-ink/15 p-2">
            <span className="mb-1 block text-[9px] text-muted">Rule {i + 1}</span>
            <span className="block h-6 border border-ink/20 bg-paper" />
          </label>
        ))}
      </div>
    </BrowserFrame>
  )
}

export function QuoteStep1Screen() {
  return (
    <BrowserFrame title="quotes.techform.app / new · step 1 of 3">
      <div className="p-4">
        <p className="text-[10px] tracking-[0.14em] uppercase text-muted">01 / Product</p>
        <p className="mt-1 text-lg font-medium">Which line are we quoting?</p>
        <div className="mt-4 grid gap-2 md:grid-cols-3">
          {['Compressors', 'Heat exchangers', 'Skids'].map((p, i) => (
            <div key={p} className={`rounded-lg border p-4 ${i === 0 ? 'border-ink bg-ink text-paper' : 'border-ink/15'}`}>
              <p className="font-medium">{p}</p>
              <p className={`mt-1 ${i === 0 ? 'text-paper/70' : 'text-muted'}`}>Industrial series</p>
            </div>
          ))}
        </div>
      </div>
    </BrowserFrame>
  )
}

export function QuoteConfigScreen() {
  return (
    <BrowserFrame title="quotes.techform.app / new · step 2 of 3">
      <div className="grid min-h-[320px] md:grid-cols-[1fr_13rem]">
        <div className="space-y-3 p-4">
          <p className="text-[10px] tracking-[0.14em] uppercase text-muted">02 / Configuration</p>
          {[
            ['Motor', 'IE3 75 kW', true],
            ['Voltage', '400 V', true],
            ['Housing', 'ATEX — conflicts with IE3 75 kW', false],
            ['Control', 'Soft starter', true],
          ].map(([label, value, ok]) => (
            <div key={String(label)} className={`rounded-lg border px-3 py-3 ${ok ? 'border-ink/15' : 'border-ink bg-paper'}`}>
              <p className="text-[10px] text-muted">{label}</p>
              <p className="font-medium">{value}</p>
            </div>
          ))}
        </div>
        <aside className="border-t border-ink/10 bg-paper p-4 md:border-t-0 md:border-l">
          <p className="text-[10px] tracking-[0.14em] uppercase text-muted">Conflicts</p>
          <p className="mt-2">ATEX housing is not available with IE3 75 kW. Choose IE4 or a standard housing.</p>
        </aside>
      </div>
    </BrowserFrame>
  )
}

export function QuoteSummaryScreen() {
  return (
    <BrowserFrame title="quotes.techform.app / new · step 3 of 3">
      <div className="p-4">
        <p className="text-[10px] tracking-[0.14em] uppercase text-muted">03 / Summary</p>
        <p className="mt-1 text-lg font-medium">Quote Q-2044 · Compressors</p>
        <div className="mt-4 flex items-end justify-between border-y border-ink/15 py-4">
          <span className="text-muted">Total</span>
          <span className="text-3xl font-medium">€ 41,400</span>
        </div>
        <p className="mt-4 rounded-full bg-ink py-3 text-center text-paper">Generate PDF</p>
      </div>
    </BrowserFrame>
  )
}

export function QuoteMobileScreen() {
  return (
    <PhoneFrame title="CPQ">
      <div className="p-4">
        <p className="text-[10px] tracking-[0.14em] uppercase text-muted">Step 2 of 3</p>
        <p className="mt-1 text-lg font-medium">Configuration</p>
        <div className="mt-4 space-y-2">
          {['Motor · IE3 75 kW', 'Voltage · 400 V', 'Control · Soft starter'].map((row) => (
            <p key={row} className="rounded-lg border border-ink/15 px-3 py-3">
              {row}
            </p>
          ))}
        </div>
        <p className="mt-6 text-2xl font-medium">€ 41,400</p>
        <p className="mt-4 rounded-full bg-ink py-3 text-center text-paper">Continue</p>
      </div>
    </PhoneFrame>
  )
}

export function CegWorkshopScreen() {
  return (
    <BrowserFrame title="miro · Cegedim product sites workshop">
      <div className="grid gap-3 p-4 md:grid-cols-3">
        {[
          ['Marketing', 'Queries people type. Proof. Brand.'],
          ['Product', 'What the software actually does.'],
          ['Sales', 'One action: request a demo.'],
        ].map(([who, goal]) => (
          <div key={who} className="rounded-lg border border-ink/15 p-4">
            <p className="text-[10px] tracking-[0.14em] uppercase text-muted">{who}</p>
            <p className="mt-2 font-medium">{goal}</p>
          </div>
        ))}
      </div>
    </BrowserFrame>
  )
}

export function CegDesktopScreen() {
  return (
    <BrowserFrame title="cegedim.com / software / workforce">
      <div className="p-6">
        <p className="text-[10px] tracking-[0.16em] uppercase text-muted">Workforce software</p>
        <p className="mt-2 max-w-md text-3xl font-medium leading-tight">Plan teams without the spreadsheet.</p>
        <p className="mt-4 inline-block rounded-full bg-ink px-4 py-2 text-paper">Request a demo</p>
        <div className="mt-8 grid gap-3 border-t border-ink/10 pt-4 md:grid-cols-3">
          {['Scheduling', 'Compliance', 'Reporting'].map((b) => (
            <p key={b} className="border-l border-ink pl-3 font-medium">
              {b}
            </p>
          ))}
        </div>
      </div>
    </BrowserFrame>
  )
}

export function CegMobileScreen() {
  return (
    <PhoneFrame title="Web">
      <div className="p-4">
        <p className="text-[10px] tracking-[0.16em] uppercase text-muted">Workforce</p>
        <p className="mt-2 text-2xl font-medium leading-tight">Plan teams without the spreadsheet.</p>
        <p className="mt-6 rounded-full bg-ink py-3 text-center text-paper">Request a demo</p>
        <div className="mt-6 space-y-3 border-t border-ink/10 pt-4">
          {['Scheduling', 'Compliance', 'Reporting'].map((b) => (
            <p key={b} className="border-b border-ink/10 pb-2">
              {b}
            </p>
          ))}
        </div>
      </div>
    </PhoneFrame>
  )
}

export function CegFormScreen() {
  return (
    <PhoneFrame title="Demo">
      <div className="p-4">
        <p className="text-lg font-medium">Request a demo</p>
        <div className="mt-4 space-y-3">
          {['Work email', 'Company', 'Role'].map((f) => (
            <label key={f} className="block">
              <span className="text-[10px] text-muted">{f}</span>
              <span className="mt-1 block h-10 rounded-lg border border-ink/20" />
            </label>
          ))}
        </div>
        <p className="mt-6 rounded-full bg-ink py-3 text-center text-paper">Send</p>
        <p className="mt-3 text-center text-muted">3 fields. The old form had 11.</p>
      </div>
    </PhoneFrame>
  )
}

export function CegSeoScreen() {
  return (
    <BrowserFrame title="search.google.com / Search Console">
      <div className="p-4">
        <p className="mb-3 font-medium">Queries · last 28 days</p>
        <ul className="space-y-2">
          {[
            ['workforce planning software', '12', '↑'],
            ['team scheduling demo', '9', '↑'],
            ['cegedim login', '4', '—'],
          ].map(([q, pos, dir]) => (
            <li key={String(q)} className="grid grid-cols-[1fr_2rem_1rem] border-b border-ink/10 pb-2">
              <span>{q}</span>
              <span className="font-mono">{pos}</span>
              <span>{dir}</span>
            </li>
          ))}
        </ul>
        <p className="mt-3 text-muted">Used in the sprint review with marketing — not a quarterly PDF.</p>
      </div>
    </BrowserFrame>
  )
}

const registry: Record<string, () => React.JSX.Element> = {
  'flight-map': FlightMapScreen,
  'flight-params': FlightParamsScreen,
  'flight-mobile': FlightMobileScreen,
  'flight-review': FlightReviewScreen,
  'flight-ds': FlightDsScreen,
  'prism-audit': PrismAuditScreen,
  'prism-tokens': PrismTokensScreen,
  'prism-button': PrismButtonScreen,
  'prism-docs': PrismDocsScreen,
  'prism-product': PrismProductScreen,
  'quote-legacy': QuoteLegacyScreen,
  'quote-step1': QuoteStep1Screen,
  'quote-config': QuoteConfigScreen,
  'quote-summary': QuoteSummaryScreen,
  'quote-mobile': QuoteMobileScreen,
  'ceg-workshop': CegWorkshopScreen,
  'ceg-desktop': CegDesktopScreen,
  'ceg-mobile': CegMobileScreen,
  'ceg-form': CegFormScreen,
  'ceg-seo': CegSeoScreen,
}

export function ProjectMock({ id }: { id: string }) {
  const Screen = registry[id]
  if (!Screen) return <div className="rounded-xl border border-ink/15 bg-paper p-10 text-muted">Screen unavailable</div>
  return <Screen />
}
