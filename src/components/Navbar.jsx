import { motion } from 'framer-motion';
import { fadeIn, buttonHover } from '../config/motion';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <motion.div
        {...fadeIn}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img src="/logo.svg" alt="Zestly" className="h-8 w-auto" />
            <span className="ml-2 text-xl font-semibold text-gray-900">Zestly</span>
          </div>
          <motion.button
            {...buttonHover}
            className="bg-zestly-primary text-white px-6 py-2 rounded-full font-medium hover:bg-zestly-dark transition-colors"
          >
            Get a Demo
          </motion.button>
        </div>
      </motion.div>
    </nav>
  );
}
