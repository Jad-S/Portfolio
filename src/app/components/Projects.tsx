import { motion } from 'motion/react';
import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ProjectModal } from './ProjectModal';

import screenshot1 from './figma/screenshot1.png';
import screenshot2 from './figma/screenshot2.png';
import screenshot3 from './figma/screenshot3.png';
import screenshot4 from './figma/screenshot4.jpg';

import project1img from './figma/project1img.png';
import project2img from './figma/Project2img.png';
import project3img from './figma/Project3img.png';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  links: {
    github: string;
    live: string;
  };
  fullDescription?: string;
  screenshots?: string[];
  features?: string[];
}

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'Top2000 Project',
      description:
        'Een webapplicatie waarin de NPO Radio 2 Top 2000 is nagebouwd met zowel front-end als back-end functionaliteiten.',
      fullDescription:
        'In dit project heb ik samen met mijn groep een webapplicatie gebouwd die de bekende NPO Radio 2 Top 2000 nabootst...',
      image: project1img,
      tags: ['C#', '.NET', 'React', 'JWT', 'REST API', 'SSMS'],
      links: {
        github: 'https://github.com',
        live: 'https://example.com',
      },
      features: [
        'Top 2000 lijst met nummers en artiesten',
        'Zoek-, sorteer- en filterfunctionaliteit',
        'JWT authenticatie',
        'Admin dashboard',
      ],
      screenshots: [screenshot1, screenshot2],
    },
    {
      id: 2,
      title: 'Dierentuin Website',
      description:
        'Een webapplicatie voor het beheren en tonen van dieren met een adminpaneel en database.',
      fullDescription:
        'Tijdens mijn tweede leerjaar heb ik samen met mijn groep een website voor een dierentuin ontwikkeld...',
      image: project2img,
      tags: ['C#', 'Razor Pages', 'SQL', 'CRUD', '.NET'],
      links: {
        github: 'https://github.com',
        live: 'https://example.com',
      },
      features: [
        'Dieren overzicht',
        'Adminpaneel',
        'CRUD functionaliteit',
        'SQL database koppeling',
      ],
      screenshots: ['/images/zoo/screenshot1.png', '/images/zoo/screenshot2.png'],
    },
    {
      id: 3,
      title: 'Arduino RFID Beveiligingssysteem',
      description:
        'Een microcontroller project met Arduino waarbij een RFID-gebaseerd beveiligingssysteem is gebouwd.',
      fullDescription:
        'Als onderdeel van mijn opleiding heb ik gewerkt met Arduino en een RFID beveiligingssysteem ontwikkeld...',
      image: project3img,
      tags: ['Arduino', 'RFID', 'Microcontrollers', 'Hardware'],
      links: {
        github: 'https://github.com',
        live: 'https://example.com',
      },
      features: [
        'RFID scanner',
        'LCD scherm',
        'LED indicatoren',
        'Drukknop input',
      ],
      screenshots: [screenshot4, screenshot3],
    },
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
<span className="text-[#ff4500] hover:text-[#ff6a33] transition">
  Mijn Projecten
</span>          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Een selectie van mijn recente werk en projecten
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project, index) => (
            <motion.div
              onClick={() => setSelectedProject(project)}
              className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border-2 border-white/10 hover:border-[#ff4500] transition-all duration-300 hover:shadow-xl hover:shadow-[#ff4500]/20 cursor-pointer w-full max-w-sm"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50">
                  <span className="text-white font-semibold text-lg">
                    Klik voor details →
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[#ff4500]/20 text-[#ff4500] border border-[#ff4500]/30 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}