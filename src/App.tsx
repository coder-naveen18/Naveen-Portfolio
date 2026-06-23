import { useScrollReveal } from "./hooks";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TechMarquee from "./components/TechMarquee";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import OpenSourceSection from "./components/OpenSourceSection";
import CertificatesSection from "./components/CertificatesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function App() {
  useScrollReveal();

  return (
    <>
      <Navbar />
      <HeroSection />
      <TechMarquee />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <OpenSourceSection />
      <CertificatesSection />
      <ContactSection />
      <Footer />
    </>
  );
}
