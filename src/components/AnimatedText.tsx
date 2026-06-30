import { Fragment, useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

interface CharProps {
  char: string;
  range: [number, number];
  progress: MotionValue<number>;
}

function Char({ char, range, progress }: CharProps) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative">
      <span className="opacity-20">{char}</span>
      <motion.span className="absolute left-0 top-0" style={{ opacity }}>
        {char}
      </motion.span>
    </span>
  );
}

export default function AnimatedText({ text, className, style }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  // Split into words so wrapping can only happen at the (real) spaces between
  // words. Each word is an inline-block group of per-character animated spans,
  // and the global character index keeps the reveal timing even across the text.
  const words = text.split(' ');
  const totalChars = text.length;
  let charIndex = 0;

  return (
    <p ref={ref} className={className} style={style}>
      {words.map((word, wi) => {
        const wordSpan = (
          <span className="inline-block">
            {word.split('').map((char, ci) => {
              const idx = charIndex++;
              return (
                <Char
                  key={ci}
                  char={char}
                  range={[idx / totalChars, (idx + 1) / totalChars]}
                  progress={scrollYProgress}
                />
              );
            })}
          </span>
        );
        // account for the space that followed this word in the original string
        charIndex++;
        return (
          <Fragment key={wi}>
            {wordSpan}
            {wi < words.length - 1 ? ' ' : null}
          </Fragment>
        );
      })}
    </p>
  );
}
