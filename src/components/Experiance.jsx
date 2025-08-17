import React from "react";
import "./experience.css";
import codespeedy from "./data/codespeedy.pdf";
import codeimg from "./data/codeimg.png";
import plotchai from "./data/plotchai.pdf";
import plotimg from "./data/plotchimg.jpeg";
import { useRef,useEffect } from "react";
// Experience Component
function Experience() {
  const experienceRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".experience-item");
            items.forEach((item, index) => {
              setTimeout(() => {
                item.style.animation = 'slideInFromLeft 0.8s ease-out forwards';
              }, index * 300);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .experience-item {
          opacity: 0;
          transform: translateX(-100px);
        }
      `}</style>

      <div className="min-h-screen bg-black py-16 px-4 relative overflow-hidden">
        {/* Matrix Rain Effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute matrix-char text-xs opacity-10"
              style={{
                left: `${i * 10}%`,
                animation: `matrixRain ${6 + Math.random() * 4}s infinite ${Math.random() * 8}s linear`,
                fontSize: '10px'
              }}
            >
              {String.fromCharCode(0x30A0 + Math.random() * 96)}
            </div>
          ))}
        </div>

        {/* Scanning Line */}
        <div 
          className="absolute top-0 w-1 h-full bg-green-400 opacity-20"
          style={{ animation: 'scan 18s infinite linear' }}
        />

        <div id="experience" className="max-w-6xl mx-auto relative z-10">
          {/* Title */}
          <div className="text-center mb-16">
            <div className="terminal-text text-sm text-green-400 mb-3 opacity-60">
              $ ./career --show-history
            </div>
            <h1 className="cyber-text text-5xl md:text-7xl font-bold text-white mb-4 tracking-wider">
              EXPERIENCE <span className="text-4xl md:text-5xl">💼</span>
            </h1>
            <div className="terminal-text text-xs text-gray-500 opacity-60">
              [LOADING] [CAREER_PATH] [STATUS: VERIFIED]
            </div>
          </div>

          {/* Experience Items */}
          <div ref={experienceRef} className="space-y-12">
            {/* Plotchai Experience */}
            <div className="experience-item bg-gray-900 border border-green-400 border-opacity-30 rounded-lg p-6 md:p-8">
              <div className="terminal-text text-green-400 text-sm mb-4 opacity-70">
                $ cat experience_1.log
              </div>
              
              <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                <div className="flex-1 mb-6 lg:mb-0">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="terminal-text text-xl md:text-2xl font-bold text-white mb-2 md:mb-0">
                      Backend Developer Intern: 
                      <a 
                        href="https://www.plotch.ai/" 
                        className="text-cyan-300 hover:text-cyan-200 transition-colors ml-2 border-b-2 border-cyan-400 pb-1"
                      >
                        Plotchai
                      </a>
                    </h3>
                    <span className="terminal-text text-green-300 text-sm bg-gray-800 px-3 py-1 rounded">
                      Apr 2025 - May 2025
                    </span>
                  </div>
                  
                  <p className="terminal-text text-white leading-relaxed">
                    <span className="text-green-300">Plotchai</span>, a fast-growing startup collaborating with companies like 
                    <span className="text-yellow-300"> Snapdeal</span> and <span className="text-purple-300">Paytm</span>, 
                    provided me the opportunity to work on a real-world e-commerce backend system. As a Backend Developer, 
                    I designed <span className="text-cyan-300">RESTful APIs</span>, managed 
                    <span className="text-orange-300"> MongoDB</span> data models, and integrated with 
                    <span className="text-pink-300">Snapdeal's systems</span>.
                  </p>
                </div>
                
                <div className="lg:w-80 flex-shrink-0">
                  <div className="bg-gray-800 border border-gray-600 rounded-lg p-4 hover:border-green-400 transition-colors group cursor-pointer">
                    <div className="aspect-video bg-gray-700 rounded mb-3 flex items-center justify-center overflow-hidden">
<a href={plotchai} target="_blank">
    <img
  src={plotimg}
  alt="Plotchai Certificate"
  className="w-full h-full object-cover rounded"
/>
</a>
                    </div>
                    <div className="terminal-text text-green-300 text-sm text-center group-hover:text-green-200">
                      ☝️ Certificate Available
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CodeSpeedy Experience */}
            <div className="experience-item bg-gray-900 border border-green-400 border-opacity-30 rounded-lg p-6 md:p-8">
              <div className="terminal-text text-green-400 text-sm mb-4 opacity-70">
                $ cat experience_2.log
              </div>
              
              <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                <div className="flex-1 mb-6 lg:mb-0">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="terminal-text text-xl md:text-2xl font-bold text-white mb-2 md:mb-0">
                      Python Developer: 
                      <a 
                        href="https://www.codespeedy.com/" 
                        className="text-cyan-300 hover:text-cyan-200 transition-colors ml-2 border-b-2 border-cyan-400 pb-1"
                      >
                        CodeSpeedy
                      </a>
                    </h3>
                    <span className="terminal-text text-green-300 text-sm bg-gray-800 px-3 py-1 rounded">
                      Jun 2024 - Oct 2024
                    </span>
                  </div>
                  
                  <p className="terminal-text text-white leading-relaxed">
                    <span className="text-green-300">CodeSpeedy</span> is an IT company specializing in 
                    <span className="text-cyan-300"> coding solutions</span> and various IT services, including 
                    <span className="text-yellow-300">web and software development</span>. As a Python Developer, 
                    I collaborated with my team to design and develop an 
                    <span className="text-purple-300"> API</span> and a simple 
                    <span className="text-pink-300">GUI application</span> for 
                    <span className="text-orange-300">payment processing</span>.
                  </p>
                </div>
                
                <div className="lg:w-80 flex-shrink-0">
                  <div className="bg-gray-800 border border-gray-600 rounded-lg p-4 hover:border-green-400 transition-colors group cursor-pointer">
                    <div className="aspect-video bg-gray-700 rounded mb-3 flex items-center justify-center overflow-hidden">
                      <a href={codespeedy} target="_blank">
                        <img
                          src={codeimg}
                          alt="CodeSpeedy Certificate"
                          className="w-full h-full object-cover rounded"
                        />
                      </a>
                    </div>
                    <div className="terminal-text text-green-300 text-sm text-center group-hover:text-green-200">
                      ☝️ Certificate Available
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Terminal Status */}
          <div className="mt-12 terminal-text text-xs text-gray-500 opacity-60">
            <div className="border border-gray-700 rounded p-3 bg-gray-900 bg-opacity-50">
              <div className="flex justify-between items-center">
                <span>Experience Loaded: <span className="text-green-400">SUCCESS</span></span>
                <span>Internships: <span className="text-cyan-400">2</span></span>
                <span>Verification: <span className="text-yellow-400">COMPLETE</span></span>
              </div>
            </div>
          </div>
        </div>

        {/* Corner Brackets */}
        <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-green-400 opacity-30"></div>
        <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-green-400 opacity-30"></div>
        <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-green-400 opacity-30"></div>
        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-green-400 opacity-30"></div>
      </div>
    </>
  );
}
export default Experience;