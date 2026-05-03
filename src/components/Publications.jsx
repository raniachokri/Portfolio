import { useEffect, useRef, useState } from 'react'
import { BookOpen, ExternalLink, Quote, Calendar, Award, FileText, Users, Hash } from 'lucide-react'
import { publications } from '../data/cvData'

const Publications = () => {
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
    <section id="publications" className="section-padding relative bg-dark-800/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-medium tracking-widest uppercase">Recherche Scientifique</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 font-display">
              Publications IEEE
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-gold mx-auto mt-6 rounded-full" />
            <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
              Contribution à la recherche académique dans le domaine de l'IoT et de la santé, publiée dans la revue IEEE Access.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {publications.map((pub) => (
              <div key={pub.id} className="glass rounded-2xl p-8 card-hover group">
                {/* Badge IEEE + Citations */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-800 flex items-center justify-center shadow-lg shadow-blue-500/20">
                      <BookOpen className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-blue-400">IEEE Access</div>
                      <div className="text-xs text-gray-500">Open Access Journal • Peer-Reviewed</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20">
                    <Award className="w-4 h-4 text-gold" />
                    <span className="text-sm font-semibold text-gold-light">{pub.citations} citations</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-accent-light transition-colors leading-tight">
                  {pub.title}
                </h3>

                {/* Authors */}
                <div className="flex items-start gap-2 mb-4 text-sm text-gray-400">
                  <Users className="w-4 h-4 mt-0.5 text-accent" />
                  <span className="italic">{pub.authors}</span>
                </div>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-3 mb-6 text-sm text-gray-400">
                  <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-dark-700 border border-white/10">
                    <Calendar className="w-3.5 h-3.5" />
                    {pub.year}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-dark-700 border border-white/10">
                    Vol. {pub.volume}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-dark-700 border border-white/10">
                    pp. {pub.pages}
                  </span>
                  <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent-light font-mono text-xs">
                    <Hash className="w-3 h-3" />
                    DOI: {pub.doi}
                  </span>
                </div>

                {/* Abstract */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Quote className="w-4 h-4 text-accent" />
                    <span className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Résumé</span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed pl-6 border-l-2 border-accent/20">
                    {pub.abstract}
                  </p>
                </div>

                {/* Keywords */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {pub.keywords.map((keyword) => (
                    <span key={keyword} className="px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-300 text-xs border border-blue-500/20 font-medium">
                      {keyword}
                    </span>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center justify-center gap-2 flex-1 py-4"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Voir sur IEEE Xplore
                  </a>
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline flex items-center justify-center gap-2 flex-1 py-4"
                  >
                    <FileText className="w-4 h-4" />
                    Accès DOI Direct
                  </a>
                </div>

                {/* Impact metrics */}
                <div className="mt-6 pt-6 border-t border-white/5 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-white">{pub.citations}</div>
                    <div className="text-xs text-gray-500 mt-1">Citations</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">Q1</div>
                    <div className="text-xs text-gray-500 mt-1">Quartile</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">3.4</div>
                    <div className="text-xs text-gray-500 mt-1">Impact Factor</div>
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

export default Publications
