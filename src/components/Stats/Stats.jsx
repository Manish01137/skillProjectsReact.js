import { useEffect, useRef, useState } from "react"
import "./Stats.css"

const StatCard = ({ value, label }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return

        let start = 0
        const duration = 1200
        const increment = value / (duration / 16)

        const counter = setInterval(() => {
          start += increment
          if (start >= value) {
            setCount(value)
            clearInterval(counter)
          } else {
            setCount(Math.floor(start))
          }
        }, 16)

        observer.disconnect()
      },
      { threshold: 0.5 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [value])

  return (
    <div className="stat-card" ref={ref}>
      <h3>{count}{value >= 100 ? "+" : "%"}</h3>
      <p>{label}</p>
    </div>
  )
}

const Stats = () => {
  return (
    <section className="stats dark-section" id="stats">
      <h2>
        Measurable <span>Impact & Achievements</span>
      </h2>

      <div className="stats-grid">
        <StatCard value={85} label="Satisfaction Rate" />
        <StatCard value={40} label="Productivity Boost" />
        <StatCard value={500} label="Employees Trained" />
      </div>
    </section>
  )
}

export default Stats
