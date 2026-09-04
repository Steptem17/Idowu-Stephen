import { motion, useInView, type Variants } from 'framer-motion'
import { useRef } from 'react'
import { useAnimationProfile } from '../../hooks/useAnimationProfile'

export interface StaggeredTextProps {
  text: string
  className?: string
  stagger?: number
  delay?: number
  duration?: number
  animateBy?: 'characters' | 'words'
  direction?: 'up' | 'down' | 'left' | 'right'
  once?: boolean
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'div'
}

export const StaggeredText = ({
  text,
  className = '',
  stagger = 0.05,
  delay = 0.1,
  duration = 0.85,
  animateBy = 'characters',
  direction = 'up',
  once = true,
  tag = 'span',
}: StaggeredTextProps) => {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once, amount: 0.2 })
  const anim = useAnimationProfile()

  const effectiveDuration = anim.duration(duration)
  const effectiveDelay = anim.delay(delay)
  const effectiveStagger = anim.stagger(stagger)

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: 40, x: 0 }
      case 'down':
        return { y: -40, x: 0 }
      case 'left':
        return { x: 30, y: 0 }
      case 'right':
        return { x: -30, y: 0 }
      default:
        return { y: 40, x: 0 }
    }
  }

  const initialPos = getInitialPosition()

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: effectiveStagger,
        delayChildren: effectiveDelay,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      ...initialPos,
      filter: 'blur(4px)',
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: effectiveDuration,
        ease: anim.ease,
      },
    },
  }

  const Tag = tag as any

  if (animateBy === 'words') {
    const words = text.split(' ')
    return (
      <Tag ref={ref} className={`inline-block ${className}`}>
        <motion.span
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="inline"
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              variants={itemVariants}
              className="inline-block whitespace-pre mr-[0.25em] will-change-transform"
            >
              {word}
            </motion.span>
          ))}
        </motion.span>
      </Tag>
    )
  }

  // Character-by-character animation
  const characters = Array.from(text)

  return (
    <Tag ref={ref} className={`inline-block overflow-hidden ${className}`}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="inline-block"
      >
        {characters.map((char, i) => (
          <motion.span
            key={i}
            variants={itemVariants}
            className="inline-block will-change-transform"
            style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  )
}

export default StaggeredText
