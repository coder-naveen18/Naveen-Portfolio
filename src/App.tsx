import { useScrollReveal } from './hooks'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import TechMarquee from './components/TechMarquee'
import AboutSection from './components/AboutSection'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import CertificatesSection from './components/CertificatesSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function App() {
  useScrollReveal()

  return (
    <>
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <TechMarquee />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificatesSection />
      <ContactSection />
      <Footer />
    </>
  )
}
