import Icon from "../components/Icon.jsx";
import Reveal from "../components/Reveal.jsx";
import { services } from "../data/projects.js";

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="container">
        <Reveal className="section-head">
          <div className="eyebrow">What I Build</div>
          <h2 className="section-title">Capabilities across the stack</h2>
          <p className="section-sub">
            From responsive interfaces to the APIs, databases and AI behind
            them.
          </p>
        </Reveal>

        <div className="services-grid">
          {services.map((s, i) => (
            <Reveal key={s.num} delay={i * 90}>
              <div className="service">
                <div className="s-num">{s.num}</div>
                <div className="s-ico">
                  <Icon name={s.icon} size={22} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
