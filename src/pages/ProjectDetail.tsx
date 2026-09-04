import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, type Variants } from 'framer-motion'
import { projectsData } from '../data/projectsData'
import { 
  ArrowLeft,
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Wrench, 
  Sparkles, 
  Code2 
} from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
    interface LenisWindow extends Window {
      __lenis?: { scrollTo: (pos: number, opts: { immediate: boolean }) => void }
    }
    const w = window as LenisWindow
    if (w.__lenis) {
      try {
        w.__lenis.scrollTo(0, { immediate: true })
      } catch (err) {
        console.warn('Lenis scroll error:', err)
      }
    }
  }, [id])

  const projectIndex = projectsData.findIndex(p => p.id === id)
  const project = projectIndex >= 0 ? projectsData[projectIndex] : null

  useEffect(() => {
    if (!project && id) {
      navigate('/', { replace: true })
    }
  }, [project, id, navigate])

  if (!project) {
    return (
      <div className="min-h-screen pt-36 pb-24 flex items-center justify-center">
        <p className="text-zinc-500 dark:text-zinc-400 font-mono text-sm">Loading project details...</p>
      </div>
    )
  }

  const nextProject = projectsData[(projectIndex + 1) % projectsData.length]

  const handleBackToProjects = (e: React.MouseEvent) => {
    e.preventDefault()
    sessionStorage.setItem('portfolio_return_to_projects', 'true')
    navigate('/')
  }

  const handleNextProject = (e: React.MouseEvent) => {
    e.preventDefault()
    navigate(`/project/${nextProject.id}`)
  }

  const sectionVariants: Variants = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
  }

  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen pt-28 pb-24 bg-white dark:bg-transparent text-zinc-950 dark:text-[#f8fafc] transition-colors duration-300 font-sans"
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">
        

        {/* Top Back Link */}
        <motion.div variants={sectionVariants} className="py-4 mb-6">
          <button
            onClick={handleBackToProjects}
            className="inline-flex items-center gap-2 text-sm text-zinc-500 dark:text-slate-400 hover:text-zinc-950 dark:hover:text-white transition-colors group cursor-pointer"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Projects</span>
          </button>
        </motion.div>

        {/* Hero Header */}
        <motion.div variants={sectionVariants} className="space-y-4 mb-10">
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-normal tracking-tight text-zinc-950 dark:text-white leading-[1.15]">
            {project.title}
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-slate-300 font-normal max-w-3xl leading-relaxed">
            {project.subtitle}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.liveUrl && project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-950 text-white dark:bg-white dark:text-slate-950 text-xs sm:text-sm font-semibold uppercase tracking-wider hover:opacity-90 active:scale-95 transition-all shadow-sm"
              >
                <span>Live Website</span>
                <ExternalLink size={14} />
              </a>
            )}

            {project.githubUrl && project.githubUrl !== '#' && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-zinc-200 dark:border-slate-800 text-zinc-800 dark:text-slate-200 text-xs sm:text-sm font-semibold uppercase tracking-wider hover:bg-zinc-100 dark:hover:bg-slate-800 active:scale-95 transition-all"
              >
                <FaGithub size={15} />
                <span>Source Code</span>
              </a>
            )}
          </div>
        </motion.div>

        {/* Hero Visual Showcase */}
        <motion.div 
          variants={sectionVariants}
          className={`w-full aspect-[2/1] rounded-2xl overflow-hidden border border-zinc-200 dark:border-slate-800 shadow-sm mb-12 sm:mb-14 relative group flex items-center justify-center ${
            project.id === 'maison-etoile' ? 'bg-[#0a0a0a]' : 'bg-white dark:bg-slate-900'
          }`}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain group-hover:scale-[1.01] transition-transform duration-700 ease-out"
          />
        </motion.div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14">
          
          {/* Left 2 Columns: Overview, Challenge, Solution, Features */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* Overview Section */}
            <motion.section variants={sectionVariants} className="space-y-3">
              <span className="text-xs font-semibold tracking-wider text-zinc-400 dark:text-slate-500 uppercase font-mono block">
                Project Overview
              </span>
              <h2 className="text-2xl sm:text-3xl font-normal tracking-tight text-zinc-950 dark:text-white">
                About the Project
              </h2>
              <p className="text-base sm:text-lg text-zinc-600 dark:text-slate-300 leading-relaxed font-normal pt-1">
                {project.overview}
              </p>
            </motion.section>

            {/* Challenge & Solution */}
            <motion.section variants={sectionVariants} className="space-y-6 pt-6 border-t border-zinc-200 dark:border-slate-800">
              <div className="p-5 sm:p-6 rounded-2xl bg-zinc-50 dark:bg-slate-800/40 border border-zinc-200 dark:border-slate-700/70 space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-zinc-700 dark:text-slate-300">
                  <Layers size={15} />
                  <span>The Challenge</span>
                </div>
                <p className="text-sm sm:text-base text-zinc-600 dark:text-slate-300 leading-relaxed font-normal">
                  {project.challenge}
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-zinc-50 dark:bg-slate-800/40 border border-zinc-200 dark:border-slate-700/70 space-y-2.5">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-zinc-700 dark:text-slate-300">
                  <Wrench size={15} />
                  <span>Implementation &amp; Solution</span>
                </div>
                <p className="text-sm sm:text-base text-zinc-600 dark:text-slate-300 leading-relaxed font-normal">
                  {project.solution}
                </p>
              </div>
            </motion.section>

            {/* Key Features Grid */}
            {project.features && project.features.length > 0 && (
              <motion.section variants={sectionVariants} className="space-y-6 pt-6 border-t border-zinc-200 dark:border-slate-800">
                <div>
                  <span className="text-xs font-semibold tracking-wider text-zinc-400 dark:text-slate-500 uppercase font-mono block">
                    Features
                  </span>
                  <h2 className="text-2xl font-normal tracking-tight text-zinc-950 dark:text-white mt-1">
                    Key Features
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {project.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="p-5 sm:p-6 rounded-xl bg-zinc-50 dark:bg-slate-800/30 border border-zinc-200 dark:border-slate-700/70 space-y-2.5"
                    >
                      <div className="flex items-center gap-2">
                        <Sparkles size={16} className="text-zinc-500 dark:text-slate-400 shrink-0" />
                        <h4 className="text-base font-semibold text-zinc-950 dark:text-white">
                          {feature.title}
                        </h4>
                      </div>
                      <p className="text-sm text-zinc-700 dark:text-slate-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Deliverables / Results */}
            {project.results && project.results.length > 0 && (
              <motion.section variants={sectionVariants} className="space-y-4 pt-6 border-t border-zinc-200 dark:border-slate-800">
                <span className="text-xs font-semibold tracking-wider text-zinc-400 dark:text-slate-500 uppercase font-mono block">
                  Outcomes
                </span>
                <h3 className="text-xl font-normal text-zinc-950 dark:text-white">
                  Project Deliverables
                </h3>
                <ul className="space-y-3 pt-1">
                  {project.results.map((result, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-slate-300">
                      <CheckCircle2 size={16} className="text-zinc-500 dark:text-slate-400 shrink-0 mt-0.5" />
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </motion.section>
            )}
          </div>

          {/* Right Column: Tech Stack & Contact CTA */}
          <div className="space-y-8">
            {/* Technologies Stack Card */}
            <motion.div 
              variants={sectionVariants}
              className="p-6 rounded-2xl bg-zinc-50 dark:bg-slate-800/40 border border-zinc-200 dark:border-slate-700/70 space-y-4"
            >
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-zinc-600 dark:text-slate-400">
                <Code2 size={15} />
                <span>Technologies Used</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map(tech => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-mono font-medium bg-white dark:bg-slate-900 border border-zinc-200 dark:border-slate-700 text-zinc-800 dark:text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Contact CTA */}
            <motion.div 
              variants={sectionVariants}
              className="p-6 rounded-2xl bg-zinc-50 dark:bg-slate-800/40 border border-zinc-200 dark:border-slate-700/70 space-y-4"
            >
              <h4 className="text-lg font-medium text-zinc-950 dark:text-white tracking-tight">
                Have a project in mind?
              </h4>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-slate-300 leading-relaxed font-normal">
                Available for freelance projects, frontend roles, and custom web development. Let's talk about what you're building.
              </p>
              <a
                href="https://wa.me/2348103383243"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-zinc-950 text-white dark:bg-white dark:text-slate-950 text-xs font-semibold uppercase tracking-wider hover:opacity-90 active:scale-95 transition-all shadow-xs"
              >
                <span>Get in Touch</span>
                <ArrowRight size={14} />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Bottom Next Project Teaser */}
        <motion.div 
          variants={sectionVariants}
          className="mt-20 pt-12 border-t border-zinc-200 dark:border-slate-800"
        >
          <div className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-zinc-400 dark:text-slate-500 mb-4">
            Next Project
          </div>

          <button
            type="button"
            onClick={handleNextProject}
            className="group w-full text-left block p-8 rounded-2xl bg-zinc-50 dark:bg-slate-800/40 border border-zinc-200 dark:border-slate-700/70 hover:border-zinc-400 dark:hover:border-slate-500 transition-all duration-300 cursor-pointer"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-normal text-zinc-950 dark:text-white">
                  {nextProject.title}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-slate-400 mt-1.5 font-normal">
                  {nextProject.subtitle}
                </p>
              </div>

              <div className="w-11 h-11 rounded-full bg-zinc-950 text-white dark:bg-white dark:text-slate-950 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <ArrowRight size={18} />
              </div>
            </div>
          </button>
        </motion.div>

      </div>
    </motion.div>
  )
}

export default ProjectDetail
