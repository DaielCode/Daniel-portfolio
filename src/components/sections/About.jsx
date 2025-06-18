import { RevealOnScroll } from "./RevealOnScroll";

export const About = () => {
  const frontendSkills = ["React", "TypeScript", "JavaScript", "TailwindCSS"];
  const backendSkills = ["Node.js", "MongoDB", "AWS"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              Passionate developer with expertise in building scalable web
              applications and creating innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 ">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bode mb-4">Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>Computer Science</strong> - College of ChNU (September
                  2021 - June 2023)
                </li>
                <li>
                  <strong> B.S. in Computer Science</strong> - University of
                  Lodz (October 2023 - present)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bode mb-4">Courses</h3>
              <ul className="space-y-4">
                <li className="flex flex-col">
                  <div className="flex items-baseline">
                    <span className="text-white mr-2">•</span>

                    <a
                      href="https://www.udemy.com/share/101WeY3@BHzvzTupx5VXyolzhRLa5JAcsHTmKoRWpZJQMmX5kCLn06x1F5LoMdpSwbHF2KSRig==/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent
             hover:underline hover:decoration-blue-500 underline-offset-2 transition"
                    >
                      Complete JavaScript Course 2025{" "}
                    </a>

                    <a
                      href="https://www.google.com/aclk?sa=l&ai=DChsSEwjK2ry3qPuNAxUZpoMHHZ5wM7wYACICCAEQABoCZWY&co=1&gclid=CjwKCAjwx8nCBhAwEiwA_z__0wC2BAhChGxk-k7x31SlGwNrQEBujrMTDN7MiSxlK5-fsGDl3XJMbBoChPkQAvD_BwE&category=acrcp_v1_48&sig=AOD64_0QQh0__T_oIhNVkS8ddSe-2IMGMQ&q&adurl&ved=2ahUKEwjh97a3qPuNAxXRiP0HHQtxAK8Q0Qx6BAgKEAE"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-sm text-gray-400 hover:text-white hover:underline"
                    >
                      (Udemy)
                    </a>
                  </div>
                  <p className="text-sm text-gray-300 mt-1 ml-5">
                    Some skills will be shown here
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
