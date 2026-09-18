import { useRef } from 'react'

interface ImageLightboxProps {
  src: string
  alt: string
  caption?: string
  className?: string
}

export function ImageLightbox({ src, alt, caption, className = '' }: ImageLightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  const open = () => dialogRef.current?.showModal()
  const close = () => dialogRef.current?.close()

  return (
    <>
      <button
        type="button"
        onClick={open}
        className="group block w-full cursor-zoom-in bg-transparent p-0 text-left print:cursor-default"
        aria-label={`Enlarge visual: ${alt}`}
      >
        <img
          src={src}
          alt={alt}
          loading="eager"
          decoding="async"
          width={1200}
          height={750}
          className={`aspect-[16/10] w-full border border-ink/15 object-cover grayscale transition duration-500 group-hover:grayscale-0 ${className}`}
        />
      </button>

      <dialog
        ref={dialogRef}
        className="print-hidden m-auto w-[min(96vw,1200px)] border border-ink bg-paper p-0 text-ink shadow-none backdrop:bg-ink/80"
        aria-label={alt}
        onClick={(e) => {
          if (e.target === e.currentTarget) close()
        }}
      >
        <div className="flex items-center justify-between gap-4 border-b border-ink/15 px-4 py-3">
          <p className="truncate font-mono text-[11px] tracking-[0.12em] uppercase text-muted">{caption ?? alt}</p>
          <button type="button" onClick={close} className="btn-ghost h-8 text-[10px]" autoFocus>
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
