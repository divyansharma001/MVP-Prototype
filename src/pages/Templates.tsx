import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Eye, Zap, Star, Heart, Download } from 'lucide-react';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';
import { useToast } from '../components/UI/Toast';
import { useNavigate } from 'react-router-dom';

interface Template {
  id: string;
  name: string;
  category: string;
  preview: string;
  tags: string[];
  isPremium: boolean;
  rating: number;
  downloads: number;
  isFavorite: boolean;
  isAvailable: boolean;
}

const Templates: React.FC = () => {
  const { showToast } = useToast();
  const navigate = useNavigate(); 
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [favorites, setFavorites] = useState<string[]>([]);

  const templates: Template[] = [
    {
      id: '1',
      name: 'The Artisan Bakery',
      category: 'food',
      preview: 'https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Online-ordering', 'Food-Delivery', 'Menu', 'Bakery'],
      isPremium: false,
      rating: 4.9,
      downloads: 2156,
      isFavorite: false,
      isAvailable: true
    },
    {
      id: '2',
      name: 'Chic Nail & Beauty Bar',
      category: 'salon',
      preview: 'https://images.pexels.com/photos/3997388/pexels-photo-3997388.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['services', 'appointments', 'booking', 'gallery'],
      isPremium: false,
      rating: 4.8,
      downloads: 1247,
      isFavorite: false,
      isAvailable: false
    },
    {
      id: '3',
      name: 'The Modern Boutique',
      category: 'retail',
      preview: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['e-commerce', 'inventory', 'fashion', 'shipping-api'],
      isPremium: true,
      rating: 4.7,
      downloads: 1892,
      isFavorite: false,
      isAvailable: false
    },
    {
      id: '4',
      name: 'Lakeside Cabin Rentals',
      category: 'rentals',
      preview: 'https://images.pexels.com/photos/2413837/pexels-photo-2413837.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['rentals', 'availability', 'booking', 'retreat'],
      isPremium: true,
      rating: 4.9,
      downloads: 987,
      isFavorite: false,
      isAvailable: false
    },
    {
      id: '5',
      name: 'Local Coffee Roasters',
      category: 'food',
      preview: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['e-commerce', 'menu', 'cafe', 'local'],
      isPremium: false,
      rating: 4.8,
      downloads: 1543,
      isFavorite: true,
      isAvailable: false
    },
    {
      id: '6',
      name: 'City Fresh Florist',
      category: 'retail',
      preview: 'https://images.pexels.com/photos/1083822/pexels-photo-1083822.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['delivery', 'online-ordering', 'e-commerce', 'gifts'],
      isPremium: false,
      rating: 4.6,
      downloads: 634,
      isFavorite: false,
      isAvailable: false
    }
  ];

  const categories = [
    { value: 'all', label: 'All Templates', count: templates.length },
    { value: 'food', label: 'Restaurants & Cafes', count: templates.filter(t => t.category === 'food').length },
    { value: 'salon', label: 'Salons & Beauty', count: templates.filter(t => t.category === 'salon').length },
    { value: 'retail', label: 'Retail & E-commerce', count: templates.filter(t => t.category === 'retail').length },
    { value: 'rentals', label: 'Rentals & Bookings', count: templates.filter(t => t.category === 'rentals').length }
  ];

  const filteredTemplates = templates.filter(template => {
    const matchesSearch = template.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         template.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

   const handleUseTemplate = (template: Template) => {
    if (!template.isAvailable) {
      showToast('info', 'This template is coming soon!');
      return;
    }
    if (template.isPremium) {
      showToast('warning', 'This is a premium template. Upgrade to use it.');
      return;
    }

    showToast('success', `Loading the ${template.name} editor...`);
    navigate('/editor');
  };


  const handlePreview = (template: Template) => {
     // For now, Preview and Use Template will do the same thing.
     handleUseTemplate(template);
  };

  const toggleFavorite = (templateId: string) => {
    setFavorites(prev => 
      prev.includes(templateId) 
        ? prev.filter(id => id !== templateId)
        : [...prev, templateId]
    );
    showToast('success', 'Favorites updated');
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-3xl font-bold text-white mb-2">Website Templates</h1>
        <p className="text-gray-400">Choose from our collection of professionally designed templates</p>
      </motion.div>

      {/* Search and Filter */}
      <motion.div
        className="flex flex-col lg:flex-row gap-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <motion.input
            type="text"
            placeholder="Search templates..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50 transition-all duration-200"
            whileFocus={{ scale: 1.02 }}
          />
        </div>
        
        <div className="relative">
          <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="pl-12 pr-8 py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50 appearance-none min-w-[200px] transition-all duration-200"
          >
            {categories.map(category => (
              <option key={category.value} value={category.value}>
                {category.label} ({category.count})
              </option>
            ))}
          </select>
        </div>
      </motion.div>

      {/* Templates Grid */}
      <AnimatePresence mode="wait">
        {filteredTemplates.length > 0 ? (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {filteredTemplates.map((template, index) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                layout
              >
                <div className={`relative ${!template.isAvailable ? 'opacity-60' : ''}`}>
            {!template.isAvailable && (
              <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/50 rounded-lg">
                <span className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-semibold border border-gray-600">
                  Coming Soon
                </span>
              </div>
            )}
                <Card className="overflow-hidden group hover-card">
                  <div className="relative aspect-video bg-gray-700 overflow-hidden">
                    <motion.img
                      src={template.preview}
                      alt={`${template.name} preview`}
                      className="w-full h-full object-cover transition-transform duration-500"
                      whileHover={{ scale: 1.1 }}
                    />
                    
                    {/* Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <div className="flex space-x-3">
                        <Button
                          variant="secondary"
                          size="sm"
                          onClick={() => handlePreview(template)}
                          disabled={!template.isAvailable || template.isPremium} 
                          icon={Eye}
                        >
                          Preview
                        </Button>
                        <Button
                          variant="gradient"
                          size="sm"
                          onClick={() => handleUseTemplate(template)}
                          disabled={!template.isAvailable || template.isPremium} 
                        >
                          Use Template
                        </Button>
                      </div>
                    </motion.div>

                    {/* Premium Badge */}
                    {template.isPremium && (
                      <motion.div
                        className="absolute top-3 right-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1 shadow-lg"
                        initial={{ scale: 0, rotate: -10 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                      >
                        <Zap className="h-3 w-3" />
                        <span>Premium</span>
                      </motion.div>
                    )}

                    {/* Favorite Button */}
                    <motion.button
                      onClick={() => toggleFavorite(template.id)}
                      className="absolute top-3 left-3 p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-all duration-200"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Heart
                        className={`h-4 w-4 ${
                          favorites.includes(template.id) || template.isFavorite
                            ? 'fill-red-500 text-red-500'
                            : 'text-white'
                        }`}
                      />
                    </motion.button>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="font-semibold text-white text-lg mb-1 group-hover:text-teal-400 transition-colors">
                          {template.name}
                        </h3>
                        <div className="flex items-center space-x-3 text-sm text-gray-400">
                          <div className="flex items-center space-x-1">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span>{template.rating}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Download className="h-4 w-4" />
                            <span>{template.downloads.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {template.tags.map((tag) => (
                        <motion.span
                          key={tag}
                          className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-full border border-gray-600/30"
                          whileHover={{ scale: 1.05, backgroundColor: 'rgba(20, 184, 166, 0.1)' }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handlePreview(template)}
                        className="flex-1"
                      >
                        Preview
                      </Button>
                      <Button
                        variant={template.isPremium ? "secondary" : "gradient"}
                        size="sm"
                        onClick={() => handleUseTemplate(template)}
                        className="flex-1"
                        disabled={template.isPremium}
                      >
                        {template.isPremium ? 'Premium' : 'Use Template'}
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto mb-4 opacity-50" />
            </div>
            <h3 className="text-lg font-medium text-white mb-2">No templates found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Templates;