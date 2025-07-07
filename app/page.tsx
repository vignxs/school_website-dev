import Header from "../components/header"
import Hero from "../components/hero"
import About from "../components/about"
import Features from "../components/features"
import AdmissionBanner from "../components/admission-banner"
import Events from "../components/events"
import Gallery from "../components/gallery"
import Stats from "../components/stats"
import ContactCTA from "../components/contact-cta"
import Footer from "../components/footer"
import Facilities from "../components/facilities"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <Hero />
      <About />
      <Features />
      <AdmissionBanner />
      <Events />
      <Facilities />
      <Gallery />
      <Stats />
      <ContactCTA />
      <Footer />
    </div>
  )
}
