import { NavLink, Link } from "react-router-dom"
import { useState } from "react"
import "./Navbar.css"
import logo from "../../assets/images/skillowl-logo.png"

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* LEFT: LOGO */}
        <div className="navbar-left">
          <Link to="/" className="navbar-logo">
            <img src={logo} alt="SkillOwl Logo" />
          </Link>
        </div>

        {/* HAMBURGER (MOBILE) */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* RIGHT: MENU */}
        <nav className={`navbar-menu ${menuOpen ? "open" : ""}`}>
          <NavLink to="/" className="nav-link" onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/about" className="nav-link" onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/services" className="nav-link" onClick={() => setMenuOpen(false)}>Services</NavLink>
          <NavLink to="/contact" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</NavLink>
        </nav>

      </div>
    </header>
  )
}

export default Navbar
