export default function Contact() {
  return (
    <section
      className="reveal py-section-gap px-gutter max-w-container-max mx-auto border-t border-white/5 text-center in-view"
      id="contact"
    >
      <div className="max-w-2xl mx-auto glass-card rounded-2xl p-8 sm:p-12 border border-white/10 relative overflow-hidden reveal in-view">
        <div className="relative z-10">
          <h2 className="font-headline-md text-headline-md text-on-surface mb-stack-md">
            Get in Touch
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-stack-lg">
            Passionate about building production-grade AI systems — always up for meaningful
            collaborations and challenging engineering problems.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-primary/90 hover:bg-primary backdrop-blur-md text-on-primary rounded font-body-md text-body-md transition-colors font-medium border border-primary/20"
              href="mailto:rittikpati434@gmail.com"
            >
              <span className="material-symbols-outlined">mail</span> rittikpati434@gmail.com
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-surface/40 backdrop-blur-md border border-primary/20 text-primary rounded font-body-md text-body-md hover:bg-surface-bright/50 transition-colors"
              href="https://www.linkedin.com/in/rittik-pati-229389290/"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn Profile
            </a>
            <a
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-surface/40 backdrop-blur-md border border-primary/20 text-primary rounded font-body-md text-body-md hover:bg-surface-bright/50 transition-colors"
              href="https://www.instagram.com/rittikpati/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined">photo_camera</span> Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}