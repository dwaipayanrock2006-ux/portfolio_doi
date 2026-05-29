import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { NAV_ITEMS, SOCIAL_LINKS } from '../constants';
import Magnetic from './ui/Magnetic';

const ProgressRing: React.FC<{ size?: number; strokeWidth?: number }> = ({ 
  size = 40, 
  strokeWidth = 2 
}) => {
  const { scrollYProgress } = useScroll();
  
  // Smooth the scroll progress values
  const smoothProgress = useSpring(scrollYProgress, { 
    damping: 15, 
    stiffness: 80, 
    mass: 0.2 
  });
  
  const radius = size / 2;
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = useTransform(smoothProgress, [0, 1], [circumference, 0]);

  return (
    <svg
      height={size}
      width={size}
      className="absolute pointer-events-none -rotate-90"
    >
      {/* Background Track */}
      <circle
        stroke="rgba(255, 255, 255, 0.08)"
        fill="transparent"
        strokeWidth={strokeWidth}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
      {/* Progress Indicator */}
      <motion.circle
        stroke="#c8e04a" // brand-accent
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference + ' ' + circumference}
        style={{ strokeDashoffset }}
        r={normalizedRadius}
        cx={radius}
        cy={radius}
      />
    </svg>
  );
};

const Navbar: React.FC<{ scrolled: boolean }> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState<string>('home');

  // Track active section on scroll using IntersectionObserver
  useEffect(() => {
    const activeEntries = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeEntries.set(entry.target.id, entry.intersectionRatio);
          } else {
            activeEntries.delete(entry.target.id);
          }
        });

        // Find the entry with the highest intersection ratio
        let currentActiveId = 'hero';
        let maxRatio = 0;
        activeEntries.forEach((ratio, id) => {
          if (ratio > maxRatio) {
            maxRatio = ratio;
            currentActiveId = id;
          }
        });

        // Map section ID to corresponding nav item href
        const matchedItem = NAV_ITEMS.find((item) => item.href === `#${currentActiveId}`);
        if (matchedItem) {
          setActiveSection(matchedItem.href);
        } else if (window.scrollY < 100) {
          setActiveSection('home');
        }
      },
      {
        rootMargin: '-15% 0px -45% 0px', // Focus region in the upper-middle viewport
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
      }
    );

    // Observe each section element
    NAV_ITEMS.forEach((item) => {
      const el = document.querySelector(item.href);
      if (el) {
        observer.observe(el);
      }
    });

    // Also observe the hero
    const heroEl = document.querySelector('#hero');
    if (heroEl) {
      observer.observe(heroEl);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-6 left-0 right-0 z-50 px-6 pointer-events-none">
      <div className="max-w-[1200px] mx-auto w-full flex justify-center items-center">
        
        {/* Main Floating Glass Pill Nav Bar */}
        <motion.div 
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="pointer-events-auto flex items-center justify-between gap-6 px-5 py-2.5 bg-black/60 border border-white/10 rounded-full shadow-[0_24px_80px_-20px_rgba(0,0,0,0.7)] backdrop-blur-xl relative overflow-visible max-w-full w-full md:w-auto hover:border-white/20 transition-all duration-300 group/nav"
        >
          {/* Subtle accent border glow on hover */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-accent/0 via-brand-accent/5 to-brand-accent/0 opacity-0 group-hover/nav:opacity-100 transition-opacity duration-700 pointer-events-none -z-10" />

          {/* Left Block: Monogram Logo + Progress Ring */}
          <div className="flex items-center gap-3">
            <Magnetic strength={0.3}>
              <a 
                href="#hero"
                className="relative w-9 h-9 rounded-full flex items-center justify-center bg-white hover:scale-105 active:scale-95 transition-transform duration-300 shadow-[0_4px_12px_rgba(255,255,255,0.15)] z-10"
              >
                <span className="font-display font-black text-black text-sm tracking-tighter">DP</span>
                <ProgressRing size={36} strokeWidth={2} />
              </a>
            </Magnetic>
            
            <div className="w-[1px] h-4 bg-white/15 hidden md:block" />
          </div>

          {/* Center Block: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 relative">
            {NAV_ITEMS.map((item, idx) => {
              const isActive = activeSection === item.href;
              const isHovered = hoveredIndex === idx;
              
              return (
                <Magnetic key={item.label} strength={0.2}>
                  <a
                    href={item.href}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`relative px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${
                      isActive ? 'text-white' : 'text-white/45 hover:text-white'
                    }`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    
                    {/* Hover indicator sliding background */}
                    {isHovered && (
                      <motion.div 
                        layoutId="nav-hover-pill"
                        className="absolute inset-0 bg-white/5 rounded-full -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 28 }}
                      />
                    )}
                  </a>
                </Magnetic>
              );
            })}
          </nav>

          {/* Right Block: CTA button (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <div className="w-[1px] h-4 bg-white/15" />
            
            <Magnetic strength={0.25}>
              <a 
                href="#contact"
                className="group relative inline-flex items-center gap-2 px-4 py-2 bg-[#c8e04a] text-black font-bold uppercase text-[10px] tracking-wider rounded-full shadow-[0_4px_16px_rgba(200,224,74,0.25)] hover:shadow-[0_8px_24px_rgba(200,224,74,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                {/* Pulse dot indicating active/available status */}
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black/30 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-700"></span>
                </span>
                
                <span>Let's Talk</span>
                
                <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </a>
            </Magnetic>
          </div>

          {/* Mobile Menu Trigger button */}
          <div className="md:hidden flex items-center">
            <button 
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white relative hover:bg-white/10 active:scale-95 transition-all duration-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="relative z-10">
                {isOpen ? <X size={16} /> : <Menu size={16} />}
              </div>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Mobile Glassmorphic Fullscreen Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden absolute top-24 left-6 right-6 p-6 bg-black/85 border border-white/10 backdrop-blur-2xl rounded-2xl shadow-[0_40px_80px_rgba(0,0,0,0.8)] pointer-events-auto overflow-hidden flex flex-col gap-8 z-40"
          >
            {/* Top background blur blobs */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-full blur-2xl pointer-events-none" />
            
            <div className="flex flex-col gap-4 relative z-10">
              {NAV_ITEMS.map((item, i) => (
                <motion.a 
                  key={item.label} 
                  href={item.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                  className={`text-xl font-display font-semibold tracking-wide transition-colors py-1 ${
                    activeSection === item.href ? 'text-brand-accent' : 'text-white/60 hover:text-white'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-4 pt-6 border-t border-white/10 w-full relative z-10"
            >
              {/* Secondary CTA inside mobile menu */}
              <a 
                href="#contact"
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#c8e04a] text-black font-bold uppercase text-xs tracking-wider rounded-xl shadow-lg active:scale-95 transition-all"
                onClick={() => setIsOpen(false)}
              >
                <span>Let's Talk</span>
                <ArrowUpRight size={14} />
              </a>
              
              <div className="flex gap-4 justify-center mt-2">
                {SOCIAL_LINKS.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a 
                      key={link.platform} 
                      href={link.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all duration-300"
                    >
                      <Icon size={14} />
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;