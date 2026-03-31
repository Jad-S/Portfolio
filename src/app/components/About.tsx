import { motion } from "motion/react";
import { SiSharp, SiReact, SiMysql, SiTailwindcss, SiHtml5, SiFigma } from "react-icons/si";
import RoughBorder from "./RoughBorder";
import { useEffect, useRef, useState } from "react";
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

export function About() {
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

  const fullText = (
    <>
      I am a <span className="text-[#ff4500] font-semibold">designer</span>,{" "}
      <span className="text-[#ff4500] font-semibold">Frontend</span> and{" "}
      <span className="text-[#ff4500] font-semibold">Backend</span>{" "}
      <span className="text-[#ff4500] font-semibold">developer</span> who is still growing<span className="text-[#ff4500]">...</span>
      <br />
      <br />
      I can work well with <span className="text-[#ff4500] font-semibold">HTML</span>,{" "}
      <span className="text-[#ff4500] font-semibold">CSS</span>,{" "}
      <span className="text-[#ff4500] font-semibold">Javascript</span> and{" "}
      <span className="text-[#ff4500] font-semibold">C#</span>. I am also good at setting up
      databases. I enjoy working on both frontend and backend, but my preference
      is usually backend. I also really enjoy building things from A to Z. I
      don't just focus on whether something works, but also on how it looks.
      <br />
      <br />
      I am someone who has an eye for{" "}
      <span className="text-[#ff4500] font-semibold">detail</span> and values that things look
      clean and well polished.{" "}
      <span className="text-[#ff4500] font-semibold">Design</span> plays a big role for me; I
      enjoy thinking about how something can be not only functional, but also
      visually appealing.
      <br />
      My interest in <span className="text-[#ff4500] font-semibold">computers</span> and{" "}
      <span className="text-[#ff4500] font-semibold">technology</span> started at a young age,
      and over the years it has only grown. It made me dive deeper into building
      complete and well thought-out{" "}
      <span className="text-[#ff4500] font-semibold">solutions</span>.
      <br />
      <br />
      <div className="flex flex-col items-center my-12">
        <div className="text-gray-600 dark:text-gray-400 text-sm tracking-[0.3em] mb-4">S C R O L L</div>
        <div className="relative w-[2px] h-40 bg-gray-300 dark:bg-gray-700">
          <motion.div 
            className="absolute top-0 left-0 w-full bg-[#ff4500]"
            style={{ height: `${scrollProgress}%` }}
          />
        </div>
      </div>
      <br />
      In my free time I like being active with{" "}
      <span className="text-[#ff4500] font-semibold">sports</span> and{" "}
      <span className="text-[#ff4500] font-semibold">gym</span>. I enjoy{" "}
      <span className="text-[#ff4500] font-semibold">swimming</span> and spending time in{" "}
      <span className="text-[#ff4500] font-semibold">nature</span>, especially in{" "}
      <span className="text-[#ff4500] font-semibold">parks</span>.
      <br />
      <br />
      I often go to <span className="text-[#ff4500] font-semibold">
        Ledeboerpark
      </span>{" "}
      in Enschede. It is a calm and green park where I like to walk and unwind.
      Besides that, I am a true{" "}
      <span className="text-[#ff4500] font-semibold">Cinephile</span>.
      <br />
      <br />
    </>
  );

  return (
    <div className="min-h-screen py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">

        {/* Header with rough circles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-left mb-20"
        >
          <div className="relative inline-block">
            <h1 className="text-6xl sm:text-7xl font-black text-gray-900 dark:text-white mb-4 ml-4 relative z-10">
              About me
              <span className="text-[#ff4500]">.</span>
              <span className="text-[#ff4500]">.</span>
              <span className="text-[#ff4500]">.</span>
            </h1>
            {/* Decorative rough circles */}
            <div className="absolute -top-4 -right-12 w-16 h-16 z-0">
              <RoughCircle size={64} seed={10} />
            </div>
            <div className="absolute -bottom-2 left-0 w-12 h-12 z-0 opacity-50">
              <RoughCircle size={48} seed={20} />
            </div>
          </div>
        </motion.div>

        {/* Main about text with rough border - NO BACKGROUND */}
        <div className="mb-24 mr-60">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="relative p-12">
              <div className="absolute inset-0">
                <RoughBorder 
                  width={896} 
                  height={900} 
                  strokeWidth={3} 
                  roughness={2.5} 
                  bowing={1.5} 
                  seed={100}
                  stroke="#ff4500"
                  fill="transparent"
                />
              </div>
              <motion.p className="text-gray-800 dark:text-gray-100 text-lg leading-relaxed relative z-10">
                {fullText}
              </motion.p>
            </div>

            {/* Floating decorative elements */}
            <motion.div 
              className="absolute -top-6 -left-6 w-20 h-20 bg-[#ff4500]/10 rounded-full"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div 
              className="absolute -bottom-8 -right-8 w-16 h-16 bg-[#ff4500]/10 rounded-full"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
          </motion.div>
        </div>

        {/* Decorative divider */}
        <div className="relative my-20">
          <div className="w-full h-[2px] bg-gray-300 dark:bg-gray-700" />
        </div>

        {/* Tech & Languages Timeline */}
        <div className="mb-20 max-w-5xl mx-auto relative">
          <motion.h2 
            className="text-5xl font-bold text-gray-900 dark:text-white mb-20 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Tech <span className="text-[#ff4500]">&</span> Languages
          </motion.h2>

          {/* Center timeline line */}
          <div className="absolute left-1/2 top-24 h-[calc(100%-100px)] w-[3px] bg-gray-300 dark:bg-gray-700 -translate-x-1/2" />

          <div className="space-y-32">
            {[
              {
                title: "React",
                icon: SiReact,
                text: "I use React to build interactive stuff. I like how you can split everything into components and still keep it feeling smooth.",
                side: "left",
              },
              {
                title: "C#",
                icon: SiSharp,
                text: "I mainly use C# for backend work. It just feels logical to me and helps me build things in a structured way.",
                side: "right",
              },
              {
                title: "MySQL",
                icon: SiMysql,
                text: "I use MySQL to store and manage data. I like that everything is structured and easy to work with.",
                side: "left",
              },
              {
                title: "HTML & CSS",
                icon: SiHtml5,
                text: "This is the base of everything. I use it to build layouts and make sure things look clean and well put together.",
                side: "right",
              },
              {
                title: "Tailwind",
                icon: SiTailwindcss,
                text: "I use Tailwind because it lets me move fast. I can focus more on building instead of thinking about styling too much.",
                side: "left",
              },
              {
                title: "Figma",
                icon: SiFigma,
                text: "I use Figma to think through designs before I start coding. It helps me get a clear picture of what I'm building.",
                side: "right",
              },
            ].map((item, i) => {
              const isLeft = item.side === "left";
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="relative"
                >
                  <div className={`flex ${isLeft ? "justify-start pr-[55%]" : "justify-end pl-[55%]"}`}>
                    <div className="relative w-[400px] h-[240px] group hover:scale-105 transition-transform duration-300 flex items-center justify-center">
                      <div className="absolute inset-0">
                        <RoughBorder 
                          width={400} 
                          height={240} 
                          strokeWidth={2.5} 
                          roughness={2} 
                          bowing={1} 
                          seed={300 + i * 10}
                          stroke="#ff4500"
                          fill="transparent"
                        />
                      </div>
                      
                      <div className="relative z-10 flex flex-col items-center text-center px-12 py-8 w-full h-full justify-center">
                        {/* Icon with rough circle */}
                        <div className="relative inline-block mb-3">
                          <Icon size={40} className="text-[#ff4500] relative z-10" />
                          <div className="absolute inset-0 -m-2">
                            <RoughCircle size={56} seed={400 + i * 10} />
                          </div>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                          {item.title}
                        </h3>

                        <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-sm">
                          {item.text}
                        </p>
                      </div>

                      {/* Decorative corner elements */}
                      <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[#ff4500] opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[#ff4500] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>

                  {/* Timeline dot with rough circle */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 z-20">
                    <RoughCircle size={32} seed={500 + i * 5} filled={true} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Fun facts section with rough cards - NO BACKGROUND */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32"
        >
 

          {/* Fun hand-drawn arrow pointing to facts */}

          </motion.div>
      </div>
    </div>
  );
}