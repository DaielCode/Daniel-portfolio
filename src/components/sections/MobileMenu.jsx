import { useEffect } from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [menuOpen]);

  const scrollToSection = (id) => {
    setMenuOpen(false);

    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-40 flex flex-col items-center justify-center
      transition-all duration-300 ease-in-out md:hidden
      ${
        menuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      {/* Close button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-4xl cursor-pointer focus:outline-none"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {/* Menu items */}
      <nav className="flex flex-col items-center space-y-6 text-2xl font-semibold text-white">
        <button
          onClick={() => scrollToSection("home")}
          className={`transition-all duration-300 ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          Home
        </button>

        <button
          onClick={() => scrollToSection("about")}
          className={`transition-all duration-300 delay-75 ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          About
        </button>

        <button
          onClick={() => scrollToSection("projects")}
          className={`transition-all duration-300 delay-100 ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          Projects
        </button>

        <button
          onClick={() => scrollToSection("contact")}
          className={`transition-all duration-300 delay-150 ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          Contact
        </button>
      </nav>
    </div>
  );
};
