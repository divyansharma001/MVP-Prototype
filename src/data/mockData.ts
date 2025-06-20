// src/data/mockData.ts

import { Website } from '../contexts/WebsiteContext';

export const initialWebsites: Website[] = [
    {
      id: '1',
      name: 'Bloom & Petal Florist',
      url: 'bloomandpetal.com',
      status: 'live',
      visits: 2890,
      lastUpdated: '1h ago',
      thumbnail: 'https://images.pexels.com/photos/1083822/pexels-photo-1083822.jpeg?auto=compress&cs=tinysrgb&w=400',
      growth: 15.2
    },
    {
      id: '2',
      name: 'Quantum Tech Solutions',
      url: 'quantumtech.dev',
      status: 'draft',
      visits: 0,
      lastUpdated: '3d ago',
      thumbnail: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
      growth: 0
    },
    {
      id: '3',
      name: 'The Daily Grind Cafe',
      url: 'dailygrind.cafe',
      status: 'live',
      visits: 1723,
      lastUpdated: '8h ago',
      thumbnail: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=400',
      growth: -2.1
    },
     {
      id: '4',
      name: 'Apex Fitness Gym',
      url: 'apexfitness.fit',
      status: 'maintenance',
      visits: 540,
      lastUpdated: '5m ago',
      thumbnail: 'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=400',
      growth: 5.8
    }
];

export const activityFeed = [
    { id: 1, type: 'publish', text: 'New blog post on "Bloom & Petal"', time: '15m ago' },
    { id: 2, type: 'user', text: '5 new user signups this morning', time: '1h ago' },
    { id: 3, type: 'comment', text: 'New comment on "The Daily Grind Cafe"', time: '3h ago' },
    { id: 4, type: 'create', text: 'New website "Apex Fitness Gym" created', time: '1d ago' },
];