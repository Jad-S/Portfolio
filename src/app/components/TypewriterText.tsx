import { useEffect, useState } from 'react';
import { motion } from 'motion/react';

interface TypewriterTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function TypewriterText({ text, className = '', delay = 0 }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isPaused) {
        setIsPaused(false);
        setIsDeleting(true);
        return;
      }

      if (!isDeleting && currentIndex < text.length) {
        // Typing
        setDisplayText(text.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else if (isDeleting && currentIndex > 0) {
        // Deleting
        setDisplayText(text.substring(0, currentIndex - 1));
        setCurrentIndex(currentIndex - 1);
      } else if (currentIndex === text.length && !isDeleting) {
        // Pause before deleting
        setIsPaused(true);
      } else if (currentIndex === 0 && isDeleting) {
        // Start typing again
        setIsDeleting(false);
      }
    }, isPaused ? 2000 : isDeleting ? 30 : 80);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, isPaused, text]);

  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay }}
      className={className}
    >
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="text-[#ff4500]"
      >
        |
      </motion.span>
    </motion.p>
  );
}
