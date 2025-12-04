import React, { useState, useEffect } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const Navbar: React.FC = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none"
    >
      <div className="bg-brand-dark/90 backdrop-blur-md text-brand-sand px-8 py-3 rounded-full shadow-lg pointer-events-auto border border-brand-clay flex gap-8 items-center">
        <button onClick={() => scrollToSection('hero')} className="hover:text-brand-sage transition-colors font-medium">Home</button>
        <button onClick={() => scrollToSection('about')} className="hover:text-brand-sage transition-colors font-medium">About</button>
        <button onClick={() => scrollToSection('projects')} className="hover:text-brand-sage transition-colors font-medium">Projects</button>
        <button onClick={() => scrollToSection('contact')} className="bg-brand-sage text-brand-dark px-4 py-1 rounded-full font-bold hover:bg-brand-clay transition-colors">
          Contact
        </button>
      </div>
    </motion.nav>
  );
};

export default Navbar;