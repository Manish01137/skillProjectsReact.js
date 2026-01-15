import Hero from "../components/Hero/Hero"
import Stats from "../components/Stats/Stats"
import ServicesSection from "../components/ServicesSection/ServicesSection"
import TrainingGallery from "../components/TrainingGallery/TrainingGallery"
import Testimonials from "../components/Testimonials/Testimonials"
import FAQ from "../components/FAQ/FAQ"

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesSection />
      <TrainingGallery />
      <Testimonials />
      <FAQ />
    </>
  )
}

export default Home
