import React from 'react';
import { Target, Zap } from 'lucide-react';
import Reveal from './ui/Reveal';
import { PERSONAL_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 max-w-[1600px]">
        
        {/* Section Header */}
        <Reveal>
          <div className="flex items-center gap-4 mb-16 md:mb-24">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-500">
              01 // About
            </span>
            <div className="h-[1px] flex-1 bg-brand-200/50" />
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left: Typography */}
          <div className="lg:col-span-7 space-y-12">
            <Reveal delay={100}>
              <h2 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-brand-text tracking-tight leading-[1.1]">
                Growth Head <br />
                <span className="text-brand-500 italic font-light">& Strategist.</span>
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <div className="space-y-8 max-w-2xl text-lg md:text-xl text-brand-900/80 font-light leading-relaxed">
                <p>
                  I operate at the high-stakes intersection of <span className="font-medium text-brand-text">data science</span> and <span className="font-medium text-brand-text">market growth</span>. 
                </p>
                <p>
                  As the Growth Head Intern at Myndra AI and Co-Founder of Porobangla AI, my mission is to architect digital products that don't just exist, but dominate their vertical.
                </p>
              </div>
            </Reveal>

            {/* Mindset Cards */}
            <div className="grid sm:grid-cols-2 gap-8 pt-8">
              <Reveal delay={300}>
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full border border-brand-200 flex items-center justify-center text-brand-500">
                    <Target size={20} />
                  </div>
                  <h4 className="font-display text-xl font-bold text-brand-text">The Strategy</h4>
                  <p className="text-sm text-brand-900/70 leading-relaxed italic">
                    "I don't play the odds, I play the man." — Harvey Specter Mindset.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={400}>
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full border border-brand-200 flex items-center justify-center text-brand-500">
                    <Zap size={20} />
                  </div>
                  <h4 className="font-display text-xl font-bold text-brand-text">The Execution</h4>
                  <p className="text-sm text-brand-900/70 leading-relaxed">
                    Fast-paced iteration from Zero-to-One. Turning technical complexity into market-ready value.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Right: Image */}
          <div className="lg:col-span-5">
            <Reveal delay={200} direction="up">
              <div className="aspect-[3/4] w-full max-w-md mx-auto overflow-hidden rounded-[2rem] bg-brand-100">
                <img 
                  src={PERSONAL_INFO.profileImage} 
                  alt={PERSONAL_INFO.name} 
                  className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 ease-out hover:scale-105"
                />
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
