import { useEffect, useState } from "react"
import "./Hero.css"

import hero1 from "../../assets/images/mam1.png"
import hero2 from "../../assets/images/mam2.png"
import hero3 from "../../assets/images/mams343.jpg"

const images = [hero1, hero2, hero3]

const Hero = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero">
      {/* Background Image Slider */}
      <div
        className="hero-bg"
        style={{ backgroundImage: `url(${images[current]})` }}
      />

      {/* Dark Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">
        <span className="hero-badge">Trusted by Leading MNCs</span>

        <h1 className="hero-title">
          India's Corporate <br />
          <span>Skill</span> Development Partner
        </h1>

        <p className="hero-subtitle">
          Empowering organizations with expert-led training programs.
        </p>

        <button className="hero-btn">
          Book Consultation — Discovery Call
        </button>

        {/* Stats */}
        <div className="hero-stats">
          <div className="stat-card">
            <h3>500+</h3>
            <span>Workshops</span>
          </div>

          <div className="stat-card">
            <h3>95%</h3>
            <span>Satisfaction</span>
          </div>

          <div className="stat-card">
            <h3>40+</h3>
            <span>Corporate Clients</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
