const BACKGROUND_IMAGES = [
  {
    id: 'bg-stage-1',
    alt: 'Stage 1 - SRK-style welcome',
    opacity: 0.5,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDI_7iGB0IUh_5SA_lUPx6xr8RcY2n6hCmvX6i0Pr3MBLnDoM88SXBTMu6fLufRF07NNVlk2WO7TyreWsLt9MWeJNLLqp6OyPfbAdjXSbxgujPt_vvjzyi0UKdfNK1urLt9ynkaSElxBP-TKV3cWCDxDgztfBLEEOomKxoCyRwfkERxQOl6kdWNANn1UymbPu6EIECBU2clhULmLV4EmykXI0yG72_oo44NC5Gs_3xLCoJlWUtaJ69C5vLAyx3QQ9AuO2M',
  },
  {
    id: 'bg-stage-2',
    alt: 'Stage 2 - Transitioning to sit',
    opacity: 0,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBecZ-Ttd6GASG4EamaqHwKkLB6o2SSfWLI2p_fZi0uAP3BC4W4UvEr9WHWrux6DvaSznwp8UgYoramJqXnSOMvzxJiHICiNwoVnWXVAeCyP50wrln_-ZH19sb9qDGEGA1wfZvSuxQ8XamWIrl7IWLMjeFOX0U6OLIRCPbY1u0aYP1ebb-8rVBN3aPe8MhjMp3x5BKgVHkOVddU5Fi_AAVpTn6g_6JRUAR4GLGNeU1Jsg9R1f7kXzo-6-yYu8XBA9WRKjA',
  },
  {
    id: 'bg-stage-3',
    alt: 'Stage 3 - Stylish seated pose',
    opacity: 0,
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuASAg4K83KlfK0tt9GmKFLM_sY6oneMbrChGklHGsLycjODfEoj2KV1kRuPfqcCWm5yNMVzUZzjwRn4lbsaVlyjuUbiccnWdyydgORCIWo7psSw_4jKbK3iPWZncArOcGl_q1HT1eLCtP7CkZlOuoUPCynDDavh5tK1LGlSMTs7cBijZQhBpOMJypsT-s_1f2wxJAV2_RU0PLOdWWHlQa0ATRTS7vC0Rinfduc7eYCiXxnxXfomhxBShaqpAmsWZ5fKf6g',
  },
]

export default function Background() {
  return (
    <>
      <div className="bg-container">
        {BACKGROUND_IMAGES.map((img) => (
          <img
            key={img.id}
            alt={img.alt}
            className="bg-image"
            id={img.id}
            src={img.src}
            style={{ opacity: img.opacity }}
          />
        ))}
      </div>
      <div
        className="dim-overlay"
        style={{ background: 'linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3))' }}
      />
    </>
  )
}