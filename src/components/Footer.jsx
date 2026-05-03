import { Heart, ArrowUp } from 'lucide-react'
import { personalInfo } from '../data/cvData'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-dark-800 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <a href="#hero" className="text-2xl font-bold gradient-text font-display">
              Rania<span className="text-white">.</span>
            </a>
            <p className="text-gray-400 text-sm mt-2">
              {personalInfo.title} — {personalInfo.location}
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-400">
            <a href="#about" className="hover:text-white transition-colors">À propos</a>
            <a href="#projects" className="hover:text-white transition-colors">Projets</a>
            <a href="#skills" className="hover:text-white transition-colors">Compétences</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full glass hover:bg-accent/20 transition-all duration-300 hover:scale-110 group"
          >
            <ArrowUp className="w-5 h-5 text-gray-400 group-hover:text-white" />
          </button>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-500 text-sm flex items-center justify-center gap-1">
            © 2026 {personalInfo.name}. Conçu avec <Heart className="w-4 h-4 text-red-500 fill-red-500" /> et beaucoup de café.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
