import React from "react";
import { ArrowRight, FileDown, User } from "lucide-react";
import { profile } from "../data/content.js";
import ApertureMotif from "./ApertureMotif.jsx";
import Reveal from "./Reveal.jsx";

export default function Hero() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="hero">
      <div className="container hero__inner">
        <Reveal className="hero__text" as="div">
          <div className="hero__status">
            <span className="hero__status-dot" />
            {profile.availability} · {profile.location}
          </div>

          <h1 className="hero__name">{profile.fullName}</h1>
          <p className="hero__role text-mono">{profile.role}</p>
          <p className="hero__intro">{profile.shortIntro}</p>

          <div className="hero__cta">
            <button className="btn btn--primary" onClick={() => scrollTo("#contact")}>
              Contact Me <ArrowRight size={16} />
            </button>
            <button className="btn btn--ghost" onClick={() => scrollTo("#projects")}>
              View Projects
            </button>
            {profile.resumeFile && (
              <a className="btn btn--ghost" href={profile.resumeFile} download>
                <FileDown size={16} /> Resume
              </a>
            )}
          </div>
        </Reveal>

        <Reveal delay={2} className="hero__visual" as="div">
          <div className="hero__photo-frame glass-panel">
            {profile.profileImage ? (
              <img src={profile.profileImage} alt={profile.fullName} className="hero__photo" />
            ) : (
              <div className="hero__photo-placeholder">
                <User size={56} strokeWidth={1.2} />
              </div>
            )}
            <div className="hero__photo-ring">
              <ApertureMotif size={56} blades={6} />
            </div>
          </div>
        </Reveal>
      </div>

      <div className="aperture" style={{ top: "14%", right: "6%" }}>
        <ApertureMotif size={220} blades={8} spin />
      </div>

      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding-top: 100px;
          position: relative;
          overflow: hidden;
        }

        .hero__inner {
          display: grid;
          grid-template-columns: 1.1fr 0.7fr;
          gap: 64px;
          align-items: center;
        }

        .hero__status {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono);
          font-size: 12.5px;
          color: var(--text-secondary);
          padding: 7px 14px;
          border-radius: 999px;
          background: var(--panel-bg);
          border: 1px solid var(--panel-border);
          margin-bottom: 28px;
        }

        .hero__status-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--accent-cyan);
          box-shadow: 0 0 0 3px var(--accent-cyan-dim);
        }

        .hero__name {
          font-family: var(--font-display);
          font-size: clamp(40px, 6vw, 68px);
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1.04;
          margin-bottom: 14px;
        }

        .hero__role {
          font-size: 17px;
          color: var(--accent-cyan);
          margin-bottom: 22px;
          letter-spacing: 0.01em;
        }

        .hero__intro {
          font-size: 17px;
          line-height: 1.7;
          color: var(--text-secondary);
          max-width: 520px;
          margin-bottom: 36px;
        }

        .hero__cta {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .hero__visual {
          display: flex;
          justify-content: center;
        }

        .hero__photo-frame {
          width: 280px;
          height: 340px;
          padding: 10px;
          position: relative;
          animation: floatSlow 7s ease-in-out infinite;
        }

        .hero__photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 18px;
        }

        .hero__photo-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 18px;
          background: var(--bg-elevated);
          color: var(--text-tertiary);
        }

        .hero__photo-ring {
          position: absolute;
          bottom: -20px;
          right: -20px;
          background: var(--bg-base);
          border-radius: 50%;
          padding: 4px;
          border: 1px solid var(--panel-border-strong);
        }

        @media (max-width: 860px) {
          .hero__inner {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 48px;
          }
          .hero__intro {
            margin-left: auto;
            margin-right: auto;
          }
          .hero__cta {
            justify-content: center;
          }
          .hero__visual {
            order: -1;
          }
          .hero__photo-frame {
            width: 220px;
            height: 270px;
          }
        }
      `}</style>
    </section>
  );
}
