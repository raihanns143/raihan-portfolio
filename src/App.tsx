import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BrandModal } from './components/BrandModal';

export default function App() {
  const [isBrandModalOpen, setIsBrandModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#08090C] text-zinc-100 flex flex-col relative tech-grid-pattern selection:bg-red-950 selection:text-red-200">
      {/* 1. Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        {/* 2. Hero */}
        <Hero />

        {/* 3. About */}
        <About />

        {/* 4. Selected Projects */}
        <Projects />

        {/* 5. Technical Skills */}
        <Skills />

        {/* 6. Education */}
        <Education />

        {/* 7. Contact */}
        <Contact />
      </main>

      {/* 8. Footer */}
      <Footer onOpenBrandModal={() => setIsBrandModalOpen(true)} />

      {/* Brand Identity & AR Logo System Modal */}
      <BrandModal
        isOpen={isBrandModalOpen}
        onClose={() => setIsBrandModalOpen(false)}
      />
    </div>
  );
}
