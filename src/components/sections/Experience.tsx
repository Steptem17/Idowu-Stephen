import { motion, useInView, type Variants } from 'framer-motion'
import { useRef } from 'react'
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Code, 
  Calendar,
  MapPin,
  ExternalLink,
  Trophy,
  Users,
  Rocket
} from 'lucide-react'
import SectionTitle from '../common/SectionTitle'

const Experience = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const timelineItems = [
    {
      type: 'work',
      title: 'Senior Frontend Developer',
      company: 'Remote / Freelance',
      location: 'Worldwide',
      period: '2024 - Present',
      description: 'Leading frontend development for international clients. Architecting scalable React applications and mentoring junior developers.',
      achievements: [
        'Delivered 8+ production-ready applications',
        'Maintained 100% client satisfaction rate',
        'Reduced bundle sizes by average 40%'
      ],
      icon: <Rocket className="w-5 h-5" />,
      gradient: 'from-slate-600 to-slate-800'
    },
    {
      type: 'work',
      title: 'Frontend Developer',
      company: 'TechAgency Solutions',
      location: 'Lagos, Nigeria',
      period: '2023 - 2024',
      description: 'Collaborated with cross-functional teams to build responsive web applications for enterprise clients.',
      achievements: [
        'Successfully built and optimized 12+ client web applications',
        'Implemented design systems used across 5 products',
        'Improved Core Web Vitals scores by 35%'
      ],
      icon: <Briefcase className="w-5 h-5" />,
      gradient: 'from-slate-500 to-slate-700'
    },
    {
      type: 'work',
      title: 'Junior Web Developer',
      company: 'StartUp Hub',
      location: 'Remote',
      period: '2022 - 2023',
      description: 'Assisted in building MVPs for early-stage startups, focusing on rapid prototyping and iterative development.',
      achievements: [
        'Contributed to 6 startup launches',
        'Built reusable component library',
        'Reduced development time by 25% with templates'
      ],
      icon: <Users className="w-5 h-5" />,
      gradient: 'from-slate-500 to-slate-700'
    },
    {
      type: 'education',
      title: 'Self-Taught Development',
      company: 'Continuous Learning',
      period: '2021 - 2022',
      description: 'Intensive self-study in modern frontend technologies, completing professional certifications and building portfolio projects.',
      achievements: [
        'Completed Meta Frontend Developer Certificate',
        'Built 15+ practice projects',
        'Contributed to open-source'
      ],
      icon: <GraduationCap className="w-5 h-5" />,
      gradient: 'from-slate-400 to-slate-600'
    }
  ]

  const achievements = [
    {
      icon: <Trophy className="w-6 h-6" />,
      title: 'Top Rated Freelancer',
      description: 'Maintained 100% Job Success Score on Upwork',
      color: 'text-slate-900 dark:text-white'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Meta Certified',
      description: 'Frontend Developer Professional Certificate',
      color: 'text-blue-500'
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: '15+ Projects',
      description: 'Successfully delivered across industries',
      color: 'text-purple-500'
    }
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <section id="experience" className="section-padding relative bg-zinc-50 dark:bg-zinc-950/20 border-b border-zinc-100 dark:border-zinc-900/60">

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle
          subtitle="Professional Journey"
          title="Experience That Speaks"
          description="A timeline of growth, learning, and delivering value through web development."
        />

        <div ref={ref} className="grid lg:grid-cols-3 gap-8">
          {/* Timeline Column - Takes 2/3 on desktop */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="lg:col-span-2"
          >
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-zinc-200 dark:bg-zinc-800 hidden sm:block" />

              {/* Timeline Items */}
              <div className="space-y-6">
                {timelineItems.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    className="relative sm:pl-16"
                  >
                    {/* Timeline Node */}
                    <div className="hidden sm:flex absolute left-[26px] -translate-x-1/2 w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border-2 border-zinc-950 dark:border-zinc-850 items-center justify-center text-zinc-950 dark:text-zinc-200 shadow-sm">
                      {item.icon}
                    </div>

                    {/* Content Card */}
                    <div className="border border-zinc-200/60 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                        <div>
                          <h3 className="text-xl font-display font-bold">{item.title}</h3>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1">
                            <span className="font-semibold text-zinc-950 dark:text-white">{item.company}</span>
                            {item.location && (
                              <span className="flex items-center gap-1 text-sm text-zinc-500">
                                <MapPin size={12} /> {item.location}
                              </span>
                            )}
                          </div>
                        </div>
                        <span className="flex items-center gap-1 text-xs font-medium px-3 py-1 border border-zinc-200/60 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-800 rounded-full text-zinc-500 dark:text-zinc-400">
                          <Calendar size={12} />
                          {item.period}
                        </span>
                      </div>

                      <p className="text-zinc-500 dark:text-zinc-400 mb-4">
                        {item.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-2">
                        <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">Key Achievements:</p>
                        <ul className="grid sm:grid-cols-2 gap-2">
                          {item.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                              <div className="w-1.5 h-1.5 rounded-full bg-zinc-800 dark:bg-zinc-350 mt-1.5 flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sidebar - Achievements & Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Achievement Cards */}
            <div className="border border-zinc-200/60 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-2xl p-6">
              <h4 className="text-lg font-display font-bold mb-4 flex items-center gap-2">
                <Trophy className="w-5 h-5 text-zinc-950 dark:text-white" />
                Highlights & Recognition
              </h4>
              <div className="space-y-4">
                {achievements.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + i * 0.1 }}
                    className="flex items-start gap-3 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/50"
                  >
                    <div className={`${item.color} mt-0.5`}>{item.icon}</div>
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-sm text-zinc-650 dark:text-zinc-400">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Skills in Action */}
            <div className="border border-zinc-200/60 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-2xl p-6">
              <h4 className="text-lg font-display font-bold mb-4">Technologies Mastered</h4>
              <div className="flex flex-wrap gap-2">
                {['React', 'TypeScript', 'Tailwind', 'Next.js', 'Redux', 'Node.js', 'Git', 'Figma'].map((tech, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + i * 0.03 }}
                    className="px-3 py-1.5 bg-zinc-50 dark:bg-zinc-900 rounded-full text-sm font-medium border border-zinc-200/60 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Download Resume Card */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="border border-zinc-200/60 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-2xl p-6"
            >
              <h4 className="font-display font-bold text-lg mb-2">Full Resume Available</h4>
              <p className="text-sm text-zinc-650 dark:text-zinc-400 mb-4">
                Download my complete resume with detailed project history and references.
              </p>
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-zinc-950 dark:text-white border-b border-zinc-950 dark:border-white font-medium hover:gap-3 transition-all text-sm"
              >
                Download PDF <ExternalLink size={14} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience