import React from "react";
import { skills } from "../data/content.js";
import Reveal from "./Reveal.jsx";

export default function Skills() {
  const categories = Object.entries(skills);

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <Reveal>
          <span className="section-eyebrow">Toolbox</span>
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">
            The languages, frameworks, and tools I reach for when building something real.
          </p>
        </Reveal>

        <div className="skills__grid">
          {categories.map(([category, items], i) => (
            <Reveal key={category} delay={(i % 4) + 1}>
              <div className="glass-panel glass-panel--interactive skills__card">
                <h3 className="text-mono">{category}</h3>
                <div className="skills__tags">
                  {items.map((skill) => (
                    <span key={skill} className="skills__tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .skills__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .skills__card {
          padding: 26px 24px;
          height: 100%;
        }

        .skills__card h3 {
          font-size: 12.5px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--accent-amber);
          margin-bottom: 18px;
          font-weight: 500;
        }

        .skills__tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .skills__tag {
          font-size: 13.5px;
          padding: 7px 13px;
          border-radius: 999px;
          background: var(--bg-elevated);
          border: 1px solid var(--panel-border);
          color: var(--text-primary);
          transition: border-color var(--transition-base), color var(--transition-base);
        }

        .skills__tag:hover {
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
        }

        @media (max-width: 860px) {
          .skills__grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
