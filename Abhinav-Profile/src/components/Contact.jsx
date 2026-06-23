import React from "react";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { contact } from "../data/content.js";
import Reveal from "./Reveal.jsx";
import ApertureMotif from "./ApertureMotif.jsx";

const CONTACT_ITEMS = [
  { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { icon: Phone, label: "Phone", value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
  { icon: Linkedin, label: "LinkedIn", value: "View Profile", href: contact.linkedin },
  { icon: Github, label: "GitHub", value: "View Profile", href: contact.github },
];

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <Reveal>
          <span className="section-eyebrow">Get in touch</span>
          <h2 className="section-title">Let's work together</h2>
          <p className="section-subtitle">
            Open to internships and collaborations — reach out through any of these.
          </p>
        </Reveal>

        <Reveal delay={1}>
          <div className="glass-panel glass-panel--strong contact__panel">
            <div className="aperture" style={{ bottom: "-30px", right: "-30px" }}>
              <ApertureMotif size={140} blades={7} />
            </div>

            <div className="contact__grid">
              {CONTACT_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="contact__item"
                >
                  <div className="contact__icon">
                    <item.icon size={19} />
                  </div>
                  <div>
                    <p className="contact__label text-mono">{item.label}</p>
                    <p className="contact__value">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <style>{`
        .contact__panel {
          padding: 44px;
          position: relative;
          overflow: hidden;
        }

        .contact__grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
          position: relative;
          z-index: 1;
        }

        .contact__item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 18px 20px;
          border-radius: var(--radius-md);
          background: var(--bg-elevated);
          border: 1px solid var(--panel-border);
          transition: border-color var(--transition-base), transform var(--transition-base);
        }

        .contact__item:hover {
          border-color: var(--accent-cyan);
          transform: translateY(-3px);
        }

        .contact__icon {
          width: 42px;
          height: 42px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          background: var(--accent-cyan-dim);
          color: var(--accent-cyan);
        }

        .contact__label {
          font-size: 11.5px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--text-tertiary);
          margin-bottom: 3px;
        }

        .contact__value {
          font-size: 15px;
          font-weight: 500;
          color: var(--text-primary);
        }

        @media (max-width: 700px) {
          .contact__panel {
            padding: 28px;
          }
          .contact__grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
