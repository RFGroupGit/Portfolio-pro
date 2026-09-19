import { IndustrialFrame, PlantDevice } from './chrome'

export function QuoteLegacyScreen() {
  return (
    <div className="overflow-hidden rounded-[1.6rem] border border-black/10 bg-[#ececf4] text-[10px] text-[#454545]">
      <div className="border-b border-black/10 bg-[#dedee8] px-3 py-2 font-sans text-[10px] uppercase tracking-[0.08em] text-[#595a70]">
        Techform Configurator 2.4 — untitled quote
      </div>
      <div className="grid grid-cols-2 gap-1 p-2 md:grid-cols-4">
        {Array.from({ length: 16 }, (_, i) => (
          <label key={i} className="rounded-md border border-black/10 bg-white p-1.5">
            <span className="mb-1 block text-[8px] text-[#595a70]">Rule {i + 1}</span>
            <span className="block h-5 rounded-sm border border-black/10 bg-[#f7f7fd]" />
          </label>
        ))}
      </div>
      <p className="border-t border-black/10 px-3 py-2 font-sans text-[9px] text-[#595a70]">
        Save · 142 fields · last error from engineering 2 days later
      </p>
    </div>
  )
}

export function QuoteStep1Screen() {
  return (
    <IndustrialFrame title="quotes.techform.local / new" step="Product">
      <div className="p-5">
        <p className="font-sans text-[10px] font-semibold tracking-[0.12em] uppercase text-[#6000FF]">Step 1 of 3</p>
        <p className="mt-1 font-display text-2xl font-semibold tracking-tight">Which line are we quoting?</p>
        <div className="mt-5 grid gap-3 md:grid-cols-3">
          {['Compressors', 'Heat exchangers', 'Skids'].map((p, i) => (
            <div
              key={p}
              className={`rounded-2xl p-4 ${
                i === 0
                  ? 'bg-gradient-to-br from-[#ffb56a] via-[#c44bff] to-[#62c4ff] text-white'
                  : 'border border-black/8 bg-[#f7f7fd] text-[#121212]'
              }`}
            >
              <p className="font-medium">{p}</p>
              <p className={`mt-1 text-[10px] ${i === 0 ? 'text-white/80' : 'text-[#595a70]'}`}>Industrial series</p>
            </div>
          ))}
        </div>
      </div>
    </IndustrialFrame>
  )
}

export function QuoteConfigScreen() {
  return (
    <IndustrialFrame title="quotes.techform.local / Q-2044" step="Configuration">
      <div className="grid min-h-[360px] md:grid-cols-[1fr_14rem]">
        <div className="space-y-2 p-4">
          {[
            ['Motor', 'IE3 75 kW', true],
            ['Voltage', '400 V', true],
            ['Housing', 'ATEX — conflicts with IE3 75 kW', false],
            ['Control', 'Soft starter', true],
          ].map(([label, value, ok]) => (
            <div
              key={String(label)}
              className={`rounded-2xl px-4 py-3 ${
                ok ? 'bg-[#f7f7fd]' : 'bg-gradient-to-r from-[#ffb56a]/20 to-[#c44bff]/20 ring-1 ring-[#6000FF]/40'
              }`}
            >
              <p className="font-sans text-[9px] font-semibold uppercase tracking-[0.1em] text-[#595a70]">{label}</p>
              <p className="font-medium">{value}</p>
            </div>
          ))}
        </div>
        <aside className="border-t border-black/6 bg-[#f7f7fd] p-4 md:border-t-0 md:border-l">
          <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-[#6000FF]">Live</p>
          <p className="mt-2 font-display text-3xl font-semibold">€ 41,400</p>
          <p className="mt-4 rounded-2xl bg-white p-3 text-[11px] text-[#454545] ring-1 ring-[#6000FF]/20">
            ATEX housing is not available with IE3 75 kW. Choose IE4 or a standard housing.
          </p>
        </aside>
      </div>
    </IndustrialFrame>
  )
}

export function QuoteSummaryScreen() {
  return (
    <IndustrialFrame title="quotes.techform.local / Q-2044" step="Summary">
      <div className="p-5">
        <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-[#6000FF]">
          Quote Q-2044 · Compressors
        </p>
        <table className="mt-4 w-full text-left">
          <thead className="font-sans text-[9px] uppercase tracking-[0.1em] text-[#595a70]">
            <tr>
              <th className="px-3 py-2">BOM</th>
              <th className="px-3 py-2">Qty</th>
            </tr>
          </thead>
          <tbody>
            {['IE3 75 kW motor', '400 V kit', 'Soft starter'].map((row) => (
              <tr key={row} className="border-t border-black/6">
                <td className="px-3 py-2">{row}</td>
                <td className="px-3 py-2">1</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 flex items-end justify-between pt-4">
          <span className="font-sans text-[10px] uppercase tracking-[0.12em] text-[#595a70]">Total</span>
          <span className="font-display text-4xl font-semibold">€ 41,400</span>
        </div>
        <p className="mt-4 rounded-full bg-[#121212] py-3 text-center font-sans text-[10px] font-semibold tracking-[0.12em] text-white uppercase">
          Generate PDF
        </p>
      </div>
    </IndustrialFrame>
  )
}

export function QuoteHelpScreen() {
  return (
    <IndustrialFrame title="quotes.techform.local / Q-2044 · help" step="Configuration">
      <div className="grid min-h-[320px] md:grid-cols-[1fr_16rem]">
        <div className="p-4">
          <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-[#6000FF]">Housing</p>
          <p className="mt-1 font-medium">ATEX</p>
          <p className="mt-3 rounded-2xl bg-[#f7f7fd] p-3 text-[11px] leading-relaxed text-[#454545]">
            From support ticket #4418 (12 occurrences this quarter): ATEX housing cannot be paired with IE3 75 kW.
            Offer IE4, or switch to a standard housing. Do not submit — the quote will bounce from engineering.
          </p>
        </div>
        <aside className="border-t border-black/6 bg-[#f7f7fd] p-4 md:border-t-0 md:border-l">
          <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.12em] text-[#6000FF]">Written from</p>
          <p className="mt-2 text-[11px] text-[#454545]">
            Recurring tickets, placed on the field that generated them. Maintenance as UX.
          </p>
        </aside>
      </div>
    </IndustrialFrame>
  )
}

export function QuoteMobileScreen() {
  return (
    <PlantDevice>
      <div className="p-3">
        <div className="mb-3 grid grid-cols-3 gap-1 rounded-full bg-[#f7f7fd] p-1 font-sans text-[9px] font-semibold uppercase">
          <span className="px-1 py-1 text-center text-[#595a70]">Product</span>
          <span className="rounded-full bg-[#121212] px-1 py-1 text-center text-white">Config</span>
          <span className="px-1 py-1 text-center text-[#595a70]">Summary</span>
        </div>
        <p className="font-display text-xl font-semibold">Configuration</p>
        <div className="mt-3 space-y-2">
          {['Motor · IE3 75 kW', 'Voltage · 400 V', 'Control · Soft starter'].map((row) => (
            <p key={row} className="rounded-2xl bg-[#f7f7fd] px-3 py-2">
              {row}
            </p>
          ))}
        </div>
        <p className="mt-4 font-display text-3xl font-semibold">€ 41,400</p>
        <p className="mt-3 rounded-full bg-[#121212] py-2 text-center font-sans text-[10px] font-semibold text-white uppercase">
          Continue
        </p>
      </div>
    </PlantDevice>
  )
}
