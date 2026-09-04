import { motion, useInView, type Variants } from 'framer-motion'
import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { Quote, Star, Building2, Briefcase, Globe } from 'lucide-react'
import SectionTitle from '../common/SectionTitle'

// Import Swiper styles
// @ts-expect-error — Swiper CSS modules lack TypeScript declarations
import 'swiper/css'
// @ts-expect-error — Swiper CSS modules lack TypeScript declarations
import 'swiper/css/pagination'
// @ts-expect-error — Swiper CSS modules lack TypeScript declarations
import 'swiper/css/navigation'

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Chen',
      role: 'Founder & CEO',
      company: 'LuxeCommerce',
      image: '👩‍💼',
      content: 'Stephen transformed our vision into a stunning e-commerce platform. His attention to detail and commitment to performance exceeded our expectations. The site loads instantly and converts 35% better than our previous solution.',
      rating: 5,
      project: 'E-commerce Redesign',
      industry: 'Fashion Retail'
    },
    {
      id: 2,
      name: 'Marcus Rodriguez',
      role: 'Technical Lead',
      company: 'FinScale Analytics',
      image: '👨‍💻',
      content: 'Working with Stephen was a game-changer for our dashboard project. His React expertise and clean code architecture made integration seamless. He delivered ahead of schedule and the performance gains were remarkable.',
      rating: 5,
      project: 'Analytics Dashboard',
      industry: 'FinTech'
    },
    {
      id: 3,
      name: 'Emily Watson',
      role: 'Creative Director',
      company: 'Studio Lumina',
      image: '👩‍🎨',
      content: "Stephen is that rare developer who truly understands design. He brought our complex animations to life while maintaining buttery-smooth performance. Our clients can't stop praising the site experience.",
      rating: 5,
      project: 'Agency Portfolio',
      industry: 'Creative Agency'
    },
    {
      id: 4,
      name: 'David Okafor',
      role: 'Product Manager',
      company: 'HealthTech Solutions',
      image: '👨‍⚕️',
      content: 'I was impressed by Stephen\'s proactive communication and problem-solving approach. He didn\'t just build what we asked for—he suggested improvements that enhanced the user experience significantly.',
      rating: 5,
      project: 'Patient Portal',
      industry: 'Healthcare'
    },
    {
      id: 5,
      name: 'Jessica Park',
      role: 'Startup Founder',
      company: 'MindfulAI',
      image: '👩‍🚀',
      content: 'As a non-technical founder, I needed someone who could guide me through the development process. Stephen explained everything clearly and delivered a product that helped us secure our seed round.',
      rating: 5,
      project: 'MVP Development',
      industry: 'AI / SaaS'
    }
  ]

  const stats = [
    { value: '100%', label: 'Client Satisfaction', icon: <Star className="w-5 h-5 text-yellow-500" /> },
    { value: '15+', label: 'Projects Delivered', icon: <Briefcase className="w-5 h-5 text-zinc-900 dark:text-white" /> },
    { value: '8+', label: 'Industries Served', icon: <Globe className="w-5 h-5 text-zinc-900 dark:text-white" /> },
    { value: '5★', label: 'Average Rating', icon: <Building2 className="w-5 h-5 text-zinc-900 dark:text-white" /> }
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  }

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden bg-white dark:bg-zinc-950 border-b border-zinc-100 dark:border-zinc-900/60">

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionTitle
          subtitle="Client Success Stories"
          title="Trusted by Businesses Worldwide"
          description="Don't just take my word for it — hear what clients and collaborators say about working with me."
        />

        {/* Stats Bar */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 rounded-xl p-4 text-center shadow-sm"
            >
              <div className="flex justify-center mb-2">{stat.icon}</div>
              <div className="text-2xl font-display font-bold text-zinc-900 dark:text-white">{stat.value}</div>
              <div className="text-xs text-zinc-550 dark:text-zinc-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Slider */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
        >
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation
            className="testimonials-swiper !pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="glass rounded-2xl p-6 h-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md transition-all duration-350">
                  {/* Quote Icon */}
                  <div className="mb-4">
                    <Quote className="w-7 h-7 text-zinc-300 dark:text-zinc-700 rotate-180" />
                  </div>

                  {/* Content */}
                  <p className="text-zinc-600 dark:text-zinc-300 mb-5 leading-relaxed text-sm font-medium">
                    "{testimonial.content}"
                  </p>

                  {/* Rating */}
                  <div className="flex gap-0.5 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < testimonial.rating ? 'fill-yellow-500 text-yellow-500' : 'text-zinc-300 dark:text-zinc-600'}
                      />
                    ))}
                  </div>

                  {/* Project Info */}
                  <div className="flex items-center gap-2 font-mono text-[9px] text-zinc-400 mb-4 pb-4 border-b border-zinc-100 dark:border-zinc-800">
                    <Briefcase size={10} className="text-zinc-400" />
                    <span>{testimonial.project}</span>
                    <span className="w-1 h-1 rounded-full bg-zinc-400" />
                    <span>{testimonial.industry}</span>
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-xl select-none">
                      {testimonial.image}
                    </div>
                    <div>
                      <h4 className="font-bold text-zinc-900 dark:text-white leading-none mb-1">{testimonial.name}</h4>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400">{testimonial.role}</p>
                      <p className="text-xs text-zinc-600 dark:text-zinc-400 font-bold mt-0.5">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        {/* Custom Swiper Styles */}
        <style>{`
          .testimonials-swiper .swiper-pagination-bullet {
            background: #d4d4d8;
            opacity: 0.5;
          }
          .testimonials-swiper .swiper-pagination-bullet-active {
            background: #18181b;
            opacity: 1;
            width: 20px;
            border-radius: 4px;
          }
          .dark .testimonials-swiper .swiper-pagination-bullet {
            background: #3f3f46;
          }
          .dark .testimonials-swiper .swiper-pagination-bullet-active {
            background: #ffffff;
          }
          .testimonials-swiper .swiper-button-next,
          .testimonials-swiper .swiper-button-prev {
            color: #18181b;
            background: transparent;
            border: none;
            width: 32px;
            height: 32px;
          }
          @media (min-width: 768px) {
            .testimonials-swiper .swiper-button-next,
            .testimonials-swiper .swiper-button-prev {
              width: 44px;
              height: 44px;
            }
          }
          .testimonials-swiper .swiper-button-next:after,
          .testimonials-swiper .swiper-button-prev:after {
            font-size: 14px;
            font-weight: 900;
          }
          .dark .testimonials-swiper .swiper-button-next,
          .dark .testimonials-swiper .swiper-button-prev {
            color: #ffffff;
          }
        `}</style>
      </div>
    </section>
  )
}

export default Testimonials