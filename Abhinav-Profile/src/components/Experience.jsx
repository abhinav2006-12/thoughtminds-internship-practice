import React from "react";
import { Briefcase, Trophy } from "lucide-react";
import { experience } from "../data/content.js";
import Reveal from "./Reveal.jsx";

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <Reveal>
          <span className="section-eyebrow">On the job</span>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">Where I've put my skills to work.</p>
        </Reveal>

        <div className="experience__list">
          {experience.map((exp, i) => (
            <Reveal key={exp.company} delay={(i % 4) + 1}>
              <div className="glass-panel glass-panel--interactive experience__card">
                <div className="experience__header">
                  <div className="experience__icon">
                    <Briefcase size={20} />
                  </div>
                  <div>
                    <h3>{exp.role}</h3>
                    <p className="experience__company text-mono">{exp.company}</p>
                  </div>
                  <span className="experience__duration text-mono">{exp.duration}</span>
                </div>

                <div className="experience__body">
                  <div>
                    <h4>Responsibilities</h4>
                    <ul>
                      {exp.responsibilities.map((r) => (
                        <li key={r}>{r}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4>
                      <Trophy size={14} /> Key Achievements
                    </h4>
                    <ul>
                      {exp.achievements.map((a) => (
                        <li key={a}>{a}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .experience__list {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .experience__card {
          padding: 32px;
        }

        .experience__header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }

        .experience__icon {
          width: 46px;
          height: 46px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: var(--accent-cyan-dim);
          color: var(--accent-cyan);
        }

        .experience__header h3 {
          font-family: var(--font-display);
          font-size: 19px;
          font-weight: 600;
        }

        .experience__company {
          font-size: 13.5px;
          color: var(--text-secondary);
          margin-top: 2px;
        }

        .experience__duration {
          margin-left: auto;
          font-size: 13px;
          color: var(--accent-amber);
          padding: 6px 12px;
          border-radius: 999px;
          background: var(--accent-amber-dim);
        }

        .experience__body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .experience__body h4 {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: var(--text-tertiary);
          margin-bottom: 12px;
        }

        .experience__body ul {
          display: flex;
          flex-direction: column;
          gap: 9px;
        }

        .experience__body li {
          font-size: 14.5px;
          color: var(--text-secondary);
          line-height: 1.55;
          padding-left: 16px;
          position: relative;
        }

        .experience__body li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 8px;
          width: 6px;
          height: 1px;
          background: var(--accent-cyan);
        }

        @media (max-width: 700px) {
          .experience__body {
            grid-template-columns: 1fr;
          }
          .experience__duration {
            margin-left: 62px;
          }
        }
      `}</style>
    </section>
  );
}
