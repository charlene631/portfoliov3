import { projects } from "../data/projects";
import { technicalProjects } from "../data/technicalProjects";
import { ProjectCard } from "../components/ProjectCard/ProjectCard";
import { TechnicalProjectCard } from "../components/ProjectCard/technicalProjectCard";
import type { PortfolioMode } from "../hooks/usePortfolioMode";
import "./Projects.css";

type Props = {
  readonly mode: PortfolioMode;
  readonly showDevFirst: boolean;
};

export default function Projects({ mode, showDevFirst }: Props) {
  const saasProject = projects.find(p => p.title === "Text Analysis SaaS");
  const fullStackProjects = projects.filter(p => p.title !== "Text Analysis SaaS");

  // Sections de projets dev
  const DevProjectsSection = (
    <>
      <h2 className="projects-title highlight">Projet le plus récent</h2>
      <section className="hero-project">
        {saasProject && <ProjectCard project={saasProject} />}
      </section>

      <h2 className="projects-title">Applications web</h2>
      <section className="projects-grid">
        {fullStackProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </section>
    </>
  );

  // Section projets infra/système
  const TechProjectsSection = (
    <>
      <h2 className="projects-title">Infrastructure & systèmes</h2>
      <section className="technical-projects-section">
        {technicalProjects.map((project) => (
          <TechnicalProjectCard key={project.title} project={project} />
        ))}
      </section>
    </>
  );

  // INVERSION DE L'ORDRE
  if (showDevFirst) {
    return (
      <>
        {DevProjectsSection}
        {TechProjectsSection}
      </>
    );
  }

  // MODE TECH : infra d'abord
  return (
    <>
      {TechProjectsSection}
      {DevProjectsSection}
    </>
  );
}