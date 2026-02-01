'use client';

import { motion } from 'framer-motion';

export default function Experience() {
  return (
    <motion.div
      className="mx-auto max-w-2xl md:px-4 px-8 mt-4"
      initial={{ filter: 'blur(10px)' }}
      animate={{ filter: 'blur(0px)' }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-xl text-slate-100">Experience</h2>

      <div className="mt-3">
        <h3 className="text-base font-semibold text-slate-200">
          Frontend Developer Intern
        </h3>
        <p className="text-sm text-slate-400">
          Clustor Computing · Remote · Jan 2025 – Mar 2025
        </p>

        <ul className="mt-2 list-disc list-inside text-base tracking-tight text-slate-300 flex flex-col gap-1">
          <li>
            Collaborated with the development team to build responsive and
            user-friendly web applications.
          </li>
          <li>
            Developed and optimized frontend components using React.js and
            Tailwind CSS.
          </li>
          <li>
            Ensured cross-browser compatibility and improved performance across
            different devices.
          </li>
          <li>
            Gained hands-on experience working in real-world frontend
            development workflows.
          </li>
        </ul>
      </div>
    </motion.div>
  );
}
