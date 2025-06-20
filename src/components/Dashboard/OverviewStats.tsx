// src/components/Dashboard/OverviewStats.tsx

import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Globe, TrendingUp } from 'lucide-react';
import Card from '../UI/Card';
import { Website } from '../../contexts/WebsiteContext';

// Reusable MiniBarChart component
const MiniBarChart: React.FC<{ data: number[] }> = ({ data }) => {
  const max = Math.max(...data);
  return (
    <div className="flex items-end space-x-1 h-12">
      {data.map((value, i) => (
        <motion.div
          key={i}
          className="w-full bg-teal-500 rounded-sm"
          initial={{ height: 0 }}
          animate={{ height: `${(value / max) * 100}%` }}
          transition={{ duration: 0.5, delay: i * 0.05 }}
        />
      ))}
    </div>
  );
};

const OverviewStats: React.FC<{ websites: Website[] }> = ({ websites }) => {
    const totalVisits = websites.reduce((sum, site) => sum + site.visits, 0);
    const liveWebsites = websites.filter(site => site.status === 'live').length;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const avgGrowth = websites.length > 0 ? websites.reduce((sum, site) => sum + site.growth, 0) / websites.length : 0;
    const weeklyVisitsData = [120, 180, 150, 220, 200, 280, 300]; // Dummy data for chart

  return (
    <Card className="p-5">
      <h2 className="text-lg font-semibold text-white mb-4">Account Overview</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400"><Globe className="h-6 w-6" /></div>
            <div>
                <p className="text-sm text-muted-foreground">Websites</p>
                <p className="text-xl font-bold text-white">{websites.length}</p>
            </div>
        </div>
        <div className="flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-green-500/10 text-green-400"><TrendingUp className="h-6 w-6" /></div>
            <div>
                <p className="text-sm text-muted-foreground">Live</p>
                <p className="text-xl font-bold text-white">{liveWebsites}</p>
            </div>
        </div>
        <div className="col-span-2 flex items-center space-x-3">
            <div className="p-2 rounded-lg bg-teal-500/10 text-teal-400"><BarChart3 className="h-6 w-6" /></div>
            <div className="flex-1">
                <p className="text-sm text-muted-foreground">Total Visits (7d)</p>
                <p className="text-xl font-bold text-white">{totalVisits.toLocaleString()}</p>
            </div>
            <div className="w-1/2">
                <MiniBarChart data={weeklyVisitsData} />
            </div>
        </div>
      </div>
    </Card>
  );
};

export default OverviewStats;