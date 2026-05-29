import React, { useState } from 'react';
import { SKILLS } from '../constants';
import Reveal from './ui/Reveal';
import { ArrowRight } from 'lucide-react';

const SkillBar: React.FC<{ name: string; level: number; delay: number; active: boolean }> = ({ name, level, delay, active }) => {
  return (
    <div className="group py-6 border-b border-white/10 last:border-0 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="flex justify-between items-end mb-3 relative z-10">
        <h4 className="text-lg font-bold text-white group-hover:text-brand-accent transition-colors duration-300">
          {name}
        </h4>
        <span className="text-xs font-black text-white/40 tabular-nums tracking-widest uppercase group-hover:text-white/70 transition-colors">
          Lvl. {level}%
        </span>
      </div>
      <div className="h-[2px] w-full bg-white/5 overflow-hidden relative z-10">
        <div 
          className="absolute top-0 left-0 h-full bg-brand-accent transition-all duration-[1500ms] ease-premium shadow-[0_0_10px_rgba(200,224,74,0.5)]"
          style={{ 
            width: active ? `${level}%` : '0%',
            transitionDelay: `${delay}ms`
          }}
        />
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="py-32 bg-brand-bg overflow-hidden text-brand-text">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Section Logic & Nav */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="text-brand-accent font-black text-[10px] uppercase tracking-[0.3em] mb-4">
                Core Competencies
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-12 leading-none">
                Skill <br/> 
                <span className="text-white/20">Architecture.</span>
              </h2>
            </Reveal>

            <div className="flex flex-col gap-2">
              {SKILLS.map((cat, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`group flex items-center justify-between text-left py-4 px-6 rounded-2xl transition-all duration-500 ease-premium ${
                    activeTab === i 
                      ? 'bg-white/10 text-white shadow-2xl translate-x-2 border border-white/5' 
                      : 'text-white/40 hover:text-white hover:bg-white/5 hover:translate-x-1 border border-transparent'
                  }`}
                >
                  <span className={`text-xl font-bold tracking-tight ${activeTab === i ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'}`}>
                    {cat.title}
                  </span>
                  <ArrowRight 
                    size={20} 
                    className={`transition-all duration-500 ${activeTab === i ? 'opacity-100 translate-x-0 text-brand-accent' : 'opacity-0 -translate-x-4'}`} 
                  />
                </button>
              ))}
            </div>

            <Reveal delay={400}>
              <div className="mt-16 p-8 rounded-[2rem] bg-[#0d0d0d] border border-white/10 group hover:border-brand-accent/30 transition-colors duration-500">
                <p className="text-white/70 font-medium leading-relaxed italic group-hover:text-white/90 transition-colors">
                  "Blending the analytical rigor of business intelligence with the rapid execution of modern AI products."
                </p>
              </div>
            </Reveal>
          </div>

          {/* Skill List Display */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="relative min-h-[400px]">
              {SKILLS.map((category, catIndex) => (
                <div 
                  key={category.title}
                  className={`transition-all duration-700 ease-premium ${
                    activeTab === catIndex 
                      ? 'opacity-100 translate-y-0 relative z-10' 
                      : 'opacity-0 translate-y-8 absolute inset-0 pointer-events-none'
                  }`}
                >
                  <div className="space-y-2">
                    {category.skills.map((skill, index) => (
                      <SkillBar 
                        key={skill.name} 
                        name={skill.name} 
                        level={skill.level} 
                        delay={index * 100}
                        active={activeTab === catIndex}
                      />
                    ))}
                  </div>
                  
                  {/* Category Summary */}
                  <div className="mt-12 pt-8 border-t border-white/10">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center text-brand-accent">
                        <category.icon size={24} />
                      </div>
                      <div>
                        <div className="text-[10px] font-black text-white/40 uppercase tracking-widest">Focus_Area</div>
                        <div className="text-sm font-bold text-white">{category.title} Specialist</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
