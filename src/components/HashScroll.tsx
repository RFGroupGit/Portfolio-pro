import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Scroll to top on route change, or to the hash target when present
 * (e.g. navigating from a case study back to /#projects).
 */
export function HashScroll() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = decodeURIComponent(hash.slice(1))
      const frame = requestAnimationFrame(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView()
        else window.scrollTo(0, 0)
      })
      return () => cancelAnimationFrame(frame)
    }

    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
