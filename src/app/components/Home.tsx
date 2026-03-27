import { motion } from "motion/react";
import { Link } from "react-router";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { TypewriterText } from "./TypewriterText";
import { Projects } from "./Projects";

import jadImage from "./figma/Jad.jpg";

export function Home() {
  return (
    <div className="relative">
      {/* HERO SECTION */}
      <section className="min-h-[90vh] flex items-center justify-center px-4 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-5xl sm:text-7xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="block text-[#ff4500] mt-2">
                  Web Developer
                </span>
              </motion.h1>

              <TypewriterText
                text="Hi, ik ben Jad Saloum. Een derdejaarsstudent software developer, woonachtig in Enschede, Nederland, en werkzaam aan full-stack projecten."
                className="text-xl text-gray-300 mb-8"
                delay={0.4}
              />

              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#ff4500] text-white rounded-lg hover:bg-[#ff6a33] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ff4500]/50"
                >
                  Huur mij in...
                  
                </Link>

              </motion.div>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative w-full aspect-square max-w-md mx-auto">
                
                {/* Animated Border */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ff4500] via-orange-600 to-[#ff4500]"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />

                {/* Image */}
                <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-black">
                  <ImageWithFallback
                    src={jadImage}
                    alt="Developer Portrait"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Labels */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-[#ff4500] text-white px-6 py-3 rounded-full shadow-lg"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <span className="font-bold">Frontend</span>
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 bg-white text-black px-6 py-3 rounded-full shadow-lg border-2 border-[#ff4500]"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
                >
                  <span className="font-bold">Backend</span>
                </motion.div>

              </div>
            </motion.div>
          </div>
        </div>
      </section>

        <div className="flex flex-col items-center">
    <div className="text-gray-400 text-sm mb-2 -ml-165">S  C  R  O L  L</div>

    {/* Lijn */}
    <div className="w-[2px] h-79 bg-gray-500 -ml-170"></div>
  </div>
<br /><br /><br />
<div className="flex flex-col items-end gap-12 mr-80 -mb-90">

  
  <div className="h-[2px] w-70 bg-[#ff4500]"></div>

  <div className="h-[2px] w-70 bg-white"></div>

  <div className="h-[2px] w-70 bg-[#ff4500]"></div>

  <div className="h-[2px] w-70 bg-white"></div>

</div>
<br /><br /><br />
<br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

      {/* PROJECTS SECTION */}
      <section id="projects">
        <Projects />
      </section>
    </div>
  );
}