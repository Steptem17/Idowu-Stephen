import React from 'react'

interface LogoProps {
  className?: string
  size?: number
  showText?: boolean
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  size = 52,
  showText = false
}) => {
  return (
    <div className={`inline-flex items-center gap-3 select-none cursor-default ${className}`}>
      <div 
        className="relative flex items-center justify-center shrink-0"
        style={{ width: size, height: size }}
      >
        {/* Light mode: dark logo */}
        <img
          src="/brand/idowu-logo-dark.png"
          alt="IDOWU"
          className="w-full h-full object-contain block dark:hidden drop-shadow-xs"
        />
        {/* Dark mode: crisp white logo */}
        <img
          src="/brand/idowu-logo-light.png"
          alt="IDOWU"
          className="w-full h-full object-contain hidden dark:block drop-shadow-xs"
        />
      </div>

      {showText && (
        <div className="flex flex-col leading-tight">
          <span className="text-zinc-950 dark:text-white font-bold text-sm tracking-tight">
            Idowu Stephen
          </span>
          <span className="font-mono text-[9px] font-bold text-zinc-500 dark:text-slate-400 uppercase tracking-widest mt-0.5">
            Web Developer
          </span>
        </div>
      )}
    </div>
  )
}

export default Logo
