import { motion, useInView, type Variants } from 'framer-motion'
import { useRef } from 'react'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const pillars = [
    {
      title: 'Development & Engineering',
      description: 'Architecting high-performance web systems with a focus on scalability, maintainability, and production-grade stability.',
      capabilities: ['Component Architecture', 'State Management', 'Performance Audits', 'TypeScript Integration']
    },
    {
      title: 'Product Experience',
      description: 'Bridging the gap between design and development to create fluid, intuitive interfaces that drive user engagement.',
      capabilities: ['Interaction Design', 'Design Systems', 'Responsive Flows', 'Motion Orchestration']
    },
    {
      title: 'Technical Strategy',
      description: 'Partnering with startups and agencies to define technical roadmaps that align with business objectives.',
      capabilities: ['System Planning', 'Performance SEO', 'Tech Stack Audit', 'Launch Management']
    }
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
  }

  return (
    <section id="services" className="section-padding bg-white dark:bg-transparent border-t border-zinc-200/80 dark:border-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-20">
          <span className="section-label">Expertise</span>
          <h2 className="text-2xl md:text-4xl font-display font-bold text-zinc-950 dark:text-white leading-tight">
            Strategic solutions for <br />
            <span className="text-zinc-500 dark:text-slate-400 italic font-serif font-light font-normal">modern digital products</span>
          </h2>
        </div>

        {/* Pillars Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-10"
        >
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="premium-card p-10 lg:p-12 border-zinc-150 dark:border-zinc-800/80"
            >
              <div className="font-mono text-3xl font-extrabold text-zinc-300 dark:text-zinc-700 mb-8 select-none">0{index + 1}</div>
              <h3 className="text-xl font-bold text-zinc-950 dark:text-white mb-6">{pillar.title}</h3>
              <p className="text-zinc-500 dark:text-zinc-400 text-sm font-medium leading-relaxed mb-10">
                {pillar.description}
              </p>
              <div className="space-y-4 border-t border-zinc-100 dark:border-zinc-800/60 pt-8 mt-auto">
                {pillar.capabilities.map((cap, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600" />
                    <span className="font-mono text-[9px] font-bold text-zinc-400 uppercase tracking-widest">{cap}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Methodology Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-40 pt-20 border-t border-zinc-150 dark:border-zinc-900/60"
        >
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
              <span className="section-label">Approach</span>
              <h3 className="text-3xl font-bold text-zinc-950 dark:text-white mb-6">Methodology</h3>
              <p className="text-zinc-550 dark:text-zinc-400 leading-relaxed font-medium">
                I operate at the intersection of technical precision and product design. My process is 
                systematic, data-informed, and focused on delivering sustainable business value.
              </p>
            </div>
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-8">
               {[
                 { t: 'Discovery', d: 'In-depth analysis of business goals and user requirements.' },
                 { t: 'Architecture', d: 'Defining technical foundations and design systems.' },
                 { t: 'Development', d: 'High-precision engineering with iterative feedback cycles.' },
                 { t: 'Optimization', d: 'Performance tuning, testing, and production deployment.' }
               ].map((step, i) => (
                 <div key={i} className="p-8 bg-zinc-50 dark:bg-zinc-900/40 rounded-2xl border border-zinc-150 dark:border-zinc-800/80">
                    <div className="font-mono text-[10px] font-bold text-zinc-950 dark:text-white uppercase tracking-widest mb-3">{step.t}</div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed font-medium">{step.d}</p>
                 </div>
               ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
