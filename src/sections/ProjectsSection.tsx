import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Project {
  number: string;
  category: string;
  name: string;
  description: string;
  impact: string;
  tech: string[];
  github?: string;
}

const PROJECTS: Project[] = [
  {
    number: '01',
    category: 'Operations',
    name: 'Product Catalog, On Autopilot',
    description:
      'A team was manually copying product details from brochures into catalogs, slow, tedious work that was easy to get wrong. I built an AI system that reads any brochure and pulls out clean, structured product information on its own.',
    impact:
      'Manual data entry was eliminated completely, making it easy to list products at scale without the busywork.',
    tech: ['Zero Manual Entry', 'Faster Listings', 'AI Automation'],
  },
  {
    number: '02',
    category: 'Operations',
    name: 'Opportunity Discovery, Automated',
    description:
      'Finding and tracking internship opportunities meant hours of manual searching across dozens of sites every week. I built a system that gathers, organizes, and verifies opportunities automatically.',
    impact:
      'Cut manual research time by ~80% and kept the platform up to date with no one tracking it by hand.',
    tech: ['80% Less Manual Work', 'Always Up To Date', 'AI Automation'],
    github: 'https://github.com/djain18/internship-automation-pipeline',
  },
  {
    number: '03',
    category: 'Sales',
    name: 'A Sales Pipeline That Fills Itself',
    description:
      'A sales team was burning most of its time hunting for leads and writing cold emails one by one. I built a system that finds the right businesses and reaches out with personalized messages at scale.',
    impact:
      'Cut manual sales effort by ~60% while lifting cold-email response rates by 35%.',
    tech: ['60% Less Manual Effort', '+35% Responses', 'Personalized At Scale'],
    github: 'https://github.com/djain18/lead-generation-pipeline',
  },
];

const TOTAL_CARDS = PROJECTS.length;

function ProjectCard({
  project,
  index,
  progress,
}: {
  project: Project;
  index: number;
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
}) {
  const targetScale = 1 - (TOTAL_CARDS - 1 - index) * 0.03;
  const scaleStart = index / TOTAL_CARDS;
  const scale = useTransform(progress, [scaleStart, 1], [1, targetScale]);

  return (
    <div
      className="sticky top-24 md:top-32 h-[85vh] flex items-start justify-center"
      style={{ top: `${index * 28}px` }}
    >
      <motion.div
        style={{ scale, background: '#0C0C0C' }}
        className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] p-6 sm:p-10 md:p-14"
      >
        {/* Top row */}
        <div className="flex items-center gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8 md:mb-10">
          <span
            className="font-black text-[#D7E2EA] leading-none"
            style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
          >
            {project.number}
          </span>
          <div className="flex flex-col gap-1 sm:gap-2">
            <span className="text-[#D7E2EA]/60 font-light uppercase tracking-widest text-xs sm:text-sm">
              {project.category}
            </span>
            <h3
              className="text-[#D7E2EA] font-medium uppercase leading-tight"
              style={{ fontSize: 'clamp(1.1rem, 2.4vw, 2.4rem)' }}
            >
              {project.name}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-5 sm:gap-6 max-w-3xl">
          <p
            className="text-[#D7E2EA] font-light leading-relaxed"
            style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.4rem)' }}
          >
            {project.description}
          </p>
          <p
            className="text-[#BBCCD7] font-medium leading-relaxed"
            style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.25rem)' }}
          >
            {project.impact}
          </p>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-2 sm:gap-3 pt-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-full border border-[#D7E2EA]/30 text-[#D7E2EA] font-light uppercase tracking-wider px-4 py-1.5 sm:px-5 sm:py-2 text-xs sm:text-sm"
              >
                {t}
              </span>
            ))}
          </div>

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#D7E2EA]/80 hover:text-[#D7E2EA] font-light uppercase tracking-wider text-xs sm:text-sm transition-colors w-fit"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 sm:w-5 sm:h-5"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              View on GitHub
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="projects"
      className="relative z-10 bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <h2
        className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Projects
      </h2>

      <div ref={containerRef} className="max-w-6xl mx-auto">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={index}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
