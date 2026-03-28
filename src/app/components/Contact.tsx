import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showToast, setShowToast] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <Mail size={14} />,
      title: "Email",
      content: "jadslwm22@gmail.com",
      link: "mailto:jadslwm22@gmail.com",
    },
    {
      icon: <Phone size={14} />,
      title: "Telefoon",
      content: "+31 6 85067418",
      link: "tel:+31685067418",
    },
  ];

  return (
    <div className="min-h-screen px-6 py-16">
      {/* TOAST */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 text-xs bg-black text-black px-3 py-1.5 rounded-full z-50"
          >
            Bericht verzonden
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-2xl mx-auto">
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-semibold tracking-tight text-black">
            Contact
          </h1>
        </motion.div>

        {/* FORM */}
        <form
          action="https://formspree.io/f/mrbqkxyz"
          method="POST"
          onSubmit={handleSubmit}
          className="space-y-10"
        >
          {/* NAME */}
          <div>
            <p className="text-xs text-gray-500 mb-2">Your name</p>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full text-lg bg-transparent border-b border-black/20 py-2 text-black focus:border-black outline-none transition"
            />
          </div>

          {/* EMAIL */}
          <div>
            <p className="text-xs text-gray-500 mb-2">Your email</p>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full text-lg bg-transparent border-b border-black/20 py-2 text-black focus:border-black outline-none transition"
            />
          </div>

          {/* MESSAGE */}
          <div>
            <p className="text-xs text-gray-500 mb-2">Your message</p>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={3}
              className="w-full text-lg bg-transparent border-b border-black/20 py-2 text-black focus:border-black outline-none resize-none transition"
            />
          </div>

          {/* SUBMIT */}
          <div className="pt-4">
            <button
              type="submit"
              className="text-black text-base hover:opacity-60 hover:text-gray-700 transition flex items-center gap-2"
            >
              Send message
              <Send size={14} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
