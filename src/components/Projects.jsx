import { RevealOnScroll } from "./sections/RevealOnScroll";

// Список проектів від найпотужнішого до простішого
const projects = [
  {
    title: "YourBank",
    image: "/Daniel-portfolio/yourbank.png",
    description:
      "Full-featured banking app with real Firebase Authentication, Firestore database, instant user-to-user transfers, loan system, and live exchange rates from the European Central Bank. Supports 6 currencies with real-time conversion.",
    tech: ["JavaScript", "Firebase Auth", "Firestore", "REST API", "CSS"],
    github: "https://github.com/DaielCode/Advanced_Bank_Aplication",
    live: "https://yourbankapp.web.app",
  },
  {
    title: "Fishnet",
    image: "/Daniel-portfolio/fishnet.png",
    description:
      "Social platform for fishing enthusiasts built with Next.js and Firebase. Features an interactive map of fishing spots, a social feed, user profiles, admin panel, and multilingual support (PL/EN).",
    tech: ["Next.js", "React", "Firebase", "Leaflet", "REST API"],
    github: null,
    live: "https://fishnetpl.web.app",
  },
  {
    title: "Forkify",
    image: "/Daniel-portfolio/forkify.png",
    description:
      "Recipe search app with access to over 1,000,000 recipes via external API. Search by ingredient, adjust servings dynamically, bookmark favourites, and upload your own recipes. Built with MVC architecture.",
    tech: ["JavaScript", "REST API", "MVC", "Parcel", "OOP"],
    github: "https://github.com/DaielCode/forkify-danylo-kutsak",
    live: "https://daielcode.github.io/forkify-js/",
  },
  {
    title: "Mapty",
    image: "/Daniel-portfolio/mapty.png",
    description:
      "Workout tracker that uses the browser Geolocation API and Leaflet maps. Click anywhere on the map to log a running or cycling session. All workouts are persisted in localStorage and survive page refresh.",
    tech: ["JavaScript", "Leaflet", "Geolocation API", "OOP", "localStorage"],
    github: "https://github.com/DaielCode/mapty",
    live: "https://daielcode.github.io/mapty/",
  },
  {
    title: "React Portfolio",
    image: null,
    description:
      "This portfolio — built with React and Vite. Features scroll animations, a working contact form via EmailJS, responsive design with TailwindCSS, and is continuously updated as new projects are added.",
    tech: ["React", "Vite", "TailwindCSS", "EmailJS"],
    github: "https://github.com/DaielCode/Daniel-portfolio",
    live: "https://daielcode.github.io/Daniel-portfolio/",
  },
  {
    title: "Bankist App",
    image: null,
    description:
      "Frontend banking UI demonstrating advanced DOM manipulation — user login, money transfers, loan requests, account deletion, and a countdown auto-logout timer. Smooth scroll animations and dynamic UI updates.",
    tech: ["JavaScript", "DOM", "CSS", "Algorithms"],
    github: "https://github.com/DaielCode/BankApp",
    live: "https://daielcode.github.io/BankApp/",
  },
  {
    title: "Pig Game",
    image: null,
    description:
      "Classic two-player dice game. Roll to accumulate points, but hold before rolling a 1 or you lose your turn score. Demonstrates event handling, game state management, and dynamic UI updates.",
    tech: ["JavaScript", "DOM", "CSS"],
    github: "https://github.com/DaielCode/Pig-Game",
    live: "https://daielcode.github.io/Pig-Game/",
  },
  {
    title: "Guess My Number",
    image: null,
    description:
      "Number guessing game with a scoring system and highscore tracker. Demonstrates input validation, random number generation, and DOM manipulation.",
    tech: ["JavaScript", "DOM", "CSS"],
    github: "https://github.com/DaielCode/Guess-Number",
    live: "https://daielcode.github.io/Guess-Number/",
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4 w-full">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all flex flex-col"
              >
                {/* Скріншот (якщо є) */}
                {project.image && (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-40 object-cover rounded-lg mb-4"
                  />
                )}

                <h3 className="text-xl font-bold mb-2">{project.title}</h3>

                <p className="text-gray-400 mb-4 flex-1">{project.description}</p>

                {/* Технології */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Посилання */}
                <div className="flex flex-col sm:flex-row gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      View Project →
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      View in Browser →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
