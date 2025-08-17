import React, { useEffect, useRef, useState } from "react";
import { Github, ExternalLink, Mail, MessageCircle } from "lucide-react";
// Contact Component
function Contact() {
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 1s ease-out forwards';
          }
        });
      },
      { threshold: 0.3 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }

        .contact-container {
          opacity: 0;
          transform: translateY(50px);
        }
      `}</style>

      <div id="contact" className="min-h-screen bg-black py-16 px-4 relative overflow-hidden">
        {/* Matrix Rain Effect */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute matrix-char text-xs opacity-10"
              style={{
                left: `${i * 16.67}%`,
                animation: `matrixRain ${8 + Math.random() * 5}s infinite ${Math.random() * 12}s linear`,
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
          style={{ animation: 'scan 25s infinite linear' }}
        />

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Title */}
          <div className="text-center mb-12">
            <div className="terminal-text text-sm text-green-400 mb-3 opacity-60">
              $ ./connect --establish-link
            </div>
            <h1 className="cyber-text text-4xl md:text-6xl font-bold text-white mb-4 tracking-wider">
              CONTACT <span className="text-3xl md:text-4xl">☎️</span>
            </h1>
            <div className="terminal-text text-xs text-gray-500 opacity-60">
              [INITIALIZING] [COMMUNICATION_CHANNELS] [STATUS: READY]
            </div>
          </div>

          {/* Contact Code Block */}
          <div ref={contactRef} className="contact-container">
            <div className="bg-gray-900 border border-green-400 border-opacity-30 rounded-lg p-6 md:p-8">
              <div className="terminal-text text-green-400 text-sm mb-4 opacity-70">
                $ node contact.js
              </div>

              <div className="terminal-text text-base md:text-lg leading-relaxed overflow-x-auto">
                <div className="min-w-max">
                  <span className="text-cyan-400">const</span>{" "}
                  <span className="text-green-300 font-semibold">Vivek</span>{" "}
                  <span className="text-pink-400">=</span>{" "}
                  <span className="text-cyan-400">new</span>{" "}
                  <span className="text-green-300">Person</span>
                  <span className="text-white">({"{"}</span>
                  <br />
                  {"    "}
                  <span className="text-green-300">email</span>
                  <span className="text-pink-400">:</span>{" "}
                  <a
                    href="mailto:vivekgaddam02@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="text-yellow-300 hover:text-yellow-200 hover:underline transition-all duration-300 inline-flex items-center gap-1"
                  >
                    "vivekgaddam02@gmail.com"
                    <Mail size={16} />
                  </a>
                  <span className="text-white">,</span>
                  <br />
                  {"    "}
                  <span className="text-green-300">github</span>
                  <span className="text-pink-400">:</span>{" "}
                  <a
                    href="https://github.com/VivekGaddam"
                    target="_blank"
                    rel="noreferrer"
                    className="text-yellow-300 hover:text-yellow-200 hover:underline transition-all duration-300 inline-flex items-center gap-1"
                  >
                    "VivekGaddam"
                    <Github size={16} />
                  </a>
                  <span className="text-white">,</span>
                  <br />
                  {"    "}
                  <span className="text-green-300">linkedin</span>
                  <span className="text-pink-400">:</span>{" "}
                  <a
                    href="https://www.linkedin.com/in/gaddamvivekchandrareddy/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-yellow-300 hover:text-yellow-200 hover:underline transition-all duration-300"
                  >
                    "gaddamvivekchandrareddy"
                  </a>
                  <span className="text-white">,</span>
                  <br />
                  {"    "}
                  <span className="text-green-300">twitter</span>
                  <span className="text-pink-400">:</span>{" "}
                  <a
                    href="https://x.com/Vivek_Gaddam_"
                    target="_blank"
                    rel="noreferrer"
                    className="text-yellow-300 hover:text-yellow-200 hover:underline transition-all duration-300 inline-flex items-center gap-1"
                  >
                    "Vivek_Gaddam_"
                    <MessageCircle size={16} />
                  </a>
                  <span className="text-white">{"});"}</span>
                </div>
              </div>

              {/* Quick Contact Cards */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <a
                  href="mailto:vivekgaddam02@gmail.com"
                  className="bg-gray-800 border border-gray-600 rounded p-4 hover:border-green-400 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3">
                    <Mail className="text-green-400 group-hover:text-green-300" size={20} />
                    <div>
                      <div className="terminal-text text-white text-sm font-medium">Quick Email</div>
                      <div className="terminal-text text-gray-400 text-xs">vivekgaddam02@gmail.com</div>
                    </div>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/gaddamvivekchandrareddy/"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-gray-800 border border-gray-600 rounded p-4 hover:border-cyan-400 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-blue-500 rounded group-hover:bg-blue-400 transition-colors"></div>
                    <div>
                      <div className="terminal-text text-white text-sm font-medium">LinkedIn</div>
                      <div className="terminal-text text-gray-400 text-xs">Professional Network</div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Terminal Status */}
            <div className="mt-8 terminal-text text-xs text-gray-500 opacity-60">
              <div className="border border-gray-700 rounded p-3 bg-gray-900 bg-opacity-50">
                <div className="flex justify-between items-center">
                  <span>Connection: <span className="text-green-400">ESTABLISHED</span></span>
                  <span>Response Time: <span className="text-cyan-400">24H</span></span>
                  <span>Availability: <span className="text-yellow-400">OPEN</span></span>
                </div>
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

export default Contact;