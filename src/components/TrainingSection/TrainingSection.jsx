import { useState } from "react"
import "./TrainingSection.css"

const trainingData = {
  behavioural: {
    desc:
      "Empowering individuals to improve performance and workplace effectiveness through experiential learning.",
    left: [
      "Leadership Development",
      "Communication & Interpersonal Skills",
      "Conflict Management & Negotiation",
    ],
    right: [
      "Emotional Intelligence",
      "Critical Thinking & Problem Solving",
      "Personal Effectiveness & Time Management",
    ],
  },
  team: {
    desc:
      "Programs designed to strengthen relationships, enhance collaboration, and improve communication within teams.",
    left: [
      "Off-site / Outbound Team Building",
      "Collaboration & Trust Building",
      "Leadership Alignment Workshops",
    ],
    right: [
      "On-site Team Building Programs",
      "Team Communication Excellence",
      "Experiential Learning Activities",
    ],
  },
  speaking: {
    desc:
      "Helping individuals build confidence, clarity, and impact when speaking in front of an audience.",
    left: [
      "Keynote Speeches",
      "Motivational Speaking",
      "Confidence on Stage",
    ],
    right: [
      "Business Storytelling",
      "Presentation Skills",
      "Executive Communication",
    ],
  },
  coaching: {
    desc:
      "Personalized coaching to achieve goals, enhance performance, and overcome professional challenges.",
    left: [
      "Public Speaking Coaching",
      "Confidence Building",
      "Leadership Coaching",
    ],
    right: [
      "Executive Presence",
      "Career & Goal Setting",
      "Personal Growth & Clarity",
    ],
  },
}

const TrainingSection = () => {
  const [active, setActive] = useState("behavioural")

  return (
    <section className="training dark-section" id="services">
      <h2>
        Corporate Training <span>Expert in India</span>
      </h2>

      {/* TABS */}
      <div className="training-tabs">
        {[
          ["behavioural", "Behavioural Training"],
          ["team", "Team Building Program"],
          ["speaking", "Public Speaking"],
          ["coaching", "One-on-One Coaching"],
        ].map(([key, label]) => (
          <button
            key={key}
            className={active === key ? "active" : ""}
            onClick={() => setActive(key)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <div className="training-panel">
        <p className="training-desc">{trainingData[active].desc}</p>

        <div className="training-lists">
          <ul>
            {trainingData[active].left.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <ul>
            {trainingData[active].right.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default TrainingSection
