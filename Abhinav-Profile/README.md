# Abhinav P R — Portfolio

Glassmorphism-themed React portfolio. Dark/light mode, scroll animations, fully responsive.

## Setup

```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
```

## Files YOU need to add manually

1. **Profile photo** → save as `public/profile.jpg`
   (or change the path in `src/data/content.js` → `profile.profileImage`)

2. **Resume PDF** → save as `public/Abhinav_Resume.pdf`
   (or change the path in `src/data/content.js` → `profile.resumeFile`)

3. **Favicon (optional)** → drop a `favicon.ico` into `public/`

## Where to edit content

Everything text-based — name, role, projects, skills, experience, education,
certifications, contact links, social links — lives in one file:

```
src/data/content.js
```

You should not need to touch any component file just to update content.
Components only need edits if you want to change *layout or styling*.

## Project structure

```
src/
  data/content.js         <- ALL editable content lives here
  context/ThemeContext.jsx <- dark/light theme state
  hooks/useReveal.js        <- scroll-reveal animation hook
  components/
    Navbar.jsx
    Hero.jsx
    About.jsx
    Skills.jsx
    Projects.jsx
    Experience.jsx
    Education.jsx
    Certifications.jsx
    Contact.jsx
    Footer.jsx
    Reveal.jsx             <- wrapper used for scroll animations
    ApertureMotif.jsx       <- decorative camera-iris SVG motif
  styles/index.css          <- design tokens, glass panel system, theme vars
  App.jsx
  main.jsx
```

## Design notes

- **Theme**: dark "control room glass" base with cyan + amber accents —
  nods to backend/code (cyan/mono) and the videography side (amber/aperture motif).
- **Glass panels**: `.glass-panel` class in `index.css` — backdrop blur +
  a thin top-edge highlight to mimic light catching real glass.
- **Fonts**: Space Grotesk (display), Inter (body), JetBrains Mono (labels/data).
- Toggle theme via the sun/moon icon in the navbar — persists via `data-theme`
  attribute on `<html>`.

## Adding certifications

`certifications` array in `content.js` is empty by default (shows a friendly
placeholder). Add entries like:

```js
{ name: "Python for Everybody", platform: "Coursera", year: "2026" }
```
