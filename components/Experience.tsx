import React from 'react';
import { EXPERIENCE } from '../constants';
import Reveal from './ui/Reveal';
import { ArrowRight } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-brand-bg text-brand-text">
      <div className="container mx-auto px-6 md:px-12 max-w-[1600px]">
        
        {/* Section Header */}
        <Reveal>
          <div className="flex items-center gap-4 mb-16 md:mb-24">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-accent">
              03 // Experience
            </span>
            <div className="h-[1px] flex-1 bg-white/10" />
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* Header Typography */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <Reveal delay={100}>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                Strategic <br />
                <span className="text-brand-accent italic font-light">Executions.</span>
              </h2>
              <p className="text-lg text-white/50 font-light max-w-sm">
                Operating at the intersection of exponential growth and high-fidelity product strategy.
              </p>
            </Reveal>
          </div>

          {/* Timeline */}
          <div className="lg:col-span-8 space-y-16 lg:space-y-24">
            {EXPERIENCE.map((job, index) => (
              <Reveal key={index} delay={index * 150} direction="up">
                <div className="group relative">
                  {/* Title & Duration */}
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-4 gap-2">
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-white group-hover:text-brand-accent transition-colors">
                      {job.role}
                    </h3>
                    <div className="text-xs font-bold uppercase tracking-[0.2em] text-brand-accent/70">
                      {job.duration}
                    </div>
                  </div>

                  {/* Company */}
                  <div className="text-lg font-medium text-white mb-6">
                    <span className="text-white/30 mr-2">at</span>
                    {job.company}
                  </div>

                  {/* Description */}
                  <p className="text-white/60 leading-relaxed max-w-2xl font-light mb-8">
                    {job.description}
                  </p>

                  {/* Achievements */}
                  <ul className="space-y-4 max-w-2xl">
                    {job.achievements.map((item, i) => (
                      <li key={i} className="flex items-start gap-4 text-white/70">
                        <ArrowRight size={18} className="mt-1 text-brand-accent flex-shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Divider */}
                  <div className="h-[1px] w-full bg-white/10 mt-16 lg:mt-24" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
