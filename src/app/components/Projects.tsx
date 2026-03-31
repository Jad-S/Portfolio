import { Link } from "react-router";
import { Info } from "lucide-react";
import { RoughBox } from "./RoughBox";
import ProjectIMG from "./figma/images/Project1IMG.png";

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
        "In this project I built a full-stack web application using React and .NET.",
      image: ProjectIMG,
    },
        {
      id: 2,
      title: "DierenTuin-Website",
      description:
        "In this project I built a full zoo website.",
      image: ProjectIMG,
    }
  ];

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto">
      
      {/* TITLE */}
      <h1 className="text-4xl sm:text-5xl font-bold text-black mb-16">
        <span className="text-[#ff4500]">My Creations</span>.
      </h1>

      {/* GRID */}
      <div className="grid gap-16 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          
          <Link
            key={project.id}
            to={`/project/${project.id}`}
            className="group block"
          >
            
            {/* CARD */}
            <div className="rotate-[0.3deg]">
              
              <RoughBox>
                <div className="p-8 flex flex-col gap-6">

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
                  <div className="flex flex-col gap-3">
                    <h2 className="text-xl font-semibold text-black group-hover:text-[#ff4500] transition">
                      {project.title}
                    </h2>

                    <p className="text-base text-gray-500 line-clamp-2">
                      Recreated and refined...
                    </p>
                  </div>

                  {/* FOOTER */}
                  <div className="flex items-center justify-between mt-2">

                    {/* ICON (no box) */}
                    <Info
                      size={28}
                      className="text-gray-500 group-hover:text-[#ff4500]"
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