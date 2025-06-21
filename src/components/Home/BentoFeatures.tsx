// src/components/Home/BentoFeatures.tsx

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Globe, Layout, Sparkles } from 'lucide-react'; // Using icons you have

// For the "AI Builder" card -> Replaces AnimatedBeam
export const BuilderAnimation = () => {
    const items = [
        { Icon: Layout, text: "Generating Layout" },
        { Icon: Sparkles, text: "Choosing Colors" },
        { Icon: Globe, text: "Deploying Globally" },
        { Icon: CheckCircle, text: "Website Ready!" },
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    const item = items[index];

    return (
        <div className="absolute inset-0 flex items-center justify-center p-4 bg-black/10 transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center text-center text-gray-400"
                >
                    <item.Icon className={`w-16 h-16 mb-4 ${item.text === 'Website Ready!' ? 'text-green-400' : 'text-indigo-400'}`} />
                    <p className="font-mono text-sm">{item.text}</p>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};


// For the "Customization" card -> Cleaned up
export const SparklesAnimation = () => (
    <div className="absolute inset-0 flex items-center justify-center -z-10 opacity-50 [mask-image:radial-gradient(ellipse_at_center,white_20%,transparent_70%)]">
        <div className="grid grid-cols-4 gap-2">
            {['#6366f1', '#38bdf8', '#34d399', '#f59e0b', '#a855f7', '#ec4899', '#ef4444', '#f9fafb'].map((color, i) => (
                <motion.div
                    key={color}
                    className="w-10 h-10 rounded-full"
                    style={{ backgroundColor: color }}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.5, ease: 'easeOut' }}
                />
            ))}
        </div>
    </div>
);


// For the "Analytics" card -> Cleaned up
export const ChartAnimation = () => {
    const data = [12, 19, 3, 5, 2, 3, 9, 15, 6];
    const max = Math.max(...data);
    return (
        <div className="absolute bottom-0 left-0 right-0 h-1/2 flex items-end justify-center space-x-2 p-4 [mask-image:linear-gradient(to_top,white_50%,transparent_100%)]">
            {data.map((value, i) => (
                <motion.div
                    key={i}
                    className="w-full bg-teal-500 rounded-t-sm"
                    initial={{ height: 0 }}
                    animate={{ height: `${(value / max) * 100}%` }}
                    transition={{ duration: 0.5, delay: i * 0.1 + 0.5, type: 'spring', stiffness: 150 }}
                />
            ))}
        </div>
    );
};