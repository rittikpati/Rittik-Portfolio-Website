const SIMULATIONS = [
  {
    company: 'Mastercard',
    logo: '/logos/mastercard.png',
    program: 'Cybersecurity Job Simulation',
    date: 'July 2026',
  },
  {
    company: 'Tata Consultancy Services',
    logo: '/logos/tata.png',
    program: 'Partnering with AI in the Workplace Job Simulation',
    date: 'July 2026',
  },
  {
    company: 'DATACOM',
    logo: '/logos/datacom.png',
    program: 'Automation AI Accelerator: From Co-pilot to Autonomous Agent',
    date: 'July 2026',
  },
  {
    company: 'BCG X',
    logo: '/logos/bcgx.png',
    program: 'GenAI Job Simulation',
    date: 'July 2026',
  },
  {
    company: 'Skyscanner',
    logo: '/logos/skyscanner.png',
    program: 'Software Engineering Job Simulation',
    date: 'July 2026',
  },
  {
    company: 'Goldman Sachs',
    logo: '/logos/goldmansachs.png',
    program: 'Operations Job Simulation',
    date: 'July 2026',
  },
  {
    company: 'Walmart Global Tech',
    logo: '/logos/walmart.png',
    program: 'Advanced Software Engineering Job Simulation',
    date: 'July 2026',
  },
  {
    company: 'Commonwealth Bank',
    logo: '/logos/commbank.png',
    program: 'GenAI Powered Data Analytics & Software Engineering Job Simulations',
    date: 'July 2026',
  },
]

export default function JobSimulations() {
  return (
    <section
      className="reveal py-section-gap px-gutter max-w-container-max mx-auto border-t border-white/5 in-view"
      id="job-simulations"
    >
      <div className="mb-stack-lg reveal in-view">
        <h2 className="font-headline-md text-headline-md text-primary mb-stack-sm drop-shadow-sm">
          Job Simulations
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant drop-shadow-sm">
          Hands-on Forage job simulations completed with global companies.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {SIMULATIONS.map((sim) => (
          <div key={sim.company} className="glass-card rounded-xl p-5 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <img
                alt={`${sim.company} logo`}
                className="w-10 h-10 object-contain rounded-md bg-white p-1.5 shrink-0"
                loading="lazy"
                src={sim.logo}
              />
              <h3 className="font-body-md text-body-md font-semibold text-on-surface leading-tight">
                {sim.company}
              </h3>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant leading-snug">
              {sim.program}
            </p>
            <div className="flex items-center gap-2 mt-auto">
              <span className="text-code-sm text-on-surface-variant">{sim.date}</span>
              <a
                className="tech-tag self-start ml-auto rounded px-2 py-1 font-code-sm text-[12px] inline-flex items-center gap-1 hover:bg-primary/10 transition-colors"
                href="/Forage_Job_Simulations.pdf"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[14px]">description</span>
                View Certificate
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}