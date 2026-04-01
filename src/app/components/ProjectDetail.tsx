import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { Link, useParams } from "react-router";
import {
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  Play,
  Github,
  X,
} from "lucide-react";

import RoughBorder from "./RoughBorder";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { projects } from "./projectsData";
import rough from "roughjs";

function RoughCircle({ size, seed, filled }: { size: number; seed: number; filled?: boolean }) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;
    const svg = svgRef.current;
    while (svg.firstChild) svg.removeChild(svg.firstChild);

    const rc = rough.svg(svg);
    const node = rc.circle(size / 2, size / 2, size - 4, {
      stroke: "#ff4500",
      strokeWidth: 3,
      roughness: 2,
      seed: seed,
      fill: filled ? "#ff4500" : "none",
      fillStyle: filled ? "solid" : undefined,
    });

    svg.appendChild(node);
  }, [size, seed, filled]);

  return <svg ref={svgRef} width={size} height={size} className="absolute inset-0" />;
}

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
    setDirection("right");
    setCurrentScreenshot((prev) =>
      prev === project.screenshots.length - 1 ? 0 : prev + 1,
    );
  };

  const prevScreenshot = () => {
    setDirection("left");
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
      x: dir === "left" ? -300 : 300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: "left" | "right") => ({
      x: dir === "left" ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-8 sm:py-12 lg:py-16 px-4 sm:px-6 relative overflow-x-hidden">
      
      {/* Decorative rough circles - Hidden on mobile */}
      <div className="hidden xl:block absolute top-32 left-12 w-24 h-24 opacity-20 pointer-events-none">
        <RoughCircle size={96} seed={300} />
      </div>
      <div className="hidden xl:block absolute top-48 right-20 w-32 h-32 opacity-15 pointer-events-none">
        <RoughCircle size={128} seed={310} />
      </div>
      <div className="hidden xl:block absolute bottom-32 left-32 w-20 h-20 opacity-25 pointer-events-none">
        <RoughCircle size={80} seed={320} />
      </div>
      <div className="hidden xl:block absolute bottom-48 right-16 w-28 h-28 opacity-20 pointer-events-none">
        <RoughCircle size={112} seed={330} />
      </div>

      {/* Main Container */}
      <div className="w-full max-w-6xl mx-auto">
        <div ref={containerRef} className="relative w-full">
          
          {/* ROUGH BORDER - Responsive */}
          {size.w > 0 && size.h > 0 && (
            <div className="absolute inset-0 z-0 pointer-events-none">
              <RoughBorder 
                width={size.w} 
                height={size.h}
                roughness={2.5}
                bowing={2}
                stroke="#ff4500"
                strokeWidth={3}
              />
            </div>
          )}

          {/* CONTENT - White background */}
          <div className="relative z-10 bg-white p-6 sm:p-8 lg:p-16 rotate-[0.4deg]">
            
            {/* Close button - Top right */}
<div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 z-20 w-10 h-10 -translate-y-2 sm:translate-y-0">
                <div className="relative w-full h-full flex items-center justify-center group">
                <RoughBorder 
                  width={40} 
                  height={40}
                  roughness={2}
                  bowing={1}
                  seed={340}
                  stroke="#ff4500"
                  strokeWidth={2}
                />
                <Link
                  to="/"
                  className="absolute inset-0 flex items-center justify-center z-10"
                >
                  <X 
                    size={16} 
                    className="transition-all duration-200 group-hover:scale-110 group-hover:text-[#ff4500]"
                  />
                </Link>
              </div>
            </div>

            {/* Content grid - Stack on mobile, side-by-side on desktop */}
            <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-12 xl:gap-16 mt-8 sm:mt-0">
              
              {/* LEFT COLUMN - Image Gallery */}
              <div className="lg:col-span-7 w-full">
                
                {/* MAIN IMAGE */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                      key={currentScreenshot}
                      custom={direction}
                      variants={variants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
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

                {/* THUMBNAILS ROW */}
                <div className="mt-4 flex items-center gap-2 w-full">
                  {/* Left arrow */}
                  <div className="relative w-8 h-16 flex items-center justify-center flex-shrink-0">
                    <RoughBorder width={32} height={64} bowing={0} roughness={1} />
                    <button
                      onClick={prevScreenshot}
                      className="absolute inset-0 flex items-center justify-center z-10 hover:text-[#ff4500] transition"
                      aria-label="Previous screenshot"
                    >
                      <ChevronLeft size={18} />
                    </button>
                  </div>

                  {/* Thumbnails container - scrollable */}
                  <div
                    ref={thumbnailRef}
                    className="flex-1 flex gap-2 overflow-x-auto scrollbar-hide"
                    style={{ scrollBehavior: 'smooth' }}
                  >
                    {project.screenshots.map((img, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentScreenshot(index)}
                        className={`min-w-[80px] w-[80px] h-[60px] overflow-hidden border-2 transition-all duration-300 flex-shrink-0 ${
                          currentScreenshot === index
                            ? "border-[#ff4500] scale-105 shadow-lg"
                            : "border-gray-300 opacity-60 hover:opacity-100 hover:border-[#ff4500]"
                        }`}
                      >
                        <ImageWithFallback
                          src={img}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>

                  {/* Right arrow */}
                  <div className="relative w-8 h-16 flex items-center justify-center flex-shrink-0">
                    <RoughBorder width={32} height={64} bowing={0} roughness={1} />
                    <button
                      onClick={nextScreenshot}
                      className="absolute inset-0 flex items-center justify-center z-10 hover:text-[#ff4500] transition"
                      aria-label="Next screenshot"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN - Project Info */}
              <div className="lg:col-span-5 w-full flex flex-col">
                
                {/* Title */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light text-[#ff4500] mb-4 lg:mb-6 leading-tight break-words">
                  {project.title}
                  <span className="text-black">.</span>
                </h1>

                {/* Description */}
                <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed mb-6 break-words">
                  {project.about}
                </p>

                {/* Technologies */}
                <div className="flex gap-3 items-center mb-8 flex-wrap">
                  {project.technologies?.map((Icon, index) => (
                    <div
                      key={index}
                      className="relative w-12 h-12 group flex-shrink-0"
                    >
                      <RoughCircle size={48} seed={380 + index * 5} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon
                          className="text-black group-hover:text-[#ff4500] transition"
                          size={22}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 sm:gap-6 mb-8 flex-wrap">
                  {project.links.live && (
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-widest border-b border-black/30 opacity-50 cursor-not-allowed"
                    >
                      <Play size={14} />
                      Launch (down)
                    </a>
                  )}

                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-widest border-b border-black/30 hover:border-[#ff4500] transition"
                    >
                      <Github size={14} />
                      Code
                    </a>
                  )}
                </div>

                {/* Navigation - Project counter and arrows */}
                <div className="mt-auto pt-6">
                  <div className="flex items-center justify-center gap-8">
                    
                    {/* Counter */}
                    <span className="text-sm tracking-widest text-gray-600">
                      {projectIndex + 1} / {totalProjects}
                    </span>

                    {/* Navigation arrows */}
                    <div className="flex items-center gap-4">
                      {/* Previous project */}
                      <div className="relative w-12 h-12 flex items-center justify-center">
                        <RoughBorder width={48} height={48} />
                        <button
                          onClick={prevProject}
                          className="absolute inset-0 flex items-center justify-center group"
                          aria-label="Previous project"
                        >
                          <ArrowLeft
                            size={24}
                            className="text-gray-600 group-hover:text-[#ff4500] transition-all duration-200 group-hover:scale-110"
                          />
                        </button>
                      </div>

                      {/* Next project */}
                      <div className="relative w-12 h-12 flex items-center justify-center">
                        <RoughBorder width={48} height={48} />
                        <button
                          onClick={nextProject}
                          className="absolute inset-0 flex items-center justify-center group"
                          aria-label="Next project"
                        >
                          <ArrowRight
                            size={24}
                            className="text-gray-600 group-hover:text-[#ff4500] transition-all duration-200 group-hover:scale-110"
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
  );
}
