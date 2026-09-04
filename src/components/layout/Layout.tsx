import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import DotField from '../common/DotField'
const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col relative w-full max-w-full overflow-x-hidden bg-white dark:bg-[#0f172a] text-zinc-950 dark:text-white transition-colors duration-300">
      {/* Global Interactive DotField Background in Dark Mode (Active Everywhere) */}
      <div 
        className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden opacity-0 dark:opacity-100 transition-opacity duration-700"
        aria-hidden="true"
      >
        <DotField
          dotRadius={1.5}
          dotSpacing={14}
          bulgeStrength={67}
          glowRadius={160}
          sparkle={false}
          waveAmplitude={0}
          cursorRadius={500}
          cursorForce={0.1}
          bulgeOnly
          gradientFrom="#A855F7"
          gradientTo="#B497CF"
          glowColor="#120F17"
        />
      </div>

      <div className="relative z-10 flex flex-col flex-grow w-full max-w-full overflow-x-hidden">
        <Navbar />
        <main className="flex-grow w-full max-w-full overflow-x-hidden">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout