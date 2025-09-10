import { useState } from 'react';

const Certificates = ({ data }) => {
  const [selectedCert, setSelectedCert] = useState(null);

  const getCertIcon = (issuer) => {
    if (issuer.includes('LinkedIn')) {
      return (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      );
    } else if (issuer.includes('Cisco')) {
      return (
       <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 10v4 M7 8v8 M10 6v12 M13 8v8 M16 10v4 " />
      </svg>
      );
    } else if (issuer.includes('Microsoft')) {
      return (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M0 0h11.377v11.372H0zm12.623 0H24v11.372H12.623zM0 12.623h11.377V24H0zm12.623 0H24V24H12.623"/>
        </svg>
      );
    }
    return (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    );
  };

  const getCertGradient = (index) => {
    const gradients = [
      'from-blue-500 to-indigo-600',
      'from-green-500 to-teal-600',
      'from-purple-500 to-pink-600'
    ];
    return gradients[index % gradients.length];
  };

  const getCertColor = (issuer) => {
    if (issuer.includes('LinkedIn')) return 'text-blue-600';
    if (issuer.includes('Cisco')) return 'text-green-600';
    if (issuer.includes('Microsoft')) return 'text-purple-600';
    return 'text-gray-600';
  };

  return (
    <section className="min-h-screen py-20 bg-white overflow-y-auto">
      <div className="max-w-6xl mx-auto px-6">
        <div className="animate-in fade-in duration-1000">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Certifications
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional certifications that validate my expertise and commitment to continuous learning in technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.certificates.map((cert, index) => (
              <div
                key={cert.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200 transform hover:scale-105 animate-in fade-in slide-in-from-bottom-4"
                style={{ animationDelay: `${index * 200}ms` }}
                onClick={() => setSelectedCert(selectedCert === cert.id ? null : cert.id)}
              >
                <div className={`bg-gradient-to-r ${getCertGradient(index)} p-6 text-white relative overflow-hidden cursor-pointer`}>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                        {getCertIcon(cert.issuer)}
                      </div>
                      <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                        {cert.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 leading-tight">{cert.title}</h3>
                    <p className="text-sm opacity-90 font-medium">{cert.issuer}</p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {cert.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${getCertGradient(index)}`}></div>
                      <span className="text-sm font-medium text-gray-700">Certified Professional</span>
                    </div>
                    <button className={`text-sm font-medium ${getCertColor(cert.issuer)} hover:underline`}>
                      View Details
                    </button>
                  </div>

                  {selectedCert === cert.id && (
                    <div className="mt-4 pt-4 border-t border-gray-100 animate-in slide-in-from-top-2 duration-300">
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-700">Issued:</span>
                          <span className="text-sm text-gray-600">{cert.year}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-700">Issuer:</span>
                          <span className="text-sm text-gray-600">{cert.issuer}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-700">Status:</span>
                          <span className="text-sm text-green-600 font-medium">Active</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${getCertGradient(index)} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            ))}
          </div>

          {/* Achievement Stats */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Professional Achievements</h3>
              <p className="text-gray-600">Continuous learning and professional development milestones</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {data.certificates.length}
                </div>
                <div className="text-gray-600 font-medium">Professional Certificates</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent mb-2">
                  3
                </div>
                <div className="text-gray-600 font-medium">Major Platforms</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  100%
                </div>
                <div className="text-gray-600 font-medium">Completion Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;