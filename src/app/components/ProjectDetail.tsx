import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router";
import {
  ArrowLeft,
  ArrowLeftCircle,
  ArrowRightCircle,
  ArrowRight,
  Play,
  Github,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { projects } from "./projectsData";

// /* SPLIT TEXT (FIXED - NO WRAPPING BUG) */
// type SplitTextProps = {
//   text: string;
// };

// const SplitText = ({ text }: SplitTextProps) => {
//   const letters = text.split("");
//   const middle = letters.length / 2;

//   return (
//     <span className="inline-flex whitespace-nowrap">
//       {letters.map((char, i) => {
//         const offset = i - middle;

//         return (
//           <motion.span
//             key={i}
//             className="inline-block"
//             variants={{
//               hover: {
//                 x: offset * 3,
//               },
//             }}
//             transition={{
//               type: "spring",
//               stiffness: 200,
//               damping: 15,
//             }}
//           >
//             {char === " " ? "\u00A0" : char}
//           </motion.span>
//         );
//       })}
//     </span>
//   );
// };

export function ProjectDetails() {
  const params = useParams();
  const projectId = params.id ? parseInt(params.id) : 1;

  const projectIndex = projects.findIndex((p) => p.id === projectId);
  const project = projects[projectIndex] || projects[0];

  const [currentScreenshot, setCurrentScreenshot] = useState(0);

  const totalProjects = projects.length;

  const nextProject = () => {
    const next = (projectIndex + 1) % totalProjects;
    window.location.href = `/project/${projects[next].id}`;
  };

  const prevProject = () => {
    const prev = (projectIndex - 1 + totalProjects) % totalProjects;
    window.location.href = `/project/${projects[prev].id}`;
  };

  const nextScreenshot = () => {
    setCurrentScreenshot((prev) =>
      prev === project.screenshots.length - 1 ? 0 : prev + 1,
    );
  };

  const prevScreenshot = () => {
    setCurrentScreenshot((prev) =>
      prev === 0 ? project.screenshots.length - 1 : prev - 1,
    );
  };

  useEffect(() => setCurrentScreenshot(0), [projectId]);

  return (
    <div className="min-h-screen text-black px-6 lg:px-16 py-24">
      {/* BACK */}
      <Link
        to="/"
        className="text-sm uppercase tracking-widest text-black-400 hover:text-gray-600 mb-16 inline-flex items-center gap-2"
      >
        <ArrowLeft size={16} />
        Terug
      </Link>

      {/* MAIN LAYOUT */}
      <div className="grid lg:grid-cols-12 gap-16 items-start">
        {/* LEFT IMAGE */}
        <div className="lg:col-span-7">
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden group">
            <ImageWithFallback
              src={project.screenshots[currentScreenshot]}
              className="w-full h-full object-cover"
            />

            {/* SLIDER ARROWS */}
            <button
              onClick={prevScreenshot}
              className="absolute left-0 top-0 h-full w-16 flex items-center justify-center opacity-30 group-hover:opacity-100 transition"
            >
              <ArrowLeft size={26} />
            </button>

            <button
              onClick={nextScreenshot}
              className="absolute right-0 top-0 h-full w-16 flex items-center justify-center opacity-30 group-hover:opacity-100 transition"
            >
              <ArrowRight size={26} />
            </button>
          </div>
        </div>

        {/* RIGHT TEXT */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            {/* TITLE */}
            <motion.h1
              className="text-[#ff4500] font-light mb-8 cursor-pointer leading-tight"
              style={{
                fontSize: "clamp(2rem, 3.5vw, 4.5rem)",
                maxWidth: "100%",
              }}
              whileHover="hover"
            >
              {project.title}
              <span className="text-black">.</span>
            </motion.h1>

            <p className="text-black-600 text-lg leading-relaxed max-w-lg mb-6 whitespace-pre-line">
              {project.about}
            </p>

            <p className="text-black-400 text-base leading-relaxed max-w-lg">
              Dit project was een belangrijk onderdeel van mijn ontwikkeling als
              developer. Ik heb hier gewerkt met moderne technologieën,
              API-integraties en component-based development. Tijdens het bouwen
              heb ik aandacht besteed aan performance, UX en schaalbaarheid.
              Daarnaast heb ik geleerd hoe je een project van begin tot eind
              structureert en onderhoudt.
            </p>
          </div>

          {/* BUTTONS + NAV */}
          <div className="mt-16 flex flex-col gap-8">
            {/* LAUNCH */}
            <div className="flex gap-6 flex-wrap">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm uppercase tracking-widest border-b border-white/30 hover:border-[#ff4500] transition"
                >
                  <Play size={16} />
                  Launch
                </a>
              )}

              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm uppercase tracking-widest border-b border-white/30 hover:border-[#ff4500] transition"
                >
                  <Github size={16} />
                  Code
                </a>
              )}
            </div>

            {/* CENTERED NAV (COUNTER + ARROWS) */}
            <div className="flex justify-center mt-6">
              <div className="flex items-center gap-10">
                {/* COUNTER */}
                <span className="text-sm tracking-widest text-black-400">
                  {projectIndex + 1} / {totalProjects}
                </span>

                {/* ARROWS */}
                <div className="flex items-center gap-6">
                  <button onClick={prevProject} className="group">
                    <ArrowLeftCircle
                      size={32}
                      className="text-black-400 group-hover:text-[#ff4500] transition duration-300"
                    />
                  </button>

                  <button onClick={nextProject} className="group">
                    <ArrowRightCircle
                      size={32}
                      className="text-black-400 group-hover:text-[#ff4500] transition duration-300"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
