import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

const WORDS = [
  'GROWTH',
  'STRATEGY',
  'ANALYTICS',
  'AUTOMATION',
  'EXECUTION',
  'SUPERMYND'
];

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'loading' | 'complete'>('loading');

  useEffect(() => {
    // Dynamic progress ticking with varying speed increments for realism
    const interval = setInterval(() => {
      setProgress((prev) => {
        const remaining = 100 - prev;
        // Slow down slightly as it approaches the end for dramatic build-up
        const maxIncrement = remaining > 30 ? 5 : remaining > 10 ? 3 : 1;
        const jump = Math.floor(Math.random() * maxIncrement) + 1;
        
        if (prev + jump >= 100) {
          clearInterval(interval);
          
          // Hold the final word (SUPERMYND) at 100% so it is fully readable
          setTimeout(() => {
            setPhase('complete');
            // Allow time for the liquid SVG sweep exit animation
            setTimeout(() => onComplete(), 1300); 
          }, 800);

          return 100;
        }
        return prev + jump;
      });
    }, 70); // Slowed down from 45ms to 70ms to make the words readable
    
    return () => clearInterval(interval);
  }, [onComplete]);

  // Determine current active word based on progress percentage
  const activeWordIndex = Math.min(
    Math.floor((progress / 100) * WORDS.length),
    WORDS.length - 1
  );
  const activeWord = WORDS[activeWordIndex];

  // SVG Path Morphing configurations for the liquid sweep transition
  const pathVariants = {
    initial: {
      d: "M0 0 L100 0 L100 100 Q50 100 0 100 Z"
    },
    exit: {
      d: [
        "M0 0 L100 0 L100 100 Q50 100 0 100 Z",
        "M0 0 L100 0 L100 100 Q50 35 0 100 Z",
        "M0 0 L100 0 L100 0 Q50 0 0 0 Z"
      ],
      transition: { 
        duration: 1.3, 
        times: [0, 0.45, 1],
        ease: [0.76, 0, 0.24, 1] 
      }
    }
  };

  return (
    <div className="fixed inset-0 z-[999999] flex items-center justify-center overflow-hidden pointer-events-none">
      
      {/* SVG Liquid Sweep Transition Overlay */}
      <svg 
        className="absolute inset-0 w-full h-full fill-[#050505] pointer-events-auto"
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
      >
        <motion.path 
          variants={pathVariants}
          initial="initial"
          animate={phase === 'complete' ? "exit" : "initial"}
        />
      </svg>

      {/* Loading Content Wrapper */}
      <AnimatePresence>
        {phase === 'loading' && (
          <motion.div 
            exit={{ opacity: 0, y: -40, filter: "blur(12px)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="relative z-10 flex flex-col items-center justify-center w-full px-6"
          >
            {/* Ambient Accent Energy Orb */}
            <motion.div 
              className="absolute w-[280px] h-[280px] md:w-[480px] md:h-[480px] rounded-full blur-[100px] md:blur-[160px] opacity-15 pointer-events-none -z-10 bg-[#c8e04a]"
              style={{
                scale: 0.8 + (progress / 100) * 0.5, // grows as progress fills
              }}
              animate={{
                opacity: [0.12, 0.22, 0.12],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Typography Cycling Keyphrases */}
            <div className="overflow-hidden py-4 flex items-center justify-center min-h-[140px] w-full">
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeWord}
                  initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -45, filter: 'blur(8px)' }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="font-display font-black text-4xl sm:text-6xl md:text-[5.5rem] tracking-[-0.03em] leading-tight text-white uppercase text-center block"
                >
                  {activeWord}
                </motion.span>
              </AnimatePresence>
            </div>
            
            {/* Fine Subheading & Ticking Monospaced Counter */}
            <div className="absolute bottom-[-16vh] flex flex-col items-center gap-2">
              <span className="text-[9px] font-bold uppercase tracking-[0.35em] text-white/35 font-sans">
                Initializing System
              </span>
              <span className="text-sm md:text-base font-mono font-medium tracking-[0.25em] text-[#c8e04a]">
                {progress.toString().padStart(3, '0')}%
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Preloader;
