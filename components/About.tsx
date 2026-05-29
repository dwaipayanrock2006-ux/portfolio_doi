import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const About: React.FC<{ onInViewChange?: (inView: boolean) => void }> = ({ onInViewChange }) => {
  const containerRef = useRef<HTMLElement>(null);
  
  // Track scroll progress through this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth out the scroll value
  const smoothProgress = useSpring(scrollYProgress, { damping: 20, stiffness: 100, mass: 0.5 });

  // --- Animation Transformations ---
  // Background Blur effect
  const bgBlur = useTransform(smoothProgress, [0, 0.5, 1], ["blur(0px)", "blur(20px)", "blur(40px)"]);
  const bgScale = useTransform(smoothProgress, [0, 1], [1, 1.15]);

  // Section 1: Intro
  const opacity1 = useTransform(smoothProgress, [0, 0.15, 0.3], [0, 1, 0]);
  const y1 = useTransform(smoothProgress, [0, 0.15, 0.3], [50, 0, -50]);

  // Section 2: Method
  const opacity2 = useTransform(smoothProgress, [0.25, 0.45, 0.65], [0, 1, 0]);
  const y2 = useTransform(smoothProgress, [0.25, 0.45, 0.65], [50, 0, -50]);

  // Section 3: Stat/Focus
  const opacity3 = useTransform(smoothProgress, [0.6, 0.8, 1], [0, 1, 0]);
  const y3 = useTransform(smoothProgress, [0.6, 0.8, 1], [50, 0, -50]);

  // Indicator line
  const lineScale = useTransform(smoothProgress, [0, 1], [0, 1]);

  useEffect(() => {
    if (!onInViewChange) return;
    
    // Simple intersection observer to detect if the sticky section is in view
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only trigger true if we are substantially in the section
        onInViewChange(entry.isIntersecting && entry.intersectionRatio > 0.1);
      },
      { threshold: [0.1, 0.9] }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => observer.disconnect();
  }, [onInViewChange]);

  return (
    // The container height determines how long the scroll experience lasts
    <section 
      ref={containerRef} 
      id="about" 
      className="relative w-full h-[400vh] bg-brand-bg text-white"
    >
      {/* Sticky viewport container */}
      <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col items-center justify-center">
        
        {/* Abstract Ambient Background */}
        <motion.div 
          className="absolute inset-0 pointer-events-none z-0 opacity-40"
          style={{ filter: bgBlur, scale: bgScale }}
        >
          <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-brand-accent/10 rounded-full blur-[100px] mix-blend-screen" />
          <div className="absolute bottom-1/4 right-1/4 w-[50vw] h-[50vw] bg-white/5 rounded-full blur-[120px] mix-blend-screen" />
        </motion.div>

        {/* Top Left Marker */}
        <div className="absolute top-12 left-6 md:left-12 flex items-center gap-4 z-20">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-accent">
            01 // About
          </span>
          <div className="w-12 h-[1px] bg-white/20" />
        </div>

        {/* Scroll Progress Line Indicator */}
        <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 w-[2px] h-32 bg-white/10 z-20 overflow-hidden">
          <motion.div 
            className="w-full bg-brand-accent origin-top" 
            style={{ scaleY: lineScale, height: '100%' }}
          />
        </div>

        {/* Narrative Container */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-12 md:px-24 h-full flex items-center justify-center">
          
          {/* Narrative Frame 1 */}
          <motion.div 
            className="absolute w-full text-center"
            style={{ opacity: opacity1, y: y1 }}
          >
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
              Finding signals <br />
              <span className="text-brand-accent italic font-light">in the noise.</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed max-w-2xl mx-auto">
              I believe true growth isn't found in spreadsheets or algorithms alone—it lives in the quiet spaces where data meets human behavior.
            </p>
          </motion.div>

          {/* Narrative Frame 2 */}
          <motion.div 
            className="absolute w-full text-center"
            style={{ opacity: opacity2, y: y2 }}
          >
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-8">
              Crafting with <span className="text-brand-accent italic font-light">empathy.</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/60 font-light leading-relaxed max-w-2xl mx-auto">
              I blend the precision of finance with the empathy of a builder, turning complex systems into living, breathing products that resonate with real people.
            </p>
          </motion.div>

          {/* Narrative Frame 3 */}
          <motion.div 
            className="absolute w-full text-center"
            style={{ opacity: opacity3, y: y3 }}
          >
            <div className="mb-12">
              <div className="font-display text-7xl md:text-9xl font-black tracking-tighter text-white drop-shadow-[0_0_30px_rgba(200,224,74,0.15)]">
                1<span className="text-brand-accent">.0</span>
              </div>
              <div className="text-brand-accent uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold mt-4">
                Continuous Evolution
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto border-t border-white/10 pt-12">
              <div className="text-left">
                <h4 className="font-bold text-white text-lg mb-2">Presently</h4>
                <p className="text-white/50 text-sm leading-relaxed">
                  Growing Myndra AI & building at SuperMynd ai.
                </p>
              </div>
              <div className="text-left border-l border-white/10 pl-8">
                <h4 className="font-bold text-white text-lg mb-2">Philosophy</h4>
                <p className="text-white/50 text-sm leading-relaxed italic">
                  "Code is poetry written for machines, but a product is poetry written for people."
                </p>
              </div>
            </div>
          </motion.div>

        </div>
        
        {/* Removed Scroll Instruction */}
      </div>
    </section>
  );
};

export default About;
