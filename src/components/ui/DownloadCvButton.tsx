import { profile } from '../../data/profile'
import { downloadFile } from '../../lib/downloadFile'

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

const CV_FILENAME = 'Robin-Fremy-CV.pdf'

/**
 * "Download CV" action.
 * - If `profile.cvPdfUrl` is set, fetches the PDF and triggers a real file
 *   download (the HTML `download` attribute is kept as a no-JS fallback).
 * - Otherwise it opens the browser print dialog.
 */
export function DownloadCvButton({
  variant = 'primary',
  className = '',
  label = 'Download CV',
  onDone,
}: DownloadCvButtonProps) {
  const classes = `${variantClass[variant]} ${className}`
  const href = profile.cvPdfUrl

  if (href) {
    return (
      <a
        href={href}
        download={CV_FILENAME}
        type="application/pdf"
        className={classes}
        onClick={(event) => {
          event.preventDefault()
          void downloadFile(href, CV_FILENAME).catch(() => {
            window.location.assign(href)
          })
          onDone?.()
        }}
      >
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
