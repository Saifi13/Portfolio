import Button from "../components/Button.jsx";
import Icon from "../components/Icon.jsx";
import Reveal from "../components/Reveal.jsx";
import { highlights, RESUME_URL } from "../data/projects.js";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-copy">
            <Reveal>
              <div className="eyebrow">About</div>
              <h2 className="section-title">
                Turning ideas into functional, polished web experiences.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p style={{ marginTop: 22 }}>
                I enjoy turning ideas into <strong>functional, polished web
                experiences</strong>. My work spans modern frontend development,
                backend systems, databases and AI-powered applications.
              </p>
              <p>
                I focus on building <strong>practical products</strong> with
                clean interfaces and real functionality — from responsive
                frontends to the APIs and databases behind them.
              </p>
            </Reveal>
            <Reveal delay={160} className="about-resume">
              <Button variant="ghost" href={RESUME_URL} icon="download" external>
                Download Resume
              </Button>
            </Reveal>
          </div>

          <div className="highlight-list">
            {highlights.map((h, i) => (
              <Reveal key={h.title} delay={i * 90}>
                <div className="highlight">
                  <span className="h-ico">
                    <Icon name={h.icon} size={19} />
                  </span>
                  <div>
                    <h4>{h.title}</h4>
                    <p>{h.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
