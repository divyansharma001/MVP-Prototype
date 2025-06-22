import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Save, Eye, PanelLeft, X } from 'lucide-react'; 

import Button from '../components/UI/Button';
import { useWebsites } from '../contexts/WebsiteContext';
import { useToast } from '../components/UI/Toast';

import BakeryTemplate from '../templates/BakeryTemplate';
import { bakeryDemoData } from '../data/bakeryDemoData';
import type { BakeryTemplateData } from '../templates/BakeryTemplate';
import EditorSidebar from '../components/Editor/EditorSidebar';

const Editor: React.FC = () => {
  const navigate = useNavigate();
  const { addWebsite } = useWebsites();
  const { showToast } = useToast();

  const [siteData, setSiteData] = useState<BakeryTemplateData>(bakeryDemoData);
  const [selectedElement, setSelectedElement] = useState<string | null>('global');
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleUpdate = (path: string, value: any) => {
    setSiteData(prevData => {
        const newData = JSON.parse(JSON.stringify(prevData));
        const keys = path.split('.');
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
      name: siteData.global.bakeryName,
      url: `${siteData.global.bakeryName.toLowerCase().replace(/\s+/g, '-')}.webcraft.site`,
      status: 'live' as const,
      visits: Math.floor(Math.random() * 3000),
      lastUpdated: '1m ago',
      thumbnail: 'https://i.imgur.com/uR1m2Ao.png',
      growth: parseFloat((Math.random() * 20 - 5).toFixed(1)),
    };
    addWebsite(newSite);
    showToast('success', `Website "${siteData.global.bakeryName}" saved!`);
    navigate('/dashboard');
  };

  return (
    <div className="relative flex h-screen bg-gray-900 text-white lg:flex-row flex-col">
      <EditorSidebar
        data={siteData}
        onUpdate={handleUpdate}
        selectedElement={selectedElement}
        onSelectElement={setSelectedElement}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <main className="flex-1 flex flex-col h-full">
        <div className="flex-shrink-0 bg-gray-800 p-2 sm:p-3 flex justify-between items-center border-b border-gray-700">
          <div className="flex items-center gap-2">
            <Button
                variant="ghost"
                size="sm"
                className="lg:hidden !p-2" 
                onClick={() => setIsSidebarOpen(true)}
            >
                <PanelLeft className="h-5 w-5"/>
            </Button>
            <p className="text-sm font-semibold hidden sm:block">Live Editor</p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" icon={Eye} className="hidden sm:inline-flex">Preview</Button>
            <Button variant="gradient" onClick={handleSave} icon={Save} size="sm">
              <span className="hidden sm:inline">Save & Exit</span>
              <span className="sm:hidden">Save</span>
            </Button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto bg-gray-200 p-2 sm:p-4">
            <div className="mx-auto w-full bg-white shadow-lg rounded-md overflow-hidden">
                <BakeryTemplate
                    data={siteData}
                    onSelectElement={(id) => {
                        setSelectedElement(id);
                        if (window.innerWidth < 1024) {
                            setIsSidebarOpen(true);
                        }
                    }}
                />
            </div>
        </div>
      </main>
    </div>
  );
};

export default Editor;