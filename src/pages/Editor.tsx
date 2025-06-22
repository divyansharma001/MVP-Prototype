import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Save, Eye, Monitor, Tablet, Smartphone } from 'lucide-react';

import Button from '../components/UI/Button';
import { useWebsites } from '../contexts/WebsiteContext';
import { useToast } from '../components/UI/Toast';

import BakeryTemplate from '../templates/BakeryTemplate';
import type { BakeryTemplateData } from '../templates/BakeryTemplate'; 
import EditorSidebar from '../components/Editor/EditorSidebar';


const Editor: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addWebsite } = useWebsites();
  const { showToast } = useToast();
  const builderData = location.state?.formData as any;

   const createInitialSiteData = (data: any): BakeryTemplateData => {
    return {
      ...data, 
      hero: {
        title: data.businessName || 'Your Awesome Business',
        subtitle: data.description.split('.')[0] || 'The best service in town.',
        image: 'https://images.pexels.com/photos/808941/pexels-photo-808941.jpeg',
      },
      menu: {
        title: 'Our Menu',
        items: [ 
          { name: 'Sourdough Loaf', description: 'Classic, rustic, and crusty.', price: '$8.00' },
          { name: 'Croissant', description: 'Buttery, flaky, and delicious.', price: '$4.50' },
          { name: 'Chocolate Chip Cookie', description: 'A timeless favorite.', price: '$3.00' },
        ]
      }
    };
  };

  
    const [siteData, setSiteData] = useState<BakeryTemplateData | null>(
    builderData ? createInitialSiteData(builderData) : null
    );
  const [selectedElement, setSelectedElement] = useState<string | null>(null);

  if (!siteData) {
    return <div>Loading editor...</div>;
  }

  const handleUpdate = (path: string, value: any) => {
    const keys = path.split('.');
    setSiteData(prevData => {
        if (!prevData) return null;
        const newData = { ...prevData };
        let currentLevel: any = newData;
        for (let i = 0; i < keys.length - 1; i++) {
            currentLevel = currentLevel[keys[i]];
        }
        currentLevel[keys[keys.length - 1]] = value;
        return newData;
    });
  };

  const handleSave = () => {
    const newSite = {
      id: new Date().toISOString(),
      name: siteData.businessName,
      url: `${siteData.businessName.toLowerCase().replace(/\s+/g, '-')}.webcraft.site`,
      status: 'live' as const,
      visits: Math.floor(Math.random() * 3000),
      lastUpdated: '1m ago',
      thumbnail: 'https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg',
      growth: parseFloat((Math.random() * 20 - 5).toFixed(1)),
    };
    addWebsite(newSite);
    showToast('success', `Website "${siteData.businessName}" saved!`);
    navigate('/dashboard');
  };

 

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <EditorSidebar 
        data={siteData} 
        onUpdate={handleUpdate} 
        selectedElement={selectedElement}
        onSelectElement={setSelectedElement} 
      />

      <main className="flex-1 flex flex-col">
        <div className="flex-shrink-0 bg-gray-800 p-3 flex justify-between items-center border-b border-gray-700">
          <div></div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" icon={Eye}>Preview</Button>
            <Button variant="gradient" onClick={handleSave} icon={Save}>Save & Exit</Button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto bg-gray-100 p-4">
            <div className="mx-auto w-full bg-white shadow-lg">
                <BakeryTemplate 
                    data={siteData} 
                    onSelectElement={setSelectedElement}
                />
            </div>
        </div>
      </main>
    </div>
  );
};

export default Editor;