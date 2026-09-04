import { motion } from 'framer-motion'

const Privacy = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto px-6 py-24 md:py-32"
    >
      <h1 className="text-3xl md:text-5xl font-display font-bold mb-8">Privacy Policy</h1>
      <div className="prose dark:prose-invert max-w-none space-y-6 text-zinc-650 dark:text-zinc-400">
        <p>Last updated: April 23, 2026</p>
        <p>
          Your privacy is important to me. This Privacy Policy explains how I handle any information when you visit my portfolio.
        </p>
        <h2 className="text-xl font-bold text-zinc-950 dark:text-white">1. Information Collection</h2>
        <p>
          I do not collect any personal data from visitors unless you voluntarily provide it through the contact form. This information (name, email) is used solely to respond to your inquiries.
        </p>
        <h2 className="text-xl font-bold text-zinc-950 dark:text-white">2. Cookies</h2>
        <p>
          This website may use essential cookies to ensure basic functionality and to analyze traffic via anonymous analytics tools.
        </p>
        <h2 className="text-xl font-bold text-zinc-950 dark:text-white">3. Third-Party Services</h2>
        <p>
          I use EmailJS for the contact form. Please refer to their privacy policy regarding how they handle data transmission.
        </p>
        <h2 className="text-xl font-bold text-zinc-950 dark:text-white">4. Contact Me</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact me at steptem17@gmail.com.
        </p>
      </div>
    </motion.div>
  )
}

export default Privacy
