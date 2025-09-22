
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden -mt-20 pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-900 opacity-80 z-10"></div>
      <div 
        className="absolute inset-0 z-0 opacity-10" 
        style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'40\' height=\'40\' viewBox=\'0 0 40 40\'%3E%3Cg fill-rule=\'evenodd\'%3E%3Cg fill=\'%239C92AC\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}>
      </div>
      <div className="relative z-20 px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight mb-4">
          <span className="text-glow">Marea Agency</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Impulsamos tu marca al siguiente nivel con soluciones digitales innovadoras y creativas.
        </p>
        <a 
          href="#contact" 
          className="inline-block bg-cyan-500 text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-cyan-600 transition-transform transform hover:scale-105 duration-300 shadow-lg shadow-cyan-500/30"
        >
          Hablemos de tu Proyecto
        </a>
      </div>
    </section>
  );
};

export default Hero;
