import { motion, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa'
import { Mail, Check, ShieldCheck, X } from 'lucide-react'

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null)

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: ''
  })

  // Mandatory privacy agreement (defaults to false)
  const [agreedToPrivacy, setAgreedToPrivacy] = useState(false)
  const [showPrivacyModal, setShowPrivacyModal] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return

    if (!agreedToPrivacy) {
      setSubmitStatus('error')
      setErrorMessage('Please accept the privacy statement before sending.')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      await emailjs.sendForm(
        'service_surxsfn',
        'template_60zvsek',
        formRef.current,
        'jjAHNmNI1_9-Pa9kW'
      )
      setSubmitStatus('success')
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        message: ''
      })
      setTimeout(() => {
        setSubmitStatus('idle')
      }, 6000)
    } catch (error: unknown) {
      const err = error as { text?: string; message?: string }
      console.error('EmailJS Error:', error)
      setSubmitStatus('error')
      setErrorMessage(err?.text || err?.message || 'Transmission failed. Please email steptem17@gmail.com directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const fullName = `${formData.firstName} ${formData.lastName}`.trim()
  const compositeMessage = `${formData.company ? `[Brand: ${formData.company}]\n\n` : ''}${formData.message}`

  return (
    <section 
      id="contact" 
      className="relative overflow-hidden py-24 sm:py-32 bg-white dark:bg-transparent text-zinc-950 dark:text-white border-t border-zinc-200/80 dark:border-white/50 border-b border-zinc-100 dark:border-white/50 font-sans transition-colors"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-14">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 sm:mb-16"
        >
          <span className="text-xs font-semibold tracking-wider text-zinc-500 dark:text-slate-400 uppercase font-mono block mb-3">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-normal tracking-tight text-zinc-950 dark:text-white leading-[1.18]">
            Ready to create something amazing?
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Direct Contact & Details */}
          <motion.div 
            initial={{ opacity: 0, x: -30, y: 16 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col space-y-8"
          >
            <p className="text-base sm:text-lg text-zinc-600 dark:text-slate-300 font-normal leading-relaxed max-w-md">
              Have a project in mind, an open role, or want to collaborate? Fill out the form or reach out directly via email or WhatsApp.
            </p>

            {/* Direct Contact Details */}
            <div className="space-y-6 pt-1">
              <div>
                <div className="text-xs text-zinc-400 dark:text-slate-500 font-mono uppercase tracking-wider mb-1">
                  Direct Email
                </div>
                <a 
                  href="mailto:steptem17@gmail.com" 
                  className="text-base font-medium text-zinc-950 dark:text-white hover:text-zinc-600 dark:hover:text-slate-300 transition-colors"
                >
                  steptem17@gmail.com
                </a>
              </div>

              <div>
                <div className="text-xs text-zinc-400 dark:text-slate-500 font-mono uppercase tracking-wider mb-1">
                  WhatsApp &amp; Phone
                </div>
                <a 
                  href="https://wa.me/2348103383243" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-base font-medium text-zinc-950 dark:text-white hover:text-zinc-600 dark:hover:text-slate-300 transition-colors"
                >
                  +234 810 338 3243
                </a>
              </div>

              <div>
                <div className="text-xs text-zinc-400 dark:text-slate-500 font-mono uppercase tracking-wider mb-1">
                  Location
                </div>
                <p className="text-base font-medium text-zinc-950 dark:text-white">
                  Lagos, Nigeria &middot; Available Worldwide
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-1">
              <div className="text-xs text-zinc-400 dark:text-slate-500 font-mono uppercase tracking-wider mb-3">
                Connect
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/steptem17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-zinc-50 dark:bg-slate-800/40 border border-zinc-200 dark:border-slate-700/70 flex items-center justify-center text-zinc-600 dark:text-slate-400 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-400 dark:hover:border-slate-500 hover:bg-zinc-100 dark:hover:bg-slate-800 transition-all active:scale-95"
                  aria-label="GitHub"
                  title="GitHub"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/stephen-idowu-b1b591246/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-zinc-50 dark:bg-slate-800/40 border border-zinc-200 dark:border-slate-700/70 flex items-center justify-center text-zinc-600 dark:text-slate-400 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-400 dark:hover:border-slate-500 hover:bg-zinc-100 dark:hover:bg-slate-800 transition-all active:scale-95"
                  aria-label="LinkedIn"
                  title="LinkedIn"
                >
                  <FaLinkedin size={18} />
                </a>
                <a
                  href="https://wa.me/2348103383243"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-zinc-50 dark:bg-slate-800/40 border border-zinc-200 dark:border-slate-700/70 flex items-center justify-center text-zinc-600 dark:text-slate-400 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-400 dark:hover:border-slate-500 hover:bg-zinc-100 dark:hover:bg-slate-800 transition-all active:scale-95"
                  aria-label="WhatsApp"
                  title="WhatsApp"
                >
                  <FaWhatsapp size={18} />
                </a>
                <a
                  href="mailto:steptem17@gmail.com"
                  className="w-10 h-10 rounded-xl bg-zinc-50 dark:bg-slate-800/40 border border-zinc-200 dark:border-slate-700/70 flex items-center justify-center text-zinc-600 dark:text-slate-400 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-400 dark:hover:border-slate-500 hover:bg-zinc-100 dark:hover:bg-slate-800 transition-all active:scale-95"
                  aria-label="Email"
                  title="Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30, y: 16 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-start"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
              
              {/* Hidden EmailJS Mapping Fields */}
              <input type="hidden" name="from_name" value={fullName || formData.firstName} />
              <input type="hidden" name="from_email" value={formData.email} />
              <input type="hidden" name="reply_to" value={formData.email} />
              <input type="hidden" name="message" value={compositeMessage} />

              {/* First Name & Last Name Row */}
              <div className="grid sm:grid-cols-2 gap-8 sm:gap-10">
                <div>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="First name"
                    autoComplete="given-name"
                    className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-3 text-zinc-950 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-200 text-sm sm:text-base outline-none focus:border-zinc-950 dark:focus:border-white transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Last name"
                    autoComplete="family-name"
                    className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-3 text-zinc-950 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-200 text-sm sm:text-base outline-none focus:border-zinc-950 dark:focus:border-white transition-colors"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email"
                  autoComplete="email"
                  className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-3 text-zinc-950 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-200 text-sm sm:text-base outline-none focus:border-zinc-950 dark:focus:border-white transition-colors"
                />
              </div>

              {/* Brand Input (Formerly Company) */}
              <div>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Brand"
                  autoComplete="organization"
                  className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-3 text-zinc-950 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-200 text-sm sm:text-base outline-none focus:border-zinc-950 dark:focus:border-white transition-colors"
                />
              </div>

              {/* Message Input */}
              <div>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={2}
                  placeholder="Type your message..."
                  className="w-full bg-transparent border-b border-zinc-300 dark:border-zinc-700 py-3 text-zinc-950 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-200 text-sm sm:text-base outline-none focus:border-zinc-950 dark:focus:border-white transition-colors resize-none"
                />
              </div>

              {/* Circular Privacy Statement Checkbox Row (No underline on statement link) */}
              <div className="pt-2 flex items-center gap-3 select-none">
                <button
                  type="button"
                  onClick={() => setAgreedToPrivacy(!agreedToPrivacy)}
                  className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all cursor-pointer shrink-0 ${
                    agreedToPrivacy 
                      ? 'border-zinc-950 dark:border-white bg-transparent' 
                      : 'border-zinc-400 dark:border-zinc-600 hover:border-zinc-600 dark:hover:border-zinc-400'
                  }`}
                  aria-checked={agreedToPrivacy}
                  role="checkbox"
                  aria-label="Agree to privacy statement"
                >
                  {agreedToPrivacy && (
                    <div className="w-2 h-2 rounded-full bg-zinc-950 dark:bg-white animate-in zoom-in-50 duration-150" />
                  )}
                </button>
                <div className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                  <span 
                    onClick={() => setAgreedToPrivacy(!agreedToPrivacy)} 
                    className="cursor-pointer"
                  >
                    I have read and understood the{' '}
                  </span>
                  <button
                    type="button"
                    onClick={() => setShowPrivacyModal(true)}
                    className="text-zinc-900 dark:text-zinc-200 hover:text-black dark:hover:text-white font-medium cursor-pointer transition-colors"
                  >
                    privacy statement
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={!agreedToPrivacy || isSubmitting}
                  className={`px-9 py-3 rounded-xl text-sm sm:text-base font-medium transition-all shadow-sm ${
                    agreedToPrivacy
                      ? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-200 active:scale-[0.98] cursor-pointer'
                      : 'bg-zinc-200 text-zinc-400 dark:bg-zinc-800/80 dark:text-zinc-500 cursor-not-allowed opacity-70'
                  }`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>
              </div>

              {/* Submission Feedback */}
              {submitStatus === 'success' && (
                <div className="p-3.5 rounded-xl bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-300 dark:border-zinc-800 flex items-center gap-2.5 text-xs sm:text-sm text-zinc-950 dark:text-white">
                  <Check size={16} />
                  <span>Your message has been securely transmitted. I will review and respond promptly.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-3.5 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50 text-xs sm:text-sm text-red-600 dark:text-red-400">
                  {errorMessage}
                </div>
              )}

            </form>
          </motion.div>

        </div>

      </div>

      {/* Clear, Understandable & Professional Privacy Statement Modal */}
      <AnimatePresence>
        {showPrivacyModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPrivacyModal(false)}
              className="absolute inset-0 bg-black/60 dark:bg-black/80 backdrop-blur-sm cursor-pointer"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-lg max-h-[85vh] overflow-y-auto bg-white dark:bg-[#0f172a] border border-zinc-200 dark:border-white/20 rounded-2xl p-6 sm:p-8 shadow-2xl z-10 text-zinc-950 dark:text-white"
            >
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-zinc-200 dark:border-white/10">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck size={20} className="text-zinc-900 dark:text-zinc-100" />
                  <h4 className="text-base sm:text-lg font-semibold tracking-tight">
                    Privacy Statement
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={() => setShowPrivacyModal(false)}
                  className="p-1 rounded-lg text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Body: Plain, Understandable, Professional */}
              <div className="py-5 space-y-4 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal">
                <div>
                  <h5 className="font-semibold text-zinc-950 dark:text-white mb-1">
                    What details are collected?
                  </h5>
                  <p>
                    When you fill out this form, we receive your name, email address, brand name, and project message.
                  </p>
                </div>

                <div>
                  <h5 className="font-semibold text-zinc-950 dark:text-white mb-1">
                    How is your information used?
                  </h5>
                  <p>
                    Your information is used strictly to read your message and reply to your inquiry. You will never be added to any marketing, automated spam, or newsletter lists.
                  </p>
                </div>

                <div>
                  <h5 className="font-semibold text-zinc-950 dark:text-white mb-1">
                    Zero third-party sharing or selling
                  </h5>
                  <p>
                    We respect your privacy completely. Your contact details are 100% confidential and will never be shared, sold, or leased to any advertisers or third parties.
                  </p>
                </div>

                <div>
                  <h5 className="font-semibold text-zinc-950 dark:text-white mb-1">
                    Secure transmission & deletion upon request
                  </h5>
                  <p>
                    Your message is encrypted and delivered securely over TLS. If you would like your messages or contact details erased from our records at any time, simply email{' '}
                    <a href="mailto:steptem17@gmail.com" className="text-zinc-950 dark:text-white font-medium hover:underline">
                      steptem17@gmail.com
                    </a>{' '}
                    and they will be promptly deleted.
                  </p>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="pt-4 border-t border-zinc-200 dark:border-white/10 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowPrivacyModal(false)}
                  className="px-4 py-2 text-xs sm:text-sm rounded-xl text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setAgreedToPrivacy(true)
                    setShowPrivacyModal(false)
                  }}
                  className="px-5 py-2 text-xs sm:text-sm rounded-xl bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors cursor-pointer shadow-sm"
                >
                  I Understand & Agree
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Contact


