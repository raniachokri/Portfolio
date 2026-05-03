import { useEffect, useRef, useState } from 'react'
import { ExternalLink, Github, Star, ArrowUpRight } from 'lucide-react'
import { projects } from '../data/cvData'

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState('Tous')
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true)
    }, { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const filters = ['Tous', ...new Set(projects.map(p => p.category))]
  const filtered = activeFilter === 'Tous' ? projects : projects.filter(p => p.category === activeFilter)

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-medium tracking-widest uppercase">Portfolio</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 font-display">
              Mes Projets
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-gold mx-auto mt-6 rounded-full" />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-accent text-white shadow-lg shadow-accent/25'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((project, index) => (
              <div
                key={project.id}
                className="group glass rounded-2xl overflow-hidden card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Card Header */}
                <div className="relative h-48 bg-gradient-to-br from-accent/20 to-gold/20 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold text-white/10 font-display">{project.title[0]}</div>
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    {project.highlights.map((h, i) => (
                      <span key={i} className="px-2 py-1 rounded-full bg-dark-900/80 text-gold text-xs backdrop-blur-sm">
                        <Star className="w-3 h-3 inline mr-1" />
                        {h}
                      </span>
                    ))}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-800 to-transparent opacity-60" />
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-accent-light text-xs font-medium uppercase tracking-wider">{project.category}</span>
                    <div className="flex gap-2">
                      <a href={project.github} className="p-2 rounded-lg bg-white/5 hover:bg-accent/20 transition-colors">
                        <Github className="w-4 h-4 text-gray-400" />
                      </a>
                      <a href={project.demo} className="p-2 rounded-lg bg-white/5 hover:bg-accent/20 transition-colors">
                        <ExternalLink className="w-4 h-4 text-gray-400" />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent-light transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="px-2 py-1 rounded-md bg-white/5 text-gray-300 text-xs border border-white/10">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 rounded-md bg-white/5 text-gray-400 text-xs">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
