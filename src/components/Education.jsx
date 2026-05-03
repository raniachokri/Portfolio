import { useEffect, useRef, useState } from 'react'
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react'
import { education } from '../data/cvData'

const Education = () => {
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
    <section id="education" className="section-padding relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-medium tracking-widest uppercase">Formation</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 font-display">
              Parcours Académique
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-gold mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {education.map((edu, index) => (
              <div
                key={edu.id}
                className="glass rounded-2xl p-8 card-hover relative overflow-hidden group"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Status badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                  edu.status === 'En cours'
                    ? 'bg-green-500/10 text-green-400 border border-green-500/20'
                    : 'bg-accent/10 text-accent-light border border-accent/20'
                }`}>
                  {edu.status === 'En cours' && <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block mr-1 animate-pulse" />}
                  {edu.status}
                </div>

                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-accent-dark flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-7 h-7 text-white" />
                  </div>
                  <span className="text-accent-light text-sm font-medium">{edu.period}</span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                <p className="text-gray-300 text-sm mb-4">{edu.specialization}</p>

                <div className="pt-4 border-t border-white/10 space-y-2">
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <Award className="w-4 h-4 text-gold" />
                    <span className="font-medium text-gray-300">{edu.school}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{edu.location}</span>
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

export default Education
