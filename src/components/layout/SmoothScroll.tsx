import { useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Lenis from 'lenis'

interface SmoothScrollProps {
  children: React.ReactNode
}

export const SmoothScroll = ({ children }: SmoothScrollProps) => {
  const location = useLocation()
  const navigate = useNavigate()
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // Native browser scroll restoration preserves exact reload position
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'auto'
    }

    // Ultra-fluid, effortless Lenis momentum scrolling
    const lenis = new Lenis({
      lerp: 0.08,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      infinite: false,
    })

    lenisRef.current = lenis

    interface LenisWindow extends Window {
      __lenis?: Lenis
    }
    ;(window as LenisWindow).__lenis = lenis

    let rafId: number
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    // Anchor click handler (About, Skills, Projects, Contact)
    // Instantly cuts to the target section without scrolling through intermediate sections
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      const anchor = target?.closest('a')
      if (!anchor) return

      const href = anchor.getAttribute('href')
      if (!href) return

      const hash = href.startsWith('/#') ? href.slice(2) : href.startsWith('#') ? href.slice(1) : null
      if (hash && hash.length > 0) {
        e.preventDefault()
        if (window.location.pathname === '/' || window.location.pathname === '') {
          const el = document.getElementById(hash)
          if (el) {
            lenis.resize()
            lenis.scrollTo(el, { offset: 0, immediate: true })
            window.scrollTo(0, el.offsetTop)
            window.history.replaceState(null, '', window.location.pathname)
          }
        } else {
          sessionStorage.setItem('portfolio_target_section', hash)
          navigate('/')
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)

    return () => {
      document.removeEventListener('click', handleAnchorClick)
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [navigate])

  // Handle snapping when navigating to Home from another page
  useEffect(() => {
    if (location.pathname === '/' || location.pathname === '') {
      const targetSection = sessionStorage.getItem('portfolio_target_section') ||
        (sessionStorage.getItem('portfolio_return_to_projects') === 'true' ? 'projects' : null)

      if (targetSection) {
        sessionStorage.removeItem('portfolio_target_section')
        sessionStorage.removeItem('portfolio_return_to_projects')

        const snap = () => {
          const el = document.getElementById(targetSection)
          if (el) {
            if (lenisRef.current) {
              lenisRef.current.resize()
              lenisRef.current.scrollTo(el, { offset: 0, immediate: true })
            }
            window.scrollTo(0, el.offsetTop)
          }
        }

        snap()
        requestAnimationFrame(snap)
        setTimeout(snap, 20)
        setTimeout(snap, 60)
        setTimeout(snap, 120)
        setTimeout(snap, 250)
      }
    }
  }, [location.pathname])

  return <>{children}</>
}

export default SmoothScroll
