import type { ReactNode } from 'react'

export function OpsFrame({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="overflow-hidden border border-white/15 bg-[#111] text-[11px] leading-snug text-white md:text-xs">
      <div className="flex items-center justify-between border-b border-white/10 bg-[#0a0a0a] px-3 py-2 font-mono text-[10px] tracking-[0.14em] uppercase">
        <span className="text-white/40">Dronemapping // ops</span>
        <span className="truncate text-white/70">{title}</span>
        <span className="rounded-sm bg-white px-1.5 py-0.5 text-[9px] tracking-normal text-black">LIVE</span>
      </div>
      <div className="min-h-[300px] md:min-h-[360px]">{children}</div>
    </div>
  )
}

export function FieldDevice({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[260px] bg-[#111] p-1.5">
      <div className="overflow-hidden bg-[#0a0a0a] text-white">
        <div className="flex items-center justify-between bg-black px-3 py-1.5 font-mono text-[9px] text-white/50">
          <span>GPS 12</span>
          <span>SOL-441</span>
          <span>74%</span>
        </div>
        <div className="min-h-[440px] text-[11px]">{children}</div>
      </div>
    </div>
  )
}

export function DocsFrame({ crumb, children }: { crumb: string; children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-sm border border-ink/20 bg-white text-[11px] leading-snug text-ink md:text-xs">
      <div className="flex items-center gap-3 border-b border-ink/10 bg-[#fafafa] px-3 py-2">
        <span className="font-mono text-[10px] text-ink/40">Prism</span>
        <span className="text-ink/20">/</span>
        <span className="truncate font-mono text-[10px] text-ink">{crumb}</span>
        <span className="ml-auto hidden rounded-sm border border-ink/15 px-2 py-0.5 font-mono text-[9px] tracking-[0.12em] uppercase text-muted sm:inline">
          Docs
        </span>
      </div>
      <div className="min-h-[300px] md:min-h-[360px]">{children}</div>
    </div>
  )
}

export function IndustrialFrame({
  title,
  step,
  children,
}: {
  title: string
  step?: string
  children: ReactNode
}) {
  return (
    <div className="overflow-hidden border-2 border-ink bg-[#e8e6e1] text-[11px] leading-snug text-ink md:text-xs">
      <div className="flex items-center gap-0 border-b-2 border-ink bg-[#d4d0c8] font-mono text-[10px] uppercase">
        {['Product', 'Configuration', 'Summary'].map((tab) => (
          <span
            key={tab}
            className={`border-r-2 border-ink px-3 py-2 ${
              step === tab ? 'bg-ink text-[#e8e6e1]' : 'text-ink/60'
            }`}
          >
            {tab}
          </span>
        ))}
        <span className="ml-auto hidden truncate px-3 py-2 text-[9px] tracking-normal normal-case text-ink/50 md:inline">
          {title}
        </span>
      </div>
      <div className="min-h-[300px] bg-[#e8e6e1] md:min-h-[360px]">{children}</div>
    </div>
  )
}

export function MarketingFrame({ url, children }: { url: string; children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-[0_24px_60px_-36px_rgba(11,11,11,0.4)]">
      <div className="flex items-center gap-2 bg-[#f4f4f1] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink/15" />
        <p className="ml-2 flex-1 truncate rounded-full bg-white px-3 py-1 text-center font-sans text-[10px] text-muted">
          {url}
        </p>
      </div>
      <div className="min-h-[300px] bg-white text-[11px] leading-snug text-ink md:min-h-[360px] md:text-xs">
        {children}
      </div>
    </div>
  )
}

export function PhoneEditorial({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[280px] rounded-[2rem] border border-ink/10 bg-white p-2 shadow-[0_24px_50px_-30px_rgba(11,11,11,0.35)]">
      <div className="overflow-hidden rounded-[1.5rem] bg-white">
        <div className="flex justify-center pt-2">
          <span className="h-4 w-20 rounded-full bg-ink/10" />
        </div>
        <div className="min-h-[420px] text-[11px] text-ink">{children}</div>
      </div>
    </div>
  )
}

export function PlantDevice({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[300px] border-2 border-ink bg-[#e8e6e1]">
      <div className="border-b-2 border-ink bg-[#d4d0c8] px-3 py-1 font-mono text-[9px] uppercase text-ink/70">
        Techform CPQ · 1280×800
      </div>
      <div className="min-h-[400px] text-[11px] text-ink">{children}</div>
    </div>
  )
}
