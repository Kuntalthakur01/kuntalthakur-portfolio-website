import React from 'react';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-20 border-t border-blue-700/50 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="text-white font-semibold mb-3">About</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Data Scientist & ML Engineer focused on building reliable, scalable, and user-centered AI solutions.
          </p>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Links</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li><a className="hover:text-white" href="#skills">Skills</a></li>
            <li><a className="hover:text-white" href="#projects">Projects</a></li>
            <li><a className="hover:text-white" href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <ul className="text-gray-400 text-sm space-y-2">
            <li><a className="hover:text-white" href="mailto:kthakur9@asu.edu">kthakur9@asu.edu</a></li>
            <li>Tempe, AZ, US</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-blue-700/50">
        <div className="max-w-6xl mx-auto px-6 py-4 text-gray-500 text-xs">
          © {year} Kuntal Thakur. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
