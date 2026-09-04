import { motion, useInView, type Variants } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { useAnimationProfile } from '../../hooks/useAnimationProfile'

const About = () => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })
  const anim = useAnimationProfile()

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: anim.stagger(0.1),
        delayChildren: anim.delay(0.1),
      },
    },
  }

  const fromLeftVariants: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: anim.duration(0.95), ease: anim.ease },
    },
  }

  const fromRightVariants: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: anim.duration(0.95), ease: anim.ease },
    },
  }

  const fromBottomVariants: Variants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: anim.duration(0.9), ease: anim.ease },
    },
  }

  const experiences = [
    {
      period: '2025 — Present',
      role: 'Client Projects & Production Delivery',
      company: 'Active Engagements & Client Solutions',
      description:
        'Delivering custom, responsive websites, web applications, and interactive digital interfaces for clients with strong focus on performance, design accuracy, and usability.',
    },
    {
      period: '2024 — 2025',
      role: 'Advanced Frameworks & Skill Mastery',
      company: 'Specialized Development & Application Builds',
      description:
        'Mastered modern React architecture, TypeScript type systems, Tailwind CSS component libraries, and REST API integrations through complex project implementations.',
    },
    {
      period: '2023 — 2024',
      role: 'Foundations & Core Web Development',
      company: 'Intensive Learning & Core Web Standards',
      description:
        'Started the development journey by building strong fundamentals in semantic HTML5, modern CSS3 layouts (Flexbox/Grid), JavaScript (ES6+), responsive design, and Git version control.',
    },
  ]

  const competencies = [
    'React, Next.js & TypeScript web applications',
    'Clean, semantic HTML5 & modern responsive CSS3',
    'Tailwind CSS styling & custom design systems',
    'JavaScript (ES6+) & asynchronous REST API integration',
    'Performance optimization, fast load speeds & SEO',
    'Component-driven architecture & state management',
    'Git & GitHub team workflows & version control',
    'Cross-browser testing & mobile-first responsiveness',
  ]

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white dark:bg-transparent text-zinc-950 dark:text-white py-24 sm:py-32 lg:py-36 border-t border-zinc-200/80 dark:border-white/50 font-sans"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14">
        <div ref={ref}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="space-y-24 sm:space-y-28"
          >
            {/* Top: Main Headline & Narrative */}
            <div className="space-y-10">
              <motion.div variants={fromLeftVariants} className="max-w-5xl lg:max-w-6xl">
                <span className="text-xs font-semibold tracking-wider text-zinc-500 dark:text-slate-400 uppercase font-mono block mb-3">
                  Background & Philosophy
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-tight text-zinc-950 dark:text-white leading-[1.18]">
                  Crafting high-quality, responsive websites<br className="hidden md:inline" /> and web applications tailored for real-world impact.
                </h2>
              </motion.div>

              <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start pt-2">
                <motion.div variants={fromLeftVariants} className="lg:col-span-7 space-y-5 text-base sm:text-lg text-zinc-600 dark:text-slate-300 font-normal leading-relaxed">
                  <p>
                    Focused on modern frontend engineering, transforming designs, technical requirements, and user workflows into high-performance, accessible, and responsive web applications.
                  </p>
                  <p>
                    Leveraging modern JavaScript, TypeScript, React, and intelligent developer toolchains to deliver clean, scalable codebases that load fast, adapt across all screens, and accelerate production cycles.
                  </p>
                </motion.div>

                {/* Right: Technical Competencies Card */}
                <motion.div
                  variants={fromRightVariants}
                  className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-zinc-50 dark:bg-slate-800/40 border border-zinc-200 dark:border-slate-700/70 space-y-4"
                >
                  <span className="text-xs font-semibold tracking-wider text-zinc-500 dark:text-slate-400 uppercase block font-mono">
                    Core Competencies
                  </span>
                  <div className="grid grid-cols-1 gap-2.5 pt-1">
                    {competencies.map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-sm text-zinc-800 dark:text-slate-200">
                        <CheckCircle2 size={16} className="text-zinc-950 dark:text-white shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Professional Journey & Milestones */}
            <div className="space-y-8">
              <motion.div variants={fromLeftVariants} className="border-b border-zinc-200 dark:border-slate-800 pb-4">
                <h3 className="text-xl sm:text-2xl font-normal text-zinc-950 dark:text-white tracking-tight">
                  Development Journey & Milestones
                </h3>
              </motion.div>

              <div className="divide-y divide-zinc-200 dark:divide-slate-800 border-b border-zinc-200 dark:border-slate-800">
                {experiences.map((exp, idx) => (
                  <motion.div
                    key={idx}
                    variants={fromBottomVariants}
                    className="py-8 sm:py-10 grid lg:grid-cols-12 gap-4 lg:gap-8 items-start hover:bg-zinc-50/50 dark:hover:bg-slate-800/20 px-2 sm:px-4 rounded-xl transition-colors"
                  >
                    <div className="lg:col-span-3 text-xs sm:text-sm font-mono text-zinc-500 dark:text-slate-400 font-medium">
                      {exp.period}
                    </div>
                    <div className="lg:col-span-4 space-y-0.5">
                      <h4 className="text-lg sm:text-xl font-medium text-zinc-950 dark:text-white">
                        {exp.role}
                      </h4>
                      <span className="text-xs sm:text-sm text-zinc-500 dark:text-slate-400 block">
                        {exp.company}
                      </span>
                    </div>
                    <div className="lg:col-span-5 text-sm sm:text-base text-zinc-600 dark:text-slate-300 leading-relaxed font-normal">
                      {exp.description}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom Collaboration Banner */}
            <motion.div
              variants={fromBottomVariants}
              className="p-8 sm:p-10 lg:p-12 rounded-2xl bg-zinc-50 dark:bg-slate-800/40 border border-zinc-200 dark:border-slate-700/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
            >
              <div className="space-y-2 max-w-3xl">
                <h4 className="text-2xl sm:text-3xl font-medium text-zinc-950 dark:text-white tracking-tight leading-snug">
                  Have a project in mind or looking to hire a dedicated developer?
                </h4>
                <p className="text-base sm:text-lg text-zinc-600 dark:text-slate-300 mt-2 leading-relaxed font-normal">
                  Available for remote contract engagements, frontend roles, and custom web applications delivered with speed, precision, and clean code.
                </p>
              </div>
              <a
                href="tel:+2348103383243"
                className="px-7 py-4 rounded-xl bg-zinc-950 text-white dark:bg-white dark:text-slate-950 text-xs sm:text-sm font-semibold tracking-wider hover:opacity-90 active:scale-95 transition-all shadow-xs inline-flex items-center gap-2 shrink-0 cursor-pointer"
              >
                <span>Book A Call</span>
                <ArrowUpRight size={16} />
              </a>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About