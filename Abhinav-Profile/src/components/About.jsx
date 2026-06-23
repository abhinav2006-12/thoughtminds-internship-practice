import React from "react";
import { GraduationCap, Target, Sparkles } from "lucide-react";
import { about } from "../data/content.js";
import Reveal from "./Reveal.jsx";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <Reveal>
          <span className="section-eyebrow">Who I am</span>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">{about.intro}</p>
        </Reveal>

        <div className="about__grid">
          <Reveal delay={1}>
            <div className="glass-panel glass-panel--interactive about__card">
              <div className="about__icon" style={{ color: "var(--accent-cyan)" }}>
                <GraduationCap size={22} />
              </div>
              <h3>Education</h3>
              <p>{about.education}</p>
            </div>
          </Reveal>

          <Reveal delay={2}>
            <div className="glass-panel glass-panel--interactive about__card">
              <div className="about__icon" style={{ color: "var(--accent-amber)" }}>
                <Target size={22} />
              </div>
              <h3>Career Goals</h3>
              <p>{about.careerGoals}</p>
            </div>
          </Reveal>

          <Reveal delay={3}>
            <div className="glass-panel glass-panel--interactive about__card">
              <div className="about__icon" style={{ color: "var(--accent-cyan)" }}>
                <Sparkles size={22} />
              </div>
              <h3>Interests</h3>
              <ul className="about__interests">
                {about.interests.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>

      <style>{`
        .about__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .about__card {
          padding: 32px 28px;
          height: 100%;
        }

        .about__icon {
          width: 46px;
          height: 46px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 12px;
          background: var(--bg-elevated);
          margin-bottom: 20px;
        }

        .about__card h3 {
          font-family: var(--font-display);
          font-size: 19px;
          font-weight: 600;
          margin-bottom: 12px;
        }

        .about__card p {
          color: var(--text-secondary);
          line-height: 1.65;
          font-size: 15px;
        }

        .about__interests {
          display: flex;
          flex-direction: column;
          gap: 9px;
        }

        .about__interests li {
          color: var(--text-secondary);
          font-size: 14.5px;
          padding-left: 16px;
          position: relative;
        }

        .about__interests li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 8px;
          width: 6px;
          height: 1px;
          background: var(--accent-cyan);
        }

        @media (max-width: 860px) {
          .about__grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
