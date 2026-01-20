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

        {/* BIG LOGO ONLY */}
        <Link
          to="/"
          className="navbar-logo"
          onClick={() => setMenuOpen(false)}
        >
          <img src={logo} alt="SkillOwl Logo" />
        </Link>

        {/* MENU */}
        <nav className={`navbar-menu ${menuOpen ? "open" : ""}`}>
          <NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/services" onClick={() => setMenuOpen(false)}>Services</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>

          {/* MOBILE CTA */}
          <button className="nav-cta mobile">Book a Call</button>
        </nav>

        {/* DESKTOP CTA */}
        <button className="nav-cta desktop">Book a Call</button>

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
