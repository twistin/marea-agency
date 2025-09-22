
import React from 'react';

interface ProjectCardProps {
  imageUrl: string;
  title: string;
  category: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ imageUrl, title, category }) => (
  <div className="group relative overflow-hidden rounded-lg shadow-lg">
    <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-70 transition-all duration-300"></div>
    <div className="absolute inset-0 p-6 flex flex-col justify-end">
      <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
        <p className="text-cyan-400 text-sm font-semibold">{category}</p>
        <h3 className="text-white text-xl font-bold">{title}</h3>
      </div>
    </div>
  </div>
);

const Projects: React.FC = () => {
  const projectList = [
    { imageUrl: 'https://picsum.photos/seed/proj1/500/500', title: 'E-commerce Innovador', category: 'Desarrollo Web' },
    { imageUrl: 'https://picsum.photos/seed/proj2/500/500', title: 'Campaña Redes Sociales', category: 'Marketing Digital' },
    { imageUrl: 'https://picsum.photos/seed/proj3/500/500', title: 'Plataforma SaaS', category: 'Diseño UI/UX' },
    { imageUrl: 'https://picsum.photos/seed/proj4/500/500', title: 'App Móvil Financiera', category: 'Desarrollo Web' },
    { imageUrl: 'https://picsum.photos/seed/proj5/500/500', title: 'Rediseño de Marca', category: 'Branding' },
    { imageUrl: 'https://picsum.photos/seed/proj6/500/500', title: 'Portal de Noticias', category: 'Optimización SEO' },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-slate-800">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Proyectos Destacados</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Un vistazo a algunos de los trabajos que nos enorgullecen.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
