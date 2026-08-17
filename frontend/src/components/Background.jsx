import stage1 from '../assets/bg-stage-1.webp'
import stage2 from '../assets/bg-stage-2.webp'

const BACKGROUND_IMAGES = [
  {
    id: 'bg-stage-1',
    alt: 'Rittik Pati - Portrait 1',
    opacity: 0.7,
    src: stage1,
  },
  {
    id: 'bg-stage-2',
    alt: 'Rittik Pati - Portrait 2',
    opacity: 0,
    src: stage2,
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