import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ArrowUpRight, ArrowRight, FolderOpen } from 'lucide-react';

const CATEGORIES = ['All', 'Product', 'Growth', 'Content', 'Tech'];

// Interactive Image Frame with 3D Parallax Tilt & Mouse Track Effect
const InteractiveFrame: React.FC<{ src: string | undefined; title: string; link?: string }> = ({ src, title, link }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [scale, setScale] = useState(1);
  const frameRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!frameRef.current) return;
    const rect = frameRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Normalize coordinates (-0.5 to 0.5)
    const xc = x / rect.width - 0.5;
    const yc = y / rect.height - 0.5;

    // Set rotation bounds (max 8deg tilt to keep it subtle and elegant)
    setRotateX(yc * -8);
    setRotateY(xc * 8);
    setScale(1.02);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setScale(1);
  };

  const fallbackImage = "https://picsum.photos/800/600?grayscale&blur=2";

  return (
    <div 
      ref={frameRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => { if (link) window.open(link, '_blank'); }}
      className="relative w-full h-full overflow-hidden bg-brand-100/50 p-4 md:p-8 rounded-[2rem] cursor-pointer transition-shadow duration-500 hover:shadow-xl flex items-center justify-center will-change-transform group"
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
        transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), shadow 0.5s ease',
      }}
    >
      {/* Editorial Frame (Browser mockup style if link is present, Polaroid style if static image) */}
      <div className="relative w-full h-full overflow-hidden bg-white p-3.5 shadow-md rounded-2xl border border-brand-200/40 w-full h-full flex flex-col">
        {link ? (
          // Browser mockup shell
          <div className="w-full h-full flex flex-col overflow-hidden bg-brand-50 rounded-lg border border-brand-200/30">
            {/* Browser Header */}
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-brand-200/40 bg-brand-100/20">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-brand-400" />
                <div className="w-2 h-2 rounded-full bg-brand-300" />
                <div className="w-2 h-2 rounded-full bg-brand-200" />
              </div>
              <div className="text-[9px] text-brand-600 font-mono tracking-tight bg-white border border-brand-200/40 px-3 py-0.5 rounded w-44 text-center truncate">
                {link.replace('https://', '').replace('www.', '')}
              </div>
              <div className="w-8" />
            </div>
            
            {/* Live iframe container */}
            <div className="w-full flex-1 overflow-hidden relative bg-white">
              <iframe 
                src={link} 
                title={title} 
                className="w-full h-full border-0 select-none pointer-events-none"
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
              {/* Overlay to intercept clicks/mouse interactions and trigger hover / opening */}
              <div className="absolute inset-0 bg-transparent flex items-center justify-center group-hover:bg-brand-950/[0.03] transition-colors duration-500">
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 bg-brand-text text-brand-bg text-[10px] font-semibold tracking-wider uppercase px-4 py-2 rounded-full shadow-lg transition-all duration-300">
                  Launch Site ↗
                </div>
              </div>
            </div>
          </div>
        ) : (
          // Static Polaroid style
          <div className="w-full h-full overflow-hidden bg-brand-50 rounded-lg relative">
            <motion.img 
              src={src || fallbackImage} 
              alt={title} 
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-[1s] ease-out"
              style={{
                scale: 1.05,
                x: rotateY * 1.8,
                y: rotateX * -1.8,
                transition: 'transform 0.15s ease-out, filter 0.8s ease'
              }}
            />
            {/* Subtle Matte Overlay */}
            <div className="absolute inset-0 bg-brand-950/[0.02] mix-blend-multiply pointer-events-none rounded-2xl" />
          </div>
        )}
      </div>
    </div>
  );
};

// Framer Motion staggered text reveal variations
const textContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  }
};

const textItem = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: [0.16, 1, 0.3, 1] 
    } 
  }
};

