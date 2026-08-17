import { useState } from 'react'

const NAV_LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-surface/60 backdrop-blur-xl docked full-width top-0 sticky z-50 border-b border-white/5 reveal in-view">
      <div className="flex justify-between items-center h-20 max-w-container-max mx-auto px-gutter">
        <div className="font-headline-md text-headline-md font-bold text-primary tracking-tight hover:text-primary-container transition-all duration-300">
          Rittik Pati
        </div>
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                className="text-on-surface hover:text-primary transition-colors font-body-md text-body-md transition-all duration-300"
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <a
            className="hidden md:inline-flex items-center justify-center px-4 py-2 bg-primary/90 hover:bg-primary backdrop-blur-md text-on-primary rounded font-body-md text-body-md transition-colors font-medium border border-primary/20"
            href="/Rittik_Pati_AI_Engineer_Resume.pdf"
            rel="noopener noreferrer"
            target="_blank"
          >
            Resume
          </a>
          <button
            aria-label="Toggle navigation menu"
            className="md:hidden text-primary p-2 hover:text-primary-container transition-colors"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className="material-symbols-outlined">{menuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden border-t border-white/5 bg-surface/90 backdrop-blur-xl">
          <div className="px-gutter py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                className="text-on-surface hover:text-primary transition-colors font-body-md text-body-md py-2.5"
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              className="mt-2 inline-flex items-center justify-center px-4 py-2.5 bg-primary/90 hover:bg-primary text-on-primary rounded font-body-md text-body-md font-medium border border-primary/20 transition-colors"
              href="/Rittik_Pati_AI_Engineer_Resume.pdf"
              onClick={() => setMenuOpen(false)}
              rel="noopener noreferrer"
              target="_blank"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}