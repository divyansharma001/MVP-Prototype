// src/components/Home/InteractiveHeroDemo.tsx (or CleanHeroDemo.tsx)
import { motion, AnimatePresence } from 'framer-motion';
import { Type, Layout, ImageIcon, Zap, CheckCircle } from 'lucide-react';
import React from 'react';

// Step 1: Define steps with more descriptive icons and curated images
const steps = [
  { text: 'Describe your business...', icon: Type, image: '/home01.png' },
  { text: 'AI generates a unique layout...', icon: Layout, image: '/home02.png' },
  { text: 'AI curates stunning visuals...', icon: ImageIcon, image: '/home03.png' },
  { text: 'Optimizing for performance...', icon: Zap, image: '/home04.png' },
  { text: 'Your website is ready!', icon: CheckCircle, image: '/home05.png' },
];

const InteractiveHeroDemo = () => {
  const [currentStep, setCurrentStep] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const currentStepData = steps[currentStep];

  return (
    <motion.div 
      className="bg-gray-900/50 border border-gray-800 rounded-2xl p-4 h-[500px] shadow-2xl shadow-indigo-500/10 backdrop-blur-sm"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {/* Browser Header */}
      <div className="flex items-center space-x-1.5 mb-4">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <div className="ml-2 bg-gray-800/60 text-xs text-gray-400 px-3 py-1 rounded-md border border-gray-700">your-business.com</div>
      </div>

      {/* Status Bar */}
      <div className="bg-gray-800/50 rounded-lg p-3 flex items-center space-x-3 mb-4 border border-gray-700/80">
        <motion.div
          key={currentStep}
          initial={{ rotate: -45, scale: 0.8, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
        >
          {React.createElement(currentStepData.icon, {
            className: "h-5 w-5 text-indigo-400 flex-shrink-0"
          })}
        </motion.div>
        <div className="text-sm text-gray-300 w-full h-5 relative overflow-hidden">
          <AnimatePresence>
            <motion.span
              key={currentStep}
              className="absolute inset-0"
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            >
              {currentStepData.text}
            </motion.span>
          </AnimatePresence>
        </div>
        <div className="text-xs font-mono text-gray-500">
          {currentStep + 1}/{steps.length}
        </div>
      </div>

      {/* Main Preview Area */}
      <div className="bg-black rounded-lg overflow-hidden h-[330px] relative border border-gray-700">
        <AnimatePresence>
          <motion.img 
            key={currentStep}
            src={currentStepData.image}
            alt="Website preview"
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          />
        </AnimatePresence>
          
        {/* Subtle overlay for professional look */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        
        {/* Progress Bar (at the bottom of the image) */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700/50">
           <motion.div
             className="h-full bg-gradient-to-r from-indigo-500 to-blue-500"
             initial={{ width: "0%" }}
             animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
             transition={{ duration: 0.5, ease: 'easeOut' }}
           />
        </div>
        
        {/* Completion badge */}
        {currentStep === steps.length - 1 && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/50 backdrop-blur-md text-white px-6 py-3 rounded-lg text-lg font-medium flex items-center space-x-2 border border-green-500/50"
          >
            <CheckCircle className="h-6 w-6 text-green-400" />
            <span>Website Ready!</span>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default InteractiveHeroDemo;