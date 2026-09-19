import { Link } from 'react-router-dom'
import { homeSection } from '../data/navigation'
import { profile } from '../data/profile'
import { DownloadCvButton } from './ui/DownloadCvButton'

export function Hero() {
  const linkedinLabel = profile.linkedin.replace(/^https?:\/\/(www\.)?/, '')

  return (
    <section id="top" aria-label="Introduction" className="relative bg-paper">
      <div className="mx-auto grid min-h-[calc(100svh-3.5rem)] max-w-7xl grid-cols-1 items-end gap-12 px-6 pt-16 pb-12 md:px-10 md:pt-24 md:pb-16 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-8">
          <p className="eyebrow mb-8">Portfolio / CV</p>
          <h1 className="font-display text-display font-medium text-ink">
            <span className="text-outline">{profile.firstName}</span>
            <br />
            {profile.lastName}
          </h1>
          <p className="print-only mt-4 hidden text-sm text-ink-soft">
            {[profile.email, profile.phone, linkedinLabel, profile.location].filter(Boolean).join(' · ')}
          </p>
        </div>

        <div className="flex flex-col justify-end lg:col-span-4 lg:pb-3">
          <ol className="space-y-2 border-t border-ink pt-5">
            {profile.roles.map((role, i) => (
              <li key={role} className="flex items-baseline justify-between gap-4">
                <span className="font-mono text-[10px] tabular-nums text-muted">{String(i + 1).padStart(2, '0')}</span>
                <span className="text-sm tracking-tight text-ink">{role}</span>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-sm leading-relaxed text-ink-soft">{profile.tagline}</p>
          <p className="mt-6 font-mono text-[10px] tracking-[0.18em] uppercase text-muted">{profile.location}</p>

          <div className="print-hidden mt-8 flex flex-wrap items-center gap-3">
            <DownloadCvButton variant="primary" />
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              LinkedIn
            </a>
            <Link to={homeSection('contact')} className="btn-ghost">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
