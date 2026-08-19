const CONTACT_ROWS = [
  {
    label: 'Email',
    value: 'rittikpati434@gmail.com',
    href: 'mailto:rittikpati434@gmail.com',
    icon: 'mail',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/rittik-pati-229389290',
    href: 'https://www.linkedin.com/in/rittik-pati-229389290/',
    icon: 'work',
  },
  {
    label: 'Instagram',
    value: '@rittikpati',
    href: 'https://www.instagram.com/rittikpati/',
    icon: 'photo_camera',
  },
]

export default function Contact() {
  return (
    <section
      className="reveal py-section-gap px-gutter max-w-container-max mx-auto border-t border-white/10 in-view"
      id="contact"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        <div className="text-left">
          <span className="eyebrow mb-6 block">Let's Connect</span>
          <h2 className="font-headline-md text-headline-md md:text-3xl text-on-surface mb-6">
            Get in Touch
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-8 max-w-xl">
            Passionate about building production-grade AI systems — always up for meaningful
            collaborations and challenging engineering problems.
          </p>
          <a className="btn-primary" href="mailto:rittikpati434@gmail.com">
            <span className="material-symbols-outlined">mail</span> rittikpati434@gmail.com
          </a>
        </div>
        <div className="contact-panel">
          <div className="py-1">
            {CONTACT_ROWS.map((row) => (
              <div key={row.label} className="hero-row">
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-on-surface-variant">
                    {row.icon}
                  </span>
                  <span className="hero-row-key">{row.label}</span>
                </span>
                <a
                  className="hero-row-val hover:text-primary transition-colors"
                  href={row.href}
                  rel={row.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  target={row.href.startsWith('http') ? '_blank' : undefined}
                >
                  {row.value}
                </a>
              </div>
            ))}
          </div>
          <div className="border-t border-white/10 px-4 py-4 flex flex-wrap items-center justify-between gap-3">
            <span className="flex items-center gap-2 font-code-sm text-code-sm text-on-surface-variant">
              <span className="status-dot" />
              Open to collaborations & internships
            </span>
            <span className="font-label-caps text-label-caps text-on-surface-variant">
              Response within 24h
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}