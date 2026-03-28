import { Link, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import logo from "./figma/Logo12.png";

export function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "Auteur" },
    { path: "/contact", label: "Hire me" },
  ];

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === path;
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* LOGO */}
          <Link to="/" className="group relative -ml-20">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.div
                className="relative flex items-center"
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* SUBTIELE GLOW */}
                <div className="absolute inset-0 blur-lg opacity-0 bg-[#ff4500] rounded-full scale-125 transition duration-300" />

                {/* LOGO */}
                <img
                  src={logo}
                  alt="Logo"
                  className="h-22 w-auto object-contain"
                />
              </motion.div>

              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-[#ff4500]/0 via-[#ff4500]/20 to-[#ff4500]/0 rounded-lg opacity-0 group-hover:opacity-100 blur-xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </Link>

          {/* LINKS + HAMBURGER */}
          <div className="flex items-center gap-4">
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-6"
                >
                  {links.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {link.path.startsWith("#") ? (
                        <a
                          href={link.path}
                          onClick={() => setIsOpen(false)}
                          className="text-black hover:text-[#ff4500] transition"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          to={link.path}
                          onClick={() => setIsOpen(false)}
                          className={`text-black hover:text-[#ff4500] transition ${
                            isActive(link.path) ? "text-[#ff4500]" : ""
                          }`}
                        >
                          {link.label}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* HAMBURGER */}
            <motion.button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="w-10 h-10 flex flex-col justify-center items-center gap-1.5"
              whileTap={{ scale: 0.9 }}
            >
              <motion.span
                className="w-6 h-[3px] bg-[#ff4500] rounded"
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              />
              <motion.span
                className="w-6 h-[3px] bg-[#ff4500] rounded"
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              />
              <motion.span
                className="w-6 h-[3px] bg-[#ff4500] rounded"
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              />
            </motion.button>
          </div>
        </div>
      </div>
    </nav>
  );
}
