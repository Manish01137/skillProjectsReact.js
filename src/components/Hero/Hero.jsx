import { useEffect, useState } from "react"
import "./Hero.css"

import hero1 from "../../assets/images/mam1.png"
import hero2 from "../../assets/images/m1hd.jpeg"
import hero3 from "../../assets/images/m2hd.jpeg"
import hero4 from "../../assets/images/m3hd.jpeg"

const images = [hero1, hero2, hero3, hero4]

const Hero = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero" id="hero">
      {/* Background Images */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`hero-bg ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}

      {/* Gradient Overlay */}
      <div className="hero-overlay" />

      {/* Content */}
      <div className="hero-content">

        <div className="hero-badge">
          <span className="dot" />
          Trusted by Leading MNCs
        </div>

        <h1 className="hero-title">
          India&apos;s <br />
          <span className="highlight">Corporate</span> Skill <br />
          Development Partner
        </h1>

        <p className="hero-subtitle">
          Empowering organizations with expert-led training programs.
        </p>

        <div className="hero-actions">
          <button className="btn-primary">
            Book Consultation →
          </button>

          <button className="btn-outline">
            ▶ Discovery Call
          </button>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <h3>500+</h3>
            <p>WORKSHOPS</p>
          </div>
          <div className="stat">
            <h3>95%</h3>
            <p>SATISFACTION</p>
          </div>
          <div className="stat">
            <h3>40+</h3>
            <p>CLIENTS</p>
          </div>
        </div>
      </div>

      {/* Slider Dots */}
      <div className="hero-dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === current ? "active" : ""}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        SCROLL
        <span className="line" />
      </div>
    </section>
  )
}

export default Hero
