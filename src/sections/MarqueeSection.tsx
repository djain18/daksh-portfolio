import { useEffect, useRef, useState } from 'react';
import {
  Sparkles,
  Workflow,
  Zap,
  Target,
  Send,
  ScanText,
  Bot,
  Settings,
  Globe,
  MailCheck,
  Film,
  MessageSquareCode,
  Brain,
  Network,
  Sheet,
  Clock,
  Briefcase,
  Cog,
  Cpu,
  type LucideIcon,
} from 'lucide-react';

interface Tech {
  label: string;
  Icon: LucideIcon;
}

const TECH: Tech[] = [
  { label: 'AI Automation', Icon: Sparkles },
  { label: 'Workflow Automation', Icon: Workflow },
  { label: 'Process Automation', Icon: Zap },
  { label: 'Lead Generation', Icon: Target },
  { label: 'Cold Outreach', Icon: Send },
  { label: 'Data Extraction', Icon: ScanText },
  { label: 'AI Agents', Icon: Bot },
  { label: 'Operations', Icon: Settings },
  { label: 'Web Scraping', Icon: Globe },
  { label: 'Email Automation', Icon: MailCheck },
  { label: 'Content Automation', Icon: Film },
  { label: 'Prompt Engineering', Icon: MessageSquareCode },
  { label: 'LLMs', Icon: Brain },
  { label: 'n8n', Icon: Network },
  { label: 'Google Sheets', Icon: Sheet },
  { label: 'Time Saved', Icon: Clock },
  { label: "Founder's Office", Icon: Briefcase },
  { label: 'Smarter Workflows', Icon: Cog },
  { label: 'FastAPI', Icon: Cpu },
];

const ROW_1 = TECH.slice(0, 9);
const ROW_2 = TECH.slice(9);

const ROW_1_TRIPLED = [...ROW_1, ...ROW_1, ...ROW_1];
const ROW_2_TRIPLED = [...ROW_2, ...ROW_2, ...ROW_2];

function Tile({ tech }: { tech: Tech }) {
  const { label, Icon } = tech;
  return (
    <div
      className="flex items-center gap-4 rounded-2xl border border-[#D7E2EA]/20 bg-[#141414] px-8 flex-shrink-0"
      style={{ width: 420, height: 270 }}
    >
      <Icon className="text-[#BBCCD7] flex-shrink-0" size={56} strokeWidth={1.5} />
      <span className="text-[#D7E2EA] font-medium uppercase tracking-wider text-2xl leading-tight">
        {label}
      </span>
    </div>
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const sectionTop = section.offsetTop;
      const scrollOffset =
        (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(scrollOffset);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      <div className="flex flex-col gap-3">
        {/* Row 1 - moves right */}
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${offset - 200}px)`,
            willChange: 'transform',
          }}
        >
          {ROW_1_TRIPLED.map((tech, i) => (
            <Tile key={`r1-${i}`} tech={tech} />
          ))}
        </div>

        {/* Row 2 - moves left */}
        <div
          className="flex gap-3"
          style={{
            transform: `translateX(${-(offset - 200)}px)`,
            willChange: 'transform',
          }}
        >
          {ROW_2_TRIPLED.map((tech, i) => (
            <Tile key={`r2-${i}`} tech={tech} />
          ))}
        </div>
      </div>
    </div>
  );
}
