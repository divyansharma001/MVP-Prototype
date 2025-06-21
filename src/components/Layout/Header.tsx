import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, User, Bell, Layout } from 'lucide-react';
import Button from '../UI/Button';
import Logo from '../UI/Logo';

interface HeaderProps {
  onMenuClick: () => void;
  showMenuButton: boolean;
}

const Header: React.FC<HeaderProps> = ({ onMenuClick, showMenuButton }) => {
  const navigate = useNavigate();

  return (
    <motion.header
      className="bg-gray-900/70 backdrop-blur-xl border-b border-gray-800 px-4 py-3 sm:px-6 sticky top-0 z-40"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {showMenuButton && (
            <motion.button
              onClick={onMenuClick}
              className="lg:hidden p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-xl transition-colors"
              aria-label="Open sidebar"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Menu className="h-5 w-5" />
            </motion.button>
          )}
          
          <div className="hidden lg:block">
            <Logo />
          </div>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4">
          <Button
            variant="gradient"
            size="sm"
            onClick={() => navigate('/builder')}
            icon={Layout}
          >
            <span className="hidden sm:inline">AI Builder</span>
            <span className="inline sm:hidden">Build</span>
          </Button>

          <motion.button
            className="p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-xl transition-colors relative"
            aria-label="Notifications"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Bell className="h-5 w-5" />
            <motion.span
              className="absolute -top-1 -right-1 bg-indigo-500 text-xs rounded-full h-4 w-4 flex items-center justify-center text-white font-medium"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: 'spring' }}
            >
              3
            </motion.span>
          </motion.button>
          
          <div className="flex items-center space-x-3 bg-gray-800 hover:bg-gray-700/80 transition-colors cursor-pointer px-3 py-1.5 rounded-xl">
            <div className="bg-gray-700 p-1.5 rounded-lg">
              <User className="h-4 w-4 text-gray-300" />
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-medium text-white">John Doe</p>
              <p className="text-xs text-gray-400">Pro Plan</p>
            </div>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;