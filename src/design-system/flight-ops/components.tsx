import type { ReactNode } from 'react'
import type {
  CheckState,
  FlagKind,
  MissionStatus,
  OpsBannerKind,
  OpsButtonSize,
  OpsButtonVariant,
  TelemetryState,
} from './tokens'
import { flagCopy, statusCopy } from './tokens'

const sizeClass: Record<OpsButtonSize, string> = {
  sm: 'h-8 px-4 text-[11px]',
  md: 'h-10 px-5 text-[12px]',
  lg: 'h-11 px-6 text-[13px] min-h-[44px]',
}

const variantClass: Record<OpsButtonVariant, string> = {
  primary: 'bg-[#FF6161] text-white hover:bg-[#ff7a7a]',
  ghost: 'border border-[#FF6161] text-[#FF6161] hover:bg-[#FF6161]/10',
  hold: 'bg-[#FF6161] text-white hover:bg-[#ff7a7a]',
}

const focus =
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF6161] rounded-full'

export function OpsButton({
  children,
  variant = 'primary',
  size = 'md',
  disabled,
  type = 'button',
}: {
  children: ReactNode
  variant?: OpsButtonVariant
  size?: OpsButtonSize
  disabled?: boolean
  type?: 'button' | 'submit'
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`inline-flex items-center justify-center rounded-full font-sans font-medium tracking-[0.04em] transition-colors ${sizeClass[size]} ${variantClass[variant]} ${
        disabled ? 'cursor-not-allowed opacity-35' : 'cursor-pointer'
      } ${focus}`}
    >
      {children}
    </button>
  )
}

