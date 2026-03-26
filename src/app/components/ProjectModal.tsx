import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

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
  if (!isOpen) return null;

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
                    <h2 className="text-3xl font-bold text-white mb-3">
                      {project.title}
                    </h2>
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

                  {/* Description */}
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-white mb-3">Over Dit Project</h3>
                    <p className="text-gray-300 leading-relaxed">
                      {project.fullDescription || project.description}
                    </p>
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
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
                    >
                      <Github size={20} />
                      View Code
                    </a>
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-[#ff4500] text-white rounded-lg hover:bg-[#ff6a33] transition-all duration-300 hover:scale-105"
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
