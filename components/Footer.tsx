import React from 'react';
import LinkedInIcon from './icons/LinkedInIcon';
import InstagramIcon from './icons/InstagramIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-800 border-t border-slate-700 py-8">
      <div className="container mx-auto px-6 lg:px-8 text-center text-gray-400">
        <div className="flex justify-center items-center space-x-6 mb-6">
          <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-cyan-400 transition-colors">
            <LinkedInIcon className="w-6 h-6" />
          </a>
          <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-cyan-400 transition-colors">
            <InstagramIcon className="w-6 h-6" />
          </a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Marea Agency. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
