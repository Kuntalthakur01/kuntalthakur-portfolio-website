import React from 'react';
import { Github, Linkedin, Mail, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="relative min-h-screen flex items-start md:items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 pt-28 sm:pt-32 md:pt-0">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Minimal background, no heavy floating particles to improve FCP */}

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Profile image updated to square with slight zoom-in for a tight crop */}
        <div className="mb-8 relative">
          <div className="w-40 h-40 mx-auto rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 p-1">
            <div className="w-full h-full rounded-lg overflow-hidden bg-slate-900">
              <img
                src="/kuntalthakur-portfolio-website/profile.jpeg"
                alt="Kuntal Thakur Profile"
                width={160}
                height={160}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="w-full h-full object-cover scale-110"
              />
            </div>
          </div>
        </div>

        {/* Name visible immediately without entrance delay */}
        <h1 className="text-6xl md:text-8xl font-bold mb-2 text-white">
          Kuntal Thakur
        </h1>
        
        {/* Subtitle simplified for faster readability */}
        <p className="text-xl md:text-2xl text-cyan-400 mb-6">
          Data Scientist & ML Engineer
        </p>

        {/* Primary calls-to-action */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2.5 text-white font-medium border border-blue-700 hover:opacity-95 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-cyan-300 font-medium border border-blue-700 hover:bg-slate-800 transition"
          >
            Contact Me
          </a>
        </div>
        
        {/* Description appears immediately; trimmed spacing */}
        <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Graduate student at Arizona State University passionate about transforming data into insights 
          and building intelligent systems that solve real-world problems through machine learning, 
          GenAI, and data engineering.
        </p>

        {/* Social links: keep hover but no ongoing animations */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/Kuntalthakur01"
            className="social-icon group"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/kuntalthakur01official/"
            className="social-icon group"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:kthakur9@asu.edu"
            className="social-icon group"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
