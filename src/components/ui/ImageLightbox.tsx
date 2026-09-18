import { useRef } from 'react'

interface ImageLightboxProps {
  src: string
  alt: string
  caption?: string
  className?: string
}

/**
 * Thumbnail that opens the full-size visual in a native <dialog>.
 * Escape and clicking the backdrop close it; focus returns to the trigger.
 */
export function ImageLightbox({ src, alt, caption, className = '' }: ImageLightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  const open = () => dialogRef.current?.showModal()
  const close = () => dialogRef.current?.close()

  return (
    <>
      <button
        type="button"
        onClick={open}
        className="group block w-full cursor-zoom-in rounded-sm bg-transparent p-0 text-left print:cursor-default"
        aria-label={`Enlarge visual: ${alt}`}
      >
        <img
          src={src}
          alt={alt}
          loading="eager"
          decoding="async"
          width={1200}
          height={750}
          className={`aspect-[16/10] w-full rounded-sm border border-line object-cover transition-opacity duration-200 group-hover:opacity-90 ${className}`}
        />
      </button>

      <dialog
        ref={dialogRef}
        className="print-hidden m-auto w-[min(96vw,1200px)] rounded-sm border border-line bg-paper p-0 shadow-2xl backdrop:bg-ink/70 backdrop:backdrop-blur-sm"
        aria-label={alt}
        onClick={(e) => {
          if (e.target === e.currentTarget) close()
        }}
      >
        <div className="flex items-center justify-between gap-4 border-b border-line px-4 py-3">
          <p className="truncate text-sm text-ink-soft">{caption ?? alt}</p>
          <button type="button" onClick={close} className="btn-ghost h-8 px-2 text-xs" autoFocus>
            Close
            <span aria-hidden="true" className="text-muted">
              Esc
            </span>
          </button>
        </div>
        <img src={src} alt="" width={1200} height={750} className="block w-full" />
      </dialog>
    </>
  )
}
