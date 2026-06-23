/**
 * ============================================================
 *  PORTFOLIO CONTENT — single source of truth
 *  Edit everything here. No need to touch component files
 *  to change text, links, projects, or skills.
 * ============================================================
 */

export const profile = {
  fullName: "Abhinav P R",
  role: "Full Stack Developer & AI/ML Student",
  tagline: "Full Stack Dev. Born Creative.",
  shortIntro:
    "BCA (AI & Machine Learning) student from Kottayam, Kerala who architects scalable backend systems and ships production-ready apps. Outside the terminal, I tell stories through a camera lens.",
  location: "Kottayam, Kerala, India",
  // Put your photo at /public/profile.png and keep this path
  profileImage: "/profile.png",
  resumeFile: "/Abhinav_Resume.pdf", // place your resume PDF in /public
  availability: "Open to internships",
};

export const about = {
  intro:
    "I'm Abhinav, a Full Stack Developer and BCA (Hons) student specializing in Artificial Intelligence & Machine Learning. I've been shipping production-ready applications since before college — role-based systems, real-time platforms, payment-integrated apps — the kind of work most interns only read about.",
  education:
    "Currently pursuing BCA (AI & Machine Learning specialization), Semester 2, at Mentor Engineering College, Muvattupuzha (KTU affiliated).",
  careerGoals:
    "Seeking a software engineering / full-stack development internship where I can contribute from day one, work with modern AI tooling, and grow into a systems-level engineer who ships things that matter.",
  interests: [
    "Web Technologies & UI/UX",
    "Tech Hackathons",
    "Content Creation & Social Media",
    "Applied AI / ML",
  ],
};

export const skills = {
  "Programming Languages": ["Python", "JavaScript", "Java"],
  "Frontend Technologies": ["React", "Tailwind CSS", "HTML5", "CSS3"],
  "Backend Technologies": ["Node.js", "Express.js", "REST APIs"],
  "Databases": ["Supabase", "PostgreSQL", "SQLite"],
  "Tools & Platforms": ["Git", "GitHub", "Vercel", "VS Code", "Cluade"],
  "Soft Skills": ["Visual Storytelling", "Client Communication", "Fast Learning", "Documentation"],
};

export const projects = [
  {
    name: "AttendEase",
    description:
      "Role-based attendance management system for institutions, supporting Institution Admins, Class Teachers, and Subject Teachers with real-time tracking and reporting.",
    tech: ["React", "Supabase", "Tailwind CSS", "Vercel", "RLS"],
    features: [
      "Three distinct user roles with scoped permissions",
      "WhatsApp export for attendance reports",
      "Soft neomorphic dark UI",
      "Dynamic Island-style notification system",
    ],
    github: "https://github.com/abhinav2006-12",
    demo: "",
    featured: true,
  },
  {
    name: "E-Vardhakya",
    description:
      "Mobile-first elder care application with face emotion detection, mood check-ins, medication schedules, and multi-stage SOS emergency functionality.",
    tech: ["React", "Face API", "Supabase", "Claude Vision"],
    features: [
      "Real-time face emotion detection",
      "Daily mood check-ins and medication reminders",
      "Multi-stage SOS emergency alerts",
      "Malayalam and English language support",
    ],
    github: "https://github.com/abhinav2006-12/E-Vardhakya-Project",
    demo: "",
    featured: true,
  },
  {
    name: "BillSwift",
    description:
      "Mobile billing application with cart/checkout flows, UPI/QR payment integration, OTP-based authentication, and multi-role shop management.",
    tech: ["React", "Supabase", "UPI Integration", "OTP Auth"],
    features: [
      "Cart and checkout flow with UPI/QR payments",
      "OTP-based secure authentication",
      "Multi-role shop and subuser management",
      "Inventory and billing dashboard",
    ],
    github: "https://github.com/abhinav2006-12/billswift-trail",
    demo: "",
    featured: false,
  },
  {
    name: "KeralaGigs",
    description:
      "Kerala's hyperlocal, one-day gig marketplace connecting daily wage workers with recruiters across districts — built for event, catering, and daily wage work.",
    tech: ["React", "Supabase", "PWA", "OTP Auth", "Malayalam UI"],
    features: [
      "District-level job filtering",
      "Same-day urgent job postings",
      "Malayalam language support",
      "ID-verified worker profiles and recruiter credits",
    ],
    github: "https://github.com/abhinav2006-12/kerala-gigs-app",
    demo: "",
    featured: true,
  },
];

export const experience = [
  {
    company: "ThoughtMinds Systems Private Limited",
    role: "Student Intern",
    duration: "2026 — Present",
    responsibilities: [
      "Working within an internship practice repository on AI/GenAI-focused tasks",
      "Resolving real-world development environment and version control issues",
      "Collaborating on full-stack and AI-assisted tooling tasks",
    ],
    achievements: [
      "Quickly diagnosed and resolved a nested Git repository conflict blocking commits",
      "Actively bridging full-stack experience with GenAI-specific tooling (LangChain, vector databases)",
    ],
  },
];

export const education = [
  {
    degree: "BCA (AI & Machine Learning Specialization)",
    institution: "Mentor Engineering College, Muvattupuzha (KTU)",
    year: "Expected 2029",
    score: "",
  },
];

/*export const certifications = [
  // Add certifications as you complete them, e.g.:
  // { name: "Python for Everybody", platform: "Coursera", year: "2026" },
];*/

export const contact = {
  email: "abhiinavpr@gmail.com",
  phone: "+91 88485 36288",
  whatsapp: "https://wa.me/918848536288",
  linkedin: "https://www.linkedin.com/in/abhinav-p-r-4aa846248/",
  github: "https://github.com/abhinav2006-12",
  instagram: "https://instagram.com/abhiinav.pr",
};

export const socials = [
  { label: "GitHub", url: contact.github },
  { label: "LinkedIn", url: contact.linkedin },
  { label: "Instagram", url: contact.instagram },
  { label: "WhatsApp", url: contact.whatsapp },
];
