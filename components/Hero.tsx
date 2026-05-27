import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import Reveal from './ui/Reveal';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const Hero: React.FC<{ scrolled: boolean }> = ({ scrolled }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-brand-bg pt-32 lg:pt-0">
      {/* Quiet Editorial Linework */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="h-full w-px bg-brand-900 absolute left-6 md:left-12 max-w-[1600px] mx-auto" />
        <div className="h-full w-px bg-brand-900 absolute right-6 md:right-12 max-w-[1600px] mx-auto" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-12 items-center min-h-[80vh]">
          
          {/* Left Column: Typography & Story */}
          <div className="lg:col-span-7 flex flex-col items-start pt-12 lg:pt-0">
            <Reveal>
              <div className="mb-10 text-sm font-medium tracking-wide text-brand-500 uppercase">
                Product & Strategy
              </div>
            </Reveal>

            {/* Morphing Name to Navbar */}
            <div className="relative mb-6 h-8 flex items-center w-full">
              {/* Invisible placeholder to maintain spacing */}
              <div className="opacity-0 font-medium tracking-wide text-brand-600 flex gap-1">
                <span>Dwaipayan</span><span>Pal</span>
              </div>
              
              {!scrolled && (
                <div className="absolute left-0 top-0 flex gap-1.5 font-semibold tracking-wide text-brand-text text-lg">
                  <motion.span 
                    layoutId="brand-first" 
                    transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
                  >
                    Dwaipayan
                  </motion.span>
                  <motion.span 
                    layoutId="brand-last" 
                    transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
                  >
                    Pal
                  </motion.span>
                  <span className="text-brand-500 font-normal ml-2 text-base">— Growth, Strategy & AI Product Specialist</span>
                </div>
              )}
            </div>

            <Reveal delay={100} className="w-full">
              <h1 className="font-display font-medium text-5xl md:text-6xl lg:text-[4.5rem] leading-[1.1] tracking-tight text-brand-text mb-8 max-w-3xl">
                I build digital products with <span className="italic text-brand-500 font-serif">growth built in.</span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-lg md:text-xl text-brand-800 font-light leading-relaxed max-w-xl mb-12">
                Combining product strategy, growth thinking, and AI execution to turn complex ideas into real market traction. Building useful products, not just shipping features.
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="flex flex-wrap items-center gap-6">
                <a href="#projects" className="group flex items-center gap-3 px-8 py-4 bg-brand-text text-brand-bg rounded-full font-medium tracking-wide text-sm hover:bg-brand-800 transition-colors">
                  <span>View Work</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#contact" className="group flex items-center gap-2 px-6 py-4 bg-transparent text-brand-text font-medium tracking-wide text-sm hover:text-brand-500 transition-colors">
                  <span>Let's Connect</span>
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Editorial Image Frame */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0 flex justify-center lg:justify-end">
            <Reveal delay={400} direction="up">
              <div className="relative w-full max-w-md aspect-[3/4] bg-white p-3 shadow-xl transform -rotate-1 hover:rotate-0 transition-transform duration-500 ease-out">
                {/* Central Image */}
                <div className="relative w-full h-full overflow-hidden bg-brand-100">
                  <img 
                    src={PERSONAL_INFO.profileImage} 
                    alt="Dwaipayan Pal" 
                    className="w-full h-full object-cover object-center scale-105 hover:scale-100 transition-transform duration-700 ease-out"
                  />
                </div>
                
                {/* Subtle Image Caption */}
                <div className="absolute -bottom-6 right-4 text-xs font-serif italic text-brand-500">
                  Dwaipayan Pal, 2026
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
