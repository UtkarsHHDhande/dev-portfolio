"use client"
import { motion } from 'framer-motion';

const projects = [
  {
    "title": "Trimrr",
    "description": "A modern URL shortener with real-time analytics, secure authentication, and QR code generation for easy sharing.",
    "tech": [
        "React.js",
        "TailwindCSS",
        "Supabase",
        "Shadcn UI",
        "Vite",
        "PostgreSQL",
        "Vercel"
    ],
    "github": "https://github.com/UtkarsHHDhande/url-shortener",
    "live": "https://trimrr-nu.vercel.app/"
},
{
  "title": "ClimaSync",
  "description": "A modern weather application that fetches real-time weather data, visualizes trends with interactive charts, and provides a seamless user experience with a fully responsive UI.",
  "tech": [
    "Next.js",
    "React",
    "TanStack Query",
    "ShadCN UI",
    "Recharts",
    "TailwindCSS",
    "TypeScript"
  ],
  "github": "https://github.com/UtkarsHHDhande/climasync",
  "live": "https://clima-sync.vercel.app/"
},
{
  title: 'GIPHY Clone',
  description:
    'A GIF search and sharing platform built with React and Tailwind CSS, featuring search, favorites, sharing, and embedding functionalities.',
  tech: [
    'React.js',
    'TailwindCSS',
    'Vite',
    'GIPHY API',
    'React Router',
  ],
  github: 'https://github.com/UtkarsHHDhande/giphy-clone',
  live: 'https://giphy-clone-ruby.vercel.app/',
},
];

export default function Projects() {
  return (
    <motion.div
      className="mx-auto max-w-2xl md:px-4 px-8 mt-8"
      initial={{ filter: 'blur(10px)' }}
      animate={{ filter: 'blur(0px)' }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-xl text-slate-100">Projects</h1>
      <div>
        {projects.map((project, index) => (
          <div key={index} className=" my-4 rounded-lg ">
            <h2 className="text-base font-semibold text-slate-200">
              {index + 1}. {project.title}
            </h2>
            <p className="text-slate-300 mt-1 text-base tracking-tight">
              {project.description || 'No description available.'}
            </p>
            <div className="mt-2">
              <div className="flex flex-wrap gap-2 mt-1">
                {project.tech.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="bg-slate-100 text-slate-800 p-1 border rounded shadow text-xs font-semibold"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-2 text-sm">
              <a
                href={project.github}
                className="text-slate-100 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <span className="mx-2">|</span>
              <a
                href={project.live}
                className="text-slate-100 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
