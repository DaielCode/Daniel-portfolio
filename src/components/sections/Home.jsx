import { RevealOnScroll } from "./RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative
                 pt-28 md:pt-16"
    >
      <RevealOnScroll>
        <div className="z-10 px-4 flex flex-col-reverse md:flex-row items-center gap-12 max-w-5xl mx-auto">
          <div className="text-center md:text-left flex-1">
            <h1
              className="text-4xl sm:text-5xl md:text-7xl font-bold my-6
                         bg-gradient-to-l from-blue-500 to-purple-600
                         inline-block leading-tight bg-clip-text text-transparent"
            >
              Welcome to my portfolio
            </h1>

            <p
              className="text-gray-400 text-base sm:text-lg md:text-xl
                         mb-8 max-w-2xl leading-relaxed
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

            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
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

          <div className="flex-shrink-0">
            <img
              src="/Daniel-portfolio/photo.jpg"
              alt="Danylo Kutsak"
              className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.2)]"
            />
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
