import { useState, useEffect } from 'react';

const Hero = ({ data, setActiveSection }) => {
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const titleInterval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % data.personal.titles.length);
    }, 3000);

    return () => clearInterval(titleInterval);
  }, [data.personal.titles.length]);

  const goToNext = () => {
    setActiveSection('about');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-in fade-in duration-1000">
        <div className="space-y-8">
          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-pulse">
            {data.personal.name}
          </h1>

          {/* Animated titles */}
          <div className="h-16 flex items-center justify-center">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 transition-all duration-500">
              <span className="inline-block animate-bounce">
                {data.personal.titles[currentTitle]}
              </span>
            </h2>
          </div>

          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {data.personal.bio}
          </p>

          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-lg px-6 py-3 shadow-lg">
              <div className="text-2xl font-bold text-blue-600">{data.experience.webDesign.years}</div>
              <div className="text-sm text-gray-600">Years Web Design</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-lg px-6 py-3 shadow-lg">
              <div className="text-2xl font-bold text-purple-600">{data.experience.frontendDevelopment.years}</div>
              <div className="text-sm text-gray-600">Years Frontend Dev</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-lg px-6 py-3 shadow-lg">
              <div className="text-2xl font-bold text-green-600">{data.projects.length}</div>
              <div className="text-sm text-gray-600">Major Projects</div>
            </div>
          </div>

          <div className="mt-12">
            <button
              onClick={goToNext}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Visit My Portfolio
              <svg className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;