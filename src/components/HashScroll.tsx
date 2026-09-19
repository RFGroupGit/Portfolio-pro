import { useLayoutEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Scroll to top on route change, or to the hash target when present
 * (e.g. navigating from a case study back to /#projects).
 * Instant on pathname change so CSS `scroll-behavior: smooth` cannot
 * leave the new page mid-scroll at the previous offset.
 */
export function HashScroll() {
  const { pathname, hash } = useLocation()
  const prevPath = useRef(pathname)

  useLayoutEffect(() => {
    const pathChanged = prevPath.current !== pathname
    prevPath.current = pathname

    if (hash) {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (el) {
        el.scrollIntoView({ behavior: pathChanged ? 'instant' : 'smooth' })
        return
      }
    }

    if (pathChanged) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }
  }, [pathname, hash])

  return null
}
