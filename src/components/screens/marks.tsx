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

export function TechformMark({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path d="M4 5h24v5.5H18.8V28h-5.6V10.5H4Z" fill="currentColor" />
      <rect x="21" y="15" width="7" height="7" rx="1.5" fill="currentColor" opacity="0.5" />
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