// 1. Featured Case Study Card
const FeaturedCard: React.FC<{ project: any }> = ({ project }) => {
  return (
    <motion.div 
      layout
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={textContainer}
      className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center py-10"
    >
      {/* Narrative & Metrics Column */}
      <div className="lg:col-span-5 flex flex-col justify-center order-2 lg:order-1">
        <motion.div variants={textItem} className="flex items-center gap-3 mb-6">
          <span className="font-serif italic text-brand-500 text-3xl font-medium">01</span>
          <span className="w-8 h-px bg-brand-300" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-500">Featured Case Study</span>
        </motion.div>
        
        <motion.h3 variants={textItem} className="font-display font-medium text-4xl md:text-5xl text-brand-text tracking-tight mb-6 leading-tight">
          {project.title}
        </motion.h3>

        {/* Strategy Meta Table */}
        <motion.div variants={textItem} className="grid grid-cols-3 gap-4 border-y border-brand-200/60 py-5 my-6">
          <div>
            <span className="block text-[9px] uppercase tracking-widest text-brand-400 font-bold mb-1">Role</span>
            <span className="text-xs font-semibold text-brand-850">{project.role}</span>
          </div>
          <div>
            <span className="block text-[9px] uppercase tracking-widest text-brand-400 font-bold mb-1">Focus</span>
            <span className="text-xs font-semibold text-brand-850">{project.category}</span>
          </div>
          <div>
            <span className="block text-[9px] uppercase tracking-widest text-brand-400 font-bold mb-1">Scope</span>
            <span className="text-xs font-semibold text-brand-850">0 to 1 Launch</span>
          </div>
        </motion.div>

        <motion.p variants={textItem} className="text-base text-brand-800 font-light leading-relaxed mb-8 text-balance">
          {project.description}
        </motion.p>

        {/* Tags */}
        <motion.div variants={textItem} className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag: string, i: number) => (
            <span key={i} className="px-3 py-1 bg-brand-50 border border-brand-200/50 rounded-md text-[10px] text-brand-800 font-medium tracking-wide">
              {tag}
            </span>
          ))}
        </motion.div>

        {/* Action Link */}
        <motion.div variants={textItem}>
          <a 
            href={project.link || "#"} 
            className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-brand-text hover:text-brand-500 transition-colors w-fit"
          >
            <span>Explore Case Study</span>
            <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>

      {/* Cinematic Preview Column */}
      <motion.div 
        variants={textItem}
        className="lg:col-span-7 aspect-[4/3] w-full order-1 lg:order-2 group"
      >
        <InteractiveFrame src={project.imagePlaceholder} title={project.title} link={project.link} />
      </motion.div>
    </motion.div>
  );
};

// 2. Secondary Staggered Case Cards
const SecondaryCard: React.FC<{ project: any; index: number }> = ({ project, index }) => {
  // Vertically offset the second card to create editorial staggered rhythm
  const staggerClass = index % 2 === 1 ? 'lg:mt-24' : '';
  const numeral = index + 2;

  return (
    <motion.div 
      layout
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={textContainer}
      className={`group flex flex-col ${staggerClass} w-full`}
    >
      {/* Media Frame */}
      <motion.div variants={textItem} className="aspect-[4/3] w-full mb-8 relative">
        <InteractiveFrame src={project.imagePlaceholder} title={project.title} link={project.link} />
      </motion.div>

      {/* Meta Header */}
      <motion.div variants={textItem} className="flex items-center gap-3 mb-4">
        <span className="font-serif italic text-brand-500 text-xl font-medium">0{numeral}</span>
        <span className="w-6 h-px bg-brand-300" />
        <span className="text-[9px] font-bold uppercase tracking-wider text-brand-500">{project.category} // {project.role}</span>
      </motion.div>

      {/* Text Details */}
      <motion.h4 variants={textItem} className="font-display font-medium text-2xl md:text-3xl text-brand-text tracking-tight mb-4 group-hover:text-brand-700 transition-colors">
        {project.title}
      </motion.h4>
      
      <motion.p variants={textItem} className="text-sm text-brand-850 font-light leading-relaxed mb-6 max-w-lg">
        {project.description}
      </motion.p>

      {/* Tags */}
      <motion.div variants={textItem} className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag: string, i: number) => (
          <span key={i} className="px-2.5 py-0.5 bg-brand-50 border border-brand-200/50 rounded-md text-[9px] text-brand-800 font-medium tracking-wide">
            {tag}
          </span>
        ))}
      </motion.div>

      {/* Action */}
      <motion.div variants={textItem} className="mt-auto">
        <a 
          href={project.link || "#"} 
          className="group inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-wider text-brand-text hover:text-brand-500 transition-colors w-fit"
        >
          <span>View Strategy</span>
          <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
        </a>
      </motion.div>
    </motion.div>
  );
};

