import { profile } from '../data/profile'
import { DownloadCvButton } from './ui/DownloadCvButton'

export function Hero() {
  const linkedinLabel = profile.linkedin.replace(/^https?:\/\/(www\.)?/, '')

  return (
    <section id="top" aria-label="Introduction" className="pb-24 pt-20 md:pb-36 md:pt-32 lg:pt-40">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <p className="eyebrow mb-8 flex items-center gap-3">
          <span className="h-px w-8 bg-accent" aria-hidden="true" />
          {profile.location}
        </p>

        <h1 className="font-display text-display break-words text-ink">
          {profile.firstName}
          <br />
          {profile.lastName}
        </h1>

        <p className="mt-8 text-base font-medium text-ink-soft md:text-lg">
          {profile.roles.map((role, i) => (
            <span key={role} className="whitespace-nowrap">
              {i > 0 ? <span className="mx-2 text-line-strong" aria-hidden="true">·</span> : null}
              {role}
            </span>
          ))}
        </p>

        <p className="mt-6 max-w-2xl text-lede text-muted">{profile.tagline}</p>

        {/* Contact line for the printed version (buttons are hidden on paper) */}
        <p className="print-only mt-4 hidden text-sm text-ink-soft">
          {[profile.email, profile.phone, linkedinLabel, profile.location].filter(Boolean).join(' · ')}
        </p>

        <div className="print-hidden mt-12 flex flex-wrap items-center gap-3">
          <DownloadCvButton variant="primary" />
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary">
            LinkedIn
            <ArrowIcon />
          </a>
          <a href="#contact" className="btn-ghost">
            Contact
          </a>
        </div>
      </div>
    </section>
  )
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 12 12 4M6 4h6v6" />
    </svg>
  )
}
