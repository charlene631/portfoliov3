import { projects } from "../data/projects";
import { technicalProjects } from "../data/technicalProjects";
import { ProjectCard } from "../components/ProjectCard/ProjectCard";
import { TechnicalProjectCard } from "../components/ProjectCard/technicalProjectCard";
import "./Projects.css"; 

export default function Projects() {
  return (
    <> 
     <h2 className="projects-title">Infrastructure & Systèmes</h2>
      <section id="technical-projects" className="technical-projects-section">
        {technicalProjects.map((project) => (
          <TechnicalProjectCard key={project.title} project={project} />
        ))}
      </section>
      
    <h2 className="projects-title">Projets de développement</h2>
      <section id="projects" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </section>
    </>
  );
}
