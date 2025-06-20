/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Globe, BarChart3, Settings, Trash2, ExternalLink, Sparkles, TrendingUp, Users, Clock } from 'lucide-react';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';
import Modal from '../components/UI/Modal';
import { useToast } from '../components/UI/Toast';

interface Website {
  id: string;
  name: string;
  url: string;
  status: 'live' | 'draft' | 'maintenance';
  visits: number;
  lastUpdated: string;
  thumbnail: string;
  growth: number;
}

const Dashboard: React.FC = () => {
  const { showToast } = useToast();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [websites] = useState<Website[]>([
    {
      id: '1',
      name: 'My Restaurant',
      url: 'myrestaurant.com',
      status: 'live',
      visits: 1247,
      lastUpdated: '2 hours ago',
      thumbnail: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=400',
      growth: 12.5
    },
    {
      id: '2',
      name: 'Tech Store',
      url: 'techstore.com',
      status: 'draft',
      visits: 0,
      lastUpdated: '1 day ago',
      thumbnail: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400',
      growth: 0
    },
    {
      id: '3',
      name: 'Fitness Club',
      url: 'fitnessclub.com',
      status: 'live',
      visits: 892,
      lastUpdated: '5 hours ago',
      thumbnail: 'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=400',
      growth: 8.3
    }
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live': return 'bg-green-500/80';
      case 'draft': return 'bg-yellow-500/80';
      case 'maintenance': return 'bg-red-500/80';
      default: return 'bg-gray-500/80';
    }
  };

  const handleCreateWebsite = () => {
    setIsCreateModalOpen(false);
    showToast('success', 'Redirecting to AI website builder...');
    // In a real app, you would navigate here, e.g., using useNavigate()
  };

  const handleDeleteWebsite = (name: string) => {
    showToast('error', `${name} has been deleted`);
    // In a real app, you would filter the websites state here
  };

  const totalVisits = websites.reduce((sum, site) => sum + site.visits, 0);
  const liveWebsites = websites.filter(site => site.status === 'live').length;
  const avgGrowth = websites.length > 0 ? websites.reduce((sum, site) => sum + site.growth, 0) / websites.length : 0;

  const stats = [
    { 
      title: 'Total Websites', 
      value: websites.length, 
      icon: Globe, 
      color: 'from-teal-500 to-cyan-500',
      change: '+2 this month'
    },
    { 
      title: 'Total Visits', 
      value: totalVisits.toLocaleString(), 
      icon: BarChart3, 
      color: 'from-blue-500 to-indigo-500',
      change: `+${avgGrowth.toFixed(1)}%`
    },
    { 
      title: 'Live Websites', 
      value: liveWebsites, 
      icon: TrendingUp, 
      color: 'from-green-500 to-emerald-500',
      change: 'All operational'
    },
    { 
      title: 'Active Users', 
      value: '2.4K', 
      icon: Users, 
      color: 'from-purple-500 to-pink-500',
      change: '+18%'
    }
  ];

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      {/* Header */}
      <motion.div
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white">Dashboard</h1>
          <p className="text-gray-400 mt-1">Welcome back, John. Here's your website overview.</p>
        </div>
        <Button
          variant="gradient"
          icon={Plus}
          onClick={() => setIsCreateModalOpen(true)}
          className="mt-4 sm:mt-0"
        >
          Create Website
        </Button>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <Card key={stat.title} className="p-5" delay={index * 0.05}>
            <div className="flex items-center justify-between">
              <div className={`p-2.5 rounded-lg bg-gradient-to-br ${stat.color} opacity-80`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <span className="text-xs font-medium text-green-400">{stat.change}</span>
            </div>
            <div className="mt-4">
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-sm text-gray-400">{stat.title}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Websites Grid */}
      <div>
        <motion.h2
          className="text-xl font-semibold text-white mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          Your Websites
        </motion.h2>
        
        {websites.length === 0 ? (
          <Card className="p-12 text-center">
            <Globe className="h-16 w-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-white mb-2">No websites yet</h3>
            <p className="text-gray-400 mb-6">Create your first website to get started</p>
            <Button onClick={() => setIsCreateModalOpen(true)}>
              Create Your First Website
            </Button>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {websites.map((website, index) => (
                <motion.div
                  key={website.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className="overflow-hidden group flex flex-col h-full">
                    <div className="aspect-video bg-gray-700 relative overflow-hidden">
                      <img
                        src={website.thumbnail}
                        alt={`${website.name} thumbnail`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>
                    
                    <div className="p-5 flex flex-col flex-grow">
                      <div className="flex-grow">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-white text-lg group-hover:text-indigo-400 transition-colors">
                            {website.name}
                          </h3>
                           <div className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(website.status)}`}>
                            <div className="w-1.5 h-1.5 bg-white rounded-full" />
                            <span className="capitalize">{website.status}</span>
                          </div>
                        </div>
                        <a href={`//${website.url}`} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 hover:text-indigo-400 flex items-center space-x-1">
                          <span>{website.url}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                      
                      <div className="border-t border-gray-800 my-4"></div>

                      <div className="flex justify-between text-sm text-gray-400">
                        <div className="flex items-center space-x-1.5">
                          <BarChart3 className="w-4 h-4" />
                          <span>{website.visits.toLocaleString()} visits</span>
                        </div>
                        <div className="flex items-center space-x-1.5">
                          <Clock className="w-4 h-4" />
                          <span>{website.lastUpdated}</span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>

      <Modal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        title="Create a New Website"
        size="md"
      >
        <div className="space-y-6">
          <p className="text-gray-300">
            Choose how you'd like to create your new website:
          </p>
          
          <div className="space-y-4">
            <motion.button
              onClick={handleCreateWebsite}
              className="w-full p-6 text-left border border-gray-700/80 rounded-xl hover:border-indigo-500/50 hover:bg-gray-800/50 transition-all duration-300 group"
              whileHover={{ y: -2 }}
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-teal-500 to-blue-500">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-white mb-1">AI Website Generator</h3>
                  <p className="text-sm text-gray-400">Answer a few questions and let AI do the rest.</p>
                </div>
              </div>
            </motion.button>
            
            <motion.button
              className="w-full p-6 text-left border border-gray-700/80 rounded-xl hover:border-indigo-500/50 hover:bg-gray-800/50 transition-all duration-300 group"
              whileHover={{ y: -2 }}
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-medium text-white mb-1">Start with a Template</h3>
                  <p className="text-sm text-gray-400">Choose from a library of professional designs.</p>
                </div>
              </div>
            </motion.button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Dashboard;