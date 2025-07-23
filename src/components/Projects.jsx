import { RevealOnScroll } from "./sections/RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-aut0 px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Bankist App</h3>
              <p className="text-gray-400 mb-4">
                A responsive banking app demonstrating frontend-focused
                full-stack skills, including dynamic UI, secure login, and
                data-driven features.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["HTML", "REST API", "CSS", "DOM", "Algorithms"].map(
                  (tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              <div className="flex justify between items-center">
                <a
                  href="https://github.com/DaielCode/BankApp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-4-- hover:text-blue-300 trasition-colors"
                >
                  View Project →{" "}
                </a>
              </div>
              <div>
                {" "}
                <a
                  href="https://daielcode.github.io/BankApp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-4-- hover:text-blue-300 trasition-colors"
                >
                  View Project in Browser →{" "}
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">
                Advanced Bank App (In progres)
              </h3>
              <p className="text-gray-400 mb-4">
                Is a comprehensive demonstration of full-stack development,
                integrating frontend and backend technologies to create a secure
                and functional banking application. It showcases proficiency in
                modern web development practices, including secure
                authentication, data management, and responsive design.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "MongoDB",
                  "Node.js",
                  "Express.JS",
                  "JWT",
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "RESTful APIs",
                  "Security",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition whitespace-nowrap
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify between items-center">
                <a
                  href="https://github.com/DaielCode/Advanced_Bank_Aplication"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-4-- hover:text-blue-300 trasition-colors"
                >
                  View Project →{" "}
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Pig Game</h3>
              <p className="text-gray-400 mb-4">
                Classic two-player Pig Dice game using HTML, CSS, and JavaScript
                with turn-based logic and dynamic score updates.
              </p>
              <div>
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "DOM",
                  "Algorithms",
                  "UI Updates",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition whitespace-nowrap
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify between items-center">
                <a
                  href="https://github.com/DaielCode/Pig-Game"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-4-- hover:text-blue-300 trasition-colors"
                >
                  View Project →{" "}
                </a>
              </div>
              <div>
                {" "}
                <a
                  href="https://daielcode.github.io/Pig-Game/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-4-- hover:text-blue-300 trasition-colors"
                >
                  View Project in Browser →{" "}
                </a>
              </div>
            </div>

            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">React Portfolio</h3>
              <p className="text-gray-400 mb-4">
                project demonstrates proficiency in modern frontend development,
                utilizing React and Vite to create a responsive and interactive
                personal portfolio
              </p>
              <div>
                {[
                  "React",
                  "Vite",
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "UI Updates",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition whitespace-nowrap
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify between items-center">
                <a
                  href="https://github.com/DaielCode/Daniel-portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-4-- hover:text-blue-300 trasition-colors"
                >
                  View Project →{" "}
                </a>
              </div>
              <div>
                {" "}
                <a
                  href="https://daielcode.github.io/Daniel-portfolio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-4-- hover:text-blue-300 trasition-colors"
                >
                  View Project in Browser →{" "}
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Guess My Number</h3>
              <p className="text-gray-400 mb-4">
                Interactive number guessing game showcasing DOM manipulation,
                event handling, random number generation, and input validation
                with JavaScript
              </p>
              <div>
                {["HTML", "CSS", "JavaScript", "DOM"].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition whitespace-nowrap
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify between items-center">
                <a
                  href="https://github.com/DaielCode/Guess-Number"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-4-- hover:text-blue-300 trasition-colors"
                >
                  View Project →{" "}
                </a>
              </div>
              <div>
                {" "}
                <a
                  href="https://daielcode.github.io/Guess-Number/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-4-- hover:text-blue-300 trasition-colors"
                >
                  View Project in Browser →{" "}
                </a>
              </div>
            </div>
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
              <h3 className="text-xl font-bold mb-2">Bankist DOM</h3>
              <p className="text-gray-400 mb-4">
                Bankist-DOM is a banking app demonstrating advanced DOM
                manipulation, event handling, user authentication, and dynamic
                UI updates using HTML, CSS, and JavaScript.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "DOM",
                  "Event Handling",
                  "Data Validation",
                  "Responsive Design",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition whitespace-nowrap
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify between items-center">
                <a
                  href="https://github.com/DaielCode/BankApp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-4-- hover:text-blue-300 trasition-colors"
                >
                  View Project →{" "}
                </a>
              </div>
              <div>
                {" "}
                <a
                  href="https://daielcode.github.io/Bankist-DOM/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-4-- hover:text-blue-300 trasition-colors"
                >
                  View Project in Browser →{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
