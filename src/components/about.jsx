import React, { useEffect, useRef } from "react";
import { Star, StarHalf, Github, ExternalLink } from "lucide-react";

function About() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const skillsRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    // Animate elements on load
    const animateElements = () => {
      if (titleRef.current) {
        setTimeout(() => {
          titleRef.current.style.animation = 'slideInLeft 0.8s ease-out both';
        }, 200);
      }
      
      if (descRef.current) {
        setTimeout(() => {
          descRef.current.style.animation = 'fadeInUp 1s ease-out 0.4s both';
        }, 400);
      }
      
      if (skillsRef.current) {
        setTimeout(() => {
          skillsRef.current.style.animation = 'slideInRight 0.8s ease-out 0.8s both';
        }, 800);
      }
      
      if (linksRef.current) {
        setTimeout(() => {
          linksRef.current.style.animation = 'zoomIn 0.8s ease-out 1.2s both';
        }, 1200);
      }
    };

    animateElements();
  }, []);

  const SkillRating = ({ skill, rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="bg-gray-900 border border-green-400 border-opacity-30 rounded-md p-4 hover:border-green-400 hover:border-opacity-60 transition-all duration-300 group">
        <div className="flex justify-between items-center">
          <span className="terminal-text text-green-300 font-medium group-hover:text-green-200 transition-colors">
            {skill}
          </span>
          <div className="flex items-center space-x-1">
            {[...Array(fullStars)].map((_, i) => (
              <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
            ))}
            {hasHalfStar && <StarHalf size={16} className="fill-yellow-400 text-yellow-400" />}
            {[...Array(emptyStars)].map((_, i) => (
              <Star key={i} size={16} className="text-gray-600" />
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');

        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-100px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(100px); }
          to { opacity: 1; transform: translateX(0); }
        }

        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
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

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
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
      `}</style>

      <div 
        ref={containerRef}
        className="min-h-screen bg-black py-16 px-4 relative overflow-hidden"
      >
        {/* Matrix Rain Effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute matrix-char text-xs opacity-10"
              style={{
                left: `${i * 6.67}%`,
                animation: `matrixRain ${4 + Math.random() * 3}s infinite ${Math.random() * 6}s linear`,
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
          style={{ animation: 'scan 12s infinite linear' }}
        />

        {/* Terminal Grid */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(25)].map((_, i) => (
            <div key={i} className="absolute w-full h-px bg-green-400" style={{ top: `${i * 4}%` }} />
          ))}
        </div>

        <div id="about" className="max-w-6xl mx-auto relative z-10">
          {/* Title Section */}
          <div ref={titleRef} className="mb-12 opacity-0">
            <div className="terminal-text text-sm md:text-base text-green-400 mb-3">
              <span className="opacity-60">$ ./profile --show-details</span>
            </div>
            <h1 className="cyber-text text-4xl md:text-6xl font-bold text-white mb-4 tracking-wider">
              ABOUT <span className="text-2xl md:text-4xl">📝</span>
            </h1>
            <div className="terminal-text text-xs text-gray-500 opacity-60">
              [PROFILE_LOADED] [STATUS: ACTIVE] [SECURITY: VERIFIED]
            </div>
          </div>

          {/* Description Section */}
          <div ref={descRef} className="mb-12 opacity-0">
            <div className="bg-gray-900 border border-green-400 border-opacity-30 rounded-lg p-6 md:p-8">
              <div className="terminal-text text-green-400 text-xs mb-4 opacity-70">
                $ cat profile.txt
              </div>
              <p className="terminal-text text-white text-lg md:text-xl leading-relaxed">
                <span className="text-green-300">Welcome!</span> I am <span className="text-cyan-300 font-semibold">Vivek Chandra</span>, 
                with strong skills in <span className="text-yellow-300">web development</span>, knowledge of <span className="text-purple-300">machine learning</span>, 
                and extensive experience in <span className="text-blue-300">Python</span>. I am above <span className="text-green-300 font-bold">99%</span> of users on 
                LeetCode for Data Structures and Algorithms (DSA) in Python. In web development, I have worked on several 
                great projects. In machine learning, I have foundational knowledge and completed projects in both 
                <span className="text-pink-300">supervised</span> and <span className="text-orange-300">unsupervised learning</span>.
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div ref={skillsRef} className="mb-12 opacity-0">
            <div className="terminal-text text-green-400 text-sm mb-4">
              <span className="opacity-60">$ ./skills --analyze</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <SkillRating skill="Web Development" rating={4.5} />
              <SkillRating skill="Machine Learning" rating={2.5} />
              <SkillRating skill="Python" rating={5} />
              <SkillRating skill="DSA" rating={4.5} />
            </div>
          </div>

          {/* Links Section */}
          <div ref={linksRef} className="opacity-0">
            <div className="bg-gray-900 border border-green-400 border-opacity-30 rounded-lg p-6 md:p-8">
              <div className="terminal-text text-green-400 text-sm mb-6">
                <span className="opacity-60">$ ./connect --show-profiles</span>
              </div>
              
              <div className="space-y-6">
                {/* GitHub */}
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">🚀</span>
                  <span className="terminal-text text-white">Check out my amazing projects on</span>
                  <a 
                    href="https://github.com/VivekGaddam" 
                    className="inline-flex items-center space-x-2 terminal-text text-green-300 hover:text-green-200 border-b-2 border-yellow-400 pb-1 transition-all duration-300 hover:border-green-300"
                  >
                    <span>GitHub</span>
                    <Github size={16} />
                  </a>
                </div>

                {/* Competitive Programming */}
                <div className="terminal-text text-white">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="text-2xl">🚀</span>
                    <span>Also, explore my DSA strengths on:</span>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ml-8">
                    <a 
                      href="https://leetcode.com/u/vivekgaddam/" 
                      className="flex items-center space-x-3 bg-gray-800 border border-gray-600 rounded p-3 hover:border-green-400 hover:bg-gray-700 transition-all duration-300 group"
                    >
                      <span className="text-lg">👉</span>
                      <span className="text-green-300 group-hover:text-green-200">LeetCode</span>
                      <div className="w-5 h-5 bg-yellow-500 rounded"></div>
                    </a>
                    
                    <a 
                      href="https://www.hackerrank.com/profile/vivek_gaddam2005" 
                      className="flex items-center space-x-3 bg-gray-800 border border-gray-600 rounded p-3 hover:border-green-400 hover:bg-gray-700 transition-all duration-300 group"
                    >
                      <span className="text-lg">👉</span>
                      <span className="text-green-300 group-hover:text-green-200">HackerRank</span>
                      <div className="w-5 h-5 bg-green-500 rounded"></div>
                    </a>
                    
                    <a 
                      href="https://codeforces.com/profile/Vivek_chandra_" 
                      className="flex items-center space-x-3 bg-gray-800 border border-gray-600 rounded p-3 hover:border-green-400 hover:bg-gray-700 transition-all duration-300 group"
                    >
                      <span className="text-lg">👉</span>
                      <span className="text-green-300 group-hover:text-green-200">Codeforces</span>
                      <div className="w-5 h-5 bg-blue-500 rounded"></div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Terminal Status */}
            <div className="mt-6 terminal-text text-xs text-gray-500 opacity-60">
              <div className="border border-gray-700 rounded p-3 bg-gray-900 bg-opacity-50">
                <div className="flex justify-between items-center">
                  <span>Profile Status: <span className="text-green-400">LOADED</span></span>
                  <span>Skills Verified: <span className="text-cyan-400">TRUE</span></span>
                  <span>Links Active: <span className="text-yellow-400">ALL</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Corner Brackets */}
        <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-green-400 opacity-20"></div>
        <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-green-400 opacity-20"></div>
        <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-green-400 opacity-20"></div>
        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-green-400 opacity-20"></div>
      </div>
    </>
  );
}

export default About;