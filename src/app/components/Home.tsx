import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight, Code, Database, Palette, Zap } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { TypewriterText } from "./TypewriterText";
import jadImage from "./figma/Jad.jpg";

export function Home() {
  return (
    <div className="relative">
      <section className="min-h-[90vh] flex items-center justify-center px-4 py-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
                <span className="block text-[#ff4500] mt-2">Web Developer</span>
              </motion.h1>
              <TypewriterText
                text="Hi, ik ben Jad Saloum. Een  derdejaarsstudent software developer, woonachtig in Enschede, Nederland, en werkzaam aan full-stack projecten."
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
                  to="/projects"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#ff4500] text-white rounded-lg hover:bg-[#ff6a33] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ff4500]/50"
                >
                  Bekijk Mijn Werk
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-white text-black rounded-lg hover:bg-gray-200 backdrop-blur-sm transition-all duration-300 hover:scale-105 border-2 border-white"
                >
                  Neem Contact Op
                </Link>
              </motion.div>
            </motion.div>

            {/* Profile Image */}
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
                <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-black">
                  <ImageWithFallback
                    src={jadImage}
                    alt="Developer Portrait"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Floating Elements */}
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

      {/* Features Section */}
      {/* <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-bold text-white text-center mb-12"
          >
            Wat Ik Doe
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code size={40} />,
                title: "Web Development",
                description:
                  "Modern en responsive websites in React, C#, Javascript...",
              },
              {
                icon: <Palette size={40} />,
                title: "UI/UX Design",
                description:
                  "Gebruiksvriendelijke interfaces met aandacht voor detail.",
              },
              {
                icon: <Database size={40} />,
                title: "Databases inrichten",
                description:
                  "Databases ontwerpen, structureren en optimaliseren",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border-2 border-white/10 hover:border-[#ff4500] transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-[#ff4500]/20"
              >
                <div className="text-[#ff4500] mb-4 transition-transform duration-300 hover:scale-110">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}
