import { projects } from "../data/projects";
import ProjectCarousel from "../components/ProjectCarousel";

export default function ProjectsSection() {
  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-8 text-center text-primary">
        Featured Projects
      </h2>
      <ProjectCarousel projects={projects} />
    </section>
  );
}
