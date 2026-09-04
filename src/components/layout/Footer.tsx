import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { Mail, ArrowUp } from 'lucide-react'
import Logo from '../common/Logo'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { name: 'About', href: '/#about' },
    { name: 'Skills', href: '/#skills' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Contact', href: '/#contact' }
  ]

  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/steptem17', icon: <FaGithub size={17} /> },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/stephen-idowu-b1b591246/', icon: <FaLinkedin size={17} /> },
    { label: 'WhatsApp', href: 'https://wa.me/2348103383243', icon: <FaWhatsapp size={17} /> },
    { label: 'Email', href: 'mailto:steptem17@gmail.com', icon: <Mail size={17} /> }
  ]

  return (
    <footer className="relative overflow-hidden bg-white dark:bg-transparent border-t border-zinc-200/80 dark:border-white/50 pt-16 sm:pt-20 pb-12 font-sans transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 lg:gap-16 pb-12 sm:pb-16 border-b border-zinc-200/80 dark:border-slate-800">
          
          {/* Brand & Bio Column */}
          <div className="md:col-span-2 lg:col-span-5 space-y-5 sm:space-y-6">
            <Logo size={58} showText={true} />
            <p className="text-zinc-600 dark:text-slate-300 text-sm leading-relaxed max-w-sm">
              Web developer specializing in building clean, responsive, and high-performance websites and web applications with React, TypeScript, and modern CSS.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-1">
              {socialLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-zinc-50 dark:bg-slate-800/40 border border-zinc-200 dark:border-slate-700/70 flex items-center justify-center text-zinc-600 dark:text-slate-400 hover:text-zinc-950 dark:hover:text-white hover:border-zinc-400 dark:hover:border-slate-500 hover:bg-zinc-100 dark:hover:bg-slate-800 transition-all duration-200 active:scale-95"
                  aria-label={link.label}
                  title={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-1 lg:col-span-3 space-y-4">
            <span className="text-xs font-semibold tracking-wider text-zinc-400 dark:text-slate-500 uppercase font-mono block">
              Navigation
            </span>
            <ul className="space-y-2.5 sm:space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-sm font-medium text-zinc-600 dark:text-slate-300 hover:text-zinc-950 dark:hover:text-white transition-colors inline-block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-1 lg:col-span-4 space-y-4">
            <span className="text-xs font-semibold tracking-wider text-zinc-400 dark:text-slate-500 uppercase font-mono block">
              Get in Touch
            </span>
            <div className="space-y-3.5 sm:space-y-4">
              <div>
                <div className="text-xs text-zinc-400 dark:text-slate-500 mb-1 font-mono uppercase tracking-wider">
                  Direct Email
                </div>
                <a 
                  href="mailto:steptem17@gmail.com" 
                  className="text-sm font-medium text-zinc-900 dark:text-white hover:text-zinc-600 dark:hover:text-slate-300 transition-colors inline-block py-0.5"
                >
                  steptem17@gmail.com
                </a>
              </div>
              <div>
                <div className="text-xs text-zinc-400 dark:text-slate-500 mb-1 font-mono uppercase tracking-wider">
                  WhatsApp &amp; Phone
                </div>
                <a 
                  href="https://wa.me/2348103383243" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-zinc-900 dark:text-white hover:text-zinc-600 dark:hover:text-slate-300 transition-colors inline-block py-0.5"
                >
                  +234 810 338 3243
                </a>
              </div>
              <div>
                <div className="text-xs text-zinc-400 dark:text-slate-500 mb-1 font-mono uppercase tracking-wider">
                  Location
                </div>
                <p className="text-sm font-medium text-zinc-900 dark:text-slate-200">
                  Lagos, Nigeria (WAT / UTC+1)
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Back to Top Bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-500 dark:text-slate-400 text-center sm:text-left">
          <div>
            &copy; {currentYear} Idowu Stephen &mdash; Web Developer. All rights reserved.
          </div>
          <button 
            onClick={() => {
              if ((window as any).__lenis) {
                (window as any).__lenis.scrollTo(0, { immediate: true })
              }
              window.scrollTo({ top: 0, behavior: 'instant' })
            }}
            className="group inline-flex items-center gap-2 text-xs font-medium text-zinc-500 dark:text-slate-400 hover:text-zinc-950 dark:hover:text-white transition-colors cursor-pointer py-1"
          >
            <span>Back to top</span>
            <ArrowUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  )
}

export default Footer

