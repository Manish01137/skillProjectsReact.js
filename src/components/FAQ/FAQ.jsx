import { useEffect, useRef, useState } from "react"
import "./FAQ.css"

const faqData = [
  {
    q: "What types of corporate training programs do you offer?",
    a: "We offer leadership development, behavioural training, communication skills, team building programs, public speaking, and one-on-one executive coaching tailored for organizations."
  },
  {
    q: "Do you provide customized training solutions?",
    a: "Yes. All our programs can be customized based on your organization’s goals, industry challenges, team size, and experience levels."
  },
  {
    q: "Who conducts the training sessions?",
    a: "Our sessions are led by Dr. Saumya Tripathi and a team of certified corporate trainers with extensive industry and leadership experience."
  },
  {
    q: "Do you offer in-person and virtual training?",
    a: "Absolutely. We offer in-person, virtual, and hybrid training formats depending on your requirements."
  },
  {
    q: "How long are your training programs?",
    a: "Program duration ranges from half-day workshops to multi-week leadership development programs, depending on the scope and objectives."
  },
  {
    q: "How do you measure training effectiveness?",
    a: "We use pre- and post-training assessments, participant feedback, behavioural observation, and performance metrics to measure effectiveness."
  }
]

const FAQ = () => {
  // ✅ First FAQ open by default
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef(null)

  // ✅ Animate on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          sectionRef.current.classList.add("visible")
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)

    return () => observer.disconnect()
  }, [])

  // ✅ Auto-close others (accordion)
  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index)
  }

  return (
    <section className="faq-section fade-up" id="faq" ref={sectionRef}>
      <div className="faq-header">
        <h2>
          Frequently Asked <span>Questions</span>
        </h2>
        <p>
          Everything you need to know about our corporate training programs
        </p>
      </div>

      <div className="faq-list">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <span>{item.q}</span>
              <div className="faq-icon">
                {activeIndex === index ? "−" : "+"}
              </div>
            </div>

            <div className="faq-answer">
              <p>{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQ
