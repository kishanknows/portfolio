import Background from "../components/Background";
import Dock from "../components/Dock";
import Footer from "../components/Footer";
import ProfileCard from "../components/ProfileCard";
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
      <Dock />
      <div className="mx-auto max-w-[1480px] px-4 pb-24 sm:px-6 lg:grid lg:grid-cols-[minmax(0,390px)_minmax(0,1fr)] lg:gap-16 lg:px-10 lg:pb-0 lg:pr-32">
        <div className="pt-6 lg:sticky lg:top-0 lg:flex lg:h-screen lg:items-center lg:self-start lg:pt-0">
          <ProfileCard />
        </div>
        <div className="min-w-0">
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
        </div>
      </div>
    </>
  );
}
