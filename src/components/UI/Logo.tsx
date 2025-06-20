import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      onClick={() => navigate('/')}
      className={`flex items-center space-x-3 group cursor-pointer ${className}`}
      whileHover={{ scale: 1.02 }}
    >
      <motion.div
        className="bg-white p-2 rounded-xl group-hover:shadow-lg group-hover:shadow-indigo-500/25 transition-all duration-300"
        whileHover={{ rotate: -10, scale: 1.1 }}
      >
        <Globe className="h-6 w-6 text-black" />
      </motion.div>
      <motion.span
        className="text-xl font-bold text-white hidden sm:block"
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
      >
        WebCraft
      </motion.span>
    </motion.div>
  );
};

export default Logo;