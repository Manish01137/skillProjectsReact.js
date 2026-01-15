import { useState } from "react"
import "./Contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    training: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const whatsappNumber = "918400666686"

    const whatsappMessage = `
📞 *New Discovery Call Booking*

📅 Date: ${formData.date}
⏰ Time: ${formData.time}

👤 Name: ${formData.name}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}
🏢 Company: ${formData.company}
🎓 Training: ${formData.training}

📝 Message:
${formData.message || "N/A"}
    `

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`

    window.open(whatsappURL, "_blank")
  }

  return (
    <section className="contact-page">
      {/* HEADER */}
      <div className="contact-header">
        <h1>
          Schedule Your <span>Discovery Call</span>
        </h1>
        <p>Take the first step towards transforming your organization.</p>
      </div>

      <form className="contact-container" onSubmit={handleSubmit}>
        {/* LEFT */}
        <div className="contact-card">
          <h3>📅 Select Date & Time</h3>

          <label>Select Date</label>
          <input type="date" name="date" required onChange={handleChange} />

          <label>Select Time</label>
          <input type="time" name="time" required onChange={handleChange} />
        </div>

        {/* RIGHT */}
        <div className="contact-card">
          <h3>👤 Your Details</h3>

          <label>Full Name *</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            onChange={handleChange}
          />

          <label>Email Address *</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            onChange={handleChange}
          />

          <label>Phone Number *</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter phone number"
            required
            onChange={handleChange}
          />

          <label>Company Name *</label>
          <input
            type="text"
            name="company"
            placeholder="Company name"
            required
            onChange={handleChange}
          />

          <label>Training Requirement *</label>
          <select name="training" required onChange={handleChange}>
            <option value="">Select training type...</option>
            <option>Corporate Training</option>
            <option>Leadership Program</option>
            <option>Technical Upskilling</option>
            <option>Custom Training</option>
          </select>

          <label>Message / Additional Details</label>
          <textarea
            name="message"
            placeholder="Tell us more..."
            rows="4"
            onChange={handleChange}
          />

          <button className="contact-btn" type="submit">
            Confirm Booking on WhatsApp
          </button>
        </div>
      </form>

      {/* CONTACT INFO */}
      <div className="contact-info">
        <div className="info-box">
          📞 <strong>Call Us</strong>
          <p>+91 84006 66686</p>
        </div>

        <div className="info-box">
          ✉️ <strong>Email Us</strong>
          <p>saumyatripathi19@gmail.com</p>
        </div>

        <div className="info-box">
          📍 <strong>Visit Us</strong>
          <p>B-4/138, Vishal Khand, Gomti Nagar, Lucknow, UP</p>
        </div>
      </div>
    </section>
  )
}

export default Contact
