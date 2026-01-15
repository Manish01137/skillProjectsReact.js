import { Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"

import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"

import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Contact from "./pages/Contact"

function App() {
  const location = useLocation()

  useEffect(() => {
    // If URL has hash (#section), scroll to that section
    if (location.hash) {
      const section = document.querySelector(location.hash)
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }, 100)
      }
    } else {
      // Default scroll to top on route change
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  }, [location])

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <Navbar />

      {/* ================= MAIN CONTENT ================= */}
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* ================= FOOTER ================= */}
      <Footer />
    </>
  )
}

export default App
