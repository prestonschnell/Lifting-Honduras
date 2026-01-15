import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    const startY = window.scrollY
    const durationMs = 800
    let rafId = 0
    let startTime = 0

    const easeInOutCubic = (t) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

    const step = (timestamp) => {
      if (!startTime) {
        startTime = timestamp
      }
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / durationMs, 1)
      const eased = easeInOutCubic(progress)

      window.scrollTo(0, startY * (1 - eased))

      if (progress < 1) {
        rafId = window.requestAnimationFrame(step)
      }
    }

    rafId = window.requestAnimationFrame(step)

    return () => window.cancelAnimationFrame(rafId)
  }, [pathname])

  return null
}

export default ScrollToTop
