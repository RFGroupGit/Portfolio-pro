import { profile } from '../data/profile'

export function Contact() {
  const fullName = `${profile.firstName} ${profile.lastName}`
  const subject = encodeURIComponent(`Contact from your website — ${fullName}`)
  const mailto = `mailto:${profile.email}?subject=${subject}`

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="print-avoid-break relative overflow-hidden bg-night py-24 text-paper md:py-32 lg:py-40"
    >
      <span
        aria-hidden="true"
        className="print-hidden pointer-events-none absolute -top-10 right-0 font-sans text-[28vw] leading-none font-medium text-paper/5 select-none"
      >
        08
      </span>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <p className="eyebrow mb-6 text-paper/45">08</p>
        <h2 id="contact-title" className="font-display text-h2 max-w-4xl text-paper">
          Let’s talk.
        </h2>
        <a
          href={mailto}
          className="mt-10 block font-display text-2xl leading-tight font-medium tracking-tight text-paper underline decoration-paper/25 underline-offset-8 transition-colors hover:decoration-paper md:text-4xl lg:text-5xl"
        >
          {profile.email}
        </a>

        <dl className="mt-16 grid gap-8 border-t border-paper/20 pt-10 sm:grid-cols-3">
          {profile.phone ? (
            <div>
              <dt className="eyebrow mb-2 text-paper/45">Phone</dt>
              <dd>
                <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="text-paper">
                  {profile.phone}
                </a>
              </dd>
            </div>
          ) : null}
          <div>
            <dt className="eyebrow mb-2 text-paper/45">LinkedIn</dt>
            <dd>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-paper">
                {fullName}
              </a>
            </dd>
          </div>
          <div>
            <dt className="eyebrow mb-2 text-paper/45">Location</dt>
            <dd className="text-paper">{profile.location}</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
