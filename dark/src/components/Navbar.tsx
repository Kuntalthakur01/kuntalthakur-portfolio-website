import React from 'react';
import { Github, Linkedin, Mail, GraduationCap } from 'lucide-react';

const navItems = [
  { href: '#home', label: 'Home' },
  { href: '#news', label: 'News' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#resume', label: 'Resume' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mt-4 rounded-2xl border border-blue-700 bg-slate-900/70 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="flex items-center space-x-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold">KT</span>
              <span className="text-white font-semibold hidden sm:inline">Kuntal Thakur</span>
            </a>

            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-3">
              <a
                href="https://github.com/Kuntalthakur01"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-blue-700 text-gray-200 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/kuntalthakur01official/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-blue-700 text-gray-200 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://scholar.google.com/citations?user=1stCgih3uB4C&hl=en"
                aria-label="Google Scholar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-blue-700 text-gray-200 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <GraduationCap className="h-4 w-4" />
              </a>
              <a
                href="mailto:kthakur9@asu.edu"
                aria-label="Email"
                className="p-2 rounded-lg border border-blue-700 text-gray-200 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="md:hidden border-t border-blue-800/50 px-4 py-2">
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-gray-300 hover:text-white py-2"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
