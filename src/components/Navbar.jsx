const NAV_LINKS = [
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
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
          <button className="md:hidden text-primary p-2">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </div>
      </div>
    </nav>
  )
}