import { motion } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt } from 'react-icons/fa'
import { SiTypescript, SiTailwindcss, SiNextdotjs } from 'react-icons/si'
import { Code2, Layers, Cpu, Wrench, CheckCircle2 } from 'lucide-react'

const Skills = () => {
  // Primary languages & tools with official brand icons
  const primaryTechnologies = [
    { name: 'HTML5', category: 'Markup & Structure', icon: <FaHtml5 className="text-[#E34F26]" size={24} /> },
    { name: 'CSS3', category: 'Styling & Layouts', icon: <FaCss3Alt className="text-[#1572B6]" size={24} /> },
    { name: 'JavaScript', category: 'Core Language (ES6+)', icon: <FaJs className="text-[#F7DF1E]" size={24} /> },
    { name: 'TypeScript', category: 'Type-Safe Development', icon: <SiTypescript className="text-[#3178C6]" size={22} /> },
    { name: 'React', category: 'Component Architecture', icon: <FaReact className="text-[#61DAFB]" size={24} /> },
    { name: 'Next.js', category: 'Production Framework', icon: <SiNextdotjs className="text-zinc-950 dark:text-white" size={22} /> },
    { name: 'Tailwind CSS', category: 'Utility-First Styling', icon: <SiTailwindcss className="text-[#06B6D4]" size={24} /> },
    { name: 'Git & GitHub', category: 'Version Control', icon: <FaGitAlt className="text-[#F05032]" size={24} /> },
    { 
      name: 'VS Code', 
      category: 'Primary Development IDE',
      icon: (
        <svg className="w-5 h-5 text-[#007ACC]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.227A1 1 0 0 0 .3 8.643L4.17 12 .3 15.357a1 1 0 0 0 .026 1.416l1.322 1.168a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zM18.5 16.5l-6.8-4.5 6.8-4.5v9z" />
        </svg>
      ) 
    },
  ]

  const skillGroups = [
    {
      title: 'Component Architecture & State',
      description: 'Building scalable web applications with modular components and predictable data flow.',
      icon: <Code2 size={22} />,
      items: [
        'React & Custom Hooks Architecture',
        'TypeScript Interfaces & Static Typing',
        'Next.js Routing & Server Components',
        'RESTful APIs & Asynchronous State Handling',
      ],
    },
    {
      title: 'UI Engineering & Design Systems',
      description: 'Crafting responsive, tokenized component systems with fluid micro-interactions.',
      icon: <Layers size={22} />,
      items: [
        'Tailwind CSS Utility & Token Systems',
        'Fluid Animations with Framer Motion',
        'Strict Mobile-First & Cross-Breakpoint Layouts',
        'Accessible UI Patterns (WCAG & a11y Standards)',
      ],
    },
    {
      title: 'Web Performance & Standards',
      description: 'Optimizing render efficiency, network assets, and SEO for fast experiences.',
      icon: <Cpu size={22} />,
      items: [
        'Core Web Vitals Optimization (LCP, INP, CLS)',
        'Asset Compression, Image Sizing & Lazy-Loading',
        'Semantic HTML5 & Technical On-Page SEO',
        'Cross-Browser & Cross-Device Rendering Consistency',
      ],
    },
    {
      title: 'Toolchains & Code Quality',
      description: 'Disciplined developer workflows, version control standards, and tooling.',
      icon: <Wrench size={22} />,
      items: [
        'VS Code Specialized Development Environments',
        'Git Branching Strategies & GitHub Collaboration',
        'Vite Fast Module Bundling & HMR Pipelines',
        'DevTools Network Profiling & Console Debugging',
      ],
    },
  ]

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-white dark:bg-transparent text-zinc-950 dark:text-white py-24 sm:py-32 lg:py-36 border-t border-zinc-200/80 dark:border-white/50 font-sans"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14">
        <div className="space-y-24 sm:space-y-28">
          
          {/* Top: Section Header & Core Technologies */}
          <div className="space-y-12 sm:space-y-14">
            <motion.div 
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-4xl"
            >
              <span className="text-xs font-semibold tracking-wider text-zinc-500 dark:text-slate-400 uppercase font-mono block mb-3">
                Technical Expertise &amp; Skills
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-normal tracking-tight text-zinc-950 dark:text-white leading-[1.2]">
                Modern tools and languages leveraged to build high-performance web products.
              </h2>
            </motion.div>

            {/* 1. Primary Technologies & Tools Grid with Brand Icons */}
            <div className="space-y-8 pt-2">
              <motion.div 
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                className="border-b border-zinc-200 dark:border-slate-800 pb-4"
              >
                <h3 className="text-xl sm:text-2xl font-normal text-zinc-950 dark:text-white tracking-tight">
                  Core Technologies & Languages
                </h3>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {primaryTechnologies.map((tech, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.8, delay: (idx % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    className="p-5 sm:p-6 rounded-2xl bg-zinc-50/70 dark:bg-slate-800/40 border border-zinc-200/80 dark:border-slate-800 hover:border-zinc-400 dark:hover:border-slate-600 transition-colors duration-200 flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 border border-zinc-200/60 dark:border-slate-700 flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-110 transition-transform">
                      {tech.icon}
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-medium text-zinc-950 dark:text-white">
                        {tech.name}
                      </h4>
                      <span className="text-xs sm:text-sm text-zinc-500 dark:text-slate-400 block mt-0.5">
                        {tech.category}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* 2. Skill Group Categories - 2 Columns for Spacious Layout */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="border-b border-zinc-200 dark:border-slate-800 pb-4"
            >
              <h3 className="text-xl sm:text-2xl font-normal text-zinc-950 dark:text-white tracking-tight">
                Detailed Domain Knowledge
              </h3>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {skillGroups.map((group, idx) => (
                <motion.div
                  key={idx}
                  initial={
                    idx % 2 === 0
                      ? { opacity: 0, x: -30, y: 16 }
                      : { opacity: 0, x: 30, y: 16 }
                  }
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.9, delay: (idx % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="p-7 sm:p-9 rounded-2xl bg-zinc-50/70 dark:bg-slate-800/40 border border-zinc-200/80 dark:border-slate-800 hover:border-zinc-400 dark:hover:border-slate-600 transition-colors duration-200 flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 border border-zinc-200 dark:border-slate-700 flex items-center justify-center text-zinc-900 dark:text-white shrink-0 shadow-2xs">
                        {group.icon}
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-xl sm:text-2xl font-medium text-zinc-950 dark:text-white tracking-tight">
                          {group.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-zinc-500 dark:text-slate-400 leading-relaxed font-normal">
                          {group.description}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-zinc-200/60 dark:border-slate-700/60">
                      <ul className="space-y-3">
                        {group.items.map((item, itemIdx) => (
                          <li
                            key={itemIdx}
                            className="text-sm sm:text-base text-zinc-800 dark:text-slate-200 flex items-center gap-3 font-normal"
                          >
                            <CheckCircle2 size={16} className="text-zinc-950 dark:text-white shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Skills
