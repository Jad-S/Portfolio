import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { motion } from "motion/react";
import { Link, useLocation } from "react-router";

export function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Sluit footer automatisch bij route verandering
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Uitroepteken trigger */}
<motion.button
  onClick={() => setIsOpen(!isOpen)}
  className="fixed bottom-4 right-4 z-50 w-10 h-10 bg-[#ff4500] text-white font-bold rounded-full shadow-xl flex items-center justify-center cursor-pointer"
>
  <motion.span
    key={isOpen ? "arrow" : "bang"} // belangrijk voor switch animatie
    initial={{ scale: 0, rotate: -180 }}
    animate={{
  scale: 1,
  rotate: 0,
  y: isOpen ? [0, 5, 0] : 0
}}
transition={{
  duration: 0.3,
  y: { repeat: isOpen ? Infinity : 0, duration: 1 }
}}
    exit={{ scale: 0 }}
    className="text-lg"
  >
    {isOpen ? "↓" : "!"}
  </motion.span>
</motion.button>

      {/* ⚡ Uitklapbare dunne footer */}
      <motion.footer
        initial={{ y: "100%" }}
        animate={{ y: isOpen ? 0 : "100%" }}
        transition={{ type: "spring", stiffness: 120, damping: 25 }}
        className="fixed bottom-0 left-0 w-full bg-black/95 backdrop-blur-sm border-t border-[#ff4500]/20 z-40 pointer-events-auto"
        style={{ height: "60px" }} // dunne hoogte
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center justify-between">
          
          {/* Jad S. links met animatie en link naar home */}
          <div>
            <Link to="/" className="group">
              <h3 className="text-xl font-bold text-white cursor-pointer flex items-center gap-1">
                <motion.span
                  className="inline-block"
                  animate={{ 
                    textShadow: [
                      "0 0 10px #ff4500",
                      "0 0 20px #ff4500",
                      "0 0 10px #ff4500"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Jad S
                </motion.span>
                <motion.span 
                  className="text-[#ff4500] inline-block"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  .
                </motion.span>
              </h3>
            </Link>
          </div>

          {/* Social Media + copyright rechts */}
          <div className="flex items-center gap-4">
            {[
              { icon: <Github size={24} />, link: "https://github.com/Jad-S" },
              { icon: <Linkedin size={24} />, link: "https://www.linkedin.com/in/jad-s-365b00344/" },
              { icon: <Twitter size={24} />, link: "https://twitter.com" },
              { icon: <Mail size={24} />, link: "/contact" },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link}
                target={item.link.startsWith("http") ? "_blank" : undefined}
                rel={item.link.startsWith("http") ? "noopener noreferrer" : undefined}
                className="text-gray-400 hover:text-[#ff4500] transition-all duration-300 hover:scale-125"
              >
                {item.icon}
              </a>
            ))}

            {/* Klein copyright */}
            <span className="text-gray-400 text-xs select-none">© 2026</span>
          </div>
        </div>
      </motion.footer>

      {/* Spacer zodat content niet overlapt met footer */}
      <div style={{ height: "60px" }} />
    </>
  );
}