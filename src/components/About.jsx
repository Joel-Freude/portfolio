import { useState, useEffect } from 'react';

const About = ({ data }) => {
  const [skillAnimations, setSkillAnimations] = useState({});

  useEffect(() => {
    // Animate skills after component mounts
    setTimeout(() => {
      const animations = {};
      Object.keys(data.skills).forEach((category, index) => {
        setTimeout(() => {
          animations[category] = true;
          setSkillAnimations(prev => ({ ...prev, [category]: true }));
        }, index * 200);
      });
    }, 500);
  }, [data.skills]);

  const getSkillColor = (category) => {
    const colors = {
      frontend: 'from-blue-500 to-cyan-500',
      backend: 'from-green-500 to-emerald-500',
      mobile: 'from-purple-500 to-pink-500',
      other: 'from-orange-500 to-red-500'
    };
    return colors[category] || 'from-gray-500 to-gray-600';
  };

  const getCategoryIcon = (category) => {
    const icons = {
      frontend: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      backend: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
        </svg>
      ),
      mobile: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      other: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    };
    return icons[category];
  };

  return (
    <section className="min-h-screen py-20 bg-white overflow-y-auto">
      <div className="max-w-6xl mx-auto px-6">
        <div className="animate-in fade-in duration-1000">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              About Me
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Passionate about creating digital experiences and solving complex problems through innovative technology solutions.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Experience Section */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Experience & Expertise</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Web Design</h4>
                      <p className="text-gray-600">{data.experience.webDesign.years} years - {data.experience.webDesign.description}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Frontend Development</h4>
                      <p className="text-gray-600">{data.experience.frontendDevelopment.years} years - {data.experience.frontendDevelopment.description}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">IT Maintenance</h4>
                      <p className="text-gray-600">{data.experience.itMaintenance.description}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Personal Info */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Personal Details</h3>
                <div className="space-y-2 text-gray-600">
                  <p><span className="font-medium">Born:</span> {data.personal.birthDate}</p>
                  <p><span className="font-medium">Location:</span> {data.personal.location}</p>
                  <p><span className="font-medium">Email:</span> {data.personal.email}</p>
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Technical Skills</h3>
              
              {Object.entries(data.skills).map(([category, skills]) => (
                <div key={category} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className={`bg-gradient-to-r ${getSkillColor(category)} p-2 rounded-lg text-white mr-3`}>
                      {getCategoryIcon(category)}
                    </div>
                    <h4 className="text-lg font-semibold text-gray-800 capitalize">
                      {category.replace(/([A-Z])/g, ' $1').trim()}
                    </h4>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <span
                        key={skill}
                        className={`px-3 py-1 bg-gradient-to-r ${getSkillColor(category)} text-white rounded-full text-sm font-medium transform transition-all duration-500 ${
                          skillAnimations[category] 
                            ? 'opacity-100 translate-y-0 scale-100' 
                            : 'opacity-0 translate-y-4 scale-95'
                        }`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;