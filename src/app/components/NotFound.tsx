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
          Page Not Found
        </h2>

        <p className="text-black light:text-gray-700 mb-8 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#ff4500] text-black rounded-lg hover:bg-[#ff6a33] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ff4500]/50"
        >
          <Home size={20} />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}