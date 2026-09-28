import gymImg from "../assets/project-gym.png";
import resumeImg from "../assets/project-resume.png";
import dineoraImg from "../assets/project-dineora.png";

export const GITHUB = "https://github.com/Saifi13?tab=repositories";
export const LINKEDIN = "https://www.linkedin.com/in/saifi-raza-a4b3b6377";
export const EMAIL = "uprising185@gmail.com";
export const PHONE = "7977206560";

// Drop your resume file at /public/resume.pdf and this link works automatically.
export const RESUME_URL = "/resume.pdf";

export const projects = [
  {
    id: "gym-management-system",
    num: "01",
    title: "Gym Management System",
    image: gymImg,
    imageAlt: "Gym Management System dashboard showing member statistics and recent members",
    description:
      "A full-stack gym membership management application for managing gym members and membership information through a clean dashboard interface.",
    tech: ["React", "Vite", "Node.js", "Express", "PostgreSQL"],
    features: [
      "Dashboard",
      "Member management",
      "Add member",
      "Membership info",
      "Joining & end dates",
      "PostgreSQL database",
      "REST API",
      "Responsive dashboard UI",
    ],
    live: "https://gym-management-system-ten-mu.vercel.app/",
    github: GITHUB,
  },
  {
    id: "ai-resume-analyzer",
    num: "02",
    title: "AI Resume Analyzer",
    image: resumeImg,
    imageAlt: "AI Resume Analyzer upload interface with resume analysis call to action",
    description:
      "An AI-powered application that lets users upload resumes and receive AI-generated analysis and feedback using the Google Gemini API.",
    tech: [
      "React",
      "Node.js",
      "Express",
      "Google Gemini API",
      "Multer",
      "PDF parsing",
      "DOCX parsing",
    ],
    features: [
      "Resume upload",
      "PDF support",
      "DOCX support",
      "Text extraction",
      "AI-powered analysis",
      "Gemini API integration",
      "Backend API",
      "Structured feedback",
    ],
    live: "https://ai-resume-analyzer-black-zeta.vercel.app/",
    github: GITHUB,
  },
  {
    id: "dineora",
    num: "03",
    title: "Dineora — Restaurant Website",
    image: dineoraImg,
    imageAlt: "Dineora restaurant website hero with headline and featured dishes",
    description:
      "A polished multi-page restaurant frontend focused on premium visual design, responsive layouts and a smooth user experience.",
    tech: ["React", "Vite", "JavaScript", "CSS"],
    features: [
      "Responsive design",
      "Multi-page navigation",
      "Premium restaurant UI",
      "Modern typography",
      "Image-driven layouts",
      "Responsive mobile design",
    ],
    live: "https://dineora-restaurant.vercel.app/",
    github: GITHUB,
    note: "Frontend-only project",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    icon: "layout",
    skills: ["React", "JavaScript", "HTML", "CSS", "Vite"],
  },
  {
    title: "Backend",
    icon: "server",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Database",
    icon: "database",
    skills: ["PostgreSQL"],
  },
  {
    title: "AI",
    icon: "spark",
    skills: ["Google Gemini API"],
  },
  {
    title: "Tools",
    icon: "tool",
    skills: ["Git", "GitHub", "VS Code"],
  },
];

export const services = [
  {
    num: "01",
    icon: "globe",
    title: "Web Applications",
    text: "Building responsive applications with modern frontend and backend technologies.",
  },
  {
    num: "02",
    icon: "spark",
    title: "AI-Powered Applications",
    text: "Integrating AI APIs into useful applications and workflows.",
  },
  {
    num: "03",
    icon: "layers",
    title: "Full-Stack Systems",
    text: "Connecting interfaces, APIs and databases into functional applications.",
  },
  {
    num: "04",
    icon: "cursor",
    title: "Modern User Experiences",
    text: "Creating polished, responsive interfaces with attention to usability and visual design.",
  },
];

export const highlights = [
  {
    icon: "layers",
    title: "Full-Stack Development",
    text: "Frontend, backend and databases working together.",
  },
  {
    icon: "spark",
    title: "AI Integration",
    text: "Wiring AI APIs into practical, useful products.",
  },
  {
    icon: "layout",
    title: "Modern Frontend",
    text: "Clean, responsive interfaces built with React.",
  },
  {
    icon: "cursor",
    title: "Problem Solving",
    text: "Turning ideas into functional, working features.",
  },
];

export const tickerItems = [
  "React",
  "Node.js",
  "Express",
  "PostgreSQL",
  "JavaScript",
  "Vite",
  "REST APIs",
  "Google Gemini API",
  "Git & GitHub",
];
