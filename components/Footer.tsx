import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white pt-24 pb-12 relative overflow-hidden border-t border-brand-200/50">
      <div className="container mx-auto px-6 md:px-12 max-w-[1600px]">
        
        <div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24">
          
          <div className="space-y-4">
            <h4 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-brand-text">
              Dwaipayan Pal
            </h4>
            <p className="text-brand-900/60 font-light max-w-sm">
              Growth, Strategy & AI Product Specialist. <br />
              Based in Earth.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="group flex flex-col items-center gap-4 transition-all duration-500"
          >
            <div className="w-16 h-16 rounded-full border border-brand-200 flex items-center justify-center bg-brand-bg text-brand-text group-hover:bg-brand-text group-hover:text-white transition-all duration-500">
              <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform duration-500" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-400 group-hover:text-brand-text transition-colors">
              Back to Top
            </span>
          </button>
          
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-brand-200/50 text-sm font-medium text-brand-900/50">
          <p>
            © {new Date().getFullYear()} Dwaipayan Pal. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-brand-text transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-text transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
