import { motion } from "motion/react";
import {
  SiSharp,
  SiReact,
  SiMysql,
  SiTailwindcss,
  SiHtml5,
  SiFigma,
  SiJavascript,
} from "react-icons/si";
import RoughBorder from "./RoughBorder";
import { useEffect, useRef, useState } from "react";
import rough from "roughjs";

function RoughCircle({
  size,
  seed,
  filled,
}: {
  size: number;
  seed: number;
  filled?: boolean;
}) {
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

  return (
    <svg ref={svgRef} width={size} height={size} className="absolute inset-0" />
  );
}

export function About() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / scrollHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dynamic sizing for main text box
  const textBoxRef = useRef<HTMLDivElement>(null);
  const [textBoxSize, setTextBoxSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!textBoxRef.current) return;

    const update = () => {
      const rect = textBoxRef.current!.getBoundingClientRect();
      setTextBoxSize({ width: rect.width, height: rect.height });
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(textBoxRef.current);
    window.addEventListener("resize", update);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  const fullText = (
    <>
      I am a <span className="text-[#ff4500] font-semibold">designer</span>,{" "}
      <span className="text-[#ff4500] font-semibold">Frontend</span> and{" "}
      <span className="text-[#ff4500] font-semibold">Backend</span>{" "}
      <span className="text-[#ff4500] font-semibold">developer</span> who is
      still growing<span className="text-[#ff4500]">...</span>
      <br />
      <br />I can work well with{" "}
      <span className="text-[#ff4500] font-semibold">HTML</span>,{" "}
      <span className="text-[#ff4500] font-semibold">CSS</span>,{" "}
      <span className="text-[#ff4500] font-semibold">Javascript</span> and{" "}
      <span className="text-[#ff4500] font-semibold">C#</span>. I am also good
      at setting up databases. I enjoy working on both frontend and backend, but
      my preference is usually backend. I also really enjoy building things from
      A to Z. I don't just focus on whether something works, but also on how it
      looks.
      <br />
      <br />I am someone who has an eye for{" "}
      <span className="text-[#ff4500] font-semibold">detail</span> and values
      that things look clean and well polished.{" "}
      <span className="text-[#ff4500] font-semibold">Design</span> plays a big
      role for me; I enjoy thinking about how something can be not only
      functional, but also visually appealing.
      <br />
      My interest in{" "}
      <span className="text-[#ff4500] font-semibold">computers</span> and{" "}
      <span className="text-[#ff4500] font-semibold">technology</span> started
      at a young age, and over the years it has only grown. It made me dive
      deeper into building complete and well thought-out{" "}
      <span className="text-[#ff4500] font-semibold">solutions</span>.
      <br />
      <br />
      <div className="flex flex-col items-center my-8 sm:my-12">
        <div className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm tracking-[0.3em] mb-4">
          S C R O L L
        </div>
        <div className="relative w-[2px] h-32 sm:h-40 bg-gray-300 dark:bg-gray-700">
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
      <span className="text-[#ff4500] font-semibold">swimming</span> and
      spending time in{" "}
      <span className="text-[#ff4500] font-semibold">nature</span>, especially
      in <span className="text-[#ff4500] font-semibold">parks</span>.
      <br />
      <br />I often go to{" "}
      <span className="text-[#ff4500] font-semibold">Ledeboerpark</span> in
      Enschede. It is a calm and green park where I like to walk and unwind.
      Besides that, I am a true{" "}
      <span className="text-[#ff4500] font-semibold">Cinephile</span>.
      <br />
      <br />
    </>
  );

  return (
    <div className="min-h-screen py-12 sm:py-16 md:py-20 px-4 sm:px-6 relative overflow-x-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header with rough circles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-left mb-12 sm:mb-16 md:mb-20"
        >
          <div className="relative inline-block">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 dark:text-white mb-4 ml-2 sm:ml-4 relative z-10">
              About me
              <span className="text-[#ff4500]">.</span>
              <span className="text-[#ff4500]">.</span>
              <span className="text-[#ff4500]">.</span>
            </h1>

            <div className="absolute -bottom-2 left-0 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 z-0 opacity-50">
              <RoughCircle size={48} seed={20} />
            </div>
          </div>
        </motion.div>

        {/* Main about text with rough border - Dynamic sizing */}
        <div className="mb-16 sm:mb-20 md:mb-24 lg:mr-60">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative max-w-4xl mx-auto"
          >
            <div className="relative">
              {textBoxSize.width > 0 && textBoxSize.height > 0 && (
                <div className="absolute inset-0 pointer-events-none">
                  <RoughBorder
                    width={textBoxSize.width}
                    height={textBoxSize.height}
                    strokeWidth={3}
                    roughness={2.5}
                    bowing={1.5}
                    seed={100}
                    stroke="#ff4500"
                    fill="transparent"
                  />
                </div>
              )}
              <div
                ref={textBoxRef}
                className="p-4 sm:p-6 md:p-8 lg:p-12 py-4 sm:py-5 md:py-6 lg:py-7"
              >
                <motion.p className="text-gray-800 dark:text-gray-100 text-sm sm:text-base lg:text-lg leading-relaxed relative z-10">
                  {fullText}
                </motion.p>
              </div>
            </div>

            {/* Floating decorative elements */}
            <motion.div
              className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-[#ff4500]/10 rounded-full"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-[#ff4500]/10 rounded-full"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2.5, repeat: Infinity }}
            />
          </motion.div>
        </div>

        {/* Decorative divider */}
        <div className="relative my-12 sm:my-16 md:my-20">
          <div className="w-full h-[2px] bg-gray-300 dark:bg-gray-700" />
        </div>

        {/* Tech & Languages Timeline */}
        <div className="mb-12 sm:mb-16 md:mb-20 max-w-5xl mx-auto relative">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-12 sm:mb-16 md:mb-20 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Tech <span className="text-[#ff4500]">&</span> Languages
          </motion.h2>

          {/* Center timeline line - Hidden on mobile, visible on tablet+ */}
          <div className="hidden md:block absolute left-1/2 top-16 sm:top-20 md:top-24 h-[calc(100%-100px)] w-[3px] bg-gray-300 dark:bg-gray-700 -translate-x-1/2" />

          <div className="space-y-12 sm:space-y-20 md:space-y-32">
            {[
              {
                title: "React",
                icon: SiReact,
                text: "I use React to build interfaces and split things into components. I’m still learning and getting more comfortable with it.",
                side: "left",
              },
              {
                title: "C#",
                icon: SiSharp,
                text: "I use C# mostly for backend work. I like working with it and I’m still figuring out better ways to structure my code.",
                side: "right",
              },
              {
                title: "MySQL",
                icon: SiMysql,
                text: "I use MySQL to store and work with data. I’m comfortable with the basics and still learning more about how to set things up properly.",
                side: "left",
              },
              {
                title: "HTML & CSS",
                icon: SiHtml5,
                text: "I use HTML and CSS to build the structure and layout of my projects. It’s where I focus on making things look clean.",
                side: "right",
              },
              {
                title: "JavaScript",
                icon: SiJavascript,
                text: "I use JavaScript to make things interactive. I’m still improving and learning new ways to write it better.",
                side: "left",
              },
              {
                title: "Tailwind",
                icon: SiTailwindcss,
                text: "I use Tailwind to style things quickly without overthinking CSS. It helps me move faster while building.",
                side: "right",
              },
              {
                title: "Figma",
                icon: SiFigma,
                text: "I use Figma to plan out ideas before coding. It helps me get a clearer picture of what I want to build.",
                side: "left",
              },
            ].map((item, i) => {
              const isLeft = item.side === "left";
              const Icon = item.icon;

              return (
                <TechCard
                  key={i}
                  item={item}
                  isLeft={isLeft}
                  Icon={Icon}
                  index={i}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// Separate component for tech cards with dynamic sizing
function TechCard({ item, isLeft, Icon, index }: any) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [cardSize, setCardSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!cardRef.current) return;

    const update = () => {
      const rect = cardRef.current!.getBoundingClientRect();
      setCardSize({ width: rect.width, height: rect.height });
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(cardRef.current);
    window.addEventListener("resize", update);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative"
    >
      {/* Mobile & Tablet: Center everything */}
      <div
        className={`flex justify-center md:justify-start ${isLeft ? "md:pr-[55%]" : "md:justify-end md:pl-[55%]"}`}
      >
        <div className="relative w-full max-w-[90vw] sm:max-w-[400px] group hover:scale-105 transition-transform duration-300">
          {cardSize.width > 0 && cardSize.height > 0 && (
            <div className="absolute inset-0 pointer-events-none">
              <RoughBorder
                width={cardSize.width}
                height={cardSize.height}
                strokeWidth={2.5}
                roughness={2}
                bowing={1}
                seed={300 + index * 10}
                stroke="#ff4500"
                fill="transparent"
              />
            </div>
          )}

          <div
            ref={cardRef}
            className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 md:px-8 lg:px-12 py-6 sm:py-8"
          >
            {/* Icon with rough circle */}
            <div className="relative inline-block mb-3">
              <Icon
                size={32}
                className="sm:w-10 sm:h-10 text-[#ff4500] relative z-10"
              />
              <div className="absolute inset-0 -m-2">
                <RoughCircle size={48} seed={400 + index * 10} />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
              {item.title}
            </h3>

            <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-xs sm:text-sm">
              {item.text}
            </p>
          </div>

          {/* Decorative corner elements */}
          <div className="absolute -top-2 -right-2 w-4 h-4 sm:w-6 sm:h-6 border-t-2 border-r-2 border-[#ff4500] opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="absolute -bottom-2 -left-2 w-4 h-4 sm:w-6 sm:h-6 border-b-2 border-l-2 border-[#ff4500] opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>

      {/* Timeline dot with rough circle - Hidden on mobile, visible on tablet+ */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 z-20">
        <RoughCircle size={32} seed={500 + index * 5} filled={true} />
      </div>
    </motion.div>
  );
}
