import { useEffect, useState } from "react";
import Button from "./Button.jsx";
import { RESUME_URL } from "../data/projects.js";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id) => (e) => {
    e.preventDefault();
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <header className={`nav ${scrolled ? "scrolled" : ""}`}>
        <nav className="container">
          <div className="nav-inner">
            <a href="#home" className="brand" onClick={go("home")}>
              Saifi<span>.</span>
            </a>

            <ul className="nav-links">
              {links.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    className={`nav-link ${active === l.id ? "active" : ""}`}
                    onClick={go(l.id)}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="nav-actions">
              <Button
                className="btn-resume"
                variant="ghost"
                size="sm"
                href={RESUME_URL}
                icon="download"
                external
                aria-label="Download resume"
              >
                Resume
              </Button>
              <Button
                className="btn-connect"
                variant="primary"
                size="sm"
                href="#contact"
                onClick={go("contact")}
              >
                Let&apos;s Connect
              </Button>
              <button
                className={`nav-toggle ${open ? "open" : ""}`}
                onClick={() => setOpen((v) => !v)}
                aria-label="Toggle menu"
                aria-expanded={open}
              >
                <span />
              </button>
            </div>
          </div>
        </nav>
      </header>

      <div className={`mobile-menu ${open ? "open" : ""}`}>
        {links.map((l, i) => (
          <a
            key={l.id}
            href={`#${l.id}`}
            className="m-link"
            onClick={go(l.id)}
            style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
          >
            {l.label}
          </a>
        ))}
        <div className="m-actions">
          <Button variant="primary" href={RESUME_URL} icon="download" external>
            Download Resume
          </Button>
          <Button variant="ghost" href="#contact" onClick={go("contact")}>
            Let&apos;s Connect
          </Button>
        </div>
      </div>
    </>
  );
}
