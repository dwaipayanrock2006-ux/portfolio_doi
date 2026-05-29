import React from 'react';
import { 
  Instagram, 
  Linkedin, 
  Youtube, 
  ArrowUpRight, 
  CloudSun
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0a] rounded-t-[2.5rem] md:rounded-t-[4rem] pt-16 px-8 md:px-16 pb-0 flex flex-col relative shadow-sm overflow-hidden font-sans selection:bg-[#ff4242] selection:text-white">
      
      {/* CSS Keyframes for ambient background animations */}
      <style>
        {`
          @keyframes float1 {
            0%, 100% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(8%, -10%) scale(1.1); }
            66% { transform: translate(-5%, 8%) scale(0.9); }
          }
          @keyframes float2 {
            0%, 100% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(-10%, 8%) scale(1.2); }
            66% { transform: translate(8%, -5%) scale(0.85); }
          }
          @keyframes float3 {
            0%, 100% { transform: translate(0px, 0px) scale(1); }
            50% { transform: translate(12%, 12%) scale(1.15); }
          }
        `}
      </style>

      {/* Animated Background Gradients - Lime Green Mesh Style */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-t-[2.5rem] md:rounded-t-[4rem] z-0">
        {/* Deep Forest Green top-right base */}
        <div 
          className="absolute -top-[20%] right-[0%] w-[80%] h-[70%] rounded-full opacity-[0.35] blur-[130px] bg-[#1a330e]"
          style={{ animation: 'float1 22s infinite ease-in-out' }}
        />
        
        {/* Bright Lime Green (#c8e04a) bottom-left glow */}
        <div 
          className="absolute -bottom-[20%] -left-[10%] w-[70%] h-[80%] rounded-full opacity-[0.3] blur-[140px] bg-[#c8e04a]"
          style={{ animation: 'float2 26s infinite ease-in-out' }}
        />
        
        {/* Soft Pale Lime center transition */}
        <div 
          className="absolute top-[10%] left-[10%] w-[70%] h-[60%] rounded-full opacity-[0.12] blur-[120px] bg-[#eefc9f] mix-blend-screen"
          style={{ animation: 'float3 30s infinite ease-in-out' }}
        />
        
        {/* Medium Olive Green fill at the bottom right */}
        <div 
          className="absolute -bottom-[20%] right-[10%] w-[60%] h-[60%] rounded-full opacity-[0.2] blur-[130px] bg-[#4d6b2c]" 
        />
      </div>

      {/* Top Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 relative z-10">
        
        {/* Column 1: Bio */}
          <div className="lg:col-span-4">
            <h2 className="text-[22px] md:text-[26px] leading-[1.1] font-medium tracking-tight text-white max-w-[300px]">
              Dwaipayan is a Founder, Product and Growth Strategist
            </h2>
          </div>

          {/* Column 2: Explore Links */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h3 className="text-[13px] font-medium text-white mb-1">Explore</h3>
            <a href="#/bio" className="text-[13px] text-[#888] hover:text-white transition-colors">Bio</a>
            <a href="#" className="text-[13px] text-[#888] hover:text-white transition-colors">Insights</a>
            <a href="#" className="text-[13px] text-[#888] hover:text-white transition-colors">Newsletter</a>
            <a href="#" className="text-[13px] text-[#888] hover:text-white transition-colors">Contact</a>
          </div>

          {/* Column 3: Social Links */}
          <div className="lg:col-span-3">
            <h3 className="text-[13px] font-medium text-white mb-4">Follow me</h3>
            <div className="grid grid-cols-2 gap-y-4 gap-x-2">
              {/* Custom X (Twitter) Icon */}
              <a href="https://x.com/DwaipayanBiz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group">
                <svg viewBox="0 0 24 24" className="w-[14px] h-[14px] fill-[#888] group-hover:fill-white group-hover:scale-110 transition-all">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 22.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.007 3.966H5.078z" />
                </svg>
                <span className="text-[11px] font-medium text-[#888] group-hover:text-white transition-colors">@dwaipayanpal</span>
              </a>
              
              {/* Instagram */}
              <a href="#" className="flex items-center gap-2 group">
                <Instagram size={14} className="text-[#E1306C] group-hover:scale-110 transition-transform" />
                <span className="text-[11px] font-medium text-[#888] group-hover:text-white transition-colors">@dwaipayanpal</span>
              </a>

              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/dwaipayan-pal/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group">
                <Linkedin size={14} className="text-[#0A66C2] fill-[#0A66C2] group-hover:scale-110 transition-transform" />
                <span className="text-[11px] font-medium text-[#888] group-hover:text-white transition-colors">@dwaipayanpal</span>
              </a>

              {/* YouTube */}
              <a href="#" className="flex items-center gap-2 group">
                <Youtube size={14} className="text-[#FF0000] fill-[#FF0000] group-hover:scale-110 transition-transform" />
                <span className="text-[11px] font-medium text-[#888] group-hover:text-white transition-colors">@dwaipayanpal</span>
              </a>
            </div>
          </div>

          {/* Column 4: CTAs */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            <a href="#" className="flex flex-col group cursor-pointer">
            <div className="flex items-center gap-2">
              <span className="text-[17px] font-medium text-white">Growth Frameworks</span>
              <div className="bg-white text-black p-[3px] rounded-full group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight size={14} strokeWidth={2.5} />
              </div>
            </div>
            <span className="text-[12px] text-[#888] mt-0.5">Finance & strategy tools</span>
          </a>
        </div>
        
      </div>

      {/* Status Bar (Moved above the massive text) */}
      <div className="flex flex-col sm:flex-row justify-between items-center text-[10px] sm:text-[11px] text-[#888] font-medium relative z-10 pt-4 mt-12 md:mt-16 w-full">
        <div className="mb-2 sm:mb-0">
          Dwaipayan ©2026 <span className="mx-2">·</span> Privacy Policy
        </div>
        <div className="flex items-center gap-3">
          <span>Gobardanga</span>
          <span>4:44 PM</span>
          <div className="flex items-center gap-1">
            <span>28°C</span>
            <CloudSun size={14} strokeWidth={2} />
          </div>
        </div>
      </div>

      {/* Massive Typographic Element */}
      {/* We use an overflow-hidden wrapper and translateY to mimic the "cut-off" flat bottom effect of the text from your reference */}
      <div className="w-full overflow-hidden flex justify-center items-end mt-6 md:mt-8 h-[10vw] min-h-[50px] pointer-events-none select-none relative z-10">
        <h1 
          className="font-black text-white tracking-[-0.07em] whitespace-nowrap"
          style={{ 
            fontSize: 'min(15.5vw, 250px)',
            lineHeight: '0.7',
            transform: 'translateY(18%)' // Pushes the text down to slice the bottom roundings off
          }}
        >
          dwaipayan
        </h1>
        
        {/* Depth / Blur Fade Effect at the bottom */}
        <div 
          className="absolute bottom-0 left-0 w-full h-[45%] z-20 pointer-events-none"
          style={{
            /* Removed the dark background gradient entirely so the mesh colors shine through */
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            maskImage: 'linear-gradient(to top, black 0%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 100%)'
          }}
        />
      </div>
    </footer>
  );
}
