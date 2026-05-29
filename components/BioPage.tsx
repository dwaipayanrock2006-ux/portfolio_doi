import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, Award, Flame, Brain, Activity, ShieldAlert, Sparkles } from 'lucide-react';
import { PERSONAL_INFO, SOCIAL_LINKS } from '../constants';
import Magnetic from './ui/Magnetic';

// Bento Mindset Card sub-component
const MindsetCard: React.FC<{ 
  title: string; 
  description: string; 
  icon: React.ComponentType<any>; 
  glowColor: string; 
  delay: number;
}> = ({ title, description, icon: Icon, glowColor, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="relative overflow-hidden bg-white/5 border border-white/10 rounded-[2rem] p-8 flex flex-col justify-between group transition-colors hover:border-white/20 duration-300 min-h-[220px]"
    >
      {/* Background glow overlay */}
      <div 
        className="absolute -right-16 -top-16 w-36 h-36 rounded-full blur-[80px] opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
        style={{ backgroundColor: glowColor }}
      />
      
      <div className="flex justify-between items-start mb-6">
        <div className="p-3 bg-white/5 border border-white/10 rounded-2xl text-white group-hover:text-brand-accent transition-colors duration-300">
          <Icon size={20} />
        </div>
        <div className="text-[9px] font-bold font-mono tracking-widest text-white/30 uppercase group-hover:text-brand-accent/60 transition-colors">
          Ethos // Core
        </div>
      </div>
      
      <div>
        <h4 className="font-display font-bold text-xl text-white tracking-tight mb-2">
          {title}
        </h4>
        <p className="text-xs text-white/50 leading-relaxed font-light">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

const BioPage: React.FC = () => {
  // Mindset data based on his profile
  const mindsets = [
    {
      title: "Strategic Leverage",
      description: "Finding asymmetric opportunities where minimal input yields maximum outcome. Deciding what not to do is as important as what to build.",
      icon: Brain,
      glowColor: "#c8e04a",
      delay: 0.1
    },
    {
      title: "High-Stakes Confidence",
      description: "Operating with absolute conviction and clarity. Believing in zero-to-one execution and taking complete ownership of projects under pressure.",
      icon: Flame,
      glowColor: "#ffffff",
      delay: 0.2
    },
    {
      title: "Extreme Ownership",
      description: "Being a self-reliant builder. Treating every project as a personal legacy, driving initiatives forward from initial concepts to market traction.",
      icon: Award,
      glowColor: "#c8e04a",
      delay: 0.3
    },
    {
      title: "Analytical Clarity",
      description: "Leveraging BBA Business Analytics frameworks to decode customer behavior. Blending numbers with qualitative psychology to optimize growth funnels.",
      icon: Activity,
      glowColor: "#ffffff",
      delay: 0.4
    }
  ];

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text relative overflow-hidden pb-24 md:pb-32 bg-grain">
      
      {/* Background ambient mesh glows */}
      <div className="absolute top-0 right-[10%] w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-[20%] left-[5%] w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Floating Header */}
      <header className="fixed top-6 left-0 right-0 z-50 px-6">
        <div className="max-w-[1200px] mx-auto w-full flex justify-between items-center bg-black/60 border border-white/10 backdrop-blur-xl rounded-full px-5 py-2.5 shadow-2xl">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-display font-black text-xs">
              DP
            </span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-white/50 hidden sm:inline">
              / Dedicated Bio
            </span>
          </div>

          <Magnetic strength={0.25}>
            <a 
              href="#"
              className="flex items-center gap-1.5 px-4 py-2 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300"
            >
              <ArrowLeft size={12} />
              <span>Back to Portfolio</span>
            </a>
          </Magnetic>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-[1000px] mx-auto px-6 pt-32 md:pt-40 flex flex-col gap-24 relative z-10">
        
        {/* Editorial Cover Grid (Portrait & Core Profile) */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Portrait Image with Glass Framing */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 aspect-[3/4] w-full bg-white/5 rounded-[2.5rem] border border-white/10 p-3.5 shadow-2xl"
          >
            <div className="w-full h-full overflow-hidden rounded-[2rem] bg-[#111] border border-white/5 relative group">
              <img 
                src={PERSONAL_INFO.profileImage}
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 ease-out opacity-85 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Right Side: Identity Typography */}
          <div className="md:col-span-7 flex flex-col justify-center">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-2 mb-4"
            >
              <Sparkles size={13} className="text-brand-accent" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-brand-accent">
                Executive Profile
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-black text-white text-4xl md:text-5xl lg:text-6xl leading-[1.08] tracking-tight mb-6"
            >
              {PERSONAL_INFO.name}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-white/70 font-light leading-relaxed mb-8 max-w-xl text-balance"
            >
              {PERSONAL_INFO.tagline}
            </motion.p>

            {/* Quick Metadata Table */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.4 }}
              className="grid grid-cols-2 gap-y-6 gap-x-4 border-t border-white/10 pt-8"
            >
              <div>
                <span className="block text-[8px] font-bold uppercase tracking-widest text-white/30 mb-1">Focus Area</span>
                <span className="text-sm font-semibold text-white/80">Growth & AI Products</span>
              </div>
              <div>
                <span className="block text-[8px] font-bold uppercase tracking-widest text-white/30 mb-1">Academic Study</span>
                <span className="text-sm font-semibold text-white/80">BBA Business Analytics</span>
              </div>
              <div>
                <span className="block text-[8px] font-bold uppercase tracking-widest text-white/30 mb-1">Present Work</span>
                <span className="text-sm font-semibold text-white/80">SuperMynd ai // Porobangla AI</span>
              </div>
              <div>
                <span className="block text-[8px] font-bold uppercase tracking-widest text-white/30 mb-1">Mindset Ethos</span>
                <span className="text-sm font-semibold text-brand-accent italic font-serif">Harvey Specter Mindset</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Narrative Origin Story (Poetic & Human) */}
        <section className="border-t border-white/10 pt-16 flex flex-col gap-8">
          <div className="max-w-xs">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent block mb-2">
              01 // The Narrative
            </span>
            <h2 className="font-display font-bold text-3xl text-white tracking-tight">
              Behind the execution.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white/60 font-light text-sm leading-relaxed max-w-3xl">
            <div className="flex flex-col gap-6">
              <p>
                I believe that in modern product development, the line between technology and growth has dissolved. Success is no longer about launching a product and hoping for users—it is about designing the product loops and growth frameworks into the codebase itself.
              </p>
              <p>
                My journey began with a relentless curiosity about human behavior, systems analysis, and how quantitative structures could predict growth. This led me to pursue a BBA in Business Analytics, where I bridge the gap between financial modeling and data-driven product decisions.
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <p>
                Currently, as the Growth Head Intern at <strong className="text-white font-medium">SuperMynd ai</strong>, I design strategies that drive real market traction. Simultaneously, as a builder at <strong className="text-white font-medium">Porobangla AI</strong>, I build academic intelligence tools designed to empower students.
              </p>
              <p>
                I operate under a simple ethos: confidence backed by execution. I focus on developing a high-conviction mindset, strategic control, and deep engineering capabilities to turn ambitious ideas into functional realities.
              </p>
            </div>
          </div>
        </section>

        {/* Bento Mindset Grid */}
        <section className="flex flex-col gap-10">
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent block mb-2">
              02 // The Ethos
            </span>
            <h2 className="font-display font-bold text-3xl text-white tracking-tight">
              A high-conviction mindset.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {mindsets.map((m, idx) => (
              <MindsetCard 
                key={m.title}
                title={m.title}
                description={m.description}
                icon={m.icon}
                glowColor={m.glowColor}
                delay={m.delay}
              />
            ))}
          </div>
        </section>

        {/* Signature & Social CTA */}
        <section className="border-t border-white/10 pt-16 flex flex-col items-center gap-10 text-center">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-white/40 mb-3">
              Let's build the future together
            </p>
            <h3 className="font-display font-bold text-3xl text-white tracking-tight mb-6">
              Connect & Collaborate
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {SOCIAL_LINKS.map((link) => (
                <Magnetic key={link.platform} strength={0.2}>
                  <a 
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-5 py-2.5 bg-white/5 border border-white/10 hover:border-brand-accent hover:bg-brand-accent/5 rounded-full text-xs font-semibold text-white hover:text-brand-accent transition-all duration-300"
                  >
                    <span>{link.platform}</span>
                    <ArrowUpRight size={12} />
                  </a>
                </Magnetic>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5 w-full flex flex-col sm:flex-row justify-between items-center text-[10px] text-white/30 font-mono">
            <span>DWAIPAYAN PORTFOLIO // BIO PAGE</span>
            <span className="mt-2 sm:mt-0">©2026 DWAIPAYAN PAL. ALL RIGHTS RESERVED.</span>
          </div>
        </section>

      </main>
    </div>
  );
};

export default BioPage;
