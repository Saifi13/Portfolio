import { EMAIL, GITHUB, LINKEDIN } from "../data/projects.js";

const links = [
  { label: "GitHub", href: GITHUB },
  { label: "LinkedIn", href: LINKEDIN },
  { label: "Email", href: `mailto:${EMAIL}` },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="brand">
              Saifi<span>.</span>
            </div>
            <div className="fb-role">Full-Stack Developer</div>
          </div>

          <ul className="footer-links">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  {...(l.href.startsWith("mailto:")
                    ? {}
                    : { target: "_blank", rel: "noopener noreferrer" })}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-copy">
          © {new Date().getFullYear()} Saifi. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
