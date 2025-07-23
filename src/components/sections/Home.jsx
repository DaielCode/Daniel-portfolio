import { RevealOnScroll } from "./RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold my-6 bg-gradient-to-l     from-blue-500 to-purple-600 inline-block leading-tight bg-clip-text text-transparent ">
            Welcome to my portfolio{" "}
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
            {" "}
            Proactive and open-minded Computer Science student with a strong
            foundation in JavaScript and basic knowledge of CSS and HTML.
            Skilled in DOM manipulation and API integration. Familiar with
            fundamental data structures and algorithms with a deep interest in
            software development. Eager to apply academic knowledge in
            real-world scenarios and contribute to a dynamic IT team. Passionate
            about writing clean, maintainable code and committed to continuous
            growth within a professional development environment. Actively
            seeking a JavaScript internship to contribute to a forward-thinking
            team and gain practical experience in front-end development.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className=" bg-blue-500 text-white py-3 px-6 rounded font-medium transition  relative overlow-hidden hover:-translate-y-0.75 hover:shadow-[0_0_15px_rgba(59,130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className=" border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.75 hover:shadow-[0_0_15px_rgba(59,130, 246, 0.4)] hover:bg-blue-500/10"
            >
              Contact Me{" "}
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
