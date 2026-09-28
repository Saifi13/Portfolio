import { useState } from "react";
import Button from "../components/Button.jsx";
import Icon from "../components/Icon.jsx";
import Reveal from "../components/Reveal.jsx";
import { EMAIL, PHONE, GITHUB, LINKEDIN } from "../data/projects.js";

const methods = [
  { icon: "mail", label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: "phone", label: "Phone", value: PHONE, href: `tel:${PHONE}` },
  {
    icon: "linkedin",
    label: "LinkedIn",
    value: "Saifi Raza",
    href: LINKEDIN,
    external: true,
  },
  {
    icon: "github",
    label: "GitHub",
    value: "github.com/Saifi13",
    href: GITHUB,
    external: true,
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = `Portfolio enquiry from ${form.name || "a visitor"}`;
    const body = `${form.message}\n\n—\nName: ${form.name}\nEmail: ${form.email}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-grid">
          <Reveal className="contact-info">
            <div className="eyebrow">Contact</div>
            <h2>Let&apos;s build something useful.</h2>
            <p>Have a project, opportunity or idea? Let&apos;s talk.</p>

            <div className="contact-methods">
              {methods.map((m) => (
                <a
                  key={m.label}
                  className="cmethod"
                  href={m.href}
                  {...(m.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <span className="cm-ico">
                    <Icon name={m.icon} size={18} />
                  </span>
                  <span>
                    <span className="cm-lbl">{m.label}</span>
                    <span className="cm-val">{m.value}</span>
                  </span>
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form className="contact-form" onSubmit={onSubmit}>
              <div className="field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or opportunity..."
                  value={form.message}
                  onChange={onChange}
                  required
                />
              </div>
              <div className="form-actions">
                <Button type="submit" iconEnd="send">
                  Send Message
                </Button>
              </div>
              <p className="form-note">
                This opens your email client with the message pre-filled — no
                data is stored or sent to a server.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
