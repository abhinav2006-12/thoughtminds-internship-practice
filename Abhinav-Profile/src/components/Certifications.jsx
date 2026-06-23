import React from "react";
import { Award } from "lucide-react";
import { certifications } from "../data/content.js";
import Reveal from "./Reveal.jsx";

export default function Certifications() {
  if (!certifications || certifications.length === 0) {
    return (
      <section id="certifications" className="section certifications">
        <div className="container">
          <Reveal>
            <span className="section-eyebrow">Credentials</span>
            <h2 className="section-title">Certifications</h2>
            <div className="glass-panel certifications__empty">
              <Award size={28} strokeWidth={1.3} />
              <p>
                Certifications will show up here. Add them to{" "}
                <code>src/data/content.js</code> in the <code>certifications</code> array.
              </p>
            </div>
          </Reveal>
        </div>
        <style>{`
          .certifications__empty {
            padding: 40px;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 14px;
            text-align: center;
            color: var(--text-secondary);
            max-width: 460px;
          }
          .certifications__empty code {
            font-family: var(--font-mono);
            font-size: 13px;
            background: var(--bg-elevated);
            padding: 2px 6px;
            border-radius: 4px;
            color: var(--accent-cyan);
          }
        `}</style>
      </section>
    );
  }

  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <Reveal>
          <span className="section-eyebrow">Credentials</span>
          <h2 className="section-title">Certifications</h2>
        </Reveal>

        <div className="certifications__grid">
          {certifications.map((cert, i) => (
            <Reveal key={cert.name} delay={(i % 4) + 1}>
              <div className="glass-panel glass-panel--interactive certifications__card">
                <div className="certifications__icon">
                  <Award size={20} />
                </div>
                <h3>{cert.name}</h3>
                <p className="text-mono">{cert.platform}</p>
                <span className="certifications__year">{cert.year}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      <style>{`
        .certifications__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .certifications__card {
          padding: 26px 24px;
        }
        .certifications__icon {
          width: 42px;
          height: 42px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 10px;
          background: var(--accent-cyan-dim);
          color: var(--accent-cyan);
          margin-bottom: 16px;
        }
        .certifications__card h3 {
          font-family: var(--font-display);
          font-size: 16px;
          font-weight: 600;
          margin-bottom: 6px;
        }
        .certifications__card p {
          font-size: 13px;
          color: var(--text-secondary);
          margin-bottom: 12px;
        }
        .certifications__year {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--accent-amber);
        }
        @media (max-width: 860px) {
          .certifications__grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
