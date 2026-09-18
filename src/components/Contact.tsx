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
      className="print-avoid-break border-t border-line bg-surface py-24 md:py-32 lg:py-40"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <p className="eyebrow mb-6 text-accent" aria-hidden="true">
          08
        </p>
        <h2 id="contact-title" className="font-display text-h2 max-w-3xl text-ink md:text-[3.5rem]">
          Let’s build better digital experiences.
        </h2>

        <div className="mt-14 grid gap-10 md:grid-cols-12">
          <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2 md:col-span-8">
            <div>
              <dt className="eyebrow mb-2">Email</dt>
              <dd>
                <a href={`mailto:${profile.email}`} className="link-underline text-base">
                  {profile.email}
                </a>
              </dd>
            </div>
            {profile.phone ? (
              <div>
                <dt className="eyebrow mb-2">Phone</dt>
                <dd>
                  <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="link-underline text-base">
                    {profile.phone}
                  </a>
                </dd>
              </div>
            ) : null}
            <div>
              <dt className="eyebrow mb-2">LinkedIn</dt>
              <dd>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-base"
                >
                  {linkedinLabel}
                </a>
              </dd>
            </div>
            <div>
              <dt className="eyebrow mb-2">Location</dt>
              <dd className="text-base text-ink">{profile.location}</dd>
            </div>
          </dl>

          <div className="print-hidden md:col-span-4 md:justify-self-end">
            <a href={mailto} className="btn-primary">
              Send an email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
