import { profile } from '../../data/profile'

interface DownloadCvButtonProps {
  variant?: 'primary' | 'secondary' | 'ghost'
  className?: string
  label?: string
  onDone?: () => void
}

const variantClass = {
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  ghost: 'btn-ghost',
} as const

/**
 * "Download CV" action.
 * - If `profile.cvPdfUrl` is set, it links directly to that static PDF.
 * - Otherwise it opens the print dialog, where the dedicated print stylesheet
 *   produces a clean A4 document that can be saved as PDF.
 */
export function DownloadCvButton({
  variant = 'primary',
  className = '',
  label = 'Download CV',
  onDone,
}: DownloadCvButtonProps) {
  const classes = `${variantClass[variant]} ${className}`

  if (profile.cvPdfUrl) {
    return (
      <a href={profile.cvPdfUrl} download className={classes} onClick={onDone}>
        {label}
        <DownloadIcon />
      </a>
    )
  }

  return (
    <button
      type="button"
      className={classes}
      onClick={() => {
        onDone?.()
        // Let the menu close / repaint before the print dialog blocks the thread
        window.setTimeout(() => window.print(), 50)
      }}
      title="Opens the print dialog — choose “Save as PDF”"
    >
      {label}
      <DownloadIcon />
    </button>
  )
}

function DownloadIcon() {
  return (
    <svg
      aria-hidden="true"
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v8M4.5 6.5 8 10l3.5-3.5M2.5 13h11" />
    </svg>
  )
}
