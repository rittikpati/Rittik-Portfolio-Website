import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.querySelector(l.href)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="bg-surface/70 backdrop-blur-xl docked full-width top-0 sticky z-50 border-b border-white/10 reveal in-view">
      <div className="flex justify-between items-center h-16 max-w-container-max mx-auto px-gutter">
        <a
          className="font-headline-md text-headline-md font-bold text-primary tracking-tight hover:text-primary-container transition-colors duration-300"
          href="#hero"
        >
          Rittik Pati
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                className={`nav-link font-body-md text-body-md ${active === link.href ? 'active' : ''}`}
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <a
            className="btn-primary btn-sm hidden md:inline-flex"
            href="/Rittik_Pati_AI_Engineer_Resume.pdf"
            rel="noopener noreferrer"
            target="_blank"
          >
            Resume
          </a>
          <button
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            className="md:hidden text-primary p-2 hover:text-primary-container transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>
      <div className={`nav-panel md:hidden border-b border-white/10 bg-surface/90 backdrop-blur-xl ${menuOpen ? 'open' : ''}`}>
        <div className="px-gutter py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              className={`nav-link font-body-md text-body-md py-2.5 px-2 rounded-md hover:bg-surface-container/60 ${active === link.href ? 'active' : ''}`}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            className="btn-primary btn-sm mt-2"
            href="/Rittik_Pati_AI_Engineer_Resume.pdf"
            onClick={() => setMenuOpen(false)}
            rel="noopener noreferrer"
            target="_blank"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  )
}