"use client";
import React from 'react';

interface NavLink {
  href: string;
  label: string;
  number: string;
}

const navLinks: NavLink[] = [
  { href: "#skills", label: "Skills", number: "001" },
  { href: "#projects", label: "Projects", number: "002" },
];

const Navbar = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      
      // Update URL without causing a page reload
      window.history.pushState({}, '', href);
    }
  };

  return (
    <nav className="hidden lg:flex w-full px-8 py-3 bg-slate-900 relative">
      <div className="max-w-7xl ml-auto relative">
        <div className="flex items-center justify-end space-x-12">
          <div className="flex items-center space-x-12">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="group relative text-purple-300 hover:text-purple-200 transition-colors cursor-pointer"
              >
                <span className="relative z-10 font-mono text-xl tracking-wider">
                  {link.number} / {link.label}
                </span>
                <div className="absolute -bottom-2 left-0 w-full h-px bg-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </a>
            ))}
          </div>

          <div className="h-8 w-px bg-gradient-to-b from-purple-400/0 via-purple-400/30 to-purple-400/0"></div>
          <div className="relative group">
            <a
              href="https://drive.google.com/file/d/1JEJZkZ_ZN2DLFoDtSJNSxEp0xv8cuMrT/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 px-6 py-2 font-mono text-sm text-purple-300 tracking-wider 
                border border-purple-500/30 rounded-full overflow-hidden transition-colors
                hover:text-purple-200 hover:border-purple-500/50"
            >
              <span className="relative z-10">CV</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;