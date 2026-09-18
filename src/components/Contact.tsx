import { profile } from '../data/profile'

export function Contact() {
  const fullName = `${profile.firstName} ${profile.lastName}`
  const subject = encodeURIComponent(`Contact from your website — ${fullName}`)
  const mailto = `mailto:${profile.email}?subject=${subject}`
  const linkedinLabel = profile.linkedin.replace(/^https?:\/\/(www\.)?/, '')

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="print-avoid-break relative overflow-hidden bg-night py-24 text-paper md:py-32 lg:py-40"
    >
      <div
        className="print-hidden pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-accent/35 blur-[90px]"
        aria-hidden="true"
      />
      <div
        className="print-hidden pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-gold/20 blur-[80px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <p className="eyebrow mb-6 text-gold" aria-hidden="true">
          08 — Contact
        </p>
        <h2 id="contact-title" className="font-display text-h2 max-w-3xl text-paper">
          Let’s build better digital experiences.
        </h2>

        <div className="mt-14 grid gap-10 md:grid-cols-12">
          <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2 md:col-span-8">
            <div>
              <dt className="eyebrow mb-2 text-fog">Email</dt>
              <dd>
                <a href={`mailto:${profile.email}`} className="text-lg text-paper underline decoration-paper/25 underline-offset-4 transition-colors hover:text-gold hover:decoration-gold">
                  {profile.email}
                </a>
              </dd>
            </div>
            {profile.phone ? (
              <div>
                <dt className="eyebrow mb-2 text-fog">Phone</dt>
                <dd>
                  <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="text-lg text-paper underline decoration-paper/25 underline-offset-4 transition-colors hover:text-gold hover:decoration-gold">
                    {profile.phone}
                  </a>
                </dd>
              </div>
            ) : null}
            <div>
              <dt className="eyebrow mb-2 text-fog">LinkedIn</dt>
              <dd>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-paper underline decoration-paper/25 underline-offset-4 transition-colors hover:text-gold hover:decoration-gold"
                >
                  {linkedinLabel}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow mb-2 text-fog">Location</dt>
              <dd className="text-lg text-paper">{profile.location}</dd>
            </div>
          </dl>

          <div className="print-hidden md:col-span-4 md:justify-self-end md:self-end">
            <a href={mailto} className="btn-primary btn-on-dark">
              Send an email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
