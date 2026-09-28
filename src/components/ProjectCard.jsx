import Button from "./Button.jsx";
import Icon from "./Icon.jsx";
import ProjectVisual from "./ProjectVisual.jsx";
import Reveal from "./Reveal.jsx";

export default function ProjectCard({ project }) {
  const {
    num,
    title,
    description,
    tech,
    features,
    live,
    github,
    image,
    imageAlt,
    note,
  } = project;

  return (
    <Reveal className="project" as="article">
      <div className="project-info">
        <div className="project-num">PROJECT {num}</div>
        <div className="project-title-row">
          <h3 className="project-title">{title}</h3>
          <a
            className="project-arrow"
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${title} live demo`}
          >
            <Icon name="arrowUpRight" size={19} />
          </a>
        </div>
        <p className="project-desc">{description}</p>
        {note && (
          <p className="project-desc" style={{ marginTop: 8, color: "var(--accent)", fontSize: 13.5 }}>
            {note}
          </p>
        )}

        <ul className="project-features">
          {features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>

        <div className="tags">
          {tech.map((t) => (
            <span className="tag" key={t}>
              {t}
            </span>
          ))}
        </div>

        <div className="project-cta">
          <Button variant="primary" size="sm" href={live} iconEnd="arrow" external>
            Live Demo
          </Button>
          <Button variant="ghost" size="sm" href={github} icon="github" external>
            GitHub
          </Button>
        </div>
      </div>

      <div className="project-visual">
        <ProjectVisual image={image} alt={imageAlt} url={live.replace(/^https?:\/\//, "")} />
      </div>
    </Reveal>
  );
}
