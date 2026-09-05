import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import { Menu, X, Sun, Moon, ArrowUpRight, ArrowRight, Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import Logo from '../common/Logo'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme')
    const initialDark = saved === 'dark'
    if (initialDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    return initialDark
  })

  const toggleTheme = (e?: React.MouseEvent) => {
    const nextDark = !isDark

    const applyTheme = () => {
      setIsDark(nextDark)
      if (nextDark) {
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', 'dark')
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('theme', 'light')
      }
    }

    type DocWithTransition = Document & {
      startViewTransition?: (callback: () => void) => { ready: Promise<void> }
    }
    const doc = document as unknown as DocWithTransition
    if (
      !doc.startViewTransition ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      applyTheme()
      return
    }

    const target = e?.currentTarget as HTMLElement | undefined
    const rect = target?.getBoundingClientRect?.()
    const x = rect ? rect.left + rect.width / 2 : (e?.clientX && e.clientX > 0 ? e.clientX : window.innerWidth / 2)
    const y = rect ? rect.top + rect.height / 2 : (e?.clientY && e.clientY > 0 ? e.clientY : 40)
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    )

    const transition = doc.startViewTransition(() => {
      applyTheme()
    })

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 500,
          easing: 'ease-in-out',
          pseudoElement: '::view-transition-new(root)',
        }
      )
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    interface LenisWindow extends Window {
      __lenis?: { stop: () => void; start: () => void }
    }

    const preventDefault = (e: Event) => e.preventDefault()

    if (isMobileMenuOpen) {
      // Lock CSS scroll on both html and body
      document.documentElement.style.overflow = 'hidden'
      document.body.style.overflow = 'hidden'
      // Block wheel and touch scroll events
      window.addEventListener('wheel', preventDefault, { passive: false })
      window.addEventListener('touchmove', preventDefault, { passive: false })
      // Pause Lenis smooth scroll
      const lenis = (window as LenisWindow).__lenis
      if (lenis) lenis.stop()
    } else {
      // Restore scroll
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
      window.removeEventListener('wheel', preventDefault)
      window.removeEventListener('touchmove', preventDefault)
      // Resume Lenis
      const lenis = (window as LenisWindow).__lenis
      if (lenis) lenis.start()
    }

    return () => {
      // Cleanup on unmount
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
      window.removeEventListener('wheel', preventDefault)
      window.removeEventListener('touchmove', preventDefault)
      const lenis = (window as LenisWindow).__lenis
      if (lenis) lenis.start()
    }
  }, [isMobileMenuOpen])

  const navLinks = [
    { name: 'About', href: '/#about', id: 'about' },
    { name: 'Skills', href: '/#skills', id: 'skills' },
    { name: 'Projects', href: '/#projects', id: 'projects' },
    { name: 'Contact', href: '/#contact', id: 'contact' },
  ]

  // Fluid Motion Variants for effortless stagger entrance and reverse exit
  const menuVariants: Variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.35,
        ease: 'easeOut',
        staggerChildren: 0.12,
        delayChildren: 0.08,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut',
        staggerChildren: 0.08,
        staggerDirection: -1,
        when: 'afterChildren',
      },
    },
  }

  const topBarVariants: Variants = {
    initial: { opacity: 0, x: -70 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
      opacity: 0,
      x: -70,
      transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const itemVariants: Variants = {
    initial: { opacity: 0, x: -70 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
      opacity: 0,
      x: -70,
      transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
    },
  }

  const footerVariants: Variants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: { duration: 0.25, ease: 'easeInOut' },
    },
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ease-out ${
          isScrolled
            ? 'bg-white/95 dark:bg-transparent backdrop-blur-md border-zinc-200/60 dark:border-white/20 py-5 shadow-xs'
            : 'bg-transparent border-transparent pt-7 pb-6 sm:pt-9 sm:pb-7 shadow-none'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 flex items-center justify-between min-h-[58px] lg:min-h-[64px]">
          
          {/* Left: Logo */}
          <div className="flex items-center">
            <Link 
              to="/" 
              onClick={() => {
                sessionStorage.setItem('portfolio_scroll_pos_/', '0')
                sessionStorage.removeItem('portfolio_return_to_projects_y')
                sessionStorage.removeItem('portfolio_return_from_project')
                if (window.location.pathname === '/' || window.location.pathname === '') {
                  window.history.pushState(null, '', '/')
                  window.scrollTo({ top: 0, behavior: 'instant' })
                  if ((window as Window & { __lenis?: { scrollTo: (pos: number, opts: { immediate: boolean }) => void } }).__lenis) {
                    (window as Window & { __lenis?: { scrollTo: (pos: number, opts: { immediate: boolean }) => void } }).__lenis?.scrollTo(0, { immediate: true })
                  }
                }
              }}
              className="flex items-center select-none cursor-default" 
              aria-label="Home"
            >
              <Logo size={68} />
            </Link>
          </div>

          {/* Center: Desktop Nav Links (Spacious, Refined Font Size & Letter Spacing on Laptops & Desktops) */}
          <div className="hidden lg:flex items-center gap-9 xl:gap-14">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-[15px] lg:text-[16px] font-medium tracking-[0.02em] px-2.5 py-1.5 transition-colors flex items-center ${
                  activeSection === link.id
                    ? 'text-zinc-950 dark:text-white font-semibold'
                    : 'text-zinc-600 dark:text-slate-300 hover:text-zinc-950 dark:hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right: Book A Call & Theme Toggle */}
          <div className="hidden lg:flex items-center gap-8 lg:gap-10 xl:gap-12">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-10 h-10 text-zinc-600 dark:text-slate-300 hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer flex items-center justify-center rounded-xl"
            >
              {isDark ? <Sun size={19} /> : <Moon size={19} />}
            </button>

            <a
              href="tel:+2348103383243"
              className="text-[15px] lg:text-[16px] font-medium tracking-[0.02em] text-zinc-950 dark:text-white inline-flex items-center gap-2 hover:opacity-75 transition-opacity px-2 py-1"
            >
              <span>Book A Call</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Mobile & Tablet Toggle (Displays on all mobile & tablet screens below lg to prevent squeezing) */}
          <div className="flex items-center gap-4 sm:gap-6 lg:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="w-9 h-9 text-zinc-700 dark:text-slate-300 hover:text-zinc-950 dark:hover:text-white transition-colors flex items-center justify-center rounded-lg cursor-pointer"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              className="w-11 h-11 text-zinc-950 dark:text-white flex items-center justify-center rounded-xl cursor-pointer relative"
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 90 : 0, opacity: 1 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="flex items-center justify-center"
              >
                {isMobileMenuOpen ? <X size={30} /> : <Menu size={29} />}
              </motion.div>
            </button>
          </div>
        </div>
      </nav>

      {/* Full-Screen Navigation Overlay (Mobile & Tablet) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{ zIndex: 9999 }}
            className="fixed inset-0 bg-white/95 dark:bg-[#0f172a]/80 backdrop-blur-xl text-zinc-950 dark:text-white flex flex-col justify-between h-screen w-full max-w-full overflow-y-auto overflow-x-hidden lg:hidden"
          >
            {/* Top Bar (Animated in cascade) */}
            <motion.div 
              variants={topBarVariants}
              className="px-6 py-6 border-b border-zinc-200 dark:border-white/30 flex items-center justify-between shrink-0"
            >
              <Link 
                to="/" 
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  sessionStorage.setItem('portfolio_scroll_pos_/', '0')
                  sessionStorage.removeItem('portfolio_return_to_projects_y')
                  sessionStorage.removeItem('portfolio_return_from_project')
                  if (window.location.pathname === '/' || window.location.pathname === '') {
                    window.history.pushState(null, '', '/')
                    window.scrollTo({ top: 0, behavior: 'instant' })
                    if ((window as Window & { __lenis?: { scrollTo: (pos: number, opts: { immediate: boolean }) => void } }).__lenis) {
                      (window as Window & { __lenis?: { scrollTo: (pos: number, opts: { immediate: boolean }) => void } }).__lenis?.scrollTo(0, { immediate: true })
                    }
                  }
                }}
                className="flex items-center select-none cursor-default"
              >
                <Logo size={58} />
              </Link>

              <div className="flex items-center gap-4 sm:gap-5">
                <button
                  type="button"
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                  className="w-9 h-9 text-zinc-700 dark:text-slate-300 hover:text-zinc-950 dark:hover:text-white transition-colors flex items-center justify-center rounded-lg cursor-pointer"
                >
                  {isDark ? <Sun size={18} /> : <Moon size={18} />}
                </button>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                  className="w-11 h-11 text-zinc-950 dark:text-white flex items-center justify-center rounded-xl cursor-pointer active:scale-95"
                >
                  <X size={30} />
                </button>
              </div>
            </motion.div>

            {/* Stacked Nav Links (Fluid Staggered Entrance & Reverse Staggered Exit) */}
            <div className="flex flex-col flex-1 shrink-0 overflow-hidden">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  variants={itemVariants}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-6 py-6 sm:py-7 border-b border-zinc-200 dark:border-white/30 flex items-center justify-between group hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors"
                >
                  <span className="text-3xl sm:text-4xl font-normal tracking-tight text-zinc-950 dark:text-white">
                    {link.name}
                  </span>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-zinc-950 text-white dark:bg-white dark:text-slate-950 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <ArrowRight size={17} />
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Bottom Contact & Action Section */}
            <motion.div 
              variants={footerVariants}
              className="px-6 py-8 border-t border-zinc-200 dark:border-white/30 flex flex-col items-center text-center gap-4 bg-zinc-50/70 dark:bg-transparent shrink-0"
            >
              <div className="flex flex-col gap-1">
                <a 
                  href="mailto:steptem17@gmail.com" 
                  className="text-sm font-medium text-zinc-900 dark:text-slate-200 hover:opacity-75 transition-opacity"
                >
                  steptem17@gmail.com
                </a>
                <span className="text-xs text-zinc-500 dark:text-slate-400">
                  Based in Nigeria &middot; Available Worldwide
                </span>
              </div>

              {/* Start A Project CTA Button */}
              <a
                href="tel:+2348103383243"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 px-8 py-3.5 rounded-xl bg-zinc-950 text-white dark:bg-white dark:text-slate-950 text-xs font-semibold tracking-wider hover:opacity-90 active:scale-95 transition-all shadow-sm flex items-center gap-2"
              >
                <span>Book A Call</span>
                <ArrowUpRight size={14} />
              </a>

              {/* Social Icons Row at the Bottom */}
              <div className="flex items-center gap-7 pt-4 text-zinc-600 dark:text-slate-300">
                <a
                  href="mailto:steptem17@gmail.com"
                  aria-label="Email"
                  className="hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  <Mail size={19} />
                </a>
                <a
                  href="https://github.com/steptem17"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  <FaGithub size={19} />
                </a>
                <a
                  href="https://www.linkedin.com/in/stephen-idowu-b1b591246/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-zinc-950 dark:hover:text-white transition-colors"
                >
                  <FaLinkedin size={19} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
