'use client';
import { motion } from 'framer-motion';
import { FaFileAlt, FaGithub, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

const Socials = [
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/-utkarshdhande/',
    icon: FaLinkedin,
  },
  {
    name: 'GitHub',
    url: 'https://github.com/UtkarsHHDhande',
    icon: FaGithub,
  },
  {
    name: 'Twitter',
    url: 'https://x.com/UtkarshDhande2',
    icon: FaTwitterSquare,
  },
  {
    name: 'Resume',
    url: 'https://drive.google.com/file/d/1GjRwAU9goXOE5xD8jOLkJHrHAjB_1ZDn/view?usp=drive_link',
    icon: FaFileAlt,
  },
];

export default function AboutSection() {
  return (
    <motion.div
      className="mx-auto max-w-2xl md:px-4 px-8"
      initial={{ filter: 'blur(10px)' }}
      animate={{ filter: 'blur(0px)' }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-2">
        <h1 className="text-xl font-semibold text-slate-200">Hi, I'm Utkarsh 👋</h1>
        <div className="flex items-center gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2">
            <div className="flex gap-4">
              {Socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center text-slate-100 transition-transform duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                  <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-max px-2 py-1 bg-white text-black text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
            <a
              href="mailto:utkarshdhande1432@gmail.com"
              className="text-sm text-slate-300 hover:text-white transition-colors duration-300"
            >
              utkarshdhande1432@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <div className="mt-8 flex flex-col">
        <h2 className="text-xl text-slate-200">About Me.</h2>
        <ul className="mt-2 flex flex-col gap-2 list-disc list-inside text-base tracking-tight text-slate-300">
          <li>
            Hi, I am Utkarsh Dhande, a Full-Stack Developer passionate about
            building scalable and user-friendly web applications.
          </li>
          <li>
            I specialize in full-stack development using the MERN stack
            (MongoDB, Express.js, React.js, Node.js) and Next.js for
            server-side rendering and optimized performance.
          </li>
          <li>
            I have experience working with RESTful APIs, authentication,
            database management, and implementing modern frontend technologies
            like Tailwind CSS and Framer Motion to create dynamic and visually
            appealing interfaces.
          </li>
        </ul>

        <p className="mt-4 text-base text-slate-300">
          Have an idea, want to collaborate, or have an internship opportunity?
          Feel free to message me! I'm always excited to connect and work on great projects.{' '}
          <a
            href="mailto:utkarshdhande1432@gmail.com"
            className="text-slate-100 hover:text-blue-300 underline"
          >
            Contact me
          </a>
        </p>
      </div>
    </motion.div>
  );
}
