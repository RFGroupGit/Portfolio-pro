/** Geometric marks inspired by company logos — drawn for product chrome, not copies. */

export function XpatialMark({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7 4h6.2L16 10.2 18.8 4H25L18.4 16 25 28h-6.2L16 21.8 13.2 28H7l6.6-12L7 4Zm9 8.6L17.6 16 16 19.4 14.4 16 16 12.6Z"
      />
    </svg>
  )
}

export function LensysMark({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path
        d="M16 3 C18 9 23 12 29 13 C23 15 18 20 16 29 C14 20 9 15 3 13 C9 12 14 9 16 3 Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function VisiativMark({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path d="M4 8 L16 28 L12.5 28 L2 10.5 Z" fill="currentColor" />
      <path d="M20 8 L16 16 L19.2 16 L22.8 8 Z" fill="currentColor" opacity="0.55" />
      <path d="M28 8 L18 28 L21.5 28 L30 10.5 Z" fill="currentColor" />
    </svg>
  )
}

export function CegedimMark({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <rect x="2" y="2" width="13" height="13" rx="2" fill="#13BBB2" />
      <rect x="17" y="2" width="13" height="13" rx="2" fill="#D7DEE3" />
      <rect x="2" y="17" width="13" height="13" rx="2" fill="#105C77" />
      <rect x="17" y="17" width="13" height="13" rx="2" fill="#3ED1EB" />
    </svg>
  )
}
