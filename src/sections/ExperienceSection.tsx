import FadeIn from '../components/FadeIn';

interface Role {
  stat: string;
  statLabel: string;
  company: string;
  role: string;
  dates: string;
  outcome: string;
}

const ROLES: Role[] = [
  {
    stat: '5',
    statLabel: 'bedrock models benchmarked',
    company: 'Godel Earth',
    role: "Founder's Office - AI Infrastructure & Tooling",
    dates: 'Aug 2026 - Present',
    outcome:
      'Connected an open-source LLM app to AWS Bedrock, benchmarked low-cost models against Claude, then ran a knowledge-transfer session so the team could cut inference costs. Also built internal automation for LinkedIn posting and client email outreach.',
  },
  {
    stat: 'Daily',
    statLabel: 'order & inventory ops',
    company: 'Ravure',
    role: 'Operations Intern',
    dates: 'Jul 2026 - Present',
    outcome:
      'Own daily order fulfilment and inventory for a D2C brand end to end, from Shopify order audits to post-purchase exchanges and RTO tracking, catching billing errors before they ship.',
  },
  {
    stat: 'End-to-End',
    statLabel: 'AI video pipeline',
    company: 'SUPR',
    role: 'AI Video Production Intern',
    dates: 'May 2026 - Jun 2026',
    outcome:
      'Produced UGC AI videos end to end, writing the prompts and storyboards and wiring AI tools together so full campaigns could be generated from a single brief.',
  },
  {
    stat: 'Real-Time',
    statLabel: 'job tracking',
    company: 'Fleetooo',
    role: 'Tech Intern',
    dates: 'Apr 2026 - May 2026',
    outcome:
      'Built an internal job-tracking system with auto-fill and a live admin dashboard, cutting manual data entry and giving full visibility into every job and its profit.',
  },
  {
    stat: '80%',
    statLabel: 'less manual work',
    company: 'Fire In The Belly',
    role: "Founder's Office",
    dates: 'Jan 2026 - Apr 2026',
    outcome:
      'Built a system that gathers and verifies opportunities from 50+ sources, replacing hours of manual research.',
  },
  {
    stat: '200+',
    statLabel: 'leads per week',
    company: 'Stratezic',
    role: 'AI Automation Marketing',
    dates: 'Dec 2025 - Mar 2026',
    outcome:
      'Kept the pipeline full with automated lead gen and personalized outreach that lifted responses by 35%.',
  },
  {
    stat: '5+',
    statLabel: 'systems shipped',
    company: 'Freelance',
    role: 'AI Automation Specialist',
    dates: 'Nov 2025 - Present',
    outcome:
      'Worked with clients to find their biggest operational bottlenecks and solved them with practical AI automations.',
  },
  {
    stat: '50+',
    statLabel: 'influencers onboarded',
    company: 'ClapNow',
    role: "Founder's Office",
    dates: 'Aug 2025 - Dec 2025',
    outcome:
      'Drove early growth and kept marketplace operations running across inventory, orders, and sellers.',
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <h2
        className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-12 sm:mb-16 md:mb-20"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Experience
      </h2>

      <div className="max-w-5xl mx-auto">
        {ROLES.map((role, i) => (
          <FadeIn key={role.company} delay={i * 0.08} y={30}>
            <div
              className="grid md:grid-cols-[240px_1fr] gap-5 md:gap-12 py-8 sm:py-10 md:py-12 group"
              style={{ borderTop: '1px solid rgba(215, 226, 234, 0.15)' }}
            >
              {/* Impact stat */}
              <div className="flex flex-col gap-1">
                <span
                  className="hero-heading font-black leading-none"
                  style={{ fontSize: 'clamp(2.75rem, 6vw, 4.5rem)' }}
                >
                  {role.stat}
                </span>
                <span className="text-[#D7E2EA]/50 font-light uppercase tracking-widest text-xs sm:text-sm">
                  {role.statLabel}
                </span>
              </div>

              {/* Role details */}
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <h3
                    className="text-[#D7E2EA] font-medium uppercase leading-tight"
                    style={{ fontSize: 'clamp(1.1rem, 2vw, 1.9rem)' }}
                  >
                    {role.company}
                    <span className="text-[#D7E2EA]/50"> / {role.role}</span>
                  </h3>
                  <span className="text-[#D7E2EA]/50 font-light uppercase tracking-widest text-xs sm:text-sm">
                    {role.dates}
                  </span>
                </div>
                <p
                  className="text-[#D7E2EA]/70 font-light leading-relaxed max-w-2xl"
                  style={{ fontSize: 'clamp(0.95rem, 1.4vw, 1.25rem)' }}
                >
                  {role.outcome}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
