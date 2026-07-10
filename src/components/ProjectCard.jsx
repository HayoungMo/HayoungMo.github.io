import { ArrowUpRight, Code2 } from "lucide-react";
import TechBadge from "./TechBadge";

function ProjectCard({ project }) {
  return (
    <article className={`project-card ${project.featured ? "featured" : ""}`}>
      <div className="project-card-top">
        <p className="project-type">{project.type}</p>
        <h3>{project.title}</h3>
        <p className="project-summary">{project.summary}</p>
      </div>

      <div className="project-points">
        <div>
          <strong>Problem</strong>
          <p>{project.problem}</p>
        </div>
        <div>
          <strong>Solution</strong>
          <p>{project.solution}</p>
        </div>
      </div>

      <div className="tech-list">
        {project.techStack.map((tech) => (
          <TechBadge key={tech} label={tech} />
        ))}
      </div>

      <div className="card-links">
        {project.links.github && (
          <a href={project.links.github} target="_blank" rel="noreferrer">
            <Code2 size={17} />
            GitHub
          </a>
        )}
        {project.links.demo && (
          <a href={project.links.demo} target="_blank" rel="noreferrer">
            <ArrowUpRight size={17} />
            Demo
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
