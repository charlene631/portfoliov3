import type { TechnicalProject } from "../../data/technicalProjects";
import "./TechnicalProjectCard.css";

type Props = { project: TechnicalProject };

export const TechnicalProjectCard = ({ project }: Props) => {
  return (
    <article className="technical-project-card">
      <h3>{project.title}</h3>
      <div className="content-wrapper">
        <div className="text-content">
          <p>{project.description}</p>
          <p><strong>Contexte :</strong> {project.context}</p>
          <p><strong>Rôle :</strong> {project.role}</p>
          <p><strong>Technologies :</strong> {project.techs.join(", ")}</p>
          <div className="links">
            {project.docUrl && (
              <a href={project.docUrl} target="_blank" rel="noopener noreferrer">
                Télécharger la documentation
              </a>
            )}
          </div>
        </div>
        {project.screenshots && project.screenshots[0] && (
          <div className="screenshot-container">
            <img
              src={project.screenshots[0]}
              alt={`Capture d'écran de ${project.title}`}
            />
          </div>
        )}
      </div>
    </article>
  );
};