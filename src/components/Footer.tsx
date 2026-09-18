import { profile } from '../data/profile'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-paper/10 bg-night text-fog">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm sm:flex-row sm:items-center sm:justify-between md:px-10">
        <p>
          © {year} {profile.firstName} {profile.lastName}
        </p>
        <p className="print-hidden">
          Designed and built with React, TypeScript and Tailwind CSS ·{' '}
          <a href="#top" className="text-paper underline decoration-paper/25 underline-offset-4 hover:text-gold hover:decoration-gold">
            Back to top
          </a>
        </p>
      </div>
    </footer>
  )
}
