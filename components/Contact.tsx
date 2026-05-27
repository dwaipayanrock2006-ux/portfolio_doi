import React, { useState } from 'react';
import { SOCIAL_LINKS, PERSONAL_INFO } from '../constants';
import { ArrowRight } from 'lucide-react';
import Reveal from './ui/Reveal';

const Contact: React.FC = () => {
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <section id="contact" className="py-24 md:py-32 bg-brand-bg relative overflow-hidden border-t border-brand-200/50">
      <div className="container mx-auto px-6 md:px-12 max-w-[1600px]">
        
        {/* Section Header */}
        <Reveal>
          <div className="flex items-center gap-4 mb-16 md:mb-24">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-500">
              05 // Contact
            </span>
            <div className="h-[1px] flex-1 bg-brand-200/50" />
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left: Typography & Info */}
          <div>
            <Reveal delay={100}>
              <h2 className="font-display text-5xl md:text-7xl font-bold text-brand-text tracking-tight leading-[1.1] mb-8">
                Let's Build <br />
                <span className="text-brand-500 italic font-light">Something.</span>
              </h2>
              <p className="text-lg md:text-xl text-brand-900/70 font-light max-w-md mb-16 leading-relaxed">
                Ready to deploy next-gen growth engines? My inbox is always open for strategic partnerships and opportunities.
              </p>
            </Reveal>

            <div className="space-y-12">
              <Reveal delay={200}>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-400 mb-4">Direct Contact</h3>
                  <a 
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="inline-block text-2xl md:text-3xl font-display font-medium text-brand-text hover:text-brand-500 transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </Reveal>

              <Reveal delay={300}>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-brand-400 mb-4">Socials</h3>
                  <div className="flex flex-wrap gap-6">
                    {SOCIAL_LINKS.map((link, i) => (
                      <a 
                        key={i} 
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-medium text-brand-text hover:text-brand-500 transition-colors"
                      >
                        {link.platform}
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Right: Minimal Form */}
          <div>
            <Reveal delay={400} direction="up">
              <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-brand-200/50 shadow-xl shadow-brand-900/5">
                <form className="space-y-8">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-400">Name</label>
                    <input 
                      type="text" 
                      onFocus={() => setFocused('name')}
                      onBlur={() => setFocused(null)}
                      className={`w-full bg-transparent border-b ${focused === 'name' ? 'border-brand-500' : 'border-brand-200'} py-3 text-brand-text placeholder:text-brand-300 focus:outline-none transition-colors rounded-none`}
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-400">Email</label>
                    <input 
                      type="email" 
                      onFocus={() => setFocused('email')}
                      onBlur={() => setFocused(null)}
                      className={`w-full bg-transparent border-b ${focused === 'email' ? 'border-brand-500' : 'border-brand-200'} py-3 text-brand-text placeholder:text-brand-300 focus:outline-none transition-colors rounded-none`}
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-brand-400">Message</label>
                    <textarea 
                      rows={4}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                      className={`w-full bg-transparent border-b ${focused === 'message' ? 'border-brand-500' : 'border-brand-200'} py-3 text-brand-text placeholder:text-brand-300 focus:outline-none transition-colors resize-none rounded-none`}
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button 
                    type="button"
                    className="group w-full flex items-center justify-center gap-4 py-5 bg-brand-text text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-brand-500 transition-colors"
                  >
                    <span>Send Message</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
