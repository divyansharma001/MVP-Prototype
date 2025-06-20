// src/contexts/WebsiteContext.tsx

import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { initialWebsites } from '../data/mockData';

export interface Website {
  id: string;
  name: string;
  url: string;
  status: 'live' | 'draft' | 'maintenance';
  visits: number;
  lastUpdated: string;
  thumbnail: string;
  growth: number;
}

type Action = 
  | { type: 'ADD_WEBSITE'; payload: Website }
  | { type: 'DELETE_WEBSITE'; payload: string };

type State = {
  websites: Website[];
};

interface WebsiteContextType extends State {
  addWebsite: (website: Website) => void;
  deleteWebsite: (websiteId: string) => void;
}

const WebsiteContext = createContext<WebsiteContextType | null>(null);

const websiteReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_WEBSITE':
      return {
        ...state,
        websites: [action.payload, ...state.websites],
      };
    case 'DELETE_WEBSITE':
      return {
        ...state,
        websites: state.websites.filter(site => site.id !== action.payload),
      };
    default:
      return state;
  }
};

export const useWebsites = () => {
  const context = useContext(WebsiteContext);
  if (!context) {
    throw new Error('useWebsites must be used within a WebsiteProvider');
  }
  return context;
};

export const WebsiteProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(websiteReducer, { websites: initialWebsites });

  const addWebsite = (website: Website) => {
    dispatch({ type: 'ADD_WEBSITE', payload: website });
  };

  const deleteWebsite = (websiteId: string) => {
    dispatch({ type: 'DELETE_WEBSITE', payload: websiteId });
  };

  return (
    <WebsiteContext.Provider value={{ ...state, addWebsite, deleteWebsite }}>
      {children}
    </WebsiteContext.Provider>
  );
};