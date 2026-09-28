import Icon from "../components/Icon.jsx";
import Reveal from "../components/Reveal.jsx";
import { skillGroups } from "../data/projects.js";

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <Reveal className="section-head">
          <div className="eyebrow">Skills</div>
          <h2 className="section-title">Technologies I work with</h2>
          <p className="section-sub">
            A practical toolkit spanning the frontend, backend, database and AI
            layers of the applications I build.
          </p>
        </Reveal>

        <div className="skills-grid">
          {skillGroups.map((g, i) => (
            <Reveal key={g.title} delay={i * 80}>
              <div className="skill-card">
                <div className="sc-head">
                  <span className="sc-ico">
                    <Icon name={g.icon} size={19} />
                  </span>
                  <h4>{g.title}</h4>
                </div>
                <div className="chips">
                  {g.skills.map((s) => (
                    <span className="chip" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
