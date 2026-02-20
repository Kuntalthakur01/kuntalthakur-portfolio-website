import React from 'react';
import Header from './components/Header';
import News from './components/News';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 scroll-smooth" id="home">
      <Navbar />
      <Header />
      <News />
      <div id="skills"><Skills /></div>
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
