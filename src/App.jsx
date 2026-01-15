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
    const handleScroll = () => {
      // If URL contains hash (#section)
      if (location.hash) {
        const target = document.querySelector(location.hash)
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      } else {
        // Default scroll to top on route change
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
    }

    // Delay ensures DOM is fully rendered
    const timeout = setTimeout(handleScroll, 120)

    return () => clearTimeout(timeout)
  }, [location.pathname, location.hash])

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
