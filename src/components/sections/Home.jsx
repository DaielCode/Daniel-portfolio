import { RevealOnScroll } from "./RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative
                 pt-28 md:pt-16"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1
            className="text-4xl sm:text-5xl md:text-7xl font-bold my-6
                       bg-gradient-to-l from-blue-500 to-purple-600
                       inline-block leading-tight bg-clip-text text-transparent"
          >
            Welcome to my portfolio
          </h1>

          <p
            className="text-gray-400 text-base sm:text-lg md:text-xl
                       mb-8 max-w-2xl mx-auto leading-relaxed
                       font-semibold italic"
          >
            Proactive and open-minded Computer Science student eager to apply
            academic knowledge in real-world scenarios and contribute to a
            dynamic IT team. Actively seeking a JavaScript internship to
            contribute to a forward-thinking team and gain practical experience
            in front-end development. Passionate about writing clean,
            maintainable code and committed to continuous growth within a
            professional development environment.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium
                         transition relative overflow-hidden
                         hover:-translate-y-0.5
                         hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6
                         rounded font-medium transition-all duration-200
                         hover:-translate-y-0.5
                         hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]
                         hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
