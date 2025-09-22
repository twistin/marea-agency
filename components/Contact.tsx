
import React from 'react';
import MailIcon from './icons/MailIcon';
import PhoneIcon from './icons/PhoneIcon';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-slate-900">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contáctanos</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          ¿Listo para empezar tu próximo proyecto? Estamos aquí para ayudarte a hacerlo realidad.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
          <a href="mailto:hola@marea.agency" className="flex items-center space-x-3 text-lg text-gray-300 hover:text-cyan-400 transition-colors">
            <MailIcon className="w-8 h-8 text-cyan-400" />
            <span>hola@marea.agency</span>
          </a>
          <a href="tel:+521234567890" className="flex items-center space-x-3 text-lg text-gray-300 hover:text-cyan-400 transition-colors">
            <PhoneIcon className="w-8 h-8 text-cyan-400" />
            <span>+52 123 456 7890</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
