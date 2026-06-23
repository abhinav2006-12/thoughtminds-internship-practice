import React from "react";
import { profile, socials } from "../data/content.js";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__name">{profile.fullName}</p>

        <div className="footer__socials">
          {socials.map((s) => (
            <a key={s.label} href={s.url} target="_blank" rel="noopener noreferrer">
              {s.label}
            </a>
          ))}
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

        .footer__name {
          font-family: var(--font-display);
          font-weight: 600;
          font-size: 16px;
        }

        .footer__socials {
          display: flex;
          gap: 24px;
          font-size: 14px;
          color: var(--text-secondary);
        }

        .footer__socials a {
          transition: color var(--transition-base);
        }

        .footer__socials a:hover {
          color: var(--accent-cyan);
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
