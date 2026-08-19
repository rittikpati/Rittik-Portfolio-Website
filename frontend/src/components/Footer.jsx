const FOOTER_LINKS = [
  { label: 'GitHub', href: 'https://github.com/rittikpati' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rittik-pati-229389290/' },
  { label: 'Instagram', href: 'https://www.instagram.com/rittikpati/' },
  { label: 'Email', href: 'mailto:rittikpati434@gmail.com' },
]

export default function Footer() {
  return (
    <footer className="bg-surface/60 backdrop-blur-md w-full py-stack-lg border-t border-white/10 reveal in-view">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto px-gutter gap-stack-md">
        <div className="font-label-caps text-label-caps text-on-surface-variant">
          © {new Date().getFullYear()} Rittik Pati. Engineered for Performance.
        </div>
        <ul className="flex items-center justify-center flex-wrap gap-4 md:gap-6">
          {FOOTER_LINKS.map((link) => (
            <li key={link.label}>
              <a
                className="footer-link font-body-md text-body-md"
                href={link.href}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                target={link.href.startsWith('http') ? '_blank' : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          aria-label="Back to top"
          className="back-to-top"
          href="#hero"
          rel="noopener noreferrer"
        >
          <span className="material-symbols-outlined text-[18px]">arrow_upward</span>
        </a>
      </div>
    </footer>
  )
}