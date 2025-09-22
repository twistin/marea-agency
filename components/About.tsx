
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-slate-800">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Somos la <span className="text-cyan-400">corriente</span> que impulsa tu éxito
            </h2>
            <div className="w-24 h-1 bg-cyan-400 mb-6"></div>
            <p className="text-gray-300 mb-4">
              En Marea Agency, somos más que una agencia digital; somos tus socios estratégicos en el vasto océano del mercado online. Nacimos de la pasión por la tecnología y la creatividad, con la misión de ayudar a las marcas a navegar y prosperar en el entorno digital.
            </p>
            <p className="text-gray-300">
              Nuestro equipo está formado por expertos en diseño, desarrollo, marketing y estrategia, todos unidos por un objetivo común: generar resultados tangibles y un crecimiento sostenible para nuestros clientes.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <img 
              src="https://picsum.photos/seed/agency/600/500" 
              alt="Equipo de Marea Agency colaborando" 
              className="rounded-lg shadow-2xl w-full h-auto object-cover" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
