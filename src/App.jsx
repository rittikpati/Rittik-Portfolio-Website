import { useEffect } from 'react'
import Background from './components/Background.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Research from './components/Research.jsx'
import Certifications from './components/Certifications.jsx'
import Leadership from './components/Leadership.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import HelpDesk from './components/HelpDesk.jsx'

const MAX_BG_OPACITY = 0.7

function setupScrollEffects() {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  )

  document.querySelectorAll('.reveal').forEach((el) => {
    revealObserver.observe(el)
  })

  const bg1 = document.getElementById('bg-stage-1')
  const bg2 = document.getElementById('bg-stage-2')

  const onScroll = () => {
    const scrollY = window.scrollY
    const maxScroll =
      Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      ) - window.innerHeight

    if (maxScroll <= 0) return

    const scrollPercent = Math.min(Math.max(scrollY / maxScroll, 0), 1)

    if (scrollPercent < 0.5) {
      bg1.style.opacity = MAX_BG_OPACITY
      bg2.style.opacity = 0
    } else {
      const localP = (scrollPercent - 0.5) / 0.5
      bg1.style.opacity = MAX_BG_OPACITY * (1 - localP)
      bg2.style.opacity = MAX_BG_OPACITY * localP
    }
  }

  window.addEventListener('scroll', onScroll)
  window.dispatchEvent(new Event('scroll'))

  const restContent = document.getElementById('rest-of-content')
  let contentRevealed = false

  function revealRestOfContent() {
    if (!contentRevealed) {
      contentRevealed = true
      restContent.classList.remove('content-hidden')
      restContent.classList.add('content-visible')
    }
  }

  const onWheel = (e) => {
    if (e.deltaY > 0) revealRestOfContent()
  }
  const onWindowScroll = () => {
    if (window.scrollY > 20) revealRestOfContent()
  }

  window.addEventListener('wheel', onWheel)
  window.addEventListener('scroll', onWindowScroll)

  let touchstartY = 0
  const onTouchStart = (e) => {
    touchstartY = e.touches[0].clientY
  }
  const onTouchMove = (e) => {
    if (touchstartY - e.touches[0].clientY > 20) revealRestOfContent()
  }

  window.addEventListener('touchstart', onTouchStart)
  window.addEventListener('touchmove', onTouchMove)

  return () => {
    revealObserver.disconnect()
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('wheel', onWheel)
    window.removeEventListener('scroll', onWindowScroll)
    window.removeEventListener('touchstart', onTouchStart)
    window.removeEventListener('touchmove', onTouchMove)
  }
}

export default function App() {
  useEffect(() => {
    return setupScrollEffects()
  }, [])

  return (
    <>
      <Background />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <div className="content-hidden" id="rest-of-content">
          <Projects />
          <Skills />
          <Experience />
          <Research />
          <Certifications />
          <Leadership />
          <Contact />
        </div>
      </main>
      <Footer />
      <HelpDesk />
    </>
  )
}