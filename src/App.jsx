import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

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
          personal: {
            name: "Fofie Jounewe Joel Freude",
            titles: ["Web Designer", "IT Maintainer", "Software Developer"],
            birthDate: "October 27, 1999",
            email: "joelfreude10@gmail.com",
            phone: "+237 6 93 54 15 96",
            location: "Yaounde, Cameroun",
            bio: "Passionate web designer and software developer with 5 years of experience in web design and 3 years in front-end development."
          },
          experience: {
            webDesign: { years: 5, description: "Creating beautiful and functional web interfaces" },
            frontendDevelopment: { years: 3, description: "Building responsive and interactive web applications" },
            itMaintenance: { description: "Advanced electronic maintenance and system administration" }
          },
          skills: {
            frontend: ["HTML", "CSS", "JavaScript", "React", "Next.js"],
            backend: ["Django", "AdonisJS", "Express.js"],
            mobile: ["Flutter"],
            other: ["Svelte", "Electronic Maintenance"]
          },
          projects: [
            {
              id: 1,
              title: "Food Delivery App",
              description: "A comprehensive food delivery web interface built with React and Next.js.",
              technologies: ["React", "Next.js", "JSON"],
              year: "2021",
              type: "Web Application",
              status: "Completed"
            },
            {
              id: 2,
              title: "Online Library Website",
              description: "A modern library management system with Svelte and Express.js.",
              technologies: ["Svelte", "Express.js", "Node.js"],
              year: "2023",
              type: "Web Application",
              status: "Completed"
            },
            {
              id: 3,
              title: "E-commerce App with Admin Dashboard",
              description: "An ongoing e-commerce mobile application built using Flutter.",
              technologies: ["Flutter", "Dart", "Admin Dashboard"],
              year: "2024",
              type: "Mobile Application",
              status: "In Progress"
            }
          ],
          certificates: [
            {
              id: 1,
              title: "Front-end Development Certificate",
              issuer: "LinkedIn Learning",
              description: "Comprehensive certification covering modern front-end development practices.",
              year: "2023"
            },
            {
              id: 2,
              title: "CCNA Certificate",
              issuer: "Cisco",
              description: "Cisco Certified Network Associate certification.",
              year: "2022"
            },
            {
              id: 3,
              title: "Data Science Fundamentals",
              issuer: "Microsoft",
              description: "Microsoft certification covering data science principles.",
              year: "2023"
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