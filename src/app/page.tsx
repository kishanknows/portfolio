import Background from "../components/Background";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import AboutSection from "../sections/AboutSection";
import CodingSection from "../sections/CodingSection";
import ContactSection from "../sections/ContactSection";
import ExperienceSection from "../sections/ExperienceSection";
import HeroSection from "../sections/HeroSection";
import ProjectsSection from "../sections/ProjectsSection";
import SkillsSection from "../sections/SkillsSection";

export default function Home() {
  return (
    <>
      <Background />
      <Navbar />
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <CodingSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
