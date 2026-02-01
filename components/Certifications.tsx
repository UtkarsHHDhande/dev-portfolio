'use client';

import { motion } from 'framer-motion';

export default function Certifications() {
  return (
    <motion.div
      className="mx-auto max-w-2xl md:px-4 px-8 mt-4"
      initial={{ filter: 'blur(10px)' }}
      animate={{ filter: 'blur(0px)' }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-xl text-slate-100">Certifications</h2>

      <div className="mt-3 text-base tracking-tight text-slate-300 flex flex-col gap-4">
        <div>
          <h3 className="font-semibold text-slate-200">
            Meta Front-End Developer Specialization
          </h3>
          <p className="text-sm text-slate-400">Coursera · 2024</p>
          <p>
            Completed a 9-course specialization covering modern front-end development
            including JavaScript, React, HTML, CSS, Git, and UX/UI fundamentals.
          </p>
          <a
            href="https://coursera.org/share/e696d02b9654c4c831001b5cbc4e196a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-100 underline hover:text-blue-300"
          >
            View Credential
          </a>
        </div>

        <div>
          <h3 className="font-semibold text-slate-200">
            Foundation of Generative AI
          </h3>
          <p className="text-sm text-slate-400">Udacity · 2025</p>
          <p>
            Learned core generative AI concepts, prompt engineering, and practical
            AI-powered application workflows.
          </p>
          <a
            href="https://www.udacity.com/certificate/e/9827229a-b7bc-11ef-ab7c-bf20718d4eed"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-100 underline hover:text-blue-300"
          >
            View Credential
          </a>
        </div>

        <div>
          <h3 className="font-semibold text-slate-200">
            OCI Foundations Associate
          </h3>
          <p className="text-sm text-slate-400">Oracle · 2025</p>
          <p>
            Gained foundational understanding of cloud computing concepts and OCI
            core services.
          </p>
          <a
            href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=11E7C8120AA46FC3C38F94632A7071CD542B98AFB4E618E3C9E6E76F48C1D04C"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-100 underline hover:text-blue-300"
          >
            View Credential
          </a>
        </div>

        <div>
          <h3 className="font-semibold text-slate-200">
            OCI AI Foundations Associate
          </h3>
          <p className="text-sm text-slate-400">Oracle · 2025</p>
          <p>
            Learned fundamental AI and machine learning concepts within the OCI
            ecosystem.
          </p>
          <a
            href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=4D0A537B997B25AAF42CFFC8718F0968EAE973E8F0865A41865302494ED885CE"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-100 underline hover:text-blue-300"
          >
            View Credential
          </a>
        </div>

        <div>
          <h3 className="font-semibold text-slate-200">
            OCI Generative AI Professional
          </h3>
          <p className="text-sm text-slate-400">Oracle · 2025</p>
          <p>
            Explored generative AI services, workflows, and enterprise use cases
            on OCI.
          </p>
          <a
            href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=F52CF67DE5824766654D08621EBB7097B719F19DB5212ACDE7D9CE1770FF881A"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-100 underline hover:text-blue-300"
          >
            View Credential
          </a>
        </div>

        <div>
          <h3 className="font-semibold text-slate-200">
            GitHub Foundations
          </h3>
          <p className="text-sm text-slate-400">GitHub · 2025</p>
          <p>
            Strengthened Git fundamentals, GitHub workflows, version control,
            and collaboration practices.
          </p>
          <a
            href="https://www.credly.com/go/SnMAOgDw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-100 underline hover:text-blue-300"
          >
            View Credential
          </a>
        </div>
      </div>
    </motion.div>
  );
}
