// src/components/Dashboard/WebsiteCard.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, BarChart3, Clock, TrendingUp, TrendingDown, MoreHorizontal, Edit, Settings, Trash2 } from 'lucide-react';
import { Website } from '../../contexts/WebsiteContext';

interface WebsiteCardProps {
  website: Website;
  onDelete: (id: string, name: string) => void;
}

const statusStyles = {
    live: { dot: 'bg-green-400', text: 'text-green-400' },
    draft: { dot: 'bg-yellow-400', text: 'text-yellow-400' },
    maintenance: { dot: 'bg-orange-400', text: 'text-orange-400' },
};

const WebsiteCard: React.FC<WebsiteCardProps> = ({ website, onDelete }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const status = statusStyles[website.status];
  const GrowthIcon = website.growth >= 0 ? TrendingUp : TrendingDown;
  const growthColor = website.growth >= 0 ? 'text-green-400' : 'text-red-400';

  return (
    <motion.div 
        className="bg-card/50 border border-border rounded-lg flex space-x-4 p-4 transition-all duration-300 hover:bg-card hover:shadow-lg hover:-translate-y-1"
        layout
    >
        <img src={website.thumbnail} alt={website.name} className="w-24 h-24 object-cover rounded-md flex-shrink-0" />
        <div className="flex-1 flex flex-col justify-between">
            <div>
                <div className="flex justify-between items-start">
                    <h3 className="font-bold text-white text-md mb-1">{website.name}</h3>
                    <div className="relative">
                        <button onClick={() => setMenuOpen(!menuOpen)} onBlur={() => setTimeout(() => setMenuOpen(false), 200)} className="p-1 rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground">
                            <MoreHorizontal className="h-5 w-5" />
                        </button>
                        {menuOpen && (
                            <motion.div
                                className="absolute right-0 mt-2 w-40 bg-secondary border border-border rounded-md shadow-xl z-10 overflow-hidden"
                                initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                            >
                                <a href="#" className="flex items-center w-full px-3 py-2 text-sm text-foreground hover:bg-primary/10"><Edit className="h-4 w-4 mr-2" /> Edit Site</a>
                                <a href="#" className="flex items-center w-full px-3 py-2 text-sm text-foreground hover:bg-primary/10"><Settings className="h-4 w-4 mr-2" /> Settings</a>
                                <button onClick={() => onDelete(website.id, website.name)} className="flex items-center w-full px-3 py-2 text-sm text-red-400 hover:bg-red-500/10"><Trash2 className="h-4 w-4 mr-2" /> Delete</button>
                            </motion.div>
                        )}
                    </div>
                </div>
                {/* <div className="flex items-center space-x-2 text-xs text-muted-foreground"> */}
                    {/* <div className={`w-2 h-2 rounded-full ${status.dot}`}></div> */}
                    {/* <span className={status.text}>{website.status.charAt(0).toUpperCase() + website.status.slice(1)}</span> */}
                    {/* <span className="text-gray-600">•</span> */}
                    {/* <a href={`//${website.url}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary flex items-center"><Globe className="h-3 w-3 mr-1"/>{website.url}</a> */}
                {/* </div> */}
            </div>
            <div className="flex items-center justify-between text-xs text-muted-foreground mt-2">
                <div className="flex items-center" title="Visits"><BarChart3 className="h-3 w-3 mr-1" /> {website.visits.toLocaleString()}</div>
                <div className="flex items-center" title="Growth"><GrowthIcon className={`h-3 w-3 mr-1 ${growthColor}`} /> {website.growth}%</div>
                <div className="flex items-center" title="Last Updated"><Clock className="h-3 w-3 mr-1" /> {website.lastUpdated}</div>
            </div>
        </div>
    </motion.div>
  );
};

export default WebsiteCard;