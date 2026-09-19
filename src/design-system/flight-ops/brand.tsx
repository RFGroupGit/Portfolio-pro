/** Xpatial mark — geometric X, same idea as the company logo, drawn for product chrome. */

export function XpatialMark({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path
        d="M4 5 L14 16 L4 27 H10 L16 18.5 L22 27 H28 L18 16 L28 5 H22 L16 13.5 L10 5 Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const mapGridStyle = {
  backgroundColor: '#15202C',
  backgroundImage:
    'linear-gradient(rgba(78,200,255,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(78,200,255,0.14) 1px, transparent 1px)',
  backgroundSize: '22px 22px',
} as const
