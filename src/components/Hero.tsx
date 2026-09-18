import { profile } from '../data/profile'
import { DownloadCvButton } from './ui/DownloadCvButton'

export function Hero() {
  const linkedinLabel = profile.linkedin.replace(/^https?:\/\/(www\.)?/, '')
  const roles = [...profile.roles, ...profile.roles]

  return (
    <section
      id="top"
      aria-label="Introduction"
      className="relative isolate -mt-[4.25rem] overflow-hidden bg-night pt-[4.25rem] text-paper"
    >
      <div className="hero-grid pointer-events-none absolute inset-0 print-hidden" aria-hidden="true" />
      <div
        className="hero-blob print-hidden pointer-events-none absolute -right-24 top-8 h-[28rem] w-[28rem] rounded-full bg-accent/40 blur-[90px] md:h-[36rem] md:w-[36rem]"
        aria-hidden="true"
      />
      <div
        className="print-hidden pointer-events-none absolute -bottom-24 left-[-8rem] h-[22rem] w-[22rem] rounded-full bg-gold/25 blur-[80px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-20 md:px-10 md:pb-20 md:pt-28 lg:pt-32">
        <div className="flex flex-wrap items-center gap-3">
          <p className="inline-flex items-center gap-2 rounded-full border border-paper/15 bg-paper/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-fog">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
            {profile.location}
          </p>
          <p className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-surface">
            Open to roles
          </p>
        </div>

        <h1 className="mt-10 font-display text-display text-paper">
          {profile.firstName}
          <br />
          <span className="text-accent">{profile.lastName}</span>
        </h1>

        <p className="mt-8 max-w-xl text-lede text-fog">{profile.tagline}</p>

        <p className="print-only mt-4 hidden text-sm text-ink-soft">
          {[profile.email, profile.phone, linkedinLabel, profile.location].filter(Boolean).join(' · ')}
        </p>

        <div className="print-hidden mt-12 flex flex-wrap items-center gap-3">
          <DownloadCvButton variant="primary" className="btn-on-dark" />
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary btn-on-dark"
          >
            LinkedIn
            <ArrowIcon />
          </a>
          <a href="#contact" className="btn-secondary btn-on-dark">
            Contact
          </a>
        </div>
      </div>

      <div className="print-hidden marquee" aria-hidden="true">
        <div className="marquee-track py-4">
          {roles.map((role, i) => (
            <span key={`${role}-${i}`} className="flex items-center gap-6 px-6 font-display text-3xl text-paper/90 md:text-5xl">
              {role}
              <span className="text-accent">✦</span>
            </span>
          ))}
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