// 3. Horizontal Archive Rows
const ArchiveRow: React.FC<{ project: any; index: number }> = ({ project, index }) => {
  const numeral = index + 4;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="border-b border-brand-200/70 py-6 md:py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer relative overflow-hidden group hover:px-4 transition-all duration-300"
    >
      {/* Subtle Slide-in Background */}
      <div className="absolute inset-0 bg-brand-100/10 -z-10 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" />
      
      {/* Title block */}
      <div className="flex items-center gap-6 md:w-1/3">
        <span className="font-serif italic text-brand-400 text-sm w-6">0{numeral}</span>
        <div>
          <h5 className="font-display font-medium text-lg md:text-xl text-brand-text group-hover:text-brand-800 transition-colors">
            {project.title}
          </h5>
          <span className="text-[9px] uppercase tracking-widest text-brand-500 font-bold block mt-1">
            {project.category}
          </span>
        </div>
      </div>

      {/* Role details */}
      <div className="flex flex-col justify-center md:w-2/5">
        <span className="text-xs text-brand-600 font-medium mb-1">{project.role}</span>
        <p className="text-xs text-brand-800 font-light line-clamp-1 max-w-md">
          {project.description}
        </p>
      </div>

      {/* Action and Tags */}
      <div className="flex items-center justify-between md:justify-end gap-6 md:w-1/4">
        <div className="hidden lg:flex flex-wrap gap-1.5 justify-end">
          {project.tags.map((tag: string, i: number) => (
            <span key={i} className="px-2 py-0.5 border border-brand-200/40 rounded text-[9px] text-brand-500 font-medium">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="w-8 h-8 rounded-full border border-brand-200 group-hover:border-brand-text group-hover:bg-brand-text group-hover:text-white flex items-center justify-center transition-all duration-300">
          <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform duration-300" />
        </div>
      </div>
    </motion.div>
  );
};

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  // Filter projects by selected category
  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  // Divide the filtered results into editorial compartments
  const featuredProject = filteredProjects[0];
  const secondaryProjects = filteredProjects.slice(1, 3);
  const archiveProjects = filteredProjects.slice(3);

  return (
    <section id="projects" className="py-28 md:py-36 relative overflow-hidden bg-brand-bg bg-grain">
      {/* Editorial Grid Linework */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.07]">
        <div className="h-full w-px bg-brand-900 absolute left-6 md:left-12 max-w-[1600px] mx-auto" />
        <div className="h-full w-px bg-brand-900 absolute right-6 md:left-12 max-w-[1600px] mx-auto" />
      </div>

      <div className="container mx-auto px-6 md:px-12 max-w-[1600px] relative z-10">
        
        {/* Section Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 md:mb-28">
          <div className="max-w-2xl">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-500 block mb-3">
              04 // Case Archives
            </span>
            <h2 className="font-display font-medium text-4xl md:text-6xl text-brand-text tracking-tight leading-none">
              A legacy of growth <br />
              <span className="font-serif italic text-brand-500 font-normal">and execution.</span>
            </h2>
          </div>
          <p className="text-base text-brand-800 font-light max-w-sm leading-relaxed">
            A curated record of zero-to-one product initiatives, growth engines, and data applications built to create commercial impact.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex border-b border-brand-200/50 pb-4 mb-16 overflow-x-auto scrollbar-none gap-8 md:gap-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="relative py-2.5 text-xs font-semibold uppercase tracking-widest text-brand-800 transition-colors duration-300 hover:text-brand-600"
            >
              <span className="relative z-10">{cat}</span>
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeCategoryUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-brand-text"
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Dynamic Editorial Layout Grid */}
        <div className="space-y-24 md:space-y-32">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
            >
              {filteredProjects.length === 0 ? (
                <div className="text-center text-brand-900/50 py-24 font-serif italic text-lg">
                  No cases archived in this segment.
                </div>
              ) : (
                <>
                  {/* Phase 1: Massive Featured Hero Project */}
                  {featuredProject && (
                    <FeaturedCard project={featuredProject} />
                  )}

                  {/* Phase 2: Secondary Projects Staggered Grid */}
                  {secondaryProjects.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 pt-20 border-t border-brand-200/40 mt-20 md:mt-28">
                      {secondaryProjects.map((p, idx) => (
                        <SecondaryCard key={p.title} project={p} index={idx} />
                      ))}
                    </div>
                  )}

                  {/* Phase 3: Technical Archive List */}
                  {archiveProjects.length > 0 && (
                    <div className="pt-24 mt-24 border-t border-brand-200/40">
                      <div className="flex items-center gap-4 mb-10">
                        <FolderOpen size={16} className="text-brand-500" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-brand-500">
                          Strategy Archive & Dashboards
                        </span>
                        <div className="h-[1px] flex-1 bg-brand-200/40" />
                      </div>
                      
                      <div className="flex flex-col">
                        {archiveProjects.map((p, idx) => (
                          <ArchiveRow key={p.title} project={p} index={idx} />
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
};

export default Projects;