import HeroSection from "../sections/HeroSection";
import ProjectsSection from "../sections/ProjectsSection";
import ContactSection from "../sections/ContactSection";
import DsaCpSection from "../sections/DsaCpSection";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-white">
        {/* Hero Section - Full width with creative background */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50 opacity-60"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <section
            id="hero"
            className="relative animate-fade-in-up duration-700"
          >
            <HeroSection />
          </section>
        </div>

        {/* Projects Section - Offset grid layout */}
        <div className="relative py-20">
          <div className="absolute inset-0 bg-gray-50 skew-y-3 z-0"></div>
          <section
            id="projects"
            className="relative z-10 animate-fade-in-up duration-700"
          >
            <ProjectsSection />
          </section>
        </div>

        {/* DSA & CP Section - Centered with gradient background */}
        <div className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-white"></div>
          <div className="absolute -top-1/2 left-0 w-96 h-96 bg-orange-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
          <section
            id="dsa-cp"
            className="relative z-10 animate-fade-in-up duration-700"
          >
            <DsaCpSection />
          </section>
        </div>

        {/* Contact Section - Clean white background with subtle patterns */}
        <div className="relative bg-white">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <section
            id="contact"
            className="relative z-10 animate-fade-in-up duration-700"
          >
            <ContactSection />
          </section>
        </div>
      </main>
    </>
  );
}
