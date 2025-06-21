import React, { useEffect, useRef, useState, CSSProperties, ReactNode } from 'react';
import { motion, AnimatePresence, useMotionValue } from 'framer-motion';
import { Type, Layout, Image, Zap, CheckCircle } from 'lucide-react';

// Pointer Component (Fixed)
import type { HTMLMotionProps } from 'framer-motion';

interface PointerProps extends Omit<HTMLMotionProps<"div">, "style"> {
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}

function Pointer({ className, style, children, ...props }: PointerProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && containerRef.current) {
      const parentElement = containerRef.current.parentElement;

      if (parentElement) {
        parentElement.style.cursor = "none";

        const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
          // Get the bounding rect of the parent to calculate relative position
          const rect = parentElement.getBoundingClientRect();
          x.set(e.clientX - rect.left);
          y.set(e.clientY - rect.top);
        };

        const handleMouseEnter = () => {
          setIsActive(true);
        };

        const handleMouseLeave = () => {
          setIsActive(false);
        };

        parentElement.addEventListener("mousemove", handleMouseMove);
        parentElement.addEventListener("mouseenter", handleMouseEnter);
        parentElement.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          parentElement.style.cursor = "";
          parentElement.removeEventListener("mousemove", handleMouseMove);
          parentElement.removeEventListener("mouseenter", handleMouseEnter);
          parentElement.removeEventListener("mouseleave", handleMouseLeave);
        };
      }
    }
  }, [x, y]);

  return (
    <>
      <div ref={containerRef} className="absolute inset-0 pointer-events-none" />
      <AnimatePresence>
        {isActive && (
          <motion.div
            className="absolute pointer-events-none z-50 transform -translate-x-1/2 -translate-y-1/2"
            style={{
              top: y,
              left: x,
              ...style,
            }}
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0,
              opacity: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30,
            }}
            {...props}
          >
            {children || (
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="1"
                viewBox="0 0 16 16"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                className={`rotate-[-70deg] stroke-white text-blue-500 drop-shadow-lg ${className || ''}`}
              >
                <path d="M14.082 2.182a.5.5 0 0 1 .103.557L8.528 15.467a.5.5 0 0 1-.917-.007L5.57 10.694.803 8.652a.5.5 0 0 1-.006-.916l12.728-5.657a.5.5 0 0 1 .556.103z" />
              </svg>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Define steps with more descriptive icons and placeholder images
const steps = [
  { text: 'Describe your business...', icon: Type, image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop' },
  { text: 'AI generates a unique layout...', icon: Layout, image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop' },
  { text: 'AI curates stunning visuals...', icon: Image, image: 'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&h=400&fit=crop' },
  { text: 'Optimizing for performance...', icon: Zap, image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop' },
  { text: 'Your website is ready!', icon: CheckCircle, image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=400&fit=crop' },
];

const InteractiveHeroDemo = () => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const currentStepData = steps[currentStep];

  return (
    <motion.div 
      className="bg-gray-900/50 border border-gray-800 rounded-2xl p-4 h-[500px] shadow-2xl shadow-indigo-500/10 backdrop-blur-sm relative overflow-hidden"
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
      
      {/* Custom Pointer Component */}
      <Pointer className="fill-blue-500" />
    </motion.div>
  );
};

export default InteractiveHeroDemo;