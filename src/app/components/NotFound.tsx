import { motion } from "motion/react";
import { Link } from "react-router";
import { Home } from "lucide-react";

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className="text-9xl font-bold text-[#ff4500] mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-black light:text-black mb-4">
          Pagina Niet Gevonden
        </h2>
        <p className="text-gray-300 light:text-gray-700 mb-8 max-w-md mx-auto">
          De pagina die je zoekt bestaat niet of is verplaatst.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff4500] text-black rounded-lg hover:bg-[#ff6a33] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ff4500]/50"
        >
          <Home size={20} />
          Terug naar Home
        </Link>
      </motion.div>
    </div>
  );
}
