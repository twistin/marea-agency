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
    { imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop', title: 'E-commerce Innovador', category: 'Desarrollo Web' },
    { imageUrl: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070&auto=format&fit=crop', title: 'Campaña Redes Sociales', category: 'Marketing Digital' },
    { imageUrl: 'https://images.unsplash.com/photo-1583508915901-b5f84c1dcde1?q=80&w=1974&auto=format&fit=crop', title: 'Plataforma SaaS', category: 'Diseño UI/UX' },
    { imageUrl: 'https://images.unsplash.com/photo-1559028006-44d08a1d1e56?q=80&w=1974&auto=format&fit=crop', title: 'App Móvil Financiera', category: 'Desarrollo Web' },
    { imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop', title: 'Rediseño de Marca', category: 'Branding' },
    { imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop', title: 'Portal de Noticias', category: 'Optimización SEO' },
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
