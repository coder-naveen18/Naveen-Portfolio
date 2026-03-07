import { useEffect, useState } from "react";
import { AnimatedBackground } from "../components/AnimatedBackground";
import { SplashScreen } from "../components/SplashScreen";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { HeroSection } from "../components/sections/HeroSection";
import { ExperienceSection } from "../components/sections/ExperienceSection";
import { ProjectsSection } from "../components/sections/ProjectsSection";
import { SkillsSection } from "../components/sections/SkillsSection";
import { EducationAndRecognition } from "../components/sections/EducationAndRecognition";
import { OpenSourceSection } from "../components/sections/OpenSourceSection";
import { Toast } from "../components/ui/Toast";
import { RESUME_DATA } from "../data/resumeData";

export default function AppModular() {
  const [isLoading, setIsLoading] = useState(true);
  const [expandedExperienceId, setExpandedExperienceId] = useState<
    number | null
  >(RESUME_DATA.experience[0]?.id ?? null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (!target) return;

    target.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const handleToggleExperience = (id: number) => {
    setExpandedExperienceId((current) => (current === id ? null : id));
  };

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText(RESUME_DATA.basics.email);
      setShowToast(true);
    } catch (err) {
      // Fallback: try mailto
      window.location.href = `mailto:${RESUME_DATA.basics.email}`;
    }
  };

  if (isLoading) {
    return <SplashScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen text-light/80 selection:bg-rust/30">
      <AnimatedBackground />

      <Navbar
        scrolled={isScrolled}
        isMenuOpen={isMenuOpen}
        onToggleMenu={() => setIsMenuOpen((open) => !open)}
        onNavigate={scrollToSection}
        contactEmail={RESUME_DATA.basics.email}
        onEmailClick={handleEmailClick}
      />

      <HeroSection
        basics={RESUME_DATA.basics}
        onViewExperience={() => scrollToSection("experience")}
      />

      <ExperienceSection
        experience={RESUME_DATA.experience}
        expandedExperienceId={expandedExperienceId}
        onToggle={handleToggleExperience}
      />

      <ProjectsSection projects={RESUME_DATA.projects} />

      <SkillsSection skills={RESUME_DATA.skills} />

      <EducationAndRecognition
        education={RESUME_DATA.education}
        certifications={RESUME_DATA.certifications}
      />

      <OpenSourceSection openSource={RESUME_DATA.openSource} />

      <Footer basics={RESUME_DATA.basics} />

      {showToast && (
        <Toast
          message="Email copied to clipboard!"
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
}
