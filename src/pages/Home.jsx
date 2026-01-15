import Hero from "../components/Hero/Hero"
import ExpertSection from "../components/ExpertSection/ExpertSection"
import Stats from "../components/Stats/Stats"
import TrainingSection from "../components/TrainingSection/TrainingSection"
import UpdatesSection from "../components/UpdatesSection/UpdatesSection"
import TrainingGallery from "../components/TrainingGallery/TrainingGallery"
import Testimonials from "../components/Testimonials/Testimonials"
import FAQ from "../components/FAQ/FAQ"

const Home = () => {
  return (
    <>
      {/* ================= HERO ================= */}
      <section id="hero">
        <Hero />
      </section>

      {/* ================= AUTHORITY ================= */}
      <section id="expert">
        <ExpertSection />
      </section>

      {/* ========== CONTINUOUS DARK PREMIUM FLOW ========== */}
      <div className="dark-flow">
        <section id="stats">
          <Stats />
        </section>

        <section id="services">
          <TrainingSection />
        </section>

        
      </div>
      {/* ========== DARK FLOW ENDS ========== */}

      {/* ================= GALLERY ================= */}
      <section id="gallery">
        <TrainingGallery />
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section id="testimonials">
        <Testimonials />
      </section>

      <section id="updates">
          <UpdatesSection />
        </section>

      {/* ================= FAQ ================= */}
      <section id="faq">
        <FAQ />
      </section>
    </>
  )
}

export default Home
