import { useState } from "react"
import "./Testimonials.css"

const testimonials = [
  {
    quote:
      "SkillOwl's training helped us reduce interdepartmental friction by 60%. The practical frameworks are now part of our SOPs.",
    name: "Amit Patel",
    role: "Chief Operating Officer",
    company: "Wipro Limited",
    image: "/images/testimonials/amit.jpg",
  },
  {
    quote:
      "Dr. Tripathi's leadership program transformed our middle management. We saw a 35% improvement in performance and collaboration.",
    name: "Rajesh Kumar",
    role: "VP Human Resources",
    company: "Infosys Technologies",
    image: "/images/testimonials/rajesh.jpg",
  },
]

const Testimonials = () => {
  const [active, setActive] = useState(0)

  const next = () =>
    setActive((prev) => (prev + 1) % testimonials.length)

  const prev = () =>
    setActive((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    )

  const t = testimonials[active]

  return (
    <section className="testimonials">
      <h2>
        What <span>Leaders Say</span>
      </h2>

      <div className="testimonial-card">
        <span className="quote-icon">“</span>

        <p className="testimonial-text">{t.quote}</p>

        <div className="testimonial-user">
          <img src={t.image} alt={t.name} />
          <div>
            <h4>{t.name}</h4>
            <p>{t.role}</p>
            <strong>{t.company}</strong>

            <div className="stars">★★★★★</div>
          </div>
        </div>

        <div className="testimonial-nav">
          <button onClick={prev}>‹</button>
          <button onClick={next}>›</button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
