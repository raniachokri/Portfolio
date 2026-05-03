import { useEffect, useRef, useState } from 'react'
import { Code, Layout, Server, Database, Wrench } from 'lucide-react'
import { skills } from '../data/cvData'

const SkillBar = ({ name, level, delay }) => {
  const [width, setWidth] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true)
        setTimeout(() => setWidth(level), delay)
      }
    }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [level, delay])

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-300">{name}</span>
        <span className="text-sm text-accent-light">{level}%</span>
      </div>
      <div className="w-full h-2 bg-dark-600 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-accent to-accent-light rounded-full transition-all duration-1000 ease-out"
          style={{ width: isVisible ? `${width}%` : '0%' }}
        />
      </div>
    </div>
  )
}

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState('languages')
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true)
    }, { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const tabs = [
    { id: 'languages', label: 'Langages', icon: Code },
    { id: 'frontend', label: 'Frontend', icon: Layout },
    { id: 'backend', label: 'Backend', icon: Server },
    { id: 'databases', label: 'Bases de données', icon: Database },
    { id: 'tools', label: 'Outils & IA', icon: Wrench },
  ]

  return (
    <section id="skills" className="section-padding relative bg-dark-800/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-medium tracking-widest uppercase">Expertise</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 font-display">
              Compétences Techniques
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-gold mx-auto mt-6 rounded-full" />
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-accent text-white shadow-lg shadow-accent/25'
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="glass rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                {tabs.find(t => t.id === activeTab)?.icon && (
                  <span className="p-2 rounded-lg bg-accent/10">
                    {(() => {
                      const Icon = tabs.find(t => t.id === activeTab).icon
                      return <Icon className="w-5 h-5 text-accent" />
                    })()}
                  </span>
                )}
                {tabs.find(t => t.id === activeTab)?.label}
              </h3>
              {skills[activeTab].map((skill, index) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} delay={index * 100} />
              ))}
            </div>

            {/* Skill Cloud */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-white mb-6">Technologies maîtrisées</h3>
              <div className="flex flex-wrap gap-3">
                {Object.values(skills).flat().map((skill) => (
                  <span
                    key={skill.name}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-110 cursor-default ${
                      skill.level >= 85
                        ? 'bg-accent/20 text-accent-light border border-accent/30'
                        : skill.level >= 75
                        ? 'bg-gold/10 text-gold-light border border-gold/20'
                        : 'bg-white/5 text-gray-400 border border-white/10'
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-accent/50" />
                    <span className="text-gray-400">Expert (85%+)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-gold/50" />
                    <span className="text-gray-400">Avancé (75%+)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-white/20" />
                    <span className="text-gray-400">Intermédiaire</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
