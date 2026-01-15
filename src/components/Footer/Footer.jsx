import "./Footer.css"
import logo from "../../assets/images/skillowlwebsitelogo.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT: BRAND */}
        <div className="footer-brand">
          <img src={logo} alt="SkillOwl Logo" />
          <h3>SkillOwl</h3>
          <p className="footer-tagline">Learning that Soars</p>

          <p className="footer-desc">
            Transforming corporate India through expert-led training programs.
            Building tomorrow's leaders today.
          </p>

          <div className="footer-socials">
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="Instagram">ig</a>
            <a href="#" aria-label="Facebook">fb</a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/services">Services</a>
          <a href="/contact">Contact Us</a>
        </div>

        {/* CONTACT */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>📞 +91 8400666686</p>
          <p>✉️ saumya.tripathi19@gmail.com</p>
        </div>

        {/* NEWSLETTER */}
        <div className="footer-newsletter">
          <h4>Stay Updated</h4>
          <p>
            Subscribe to our newsletter for training insights and updates.
          </p>

          <div className="newsletter-box">
            <input type="email" placeholder="Your email" />
            <button>Subscribe ✈️</button>
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <p>© 2024 SkillOwl. All rights reserved.</p>
        <p>Made with ❤️ in India</p>
      </div>
    </footer>
  )
}

export default Footer
