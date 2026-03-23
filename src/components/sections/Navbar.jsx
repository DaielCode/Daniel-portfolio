import { useEffect } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            {" "}
            Daniel<span className="text-blue-500">.tech</span>
          </a>
          <div
            className="w-10 h-10 flex items-center justify-center cursor-pointer z-40 md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </div>

          <div className="hidden md:flex items-center space-x-9">
            <a
              href="#home"
              className="relative text-gray-300 transition-all duration-300 transform
             hover:-translate-y-0.5
             hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400
             hover:bg-clip-text hover:text-transparent
             before:content-[''] before:absolute before:left-0 before:bottom-0.5 before:w-full before:h-0.5
             before:bg-gradient-to-r before:from-blue-500 before:to-cyan-400
             before:scale-x-0 before:transition-transform before:duration-300
             hover:before:scale-x-100 before:origin-left"
            >
              Home
            </a>

            <a
              href="#about"
              className="relative text-gray-300 transition-all duration-300 transform
             hover:-translate-y-0.5
             hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400
             hover:bg-clip-text hover:text-transparent
             before:content-[''] before:absolute before:left-0 before:bottom-0.5 before:w-full before:h-0.5
             before:bg-gradient-to-r before:from-blue-500 before:to-cyan-400
             before:scale-x-0 before:transition-transform before:duration-300
             hover:before:scale-x-100 before:origin-left"
            >
              About
            </a>
            <a
              href="#projects"
              className="relative text-gray-300 transition-all duration-300 transform
             hover:-translate-y-0.5
             hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400
             hover:bg-clip-text hover:text-transparent
             before:content-[''] before:absolute before:left-0 before:bottom-0.5 before:w-full before:h-0.5
             before:bg-gradient-to-r before:from-blue-500 before:to-cyan-400
             before:scale-x-0 before:transition-transform before:duration-300
             hover:before:scale-x-100 before:origin-left"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="relative text-gray-300 transition-all duration-300 transform
             hover:-translate-y-0.5
             hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-400
             hover:bg-clip-text hover:text-transparent
             before:content-[''] before:absolute before:left-0 before:bottom-0.5 before:w-full before:h-0.5
             before:bg-gradient-to-r before:from-blue-500 before:to-cyan-400
             before:scale-x-0 before:transition-transform before:duration-300
             hover:before:scale-x-100 before:origin-left"
            >
              Contact me
            </a>
            <a
              href="https://github.com/DaielCode"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.52 11.52 0 0 1 3-.405c1.02.005 2.045.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/danylo-kutsak"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
