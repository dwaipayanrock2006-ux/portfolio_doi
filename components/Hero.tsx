import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import { PERSONAL_INFO } from '../constants';
import { ArrowRight, TrendingUp } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Magnetic from './ui/Magnetic';

gsap.registerPlugin(ScrollTrigger);

// ── Mini bar chart for the stats card ────────────────────────────────────────
const MiniBarChart = () => {
  const bars = [
    { ai: 0.4, growth: 0.5 },
    { ai: 0.55, growth: 0.65 },
    { ai: 0.45, growth: 0.7 },
    { ai: 0.7, growth: 0.85 },
    { ai: 0.6, growth: 0.9 },
    { ai: 0.8, growth: 1.0 },
  ];
  return (
    <div className="flex items-end gap-1.5 h-16 mt-3">
      {bars.map((b, i) => (
        <div key={i} className="flex flex-col gap-1 flex-1 items-stretch">
          <motion.div
            className="rounded-sm"
            style={{ backgroundColor: '#2d4a1e', height: `${b.ai * 64}px` }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.9 + i * 0.07, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          />
          <motion.div
            className="rounded-sm"
            style={{ backgroundColor: '#a3c939', height: `${b.growth * 28}px` }}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 1.0 + i * 0.07, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          />
        </div>
      ))}
    </div>
  );
};

// ── Hero ──────────────────────────────────────────────────────────────────────
const Hero: React.FC<{ scrolled: boolean }> = ({ scrolled }) => {
  const container = useRef<HTMLElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);

  // Flashlight mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!container.current) return;
      const rect = container.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };
    
    // Set initial position to center
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    if (!container.current) return;
    const ctx = gsap.context(() => {
      // Very subtle zoom parallax on the background photo
      gsap.to(photoRef.current, {
        scale: 1.08,
        ease: 'none',
        scrollTrigger: {
          trigger: container.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5,
        },
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={container}
      id="hero"
      className="relative min-h-screen overflow-hidden flex flex-col bg-[#0a0a0a]"
    >
      {/* ── Base Layer: Very dark tint ── */}
      <div className="absolute inset-0 bg-[#0a0a0a]" />

      {/* ── Flashlight Layer ── */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          WebkitMaskImage: useMotionTemplate`radial-gradient(circle 450px at ${springX}px ${springY}px, black 0%, rgba(0,0,0,0.85) 30%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0.2) 100%)`,
          maskImage: useMotionTemplate`radial-gradient(circle 450px at ${springX}px ${springY}px, black 0%, rgba(0,0,0,0.85) 30%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0.2) 100%)`,
        }}
      >
        <div ref={photoRef} className="absolute inset-0 origin-center">
          <img
            src="/hero.jpeg"
            alt="Dwaipayan Pal"
            className="w-full h-full object-cover object-center opacity-85 mix-blend-luminosity filter contrast-115 brightness-110"
          />
        </div>
      </motion.div>

      {/* ── Layered dark overlays ── */}
      {/* Bottom-to-top heavy gradient so text pops */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            'linear-gradient(to top, rgba(10,10,10,1) 0%, rgba(10,10,10,0.4) 45%, rgba(10,10,10,0) 100%)',
        }}
      />
      {/* Left-side text fade */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, rgba(10,10,10,0.8) 0%, transparent 60%)',
        }}
      />

      {/* ── Morphing name (top-left, visible only before scroll) ── */}
      <div className="relative z-20 px-8 md:px-14 pt-8">
        <div className="h-7 flex items-center">
          <div className="opacity-0 text-base font-medium flex gap-1">
            <span>Dwaipayan</span><span>Pal</span>
          </div>
          {!scrolled && (
            <div className="absolute left-8 md:left-14 flex items-center gap-1.5">
              <motion.span
                layoutId="brand-first"
                transition={{ duration: 0.75, type: 'spring', bounce: 0.18 }}
                className="text-sm font-semibold text-white/80 tracking-wide"
              >
                Dwaipayan
              </motion.span>
              <motion.span
                layoutId="brand-last"
                transition={{ duration: 0.75, type: 'spring', bounce: 0.18 }}
                className="text-sm font-semibold text-white/80 tracking-wide"
              >
                Pal
              </motion.span>
            </div>
          )}
        </div>
      </div>

      {/* ── Bottom content area ── */}
      <div className="relative z-20 mt-auto px-8 md:px-14 pb-14 md:pb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-10">

        {/* Left: Headline + sub + CTA */}
        <div className="max-w-xl">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-white/40 text-xs font-semibold uppercase tracking-[0.22em] mb-4"
          >
            Product · Growth · AI
          </motion.p>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32, duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-display font-bold text-white text-[clamp(2.6rem,6vw,5rem)] leading-[1.06] tracking-[-0.02em] mb-5"
          >
            Building products
            <br />
            that{' '}
            <span
              className="italic font-light"
              style={{ color: '#c8e04a' }}
            >
              grow.
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.46, duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-white/50 text-sm font-light leading-relaxed mb-8 max-w-sm"
          >
            Strategy, growth thinking, and AI execution — turning ambitious ideas
            into real market traction.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Magnetic strength={0.25}>
              <a
                href="#projects"
                id="hero-view-work-btn"
                className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm text-[#1a2a0a] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
                style={{ backgroundColor: '#c8e04a' }}
              >
                View Work
                <ArrowRight
                  size={15}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </a>
            </Magnetic>
          </motion.div>
        </div>

        {/* Right: Floating stats card */}
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.8, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex-shrink-0 w-64 bg-white rounded-2xl p-5 shadow-[0_24px_60px_rgba(0,0,0,0.35)]"
        >
          {/* Card header */}
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-gray-900 tracking-tight">
                Growth
              </span>
              <span
                className="text-[10px] font-bold px-2 py-0.5 rounded-full text-white"
                style={{ backgroundColor: '#2d4a1e' }}
              >
                +142%
              </span>
            </div>
            <TrendingUp size={13} className="text-gray-300" />
          </div>

          {/* Period tabs */}
          <div className="flex gap-3 text-[10px] font-semibold mb-1">
            <span style={{ color: '#2d4a1e' }} className="border-b border-current pb-0.5">
              Strategy
            </span>
            <span className="text-gray-300">Growth</span>
            <span className="text-gray-300">AI</span>
          </div>

          {/* Bar chart */}
          <MiniBarChart />

          {/* Caption */}
          <p className="text-[9px] text-gray-400 mt-3 leading-snug">
            Updates across every product cycle
          </p>
        </motion.div>

      </div>

      {/* ── Scroll indicator (bottom-center) ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5"
      >
        <motion.div
          className="w-px h-8 origin-top"
          style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  );
};

export default Hero;
