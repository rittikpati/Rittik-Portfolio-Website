const LEADERSHIP_ITEMS = [
  {
    icon: 'groups',
    title: 'Engineering Mentorship',
    description:
      "Lead mentor for the university's AI student group, guiding over 50 students through hands-on deep learning projects. Organized weekly code reviews and architecture deep-dives.",
  },
  {
    icon: 'public',
    title: 'Open Source Contributions',
    description:
      'Active contributor to several prominent open-source machine learning libraries. Focused on optimizing data loading pipelines and improving documentation for edge-case implementations.',
  },
]

export default function Leadership() {
  return (
    <section
      className="reveal py-section-gap px-gutter max-w-container-max mx-auto border-t border-white/10 in-view"
      id="leadership"
    >
      <div className="section-head">
        <div>
          <span className="eyebrow mb-4 block">Community & Impact</span>
          <h2 className="font-headline-md text-headline-md md:text-3xl text-primary">
            Technical Leadership
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mt-2">
            Mentorship, community building, and open-source.
          </p>
        </div>
        <span className="section-index">06 — LEADERSHIP</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {LEADERSHIP_ITEMS.map((item) => (
          <div key={item.title} className="lead-card">
            <div className="flex items-center gap-3">
              <span className="ach-icon material-symbols-outlined text-[22px]">{item.icon}</span>
              <h3 className="font-body-lg text-body-lg font-semibold text-on-surface">
                {item.title}
              </h3>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}