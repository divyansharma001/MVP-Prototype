import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, Wand2, MessageSquare, Sparkles, Settings, ArrowRight, CheckCircle, Lightbulb, Zap } from 'lucide-react';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';
import { useToast } from '../components/UI/Toast';

const Builder: React.FC = () => {
  const { showToast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [isGenerating, setIsGenerating] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    businessType: '',
    description: '',
    style: '',
    colors: '',
    features: [] as string[],
    pages: [] as string[]
  });

  const steps = [
    { id: 1, title: 'Business Info', icon: MessageSquare, color: 'from-blue-500 to-cyan-500' },
    { id: 2, title: 'Style & Design', icon: Sparkles, color: 'from-purple-500 to-pink-500' },
    { id: 3, title: 'Features', icon: Settings, color: 'from-green-500 to-emerald-500' },
    { id: 4, title: 'Generate', icon: Layout, color: 'from-teal-500 to-blue-500' }
  ];

  const businessTypes = [
    { name: 'Restaurant & Food', icon: '🍽️', description: 'Cafes, restaurants, food delivery' },
    { name: 'Retail & E-commerce', icon: '🛍️', description: 'Online stores, boutiques, marketplaces' },
    { name: 'Professional Services', icon: '💼', description: 'Consulting, legal, accounting' },
    { name: 'Healthcare', icon: '🏥', description: 'Clinics, doctors, wellness centers' },
    { name: 'Fitness & Wellness', icon: '💪', description: 'Gyms, yoga studios, spas' },
    { name: 'Creative & Design', icon: '🎨', description: 'Agencies, photographers, artists' },
    { name: 'Technology', icon: '💻', description: 'Software, startups, tech services' },
    { name: 'Non-profit', icon: '❤️', description: 'Charities, foundations, causes' }
  ];

  const styleOptions = [
    { 
      name: 'Modern', 
      description: 'Clean, minimalist design with contemporary elements',
      preview: 'bg-gradient-to-br from-gray-100 to-gray-200',
      accent: 'border-blue-500'
    },
    { 
      name: 'Professional', 
      description: 'Corporate look with structured layout and typography',
      preview: 'bg-gradient-to-br from-blue-50 to-blue-100',
      accent: 'border-indigo-500'
    },
    { 
      name: 'Creative', 
      description: 'Artistic and unique design with bold visual elements',
      preview: 'bg-gradient-to-br from-purple-50 to-pink-50',
      accent: 'border-purple-500'
    },
    { 
      name: 'Classic', 
      description: 'Timeless design with traditional layout patterns',
      preview: 'bg-gradient-to-br from-amber-50 to-orange-50',
      accent: 'border-amber-500'
    }
  ];

  const colorSchemes = [
    { name: 'Ocean Blue', colors: ['#1e40af', '#3b82f6', '#60a5fa'], gradient: 'from-blue-600 to-blue-400' },
    { name: 'Forest Green', colors: ['#166534', '#22c55e', '#4ade80'], gradient: 'from-green-600 to-green-400' },
    { name: 'Sunset Orange', colors: ['#ea580c', '#f97316', '#fb923c'], gradient: 'from-orange-600 to-orange-400' },
    { name: 'Royal Purple', colors: ['#7c3aed', '#a855f7', '#c084fc'], gradient: 'from-purple-600 to-purple-400' },
    { name: 'Classic Gray', colors: ['#374151', '#6b7280', '#9ca3af'], gradient: 'from-gray-600 to-gray-400' }
  ];

  const availableFeatures = [
    { name: 'Online Ordering', description: 'For pickup and delivery orders' },
    { name: 'Reservation System', description: 'Manage bookings and waitlists' },
    { name: 'E-commerce Store', description: 'Sell products with inventory tracking' },
    { name: 'Marketing Automation', description: 'Send automated emails to customers' },
    { name: 'Customer Reviews', description: 'Display testimonials and feedback' },
    { name: 'Service Menu / List', description: 'Showcase what you offer' },
    { name: 'Contact Form & AI Replies', description: 'Let AI help you respond faster' },
    { name: 'Availability Calendar', description: 'Perfect for rentals and appointments' }
  ];
  
  const availablePages = [
    { name: 'About Us', description: 'Tell your story', essential: true },
    { name: 'Services', description: 'What you offer', essential: true },
    { name: 'Portfolio', description: 'Show your work', essential: false },
    { name: 'Contact', description: 'Get in touch', essential: true },
    { name: 'Blog', description: 'Share insights', essential: false },
    { name: 'Privacy Policy', description: 'Legal compliance', essential: false },
    { name: 'FAQ', description: 'Common questions', essential: false },
    { name: 'Team', description: 'Meet the people', essential: false }
  ];

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      handleGenerate();
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleGenerate = async () => {
    setIsGenerating(true);
    showToast('info', 'AI is analyzing your requirements...');
    
    // Simulate AI generation process
    setTimeout(() => {
      showToast('success', 'Generating website structure...');
    }, 1000);
    
    setTimeout(() => {
      showToast('success', 'Creating design elements...');
    }, 2000);
    
    setTimeout(() => {
      showToast('success', 'Optimizing for your industry...');
    }, 3000);
    
    setTimeout(() => {
      setIsGenerating(false);
      showToast('success', 'Website generated successfully! 🎉');
    }, 4000);
  };

  const toggleFeature = (feature: string) => {
    setFormData(prev => ({
      ...prev,
      features: prev.features.includes(feature)
        ? prev.features.filter(f => f !== feature)
        : [...prev.features, feature]
    }));
  };

  const togglePage = (page: string) => {
    setFormData(prev => ({
      ...prev,
      pages: prev.pages.includes(page)
        ? prev.pages.filter(p => p !== page)
        : [...prev.pages, page]
    }));
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
          >
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Business Name *
              </label>
              <motion.input
                type="text"
                value={formData.businessName}
                onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                placeholder="Enter your business name"
                className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50 transition-all duration-200"
                whileFocus={{ scale: 1.02 }}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Business Type *
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {businessTypes.map((type) => (
                  <motion.button
                    key={type.name}
                    onClick={() => setFormData({...formData, businessType: type.name})}
                    className={`p-4 text-left border rounded-xl transition-all duration-200 ${
                      formData.businessType === type.name
                        ? 'border-teal-500/50 bg-teal-500/10 text-white'
                        : 'border-gray-700/50 bg-gray-800/30 text-gray-300 hover:border-gray-600/50 hover:bg-gray-700/30'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{type.icon}</span>
                      <div>
                        <h3 className="font-medium">{type.name}</h3>
                        <p className="text-xs text-gray-400">{type.description}</p>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Business Description
              </label>
              <motion.textarea
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                placeholder="Describe your business, services, and what makes you unique..."
                rows={4}
                className="w-full px-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50 resize-none transition-all duration-200"
                whileFocus={{ scale: 1.01 }}
              />
              <div className="flex items-center space-x-2 mt-2 text-xs text-gray-400">
                <Lightbulb className="h-4 w-4" />
                <span>Tip: Be specific about your services and target audience for better results</span>
              </div>
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
          >
            <div>
              <h3 className="text-lg font-medium text-white mb-4">Choose a Style</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {styleOptions.map((style) => (
                  <motion.button
                    key={style.name}
                    onClick={() => setFormData({...formData, style: style.name})}
                    className={`p-6 text-left border-2 rounded-xl transition-all duration-200 ${
                      formData.style === style.name
                        ? `${style.accent} bg-gray-800/50`
                        : 'border-gray-700/50 bg-gray-800/30 hover:border-gray-600/50'
                    }`}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className={`w-full h-16 rounded-lg mb-4 ${style.preview}`} />
                    <h4 className="font-medium text-white mb-2">{style.name}</h4>
                    <p className="text-sm text-gray-400">{style.description}</p>
                  </motion.button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-white mb-4">Color Scheme</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {colorSchemes.map((scheme) => (
                  <motion.button
                    key={scheme.name}
                    onClick={() => setFormData({...formData, colors: scheme.name})}
                    className={`p-4 text-left border rounded-xl transition-all duration-200 ${
                      formData.colors === scheme.name
                        ? 'border-teal-500/50 bg-teal-500/10'
                        : 'border-gray-700/50 bg-gray-800/30 hover:border-gray-600/50'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="flex space-x-1">
                        {scheme.colors.map((color, index) => (
                          <motion.div
                            key={index}
                            className="w-6 h-6 rounded-full border-2 border-white/20"
                            style={{ backgroundColor: color }}
                            whileHover={{ scale: 1.2 }}
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-white font-medium">{scheme.name}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
          >
            <div>
              <h3 className="text-lg font-medium text-white mb-4">Features to Include</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {availableFeatures.map((feature) => (
                  <motion.button
                    key={feature.name}
                    onClick={() => toggleFeature(feature.name)}
                    className={`p-4 text-left border rounded-xl transition-all duration-200 ${
                      formData.features.includes(feature.name)
                        ? 'border-teal-500/50 bg-teal-500/10'
                        : 'border-gray-700/50 bg-gray-800/30 hover:border-gray-600/50'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-start space-x-3">
                      <motion.div
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center mt-0.5 ${
                          formData.features.includes(feature.name)
                            ? 'border-teal-500 bg-teal-500'
                            : 'border-gray-600'
                        }`}
                        animate={{ scale: formData.features.includes(feature.name) ? 1.1 : 1 }}
                      >
                        {formData.features.includes(feature.name) && (
                          <CheckCircle className="h-3 w-3 text-white" />
                        )}
                      </motion.div>
                      <div>
                        <h4 className="font-medium text-white">{feature.name}</h4>
                        <p className="text-sm text-gray-400">{feature.description}</p>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-white mb-4">Pages to Create</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {availablePages.map((page) => (
                  <motion.button
                    key={page.name}
                    onClick={() => togglePage(page.name)}
                    className={`p-4 text-left border rounded-xl transition-all duration-200 ${
                      formData.pages.includes(page.name) || page.essential
                        ? 'border-teal-500/50 bg-teal-500/10'
                        : 'border-gray-700/50 bg-gray-800/30 hover:border-gray-600/50'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={page.essential}
                  >
                    <div className="flex items-start space-x-3">
                      <motion.div
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center mt-0.5 ${
                          formData.pages.includes(page.name) || page.essential
                            ? 'border-teal-500 bg-teal-500'
                            : 'border-gray-600'
                        }`}
                        animate={{ scale: formData.pages.includes(page.name) || page.essential ? 1.1 : 1 }}
                      >
                        {(formData.pages.includes(page.name) || page.essential) && (
                          <CheckCircle className="h-3 w-3 text-white" />
                        )}
                      </motion.div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h4 className="font-medium text-white">{page.name}</h4>
                          {page.essential && (
                            <span className="text-xs bg-teal-500/20 text-teal-400 px-2 py-1 rounded-full">
                              Essential
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-400">{page.description}</p>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            className="text-center space-y-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <motion.div
              className="bg-gradient-to-r from-teal-500 to-blue-500 rounded-full p-8 w-32 h-32 mx-auto flex items-center justify-center"
              animate={{ 
                rotate: isGenerating ? 360 : 0,
                scale: isGenerating ? [1, 1.1, 1] : 1
              }}
              transition={{ 
                rotate: { duration: 2, repeat: isGenerating ? Infinity : 0, ease: "linear" },
                scale: { duration: 1, repeat: isGenerating ? Infinity : 0 }
              }}
            >
              {isGenerating ? (
                <Zap className="h-16 w-16 text-white" />
              ) : (
                <Wand2 className="h-16 w-16 text-white" />
              )}
            </motion.div>
            
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {isGenerating ? 'Generating Your Website...' : 'Ready to Launch!'}
              </h3>
              <p className="text-gray-400 mb-6">
                {isGenerating 
                  ? 'Our AI is crafting your perfect website. This may take a few moments.'
                  : "We're putting everything together. Your new business hub is almost ready!"
                }
              </p>
            </div>

            {isGenerating && (
              <motion.div
                className="w-full bg-gray-700 rounded-full h-2 overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 4, ease: "easeInOut" }}
                />
              </motion.div>
            )}

            <Card className="p-6 text-left max-w-md mx-auto">
              <h4 className="font-medium text-white mb-4">Summary</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Business:</span>
                  <span className="text-white">{formData.businessName || 'Not specified'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Type:</span>
                  <span className="text-white">{formData.businessType || 'Not specified'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Style:</span>
                  <span className="text-white">{formData.style || 'Not specified'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Colors:</span>
                  <span className="text-white">{formData.colors || 'Not specified'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Features:</span>
                  <span className="text-white">{formData.features.length} selected</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Pages:</span>
                  <span className="text-white">{formData.pages.length + 3} total</span>
                </div>
              </div>
            </Card>
          </motion.div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header */}
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold text-white mb-2">Launch Your Business Website</h1>
        <p className="text-gray-400">Get online in just a few minutes with our guided setup.</p>
      </motion.div>

      {/* Progress Steps */}
      <div className="flex items-center justify-center mb-8">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <motion.div
              className={`flex items-center space-x-2 ${
                currentStep >= step.id ? 'text-teal-400' : 'text-gray-500'
              }`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  currentStep >= step.id 
                    ? 'border-teal-400 bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-lg' 
                    : 'border-gray-600 text-gray-500'
                }`}
                whileHover={{ scale: 1.1 }}
                animate={{ 
                  scale: currentStep === step.id ? [1, 1.1, 1] : 1,
                }}
                transition={{ 
                  scale: { duration: 1, repeat: currentStep === step.id ? Infinity : 0 }
                }}
              >
                {currentStep > step.id ? (
                  <CheckCircle className="h-5 w-5" />
                ) : (
                  <step.icon className="h-5 w-5" />
                )}
              </motion.div>
              <span className="text-sm font-medium hidden sm:block">{step.title}</span>
            </motion.div>
            {index < steps.length - 1 && (
              <motion.div
                className={`w-12 h-0.5 mx-2 ${
                  currentStep > step.id ? 'bg-gradient-to-r from-teal-400 to-blue-400' : 'bg-gray-600'
                }`}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: currentStep > step.id ? 1 : 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Step Content */}
      <Card className="p-8 mb-8 min-h-[500px]">
        <AnimatePresence mode="wait">
          {renderStepContent()}
        </AnimatePresence>
      </Card>

      {/* Navigation */}
      <motion.div
        className="flex justify-between"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Button
          variant="secondary"
          onClick={handleBack}
          disabled={currentStep === 1 || isGenerating}
        >
          Back
        </Button>
        
        <Button
          variant="gradient"
          onClick={handleNext}
          icon={currentStep === 4 ? Layout : ArrowRight}
          disabled={
            isGenerating ||
            (currentStep === 1 && (!formData.businessName || !formData.businessType)) ||
            (currentStep === 2 && (!formData.style || !formData.colors))
          }
          loading={isGenerating}
        >
          {currentStep === 4 ? 'Launch My Website' : 'Next'}
        </Button>
      </motion.div>
    </div>
  );
};

export default Builder;