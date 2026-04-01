import { useState, useEffect } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";
import { Link, useLocation } from "react-router";
import logo from "./figma/Logo12.png";

export function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Trigger button */}
<motion.button
  onClick={() => setIsOpen(!isOpen)}
  className="fixed bottom-3 right-3 z-50 w-9 h-9 sm:w-10 sm:h-10 bg-[#ff4500] text-white text-sm font-bold rounded-full shadow-md flex items-center justify-center"
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
>
  <motion.span
    key={isOpen ? "arrow" : "bang"}
    initial={{ y: -5, }}
    animate={{
      y: isOpen ? [0, 4, 0] : [0, -3, 0],
      opacity: 1,
      scale: 1,
    }}
    transition={{
      duration: 1.2,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="text-base sm:text-lg"
  >
    {isOpen ? "↓" : "!"}
  </motion.span>
</motion.button>
      {/* Footer */}
      <motion.footer
        initial={{ y: "100%" }}
        animate={{ y: isOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 140, damping: 22 }}
        className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200 z-40"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <div className="max-w-7xl mx-auto px-3 py-2 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-8 sm:h-9 w-auto object-contain" />
          </Link>

          {/* Icons */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a href="https://github.com/Jad-S" target="_blank" rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#ff4500] transition">
              <Github size={18} />
            </a>

            <a href="https://www.linkedin.com/in/jad-s-365b00344/" target="_blank" rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#ff4500] transition">
              <Linkedin size={18} />
            </a>

            <Link to="/contact"
              className="text-gray-600 hover:text-[#ff4500] transition">
              <Mail size={18} />
            </Link>
          </div>

          {/* Copyright */}
          <span className="text-[10px] sm:text-xs text-gray-400 select-none">
            © 2026
          </span>
        </div>
      </motion.footer>
    </>
  );
}