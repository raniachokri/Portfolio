import { useEffect, useRef, useState } from 'react'
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle } from 'lucide-react'
import { personalInfo } from '../data/cvData'

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [isSent, setIsSent] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true)
    }, { threshold: 0.1 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSent(true)
    setTimeout(() => {
      setIsSent(false)
      setFormState({ name: '', email: '', message: '' })
    }, 3000)
  }

  const contactInfo = [
    { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: Phone, label: 'Téléphone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: MapPin, label: 'Localisation', value: personalInfo.location, href: '#' },
    { icon: Linkedin, label: 'LinkedIn', value: 'rania-chokri', href: `https://${personalInfo.linkedin}` },
  ]

  return (
    <section id="contact" className="section-padding relative bg-dark-800/30" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <span className="text-accent text-sm font-medium tracking-widest uppercase">Contact</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 font-display">
              Travaillons Ensemble
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-gold mx-auto mt-6 rounded-full" />
            <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
              Vous avez un projet en tête ou souhaitez discuter d'une opportunité ? 
              N'hésitez pas à me contacter, je réponds dans les 24h.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="glass rounded-xl p-6 card-hover group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                      <info.icon className="w-5 h-5 text-accent-light" />
                    </div>
                    <div className="text-sm text-gray-400 mb-1">{info.label}</div>
                    <div className="text-white font-medium group-hover:text-accent-light transition-colors">
                      {info.value}
                    </div>
                  </a>
                ))}
              </div>

              <div className="glass rounded-xl p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Disponibilité</h3>
                <div className="space-y-3">
                   
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Freelance</span>
                    <span className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm border border-green-500/20">
                      Disponible
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">CDI</span>
                    <span className="px-3 py-1 rounded-full bg-accent/10 text-accent-light text-sm border border-accent/20">
                        Disponible
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass rounded-2xl p-8">
              {isSent ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Message envoyé !</h3>
                  <p className="text-gray-400">Je vous réponds dans les plus brefs délais.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Nom complet</label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-dark-700 border border-white/10 text-white placeholder-gray-500 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-dark-700 border border-white/10 text-white placeholder-gray-500 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all"
                      placeholder="vous@exemple.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-dark-700 border border-white/10 text-white placeholder-gray-500 focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all resize-none"
                      placeholder="Décrivez votre projet..."
                    />
                  </div>
                  <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2 py-4">
                    <Send className="w-4 h-4" />
                    Envoyer le message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
