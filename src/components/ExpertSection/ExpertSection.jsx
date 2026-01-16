import { useEffect, useRef, useState } from "react"
import "./ExpertSection.css"
import expertImg from "../../assets/images/m1.jpeg"

const useCountUp = (end, startWhenVisible) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!startWhenVisible) return

    let start = 0
    const duration = 1200
    const increment = end / (duration / 16)

    const counter = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(counter)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(counter)
  }, [end, startWhenVisible])

  return count
}

const ExpertSection = () => {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setVisible(true),
      { threshold: 0.4 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const years = useCountUp(15, visible)
  const companies = useCountUp(100, visible)

  return (
    <section className={`expert ${visible ? "show" : ""}`} id="expert" ref={sectionRef}>
      <div className="expert-header">
        <span className="expert-badge">MEET YOUR EXPERT</span>
        <h2>
          Discover the <span>SkillOwl</span> Difference
        </h2>
        <p>
          Learn how Dr. Saumya Tripathi is revolutionizing corporate training
          across India.
        </p>
      </div>

      <div className="expert-wrapper">
        {/* IMAGE */}
        <div className="expert-image">
          <img src={expertImg} alt="SkillOwl Expert" />
        </div>

        {/* STATS */}
        <div className="expert-stats">
          <div className="expert-card">
            <h3>{years}<span>+</span></h3>
            <p>Years Industry Experience</p>
          </div>

          <div className="expert-card">
            <h3>{companies}<span>+</span></h3>
            <p>Companies Successfully Trained</p>
          </div>

          <div className="expert-card highlight">
            <h3>Excellent<span>+</span></h3>
            <p>Client Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExpertSection
