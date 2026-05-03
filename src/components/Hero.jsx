import { useEffect, useRef } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react'
import { personalInfo } from '../data/cvData'

const Hero = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = []
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 0.5,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.1
      })
    }

    let animationId
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.x += p.dx
        p.y += p.dy
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(99, 102, 241, ${p.opacity})`
        ctx.fill()
      })
      animationId = requestAnimationFrame(animate)
    }
    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    window.addEventListener('resize', handleResize)
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full glass text-sm text-accent-light mb-8 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse" />
          Disponible pour de nouvelles opportunités
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
           
          <span className="gradient-text font-display">{personalInfo.name}</span>
        </h1>

        <div className="text-xl md:text-2xl text-gray-400 mb-8 h-12">
          <TypeAnimation
            sequence={[
              'Développeuse Fullstack',
              2000,
              'Spécialiste .NET & Angular',
              2000,
              'Intégratrice IA / NLP',
              2000,
              'Architecte Logicielle',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="font-medium"
          />
        </div>

        <p className="max-w-2xl mx-auto text-gray-400 text-lg mb-12 leading-relaxed">
          {personalInfo.summary}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a href="#contact" className="btn-primary flex items-center gap-2">
            <Mail className="w-4 h-4" />
            Me contacter
          </a>
          <a href="#projects" className="btn-outline flex items-center gap-2">
            <Download className="w-4 h-4" />
            Voir mes projets
          </a>
        </div>

        <div className="flex items-center justify-center gap-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"
            className="p-3 rounded-full glass hover:bg-accent/20 transition-all duration-300 hover:scale-110">
            <Github className="w-5 h-5 text-gray-300" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
            className="p-3 rounded-full glass hover:bg-accent/20 transition-all duration-300 hover:scale-110">
            <Linkedin className="w-5 h-5 text-gray-300" />
          </a>
          <a href={`mailto:${personalInfo.email}`}
            className="p-3 rounded-full glass hover:bg-accent/20 transition-all duration-300 hover:scale-110">
            <Mail className="w-5 h-5 text-gray-300" />
          </a>
        </div>
      </div>

      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-white transition-colors animate-bounce">
        <ArrowDown className="w-6 h-6" />
      </a>
    </section>
  )
}

export default Hero