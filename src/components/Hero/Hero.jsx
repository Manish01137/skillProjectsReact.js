import { useEffect, useState } from "react"
import "./Hero.css"

import hero1 from "../../assets/images/mam1.png"
import hero2 from "../../assets/images/m1.jpeg"
import hero3 from "../../assets/images/m2.jpeg"
import hero4 from "../../assets/images/m3.jpeg"

const images = [hero1, hero2, hero3,hero4]

const Hero = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 6000) // slower change
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero" id="hero">
      {/* Background Layers */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`hero-bg ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      <div className="hero-overlay"></div>

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
