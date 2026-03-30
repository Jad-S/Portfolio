import { motion } from "motion/react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { TypewriterText } from "./TypewriterText";
import { Projects } from "./Projects";

import jadImage from "./ui/PersonalFoto.png";

export function Home() {
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
              <motion.h1
                className="text-5xl sm:text-7xl font-bold text-black mb-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="block text-black mt-2 text-l">
                  Hi, my name
                  <span className="block mt-6 font-bold">
                    is<span className="text-[#ff4500]"> Jad</span>.
                  </span>
                </span>
              </motion.h1>
              <br />

              <h1 className="text-xl text-black-600 mb-8">
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
                className="mt-6 text-black-400 text-sm"
              >
<Link
  to="/about"
  className="text-lg hover:text-gray-600 transition-colors"
>
  Learn More...
</Link>
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
                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />

                {/* Image */}
                <div>
                  <ImageWithFallback
                    src={jadImage}
                    alt="Developer Portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="flex flex-col items-center">
        <div className="text-[#ff4500] text-sm -ml-165">S C R O L L</div>
<br />
        {/* Line */}
        <div className="w-[2px] h-79 bg-[#ff4500] -ml-170"></div>
      </div>

      {/* PROJECTS SECTION */}
      <section id="projects">
        <Projects />
      </section>
    </div>
  );
}