import React from "react";
import { Github, ExternalLink, Star } from "lucide-react";
import { projects } from "../data/content.js";
import Reveal from "./Reveal.jsx";

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <Reveal>
          <span className="section-eyebrow">Selected work</span>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">
            A few systems I've designed and shipped end to end.
          </p>
        </Reveal>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={(i % 4) + 1}>
              <article
                className={`glass-panel glass-panel--interactive projects__card ${
                  project.featured ? "projects__card--featured" : ""
                }`}
              >
                {project.featured && (
                  <div className="projects__featured-badge">
                    <Star size={12} /> Featured
                  </div>
                )}

                <h3>{project.name}</h3>
                <p className="projects__desc">{project.description}</p>

                <div className="projects__tech">
                  {project.tech.map((t) => (
                    <span key={t} className="projects__tech-tag text-mono">
                      {t}
                    </span>
                  ))}
                </div>

                <ul className="projects__features">
                  {project.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>

                <div className="projects__links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--ghost btn--sm"
                    >
                      <Github size={15} /> Code
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--ghost btn--sm"
                    >
                      <ExternalLink size={15} /> Live Demo
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .projects__grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .projects__card {
          padding: 32px;
          display: flex;
          flex-direction: column;
          position: relative;
        }

        .projects__card--featured {
          border-color: var(--panel-border-strong);
        }

        .projects__featured-badge {
          position: absolute;
          top: -1px;
          right: 24px;
          transform: translateY(-50%);
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          padding: 5px 12px;
          border-radius: 999px;
          background: var(--accent-amber);
          color: #0b0e14;
          font-weight: 600;
        }

        .projects__card h3 {
          font-family: var(--font-display);
          font-size: 22px;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .projects__desc {
          color: var(--text-secondary);
          font-size: 15px;
          line-height: 1.65;
          margin-bottom: 18px;
        }

        .projects__tech {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-bottom: 20px;
        }

        .projects__tech-tag {
          font-size: 12px;
          padding: 5px 11px;
          border-radius: 6px;
          background: var(--accent-cyan-dim);
          color: var(--accent-cyan);
        }

        .projects__features {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 24px;
          flex-grow: 1;
        }

        .projects__features li {
          font-size: 14px;
          color: var(--text-secondary);
          padding-left: 16px;
          position: relative;
          line-height: 1.5;
        }

        .projects__features li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 8px;
          width: 6px;
          height: 1px;
          background: var(--accent-amber);
        }

        .projects__links {
          display: flex;
          gap: 12px;
          margin-top: auto;
        }

        @media (max-width: 860px) {
          .projects__grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
