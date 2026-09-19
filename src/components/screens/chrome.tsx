import type { ReactNode } from 'react'
import { FieldBar, LiveBadge } from '../../design-system/flight-ops/components'
import { CegedimMark, LensysMark, VisiativMark, XpatialMark } from './marks'

export function OpsFrame({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#262C38] text-[12px] leading-snug text-white md:text-[13px]">
      <div className="flex items-center justify-between border-b border-white/10 bg-[#1F232C] px-3 py-2">
        <span className="flex items-center gap-2 text-white">
          <XpatialMark className="h-5 w-5 text-white" />
          <span className="font-sans text-[10px] font-semibold tracking-[0.16em] uppercase">Xpatial</span>
        </span>
        <span className="truncate font-sans text-[11px] text-white/60">{title}</span>
        <LiveBadge />
      </div>
      <div className="min-h-[300px] md:min-h-[360px]">{children}</div>
    </div>
  )
}

export function FieldDevice({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[260px] rounded-[1.6rem] bg-[#262C38] p-1.5">
      <div className="overflow-hidden rounded-[1.35rem] bg-[#1F232C] text-white">
        <FieldBar />
        <div className="min-h-[440px] text-[12px]">{children}</div>
      </div>
    </div>
  )
}

export function DocsFrame({ crumb, children }: { crumb: string; children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#1B4F9E]/15 bg-white text-[11px] leading-snug text-[#333] md:text-xs">
      <div className="flex items-center gap-3 border-b border-[#1B4F9E]/10 bg-[#1B4F9E] px-3 py-2 text-white">
        <LensysMark className="h-5 w-5 text-white" />
        <span className="font-sans text-[10px] font-semibold tracking-[0.12em] uppercase">Lensys</span>
        <span className="text-white/35">/</span>
        <span className="truncate font-sans text-[10px] text-white/80">{crumb}</span>
        <span className="ml-auto hidden rounded-full bg-white/15 px-2 py-0.5 font-sans text-[9px] tracking-[0.12em] uppercase sm:inline">
          Prism
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
    <div className="overflow-hidden rounded-[1.6rem] border border-black/8 bg-white text-[11px] leading-snug text-[#121212] md:text-xs">
      <div className="flex items-center gap-3 border-b border-black/6 bg-[#f7f7fd] px-3 py-2">
        <VisiativMark className="h-5 w-5 text-[#121212]" />
        <span className="font-sans text-[12px] font-semibold tracking-tight">Techform</span>
        <span className="ml-2 hidden gap-1 sm:flex">
          {['Product', 'Configuration', 'Summary'].map((tab) => (
            <span
              key={tab}
              className={`rounded-full px-2.5 py-1 text-[10px] font-medium ${
                step === tab ? 'bg-[#121212] text-white' : 'text-[#595a70]'
              }`}
            >
              {tab}
            </span>
          ))}
        </span>
        <span className="ml-auto hidden truncate text-[10px] text-[#595a70] md:inline">{title}</span>
        <span className="hidden rounded-full bg-gradient-to-r from-[#ffb56a] via-[#c44bff] to-[#62c4ff] p-[1px] sm:inline">
          <span className="block rounded-full bg-white px-2.5 py-0.5 text-[9px] font-semibold text-[#121212]">Quote</span>
        </span>
      </div>
      <div className="min-h-[300px] bg-white md:min-h-[360px]">{children}</div>
    </div>
  )
}

export function MarketingFrame({ url, children }: { url: string; children: ReactNode }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#105C77]/10 bg-white shadow-[0_24px_60px_-36px_rgba(16,92,119,0.35)]">
      <div className="flex items-center gap-2 bg-[#105C77] px-4 py-2.5 text-white">
        <CegedimMark className="h-5 w-5" />
        <span className="font-sans text-[10px] font-medium tracking-[0.04em]">cegedim</span>
        <p className="ml-2 flex-1 truncate rounded-full bg-white/10 px-3 py-1 text-center font-sans text-[10px] text-white/70">
          {url}
        </p>
      </div>
      <div className="min-h-[300px] bg-white text-[11px] leading-snug text-[#105C77] md:min-h-[360px] md:text-xs">
        {children}
      </div>
    </div>
  )
}

export function PhoneEditorial({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[280px] rounded-[2rem] border border-[#105C77]/10 bg-white p-2 shadow-[0_24px_50px_-30px_rgba(16,92,119,0.3)]">
      <div className="overflow-hidden rounded-[1.5rem] bg-white">
        <div className="flex items-center justify-between bg-[#105C77] px-4 py-2">
          <CegedimMark className="h-4 w-4" />
          <span className="h-4 w-16 rounded-full bg-white/20" />
          <span className="rounded-full bg-[#FB5080] px-2 py-0.5 text-[8px] font-medium text-white">Demo</span>
        </div>
        <div className="min-h-[420px] text-[11px] text-[#105C77]">{children}</div>
      </div>
    </div>
  )
}

export function PlantDevice({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-[300px] overflow-hidden rounded-[1.6rem] border border-black/8 bg-white">
      <div className="flex items-center gap-2 bg-[#f7f7fd] px-3 py-1.5">
        <VisiativMark className="h-4 w-4 text-[#121212]" />
        <span className="font-sans text-[9px] font-semibold">Techform CPQ</span>
        <span className="ml-auto text-[9px] text-[#595a70]">13″ plant laptop</span>
      </div>
      <div className="min-h-[400px] text-[11px] text-[#121212]">{children}</div>
    </div>
  )
}
