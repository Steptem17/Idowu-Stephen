import { motion, useInView, type Variants } from 'framer-motion'
import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { projectsData } from '../../data/projectsData'
import { useAnimationProfile } from '../../hooks/useAnimationProfile'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.08 })
  const navigate = useNavigate()
  const anim = useAnimationProfile()

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: anim.stagger(0.1), delayChildren: anim.delay(0.1) },
    },
  }

  const fromLeftVariants: Variants = {
    hidden: { opacity: 0, x: -40, y: 15 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: anim.duration(0.95), ease: anim.ease },
    },
  }

  const fromRightVariants: Variants = {
    hidden: { opacity: 0, x: 40, y: 15 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: anim.duration(0.95), ease: anim.ease },
    },
  }

  const fromBottomVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: anim.duration(1.0), ease: anim.ease },
    },
  }

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-white dark:bg-transparent text-zinc-950 dark:text-white py-24 sm:py-32 lg:py-36 border-t border-zinc-200/80 dark:border-white/50 font-sans"
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 md:px-14">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <motion.div 
            initial={{ opacity: 0, x: -35 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl"
          >
            <span className="text-xs font-semibold tracking-wider text-zinc-500 dark:text-slate-400 uppercase font-mono block mb-3">
              Portfolio &amp; Featured Projects
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-normal tracking-tight text-zinc-950 dark:text-white leading-[1.2]">
              Recent client work and production websites.
            </h2>
          </motion.div>
        </div>

        {/* Projects Grid: 2 on Top, 1 Centered Below */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              variants={index === 0 ? fromLeftVariants : index === 1 ? fromRightVariants : fromBottomVariants}
              onClick={() => {
                sessionStorage.setItem('portfolio_return_to_projects_y', String(window.scrollY))
                sessionStorage.setItem('portfolio_return_from_project', 'true')
                sessionStorage.setItem('return_to_projects', 'true')
                sessionStorage.setItem('portfolio_return_section', 'projects')
                navigate(`/project/${project.id}`)
              }}
              className={`rounded-2xl sm:rounded-3xl bg-zinc-50 dark:bg-slate-800/40 border border-zinc-200 dark:border-slate-700/70 overflow-hidden group hover:border-zinc-400 dark:hover:border-slate-500 transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                index === 2 ? 'md:col-span-2 md:w-[calc(50%-1rem)] lg:w-[calc(50%-1.25rem)] md:mx-auto' : ''
              }`}
            >
              {/* Image Preview Container */}
              <div className={`w-full aspect-[2/1] relative overflow-hidden border-b border-zinc-200 dark:border-slate-700/70 flex items-center justify-center ${
                project.id === 'maison-etoile' ? 'bg-[#0a0a0a]' : 'bg-white dark:bg-slate-900'
              }`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              {/* Card Details Body */}
              <div className="p-5 sm:p-7 md:p-8 flex flex-col flex-grow justify-between space-y-4">
                <div className="space-y-2.5">
                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-zinc-950 dark:text-white tracking-tight leading-snug group-hover:opacity-85 transition-opacity">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-500 dark:text-slate-400 mt-1 font-mono">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Shortened Description */}
                  <p className="text-sm sm:text-[15px] text-zinc-600 dark:text-slate-300 leading-relaxed font-normal">
                    {project.shortDescription || project.description}
                  </p>
                </div>

                {/* Centered View Project Button */}
                <div className="flex justify-center pt-2">
                  <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-zinc-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-zinc-950 dark:text-white text-xs sm:text-sm font-mono font-semibold uppercase tracking-wider group-hover:bg-zinc-950 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-slate-950 transition-all shadow-2xs">
                    <span>View Project</span>
                    <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

        {/* Bottom GitHub Callout: Refined font sizes and mobile responsive layout */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-6">
          <div>
            <h4 className="text-lg sm:text-xl md:text-[22px] font-medium text-zinc-950 dark:text-white tracking-tight leading-snug">
              Want to see more codebases and implementations?
            </h4>
            <p className="text-xs sm:text-sm md:text-[15px] text-zinc-600 dark:text-slate-300 mt-1 sm:mt-1.5 leading-relaxed font-normal">
              Explore open-source repositories, components, and client tools on GitHub.
            </p>
          </div>

          <a
            href="https://github.com/steptem17"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl border border-zinc-200 dark:border-slate-700 text-zinc-950 dark:text-white text-xs sm:text-[13px] font-mono font-semibold uppercase tracking-wider hover:bg-zinc-100 dark:hover:bg-slate-800 transition-all shrink-0 w-full sm:w-auto"
          >
            <FaGithub size={15} />
            <span>Visit GitHub</span>
            <ArrowUpRight size={14} />
          </a>
        </div>

      </div>
    </section>
  )
}

export default Projects
