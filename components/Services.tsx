import React from 'react';
import CodeIcon from './icons/CodeIcon';
import MegaphoneIcon from './icons/MegaphoneIcon';
import TrendingUpIcon from './icons/TrendingUpIcon';
import PenToolIcon from './icons/PenToolIcon';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="bg-slate-800/40 backdrop-blur-lg p-8 rounded-lg shadow-lg hover:shadow-[#00A7C0]/20 hover:-translate-y-2 transition-all duration-300 border border-slate-700/50">
    <div className="text-[#00A7C0] mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const Services: React.FC = () => {
  const servicesList = [
    {
      icon: <CodeIcon className="w-12 h-12" />,
      title: 'Desarrollo Web a Medida',
      description: 'Creamos sitios web y aplicaciones web rápidas, seguras y escalables que reflejan la identidad de tu marca.',
    },
    {
      icon: <MegaphoneIcon className="w-12 h-12" />,
      title: 'Marketing Digital',
      description: 'Diseñamos y ejecutamos campañas de marketing integrales para aumentar tu visibilidad y conversiones.',
    },
    {
      icon: <TrendingUpIcon className="w-12 h-12" />,
      title: 'Optimización SEO',
      description: 'Mejoramos tu posicionamiento en motores de búsqueda para atraer tráfico orgánico de alta calidad.',
    },
    {
      icon: <PenToolIcon className="w-12 h-12" />,
      title: 'Branding y Diseño UI/UX',
      description: 'Construimos identidades de marca memorables y diseñamos interfaces intuitivas centradas en el usuario.',
    },
  ];

  return (
    <section id="services" className="py-20 md:py-32 bg-slate-900">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Nuestros Servicios</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Ofrecemos un conjunto completo de servicios para cubrir todas tus necesidades digitales.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;