import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { IndexRail } from './IndexRail'
import { Navbar } from './Navbar'

export function SiteChrome() {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-[90] bg-ink px-4 py-2 text-sm text-paper focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <IndexRail />
      <Navbar />
      <div className="lg:pl-16">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}
