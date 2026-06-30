import { Zap, TrendingUp, Database, Rocket, Briefcase, type LucideIcon } from 'lucide-react';
import FadeIn from '../components/FadeIn';

interface Service {
  number: string;
  name: string;
  description: string;
  Icon: LucideIcon;
}

const SERVICES: Service[] = [
  {
    number: '01',
    name: 'Eliminate Manual Work',
    description:
      'I find the repetitive tasks draining your team and hand them off to AI that runs on its own.',
    Icon: Zap,
  },
  {
    number: '02',
    name: 'Fill The Sales Pipeline',
    description:
      'Automated lead generation and outreach that keeps qualified conversations flowing in.',
    Icon: TrendingUp,
  },
  {
    number: '03',
    name: 'Turn Chaos Into Clean Data',
    description:
      'Messy posts, docs, and spreadsheets become organized, usable data, automatically.',
    Icon: Database,
  },
  {
    number: '04',
    name: 'Scale Output Without Hiring',
    description:
      'AI that produces content and video at volume, with no extra headcount needed.',
    Icon: Rocket,
  },
  {
    number: '05',
    name: "Run The Founder's Office",
    description:
      'The systems and processes that keep an early-stage startup moving fast.',
    Icon: Briefcase,
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
    >
      <h2
        className="text-[#0C0C0C] font-black uppercase text-center mb-12 sm:mb-16 md:mb-20"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        What I Do
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.08} y={30} className="h-full">
            <div
              className="group h-full rounded-[28px] border p-7 sm:p-8 flex flex-col gap-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_-28px_rgba(12,12,12,0.4)]"
              style={{ borderColor: 'rgba(12, 12, 12, 0.12)' }}
            >
              <div className="flex items-start justify-between">
                <span className="flex items-center justify-center h-14 w-14 rounded-2xl bg-[#0C0C0C] text-white shrink-0">
                  <service.Icon size={26} strokeWidth={2} />
                </span>
                <span
                  className="font-black leading-none text-[#0C0C0C]/10"
                  style={{ fontSize: 'clamp(2.75rem, 5vw, 4.25rem)' }}
                >
                  {service.number}
                </span>
              </div>
              <h3
                className="text-[#0C0C0C] font-bold uppercase leading-tight"
                style={{ fontSize: 'clamp(1.15rem, 1.8vw, 1.55rem)' }}
              >
                {service.name}
              </h3>
              <p
                className="text-[#0C0C0C]/60 font-light leading-relaxed"
                style={{ fontSize: 'clamp(0.9rem, 1.2vw, 1.05rem)' }}
              >
                {service.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
