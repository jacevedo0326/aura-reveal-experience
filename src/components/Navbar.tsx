import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import logo from "@/assets/logo.png";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Aura', path: '/', isLogo: true },
    { name: 'Our Story', path: '/our-story' },
    // { name: 'Insights', path: '/insights' }, // Hidden - not ready yet
    { name: 'Reveal', path: '/reveal' },
  ];

  return (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-card backdrop-blur-md border-b border-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink 
              to="/" 
              className="flex items-center h-10"
            >
              <img src={logo} alt="AuraAero Logo" className="h-8 w-auto" />
            </NavLink>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.slice(1).map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                      isActive
                        ? 'text-primary'
                        : 'text-white hover:text-primary'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <NavLink
                to="/use-cases"
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? 'text-primary'
                      : 'text-white hover:text-primary'
                  }`
                }
              >
                Use Cases
              </NavLink>
              <NavLink
                to="/tech-specs"
                className={({ isActive }) =>
                  `px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? 'text-primary'
                      : 'text-white hover:text-primary'
                  }`
                }
              >
                Tech Specs
              </NavLink>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-primary transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.slice(1).map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2 text-base font-medium transition-colors duration-300 ${
                    isActive
                      ? 'text-primary'
                      : 'text-white hover:text-primary'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <NavLink
              to="/use-cases"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 text-base font-medium transition-colors duration-300 ${
                  isActive
                    ? 'text-primary'
                    : 'text-white hover:text-primary'
                }`
              }
            >
              Use Cases
            </NavLink>
            <NavLink
              to="/tech-specs"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 text-base font-medium transition-colors duration-300 ${
                  isActive
                    ? 'text-primary'
                    : 'text-white hover:text-primary'
                }`
              }
            >
              Tech Specs
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;