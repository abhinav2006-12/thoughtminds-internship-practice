import React, { useEffect, useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext.jsx";
import { profile } from "../data/content.js";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="container navbar__inner">
        <a
          href="#hero"
          className="navbar__brand"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#hero");
          }}
        >
          {profile.fullName.split(" ")[0]}<span className="navbar__brand-dot">.</span>
        </a>

        <nav className="navbar__links navbar__links--desktop">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <button
            className="navbar__theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button
            className="navbar__menu-btn"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="navbar__links navbar__links--mobile glass-panel">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 22px 0;
          transition: padding var(--transition-base), background var(--transition-base),
            backdrop-filter var(--transition-base), border-color var(--transition-base);
          border-bottom: 1px solid transparent;
        }

        .navbar--scrolled {
          padding: 14px 0;
          background: var(--panel-bg-strong);
          backdrop-filter: blur(18px) saturate(140%);
          -webkit-backdrop-filter: blur(18px) saturate(140%);
          border-bottom: 1px solid var(--panel-border);
        }

        .navbar__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar__brand {
          font-family: var(--font-display);
          font-size: 20px;
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        .navbar__brand-dot {
          color: var(--accent-cyan);
        }

        .navbar__links--desktop {
          display: flex;
          gap: 32px;
          font-size: 14.5px;
          color: var(--text-secondary);
          font-weight: 500;
        }

        .navbar__links--desktop a {
          transition: color var(--transition-base);
          position: relative;
        }

        .navbar__links--desktop a:hover {
          color: var(--accent-cyan);
        }

        .navbar__actions {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .navbar__theme-toggle,
        .navbar__menu-btn {
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: var(--panel-bg);
          border: 1px solid var(--panel-border);
          color: var(--text-primary);
          transition: border-color var(--transition-base), color var(--transition-base), transform var(--transition-base);
        }

        .navbar__theme-toggle:hover,
        .navbar__menu-btn:hover {
          border-color: var(--accent-cyan);
          color: var(--accent-cyan);
          transform: translateY(-1px);
        }

        .navbar__menu-btn {
          display: none;
        }

        .navbar__links--mobile {
          display: none;
        }

        @media (max-width: 860px) {
          .navbar__links--desktop {
            display: none;
          }
          .navbar__menu-btn {
            display: flex;
          }
          .navbar__links--mobile {
            display: flex;
            flex-direction: column;
            margin: 12px 24px 0;
            padding: 16px;
            gap: 4px;
            font-size: 15px;
            animation: fadeIn 0.25s ease;
          }
          .navbar__links--mobile a {
            padding: 12px 10px;
            border-radius: var(--radius-sm);
            color: var(--text-secondary);
            transition: background var(--transition-base), color var(--transition-base);
          }
          .navbar__links--mobile a:hover {
            background: var(--accent-cyan-dim);
            color: var(--accent-cyan);
          }
        }
      `}</style>
    </header>
  );
}
