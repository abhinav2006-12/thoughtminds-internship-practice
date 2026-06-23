import React from "react";
import { Github, Linkedin, Instagram } from "lucide-react";
import { profile, socials } from "../data/content.js";

const socialIcons = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Instagram: Instagram,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src={profile.profileImage} alt={profile.fullName} className="footer__logo" />
          <p className="footer__name">{profile.fullName}</p>
        </div>

        <div className="footer__socials">
          {socials
            .filter((s) => socialIcons[s.label])
            .map((s) => {
              const Icon = socialIcons[s.label];
              return (
                <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer">
                  <Icon size={18} />
                </a>
              );
            })}
        </div>

        <p className="footer__copy text-mono">
          © {year} {profile.fullName}. All rights reserved.
        </p>
      </div>

      <style>{`
        .footer {
          border-top: 1px solid var(--panel-border);
          padding: 40px 0;
        }

        .footer__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 18px;
        }

        .footer__brand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .footer__logo {
          width: 40px;
          height: 40px;
          border-radius: 100%;
          object-fit: cover;
          border: 1px solid var(--panel-border);
        }

        .footer__name {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 16px;
        }

        .footer__socials {
          display: flex;
          gap: 16px;
          color: var(--text-secondary);
        }

        .footer__socials a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: var(--bg-elevated);
          border: 1px solid var(--panel-border);
          color: var(--text-secondary);
          transition: color var(--transition-base), border-color var(--transition-base), transform var(--transition-base);
        }

        .footer__socials a:hover {
          color: var(--accent-cyan);
          border-color: var(--accent-cyan);
          transform: translateY(-2px);
        }

        .footer__copy {
          font-size: 12.5px;
          color: var(--text-tertiary);
        }

        @media (max-width: 700px) {
          .footer__inner {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
