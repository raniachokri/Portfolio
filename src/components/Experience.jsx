import { useEffect, useRef, useState } from 'react'
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react'
import { experiences } from '../data/cvData'

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true)
    }, { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className="section-padding relative bg-dark-800/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-medium tracking-widest uppercase">Parcours</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 font-display">
              Expérience Professionnelle
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-gold mx-auto mt-6 rounded-full" />
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/50 to-transparent md:-translate-x-px" />

            {experiences.map((exp, index) => (
              <div key={exp.id} className={`relative mb-12 md:mb-0 ${index !== experiences.length - 1 ? 'md:pb-16' : ''}`}>
                <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="ml-12 md:ml-0 glass rounded-xl p-6 card-hover">
                      <div className={`flex items-center gap-2 mb-3 text-accent-light text-sm ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                      <div className={`flex items-center gap-4 mb-3 text-gray-400 text-sm ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-3 h-3" />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {exp.location}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed mb-4">{exp.description}</p>
                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        {exp.technologies.map((tech) => (
                          <span key={tech} className="px-2 py-1 rounded-md bg-accent/10 text-accent-light text-xs border border-accent/20">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-4 border-dark-900 shadow-lg shadow-accent/50" />

                  {/* Empty space for other side */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
