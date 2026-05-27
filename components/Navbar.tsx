import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { NAV_ITEMS, PERSONAL_INFO, SOCIAL_LINKS } from '../constants';

const Navbar: React.FC<{ scrolled: boolean }> = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 py-6 px-6 md:px-12 transition-all duration-500 ease-premium pointer-events-none">
      <div className="max-w-[1600px] mx-auto w-full flex justify-between items-center relative pointer-events-auto">
        
        {/* Left: Name / Brand */}
        <div className="flex-1 flex items-center h-[30px]">
          {scrolled && (
            <a href="#" className="flex items-center gap-1 text-sm font-semibold tracking-wide text-brand-400 hover:opacity-70 transition-opacity">
              <motion.span layoutId="brand-first" transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}>Dwaipayan</motion.span>
              <span className="text-brand-accent mx-0.5">•</span>
              <motion.span layoutId="brand-last" transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}>Pal</motion.span>
            </a>
          )}
        </div>

        {/* Center: Floating Pill Navigation (Desktop) */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center bg-white/70 backdrop-blur-xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-full px-2 py-1.5 gap-1">
          <a href="#about" className="px-5 py-2 text-xs font-semibold uppercase tracking-widest text-brand-text hover:bg-brand-100 rounded-full transition-all duration-300">
            About
          </a>
          <a href="#" className="w-10 h-10 bg-brand-text text-white rounded-full flex items-center justify-center font-display font-bold text-lg mx-1 hover:scale-105 transition-transform duration-300 shadow-md">
            DP
          </a>
          <a href="#projects" className="px-5 py-2 text-xs font-semibold uppercase tracking-widest text-brand-text hover:bg-brand-100 rounded-full transition-all duration-300">
            Work
          </a>
        </div>

        {/* Right: Social Links (Desktop) */}
        <div className="hidden md:flex flex-1 justify-end items-center gap-6">
          {SOCIAL_LINKS.map((link) => (
            <a 
              key={link.platform} 
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-bold uppercase tracking-widest text-brand-text hover:text-brand-accent transition-colors"
            >
              {link.platform === 'Twitter (X)' ? 'X' : link.platform === 'LinkedIn' ? 'IN' : link.platform === 'GitHub' ? 'GH' : 'Email'}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-brand-text p-2 rounded-full bg-white/80 backdrop-blur-md shadow-sm border border-white/50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-full left-4 right-4 mt-2 bg-white/95 backdrop-blur-xl border border-brand-100 rounded-2xl shadow-2xl transition-all duration-500 ease-premium transform pointer-events-auto ${isOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'}`}>
        <div className="py-6 px-6 flex flex-col items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-lg font-display font-semibold text-brand-text hover:text-brand-accent transition-all duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="flex gap-4 pt-4 border-t border-brand-100 w-full justify-center">
            {SOCIAL_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <a key={link.platform} href={link.url} target="_blank" rel="noopener noreferrer" className="text-brand-text hover:text-brand-accent transition-colors">
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;