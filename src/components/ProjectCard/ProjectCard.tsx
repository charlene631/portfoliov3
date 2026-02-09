import type { Project } from "../../data/projects";
import "./ProjectCard.css";

type Props = { project: Project };

export const ProjectCard = ({ project }: Props) => {
  return (
    <article className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p><strong>Contexte :</strong> {project.context}</p>
      <p><strong>Rôle :</strong> {project.role}</p>
      <p><strong>Technologies :</strong> {project.techs.join(", ")}</p>
      <div className="links">
        {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Voir le projet</a>}
        {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">Voir le code</a>}
      </div>
    </article>
  );
};
