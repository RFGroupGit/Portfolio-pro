import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { homeSection } from '../data/navigation'

export function NotFoundPage() {
  useEffect(() => {
    document.title = 'Page not found — Robin Fremy'
    return () => {
      document.title = 'Robin Fremy — UX Designer & Digital Product Professional'
    }
  }, [])

  return (
    <main id="main" className="bg-paper">
      <div className="mx-auto flex min-h-[70svh] max-w-7xl flex-col justify-end px-6 py-24 md:px-10 md:py-32">
        <p className="eyebrow mb-6">404</p>
        <h1 className="font-display text-h2 text-ink">This page is not in the index.</h1>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-soft">
          The address may have changed, or the case study does not exist. The selected projects are on the homepage.
        </p>
        <p className="mt-10">
          <Link to={homeSection('projects')} className="btn-primary">
            Selected projects
          </Link>
        </p>
      </div>
    </main>
  )
}
