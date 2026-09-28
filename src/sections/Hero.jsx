import Button from "../components/Button.jsx";
import HeroVisual from "../components/HeroVisual.jsx";
import Reveal from "../components/Reveal.jsx";

export default function Hero() {
  const go = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
            <Reveal>
              <div className="status-pill">
                <span className="status-dot" />
                Available for internships &amp; freelance projects
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1>
                I build modern
                <br />
                <span className="grad">digital experiences.</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <div className="hero-role">Full-Stack Developer</div>
            </Reveal>

            <Reveal delay={220}>
              <p className="hero-text">
                I build practical web applications, AI-powered tools, and
                polished digital experiences with modern technologies.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="hero-cta">
                <Button href="#projects" onClick={go("projects")} iconEnd="arrow">
                  View My Work
                </Button>
                <Button variant="ghost" href="#contact" onClick={go("contact")}>
                  Let&apos;s Connect
                </Button>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200}>
            <HeroVisual />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
