import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BioPage from './components/BioPage';
import CustomCursor from './components/ui/CustomCursor';
import Preloader from './components/ui/Preloader';
import { ReactLenis } from 'lenis/react';
import { AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAboutInView, setIsAboutInView] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
      setIsScrolled(window.scrollY > 20);
    }
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      // Scroll to top on route change
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isBioPage = currentHash === '#/bio';

  return (
    <ReactLenis root>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      
      <div className="min-h-screen bg-brand-bg text-brand-text font-sans font-medium selection:bg-brand-500 selection:text-white antialiased">
        <CustomCursor />
        
        {isBioPage ? (
          <BioPage />
        ) : (
          <>
            <Navbar scrolled={isScrolled} />
            <main className="flex flex-col gap-24 md:gap-40 pb-32">
              <Hero scrolled={isScrolled} />
              <About onInViewChange={setIsAboutInView} />
              <Skills />
              <Experience />
              <Projects />
              <Contact />
            </main>
            <Footer />
          </>
        )}
      </div>
    </ReactLenis>
  );
};

export default App;