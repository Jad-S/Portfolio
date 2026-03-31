import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router";
import { SiSharp, SiReact, SiMysql, SiTailwindcss } from "react-icons/si";
import {
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  Play,
  Github,
} from "lucide-react";

import RoughBorder from "./RoughBorder";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { projects } from "./projectsData";

export function ProjectDetails() {
  const params = useParams();
  const projectId = params.id ? parseInt(params.id) : 1;

  const projectIndex = projects.findIndex((p) => p.id === projectId);
  const project = projects[projectIndex] || projects[0];

  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const thumbnailRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  

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
    setDirection(Math.random() > 0.5 ? "left" : "right");
    setCurrentScreenshot((prev) =>
      prev === project.screenshots.length - 1 ? 0 : prev + 1,
    );
  };

  const prevScreenshot = () => {
    setDirection(Math.random() > 0.5 ? "left" : "right");
    setCurrentScreenshot((prev) =>
      prev === 0 ? project.screenshots.length - 1 : prev - 1,
    );
  };

  useEffect(() => setCurrentScreenshot(0), [projectId]);

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

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const resize = () => {
      setSize({
        w: el.offsetWidth,
        h: el.offsetHeight,
      });
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  const variants = {
    enter: (dir: "left" | "right") => ({
      x: dir === "left" ? window.innerWidth : -window.innerWidth,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: "left" | "right") => ({
      x: dir === "left" ? -window.innerWidth : window.innerWidth,
      opacity: 0,
    }),
  };

  return (
    <div className="min-h-screen flex justify-center items-center py-16 px-4">
      
      {/* 🔥 ZOOM WRAPPER */}
      <div style={{ transform: "scale(0.9)", transformOrigin: "top center", width: "100%" }}>
        
        {/* ✅ CENTERED CONTAINER */}
        <div ref={containerRef} className="relative w-full max-w-[1400px] mx-auto">
          
          {/* ROUGH BORDER */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {size.w > 0 && size.h > 0 && (
              <RoughBorder width={size.w} height={size.h} />
            )}
          </div>

          {/* CONTENT */}
          <div className="relative z-10 bg-white px-6 lg:px-16 py-24 rotate-[0.4deg]">

            <div className="absolute top-8 right-[48px] z-20 w-10 h-10">
              <div className="relative w-full h-full flex items-center justify-center">
                
                {/* ROUGH BORDER */}
                <RoughBorder width={40} height={40} />

                {/* BUTTON */}
                <Link
                  to="/"
                  className="absolute inset-0 flex items-center justify-center group"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    className="transition-all duration-200 group-hover:scale-110 group-hover:text-[#ff4500]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </Link>

              </div>
            </div>

            <div className="grid lg:grid-cols-12 gap-16 items-start">

              {/* LEFT */}
              <div className="lg:col-span-7">
                {/* MAIN IMAGE */}
                <div className="relative aspect-[16/10] overflow-hidden group">
                  <AnimatePresence mode="sync" custom={direction}>
                    <motion.div
                      key={currentScreenshot}
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 30,
                      }}
                      className="absolute inset-0"
                    >
                      <ImageWithFallback
                        src={project.screenshots[currentScreenshot]}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* THUMBNAILS */}
                <div className="mt-6 flex items-center gap-2">

                  <div className="relative w-6 h-[80px] flex items-center justify-center">
                    <RoughBorder width={24} height={80} />
                    <button
                      onClick={prevScreenshot}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <ChevronLeft size={18} />
                    </button>
                  </div>

                  <div
                    ref={thumbnailRef}
                    className="flex gap-3 overflow-x-auto scrollbar-hide"
                  >
                    {project.screenshots.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentScreenshot(index)}
                        className={`min-w-[110px] h-[80px] overflow-hidden border transition duration-300
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
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>

                </div>
              </div>

              {/* RIGHT */}
              <div className="lg:col-span-5 flex flex-col justify-between">
                <div>
                  <motion.h1
                    className="text-[#ff4500] font-light mb-8 leading-tight"
                    style={{
                      fontSize: "clamp(2rem, 3.5vw, 4.5rem)",
                    }}
                  >
                    {project.title}
                    <span className="text-black">.</span>
                  </motion.h1>

                  <p className="text-black-600 text-lg leading-relaxed max-w-lg mb-6 whitespace-pre-line">
                    {project.about}
                  </p>
                </div>

                <div className="flex gap-3 items-center mt-4">
                  {project.technologies?.map((Icon, index) => (
                    <div
                      key={index}
                      className="w-12 h-12 rounded-full border border-black flex items-center justify-center bg-white group transition"
                    >
                      <Icon
                        className="text-black group-hover:text-[#ff4500] transition"
                        size={22}
                      />
                    </div>
                  ))}
                </div>

                {/* BUTTONS */}
                <div className="mt-16 flex flex-col gap-8">

                  <div className="flex gap-6 flex-wrap">
                    {project.links.live && (
                      <a
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="inline-flex items-center gap-2 text-sm uppercase tracking-widest border-b border-black/30 opacity-50 cursor-not-allowed pointer-events-none"
                      >
                        <Play size={16} />
                        Launch (website is currently down...SORRY)
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
                        <div className="relative w-12 h-12 flex items-center justify-center">
                          <RoughBorder width={48} height={48} />

                          <button
                            onClick={prevProject}
                            className="absolute inset-0 flex items-center justify-center group"
                          >
                            <ArrowLeft
                              size={28}
                              className="text-black-400 group-hover:text-[#ff4500] transition-all duration-200 group-hover:scale-110"
                            />
                          </button>
                        </div>

                        <div className="relative w-12 h-12 flex items-center justify-center">
                          <RoughBorder width={48} height={48} />

                          <button
                            onClick={nextProject}
                            className="absolute inset-0 flex items-center justify-center group"
                          >
                            <ArrowRight
                              size={28}
                              className="text-black-400 group-hover:text-[#ff4500] transition-all duration-200 group-hover:scale-110"
                            />
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}