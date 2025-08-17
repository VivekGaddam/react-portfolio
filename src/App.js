import './App.css';
import './index.css';
import NavBar from './components/NavBar';
import Home from './components/home';
import About from './components/about';
import Skills from './components/skills';
import Experience from './components/Experiance';
import Project from './components/project';
import Contact from './components/contact';

function App() {
  return (
    <>
      {/* Background Layer */}
      <div className="fixed inset-0 bg-black overflow-hidden -z-10">
        {/* Matrix Rain Effect */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute matrix-char text-xs opacity-20"
            style={{
              left: `${i * 5}%`,
              animation: `matrixRain ${3 + Math.random() * 2}s infinite ${Math.random() * 5}s linear`,
              fontSize: '12px'
            }}
          >
            {String.fromCharCode(0x30A0 + Math.random() * 96)}
          </div>
        ))}

        {/* Scanning Line */}
        <div 
          className="absolute top-0 w-1 h-full bg-green-400 opacity-30"
          style={{ animation: 'scan 8s infinite linear' }}
        />

        {/* Terminal Grid Lines */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(30)].map((_, i) => (
            <div key={i} className="absolute w-full h-px bg-green-400" style={{ top: `${i * 3.33}%` }} />
          ))}
          {[...Array(40)].map((_, i) => (
            <div key={i} className="absolute h-full w-px bg-green-400" style={{ left: `${i * 2.5}%` }} />
          ))}
        </div>
      </div>

      {/* Foreground Content */}
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Project />
      <Contact />
    </>
  );
}

export default App;
