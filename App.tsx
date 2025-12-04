import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-sand min-h-screen selection:bg-brand-sage selection:text-brand-dark">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default App;