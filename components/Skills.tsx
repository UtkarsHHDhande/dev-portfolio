'use client';

import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    // Core stack
    { skill: 'React' },
    { skill: 'Next.js' },
    { skill: 'JavaScript' },
    { skill: 'TypeScript' },
    { skill: 'Node.js' },
    { skill: 'Express.js' },

    // Databases & ORM
    { skill: 'PostgreSQL' },
    { skill: 'MongoDB' },
    { skill: 'SQL' },
    { skill: 'Prisma' },

    // Auth & Validation
    { skill: 'NextAuth' },
    { skill: 'Zod' },

    // Styling & UI
    { skill: 'Tailwind CSS' },

    // Cloud & AI (Foundational)
    { skill: 'Oracle Cloud (OCI)' },
    { skill: 'Cloud Computing Fundamentals' },
    { skill: 'Generative AI Fundamentals' },

    // DevOps & Tools
    { skill: 'Docker' },
    { skill: 'CI/CD' },
    { skill: 'Git' },
    { skill: 'GitHub' },
    { skill: 'Postman' },
    { skill: 'VS Code' },

    // Programming fundamentals
    { skill: 'Java' },
    { skill: 'C++' },
    { skill: 'Python' },
  ];

  return (
    <motion.div
      className="mx-auto max-w-2xl md:px-4 px-8 mt-8"
      initial={{ filter: 'blur(10px)' }}
      animate={{ filter: 'blur(0px)' }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-xl text-slate-100">Skills & Tools</h2>

      <div className="flex flex-wrap gap-2 mt-2 max-w-2xl">
        {skills.map((skill) => (
          <div
            key={skill.skill}
            className="bg-slate-100 text-slate-800 p-1 border rounded shadow text-xs font-semibold"
          >
            {skill.skill}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
