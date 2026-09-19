import { IndustrialFrame, PlantDevice } from './chrome'

export function QuoteLegacyScreen() {
  return (
    <div className="border-2 border-ink bg-[#cfcabe] text-[10px] text-ink">
      <div className="border-b-2 border-ink bg-[#b7b3a8] px-2 py-1 font-mono uppercase">
        Techform Configurator 2.4 — untitled quote
      </div>
      <div className="grid grid-cols-2 gap-1 p-2 md:grid-cols-4">
        {Array.from({ length: 16 }, (_, i) => (
          <label key={i} className="border border-ink/40 bg-[#e8e6e1] p-1.5">
            <span className="mb-1 block font-mono text-[8px] text-ink/60">Rule {i + 1}</span>
            <span className="block h-5 border border-ink/40 bg-white" />
          </label>
        ))}
      </div>
      <p className="border-t-2 border-ink px-2 py-1 font-mono text-[9px]">
        Save · 142 fields · last error from engineering 2 days later
      </p>
    </div>
  )
}

export function QuoteStep1Screen() {
  return (
    <IndustrialFrame title="quotes.techform.local / new" step="Product">
      <div className="p-5">
        <p className="font-mono text-[10px] uppercase text-ink/50">Step 1 of 3</p>
        <p className="mt-1 font-display text-2xl">Which line are we quoting?</p>
        <div className="mt-5 grid gap-0 border-2 border-ink md:grid-cols-3">
          {['Compressors', 'Heat exchangers', 'Skids'].map((p, i) => (
            <div
              key={p}
              className={`border-ink p-4 ${i === 0 ? 'bg-ink text-[#e8e6e1]' : 'border-t-2 md:border-t-0 md:border-l-2'}`}
            >
              <p className="font-medium">{p}</p>
              <p className={`mt-1 font-mono text-[10px] ${i === 0 ? 'text-[#e8e6e1]/70' : 'text-ink/50'}`}>
                Industrial series
              </p>
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
        <div className="space-y-0 border-b-2 border-ink md:border-r-2 md:border-b-0">
          {[
            ['Motor', 'IE3 75 kW', true],
            ['Voltage', '400 V', true],
            ['Housing', 'ATEX — conflicts with IE3 75 kW', false],
            ['Control', 'Soft starter', true],
          ].map(([label, value, ok]) => (
            <div key={String(label)} className={`border-b-2 border-ink px-4 py-3 ${ok ? '' : 'bg-ink text-[#e8e6e1]'}`}>
              <p className="font-mono text-[9px] uppercase opacity-60">{label}</p>
              <p className="font-medium">{value}</p>
            </div>
          ))}
        </div>
        <aside className="bg-[#d4d0c8] p-4">
          <p className="font-mono text-[10px] uppercase">Live</p>
          <p className="mt-2 font-display text-3xl">€ 41,400</p>
          <p className="mt-4 border-2 border-ink bg-[#e8e6e1] p-3 text-[11px]">
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
        <p className="font-mono text-[10px] uppercase text-ink/50">Quote Q-2044 · Compressors</p>
        <table className="mt-4 w-full border-2 border-ink text-left">
          <thead className="bg-[#d4d0c8] font-mono text-[9px] uppercase">
            <tr>
              <th className="border-r-2 border-ink px-3 py-2">BOM</th>
              <th className="px-3 py-2">Qty</th>
            </tr>
          </thead>
          <tbody>
            {['IE3 75 kW motor', '400 V kit', 'Soft starter'].map((row) => (
              <tr key={row} className="border-t-2 border-ink">
                <td className="border-r-2 border-ink px-3 py-2">{row}</td>
                <td className="px-3 py-2">1</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-4 flex items-end justify-between border-t-2 border-ink pt-4">
          <span className="font-mono text-[10px] uppercase">Total</span>
          <span className="font-display text-4xl">€ 41,400</span>
        </div>
        <p className="mt-4 bg-ink py-3 text-center font-mono text-[10px] uppercase tracking-[0.12em] text-[#e8e6e1]">
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
          <p className="font-mono text-[10px] uppercase text-ink/50">Housing</p>
          <p className="mt-1 font-medium">ATEX</p>
          <p className="mt-3 border-2 border-ink bg-white p-3 text-[11px] leading-relaxed">
            From support ticket #4418 (12 occurrences this quarter): ATEX housing cannot be paired with IE3 75 kW.
            Offer IE4, or switch to a standard housing. Do not submit — the quote will bounce from engineering.
          </p>
        </div>
        <aside className="border-t-2 border-ink bg-[#d4d0c8] p-4 md:border-t-0 md:border-l-2">
          <p className="font-mono text-[10px] uppercase">Written from</p>
          <p className="mt-2 text-[11px]">Recurring tickets, placed on the field that generated them. Maintenance as UX.</p>
        </aside>
      </div>
    </IndustrialFrame>
  )
}

export function QuoteMobileScreen() {
  return (
    <PlantDevice>
      <div className="p-3">
        <div className="mb-3 grid grid-cols-3 border-2 border-ink font-mono text-[9px] uppercase">
          <span className="px-1 py-1 text-center text-ink/40">Product</span>
          <span className="bg-ink px-1 py-1 text-center text-[#e8e6e1]">Config</span>
          <span className="px-1 py-1 text-center text-ink/40">Summary</span>
        </div>
        <p className="font-display text-xl">Configuration</p>
        <div className="mt-3 space-y-0 border-2 border-ink">
          {['Motor · IE3 75 kW', 'Voltage · 400 V', 'Control · Soft starter'].map((row) => (
            <p key={row} className="border-b-2 border-ink px-3 py-2 last:border-b-0">
              {row}
            </p>
          ))}
        </div>
        <p className="mt-4 font-display text-3xl">€ 41,400</p>
        <p className="mt-3 bg-ink py-2 text-center font-mono text-[10px] uppercase text-[#e8e6e1]">Continue</p>
      </div>
    </PlantDevice>
  )
}
