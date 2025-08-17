import React, { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 font-mono tracking-wider ${
        scrolled
          ? "backdrop-blur-md bg-black/40 border-b border-green-400/20 shadow-[0_0_15px_rgba(0,255,65,0.3)]"
          : "backdrop-blur-sm bg-black/20 border-b border-green-400/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="text-2xl font-bold cursor-pointer transition-all duration-300 transform hover:scale-110 bg-gradient-to-r from-green-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_0_5px_rgba(0,255,65,0.7)]">
              VIVEK GADDAM
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {[
                { name: "Projects", href: "#projects" },
                { name: "Experience", href: "#experience" },
                { name: "Resume", href: "/resume.pdf", external: true },
                { name: "Contact", href: "#contact" },
              ].map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  target={link.external ? "_blank" : "_self"}
                  rel={link.external ? "noopener noreferrer" : ""}
                  className="relative px-4 py-2 text-sm font-medium text-green-400/90 hover:text-cyan-300 transition-all duration-300 group"
                >
                  <span className="relative z-10">{link.name}</span>
                  {/* Neon border effect */}
                  <span className="absolute inset-0 rounded-lg border border-green-400/30 opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
                  {/* Scanline hover */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/20 to-transparent opacity-0 group-hover:opacity-100 animate-scanline"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-lg text-green-400 hover:text-cyan-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-400 transition-all duration-300"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-1.5" : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-current mt-1 transition-all duration-300 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-current mt-1 transition-all duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-1.5" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-500 ease-in-out ${
          isOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-2 backdrop-blur-md bg-black/50 border-t border-green-400/20 shadow-[0_0_10px_rgba(0,255,65,0.3)]">
          {[
            { name: "Projects", href: "#profile" },
            { name: "Experience", href: "#experiance" },
            { name: "Resume", href: "/resume.pdf", external: true },
            { name: "Contact", href: "#contact" },
          ].map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              target={link.external ? "_blank" : "_self"}
              rel={link.external ? "noopener noreferrer" : ""}
              onClick={toggleMenu}
              className="block px-4 py-3 rounded-lg text-base font-medium text-green-400/90 hover:text-cyan-300 hover:bg-green-400/10 transition-all duration-300 transform hover:translate-x-2 relative group"
            >
              <span className="relative z-10">{link.name}</span>
              <span className="absolute inset-0 rounded-lg border border-green-400/30 opacity-0 group-hover:opacity-100 transition-all duration-500"></span>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
