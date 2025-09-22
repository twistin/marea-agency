import React, { useState, useEffect } from 'react';
import MenuIcon from './icons/MenuIcon';
import XIcon from './icons/XIcon';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, onClick }) => (
  <li>
    <a
      href={href}
      onClick={onClick}
      className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 text-base font-medium"
    >
      {children}
    </a>
  </li>
);

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'Quiénes Somos' },
    { href: '#services', label: 'Servicios' },
    { href: '#projects', label: 'Proyectos' },
    { href: '#contact', label: 'Contáctanos' },
  ];
  
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-900/80 backdrop-blur-lg shadow-lg border-b border-slate-700/50' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="text-2xl font-bold text-white">
            Marea<span className="text-cyan-400">.</span>Agency
          </a>

          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <NavLink key={link.href} href={link.href} onClick={closeMenu}>
                  {link.label}
                </NavLink>
              ))}
            </ul>
          </nav>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
              {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`absolute top-20 left-0 w-full bg-slate-900/95 backdrop-blur-lg md:hidden transition-transform duration-300 ease-in-out border-b border-slate-700/50 ${isMenuOpen ? 'transform translate-y-0' : 'transform -translate-y-[150%]'}`}>
        <nav>
          <ul className="flex flex-col items-center space-y-6 py-8">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href} onClick={closeMenu}>
                {link.label}
              </NavLink>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;