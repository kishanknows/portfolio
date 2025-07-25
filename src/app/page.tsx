import HeroSection from "../sections/HeroSection";
import ProjectsSection from "../sections/ProjectsSection";
import ContactSection from "../sections/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800 px-4">
      <HeroSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
