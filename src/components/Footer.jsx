const FOOTER_LINKS = [
  { label: 'GitHub', href: 'https://github.com/rittikpati' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rittik-pati-229389290/' },
  { label: 'Email', href: 'mailto:rittikpati434@gmail.com' },
]

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest/80 backdrop-blur-md w-full py-stack-lg border-t border-white/5 reveal in-view">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-container-max mx-auto px-gutter gap-stack-md">
        <div className="font-label-caps text-label-caps text-on-surface-variant">
          © 2024 Rittik Pati. Engineered for Performance.
        </div>
        <ul className="flex items-center gap-6">
          {FOOTER_LINKS.map((link) => (
            <li key={link.label}>
              <a
                className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md"
                href={link.href}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                target={link.href.startsWith('http') ? '_blank' : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}