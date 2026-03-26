import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

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

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!isOpen) return null;

  const isArduino = project.id === 3;

  // Voeg extra tekst toe per project
  let fullText = project.fullDescription || project.description;

  if (project.id === 1) {
    fullText = `In mijn derde jaar heb ik samen met mijn groep gewerkt aan een project waarin we de bekende NPO Radio 2 Top 2000 hebben nagebouwd als webapplicatie.

Tijdens dit project heb ik zowel aan de back-end als front-end gewerkt. Ik heb een backend API ontwikkeld die data ophaalt uit een database, zoals nummers, artiesten en playlists. Daarnaast heb ik meegewerkt aan de gebruikersinterface voor verschillende pagina’s, waaronder de Top2000-lijst, playlists, contactpagina, en functionaliteiten voor inloggen en registreren met JWT-authenticatie. Ook heb ik gewerkt aan een beheerdersgedeelte voor het beheren van nummers en artiesten.

De applicatie maakt het mogelijk om lijsten met nummers, artiesten en posities weer te geven, vergelijkbaar met hoe de echte Top2000 werkt.`;
  } else if (project.id === 2) {
    fullText = `Tijdens het tweede leerjaar heb ik samen met mijn groep gewerkt aan een project waarbij we een website voor een dierentuin hebben ontwikkeld.

Op deze website worden verschillende dieren weergegeven, en is het mogelijk om via een adminpaneel dieren toe te voegen, te bewerken en te verwijderen. Hierbij hebben we gebruikgemaakt van Razor Pages in combinatie met een SQL-database.

In dit project hebben we het CRUD-principe (Create, Read, Update, Delete) toegepast. Hierdoor heb ik geleerd hoe je dynamische webpagina’s bouwt die direct communiceren met een database.

Dit project heeft mijn kennis van webontwikkeling vergroot en mij geholpen om beter te begrijpen hoe je een applicatie gestructureerd opzet. Daarnaast heb ik mijn vaardigheden in samenwerken binnen een team verder ontwikkeld.`;
  } else if (project.id === 3) {
    fullText = `Als onderdeel van mijn opleiding Software Developer op het ROC van Twente in Hengelo heb ik in 2024 een keuze deel moeten kiezen. Mijn keuze viel op het keuzedeel Microcontrollers waarbij we aan de slag gingen met de Arduino UNO. Tijdens het keuzedeel Microcontrollers heb ik geleerd hoe ik de Arduino UNO kan programmeren. Ik heb geleerd hoe ik de Arduino UNO kan gebruiken om verschillende sensoren en actuatoren aan te sturen. Het uiteindelijke doel was om een beveiliging te maken door middel van een RFID scanner. Hierbij moesten nog verdere inputs en outputs bij verzonnen worden. Ik had als extra input een drukknop aangesloten die simuleerde dat een deur open ging. Als extra outputs had ik een LCD scherm en een leds aangesloten. Ik heb dit project afgesloten met een 8,9.`;
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-4xl bg-black/95 backdrop-blur-lg rounded-2xl border-2 border-[#ff4500]/30 shadow-2xl shadow-[#ff4500]/20"
              >
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 z-10 p-2 bg-[#ff4500] text-white rounded-full hover:bg-[#ff6a33] transition-all duration-300 hover:scale-110"
                >
                  <X size={24} />
                </button>

                {/* Content */}
                <div className="p-8">
                  {/* Header */}
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-white mb-3">{project.title}</h2>
                    <div className="flex flex-wrap gap-2 mb-4">
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

                  {/* Main Image */}
                  <div className="mb-6 rounded-xl overflow-hidden border-2 border-white/10">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>

                  {/* Description (inklapbaar) */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-white mb-3">Over Dit Project</h3>
                    <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                      {isExpanded ? fullText : fullText.slice(0, 300) + (fullText.length > 300 ? '...' : '')}
                    </p>
                    {fullText.length > 300 && (
                      <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="mt-2 text-[#ff4500] font-semibold hover:underline"
                      >
                        {isExpanded ? 'Lees minder' : 'Lees meer'}
                      </button>
                    )}
                  </div>

                  {/* Features */}
                  {project.features && (
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-white mb-3">Belangrijkste Features</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {project.features.map((feature, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-300">
                            <span className="text-[#ff4500] mt-1">✓</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Screenshots */}
                  {project.screenshots && project.screenshots.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-white mb-3">Screenshots</h3>
                      <div className="grid grid-cols-2 gap-4">
                        {project.screenshots.map((screenshot, index) => (
                          <div
                            key={index}
                            className="rounded-lg overflow-hidden border-2 border-white/10 hover:border-[#ff4500] transition-all duration-300"
                          >
                            <ImageWithFallback
                              src={screenshot}
                              alt={`Screenshot ${index + 1}`}
                              className="w-full h-48 object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Links */}
                  <div className="flex gap-4 pt-4 border-t border-white/10">
                    <a
                      href={isArduino ? undefined : project.links.github}
                      target={isArduino ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                        isArduino
                          ? 'bg-white/10 text-white opacity-50 cursor-not-allowed'
                          : 'bg-white/10 text-white hover:bg-white/20 hover:scale-105'
                      }`}
                    >
                      <Github size={20} />
                      View Code
                    </a>
                    <a
                      href={isArduino ? undefined : project.links.live}
                      target={isArduino ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                        isArduino
                          ? 'bg-[#ff4500] text-white opacity-50 cursor-not-allowed'
                          : 'bg-[#ff4500] text-white hover:bg-[#ff6a33] hover:scale-105'
                      }`}
                    >
                      <ExternalLink size={20} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}