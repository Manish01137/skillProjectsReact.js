import "./UpdatesSection.css"

const updates = [
  {
    date: "Jan 20, 2024",
    title: "Free Webinar: Communication Strategies for Hybrid Teams",
    desc:
      "Join Dr. Saumya Tripathi for a complimentary webinar on effective communication strategies for hybrid teams.",
    tag: "Event",
  },
  {
    date: "Jan 15, 2024",
    title: "New Leadership Development Program Launch",
    desc:
      "Introducing our comprehensive 6-week Leadership Excellence Program crafted for mid-level managers.",
    tag: "Event",
  },
  {
    date: "Jan 12, 2024",
    title: "Partnership with IIM Bangalore for Executive Program",
    desc:
      "SkillOwl partners with IIM Bangalore to co-create an advanced executive development program.",
    tag: "News",
  },
  {
    date: "Jan 10, 2024",
    title: "SkillOwl Achieves 95% Client Retention Rate",
    desc:
      "We achieved a 95% client retention rate in 2023, reflecting commitment to excellence.",
    tag: "Achievement",
  },
  {
    date: "Jan 8, 2024",
    title: "Featured in Economic Times – Corporate Training Trends",
    desc:
      "Dr. Tripathi’s insights on the future of workplace learning featured in Economic Times.",
    tag: "News",
  },
  {
    date: "Jan 5, 2024",
    title: "500+ Professionals Milestone Achieved",
    desc:
      "Successfully trained over 500 professionals across 100+ organizations.",
    tag: "Achievement",
  },
]

const UpdatesSection = () => {
  return (
    <section className="updates dark-section">
      {/* HEADER */}
      <div className="updates-header">
        <span className="updates-badge">STAY UPDATED</span>

        <h2>
          Upcoming Updates & <span>Announcements</span>
        </h2>

        <p>
          Stay informed about our latest programs, achievements, and industry
          insights.
        </p>
      </div>

      {/* FLOATING GRID */}
      <div className="updates-grid floating-grid">
        {updates.map((item, index) => (
          <div
            key={index}
            className="update-card floating-card"
            style={{
              animationDelay: `${index * 0.6}s`,
            }}
          >
            <span className="update-date">{item.date}</span>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

            <span className={`update-tag ${item.tag.toLowerCase()}`}>
              {item.tag}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default UpdatesSection
