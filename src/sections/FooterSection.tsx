import { Mail, Linkedin, Phone, MapPin, GraduationCap, Award } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const CONTACTS = [
  {
    label: 'dakshinjain187@gmail.com',
    href: 'mailto:dakshinjain187@gmail.com',
    Icon: Mail,
  },
  {
    label: 'linkedin.com/in/daksh-jain-growth-engineer',
    href: 'https://www.linkedin.com/in/daksh-jain-growth-engineer',
    Icon: Linkedin,
  },
  {
    label: '+91 9380066165',
    href: 'tel:+919380066165',
    Icon: Phone,
  },
  {
    label: 'Bangalore, India',
    href: null,
    Icon: MapPin,
  },
];

const CREDENTIALS = [
  {
    label: 'Christ University, Bangalore — BCA, Computer Science (2024–2027)',
    Icon: GraduationCap,
  },
  {
    label: 'Generative AI Mastermind — Certification',
    Icon: Award,
  },
];

export default function FooterSection() {
  return (
    <footer
      id="contact"
      className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-28 pb-12"
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-12 sm:gap-16">
        <FadeIn y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(2.5rem, 10vw, 130px)' }}
          >
            Let&apos;s Connect
          </h2>
        </FadeIn>

        <FadeIn delay={0.15} y={30}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {CONTACTS.map(({ label, href, Icon }) => {
              const inner = (
                <div className="flex items-center gap-4 rounded-2xl border border-[#D7E2EA]/20 bg-[#141414] px-6 py-5 transition-colors duration-200 hover:border-[#D7E2EA]/50">
                  <Icon
                    className="text-[#BBCCD7] flex-shrink-0"
                    size={26}
                    strokeWidth={1.5}
                  />
                  <span className="text-[#D7E2EA] font-light tracking-wide text-sm sm:text-base break-all">
                    {label}
                  </span>
                </div>
              );
              return href ? (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {inner}
                </a>
              ) : (
                <div key={label}>{inner}</div>
              );
            })}
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {CREDENTIALS.map(({ label, Icon }) => (
            <div
              key={label}
              className="flex items-center gap-4 rounded-2xl border border-[#D7E2EA]/20 bg-[#141414] px-6 py-5 transition-colors duration-200 hover:border-[#D7E2EA]/50"
            >
              <Icon
                className="text-[#BBCCD7] flex-shrink-0"
                size={26}
                strokeWidth={1.5}
              />
              <span className="text-[#D7E2EA] font-light tracking-wide text-sm sm:text-base break-all">
                {label}
              </span>
            </div>
          ))}
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8"
          style={{ borderTop: '1px solid rgba(215, 226, 234, 0.15)' }}
        >
          <span className="text-[#D7E2EA] font-medium uppercase tracking-widest text-sm">
            Daksh Jain
          </span>
          <span className="text-[#D7E2EA]/50 font-light uppercase tracking-widest text-xs">
            Builder
          </span>
        </div>
      </div>
    </footer>
  );
}
