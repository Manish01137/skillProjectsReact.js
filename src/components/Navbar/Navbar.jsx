import { NavLink, Link } from "react-router-dom"
import { useState, useEffect } from "react"
import "./Navbar.css"
import logo from "../../assets/images/skillowlwebsitelogo.png"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">

        {/* LOGO */}
        <Link to="/" className="navbar-logo" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="SkillOwl Logo" />
        </Link>

        {/* MENU */}
        <nav className={`navbar-menu ${menuOpen ? "open" : ""}`}>

          <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>

          <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>

          {/* SERVICES DROPDOWN */}
          <div className="nav-dropdown">
            <span className="nav-link">Services</span>

            <div className="dropdown-menu">
              <NavLink to="/services/ld-training">Learning and Development</NavLink>
              <NavLink to="/services/coaching">One-on-One Coaching</NavLink>
              <NavLink to="/services/content">Content Development</NavLink>
              <NavLink to="/services/outbound">Outbound</NavLink>
              <NavLink to="/services/team-building">Team Building</NavLink>
              <NavLink to="/services/emcee">Corporate Emcee</NavLink>
              <NavLink to="/services/keynote">Keynote Speakers</NavLink>
            </div>
          </div>

          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>

        </nav>

        {/* HAMBURGER */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </div>

      </div>
    </header>
  )
}

export default Navbar
