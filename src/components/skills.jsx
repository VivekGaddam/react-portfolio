import React, { useEffect, useRef } from "react";

// Skills Component
function Skills() {
  const containerRef = useRef(null);

  useEffect(() => {
    // GSAP-style animation using CSS animations and Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = entry.target.querySelectorAll(".lang");
            items.forEach((item, index) => {
              setTimeout(() => {
                item.style.animation = 'skillSlideIn 0.6s ease-out forwards';
              }, index * 200); // Stagger effect
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);
  

  const skillsData = [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
    { name: "Scikit-Learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg" },
    { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
    { name: "jQuery", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
    { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
    { name: "LaTeX", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/latex/latex-original.svg" },
    { name: "Matplotlib", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg" },
    { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
    { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
    { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/opencv/opencv-original.svg" },
    { name: "Material UI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg" }
  ];

  return (
    <>
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');

    @keyframes skillSlideIn {
      from {
        opacity: 0;
        transform: translateY(50px) scale(0.8);
      }
      to {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
    }

    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
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

    .lang {
      opacity: 0;
      transform: translateY(50px) scale(0.8);
    }
  `}</style>

      <div className="min-h-screen bg-black py-16 px-4 relative overflow-hidden">
        {/* Matrix Rain Effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute matrix-char text-xs opacity-10"
              style={{
                left: `${i * 8.33}%`,
                animation: `matrixRain ${5 + Math.random() * 3}s infinite ${Math.random() * 7}s linear`,
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
          style={{ animation: 'scan 15s infinite linear' }}
        />

        <div id="skills" className="max-w-7xl mx-auto relative z-10">
          {/* Title */}
          <div className="text-center mb-16">
            <div className="terminal-text text-sm text-green-400 mb-3 opacity-60">
              $ ./skills --scan-abilities
            </div>
            <h1 className="cyber-text text-5xl md:text-7xl font-bold text-white mb-4 tracking-wider">
              SKILLS <span className="text-4xl md:text-5xl">🧠</span>
            </h1>
            <div className="terminal-text text-xs text-gray-500 opacity-60">
              [SCANNING] [TECHNOLOGIES_DETECTED: 24] [STATUS: EXPERT]
            </div>
          </div>

          {/* Skills Grid */}
          <div ref={containerRef} className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {skillsData.map((skill, index) => (
              <div
                key={index}
                className="lang bg-gray-900 border border-green-400 border-opacity-30 rounded-lg p-4 hover:border-green-400 hover:border-opacity-80 transition-all duration-300 group cursor-pointer"
              >
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <img 
                      src={skill.icon} 
                      alt={skill.name}
                      className="w-full h-full object-contain filter group-hover:brightness-125"
                    />
                  </div>
                  <span className="terminal-text text-green-300 text-sm font-medium text-center group-hover:text-green-200 transition-colors">
                    {skill.name}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Terminal Status */}
          <div className="mt-12 terminal-text text-xs text-gray-500 opacity-60">
            <div className="border border-gray-700 rounded p-3 bg-gray-900 bg-opacity-50">
              <div className="flex justify-between items-center">
                <span>Scan Status: <span className="text-green-400">COMPLETE</span></span>
                <span>Proficiency: <span className="text-cyan-400">ADVANCED</span></span>
                <span>Ready: <span className="text-yellow-400">TRUE</span></span>
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

export default Skills;  