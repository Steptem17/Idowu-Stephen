import { motion } from 'framer-motion'

const Terms = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto px-6 py-24 md:py-32"
    >
      <h1 className="text-3xl md:text-5xl font-display font-bold mb-8">Terms of Service</h1>
      <div className="prose dark:prose-invert max-w-none space-y-6 text-zinc-650 dark:text-zinc-400">
        <p>Last updated: April 23, 2026</p>
        <p>
          By accessing this website, you agree to the following terms and conditions.
        </p>
        <h2 className="text-xl font-bold text-zinc-950 dark:text-white">1. Intellectual Property</h2>
        <p>
          All content on this website, including designs, code, and text, is my intellectual property unless otherwise stated. You may not reproduce or use this content without explicit permission.
        </p>
        <h2 className="text-xl font-bold text-zinc-950 dark:text-white">2. Disclaimer</h2>
        <p>
          The information on this website is for general informational purposes. While I strive for accuracy, I make no warranties about the completeness or reliability of the information provided.
        </p>
        <h2 className="text-xl font-bold text-zinc-950 dark:text-white">3. Links to Other Websites</h2>
        <p>
          My portfolio may contain links to third-party sites. I am not responsible for the content or privacy practices of those sites.
        </p>
        <h2 className="text-xl font-bold text-zinc-950 dark:text-white">4. Modifications</h2>
        <p>
          I reserve the right to modify these terms at any time. Continued use of the site after changes constitutes acceptance of the new terms.
        </p>
      </div>
    </motion.div>
  )
}

export default Terms
