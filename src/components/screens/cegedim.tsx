import { MarketingFrame, PhoneEditorial } from './chrome'

export function CegWorkshopScreen() {
  return (
    <MarketingFrame url="miro.com / cegedim · product sites workshop">
      <div className="grid min-h-[360px] gap-px bg-ink/10 md:grid-cols-3">
        {[
          ['Marketing', 'Queries people type. Proof. Brand.', 'workforce planning software'],
          ['Product', 'What the software actually does.', 'scheduling · compliance · reporting'],
          ['Sales', 'One action: request a demo.', 'form = success'],
        ].map(([who, goal, note]) => (
          <div key={who} className="bg-white p-6">
            <p className="font-display text-2xl">{who}</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">{goal}</p>
            <p className="mt-6 font-mono text-[10px] text-muted">{note}</p>
          </div>
        ))}
      </div>
    </MarketingFrame>
  )
}

export function CegIaScreen() {
  return (
    <MarketingFrame url="figma · IA / heading map">
      <div className="p-6">
        <p className="font-display text-xl">Same tree in Figma and in HTML</p>
        <ol className="mt-6 space-y-2">
          {[
            ['H1', 'Hero — one sentence, one action'],
            ['H2', 'What it does — three blocks'],
            ['H2', 'Proof — logos / quote'],
            ['H2', 'Request a demo — the form'],
          ].map(([tag, label]) => (
            <li key={label} className="flex items-baseline gap-4 border-b border-ink/10 py-2">
              <span className="w-8 font-mono text-[10px] text-muted">{tag}</span>
              <span>{label}</span>
            </li>
          ))}
        </ol>
        <p className="mt-5 text-[11px] text-muted">Crawlers and humans share one outline. Two sitemaps would have failed.</p>
      </div>
    </MarketingFrame>
  )
}

export function CegDesktopScreen() {
  return (
    <MarketingFrame url="cegedim.com / software / workforce">
      <div className="px-8 py-10">
        <p className="text-[10px] tracking-[0.2em] uppercase text-muted">Workforce software</p>
        <p className="mt-3 max-w-md font-display text-4xl leading-[0.95] tracking-tight">Plan teams without the spreadsheet.</p>
        <p className="mt-6 inline-block rounded-full bg-ink px-5 py-2.5 text-[11px] text-white">Request a demo</p>
        <div className="mt-12 grid gap-6 border-t border-ink/10 pt-6 md:grid-cols-3">
          {['Scheduling', 'Compliance', 'Reporting'].map((b) => (
            <p key={b} className="font-display text-lg">
              {b}
            </p>
          ))}
        </div>
      </div>
    </MarketingFrame>
  )
}

export function CegMobileScreen() {
  return (
    <PhoneEditorial>
      <div className="px-5 pt-6 pb-8">
        <p className="text-[10px] tracking-[0.2em] uppercase text-muted">Workforce</p>
        <p className="mt-3 font-display text-[1.85rem] leading-[0.95] tracking-tight">Plan teams without the spreadsheet.</p>
        <p className="mt-8 rounded-full bg-ink py-3 text-center text-[12px] text-white">Request a demo</p>
        <div className="mt-10 space-y-4">
          {['Scheduling', 'Compliance', 'Reporting'].map((b) => (
            <p key={b} className="border-b border-ink/10 pb-3 font-display text-lg">
              {b}
            </p>
          ))}
        </div>
      </div>
    </PhoneEditorial>
  )
}

export function CegFormScreen() {
  return (
    <PhoneEditorial>
      <div className="px-5 pt-6 pb-8">
        <p className="font-display text-2xl leading-tight">Request a demo</p>
        <p className="mt-2 text-[11px] text-muted">Three fields. The old form had eleven.</p>
        <div className="mt-6 space-y-4">
          {['Work email', 'Company', 'Role'].map((f) => (
            <label key={f} className="block">
              <span className="text-[10px] tracking-[0.12em] uppercase text-muted">{f}</span>
              <span className="mt-1 block h-11 rounded-xl border border-ink/15" />
            </label>
          ))}
        </div>
        <p className="mt-8 rounded-full bg-ink py-3 text-center text-white">Send</p>
      </div>
    </PhoneEditorial>
  )
}

export function CegSeoScreen() {
  return (
    <MarketingFrame url="search.google.com / Search Console">
      <div className="p-6">
        <p className="font-display text-xl">Queries · last 28 days</p>
        <ul className="mt-4">
          {[
            ['workforce planning software', '12', '↑'],
            ['team scheduling demo', '9', '↑'],
            ['cegedim login', '4', '—'],
          ].map(([q, pos, dir]) => (
            <li key={String(q)} className="grid grid-cols-[1fr_2.5rem_1.5rem] border-b border-ink/10 py-3">
              <span className="underline decoration-ink/30 underline-offset-2">{q}</span>
              <span className="font-mono text-[11px]">{pos}</span>
              <span>{dir}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-[11px] text-muted">Used in the sprint review with marketing — not a quarterly PDF.</p>
      </div>
    </MarketingFrame>
  )
}
