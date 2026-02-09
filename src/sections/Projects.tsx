import { projects } from "../data/projects";
import { ProjectCard } from "../components/ProjectCard/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </section>
  );
}
