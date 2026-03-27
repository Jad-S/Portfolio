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
    screenshots: [
      "https://via.placeholder.com/1400x900/1a1a1a/ffffff?text=Top2000+01",
      "https://via.placeholder.com/1400x900/2a2a2a/ffffff?text=Top2000+02",
      "https://via.placeholder.com/1400x900/3a3a3a/ffffff?text=Top2000+03",
    ],
    links: { live: "#" },
  },
  {
    id: 2,
    title: "Dierentuin Website",
    description: "CRUD applicatie met Razor Pages en SQL.",
    about: "CRUD systeem voor dierenbeheer met database koppeling.",
    screenshots: ["https://via.placeholder.com/1400x900"],
    links: { live: "#" },
  },
  {
    id: 3,
    title: "Arduino Systeem",
    description: "RFID beveiligingssysteem met Arduino.",
    about: "Hardware + software systeem voor toegangscontrole.",
    screenshots: ["https://via.placeholder.com/1400x900"],
    links: { live: "#" },
  },
];