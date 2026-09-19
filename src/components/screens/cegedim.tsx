import { MarketingFrame, PhoneEditorial } from './chrome'
import { CegedimMark } from './marks'

export function CegWorkshopScreen() {
  return (
    <MarketingFrame url="miro.com / cegedim · product sites workshop">
      <div className="grid min-h-[360px] gap-px bg-[#EDF3F6] md:grid-cols-3">
        {[
          ['Marketing', 'Queries people type. Proof. Brand.', 'workforce planning software'],
          ['Product', 'What the software actually does.', 'scheduling · compliance · reporting'],
          ['Sales', 'One action: request a demo.', 'form = success'],
        ].map(([who, goal, note]) => (
          <div key={who} className="bg-white p-6">
            <p className="font-display text-2xl text-[#105C77]">{who}</p>
            <p className="mt-3 text-sm leading-relaxed text-[#105C77]/75">{goal}</p>
            <p className="mt-6 font-sans text-[10px] text-[#13BBB2]">{note}</p>
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
        <p className="font-display text-xl text-[#105C77]">Same tree in Figma and in HTML</p>
        <ol className="mt-6 space-y-2">
          {[
            ['H1', 'Hero — one sentence, one action'],
            ['H2', 'What it does — three blocks'],
            ['H2', 'Proof — logos / quote'],
            ['H2', 'Request a demo — the form'],
          ].map(([tag, label]) => (
            <li key={label} className="flex items-baseline gap-4 border-b border-[#105C77]/10 py-2">
              <span className="w-8 font-sans text-[10px] text-[#13BBB2]">{tag}</span>
              <span>{label}</span>
            </li>
          ))}
        </ol>
        <p className="mt-5 text-[11px] text-[#105C77]/55">Crawlers and humans share one outline. Two sitemaps would have failed.</p>
      </div>
    </MarketingFrame>
  )
}

export function CegDesktopScreen() {
  return (
    <MarketingFrame url="cegedim-sante.fr / software / workforce">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#105C77] via-[#13BBB2] to-[#3ED1EB]" />
        <div className="relative px-8 py-10 text-white">
          <div className="mb-6 flex items-center gap-2">
            <CegedimMark className="h-7 w-7" />
            <span className="font-sans text-[11px] font-light tracking-wide">cegedim</span>
          </div>
          <p className="text-[10px] tracking-[0.2em] uppercase text-white/70">Workforce software</p>
          <p className="mt-3 max-w-md font-display text-4xl leading-[0.95] font-light tracking-tight">
            Plan teams without the spreadsheet.
          </p>
          <p className="mt-6 inline-block rounded bg-[#FB5080] px-5 py-2.5 text-[11px] font-medium text-white">
            Request a demo
          </p>
          <div className="mt-12 grid gap-6 border-t border-white/20 pt-6 md:grid-cols-3">
            {['Scheduling', 'Compliance', 'Reporting'].map((b) => (
              <p key={b} className="font-display text-lg font-light">
                {b}
              </p>
            ))}
          </div>
        </div>
      </div>
    </MarketingFrame>
  )
}

export function CegMobileScreen() {
  return (
    <PhoneEditorial>
      <div className="bg-gradient-to-br from-[#105C77] to-[#13BBB2] px-5 pt-6 pb-8 text-white">
        <p className="text-[10px] tracking-[0.2em] uppercase text-white/70">Workforce</p>
        <p className="mt-3 font-display text-[1.85rem] leading-[0.95] font-light tracking-tight">
          Plan teams without the spreadsheet.
        </p>
        <p className="mt-8 rounded bg-[#FB5080] py-3 text-center text-[12px] font-medium">Request a demo</p>
      </div>
      <div className="space-y-4 px-5 py-6">
        {['Scheduling', 'Compliance', 'Reporting'].map((b) => (
          <p key={b} className="border-b border-[#105C77]/10 pb-3 font-display text-lg font-light">
            {b}
          </p>
        ))}
      </div>
    </PhoneEditorial>
  )
}

export function CegFormScreen() {
  return (
    <PhoneEditorial>
      <div className="px-5 pt-6 pb-8">
        <p className="font-display text-2xl leading-tight font-light">Request a demo</p>
        <p className="mt-2 text-[11px] text-[#105C77]/55">Three fields. The old form had eleven.</p>
        <div className="mt-6 space-y-4">
          {['Work email', 'Company', 'Role'].map((f) => (
            <label key={f} className="block">
              <span className="text-[10px] tracking-[0.12em] uppercase text-[#13BBB2]">{f}</span>
              <span className="mt-1 block h-11 rounded border border-[#105C77]/15 bg-[#EDF3F6]" />
            </label>
          ))}
        </div>
        <p className="mt-8 rounded bg-[#FB5080] py-3 text-center font-medium text-white">Send</p>
      </div>
    </PhoneEditorial>
  )
}

export function CegSeoScreen() {
  return (
    <MarketingFrame url="search.google.com / Search Console">
      <div className="p-6">
        <p className="font-display text-xl font-light text-[#105C77]">Queries · last 28 days</p>
        <ul className="mt-4">
          {[
            ['workforce planning software', '12', '↑'],
            ['team scheduling demo', '9', '↑'],
            ['cegedim login', '4', '—'],
          ].map(([q, pos, dir]) => (
            <li key={String(q)} className="grid grid-cols-[1fr_2.5rem_1.5rem] border-b border-[#105C77]/10 py-3">
              <span className="underline decoration-[#13BBB2]/50 underline-offset-2">{q}</span>
              <span className="font-sans text-[11px] text-[#13BBB2]">{pos}</span>
              <span>{dir}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-[11px] text-[#105C77]/55">Used in the sprint review with marketing — not a quarterly PDF.</p>
      </div>
    </MarketingFrame>
  )
}
