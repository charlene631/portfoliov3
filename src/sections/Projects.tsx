import { projects } from "../data/projects";
import { technicalProjects } from "../data/technicalProjects";
import { ProjectCard } from "../components/ProjectCard/ProjectCard";
import { TechnicalProjectCard } from "../components/ProjectCard/technicalProjectCard";
import type { PortfolioMode } from "../hooks/usePortfolioMode";
import "./Projects.css";

type Props = {
  readonly mode: PortfolioMode;
};

export default function Projects({ mode }: Props) {
  const isDevFirst = mode === 'dev';

  // Séparation du projet SaaS et des autres projets dev pour mise en avant
  const saasProject = projects.find(p => p.title === "Text Analysis SaaS");
  const siteWebProjects = projects.filter(p => p.title.includes("e-commerce"));
  const fullStackProjects = projects.filter(p => p.title !== "Text Analysis SaaS" && p.title !== "Site e-commerce");

  // Sections de projets dev
  const DevProjectsSection = (
    <>
      <h3 className="projects-title highlight">Projet le plus récent</h3>
      <section className="hero-project">
        {saasProject && <ProjectCard project={saasProject} />}
      </section>

      <h3 className="projects-title">Applications web</h3>
      <section className="projects-grid">
        {fullStackProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </section>

      <h3 className="projects-title web">Autres projets</h3>
      <section className="projects-grid">
        {siteWebProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </section>         
    </>
  );

  // Section projets infra/système
  const TechProjectsSection = (
    <>
      <h3 className="projects-title">Infrastructure & systèmes</h3>
      <section className="technical-projects-section">
        {technicalProjects.map((project) => (
          <TechnicalProjectCard key={project.title} project={project} />
        ))}
      </section>
    </>
  );

    return  isDevFirst ? (
      <>
        {DevProjectsSection}
        {TechProjectsSection}
      </>
    ) : (

  // MODE TECH : infra d'abord
    <>
      {TechProjectsSection}
      {DevProjectsSection}
    </>
  );
}