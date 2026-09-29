import { useId } from 'react'
import type { CSSProperties } from 'react'
import { flagCopy, type FlagKind } from './tokens'

const STRIPS = 14
const X_LEFT = 56
const X_RIGHT = 352
const Y0 = 38
const Y1 = 204

function stripInset(i: number) {
  return Math.sin((i / (STRIPS - 1)) * Math.PI) * 10
}

function stripY(i: number) {
  return Y0 + (i * (Y1 - Y0)) / (STRIPS - 1)
}

function lawnmowerPath() {
  let d = `M ${X_LEFT} ${Y0}`
  for (let i = 0; i < STRIPS; i++) {
    const y = stripY(i)
    const inset = stripInset(i)
    const left = X_LEFT + inset
    const right = X_RIGHT - inset * 0.55
    if (i % 2 === 0) {
      d += ` L ${right} ${y}`
      if (i < STRIPS - 1) d += ` L ${right} ${stripY(i + 1)}`
    } else {
      d += ` L ${left} ${y}`
      if (i < STRIPS - 1) d += ` L ${left} ${stripY(i + 1)}`
    }
  }
  return d
}

const AOI = '48,44 338,28 372,198 42,214'

export function SurveyPlot({
  mode = 'plan',
  className,
}: {
  mode?: 'plan' | 'coverage'
  className?: string
}) {
  const uid = useId().replace(/:/g, '')
  const covered = mode === 'coverage' ? 11 : STRIPS
  const plan = lawnmowerPath()

  return (
    <svg className={className} viewBox="0 0 420 248" fill="none" aria-hidden="true">
      <defs>
        <clipPath id={`aoi-${uid}`}>
          <polygon points={AOI} />
        </clipPath>
        <pattern id={`panels-${uid}`} width="7" height="11" patternUnits="userSpaceOnUse">
          <rect width="7" height="11" fill="#1a2c28" />
          <rect width="7" height="1.2" fill="rgba(78,200,255,0.16)" />
          <rect y="5.5" width="7" height="0.7" fill="rgba(0,0,0,0.28)" />
        </pattern>
      </defs>
      <polygon points={AOI} fill={`url(#panels-${uid})`} opacity="0.92" />
      <polygon points={AOI} fill="rgba(78,200,255,0.08)" />
      <g clipPath={`url(#aoi-${uid})`}>
        {Array.from({ length: STRIPS }, (_, i) => {
          const y = stripY(i)
          const inset = stripInset(i)
          const left = X_LEFT + inset
          const right = X_RIGHT - inset * 0.55
          const done = i < covered
          return (
            <line
              key={i}
              x1={left}
              y1={y}
              x2={right}
              y2={y}
              stroke={done ? '#4EC8FF' : '#FF6161'}
              strokeWidth={mode === 'coverage' ? 1.7 : 1.15}
              strokeDasharray={done ? undefined : '3 4'}
              opacity={done ? 0.9 : 0.85}
            />
          )
        })}
      </g>
      <polygon points={AOI} stroke="#4EC8FF" strokeWidth="1.6" />
      {mode === 'plan' ? (
        <path d={plan} stroke="#FF6161" strokeWidth="1.15" strokeDasharray="4 5" opacity="0.9" />
      ) : null}
      <circle cx="70" cy="50" r="3.4" fill="#FF6161" />
      <text x="78" y="47" fill="#FF6161" fontSize="9" fontFamily="ui-monospace, monospace">
        WP1
      </text>
      <circle cx="348" cy="188" r="3" fill="#4EC8FF" />
      <text x="300" y="184" fill="#4EC8FF" fontSize="9" fontFamily="ui-monospace, monospace">
        WP14
      </text>
      {mode === 'plan' ? (
        <g transform="translate(86 58)">
          <path d="M0 6 L10 0 L8 7 Z" fill="#FF6161" />
        </g>
      ) : null}
      <g transform="translate(16 16)" fill="#fff">
        <polygon points="8,0 11,10 8,8 5,10" fill="white" />
        <text x="14" y="10" fill="rgba(255,255,255,0.7)" fontSize="8" fontFamily="sans-serif">
          N
        </text>
      </g>
      <g transform="translate(16 226)" stroke="white" strokeWidth="1">
        <line x1="0" y1="0" x2="56" y2="0" />
        <line x1="0" y1="-3" x2="0" y2="3" />
        <line x1="56" y1="-3" x2="56" y2="3" />
        <text x="62" y="3" fill="rgba(255,255,255,0.55)" stroke="none" fontSize="8" fontFamily="ui-monospace, monospace">
          200 m
        </text>
      </g>
    </svg>
  )
}

const tileLooks: CSSProperties[] = [
  {
    backgroundColor: '#1a2428',
    backgroundImage:
      'repeating-linear-gradient(90deg, rgba(78,200,255,0.08) 0 1px, transparent 1px 7px), repeating-linear-gradient(0deg, rgba(0,0,0,0.42) 0 3px, rgba(36,68,56,0.55) 3px 10px)',
  },
  {
    backgroundColor: '#1c281c',
    backgroundImage:
      'radial-gradient(ellipse at 32% 38%, rgba(72,118,64,0.38), transparent 52%), radial-gradient(ellipse at 74% 72%, rgba(40,62,40,0.45), transparent 46%)',
  },
  {
    backgroundColor: '#2a231c',
    backgroundImage:
      'linear-gradient(118deg, transparent 38%, rgba(96,82,52,0.28) 41%, transparent 48%), radial-gradient(circle at 62% 28%, rgba(86,72,48,0.32), transparent 42%)',
  },
  {
    backgroundColor: '#152028',
    backgroundImage:
      'linear-gradient(180deg, rgba(78,200,255,0.14), transparent 58%), radial-gradient(ellipse at 48% 82%, rgba(18,36,46,0.85), transparent)',
  },
]

export function CaptureTile({
  seed = 0,
  flag,
  frame,
}: {
  seed?: number
  flag?: FlagKind
  frame?: string
}) {
  const look = tileLooks[seed % tileLooks.length]
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-md" style={look}>
      <span
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '6px 6px',
        }}
      />
      {flag ? (
        <span className="absolute top-1.5 left-1.5 rounded-sm bg-white px-1.5 py-0.5 font-sans text-[8px] font-semibold tracking-[0.12em] text-[#FF6161]">
          {flagCopy[flag]}
        </span>
      ) : (
        <span className="absolute right-1 bottom-1 font-mono text-[7px] text-white/40">
          {frame ?? String(seed + 1).padStart(4, '0')}
        </span>
      )}
    </div>
  )
}
