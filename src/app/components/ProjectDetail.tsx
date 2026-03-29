import { motion } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";
import RoughBorder from "./RoughBorder";
import {
  ArrowLeft,
  ArrowLeftCircle,
  ArrowRightCircle,
  Play,
  Github,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { projects } from "./projectsData";

export function ProjectDetails() {
  const params = useParams();
  const projectId = params.id ? parseInt(params.id) : 1;

  const projectIndex = projects.findIndex((p) => p.id === projectId);
  const project = projects[projectIndex] || projects[0];

  const [currentScreenshot, setCurrentScreenshot] = useState(0);

  const thumbnailRef = useRef<HTMLDivElement>(null);

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

  // Reset bij project switch
  useEffect(() => setCurrentScreenshot(0), [projectId]);

  // Scroll thumbnails mee (nice UX 🔥)
  useEffect(() => {
    const container = thumbnailRef.current;
    if (!container) return;

    const activeThumb = container.children[currentScreenshot] as HTMLElement;
    if (activeThumb) {
      activeThumb.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [currentScreenshot]);

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
          {/* MAIN IMAGE */}
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden group">
            <ImageWithFallback
              src={project.screenshots[currentScreenshot]}
              className="w-full h-full object-cover"
            />
          </div>

<div className="mt-6 flex items-center gap-2">
  
<div className="relative w-6 h-[80px] flex items-center justify-center">
  <RoughBorder width={24} height={80} />
  <button
    onClick={prevScreenshot}
    className="absolute inset-0 w-full h-full flex items-center justify-center
                 text-neutral-800"
  >
    <ChevronLeft size={18} />
  </button>
</div>



  {/* THUMBNAILS */}
  <div
    ref={thumbnailRef}
    className="flex gap-3 overflow-x-auto scrollbar-hide"
  >
    {project.screenshots.map((img, index) => (
      <button
        key={index}
        onClick={() => setCurrentScreenshot(index)}
        className={`min-w-[110px] h-[80px] rounded-lg overflow-hidden border transition duration-300
          ${
            currentScreenshot === index
              ? "border-[#ff4500] scale-105"
              : "border-transparent opacity-60 hover:opacity-100"
          }`}
      >
        <ImageWithFallback
          src={img}
          className="w-full h-full object-cover"
        />
      </button>
    ))}
  </div>

  <div className="relative w-6 h-[80px] flex items-center justify-center">
    <RoughBorder width={24} height={80} />
    <button
      onClick={nextScreenshot}
      className="absolute inset-0 w-full h-full flex items-center justify-center
                 text-neutral-800"
    >
      <ChevronRight size={18} />
    </button>
  </div>

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
              API-integraties en component-based development.
            </p>
          </div>

          {/* BUTTONS + NAV */}
          <div className="mt-16 flex flex-col gap-8">
            {/* LINKS */}
            <div className="flex gap-6 flex-wrap">
              {project.links.live && (
                <a
                  href={project.links.live}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm uppercase tracking-widest border-b border-black/30 hover:border-[#ff4500] transition"
                >
                  <Play size={16} />
                  Launch
                </a>
              )}

              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm uppercase tracking-widest border-b border-black/30 hover:border-[#ff4500] transition"
                >
                  <Github size={16} />
                  Code
                </a>
              )}
            </div>

            {/* NAV */}
            <div className="flex justify-center mt-6">
              <div className="flex items-center gap-10">
                <span className="text-sm tracking-widest text-black-400">
                  {projectIndex + 1} / {totalProjects}
                </span>

                <div className="flex items-center gap-6">
                  <button onClick={prevProject} className="group">
                    <ArrowLeftCircle
                      size={32}
                      className="text-black-400 group-hover:text-[#ff4500] transition"
                    />
                  </button>

                  <button onClick={nextProject} className="group">
                    <ArrowRightCircle
                      size={32}
                      className="text-black-400 group-hover:text-[#ff4500] transition"
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