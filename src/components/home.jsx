import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

function Home() {
  const typedElement = useRef(null);

useEffect(() => {
  const strings = [
    "Web Development",
    "Machine Learning",
    "Python",
    "Full Stack Developer",
    "AI Enthusiast",
  ];
  let currentStringIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;
  let typingSpeed = 70; // default typing speed (slower)

  const type = () => {
    const currentString = strings[currentStringIndex];

    if (isDeleting) {
      // deleting chars
      typedElement.current.textContent = currentString.substring(
        0,
        currentCharIndex - 1
      );
      currentCharIndex--;
      typingSpeed = 120; // delete faster than typing
    } else {
      // typing chars
      typedElement.current.textContent = currentString.substring(
        0,
        currentCharIndex + 1
      );
      currentCharIndex++;
      typingSpeed = 120; // slower typing
    }

    // pause when full word is typed
    if (!isDeleting && currentCharIndex === currentString.length) {
      isDeleting = true;
      typingSpeed = 1000; // wait before deleting
    }
    // move to next word after deleting
    else if (isDeleting && currentCharIndex === 0) {
      isDeleting = false;
      currentStringIndex = (currentStringIndex + 1) % strings.length;
      typingSpeed = 200; // small pause before typing new word
    }

    setTimeout(type, typingSpeed);
  };

  setTimeout(type, 1000); // start typing after 1s
}, []);

  return (
    <>
      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
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
        .matrix-char {
          color: #00ff41;
          font-family: monospace;
          font-weight: 300;
        }
      `}</style>

      <div  id="home" className="Home pt-[20px]">
        <div className="min-h-screen bg-black flex items-center justify-center px-4 relative overflow-hidden">
          {/* Matrix Rain Effect */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute matrix-char text-xs opacity-20"
                style={{
                  left: `${i * 5}%`,
                  animation: `matrixRain ${3 + Math.random() * 2}s infinite ${
                    Math.random() * 5
                  }s linear`,
                  fontSize: "12px"
                }}
              >
                {String.fromCharCode(0x30A0 + Math.random() * 96)}
              </div>
            ))}
          </div>

          {/* Scanning Line */}
          <div
            className="absolute top-0 w-1 h-full bg-green-400 opacity-30"
            style={{ animation: "scan 8s infinite linear" }}
          />

          {/* Terminal Grid */}
          <div className="absolute inset-0 opacity-5">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute w-full h-px bg-green-400"
                style={{ top: `${i * 3.33}%` }}
              />
            ))}
            {[...Array(40)].map((_, i) => (
              <div
                key={i}
                className="absolute h-full w-px bg-green-400"
                style={{ left: `${i * 2.5}%` }}
              />
            ))}
          </div>

          {/* Content */}
          <div className="text-center z-10 max-w-5xl mx-auto">
            {/* Hello Section */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="text-lg md:text-xl text-green-400 mb-2 opacity-60">
                $ ./greet.sh
              </div>
              <h1 className="text-2xl md:text-4xl font-medium text-white">
                <span className="text-green-300">Hello!</span>
                <motion.span
                  className="inline-block ml-3 text-2xl md:text-4xl"
                  animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  👋
                </motion.span>
              </h1>
            </motion.div>

            {/* Name Section */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            >
              <div className="text-sm md:text-base text-green-400 mb-3 opacity-70">
                user@portfolio:~$ <span className="text-cyan-400">whoami</span>
              </div>
              <h1 className="text-4xl md:text-7xl font-bold text-green-300 tracking-wider">
                VIVEK CHANDRA REDDY
              </h1>
              <div className="text-xs md:text-sm text-gray-400 mt-2 opacity-60">
                [SoftWare Developer] [AI Enthusiast] [Problem Solver]
              </div>
            </motion.div>

            {/* Interested Section */}
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
            >
              <div className="text-sm md:text-base text-green-400 mb-2 opacity-60">
                $ cat interests.txt
              </div>
              <h3 className="text-xl md:text-2xl text-cyan-300 font-medium">
                Specialized in:
              </h3>
            </motion.div>

            {/* Typed Text */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.3, duration: 0.8, ease: "easeOut" }}
            >
              <div className="text-2xl md:text-4xl font-medium text-white bg-gray-900 border border-green-400 border-opacity-30 p-4 rounded-md inline-block min-w-[300px] text-left">
                <span className="text-green-400 opacity-60">></span>
                <span ref={typedElement} className="ml-2 text-green-300" />
                <span
                  className="inline-block w-3 h-6 bg-green-400 ml-1"
                  style={{ animation: "blink 1s infinite" }}
                />
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
                  {/* Terminal Status */}
            {/* <div className="mt-6 terminal-text text-xs text-gray-500 opacity-60">
              <div className="border border-gray-700 rounded p-3 bg-gray-900 bg-opacity-50">
                <div className="flex justify-between items-center">
                  <span>Profile Status: <span className="text-green-400">LOADED</span></span>
                  <span>Skills Verified: <span className="text-cyan-400">TRUE</span></span>
                  <span>Links Active: <span className="text-yellow-400">ALL</span></span>
                </div>
              </div>
            </div> */}
    </>
  );
}

export default Home;
