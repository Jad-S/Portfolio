import { Link } from "react-router";
import { Info } from "lucide-react";
import { RoughBox } from "./RoughBox";
import ProjectIMG from "./figma/images/Project1IMG.png";
// import ProjectIMG2 from "../imports/figma/images/Project2IMG.png"

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

export function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: "Top2000 Project",
      description:
        "Recreated and Refind...",
      image: ProjectIMG,
     },
    //     {
    //   id: 2,
    //   title: "Aventura",
    //   description:
    //     "Animals found a Home to gather with each other...",
    //   image: ProjectIMG2,
    // }
  ];

  return (
    <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 max-w-7xl mx-auto">
      
      {/* TITLE */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-10 sm:mb-12 md:mb-16">
        <span className="text-[#ff4500]">My Creations</span>.
      </h1>

      {/* GRID */}
      <div className="grid gap-8 sm:gap-12 md:gap-16 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          
          <Link
            key={project.id}
            to={`/project/${project.id}`}
            className="group block"
          >
            
            {/* CARD */}
            <div className="rotate-[0.3deg]">
              
              <RoughBox>
                <div className="p-4 sm:p-6 md:p-8 flex flex-col gap-4 sm:gap-5 md:gap-6">

                  {/* IMAGE */}
                  <RoughBox>
                    <div className="aspect-[16/11] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </RoughBox>

                  {/* TEXT */}
                  <div className="flex flex-col gap-2 sm:gap-3">
                    <h2 className="text-lg sm:text-xl font-semibold text-black group-hover:text-[#ff4500] transition">
                      {project.title}
                    </h2>
                    <p className="text-sm sm:text-base text-gray-500 line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* FOOTER */}
                  <div className="flex items-center justify-between mt-2">

                    {/* ICON (no box) */}
                    <Info
                      size={24}
                      className="text-gray-500 group-hover:text-[#ff4500] sm:w-7 sm:h-7"
                    />
                  </div>

                </div>
              </RoughBox>

            </div>

          </Link>
        ))}
      </div>
    </section>
  );
}
