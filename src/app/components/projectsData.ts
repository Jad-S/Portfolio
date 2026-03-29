import top2000_1 from "./figma/images/Top2000Screenshot1.png"
import top2000_2 from "./figma/images/Top2000Screenshot2.png";
import top2000_3 from "./figma/images/Top2000Screenshot3.png";
import top2000_4 from "./figma/images/Top2000Screenshot4.png";
import top2000_5 from "./figma/images/Top2000Screenshot5.png";
import top2000_6 from "./figma/images/Top2000Screenshot6.png";

export interface Project {
  id: number;
  title: string;
  description: string;
  about: string;
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
      "In dit project heb ik een full-stack webapplicatie gebouwd met React en .NET.",
    about:
      "In mijn derde jaar heb ik samen met mijn groep gewerkt aan een project waarin we de Top2000 hebben nagebouwd.\n\nIk werkte aan API's, frontend en database integratie.",
screenshots: [top2000_2, top2000_1, top2000_3, top2000_4, top2000_5, top2000_6],
    links: { live: "#" },
  }
  // {
  //   id: 2,
  //   title: "Dierentuin Website",
  //   description: "CRUD applicatie met Razor Pages en SQL.",
  //   about: "CRUD systeem voor dierenbeheer met database koppeling.",
  //   screenshots: ["https://via.placeholder.com/1400x900"],
  //   links: { live: "#" },
  // },
  // {
  //   id: 3,
  //   title: "Arduino Systeem",
  //   description: "RFID beveiligingssysteem met Arduino.",
  //   about: "Hardware + software systeem voor toegangscontrole.",
  //   screenshots: ["https://via.placeholder.com/1400x900"],
  //   links: { live: "#" },
  // },
];