import React, { useEffect, useRef, useState } from "react";
import { Github, ExternalLink, Mail, MessageCircle } from "lucide-react";

// Projects Component
function Project() {
  const projectsRef = useRef(null);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".project-card");
            items.forEach((item, index) => {
              setTimeout(() => {
                item.style.animation = 'projectSlideIn 0.8s ease-out forwards';
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projectsData = [
    {
      title: "CBIT ERP System",
      description: "Comprehensive college management platform with web scraping, leave tracker, semester calculator, and Google integration. Modern solution addressing original site limitations.",
      image: "/api/placeholder/400/200",
      liveUrl: "https://erp-frontend-qn2y.onrender.com/",
      githubUrl: "https://github.com/VivekGaddam/Erp-attendance",
      tech: ["React", "Node.js", "Web Scraping", "OAuth"]
    },
    {
      title: "Face Recognition Attendance",
      description: "AI-powered attendance system combining Python backend with React frontend. Features OpenCV, KNN models, automated tracking, and CSV-based records.",
      image: "/api/placeholder/400/200",
      liveUrl: "https://erp-frontend-qn2y.onrender.com/",
      githubUrl: "https://github.com/VivekGaddam/Face-Recognition-Attendance-System-main",
      tech: ["Python", "React", "OpenCV", "Machine Learning"]
    },
    {
      title: "WanderLust Ways",
      description: "Travel platform with intelligent chatbot, smart filters, and Google Maps API. Built during hackathon using MERN stack and TravelAssistant.ai integration.",
      image: "/api/placeholder/400/200",
      liveUrl: "https://wanderlust-ways.web.app/",
      githubUrl: "https://github.com/VivekGaddam/WanderLustWays",
      tech: ["MERN Stack", "Google Maps API", "AI Chatbot", "OAuth"]
    }
  ];

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');

        @keyframes projectSlideIn {
          from {
            opacity: 0;
            transform: translateY(50px) rotateX(20deg);
          }
          to {
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
          }
        }

        @keyframes matrixRain {
          0% { transform: translateY(-100px); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }

        @keyframes scan {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100vw); }
        }

        .terminal-text {
          font-family: 'JetBrains Mono', 'Courier New', monospace;
        }

        .cyber-text {
          font-family: 'Orbitron', monospace;
        }

        .matrix-char {
          color: #00ff41;
          font-family: 'JetBrains Mono', monospace;
          font-weight: 300;
        }

        .project-card {
          opacity: 0;
          transform: translateY(50px) rotateX(20deg);
        }
      `}</style>

      <div className="min-h-screen bg-black py-16 px-4 relative overflow-hidden">
        {/* Matrix Rain Effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute matrix-char text-xs opacity-10"
              style={{
                left: `${i * 12.5}%`,
                animation: `matrixRain ${7 + Math.random() * 4}s infinite ${Math.random() * 10}s linear`,
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
          style={{ animation: 'scan 20s infinite linear' }}
        />

        <div id="projects" className="max-w-7xl mx-auto relative z-10">
          {/* Title */}
          <div className="text-center mb-12">
            <div className="terminal-text text-sm text-green-400 mb-3 opacity-60">
              $ ./projects --list-portfolio
            </div>
            <h1 className="cyber-text text-4xl md:text-6xl font-bold text-white mb-4 tracking-wider">
              PROJECTS <span className="text-3xl md:text-4xl">🏗️</span>
            </h1>
            <div className="terminal-text text-xs text-gray-500 opacity-60">
              [LOADING] [PORTFOLIO_ITEMS: {projectsData.length}] [STATUS: DEPLOYED]
            </div>
          </div>

          {/* Projects Grid */}
          <div ref={projectsRef} className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <div
                key={index}
                className="project-card bg-gray-900 border border-green-400 border-opacity-30 rounded-lg overflow-hidden hover:border-green-400 hover:border-opacity-80 transition-all duration-300 group"
              >
                {/* Project Header */}
                <div className="p-4 border-b border-gray-700">
                  <div className="terminal-text text-green-400 text-xs mb-2 opacity-70">
                    $ cat project_{index + 1}.md
                  </div>
                  <h3 className="terminal-text text-lg font-bold text-white group-hover:text-green-200 transition-colors">
                    {project.title}
                  </h3>
                </div>

                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center">
                    <div className="text-center">
                      <div className="terminal-text text-green-300 text-2xl mb-2">{'{ }'}</div>
                      <div className="terminal-text text-green-400 text-sm">PROJECT_PREVIEW</div>
                    </div>
                  </div>
                  <div className="absolute top-2 right-2 flex space-x-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-400 bg-opacity-20 p-2 rounded hover:bg-opacity-40 transition-all duration-300"
                    >
                      <ExternalLink size={16} className="text-green-300" />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-700 bg-opacity-60 p-2 rounded hover:bg-opacity-80 transition-all duration-300"
                    >
                      <Github size={16} className="text-white" />
                    </a>
                  </div>
                </div>

                {/* Project Details */}
                <div className="p-4">
                  <p className="terminal-text text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="terminal-text text-xs bg-green-400 bg-opacity-20 text-green-300 px-2 py-1 rounded border border-green-400 border-opacity-30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 terminal-text text-center bg-green-400 bg-opacity-20 text-green-300 py-2 rounded hover:bg-opacity-40 transition-all duration-300 text-sm font-medium"
                    >
                      DEPLOY
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 terminal-text text-center bg-gray-700 bg-opacity-60 text-white py-2 rounded hover:bg-opacity-80 transition-all duration-300 text-sm font-medium"
                    >
                      CODE
                    </a>
                  </div>
                </div>
              </div>
            ))}

            {/* Coming Soon Cards */}
            {[...Array(3)].map((_, index) => (
              <div
                key={`coming-soon-${index}`}
                className="project-card bg-gray-900 border border-gray-600 border-opacity-50 rounded-lg overflow-hidden opacity-60"
              >
                <div className="p-4 border-b border-gray-700">
                  <div className="terminal-text text-gray-500 text-xs mb-2">
                    $ ./build --in-progress
                  </div>
                  <h3 className="terminal-text text-lg font-bold text-gray-400">
                    PROJECT_{index + 4}
                  </h3>
                </div>
                <div className="aspect-video bg-gray-800 flex items-center justify-center">
                  <div className="text-center">
                    <div className="terminal-text text-gray-500 text-2xl mb-2">⚡</div>
                    <div className="terminal-text text-gray-500 text-sm">COMING SOON</div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="terminal-text text-gray-500 text-sm">
                    New exciting project in development...
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Terminal Status */}
          <div className="mt-12 terminal-text text-xs text-gray-500 opacity-60">
            <div className="border border-gray-700 rounded p-3 bg-gray-900 bg-opacity-50">
              <div className="flex justify-between items-center">
                <span>Projects Loaded: <span className="text-green-400">{projectsData.length}</span></span>
                <span>Status: <span className="text-cyan-400">ACTIVE</span></span>
                <span>More Coming: <span className="text-yellow-400">TRUE</span></span>
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

export default Project;