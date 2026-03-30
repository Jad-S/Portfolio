import { motion } from "motion/react";
import { Code2, Palette, Database, CodeIcon } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import aboutmeimg1 from "./figma/aboutmeimg1.jpg";
import aboutmeimg2 from "./figma/aboutmeimg2.jpg";
import aboutmeimg3 from "./figma/aboutmeimg3.jpg";
import aboutmeimg4 from "./figma/aboutmeimg4.jpg";
import { TypewriterText } from "./TypewriterText";

export function About() {
  // const [isExpanded, setIsExpanded] = useState(false);

  const skills = [
    { name: "React & TypeScript", level: 40 },
    { name: "Databases", level: 65 },
    { name: "Javascript", level: 70 },
    { name: "UI/UX Design", level: 70 },
    { name: "HTML/CSS", level: 100 },
    { name: "C#", level: 60 },
    { name: "PHP", level: 80 },
  ];

  const scrollText = "SCROLL";

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 15,
      },
    },
  };

  const fullText = (
    <>
      I am a <span className="text-[#ff4500]">designer</span>,{" "}
      <span className="text-[#ff4500]">Frontend</span> and{" "}
      <span className="text-[#ff4500]">Backend</span>{" "}
      <span className="text-[#ff4500]">developer</span> who is still growing<span className="text-[#ff4500]">...</span>
      <br />
      <br />
      I can work well with <span className="text-[#ff4500]">HTML</span>,{" "}
      <span className="text-[#ff4500]">CSS</span>,{" "}
      <span className="text-[#ff4500]">Javascript</span> and{" "}
      <span className="text-[#ff4500]">C#</span>. I am also good at setting up
      databases. I enjoy working on both frontend and backend, but my preference
      is usually backend. I also really enjoy building things from A to Z. I
      don’t just focus on whether something works, but also on how it looks.
      <br />
      <br />
      I am someone who has an eye for{" "}
      <span className="text-[#ff4500]">detail</span> and values that things look
      clean and well polished.{" "}
      <span className="text-[#ff4500]">Design</span> plays a big role for me; I
      enjoy thinking about how something can be not only functional, but also
      visually appealing.
      <br />
      My interest in <span className="text-[#ff4500]">computers</span> and{" "}
      <span className="text-[#ff4500]">technology</span> started at a young age,
      and over the years it has only grown. It made me dive deeper into building
      complete and well thought-out{" "}
      <span className="text-[#ff4500]">solutions</span>.
      <br />
      <br />
      <div className="flex flex-col items-center">
        <div className="text-black-400 text-sm -ml-100">S C R O L L</div>
        <br />
        <div className="w-[2px] h-79 bg-gray-500 -ml-100 "></div>
      </div>{" "}
      <br />
      <br />
      In my free time I like being active with{" "}
      <span className="text-[#ff4500]">sports</span> and{" "}
      <span className="text-[#ff4500]">gym</span>. I enjoy{" "}
      <span className="text-[#ff4500]">swimming</span> and spending time in{" "}
      <span className="text-[#ff4500]">nature</span>, especially in{" "}
      <span className="text-[#ff4500]">parks</span>.
      <br />
      <br />
      I often go to <span className="text-[#ff4500]">
        Ledeboerpark
      </span>{" "}
      in Enschede. It is a calm and green park where I like to walk and unwind.
      Besides that, I am a true{" "}
      <span className="text-[#ff4500]">Cinephile</span>.
      <br />
      <br />
    </>
  );

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-left mb-16"
        >
          <div className="max-w-4xl flex flex-col items-start">
            <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4 ml-4">
              About me...
            </h1>
          </div>
        </motion.div>

        <div className="mb-20">
          <div className="max-w-4xl mx-auto flex flex-col items-start mr-90">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <motion.p className="text-black-600 text-lg leading-relaxed mb-4 ml-4 text-left">
                {fullText}
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* <h2 className="text-xl text-center text-[#ff4500] mb-8 font-semibold">
          More???
        </h2>

        <div className="grid md:grid-cols-3 gap-10 text-center">
          <motion.div className="p-4">
            <p className="text-black-400 text-sm mb-1 font-bold">Status</p>
            <p className="text-black">
              Available for an internship…
              <span className="text-[#ff4500]">
                {" "}
                but also for a long vacation somewhere far… Alaska for example.
              </span>
            </p>
          </motion.div>

          <motion.div className="p-4">
            <p className="text-black-400 text-sm mb-1 font-bold">
              Brain status
            </p>
            <p className="text-black">
              Learning React…
              <span className="text-[#ff4500]">
                {" "}
                still don’t really understand it yet
              </span>
            </p>
          </motion.div>

          <motion.div className="p-4">
            <p className="text-black-400 text-sm mb-1 font-bold">Now?</p>
            <p className="text-black">
              Either at the gym
              <br />
              or watching a movie
              <br />
              <span className="text-[#ff4500]">
                (or pretending I understand code)
              </span>
            </p>
          </motion.div>
        </div> */}

              <div className="flex flex-col items-center">
        <div className="text-[#ff4500] text-sm -mr-150">S C R O L L</div>
        <br />
        <div className="w-[2px] h-79 bg-[#ff4500] -mr-150 "></div>
      </div>
      <br /><br /><br /><br /><br />

        <div className="mb-20 max-w-5xl mx-auto relative">
          <h2 className="text-3xl font-semibold text-black mb-16 text-center">
            How I think <span className="text-[#ff4500]">&</span> build
          </h2>

          <div className="absolute left-1/2 top-0 h-full w-[2px] bg-black/10 -translate-x-1/2" />

          <div className="space-y-24">
            {[
              {
                title: "Understanding the problem",
                text: "I first try to understand exactly what needs to be built. Not just what is asked, but also why. This prevents me from having to redo things later.",
                side: "left",
              },
              {
                title: "Thinking things through",
                text: "I think about how everything fits together before I start building. That makes it easier to keep everything clean and logical.",
                side: "right",
              },
              {
                title: "Backend work",
                text: "I enjoy working on the backend. That’s where everything comes together. I use C# and .NET to build things that are stable and reliable.",
                side: "left",
              },
              {
                title: "Frontend",
                text: "I think it’s important that everything looks clean and works smoothly. Small details like spacing and animations make a big difference.",
                side: "right",
              },
            ].map((item, i) => {
              const isLeft = item.side === "left";

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6 }}
                  className={`flex ${isLeft ? "justify-start pr-12" : "justify-end pl-12"}`}
                >
                  <div className="max-w-md">
                    <h3 className="text-black font-semibold text-lg mb-2">
                      <span className="text-[#ff4500]">{item.title}</span>
                    </h3>

                    <p className="text-black-400 text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}