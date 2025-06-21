import React, { useState, useEffect } from 'react';
import { ArrowRight, Code, Zap, Globe, Rocket } from 'lucide-react';

const UniqueCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    const stepTimer = setInterval(() => {
      setActiveStep(prev => (prev + 1) % 3);
    }, 2000);
    
    return () => {
      clearTimeout(timer);
      clearInterval(stepTimer);
    };
  }, []);

  const handleGenerateWebsite = () => {
    console.log('Starting website generation...');
  };

  const steps = [
    { icon: Code, text: "Describe your vision", color: "text-blue-400" },
    { icon: Zap, text: "AI builds instantly", color: "text-yellow-400" },
    { icon: Globe, text: "Launch & scale", color: "text-green-400" }
  ];

  return (
    <section className="py-16 bg-black relative overflow-hidden">
      {/* Dynamic background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-1/4 w-2 h-2 bg-indigo-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-teal-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          
          {/* Asymmetric layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left side - Interactive process */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-teal-500/20 rounded-2xl blur-xl"></div>
              
              <div className="relative bg-gray-900/60 backdrop-blur-md border border-gray-700/50 rounded-2xl p-8">
                <h3 className="text-lg font-semibold text-gray-300 mb-6">How it works</h3>
                
                <div className="space-y-4">
                  {steps.map((step, index) => (
                    <div 
                      key={index}
                      className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-500 ${
                        activeStep === index 
                          ? 'bg-gray-800/80 border border-gray-600' 
                          : 'bg-gray-800/40 border border-transparent'
                      }`}
                    >
                      <div className={`p-2 rounded-lg ${
                        activeStep === index 
                          ? 'bg-indigo-500/20' 
                          : 'bg-gray-700/50'
                      }`}>
                        <step.icon className={`w-5 h-5 ${
                          activeStep === index ? step.color : 'text-gray-400'
                        }`} />
                      </div>
                      <span className={`font-medium ${
                        activeStep === index ? 'text-white' : 'text-gray-400'
                      }`}>
                        {step.text}
                      </span>
                      {activeStep === index && (
                        <div className="ml-auto">
                          <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side - CTA */}
            <div className="text-left">
              <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-2 mb-6">
                <Rocket className="w-4 h-4 text-indigo-400" />
                <span className="text-sm font-medium text-indigo-300">Launch Today</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                Stop dreaming.
                <br />
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
                  Start building.
                </span>
              </h2>

              <p className="text-lg text-gray-400 mb-8 max-w-md">
                Transform your ideas into stunning websites in minutes, not months. 
                No coding, no complexity—just pure creativity.
              </p>

              {/* Unique button design */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleGenerateWebsite}
                  className="group relative bg-white text-black font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:bg-gray-100 hover:scale-105 active:scale-95 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Generate Website
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>

                <button className="text-gray-400 hover:text-white font-medium px-4 py-4 border border-gray-700 hover:border-gray-600 rounded-xl transition-all duration-300">
                  View Examples
                </button>
              </div>

              {/* Social proof ticker */}
              <div className="mt-8 flex items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full border-2 border-black"></div>
                    <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full border-2 border-black"></div>
                    <div className="w-6 h-6 bg-gradient-to-r from-teal-500 to-indigo-500 rounded-full border-2 border-black"></div>
                  </div>
                  <span>10,000+ creators</span>
                </div>
                <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                <span>Free to start</span>
                <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                <span>No credit card</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueCTA;