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
      className="reveal py-section-gap px-gutter max-w-container-max mx-auto border-t border-white/5 in-view"
      id="leadership"
    >
      <div className="mb-stack-lg reveal in-view">
        <h2 className="font-headline-md text-headline-md text-primary mb-stack-sm drop-shadow-sm">
          Technical Leadership
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant drop-shadow-sm">
          Mentorship, community building, and open-source.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {LEADERSHIP_ITEMS.map((item) => (
          <div key={item.title} className="glass-card rounded-xl p-6 flex flex-col reveal in-view">
            <div className="flex items-center gap-3 mb-stack-md">
              <span className="material-symbols-outlined text-surface-tint text-3xl">
                {item.icon}
              </span>
              <h3 className="font-body-lg text-body-lg font-semibold text-on-surface">
                {item.title}
              </h3>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}