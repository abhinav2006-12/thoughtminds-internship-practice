import React from "react";
import { GraduationCap } from "lucide-react";
import { education } from "../data/content.js";
import Reveal from "./Reveal.jsx";

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <Reveal>
          <span className="section-eyebrow">Academics</span>
          <h2 className="section-title">Education</h2>
        </Reveal>

        <div className="education__list">
          {education.map((edu, i) => (
            <Reveal key={edu.degree} delay={(i % 4) + 1}>
              <div className="glass-panel glass-panel--interactive education__card">
                <div className="education__icon">
                  <GraduationCap size={22} />
                </div>
                <div className="education__info">
                  <h3>{edu.degree}</h3>
                  <p className="text-mono">{edu.institution}</p>
                </div>
                <div className="education__meta">
                  <span className="education__year">{edu.year}</span>
                  {edu.score && <span className="education__score">{edu.score}</span>}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .education__list {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .education__card {
          padding: 26px 28px;
          display: flex;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .education__icon {
          width: 50px;
          height: 50px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: var(--accent-amber-dim);
          color: var(--accent-amber);
        }

        .education__info {
          flex: 1;
          min-width: 220px;
        }

        .education__info h3 {
          font-family: var(--font-display);
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 4px;
        }

        .education__info p {
          font-size: 13.5px;
          color: var(--text-secondary);
        }

        .education__meta {
          display: flex;
          gap: 10px;
          margin-left: auto;
        }

        .education__year,
        .education__score {
          font-family: var(--font-mono);
          font-size: 12.5px;
          padding: 6px 13px;
          border-radius: 999px;
          background: var(--bg-elevated);
          border: 1px solid var(--panel-border);
          color: var(--text-secondary);
          white-space: nowrap;
        }
      `}</style>
    </section>
  );
}
