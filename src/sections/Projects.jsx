import ProjectCard from "../components/ProjectCard.jsx";
import Reveal from "../components/Reveal.jsx";
import { projects } from "../data/projects.js";

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <Reveal className="section-head">
          <div className="eyebrow">Portfolio</div>
          <h2 className="section-title">Selected Work</h2>
          <p className="section-sub">
            A selection of applications and experiences I&apos;ve built.
          </p>
        </Reveal>

        <div className="projects-list">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
