import top2000_1 from "./figma/images/Top2000Screenshot1.png";
import top2000_2 from "./figma/images/Top2000Screenshot2.png";
import top2000_3 from "./figma/images/Top2000Screenshot3.png";
import top2000_4 from "./figma/images/Top2000Screenshot4.png";
import top2000_5 from "./figma/images/Top2000Screenshot5.png";
import top2000_6 from "./figma/images/Top2000Screenshot6.png";
import top2000_one from "./figma/images/Project1IMG.png";


import { SiSharp, SiReact, SiMysql, SiTailwindcss } from "react-icons/si";

export interface Project {
  id: number;
  title: string;
  description: string;
  about: string;
  technologies?: any[];
  screenshots: string[];
  links: {
    github?: string;
    live?: string;
  };
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Top2000 Project",
    description:
      "In this project I built a full-stack web application using React and .NET.",
    about: `During my third year, I worked on this project together with a group. We recreated the well-known NPO Radio 2 Top 2000 as a web application.

For me personally, this was a really valuable experience where I focused on both the user interface and backend functionality. I worked on building features, improving the UI, and making sure everything worked smoothly together.

This project helped me grow a lot as a developer, especially in working with React, structuring components, and connecting frontend with backend API's.`,
    
    technologies: [
      SiSharp,
      SiReact,
      SiMysql,
      SiTailwindcss,
    ],

    screenshots: [
      top2000_one,
      top2000_2,
      top2000_1,
      top2000_3,
      top2000_4,
      top2000_5,
      top2000_6,
    ],
    links: { live: "#" },
  },


  // {
  //   id: 2,
  //   title: "Zoo Website",
  //   description: "CRUD application with Razor Pages and SQL.",
  //   about: "CRUD system for animal management with database connection.",
  //   screenshots: ["https://via.placeholder.com/1400x900"],
  //   links: { live: "#" },
  //     technologies: [
  //     SiSharp,
  //     SiReact,
  //     SiMysql,
  //     SiTailwindcss,
  //   ],
  // },
  // {
  //   id: 3,
  //   title: "Arduino System",
  //   description: "RFID security system with Arduino.",
  //   about: "Hardware + software system for access control.",
  //   screenshots: ["https://via.placeholder.com/1400x900"],
  //   links: { live: "#" },
  // },
  
];