import AboutSection from '@/components/about-section';
import Contact from '@/components/Contact';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Certifications from '@/components/Certifications';

export default function Home() {
  return (
    <div className="flex flex-col  mt-10  w-full text-slate-300 mx-auto ">
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}