export function StatusChip({ status }: { status: MissionStatus }) {
  const label = statusCopy[status]
  const cls =
    status === 'ready'
      ? 'bg-[#FF6161] text-white'
      : status === 'blocked'
        ? 'border border-[#FF6161]/70 text-[#FF6161]'
        : status === 'inflight'
          ? 'border border-[#4EC8FF] text-[#4EC8FF]'
          : 'bg-white/10 text-white'
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-sans text-[10px] font-medium tracking-[0.06em] uppercase ${cls}`}>
      {status === 'inflight' ? <LiveDot geo /> : null}
      {label}
    </span>
  )
}

export function LiveBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#4EC8FF] px-2 py-0.5 font-sans text-[9px] font-semibold tracking-[0.08em] uppercase text-[#15202C]">
      <LiveDot inverse />
      Live
    </span>
  )
}

function LiveDot({ inverse, geo }: { inverse?: boolean; geo?: boolean }) {
  const fill = inverse ? 'bg-[#15202C]' : geo ? 'bg-[#4EC8FF]' : 'bg-white'
  return <span className={`inline-block h-1.5 w-1.5 rounded-full ${fill}`} aria-hidden="true" />
}

export function ChecklistRow({
  label,
  state,
  density = 'desktop',
}: {
  label: string
  state: CheckState
  density?: 'desktop' | 'field'
}) {
  const pad = density === 'field' ? 'px-3 py-3.5 text-[13px]' : 'px-3 py-2.5 text-[12px]'
  const cls =
    state === 'ok'
      ? 'bg-[#FF6161] text-white'
      : state === 'hold'
        ? 'border border-[#FF6161]/70 text-[#FF6161]'
        : 'border border-dashed border-white/20 text-white/40'
  return (
    <div className={`flex items-center justify-between rounded-lg font-sans ${pad} ${cls}`}>
      <span>{label}</span>
      <span className="text-[10px] font-semibold tracking-[0.08em] uppercase">
        {state === 'ok' ? 'OK' : state === 'hold' ? 'Hold' : '—'}
      </span>
    </div>
  )
}

export function LaunchLock({ locked }: { locked: boolean }) {
  if (locked) {
    return (
      <p className="rounded-full border border-[#FF6161]/50 py-3 text-center font-sans text-[11px] font-medium tracking-[0.08em] uppercase text-[#FF6161]/80">
        Launch locked
      </p>
    )
  }
  return <OpsButton size="lg">Launch</OpsButton>
}

export function QualityFlag({ kind }: { kind: FlagKind }) {
  return (
    <div className="flex aspect-[4/3] items-start rounded-md bg-white p-2">
      <span className="font-sans text-[9px] font-semibold tracking-[0.1em] text-[#FF6161]">{flagCopy[kind]}</span>
    </div>
  )
}

export function ReadinessMetric({
  label,
  value,
  ok = true,
}: {
  label: string
  value: string
  ok?: boolean
}) {
  return (
    <li className={`flex justify-between border-b border-white/10 py-2 font-sans text-[11px] last:border-b-0 ${ok ? 'text-white' : 'text-[#FF6161]'}`}>
      <span className={ok ? 'text-white/55' : ''}>{label}</span>
      <span>{value}</span>
    </li>
  )
}

export function ParamRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-white/10 py-2.5 font-sans text-[12px]">
      <span className="text-white/50">{label}</span>
      <span className="tabular-nums">{value}</span>
    </div>
  )
}

export function CrewRow({
  id,
  place,
  status,
}: {
  id: string
  place: string
  status: MissionStatus
}) {
  return (
    <div className="grid grid-cols-[6.5rem_1fr_auto] items-center gap-3 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2.5">
      <span className="font-mono text-[10px] text-[#4EC8FF]">{id}</span>
      <span className="truncate text-[12px] text-white/75">{place}</span>
      <StatusChip status={status} />
    </div>
  )
}

export function CoverageGrid({ covered = 37, total = 40 }: { covered?: number; total?: number }) {
  return (
    <div>
      <div className="grid h-40 grid-cols-8 grid-rows-5 gap-px rounded-lg bg-[#4EC8FF]/20 p-px">
        {Array.from({ length: total }, (_, i) => (
          <span key={i} className={i < covered ? 'bg-[#4EC8FF]/85' : 'bg-white/10'} />
        ))}
      </div>
      <p className="mt-2 font-sans text-[11px] text-white/50">
        {covered} / {total} strips
      </p>
    </div>
  )
}

export function MapToolbar() {
  return (
    <div className="flex flex-col gap-1" aria-label="Map controls">
      {['+', '−', '⊙'].map((icon) => (
        <button
          key={icon}
          type="button"
          className="grid h-8 w-8 place-items-center rounded-md border border-white/15 bg-[#1F232C]/70 font-mono text-white hover:border-[#4EC8FF] hover:text-[#4EC8FF] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF6161]"
        >
          {icon}
        </button>
      ))}
    </div>
  )
}

export function OpsNav({ items, active }: { items: string[]; active: string }) {
  return (
    <aside className="hidden w-36 shrink-0 border-r border-white/10 bg-[#1F232C] p-3 md:block">
      <p className="mb-4 font-sans text-[10px] font-semibold tracking-[0.14em] uppercase text-[#FF6161]">Ops</p>
      <ul className="space-y-1">
        {items.map((item) => (
          <li
            key={item}
            className={`rounded-md px-2 py-1.5 font-sans text-[12px] ${item === active ? 'bg-[#FF6161] text-white' : 'text-white/50'}`}
          >
            {item}
          </li>
        ))}
      </ul>
    </aside>
  )
}

export function FieldBar({ mission = 'SOL-441', gps = 'GPS 12', battery = '74%' }: { mission?: string; gps?: string; battery?: string }) {
  return (
    <div className="flex items-center justify-between bg-[#1F232C] px-3 py-1.5 font-sans text-[9px] text-white/55">
      <span>{gps}</span>
      <span className="tracking-[0.08em] text-[#4EC8FF]">{mission}</span>
      <span>{battery}</span>
    </div>
  )
}

export function SegmentedControl({
  options,
  value,
  ariaLabel,
}: {
  options: readonly string[]
  value: string
  ariaLabel?: string
}) {
  return (
    <div role="group" aria-label={ariaLabel} className="inline-flex overflow-hidden rounded-full border border-white/15">
      {options.map((option) => {
        const selected = option === value
        return (
          <button
            key={option}
            type="button"
            aria-pressed={selected}
            className={`h-8 px-3.5 font-sans text-[11px] font-medium ${focus} ${
              selected ? 'bg-[#FF6161] text-white' : 'text-white/50 hover:text-white'
            }`}
          >
            {option}
          </button>
        )
      })}
    </div>
  )
}

export function OpsField({
  label,
  value,
  unit,
}: {
  label: string
  value: string
  unit?: string
}) {
  return (
    <label className="block">
      <span className="font-sans text-[10px] font-medium tracking-[0.08em] uppercase text-white/50">{label}</span>
      <span className="mt-1 flex items-center rounded-lg border border-white/12 bg-black/20">
        <input
          readOnly
          value={value}
          className="w-full bg-transparent px-3 py-2 font-sans text-[13px] text-white outline-none"
        />
        {unit ? <span className="pr-3 font-sans text-[10px] text-white/40">{unit}</span> : null}
      </span>
    </label>
  )
}

export function FilterChip({ label, selected }: { label: string; selected?: boolean }) {
  return (
    <button
      type="button"
      aria-pressed={selected}
      className={`h-7 rounded-full px-3 font-sans text-[10px] font-medium tracking-[0.06em] uppercase ${focus} ${
        selected ? 'bg-[#FF6161] text-white' : 'border border-white/15 text-white/50 hover:text-white'
      }`}
    >
      {label}
    </button>
  )
}

export function SearchField({ placeholder = 'Search missions' }: { placeholder?: string }) {
  return (
    <div className="flex items-center rounded-full border border-white/12 bg-black/20 px-3">
      <span className="mr-2 font-sans text-[11px] text-white/30" aria-hidden="true">
        /
      </span>
      <input
        readOnly
        placeholder={placeholder}
        className="h-9 w-full bg-transparent font-sans text-[12px] text-white outline-none placeholder:text-white/30"
        aria-label={placeholder}
      />
    </div>
  )
}

export function OpsBanner({
  kind,
  title,
  children,
}: {
  kind: OpsBannerKind
  title: string
  children?: ReactNode
}) {
  const cls =
    kind === 'hold'
      ? 'bg-[#FF6161] text-white'
      : kind === 'locked'
        ? 'border border-[#FF6161]/40 text-[#FF6161]'
        : 'border border-[#4EC8FF]/30 text-white'
  return (
    <div className={`rounded-xl px-4 py-3 ${cls}`} role="status">
      <p className="font-sans text-[10px] font-semibold tracking-[0.1em] uppercase">{title}</p>
      {children ? <p className="mt-1 text-[12px] leading-relaxed opacity-90">{children}</p> : null}
    </div>
  )
}

export function EmptyState({
  title,
  body,
  action,
}: {
  title: string
  body?: string
  action?: string
}) {
  return (
    <div className="rounded-xl border border-dashed border-white/15 px-6 py-10 text-center">
      <p className="font-display text-xl">{title}</p>
      {body ? <p className="mx-auto mt-2 max-w-xs text-[12px] leading-relaxed text-white/50">{body}</p> : null}
      {action ? (
        <div className="mt-5">
          <OpsButton size="sm">{action}</OpsButton>
        </div>
      ) : null}
    </div>
  )
}

export function WeatherRow({
  wind,
  limit,
  gust,
  state = 'ok',
}: {
  wind: string
  limit: string
  gust: string
  state?: TelemetryState
}) {
  return (
    <div className={`rounded-xl border px-3 py-3 ${state === 'ok' ? 'border-white/10' : 'border-[#FF6161]/50'}`}>
      <div className="flex items-center justify-between">
        <p className="font-sans text-[10px] font-medium tracking-[0.1em] uppercase text-white/45">Wind</p>
        <span className={`font-sans text-[10px] font-semibold tracking-[0.08em] uppercase ${state === 'ok' ? 'text-[#4EC8FF]' : 'text-[#FF6161]'}`}>
          {state === 'ok' ? 'Inside window' : 'Hold'}
        </span>
      </div>
      <p className="font-display mt-2 text-2xl leading-none">{wind}</p>
      <p className="mt-2 font-sans text-[10px] text-white/40">
        Limit {limit} · Gust {gust}
      </p>
    </div>
  )
}

export function BatteryStrip({ count = 4, charged = 4 }: { count?: number; charged?: number }) {
  return (
    <div>
      <div className="flex items-center justify-between font-sans text-[10px] font-medium tracking-[0.08em] uppercase">
        <span className="text-white/45">Batteries</span>
        <span>
          {charged} / {count}
        </span>
      </div>
      <div className="mt-2 flex gap-1">
        {Array.from({ length: count }, (_, i) => (
          <span key={i} className={`h-2 flex-1 rounded-full ${i < charged ? 'bg-[#4EC8FF]' : 'bg-white/12'}`} />
        ))}
      </div>
    </div>
  )
}

export function SequenceStep({ current, total, label }: { current: number; total: number; label: string }) {
  return (
    <div className="flex items-center justify-between font-sans text-[10px] font-medium tracking-[0.08em] uppercase text-white/50">
      <span>{label}</span>
      <span className="text-[#FF6161]">
        {current} / {total}
      </span>
    </div>
  )
}

export function OpsTable({
  columns,
  rows,
}: {
  columns: string[]
  rows: string[][]
}) {
  return (
    <table className="w-full text-left text-[12px]">
      <thead className="font-sans text-[10px] font-medium tracking-[0.1em] uppercase text-white/40">
        <tr>
          {columns.map((col) => (
            <th key={col} className="border-b border-white/10 py-2 pr-4 font-medium">
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="font-sans">
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={j} className="border-b border-white/10 py-2.5 pr-4">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export function MissionId({ id }: { id: string }) {
  return <span className="font-mono text-[11px] tracking-[0.06em] text-[#4EC8FF]">{id}</span>
}

export function UnitValue({ value, unit }: { value: string; unit: string }) {
  return (
    <span className="font-sans tabular-nums">
      {value} <span className="text-white/40">{unit}</span>
    </span>
  )
}

export function OpsKbd({ children }: { children: ReactNode }) {
  return (
    <kbd className="inline-flex min-w-[1.5rem] items-center justify-center rounded-md border border-white/15 px-1.5 py-0.5 font-mono text-[10px] text-white/70">
      {children}
    </kbd>
  )
}
