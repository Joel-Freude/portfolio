import { useState } from 'react';

const Projects = ({ data, setActiveSection }) => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const getProjectIcon = (type) => {
    if (type.includes('Web')) {
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      );
    } else if (type.includes('Mobile')) {
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      );
    }
    return (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    );
  };

  const getStatusColor = (status) => {
    return status === 'Completed' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800';
  };

  const getProjectGradient = (index) => {
    const gradients = [
      'from-blue-500 to-cyan-500',
      'from-purple-500 to-pink-500',
      'from-green-500 to-emerald-500'
    ];
    return gradients[index % gradients.length];
  };

  return (
    <section className="min-h-screen py-20 bg-gradient-to-br from-gray-50 to-blue-50 overflow-y-auto">
      <div className="max-w-6xl mx-auto px-6">
        <div className="animate-in fade-in duration-1000">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A showcase of my recent work in web development, mobile applications, and innovative digital solutions.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.projects.map((project, index) => (
              <div
                key={project.id}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:scale-105 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Header */}
                <div className={`bg-gradient-to-r ${getProjectGradient(index)} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                        {getProjectIcon(project.type)}
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                        {project.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm opacity-90">{project.type} • {project.year}</p>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-800 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 bg-gradient-to-r ${getProjectGradient(index)} text-white rounded-full text-xs font-medium`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Actions */}
                  <div className="flex space-x-3">
                    <button className={`flex-1 bg-gradient-to-r ${getProjectGradient(index)} text-white py-2 px-4 rounded-lg font-medium text-sm hover:shadow-lg transition-all duration-300 transform hover:scale-105`}>
                      View Details
                    </button>
                    {project.status === 'Completed' && (
                      <button className="px-4 py-2 border-2 border-gray-300 text-gray-600 rounded-lg font-medium text-sm hover:border-gray-400 transition-colors duration-300">
                        Live Demo
                      </button>
                    )}
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${getProjectGradient(index)} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-lg text-gray-600 mb-6">
              Interested in working together on your next project?
            </p>
            <button
              onClick={() => setActiveSection('contact')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Let's Collaborate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;