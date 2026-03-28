import { motion } from "motion/react";
import { Link } from "react-router";
import { Code, Database, Cpu } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  icon: any;
}

export function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Top2000 Project",
      description:
        "In dit project heb ik een full-stack webapplicatie gebouwd met React en .NET, waarin ik de Top2000 van NPO Radio 2 heb nagebouwd. Ik heb gewerkt met API-integratie, filtering en zoekfunctionaliteit, en heb ervoor gezorgd dat de UI volledig responsive is.",
      icon: Code,
    },
    {
      id: 2,
      title: "Dierentuin Website",
      description:
        "Voor dit project heb ik een CRUD webapplicatie ontwikkeld met Razor Pages en een SQL database. Ik heb een systeem gebouwd waarmee dieren kunnen worden toegevoegd, aangepast en verwijderd.",
      icon: Database,
    },
    {
      id: 3,
      title: "Arduino Systeem",
      description:
        "In dit project heb ik een beveiligingssysteem gebouwd met een RFID-module en Arduino. Het systeem leest tags en geeft toegang op basis van de juiste kaart.",
      icon: Cpu,
    },
  ];

  const SplitText = ({ text }: { text: string }) => {
    const letters = text.split("");
    const middle = letters.length / 2;

    return (
      <span className="inline-block">
        {letters.map((char, i) => {
          const offset = i - middle;

          return (
            <motion.span
              key={i}
              className="inline-block"
              variants={{
                hover: {
                  x: offset * 3,
                },
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          );
        })}
      </span>
    );
  };

  return (
    <section className="py-32 px-6 max-w-6xl mx-auto">
      <div className="mb-24">
        <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4">
          <span className="text-[#ff4500]">Mijn Creaties</span>.
        </h1>
      </div>

      <div className="flex flex-col">
        {projects.map((project, index) => {
          const isReversed = index % 2 === 1;
          const Icon = project.icon;

          return (
            <div key={project.id}>
              <Link
                to={`/project/${project.id}`}
                className="group block -m-4 p-4 rounded-3xl hover:bg-white/5 focus:ring-4 focus:ring-[#ff4500]/30"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className={isReversed ? "md:order-2" : ""}
                  >
                    <motion.h3
                      className="text-4xl sm:text-5xl font-bold text-black mb-4 group-hover:text-[#ff4500] transition-all duration-500 cursor-pointer"
                      whileHover="hover"
                    >
                      <SplitText text={project.title} />
                    </motion.h3>

                    <p className="text-black-400 text-lg max-w-md">
                      {project.description}
                    </p>
                  </motion.div>

                  <div
                    className={`flex justify-center ${
                      isReversed ? "md:order-1" : ""
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 3 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="w-40 h-40 rounded-2xl border border-white/10 flex items-center justify-center text-[#ff4500] shadow-lg shadow-[#ff4500]/10 group-hover:shadow-[#ff4500]/25 transition-all duration-300"
                    >
                      <Icon size={80} />
                    </motion.div>
                  </div>
                </div>
              </Link>

              {/* HR tussen projecten */}
{index !== projects.length - 1 && (
  <hr className="border-t-1 border-black my-16" />
)}
            </div>
          );
        })}
      </div>
    </section>
  );
}
