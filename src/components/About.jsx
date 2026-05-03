import { useEffect, useRef, useState } from 'react'
import { Code, Database, Brain, Globe } from 'lucide-react'
import { personalInfo, qualities } from '../data/cvData'

const About = () => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true)
    }, { threshold: 0.2 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const stats = [
    { icon: Code, value: '5+', label: 'Langages maîtrisés' },
    { icon: Database, value: '4+', label: 'Bases de données' },
    { icon: Brain, value: '3+', label: 'Projets IA / NLP' },
    { icon: Globe, value: '3+', label: 'Frameworks web' },
  ]

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-medium tracking-widest uppercase">À propos de moi</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 font-display">
              Qui suis-je ?
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-gold mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-br from-accent to-gold rounded-2xl rotate-6 opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-br from-accent to-gold rounded-2xl -rotate-3 opacity-10" />
                <div className="relative bg-dark-800 rounded-2xl p-8 h-full flex flex-col items-center justify-center glass">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent to-gold p-1 mb-6">
                    <div className="w-full h-full rounded-full bg-dark-800 flex items-center justify-center">
                      <span className="text-4xl font-bold gradient-text">RC</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{personalInfo.name}</h3>
                  <p className="text-accent-light text-center">{personalInfo.title}</p>
                  <div className="mt-6 flex flex-wrap justify-center gap-2">
                    {qualities.map((q) => (
                      <span key={q} className="px-3 py-1 rounded-full bg-white/5 text-gray-300 text-sm border border-white/10">
                        {q}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                Passionnée par la technologie et l'innovation, je conçois des solutions logicielles robustes et scalables. 
                Mon parcours académique en génie logiciel, combiné à mes expériences professionnelles, m'a permis de 
                développer une expertise transversale du développement web au déploiement cloud.
              </p>
              <p className="text-gray-400 leading-relaxed">
                J'ai particulièrement à cœur l'intégration de l'intelligence artificielle dans les applications métiers, 
                comme en témoigne mon projet <span className="text-accent-light">MedHealth</span> qui utilise le NLP 
                pour l'analyse médicale. Je suis constamment à la recherche de nouveaux défis techniques.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="glass rounded-xl p-4 text-center card-hover">
                    <stat.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
