import { profile } from '../data/profile'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-paper/20 bg-night text-paper/50">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-xs tracking-[0.12em] uppercase sm:flex-row sm:items-center sm:justify-between md:px-10">
        <p>
          © {year} {profile.firstName} {profile.lastName}
        </p>
        <p className="print-hidden">
          <a href="#top" className="text-paper underline decoration-paper/30 underline-offset-4 hover:decoration-paper">
            Index
          </a>
        </p>
      </div>
    </footer>
  )
}
