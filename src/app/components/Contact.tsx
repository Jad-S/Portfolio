import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Send, X } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [showToast, setShowToast] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // voorkomt reload
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000);
    setFormData({ name: '', email: '', message: '' });
  };

  const contactInfo = [
    { icon: <Mail size={24} />, title: 'Email', content: 'jadslwm22@gmail.com', link: 'mailto:jadslwm22@gmail.com' },
    { icon: <Phone size={24} />, title: 'Telefoon', content: '+31 6 85067418', link: 'tel:+31685067418' },
  ];

  return (
    <div className="min-h-screen py-20 px-4 relative">
      {/* TOAST */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 bg-[#ff4500] text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-4 z-50"
          >
            <span>Bedankt voor je bericht! Ik neem snel contact op.</span>
            <X
              size={20}
              className="cursor-pointer hover:opacity-70"
              onClick={() => setShowToast(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white light:text-black mb-4">
            Neem Contact Op
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white/5 light:bg-black/5 backdrop-blur-sm rounded-xl p-8 border-2 border-white/10 light:border-black/10">
              <h2 className="text-2xl font-bold text-white light:text-black mb-6">
                Stuur een Bericht
              </h2>
              <form
                action="https://formspree.io/f/mrbqkxyz"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-white light:text-black mb-2 text-sm font-medium"
                  >
                    Naam
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 light:bg-black/5 border-2 border-white/10 light:border-black/10 rounded-lg text-white light:text-black placeholder-gray-400 light:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#ff4500] focus:border-[#ff4500] transition-all"
                    placeholder="Je naam"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-white light:text-black mb-2 text-sm font-medium"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 light:bg-black/5 border-2 border-white/10 light:border-black/10 rounded-lg text-white light:text-black placeholder-gray-400 light:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#ff4500] focus:border-[#ff4500] transition-all"
                    placeholder="je.email@voorbeeld.nl"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-white light:text-black mb-2 text-sm font-medium"
                  >
                    Bericht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 light:bg-black/5 border-2 border-white/10 light:border-black/10 rounded-lg text-white light:text-black placeholder-gray-400 light:placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#ff4500] focus:border-[#ff4500] transition-all resize-none"
                    placeholder="Je bericht..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[#ff4500] text-white rounded-lg hover:bg-[#ff6a33] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ff4500]/50"
                >
                  Verstuur Bericht
                  <Send size={20} />
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold text-white light:text-black mb-6">
                Contactinformatie
              </h2>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-white/5 light:bg-black/5 backdrop-blur-sm rounded-xl border-2 border-white/10 light:border-black/10 hover:border-[#ff4500] transition-all duration-300"
                  >
                    <div className="text-[#ff4500] mt-1 transition-transform duration-300 hover:scale-110">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-white light:text-black font-semibold mb-1">
                        {info.title}
                      </h3>
                      <a
                        href={info.link}
                        className="text-gray-300 light:text-gray-700 hover:text-[#ff4500] transition-colors duration-300"
                      >
                        {info.content}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 light:bg-black/5 backdrop-blur-sm rounded-xl p-8 border-2 border-white/10 light:border-black/10">
              <h3 className="text-xl font-bold text-white light:text-black mb-4">
                Beschikbaarheid
              </h3>
              <div className="space-y-2 text-sm text-gray-400 light:text-gray-600">
                <p>Maandag - Vrijdag: 9:00 - 18:00</p>
                <p>Reactietijd: Binnen 24 uur</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#ff4500]/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-8 border-2 border-[#ff4500]/40">
              <h3 className="text-xl font-bold text-white light:text-black mb-4">
                Laten We Samenwerken!
              </h3>
              <p className="text-gray-300 light:text-gray-700">
                Of je nu een nieuw project start, hulp nodig hebt met een bestaande
                applicatie of een website - ik sta altijd open voor nieuwe kansen en uitdagingen.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}