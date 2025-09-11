import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import data from '../public/data/portfolio.json';

function App() {
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const loadPortfolioData = async () => {
      try {
        const response = await fetch('/data/portfolio.json');
        const data = await response.json();
        setPortfolioData(data);
      } catch (error) {
        console.error('Error loading portfolio data:', error);
        setPortfolioData({
          personal: data.personal,
          experience: data.experience,
          skills: {
            frontend: data.skills.frontend,
            backend: data.skills.backend,
            mobile: data.skills.mobile,
            IT: data.skills.IT,
            Design: data.skills.Design,
          },
          projects: [
            {
              id: data.projects[0].id,
              title: data.projects[0].title,
              description: data.projects[0].description,
              technologies: data.projects[0].technologies,
              year: data.projects[0].year,
              type: data.projects[0].type,
              status: "Completed"
            },
            {
              id: 2,
              title: data.projects[1].title,
              description: data.projects[1].description,
              technologies: data.projects[1].technologies,
              year: data.projects[1].year,
              type: data.projects[1].type,
              status: "Completed"
            },
            {
              id: 3,
              title: data.projects[2].title,
              description: data.projects[2].description,
              technologies: data.projects[2].technologies,
              year: data.projects[2].year,
              type: data.projects[2].type,
              status: "In Progress"
            }
          ],
          certificates: [
            {
              id: 1,
              title: data.certificates[0].title,
              issuer: data.certificates[0].issuer,
              description: data.certificates[0].description,
              year: data.certificates[0].year
            },
            {
              id: 2,
              title: data.certificates[1].title,
              issuer: data.certificates[1].issuer,
              description: data.certificates[1].description,
              year: data.certificates[1].year
            },
            {
              id: 3,
              title: data.certificates[2].title,
              issuer: data.certificates[2].issuer,
              description: data.certificates[2].description,
              year: data.certificates[2].year
            }
          ]
        });
      } finally {
        setLoading(false);
      }
    };

    loadPortfolioData();
  }, []);

  const handleSectionChange = (newSection) => {
    if (newSection === activeSection || isTransitioning) return;
    
    setIsTransitioning(true);
    
    // Fade out current section
    setTimeout(() => {
      setActiveSection(newSection);
      // Fade in new section
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 300);
  };

  // Render current section
  const renderCurrentSection = () => {
    switch (activeSection) {
      case 'hero':
        return <Hero data={portfolioData} setActiveSection={handleSectionChange} />;
      case 'about':
        return <About data={portfolioData} />;
      case 'projects':
        return <Projects data={portfolioData} setActiveSection={handleSectionChange} />;
      case 'certificates':
        return <Certificates data={portfolioData} />;
      case 'contact':
        return <Contact data={portfolioData} />;
      default:
        return <Hero data={portfolioData} setActiveSection={handleSectionChange} />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  if (!portfolioData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-pink-50">
        <div className="text-center">
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Error Loading Portfolio</h1>
          <p className="text-gray-600">Please refresh the page to try again.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Navigation */}
      <Navigation 
        activeSection={activeSection} 
        setActiveSection={handleSectionChange} 
      />
      
      {/* Main Content with Fade Transition */}
      <main className="pt-20">
        <div 
          className={`transition-all duration-300 ${
            isTransitioning 
              ? 'opacity-0 transform scale-95' 
              : 'opacity-100 transform scale-100'
          }`}
        >
          {renderCurrentSection()}
        </div>
      </main>
    </div>
  );
}

export default App;