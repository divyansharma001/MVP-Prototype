import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, BookTemplate as Template, Sparkles, Settings, HelpCircle, X, BarChart3, Users, ChevronRight } from 'lucide-react';
import Logo from '../UI/Logo';
import Button from '../UI/Button';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'AI Builder', href: '/builder', icon: Sparkles },
  { name: 'Templates', href: '/templates', icon: Template },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  { name: 'Team', href: '/team', icon: Users },
];

const bottomNav = [
  { name: 'Settings', href: '/settings', icon: Settings },
  { name: 'Help & Support', href: '/help', icon: HelpCircle },
]

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-20 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <motion.div
        className={`fixed top-0 left-0 z-30 w-64 h-full bg-gray-900 border-r border-gray-800 flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 h-[77px] border-b border-gray-800">
          <Logo />
          <button
            onClick={onClose}
            className="lg:hidden p-2 text-gray-400 hover:text-white hover:bg-gray-700/50 rounded-xl"
            aria-label="Close sidebar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          {navigation.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <NavLink
                to={item.href}
                onClick={onClose}
                className={({ isActive }) => `
                  flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 group
                  ${isActive 
                    ? 'bg-gray-800 text-white' 
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                  }
                `}
              >
                <item.icon className={`h-5 w-5 flex-shrink-0 ${item.name === 'AI Builder' ? 'text-indigo-400' : 'text-gray-500 group-hover:text-gray-300'}`} />
                <span>{item.name}</span>
                {item.name === 'AI Builder' && (
                  <span className="ml-auto bg-indigo-500/20 text-indigo-400 text-xs px-2 py-0.5 rounded-full font-semibold">
                    New
                  </span>
                )}
              </NavLink>
            </motion.div>
          ))}
        </nav>

        {/* Bottom Section */}
        <div className="px-4 pb-6">
            <div className="space-y-2">
                {bottomNav.map((item) => (
                     <NavLink
                        key={item.name}
                        to={item.href}
                        onClick={onClose}
                        className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-gray-800/50 transition-colors"
                    >
                        <item.icon className="h-5 w-5 text-gray-500" />
                        <span>{item.name}</span>
                    </NavLink>
                ))}
            </div>

            <motion.div
              className="mt-6 bg-gray-800/50 rounded-lg p-4 text-center border border-gray-700/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-sm font-semibold text-white mb-1">Upgrade to Pro</h3>
              <p className="text-xs text-gray-400 mb-3">Unlock all features and build unlimited sites.</p>
              <Button size="sm" variant="secondary" className="w-full !bg-gray-700 hover:!bg-gray-600">
                Upgrade Now <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;