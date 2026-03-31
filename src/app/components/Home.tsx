import { motion } from "motion/react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { TypewriterText } from "./TypewriterText";
import { Projects } from "./Projects";
import RoughBorder from "./RoughBorder";
import { useEffect, useRef, useState } from "react";
import rough from "roughjs";

import jadImage from "./ui/PersonalFoto.png";

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

export function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* HERO SECTION */}
      <section className="min-h-[90vh] flex items-center justify-center px-4 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT */}
            <motion.div
              className="lg:ml-16"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Decorative rough circles around text */}
              <div className="relative">
                <div className="absolute -top-8 -left-8 w-20 h-20 z-0 opacity-40">
                  {/* <RoughCircle size={80} seed={30} /> */}
                </div>
                <div className="absolute -bottom-6 -right-4 w-16 h-16 z-0 opacity-30">
                  {/* <RoughCircle size={64} seed={40} /> */}
                </div>

                <motion.h1
                  className="text-5xl sm:text-7xl font-bold text-gray-900 dark:text-white mb-3 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <span className="block text-gray-900 dark:text-white mt-2 text-l">
                    Hi, my name
                    <span className="block mt-6 font-bold">
                      is<span className="text-[#ff4500]"> Jad</span>.
                    </span>
                  </span>
                </motion.h1>
              </div>

              <br />

              <h1 className="text-xl text-gray-800 dark:text-gray-100 mb-8">
                I am 20 years old and a{" "}
                <span className="font-bold text-[#ff4500]">
                  third-year software development student
                </span>
                , based in Enschede, the Netherlands.
              </h1>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-6"
              >
                <div className="relative inline-block group">
                  <div className="absolute inset-0 -m-2">
                    <RoughBorder 
                      width={160} 
                      height={48} 
                      roughness={2} 
                      bowing={1.5} 
                      seed={50}
                      stroke="#ff4500"
                      strokeWidth={2}
                      fill="transparent"
                    />
                  </div>
                  <Link
                    to="/about"
                    className="relative z-10 text-lg text-gray-900 dark:text-white group-hover:text-[#ff4500] transition-colors px-4 py-2 inline-block"
                  >
                    Learn More...
                  </Link>
                </div>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              ></motion.div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="w-full max-w-md mx-auto">

                {/* Image with rough border */}
                <div className="relative">
                  {/* Decorative rough circles around image */}
                  <div className="absolute -top-10 -right-8 w-24 h-24 z-0">
                    <RoughCircle size={96} seed={60} />
                  </div>
                  <div className="absolute -bottom-8 -left-6 w-20 h-20 z-0 opacity-50">
                    <RoughCircle size={80} seed={70} />
                  </div>

                  {/* Image border */}
                  <div className="relative p-2">
                    <ImageWithFallback
                      src={jadImage}
                      alt="Developer Portrait"
                      className="w-full h-full object-cover relative z-10"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Scroll Indicator */}
      <div className="flex flex-col items-center my-12">
        <div className="text-[#ff4500] text-sm tracking-[0.3em] mb-4">S C R O L L</div>
        <div className="relative w-[2px] h-40 bg-gray-300 dark:bg-gray-700">
          <motion.div 
            className="absolute top-0 left-0 w-full bg-[#ff4500]"
            style={{ height: `${scrollProgress}%` }}
          />
        </div>
      </div>

      {/* PROJECTS SECTION */}
      <section id="projects">
        <Projects />
      </section>
    </div>
  );
}
