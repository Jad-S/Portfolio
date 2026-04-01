import { motion, AnimatePresence } from "motion/react";
import { User, Mail, MessageSquare, Send } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import RoughBorder from "./RoughBorder";
import rough from "roughjs";

function RoughCircle({ size, seed, filled }: { size: number; seed: number; filled?: boolean }) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;
    const svg = svgRef.current;
    while (svg.firstChild) svg.removeChild(svg.firstChild);

    const rc = rough.svg(svg);
    const node = rc.circle(size / 2, size / 2, size - 4, {
      stroke: "#ff4500",
      strokeWidth: 3,
      roughness: 2,
      seed: seed,
      fill: filled ? "#ff4500" : "none",
      fillStyle: filled ? "solid" : undefined,
    });

    svg.appendChild(node);
  }, [size, seed, filled]);

  return <svg ref={svgRef} width={size} height={size} className="absolute inset-0" />;
}

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/mrbqkxyz", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: new FormData(e.target as HTMLFormElement), // 👈 belangrijk voor Formspree
      });

      if (response.ok) {
        setShowToast(true);
        setFormData({ name: "", email: "", message: "" });

        setTimeout(() => setShowToast(false), 4000);
      } else {
        alert("Er ging iets mis. Probeer opnieuw.");
      }
    } catch (error) {
      alert("Netwerk fout. Probeer opnieuw.");
    }

    setLoading(false);
  };

  /* === TEXT MEASURE FOR BORDER === */
  const textRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (!textRef.current) return;

    const update = () => {
      const rect = textRef.current!.getBoundingClientRect();
      setSize({ width: rect.width, height: rect.height });
    };

    update();

    const ro = new ResizeObserver(update);
    ro.observe(textRef.current);

    return () => ro.disconnect();
  }, []);

  return (
    <div className="min-h-screen px-6 py-16 relative">

      <div className="absolute top-40 right-16 w-20 h-20 opacity-30">
        <RoughCircle size={80} seed={110} />
      </div>
      <div className="absolute bottom-32 left-24 w-24 h-24 opacity-25">
        <RoughCircle size={96} seed={120} />
      </div>

      {/* TOAST */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 -m-1">
                <RoughBorder
                  width={180}
                  height={40}
                  roughness={1.5}
                  bowing={1}
                  seed={200}
                  stroke="#ff4500"
                  strokeWidth={2}
                  fill="#ffffff"
                />
              </div>
              <div className="relative z-10 px-4 py-2 text-sm text-gray-900">
                ✓ Bericht verzonden
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-2xl mx-auto relative z-10">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 relative"
        >

          <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white relative z-10">
            Contact
          </h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            className="mt-4 h-1 relative"
          >
            <RoughBorder
              width={96}
              height={4}
              roughness={2}
              seed={140}
              stroke="#ff4500"
              strokeWidth={2}
              fill="#ff4500"
            />
          </motion.div>
        </motion.div>

        {/* TEXT BOX */}
        <div className="relative inline-block mb-12 group">

          {size.width > 0 && size.height > 0 && (
            <div className="absolute inset-0 pointer-events-none transition-all duration-300 group-hover:scale-[1.02]">
              <RoughBorder
                width={size.width + 24}
                height={size.height + 24}
                roughness={1.8}
                bowing={1.2}
                seed={150}
                stroke="#ff4500"
                strokeWidth={2}
                fill="transparent"
              />
            </div>
          )}

          <motion.div
            ref={textRef}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 p-4 text-gray-900 dark:text-white max-w-md group-hover:text-[#ff4500] transition-colors duration-300"
          >
            If you'd like to make an <span className="text-[#ff4500] font-semibold">enquiry</span>, please feel free to get in touch, and I will respond <span className="text-[#ff4500] font-semibold">as soon as possible</span>.
          </motion.div>

        </div>

        {/* FORM */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="relative p-8"
        >
          <div className="absolute inset-0">
            <RoughBorder
              width={672}
              height={480}
              roughness={2}
              bowing={1.5}
              seed={170}
              stroke="#ff4500"
              strokeWidth={2}
              fill="transparent"
            />
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-10 relative z-10"
          >
            {/* NAME */}
            <div className="group">
              <p className="text-xs mb-2 text-gray-500 flex items-center gap-2 group-hover:text-[#ff4500] transition">
                <User size={12} />
                Your name
              </p>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full text-lg bg-transparent border-b border-gray-300 py-2 outline-none focus:border-[#ff4500] transition"
              />
            </div>

            {/* EMAIL */}
            <div className="group">
              <p className="text-xs mb-2 text-gray-500 flex items-center gap-2 group-hover:text-[#ff4500] transition">
                <Mail size={12} />
                Your email
              </p>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full text-lg bg-transparent border-b border-gray-300 py-2 outline-none focus:border-[#ff4500] transition"
              />
            </div>

            {/* MESSAGE */}
            <div className="group">
              <p className="text-xs mb-2 text-gray-500 flex items-center gap-2 group-hover:text-[#ff4500] transition">
                <MessageSquare size={12} />
                Your message
              </p>

<textarea
  name="message"
  value={formData.message}
  onChange={handleChange}
  required
  rows={3}
  className="w-full text-lg bg-transparent border-b border-gray-300 py-2 outline-none focus:border-[#ff4500] transition resize-none"
/>
            </div>

            {/* SUBMIT */}
            <div>
              <div className="relative inline-block group">
                <div className="absolute inset-0 -m-2">
                  <RoughBorder 
                    width={120} 
                    height={48} 
                    roughness={1.8} 
                    bowing={1.2} 
                    seed={200}
                    stroke="#ff4500"
                    strokeWidth={2}
                    fill="transparent"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="relative z-10 text-gray-900 dark:text-white text-base group-hover:text-[#ff4500] transition flex items-center gap-2 px-4 py-1"
                >
                  {loading ? "Sending..." : "Send"}
                  <Send size={14} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </form>
        </motion.div>
      </div>
    </div>
  );
}