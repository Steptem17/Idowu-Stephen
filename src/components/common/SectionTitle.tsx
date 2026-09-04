import { motion } from 'framer-motion'

interface SectionTitleProps {
  subtitle?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

const SectionTitle = ({ subtitle, title, description, align = 'center' }: SectionTitleProps) => {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left'
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-2xl ${alignment} mb-16 md:mb-24`}
    >
      {subtitle && <span className="section-label">{subtitle}</span>}
      <h2 className="text-2xl md:text-4xl font-display font-bold mt-4 mb-6 text-slate-950 dark:text-white leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-base text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  )
}

export default SectionTitle
