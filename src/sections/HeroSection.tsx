import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';

const NAV_LINKS = ['About', 'Experience', 'Projects', 'Contact'];

const HERO_BG =
  'https://images.unsplash.com/photo-1637946175559-22c4fe13fc54?q=80&w=2400&auto=format&fit=crop';

export default function HeroSection() {
  return (
    <section
      className="relative h-screen flex flex-col overflow-hidden"
      style={{ overflowX: 'clip' }}
    >
      {/* Background image + dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_BG}
          alt=""
          className="w-full h-full object-cover select-none pointer-events-none"
          draggable={false}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(12,12,12,0.55) 0%, rgba(12,12,12,0.15) 35%, rgba(12,12,12,0.25) 60%, rgba(12,12,12,0.92) 100%)',
          }}
        />
      </div>

      {/* Navbar */}
      <FadeIn as="nav" delay={0} y={-20} className="relative z-10 w-full">
        <ul className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] transition-opacity duration-200 hover:opacity-70"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </FadeIn>

      {/* Hero Heading */}
      <div className="relative z-10 flex-1 flex flex-col justify-end px-6 md:px-10">
        <div className="overflow-hidden">
          <FadeIn delay={0.15} y={40}>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full mt-6 sm:mt-4 md:-mt-5 text-[12vw] sm:text-[13vw] md:text-[13vw] lg:text-[13.5vw]">
              Hi, i&apos;m daksh
            </h1>
          </FadeIn>
        </div>

        {/* Bottom bar */}
        <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10">
          <FadeIn delay={0.35} y={20}>
            <p
              className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
              style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
            >
              inside early-stage startups, learning how they're built
            </p>
          </FadeIn>
          <FadeIn delay={0.5} y={20}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
