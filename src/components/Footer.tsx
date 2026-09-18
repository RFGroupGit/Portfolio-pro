import { profile } from '../data/profile'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between md:px-10">
        <p>
          © {year} {profile.firstName} {profile.lastName}
        </p>
        <p className="print-hidden">
          Designed and built with React, TypeScript and Tailwind CSS ·{' '}
          <a href="#top" className="link-underline">
            Back to top
          </a>
        </p>
      </div>
    </footer>
  )
}
