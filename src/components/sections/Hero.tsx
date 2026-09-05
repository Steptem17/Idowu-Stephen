import { motion, useScroll, useTransform, type Variants } from 'framer-motion'
import { useRef } from 'react'
import { ArrowDown, ArrowUpRight, Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import profileImage from '../../assets/images/my-profile.jpeg'
import StaggeredText from '../common/StaggeredText'

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '6%'])

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }
    })
  }

  const socialLinks = [
    { label: 'Email', href: 'mailto:steptem17@gmail.com', icon: <Mail size={22} />, title: 'Email Me' },
    { label: 'GitHub', href: 'https://github.com/steptem17', icon: <FaGithub size={22} />, title: 'GitHub' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/stephen-idowu-b1b591246/', icon: <FaLinkedin size={22} />, title: 'LinkedIn' }
  ]

  return (
    <section 
      ref={ref} 
      id="home" 
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-white dark:bg-transparent pt-28 pb-12 sm:pt-36 sm:pb-16 lg:pt-44 lg:pb-20"
    >
      {/* Vertical Side Tag (Desktop Left Side) */}
      <div className="hidden xl:flex absolute left-8 top-40 bottom-12 flex-col items-center justify-between text-xs font-medium tracking-widest text-zinc-400 dark:text-slate-300 select-none z-20 pointer-events-none py-4">
        <span className="[writing-mode:vertical-lr] rotate-180">Web developer</span>
        <div className="w-[1px] h-64 sm:h-80 lg:h-96 bg-zinc-200/80 dark:bg-slate-700/80 my-4" />
        <span>{new Date().getFullYear()}</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 w-full flex-1 flex flex-col justify-between relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center flex-1 my-auto pt-4 lg:pt-8">

          {/* Left Column: Glides smoothly from Left Angle on load */}
          <motion.div 
            style={{ y: textY }}
            initial={{ opacity: 0, x: -35, y: 15 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center z-20 py-4 lg:py-6"
          >
            {/* Top Metrics Row */}
            <motion.div 
              custom={0} 
              variants={fadeInUp} 
              initial="hidden" 
              animate="visible" 
              className="flex items-center gap-12 sm:gap-16 lg:gap-20 mb-10 sm:mb-14 lg:mb-18"
            >
              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-normal text-zinc-950 dark:text-white tracking-tight">
                  5+
                </div>
                <div className="text-xs sm:text-sm text-zinc-500 dark:text-slate-300 font-medium mt-1">
                  Projects completed
                </div>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-normal text-zinc-950 dark:text-white tracking-tight">
                  2+
                </div>
                <div className="text-xs sm:text-sm text-zinc-500 dark:text-slate-300 font-medium mt-1">
                  Years experience
                </div>
              </div>
            </motion.div>

            {/* Giant "Hello" Title with Staggered Character Reveal */}
            <div className="mb-8 sm:mb-10 lg:mb-12">
              <StaggeredText
                text="Hello"
                tag="h1"
                animateBy="characters"
                direction="up"
                stagger={0.07}
                delay={0.2}
                duration={0.9}
                className="text-6xl sm:text-8xl md:text-9xl lg:text-[11.5rem] font-normal tracking-tight text-zinc-950 dark:text-white leading-[0.88] select-none font-sans"
              />
              <motion.p 
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-700 dark:text-slate-200 font-medium mt-6 flex items-center gap-2.5 font-sans"
              >
                <span className="text-zinc-400 dark:text-slate-500">—</span>
                <span>It's <strong className="font-bold text-zinc-950 dark:text-white">Stephen</strong>, a web developer</span>
              </motion.p>
            </div>

            {/* Action CTAs */}
            <motion.div 
              custom={2} 
              variants={fadeInUp} 
              initial="hidden" 
              animate="visible" 
              className="flex flex-wrap items-center gap-4 sm:gap-5 mt-6 pt-2"
            >
              <a
                href="#projects"
                className="px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl bg-zinc-950 text-white dark:bg-white dark:text-slate-950 text-sm font-semibold tracking-wide hover:opacity-90 active:scale-95 transition-all shadow-sm flex items-center gap-2.5 cursor-pointer font-sans"
              >
                <span>View Work</span>
                <ArrowUpRight size={16} />
              </a>
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl border border-zinc-200 dark:border-slate-700 text-zinc-900 dark:text-slate-100 text-sm font-semibold tracking-wide hover:border-zinc-950 dark:hover:border-white hover:bg-zinc-50 dark:hover:bg-slate-800 transition-colors cursor-pointer font-sans"
              >
                View Resume
              </a>
            </motion.div>

            {/* Social Icons Row */}
            <motion.div 
              custom={3} 
              variants={fadeInUp} 
              initial="hidden" 
              animate="visible" 
              className="flex items-center gap-3 mt-7 sm:mt-9"
            >
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-xl border border-zinc-200 dark:border-slate-700 text-zinc-900 dark:text-slate-200 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-400 dark:hover:border-slate-500 bg-white dark:bg-slate-800/80 flex items-center justify-center shadow-xs hover:-translate-y-0.5 transition-all cursor-pointer"
                  aria-label={item.label}
                  title={item.title}
                >
                  {item.icon}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Glides smoothly from Right Angle on load */}
          <motion.div 
            style={{ y: imageY }}
            initial={{ opacity: 0, x: 35, y: 15, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            transition={{ duration: 0.95, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center lg:justify-end z-10 mt-6 lg:mt-0"
          >
            <div className="relative w-full max-w-[300px] sm:max-w-[360px] md:max-w-[420px] lg:max-w-[460px] aspect-[4/5] rounded-3xl overflow-hidden bg-zinc-100 dark:bg-slate-800/60 border border-zinc-200/80 dark:border-slate-700 p-2.5 sm:p-3">
              <div className="w-full h-full rounded-2xl overflow-hidden hover:grayscale-0 transition-all duration-700">
                <img
                  src={profileImage}
                  alt="Stephen Idowu"
                  className="w-full h-full object-cover select-none"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar: Scroll Indicator & Location Info */}
        <motion.div 
          custom={3} 
          variants={fadeInUp} 
          initial="hidden" 
          animate="visible" 
          className="mt-12 sm:mt-16 pt-4 flex items-center justify-center sm:justify-between text-[11px] sm:text-xs text-zinc-500 dark:text-slate-300 select-none font-medium tracking-wide"
        >
          <a 
            href="#about"
            className="inline-flex items-center gap-1.5 text-zinc-600 dark:text-slate-200 hover:text-zinc-950 dark:hover:text-white transition-colors"
          >
            <span>Scroll down</span>
            <ArrowDown size={13} className="animate-bounce" />
          </a>
          <span className="hidden sm:inline">Based in Nigeria &middot; Available Worldwide</span>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
