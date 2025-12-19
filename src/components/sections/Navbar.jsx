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
          </div>
        </div>
      </div>
    </nav>
  );
};
